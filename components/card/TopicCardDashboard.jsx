import React from 'react'
import { DateIconBlogDetailPage, Timer } from '@/utils/icons/icons'
import Player from '../features/Player'

const TopicCardDashboard = ({ value, setSelectedTopic }) => {
    return (
        <div onClick={() => { setSelectedTopic(value), console.log("Topic Selected ::: ", value) }}
            // min-w-[85vw]max - w - [85vw] sm: min - w - [280px] sm: max - w - [280px]
            className='flex-grow sm:basis-[30%] flex flex-col bg-white p-3 gap-7 rounded-md shadow-md border-2'
        >
            <div className=''>
                <Player url={value?.url} playable={true} />
            </div>

            <div className='text-[#6F6B80] text-[13px] text-justify flex flex-col gap-2'>
                <div className="text-[#231F40] font-bold text-[12px] sm:text-[14px] line-clamp-2">{value?.name}</div>
                <div className="flex gap-3 items-center">
                    <DateIconBlogDetailPage w={16} />
                    <p>Rs . {value?.video_price}</p>
                </div>
            </div>
        </div>
    )
}

export default TopicCardDashboard