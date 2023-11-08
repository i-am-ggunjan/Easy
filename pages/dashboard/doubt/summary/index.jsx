import Doubtheader from '@/components/card/Doubtheader';
import Link from 'next/link';
import React from 'react'

function Summery() {
    return (
        <>
            <Doubtheader />
            <div className='sm:p-5'>
                <div className='bg-[#FFFFFF] rounded-[12px] w-[90vw] sm:w-[894px] sm:h-[430px] border-2'>
                    <div className='h-[25px] bg-[#0B405D] ' style={{ borderRadius: "10px 10px 0px 0px" }}></div>
                    <div className='flex  max-sm:flex-col'>
                        <div className='p-5'>
                            <img className='w-[100%] h-60 sm:w-[259px] sm:h-[332px] rounded-[12px] object-fill' src='/banner/summery.jpg' />
                        </div>
                        <div className='m-[30px] '>
                            <p className='text-[20px] sm:text-[24px] font-semibold'>Your Ask Doubt Summary</p>
                            <div className='border-2 mt-2'></div>
                            <div className='flex items-center gap-3 mt-4'>
                                <p className='sm:text-[20px] font-semibold'>Total Ask Doubt :</p>
                                <p className='sm:text-[24px] font-semibold text-[grey]'>40</p>
                            </div>
                            <div className='flex items-center gap-3  mt-4'>
                                <p className='sm:text-[20px] font-semibold'>Solve Doubt :</p>
                                <p className='sm:text-[24px] font-semibold text-[grey]'>40</p>
                            </div>
                            <div className='flex items-center gap-3  mt-4'>
                                <p className='sm:text-[20px] font-semibold'>Unsolved Doubt :</p>
                                <p className='sm:text-[24px] font-semibold text-[grey]'>40</p>
                            </div>
                            <p className='text-[#A40000] font-semibold mt-3'>Note : you can only ask 5 doubt  per day</p>
                            <p className='text-[#1474A8] mt-3 font-semibold'>4  more doubt(s) left</p>
                            <div className='flex gap-3 mt-3'>
                                <p className='mt-2'> Do You Want To Ask Doubt </p>
                                <div className='flex gap-4'>
                                    <button className='border-2 p-2 w-[70px] rounded-[7px] border-black'>No</button>
                                    <Link href="/ask-doubt">
                                        <button className='border-2 p-2 w-[70px] bg-[#046635] text-white rounded-[7px] '>Yes</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summery;
Summery.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}