import Doubtheader from '@/components/card/Doubtheader'

import Link from 'next/link'
import React from 'react'

const Doubt = () => {
    const Array = [
        {}, {}, {}, {}, {}, {}
    ]
    return (
        <>
            <Doubtheader />

            <div className='flex flex-wrap gap-[68px]  p-2 mt-8 font-semibold '>
                {
                    Array.map(value => (
                        <div className='bg-white rounded-[10px] w-[377px] border-2 flex-grow ' >
                            <div className='flex '>
                                <div className='bg-gradient-to-r from-[#FFC81D] to-[#FADB39]  w-[211px] text-[12px] pl-2 p-1 pr-4' style={{ borderRadius: "8px 0px 20px 0px " }}>Corporate Accounting</div>
                                <div className=''></div>

                            </div>
                            <div className='flex '>
                                <div className='  p-3 '>
                                    <img className='rounded-md w-[140px] h-[74px] object-cover' src='https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph' />
                                </div>
                                <div className=' p-2 text-[13px] font-medium text-[grey]'>
                                    Mam  question number 3 aur 4 ka answ-
                                    er match ni kr rha h aur question numb-
                                    er 5 ka balance sheet match nhi kar rhi
                                    pehel..........
                                </div>
                            </div>
                            <div className='border-[1px] mt-2'></div>
                            <div className='p-2 text-[13px] font-medium text-[grey] '>
                                6 Dec 2023, 5:28 pm
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Doubt

Doubt.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}