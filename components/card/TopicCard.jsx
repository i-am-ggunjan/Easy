import React from 'react'
import { DateIconBlogDetailPage, Timer } from '@/utils/icons/icons'
import Player from '../features/Player'

const TopicCard = ({ data, setSelectedTopic }) => {
    return (
        <div
            onClick={() => {
                setSelectedTopic(data)
                console.log("Topic Selected ::: ", data)
            }}
            className='min-w-[85vw] max-w-[85vw] sm:min-w-[280px] sm:max-w-[280px] flex flex-col items-center bg-white p-3 gap-7 rounded-md shadow-md border-2'
        >
            <div className='h-[120px] w-[100%]'>
                <Player url={data?.playlist[0]?.url} playable={false} />
            </div>

            <div className='text-[#6F6B80] text-[13px] text-justify flex flex-col gap-2'>
                <div className="text-[#231F40] font-bold text-[12px] sm:text-[14px] line-clamp-2">{data?.playlist[0]?.name}</div>
                <div className="flex gap-3 items-center">
                    <Timer w={16} />
                    <p>{data?.duration} 2 hours</p>
                </div>
                <div className="flex gap-3 items-center">
                    <DateIconBlogDetailPage w={16} />
                    <p>Rs . {data?.playlist[0]?.video_price}</p>
                </div>
            </div>
        </div>
    )
}

export default TopicCard