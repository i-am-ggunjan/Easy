import { DateIconBlogDetailPage, Demoicons, Timer } from '@/utils/icons/icons'
import React from 'react'
const masterData = [
    {
        img: "/master/masterimg1.png",
        class: "9",
        duration: "22",
        topics: "34"
    },
    {
        img: "/master/masterimg2.png",
        class: "10",
        duration: "44",
        topics: "223"
    },
    {
        img: "/master/masterimg3.png",
        class: "11",
        duration: "32",
        topics: "43"
    },
    {
        img: "/master/masterimg4.png",
        class: "12",
        duration: "34",
        topics: "34"
    },
]


const BookSeatCard = () => {
    return (
        <>
            {masterData?.map((value, index) => (
                <div className='w-[85vw] sm:w-[413px] flex items-center bg-white px-3 py-1 sm:p-5 gap-16 sm:gap-7 rounded-md' key={index}>
                    <div className='h-24 w-24'>
                        <img className='w-24 h-[100%] object-cover' src={value.img} alt="" />
                    </div>

                    <main className='flex-1 flex sm:items-center justify-between max-sm:flex-col'>
                        <div className='text-[#6F6B80] text-[13px] text-justify flex flex-col gap-3'>
                            <div className="text-[#231F40] text-start font-bold text-[20px]">Class {value.class}</div>
                            <div className="flex gap-3 items-center">
                                <Timer w={16} />
                                <p>{value.duration}+ hours</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <DateIconBlogDetailPage w={16} />
                                <p>{value.topics} Topics</p>
                            </div>
                        </div>

                        <button className="bg-[#0A405C] text-white flex items-center gap-1 px-3 py-2 rounded-md my-2">
                            <div className="font-[600] text-[10px]">Book A Seat</div>
                            <Demoicons w={20} h={20} />
                        </button>
                    </main>
                </div>
            ))}</>

    )
}

export default BookSeatCard