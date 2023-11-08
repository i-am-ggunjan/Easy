import React from 'react'
import { ArrowIcon, DateIcon } from "@/utils/icons/icons"
import dynamic from 'next/dynamic'
const LinkCard = dynamic(() => import('./LinkCard'), { ssr: false })

const CourseCardOne = ({ data, current_item }) => {

  return (
    <>
      <div className='group/first w-[85vw] md:w-[310px]  rounded-md shadow-sm sm:shadow-lg'>
        <div className=' h-[190px] overflow-hidden rounded-t-lg'>
          <img src={current_item?.image} alt="" className='w-[100%] h-[100%] object-cover transform duration-700 transition-transform hover:scale-[1.3]' />
        </div>
        <main className='flex flex-col gap-3 px-5 py-5'>
          <div className='text-[#231F40] sm:text-[17px] font-bold transition duration-700 group-hover/first:text-[#0A405C]'>{data?.stream}</div>

          <div className='text-[13px] text-[#6F6B80] text-justify line-clamp-3'>{current_item?.des}..........</div>

          <main className='flex justify-between'>
            <main className='flex gap-1 items-center'>
              <div><DateIcon /></div>
              <div className='text-[13px] text-[#6F6B80] font-[600]'>{data?.courses} Full Courses</div>
            </main>
            <div className='relative group/under overflow-hidden'>
              <main className='flex items-center gap-1'>
                <LinkCard path={current_item?.path} />
                <div><ArrowIcon /></div>
              </main>
              <div className="w-full h-1 bg-[#FFC81D] transform translate-y-1/2 -translate-x-[150px] group-hover/under:translate-x-0 duration-700 transition-transform origin-center"></div>
            </div>
          </main>
        </main>
      </div></>
  )
}

export default CourseCardOne