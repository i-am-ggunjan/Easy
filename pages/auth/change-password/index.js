import useAlert from '@/components/hooks/useAlert';
import { useLoader } from '@/components/hooks/useLoader';
import Axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function index({ }) {
  const { query, push } = useRouter();
  const { email, phone } = query;
  const [registerForm, setRegisterForm] = useState({});
  const [errors, setErrors] = useState({});
  const [openLoader, closeLoader, Loader] = useLoader();
  const [openAlert, AlertWrapper] = useAlert();
  const changePWHndl = async (e) => {
    e.preventDefault();
    if (!(registerForm?.cnf_password === registerForm?.password)) {
      openAlert('Password Not Matched!', 'error');
      setErrors({ ...errors, text: 'Password Not Matched!' });
      return;
    }
    try {
      openLoader('Updating your password!');
      const { data } = await Axios.put(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student/forgotpass`,
        {
          phoneNumber: phone,
          otpCode: registerForm?.otp,
          password: registerForm?.password,
        }
      );
      console.log("Forgot Data ::: ", data)
      if (data?.status == 200) {
        setErrors({
          ...errors,
          text: null,
        });
        openAlert('Password updated successfully!', 'success');
        closeLoader();
        push('/auth/login');
      } else {
        setErrors({
          ...errors,
          text: 'Something went wrong, please try again!',
        });
        openAlert('Something went wrong, TRY AGAIN!', 'error');
        closeLoader();
      }
    } catch (error) {
      setErrors({ ...errors, text: 'Something went wrong, please try again!' });
      openAlert('Something went wrong, TRY AGAIN!', 'error');
      closeLoader();
    }
  };
  return (
    <>
      <Loader />
      <div className="flex flex-wrap flex-col md:flex-row">
        <div className="basis-1/2 bg-[#FFF]  hidden md:block">
          <div className="w-[500px] p-7">
            <img
              className="p-12 mt-12"
              src="/loginimg3.jpg"
            />
            <p className="justify-normal p-10 mt-[-40px] ">
              Enroll in courses, submit your assignments, pay semesters , and
              keep yourself up to date with latest lectures, and resources.{' '}
            </p>
          </div>
        </div>
        <div className="basis-1/2 bg-[#FFC81933] justify-center items-center">
          <div
            className="bg-[#FFF] 
                    m-[20px]  md:m-[80px] md:p-[50px] md:rounded-[20px] rounded-md"
          >
            <div className="p-5 md:p-0">
              <Link href="/auth/forgotpassword2">
                {' '}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2223/2223615.png"
                  className="h-7 cursor-pointer"
                />
              </Link>
            </div>
            <div className=" text-center p-5 md:p-0">
              <h3 className="md:text-[30px]   text-[25px] text-[#231F40] font-bold">
                Change Password
              </h3>
            </div>

            <div className="w-full max-w-xs m-auto">
              <form
                onSubmit={changePWHndl}
                className="bg-white flex flex-col gap-2  px-8 pt-6 pb-8 mb-4"
              >
                <InputField
                  name="otp"
                  placeholder="Enter Your OTP"
                  title="Verify your OTP"
                  type="text"
                  value={registerForm?.otp}
                  textSetter={setRegisterForm}
                />
                <InputField
                  name="password"
                  placeholder="Password"
                  title="Password"
                  type="password"
                  value={registerForm?.password}
                  textSetter={setRegisterForm}
                />
                <InputField
                  name="cnf_password"
                  placeholder="Confirm Password"
                  title="Confirm Password"
                  type="password"
                  value={registerForm?.cnf_password}
                  textSetter={setRegisterForm}
                />

                <div className="md:w-full mt-5">
                  {errors?.text && (
                    <div className="text-red-700 font-bold text-right">
                      <p>{errors?.text}</p>
                    </div>
                  )}
                  <button
                    className="mt-3 w-full shadow  bg-[#0B405D] hover:bg-[rgb(255,200,29)] hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Save
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

const InputField = ({ title, value, placeholder, name, type, textSetter }) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-1 text-[20px]" htmlFor="username">
        {title}
      </label>
      <input
        className="text-[14px] appearance-none border rounded w-full py-2 px-3 text-gray-700 "
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        required
        value={value || null}
        onChange={(e) => {
          textSetter((_) => ({ ..._, [name]: e.target.value }));
        }}
      />
    </div>
  );
};
