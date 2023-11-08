import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { wrapper } from '../store/index';
import '@/styles/globals.css';
// import Navbar from '@/components/features/Navbar';
// import Footer from '@/components/features/Footer';
// import StuLayoutCMP from '@/components/features/student_panel/layout';
const Navbar = dynamic(() => import('@/components/features/Navbar'))
const Footer = dynamic(() => import('@/components/features/Footer'))
const StuLayoutCMP = dynamic(() => import('@/components/features/student_panel/layout'))

import { useDispatch, useSelector } from 'react-redux';
import { studentAuthKey } from '@/utils/consts';
import axios from 'axios';
import { setToken, setUser } from '@/store/slices/user';
import { useRouter } from 'next/router';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
React.StrictMode = React.Fragment;

function MyApp({ Component, pageProps }) {

  const { token } = useSelector((_) => _.appState);
  const dispatch = useDispatch();
  useEffect(() => {
    const _storageToken = localStorage.getItem(studentAuthKey);

    if (token || _storageToken) {
      fetchStudentWithToken();
    }
  }, [token]);
  const fetchStudentWithToken = async () => {
    try {
      const _storageToken = localStorage.getItem(studentAuthKey);
      if (!_storageToken) {
        return;
      }
      const { data: _resData } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student/loggedIn`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'eh-auth-token': _storageToken,
          },
        }
      );
      if (_resData?.status == 200) {
        dispatch(setUser(_resData?.data));
        dispatch(setToken(_resData?.data?.token || null));
      } else {
        dispatch(setUser(null));
      }
    } catch (error) {
      dispatch(setUser(null));
    }
  };

  if (Component.getLayout) {
    return Component.getLayout(<>
      <StuLayoutCMP>
        <Component {...pageProps} />
      </StuLayoutCMP>
    </>)
  }

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default wrapper.withRedux(MyApp);
