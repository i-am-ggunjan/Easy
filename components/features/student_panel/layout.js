import useDrawer from '@/components/hooks/useDrawer';
import useMediaQuery from '@/components/hooks/useMediaQuery';
import useModal from '@/components/hooks/useModal';
import { setToken, setUser } from '@/store/slices/user';
import { studentAuthKey } from '@/utils/consts';
import { CalendarIcon, DashboardIcon, DashOverviewIcon, DashCourseIcon, DashMaterialIcon, DashLectueIcon, DashReportIcon, DashDoubtIcon, DashAssignmentIcon, DashAnalyticIcon, DashPaymentIcon, DashFacultyIcon, HambergerIconsCross, SearchIcon, SettingIcon, StudentDashboardDropDown, DashNotificationIcon, DashMessageIcon, DashCalenderIcon, DashLogoutIcon, DashSettingIcon, DashProfileIcon } from '@/utils/icons/icons';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const breakpoints = {
  isSmallScreen: '(max-width: 899px)',
};

const NavigationList = ({ menuList }) => {
  const [activePage, setActivePage] = useState(1)

  return (
    <>
      <div className="flex flex-col gap-3 mt-10 py-3">
        {menuList?.map((menu, index) => {
          return (
            <Link href={menu?.path} onClick={() => { setActivePage(index + 1) }} key={menu.id} className={`${activePage === index + 1 ? `bg-gradient-to-r from-[#FFC81D60] to-[#FFC81D15]` : ``}  flex items-center cursor-pointer hover:bg-gradient-to-r from-[#FFC81D60] to-[#FFC81D15]  rounded-md px-3 py-2`}>
              <div className="flex items-center gap-4 flex-1">
                <span>{menu.icon()}</span>
                <div className="text-white">
                  {menu?.title}
                </div>
              </div>
              {menu?.children && (
                <span>
                  <StudentDashboardDropDown />
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </>
  )
};

export default function StuLayoutCMP({ children }) {
  const [openCalender, closeCalender, CalenderWrapper] = useModal()
  const { isSmallScreen } = useMediaQuery(breakpoints);
  const [openDrawer, closeDrawer, NavigationBar] = useDrawer();
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, token } = useSelector((_) => _.appState);

  useEffect(() => {
    if (!user) {
      router.replace('/auth/login');
    }
  }, [token]);

  const logoutNow = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student/logout`, {}, { headers: { "eh-auth-token": token } })

      console.log("Logout Res ::: ", response)
      if (response?.status === 200) {
        localStorage.removeItem(studentAuthKey);
        dispatch(setToken(null));
        dispatch(setUser(null));
      }
      // localStorage.removeItem(studentAuthKey);
      // dispatch(setToken(null));
      // dispatch(setUser(null));

    } catch (error) {
      console.log("Error ::: ", error)
    }
  };

  return (
    <>
      <div className="flex">
        {!isSmallScreen && (
          <aside className="w-[300px] max-w-[300px] sticky top-0 py-4 px-3 max-h-[100vh] overflow-custom-style  overflow-y-auto bg-[#0B405D] flex flex-col">
            <div className="flex-1">
              <Link href={'/'}>
                <Image
                  alt="easy hai online logo"
                  width={220}
                  height={130}
                  src="/logo/light.webp"
                  priority={true} // added for removing warning
                />
              </Link>
              <NavigationList menuList={menuList} />
            </div>
            <div className="mt-10 flex flex-col gap-3 px-3 pb-4">
              <div className="flex items-center gap-4 flex-1 cursor-pointer">
                <span>
                  <DashSettingIcon />
                </span>
                <p className="text-white">Settings</p>
              </div>
              <div
                onClick={logoutNow}
                className="flex items-center gap-4 flex-1 cursor-pointer"
              >
                <span>
                  <DashLogoutIcon />
                </span>
                <p className="text-white">Logout</p>
              </div>
            </div>
          </aside>
        )}
        <main className="basis-[100%]">
          <header className="sticky top-0 z-[100] border-b-[1px] border-slate-300 bg-white flex items-center py-4 px-6 gap-5">
            {!isSmallScreen && (
              <div className="flex-[2] font-bold">
                <h1>Welcome back</h1>
                <h3>Hi, {user?.name?.firstName} {user?.name?.lastName}</h3>
              </div>
            )}
            {isSmallScreen && (
              <div onClick={openDrawer}>
                <h1>Menu</h1>
              </div>
            )}
            {!isSmallScreen && (
              <div className="flex-[4]">
                <div className="flex items-center shadow-md border-[1px] border-[rgba(111, 107, 1)] rounded-lg px-5 gap-2">
                  <span>
                    <SearchIcon h={20} w={20} />
                  </span>
                  <input className="flex-1 py-2 outline-none" placeholder="Search..." />
                </div>
              </div>
            )}
            <div className="flex-[3] flex items-center justify-end gap-3">
              <span onClick={openCalender} className="bg-[#0B405D] p-3 rounded-full cursor-pointer  relative group">
                <DashCalenderIcon w={20} h={20} />
              </span>
              <span className="bg-[#0B405D] p-3 rounded-full cursor-pointer  relative group">
                <DashNotificationIcon />
                <div className={`w-72 h-72 border-2 bg-slate-200 shadow-lg absolute right-0 top-[45px] hidden group-hover:block overflow-y-scroll p-3 text-justify text-[14px]`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto vero dolorum eveniet maiores porro doloremque, veniam maxime, expedita quo rerum reprehenderit quos, amet obcaecati dignissimos adipisci sequi optio. Accusantium a similique debitis ex autem est nemo fugiat molestias fugit voluptatibus repellendus quaerat optio exercitationem ea, quae voluptatum sint labore deleniti distinctio consequatur laborum! Hic, voluptatum nobis voluptatem harum illum porro commodi libero distinctio laudantium recusandae tempora totam nemo ad aliquam, necessitatibus, saepe nesciunt mollitia doloremque pariatur ipsa deserunt eos labore corrupti architecto! Expedita asperiores nemo deserunt natus, cupiditate mollitia eaque, ullam, nam facere ducimus molestias quos porro ex voluptates illum.
                </div>
              </span>
              <span className="bg-[#0B405D] p-3 rounded-full cursor-pointer relative group">
                <DashMessageIcon />
                <div className={`w-72 h-72 border-2 bg-slate-200 shadow-lg absolute right-0 top-[45px] hidden group-hover:block`}></div>
              </span>
              <div className='rounded-full relative group'>
                <img
                  src="/ProfilePic.png"
                  alt="Profile Pic"
                  className="rounded-full ml-6 w-14 object-cover cursor-pointer"
                />
                <div className={`border-2 p-3 bg-white text-[#6F6B80] rounded-md shadow-2xl absolute right-0 top-[52px] hidden group-hover:block`}>
                  <div className='flex flex-col gap-2 whitespace-nowrap font-semibold'>
                    <Link href={`/dashboard/my-profile`} className='flex gap-4 items-center px-3 py-1 rounded-sm hover:bg-gradient-to-r from-[#FFC81D60] to-[#FFC81D15]'>
                      <span><DashProfileIcon /></span>
                      <div>My Profile</div>
                    </Link>
                    <div className='flex gap-4 items-center  cursor-pointer px-3 py-1 rounded-sm hover:bg-gradient-to-r from-[#FFC81D60] to-[#FFC81D15]'>
                      <span><DashSettingIcon color='#6F6B80' /></span>
                      <div>Account Settings</div>
                    </div>
                    <div className='border-2'></div>
                    <div onClick={logoutNow} className='flex gap-4 items-center  cursor-pointer  hover:bg-gradient-to-r from-[#FFC81D60] to-[#FFC81D15] px-3 py-1 rounded-sm'>
                      <span><DashLogoutIcon color="#6F6B80" /></span>
                      <div>Log out</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="min-h-[100vh] overflow-y-auto p-5 bg-[#F7F8FF]">{children}</div>
        </main>
      </div>


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
                priority={true} // added for removing warning
              />
            </div>
          </div>
          <div className="mx-10 mt-10 ">
            <NavigationList menuList={menuList} className="" />
          </div>
        </div>
      </NavigationBar>

      {/* Calender Modal */}
      <CalenderWrapper width={`w-[800px] h-[600px]`}>
        <div className='text-end'><button onClick={closeCalender}>Close</button></div>
        <img src='https://img.freepik.com/free-vector/colorful-2023-calendar-template-printable-style_1017-40661.jpg?w=2000' />
      </CalenderWrapper>
    </>
  );
}

const menuList = [
  {
    id: 1,
    title: 'Overview',
    icon: DashOverviewIcon,
    path: '/dashboard',
    children: null,
  },
  {
    id: 2,
    title: 'Courses',
    icon: DashCourseIcon,
    path: '/dashboard/courses/micro-courses',
    children: null,
  },
  {
    id: 3,
    title: 'Material',
    icon: DashMaterialIcon,
    path: '/dashboard/material',
    children: null,
  },
  {
    id: 4,
    title: 'Lectures',
    // icon: DashLectureIcon,
    icon: DashLectueIcon,
    path: '/dashboard/lectures',
    children: [
      {
        id: 1,
        title: 'Live Lectures',
        icon: DashboardIcon,
        path: '/',
      },
      {
        id: 1,
        title: 'Recorded Lectures',
        icon: DashboardIcon,
        path: '/',
      },
    ],
  },
  {
    id: 5,
    title: 'Report',
    icon: DashReportIcon,
    path: '/dashboard/report',
    children: null,
  },
  {
    id: 6,
    title: 'Doubt',
    icon: DashDoubtIcon,
    path: '/dashboard/doubt/unsolved',
    children: null,
  },
  {
    id: 7,
    title: 'Assignment',
    icon: DashAssignmentIcon,
    path: '/dashboard/assignment',
    children: null,
  },
  {
    id: 8,
    title: 'Analytics',
    icon: DashAnalyticIcon,
    path: '/dashboard/analytics',
    children: null,
  },
  {
    id: 9,
    title: 'Payment',
    icon: DashPaymentIcon,
    path: '/dashboard/payment/passbook',
    children: null,
  },
  {
    id: 10,
    title: 'My Mentor',
    icon: DashboardIcon,
    path: '/dashboard/faculty',
    children: null,
  },
];
