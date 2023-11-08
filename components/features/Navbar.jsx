import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { CallIcon, LoginIcon, MagnifyingGlass, DropDownIcon, HambergerIcons, HambergerIconsCross, CallIconMobile, NestedDropDownIcon, EmailIcon, WhatsappIcon, LocationIcon, FacebookIcon, InstagramIcon, TwitterIcon, LinkdInIcon, WhatsAppCircleIcon, UserAccountIcon, } from '@/utils/icons/icons';
import useModal from '@/components/hooks/useModal';
import useDrawer from '@/components/hooks/useDrawer';
import { navigationMenuList } from '@/utils/db';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [openSearchBar, closeSearchBar, SearchSec] = useModal();
  const [openDrawer, closeDrawer, NavigationBar] = useDrawer();
  const { user } = useSelector((_) => _?.appState);
  const router = useRouter()
  console.log("Router in Navbar ::: ", router)
  return (
    <>
      <NavigationBar isFull={true}>
        <div className="bg-[#0B405D] py-4 h-full">
          <div className="flex items-center px-10">
            <div onClick={closeDrawer}>
              <HambergerIconsCross />
            </div>

            <div className="flex-1 text-center flex justify-center">
              <Image
                alt="easy hai online logo"
                width={200}
                height={140}
                src="/logo/light.webp"
              />
            </div>
          </div>
          <div className="mx-10 mt-10">
            <NavigationMenu isSmall list={navigationMenuList} />
          </div>
        </div>
      </NavigationBar>
      <SearchSec width={`w-[600px]`}>
        <div className='flex flex-col gap-5'>
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Search Your Query....
          </h2>
          <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0A405C] sm:text-sm sm:leading-6" />
          <div className="flex justify-between items-center">
            <button onClick={closeSearchBar} className="text-white px-3 py-1 rounded-md bg-red-600 text-[14px]">
              Close
            </button>
            <button onClick={null} type="submit"
              className="flex justify-center   rounded-md bg-[#0A405C] px-6 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search Now
            </button>
          </div>
        </div>
      </SearchSec>
      <div className="hidden lg:block">
        <div className="lg:flex bg-[#0B405D]  justify-between align-middle py-3 px-36">
          <div className="flex gap-4 ml-8">
            <p className="text-white    hover:text-[#FFC81D] cursor-pointer ">
              Transform access to success
            </p>
            <EmailIcon />
            <a href="mailto:info@easyhaionline.com" className="text-white  hover:text-[#FFC81D] cursor-pointer">
              info@easyhaionline.com
            </a>
          </div>
          <div className="flex gap-2 mr-8">
            <main className="flex gap-3 justify-end items-center max-sm:justify-start ">
              <div className="hover:scale-[1.2] hover:bg-[#86EC56]">
                <a
                  target="blank"
                  href="https://api.whatsapp.com/send?phone=9289911131"
                >
                  <WhatsappIcon h={28} w={28} />
                </a>
              </div>
              <div className="hover:scale-[1.2] hover:bg-[#] hover:bg-gradient-to-t from-[#F8A581] to-[#6AC63F]">
                <a
                  target="blank"
                  href="https://www.google.com/maps/place/Easyhai+Online/@28.5811917,77.3157143,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce59ba9ba9201:0x8fbfce511e8ad3ce!8m2!3d28.5811917!4d77.3182892!16s%2Fg%2F11rnnjm3_6?entry=ttu"
                >
                  <LocationIcon h={28} w={28} />
                </a>
              </div>
              <div className="hover:scale-[1.2] hover:bg-[#3B5998]">
                <a
                  target="blank"
                  href="https://www.facebook.com/p/Easyhai-Online-100083709052651/"
                >
                  <FacebookIcon h={28} w={28} />
                </a>
              </div>
              <div className="hover:scale-[1.2] hover:bg-gradient-to-t from-[#B64680] to-[#E8A047]">
                <a
                  target="blank"
                  href="https://www.instagram.com/easyhai_online/"
                >
                  {' '}
                  <InstagramIcon h={28} w={28} />
                </a>
              </div>
              <div className="hover:scale-[1.2] hover:bg-[#1DA1F2]">
                <a target="blank" href="https://twitter.com/easyhaionline">
                  <TwitterIcon h={28} w={28} />
                </a>
              </div>
              <div className="hover:scale-[1.2] hover:bg-[#0077B5]">
                <a
                  target="blank"
                  href="https://in.linkedin.com/company/easy-hai-online"
                >
                  <LinkdInIcon h={28} w={28} />
                </a>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:mx-40 pt-2 flex justify-between items-center">
          <img
            className="w-56 h-12"
            src="https://www.easyhaionline.com/assets/images/LOGO.png"
            alt=""
          />
          <div className="flex gap-32 mr-5">
            <Link href="https://api.whatsapp.com/send?phone=9289911131" className="flex gap-2 items-center" target="_blank">
              <WhatsAppCircleIcon w={40} h={40} />
              <div className="liveText">
                <p className="font-medium">Live Chat</p>
                <p className="font-semibold">With Expert</p>
              </div>
            </Link>

            <Link href="tel:+91 9289911131" className="flex gap-2 items-center">
              <CallIcon w={40} h={40} />
              <div className="liveText">
                <p className="font-medium">Contact Us</p>
                +91 XXXXXXXXXX
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* For Smaller screen */}
      <div className="lg:hidden flex justify-between px-4 py-3 z-[100] sticky top-0 items-center bg-[#0B405D]">
        <Image
          alt="easy hai online logo"
          width={120}
          height={70}
          src="/logo/light.webp"
        />
        <div className="items-center flex gap-4">
          <div
            onClick={openSearchBar}
            className="items-center flex bg-white px-2 py-2 rounded-md  "
          >
            <MagnifyingGlass color="#000" w={20} h={20} />
          </div>
          <Link href="/auth/login">
            <div
              className="items-center flex bg-white px-2 py-2 rounded-md  "
            >
              <UserAccountIcon color="#000" w={20} h={20} />
            </div>
          </Link>
          <p onClick={openDrawer}>
            <HambergerIcons color="#fff" />
          </p>
        </div>
      </div>

      <div
        className={`w-full bg-gradient-to-t z-[100] bg-[rgb(11,73,105)] sticky top-0 hidden lg:block `}
      >
        <div className="navbarContent lg:px-44 md:px-30 sm:px-10 px-4 max-sm:py-2  mt-2 flex sm:justify-between max-sm:justify-between gap-5 sm:gap-8  max-sm:relative">
          <div className=" links max-sm:bg-gradient-to-t from-ngc1 to-ngc2 max-sm:w-full flex max-sm:flex-col gap-8 max-sm:px-5 max-sm:pb-20 py-5 max-sm:absolute max-sm:left-[-700px] top-[0px] max-sm:min-h-screen">
            <NavigationMenu list={navigationMenuList} />
            <div className="max-sm:px-5 flex justify-end sm:hidden ">
              <button className="sm:hidden bg-white p-3 rounded-md px-4 my-2">
                <CallIconMobile className="bg-black p-5 py-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-3 ">
            <div
              // onClick={openModal}
              onClick={openSearchBar}
              className=" items-center flex bg-white px-3 my-3 rounded-md  "
            >
              <MagnifyingGlass color="#000" w={20} h={20} />
            </div>
            <div className="flex gap-4 max-sm:hidden ">
              <Link
                href={user ? '/dashboard' : `/auth/login?callback=${encodeURIComponent(router?.asPath)}`}
                className="items-center hover:bg-[rgb(255,200,29)] flex gap-0.5 bg-white px-3 my-3 rounded-md max-md:hidden"
              >
                <LoginIcon className="" />
                <div className="">
                  <p className="font-bold">
                    {user ? 'Dashboard' : 'Login / Register'}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const NavigationMenu = ({ list, isSmall }) => {

  return (
    <>
      {list?.map((item) => {
        if (item?.children) {
          return (
            <div key={item?.id} className=" group ">
              <Link href={item?.path || '/'}>
                <p

                  className={`text-white ${isSmall ? 'text-lg mt-4 border-b-[rgba(255, 255, 255, 0.2)] pb-2 border-b-[1px]' : 'text-sm'
                    } flex align-middle cursor-pointer hover:text-[#FFC81D] relative`}
                >
                  {item.title}
                  {item?.children && (
                    <span className={`${isSmall ? 'mt-[4px]' : 'mt-[-1px] '}`} >
                      <DropDownIcon w={20} h={20} />
                    </span>
                  )}
                </p>
              </Link>

              {item?.children && (
                <div className="hidden group-hover:block absolute 
                p-3 bg-[rgb(11,73,105)]  pt-8   w-[150px] text-black border-b-[3px] border-yellow-500">
                  <NavigationMenu list={item?.children} />
                </div>
              )}
            </div>

            // <div key={item?.id} className=''>
            //   <Link href={item?.path || '/'}>
            //     <p
            //       className={`text-white  ${isSmall
            //         ? 'text-lg mt-4 border-b-[rgba(255, 255, 255, 0.2)] pb-2 border-b-[1px]'
            //         : 'text-sm'
            //         } flex align-middle cursor-pointer  hover:text-[#FFC81D]`}
            //     >
            //       {item.title}
            //       {item?.children && (
            //         <span className={`${isSmall ? 'mt-[4px]' : 'mt-[-1px]'}`}>
            //           <DropDownIcon w={20} h={20} />
            //         </span>
            //       )}
            //     </p>
            //   </Link>

            //   {item?.children && <NavigationMenu list={item?.children} />}
            // </div>
          );
        } else {
          return (
            <Link key={item?.id} href={item?.path || '/'}>
              <p
                className={`text-white ${isSmall
                  ? 'text-lg mt-4 border-b-[rgba(255, 255, 255, 0.2)] pb-2 border-b-[1px]'
                  : 'text-sm'
                  } cursor-pointer hover:text-[#FFC81D]`}
              >
                {item.title}
              </p>
            </Link>
          );
        }
      })}
    </>
  );
};
