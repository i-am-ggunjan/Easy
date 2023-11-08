import { Reviewicon } from '@/utils/icons/icons'
import React from 'react'

const FeedBackCard = ({ data }) => {
    return (
        <div className="w-[85vw] md:w-[300px] px-5 py-4 rounded-md overflow-hidden shadow-md shadow-black-200 flex flex-col gap-4 hover:bg-[#ececec] hover:transform duration-700 hover:transition-transform delay-100">
            <div className="flex gap-5">
                <img
                    className="rounded w-16 h-16 object-cover"
                    src={data.img}
                    alt=""
                />
                <div>
                    <h5 className="text-[16px] text-[#231F40] font-bold text-start">{data?.name}</h5>
                    <p className="text-[#FFC81D] text-sm font-bold mt-2">{data.course}</p>
                </div>
            </div>

            <div>
                <q className="text-[12px] sm:text-[12px] text-[#6F6B80] text-justify line-clamp-5">{data?.feedback}</q>
                <div className="flex mt-3 gap-1">
                    <Reviewicon />  <Reviewicon />  <Reviewicon />  <Reviewicon />  <Reviewicon />
                </div>
            </div>

            <div className="px-3 bg-gray-200 text-gray-700 font-bold text-[14px] rounded-full self-start"># {data?.course}</div>
        </div>
    )
}

export default FeedBackCard