import useAlert from '@/components/hooks/useAlert';
import { useLoader } from '@/components/hooks/useLoader';
import { validatePhoneNumber } from '@/utils/common-function';
import Axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

function index() {
  const router = useRouter();
  const [registerForm, setRegisterForm] = useState({});
  const [errors, setErrors] = useState({});
  const [openLoader, closeLoader, Loader] = useLoader();
  const [openAlert, AlertWrapper] = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(registerForm?.cnf_password === registerForm?.password)) {
      openAlert('Password Not Matched!', 'error');
      setErrors({ ...errors, text: 'Password Not Matched!' });
      return;
    }
    if (!validatePhoneNumber(registerForm?.mobile)) {
      openAlert('Enter Valid Mobile Number!', 'error');
      setErrors({ ...errors, text: 'Enter Valid Mobile Number!' });
      return;
    }
    openLoader('Validating your credentials...');
    setErrors({ ...errors, text: null });
    try {
      const { data } = await Axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student`,
        {
          firstName: registerForm?.name.split(' ')[0],
          lastName: registerForm?.name.split(' ')[1],
          phoneNumber: registerForm?.mobile,
          email: registerForm?.email,
          password: registerForm?.password,
        }
      );
      if (data?.status == 201) {
        return router.push(
          `/auth/verify?email=${registerForm?.email}&phone=${registerForm?.mobile}`
        );
      } else {
        openAlert(data?.message, 'error');
        setErrors({ ...errors, text: data?.message });
        closeLoader();
        return;
      }
    } catch ({ response: { data: error } }) {
      openAlert(error?.message, 'error');
      setErrors({ ...errors, text: error?.message });
      closeLoader();
      return;
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
              src="/loginimg4.jpg"
            />
            <p className="justify-normal p-10 mt-[-40px] ">
              An affordable education solution that is accessible to everyone.
            </p>
          </div>
        </div>
        <div className="basis-1/2 bg-[#FFC81933] justify-center items-center">
          <div className="bg-[#FFF] m-[20px]  md:m-[60px] md:p-[50px] md:rounded-[40px] rounded-md">
            <div className="p-5 md:p-0">
              <Link href="/auth/login">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2223/2223615.png"
                  className="h-8 cursor-pointer"
                />
              </Link>
            </div>
            <div className=" text-center p-5 md:p-0">
              <h3 className="md:text-[35px]   text-[20px] text-[#231F40] font-bold">
                Create an Account
              </h3>
              <p className="text-[15px]">
                Please enter your monile number to register
              </p>
            </div>
            <div className="w-full max-w-xs m-auto">
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="bg-white md:px-0  px-8  pt-6 md:pb-0 pb-8 md:mb-0 mb-4 flex flex-col gap-3"
              >
                <InputField
                  name="name"
                  placeholder="Enter Your Name"
                  title="Student Name"
                  type="text"
                  value={registerForm?.name}
                  textSetter={setRegisterForm}
                />
                <InputField
                  name="email"
                  placeholder="Enter Your Email"
                  title="Student Email"
                  type="email"
                  value={registerForm?.email}
                  textSetter={setRegisterForm}
                />
                <InputField
                  name="mobile"
                  placeholder="Enter Your Number"
                  title="Phone Number"
                  type="number"
                  value={registerForm?.mobile}
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
                <div className="items-center justify-between">
                  <div className="flex gap-2">
                    <input required type="checkbox" className="p-2" />
                    <p className="text-[12px]">
                      <Link href="/">
                        <span className="text-[#0F71E4] font-bold">
                          Terms & conditions
                        </span>
                      </Link>
                      are use to govern the relationship with your user.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <input required type="checkbox" className="p-2" />
                    <p className="text-[12px]">
                      <Link href="/">
                        <span className="text-[#0F71E4] font-bold">
                          Privacy Policies
                        </span>
                      </Link>
                      <span> </span> are legally required almost everywhere in the world.
                    </p>
                  </div>
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
                    SignUp
                  </button>
                  <div className="flex items-center justify-between mt-3">
                    <div className="border border-[#6F6B80] basis-[42%]"></div>
                    <div className="text-[#231F40] text-[14px] font-bold ">
                      Or
                    </div>
                    <div className="border border-[#6F6B80] basis-[42%]"></div>
                  </div>
                </div>
                <div className="md:w-full flex gap-3 ">
                  <button
                    className="mt-3 w-full shadow hover:bg-[rgb(255,200,29)] hover:text-black    focus:shadow-outline focus:outline-none   py-2 px-4 rounded"
                    type="button"
                  >
                    <img
                      className="h-[30px] m-auto"
                      src="/logo/loginicon.png"
                    />
                  </button>
                  <button
                    className="mt-3 w-full shadow hover:bg-[rgb(255,200,29)] hover:text-black     focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    <img
                      className="h-[30px] m-auto"
                      src="/logo/loginicon2.png"
                    />
                  </button>
                </div>

                <p className="mt-3 text-center text-[rgba(0, 0, 0, 1)] text-md p-1 md:p-0">
                  Already have an account{' '}
                  <span className="font-bold text-[#0F71E4] cursor-pointer">
                    <Link href="/auth/login">Login</Link>
                  </span>
                </p>
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
        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 text-[14px] "
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
