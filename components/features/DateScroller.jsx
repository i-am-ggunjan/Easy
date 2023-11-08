import React, { useState } from 'react'
import { useGetWidth } from '../hooks/useGetWidth';

const DateScroller = () => {
    const [ref, width] = useGetWidth();
    const [date, setDate] = useState([{ date: '01' }, { date: '02' }, { date: '03' }, { date: '04' }, { date: '05' }, { date: '06' }, { date: '07' }, { date: '08' }, { date: '09' }, { date: '10' }, { date: '11' }, { date: '12' }, { date: '13' }, { date: '14' }, { date: '15' }, { date: '16' }, { date: '17' }, { date: '18' }, { date: '19' }, { date: '20' }, { date: '21' }, { date: '22' }, { date: '23' }, { date: '24' }, { date: '25' }, { date: '26' }, { date: '27' }, { date: '28' }, { date: '29' }, { date: '30' },
    ])

    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    const [activeBtn, setActiveBtn] = useState(dayOfMonth)

    return (
        <>
            <div ref={ref}>
                <div className='flex gap-20 justify-between overflow-custom-style overflow-x-scroll px-6 pb-2 md:w-[53vw] w-[84.5vw]'>
                    {
                        date?.map((value, index) => (
                            <button key={index} onClick={() => {
                                setActiveBtn(value?.date)
                                console.log(value?.date)
                            }} className={`${value?.date == activeBtn ? 'text-white' : 'text-[#0B405D]'} border-[#0B405D] border rounded-md ${value?.date == activeBtn ? 'bg-[#0B405D]' : 'bg-[rgba(11,64,93,0.20)]'} p-2 text-[14px] font-bold tracking-[2px]`}>{value?.date}</button>
                        ))
                    }
                </div>
            </div >
        </>
    )
}

export default DateScroller