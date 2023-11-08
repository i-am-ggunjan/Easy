import React from 'react'
import { DropDownIcon, Bellicon } from '@/utils/icons/icons'
import Link from 'next/link'
import Livelecture from "./livelecture"
import UpcomingLecture from "./upcoming-lecture"
import Previouslecture from "./previous-lecture"


const Lecture = () => {
  return (
    <>
      <div className='flex justify-between'>
        <div className='p-3 mb-3'>
          <h1 className='md:text-[32px] text-[18px] font-bold'>Hi Gaurav</h1>
          <h4 className='text-[11px]'>Explore  lectures</h4>
        </div>
        <div className='flex gap-3 pt-5'>
          <div className="">
            <select id="countries" className=" border-solid border-2 border-[#231F40] cursor-pointer w-full md:w-[170px] bg-[#F5F5F5]  text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected
              >Grade*</option>
              <option >Second Class</option>
              <option >First Class</option>
              <option >Third Class</option>
            </select>
          </div>
          <div className="">
            <select id="countries" className=" border-solid border-2 border-[#231F40] cursor-pointer w-full md:w-[170px] bg-[#F5F5F5]  text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected
              >Subjects*</option>
              <option >Second Class</option>
              <option >First Class</option>
              <option >Third Class</option>
            </select>
          </div>
        </div>
      </div>
      <div className='border-solid border-2 border-[#66F6B80] rounded-[12px] p-3 mb-12'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-[20px] text-[#231F40] font-bold mb-[18px]'>Today Live Lecture</h1>
          </div>
          <div className='flex gap-1 cursor-pointer hover:text-blue-600'>
            <Link href="/dashboard/lecture/livelecture"> <h1>View All</h1></Link>
            <DropDownIcon w={20} h={20} color='black' />
          </div>
        </div>
        <main className='flex md:h-[280px] h-[800px] overflow-y-hidden  flex-wrap justify-between'>

          <Livelecture />

        </main>
      </div>
      <div className='border-solid border-2 border-[#66F6B80] rounded-[12px] p-3 mb-12'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-[20px] text-[#231F40] font-bold mb-[18px]'>Upcoming Lecures</h1>
          </div>
          <div className='flex gap-1 cursor-pointer hover:text-blue-600'>
            <Link href="/dashboard/lecture/upcoming-lecture"> <h1>View All</h1></Link>
            <DropDownIcon w={20} h={20} color='black' />
          </div>
        </div>
        <main className='flex md:h-[280px] h-[800px] overflow-y-hidden  flex-wrap justify-between gap-3'>

          <UpcomingLecture />

        </main>
      </div>
      <div className='border-solid border-2 border-[#66F6B80] rounded-[12px] p-3 mb-12'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-[20px] text-[#231F40] font-bold mb-[18px]'>Previous Lecures</h1>
          </div>
          <div className='flex gap-1 cursor-pointer hover:text-blue-600'>
            <Link href="/dashboard/lecture/previous-lecture"> <h1>View All</h1></Link>
            <DropDownIcon w={20} h={20} color='black' />
          </div>
        </div>
        <main className='flex md:h-[280px] h-[800px] overflow-y-hidden  flex-wrap justify-between gap-3'>

          <Previouslecture />

        </main>
      </div>

    </>
  )
}

export default Lecture

// Lecture.getInitialProps = async () => {
//   return { isStudentDashboard: true };
// };

Lecture.getLayout = function PageLayout(page) {
  return (<>{page}</>)
}