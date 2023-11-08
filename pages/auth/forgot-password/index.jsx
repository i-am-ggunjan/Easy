import useAlert from '@/components/hooks/useAlert';
import { useLoader } from '@/components/hooks/useLoader';
import { validatePhoneNumber } from '@/utils/common-function';
import Axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function index() {
  const router = useRouter();
  const [creds, setCreds] = useState({});
  const [errors, setErrors] = useState({});
  const [openLoader, closeLoader, Loader] = useLoader();
  const [openAlert, AlertWrapper] = useAlert();
  const onSubmitSendOtp = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(creds?.mobile)) {
      openAlert('Enter Valid Mobile Number!', 'error');
      setErrors({ ...errors, text: 'Enter Valid Mobile Number!' });
      return;
    }
    try {
      openLoader('Sending OTP, Please wait!');
      const { data } = await Axios.put(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student/sendotp`,
        {
          phoneNumber: creds?.mobile,
        }
      );
      if (data?.status == 200) {
        closeLoader();
        return router.push(`/auth/change-password?phone=${creds?.mobile}`);
      } else {
        openAlert('Internet connection issue!', 'error');
        closeLoader();
      }
    } catch (error) {
      openAlert('Something went wrong!', 'error');
      closeLoader();
    }
  };
  return (
    <>
      <Loader />
      <AlertWrapper />
      <div className="flex flex-wrap flex-col md:flex-row">
        <div className="basis-1/2 bg-[#FFF]  hidden md:block">
          <div className="w-[ 500px] p-7">
            <img
              className="p-12 mt-12"
              src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-4652.jpg?w=740&t=st=1698323562~exp=1698324162~hmac=1d4fa28b7947063a6d328eb2cc9192b7891cd37ed1abe5ee5dc5cda24310dda0"
            />

          </div>
        </div>
        <div className="basis-1/2 bg-[#FFC81933] justify-center items-center">
          <div
            className="bg-[#FFF] 
                    m-[20px]  md:m-[80px] md:p-[50px] md:rounded-[20px] rounded-md"
          >
            <div className="p-5 md:p-0">
              <Link href="/auth/login">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2223/2223615.png"
                  className="h-7 cursor-pointer"
                />
              </Link>
            </div>
            <div className=" text-center p-5 md:p-0">
              <h3 className="md:text-[30px]   text-[25px] text-[#231F40] font-bold ">
                Forgot Password
              </h3>
              <p className="md:w-[300px] m-auto text-sm">
                To reset your password, we need your email or mobile number that
                can be authenticated
              </p>
            </div>
            <div className="w-full max-w-xs m-auto">
              <form
                onSubmit={onSubmitSendOtp}
                className="bg-white  px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 text-[20px]"
                    htmlFor="username"
                  >
                    Phone Number
                  </label>
                  <input
                    className="text-[14px]  appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                    id="username"
                    type="number"
                    placeholder="Enter Your Mobile"
                    required
                    value={creds?.mobile}
                    onChange={(e) => {
                      setCreds({ ...creds, mobile: e.target.value });
                    }}
                  />
                </div>

                <div className="md:w-full">
                  {errors?.text && (
                    <div className="text-red-700 font-bold text-right">
                      <p>{errors?.text}</p>
                    </div>
                  )}
                  <button
                    className="mt-3 w-full shadow  bg-[#0B405D] hover:bg-[rgb(255,200,29)] hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Get Otp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
