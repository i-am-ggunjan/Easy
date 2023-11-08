import useAlert from '@/components/hooks/useAlert';
import { useLoader } from '@/components/hooks/useLoader';
import Axios from 'axios';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function index({ query }) {
  const { email, phone } = query;
  const [otp, setOtp] = useState({});
  const [openAlert, AlertWrapper] = useAlert();
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const [openLoader, closeLoader, Loader] = useLoader();

  const verifyOtp = async () => {
    try {
      openLoader('Validating your OTP, Please Wait.');
      const values = Object.values(otp);
      const otpCode = values.join('');
      const { data } = await Axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student/otpverification`,
        {
          phoneNumber: phone,
          email,
          otpCode,
        }
      );
      if (data?.status === 200) {
        openAlert(data?.message);
        setErrors({ ...errors, text: null });
        setTimeout(() => {
          router.push('/auth/login');
        }, 1500);
      } else {
        openAlert(data?.message, 'error');
        setErrors({ ...errors, text: data?.message });
      }
      closeLoader();
    } catch (error) {
      setErrors({ ...errors, text: 'Incorrect OTP, please try again!' });
      openAlert('Incorrect OTP, TRY AGAIN!', 'error');
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
              src="https://s3-alpha-sig.figma.com/img/7465/a37a/6b9b251e130b71a6350e6403ca861e63?Expires=1698019200&Signature=pw95rNLXnKuJPbMJEOuGULQL1iR2bqe69xp1JnAWl0rLCTZtfd~U9cWtenbWaknF~RVv0eXNHC7HBDHMV0bpHvhsgCotL0PHnlMMCKqY0lB4Y48W64DlkaFZPG3JlVWW10PXk5NDXVwIy~FBC6O1XeFYfa-LGfzrnlQ~PKpzyGNWzHcNl1pLODBDYUbPhRCGNyOKPC~~Wj5Zc-a1bNUOkjEGHORIz9FmJIV1veQWVqWKtMIkVEtPiiFRL1rX~AY8xRxHS5VSi8V~2T~14LCV2a7Qa3FxlXfYxb8fipV~LVyXkdvtdJd9c7ykFwB29aiYTBlHYOybyF7FRfIHStMqsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
            <p className="justify-normal p-10 mt-[-40px] ">
              Enroll in courses, submit your assignments, pay semesters , and
              keep yourself up to date with latest lectures, and resources.{' '}
            </p>
          </div>
        </div>
        <div className="basis-1/2 bg-[#E8EAFA] justify-center items-center">
          <div
            className="bg-[#FFF] 
                    m-[20px]  md:m-[80px] md:p-[50px] md:rounded-[20px] rounded-md"
          >
            <div className="p-5 md:p-0">
              <Link href="/auth/forgotpassword">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2223/2223615.png"
                  className="h-7 cursor-pointer"
                />
              </Link>
            </div>
            <div className=" text-center p-5 md:p-0">
              <h3 className="md:text-[30px]   text-[25px] text-[#231F40] font-bold">
                Check your {phone ? 'Phone' : 'Email'}
              </h3>
              <p className="md:w-[300px] m-auto text-[12px]">
                We have sent the OTP to the {phone ? 'Phone' : 'email address'}
              </p>
              <p className="mt-5">{phone ? `+91-${phone}` : email}</p>
            </div>

            <div className="w-full max-w-xs m-auto">
              <form className="bg-white  px-8 pt-6 pb-8 mb-4 flex flex-col justify-center items-center">
                <div className="mb-4 flex gap-2">
                  <InputSinglField
                    value={otp?.one}
                    valueKey="one"
                    setter={setOtp}
                  />
                  <InputSinglField
                    value={otp?.two}
                    valueKey="two"
                    setter={setOtp}
                  />
                  <InputSinglField
                    value={otp?.three}
                    valueKey="three"
                    setter={setOtp}
                  />
                  <InputSinglField
                    value={otp?.four}
                    valueKey="four"
                    setter={setOtp}
                  />
                  <InputSinglField
                    value={otp?.five}
                    valueKey="five"
                    setter={setOtp}
                  />
                  <InputSinglField
                    value={otp?.six}
                    valueKey="six"
                    setter={setOtp}
                  />
                </div>

                <div className="md:w-full">
                  {errors?.text && (
                    <div className="text-red-700 font-bold text-right">
                      <p>{errors?.text}</p>
                    </div>
                  )}
                  <button
                    onClick={verifyOtp}
                    className="mt-3 w-full shadow  bg-[#0B405D] hover:bg-[rgb(255,200,29)] hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Verify
                  </button>
                </div>

                <p className="mt-3 text-center text-[rgba(0, 0, 0, 1)] text-xs p-1 md:p-0">
                  Didn’t receieved the code?
                </p>
                <p className="mt-1 text-center text-[rgba(0, 0, 0, 1)] text-xs p-1 md:p-0">
                  <Link href="" className=" font-bold text-blue-500">
                    Resend OTP{' '}
                  </Link>
                  in 01:52
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      s
    </>
  );
}

export default index;

export async function getServerSideProps(context) {
  const { query } = context;
  return {
    props: {
      query,
    },
  };
}

const InputSinglField = ({ value, valueKey, setter }) => {
  return (
    <input
      className="shadow appearance-none border rounded w-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={value}
      onChange={(e) => {
        setter((_) => ({ ..._, [valueKey]: e.target.value }));
      }}
    />
  );
};
