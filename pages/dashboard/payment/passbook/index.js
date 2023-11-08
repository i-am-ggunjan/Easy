import { useGetWidth } from '@/components/hooks/useGetWidth'
import { MyWalletIcon, PassbookIcon, SearchIcon } from '@/utils/icons/icons'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const rechargeHistory = [
    { id: 1, refId: 'EHO-TX-245', date: '28/10/2023', narration: 'CA/CS/CMS', amount: 5000, mode: 'Credit card', status: 'Successfull' },
    { id: 2, refId: 'EHO-TX-245', date: '28/10/2023', narration: 'CA/CS/CMS', amount: 5000, mode: 'Credit card', status: 'Successfull' },
    { id: 3, refId: 'EHO-TX-245', date: '28/10/2023', narration: 'CA/CS/CMS', amount: 5000, mode: 'Credit card', status: 'Successfull' },
    { id: 4, refId: 'EHO-TX-245', date: '28/10/2023', narration: 'CA/CS/CMS', amount: 5000, mode: 'Credit card', status: 'Unsuccessfull' },
    { id: 5, refId: 'EHO-TX-245', date: '28/10/2023', narration: 'CA/CS/CMS', amount: 5000, mode: 'Credit card', status: 'Successfull' },
    { id: 6, refId: 'EHO-TX-245', date: '28/10/2023', narration: 'CA/CS/CMS', amount: 5000, mode: 'Credit card', status: 'Successfull' },
    { id: 7, refId: 'EHO-TX-245', date: '28/10/2023', narration: 'CA/CS/CMS', amount: 5000, mode: 'Credit card', status: 'Successfull' },
]

const Passbook = () => {
    const [tableRef, width] = useGetWidth();

    return (
        <section>
            <article>
                <main className='flex flex-col gap-8'>
                    <main className='flex items-center justify-end gap-5'>
                        <Link href={`/dashboard/payment/wallet`} className='px-3 py-2 text-[13px] font-bold border border-[#0A405C] bg-[rgba(11,64,93,0.20)]  text-[#0A405C] rounded-md flex items-center gap-2'>
                            <MyWalletIcon w={25} h={25} /> <span>Recharge History</span>
                        </Link>
                        <Link href={`/dashboard/payment/passbook`} className='px-8 py-[10.5px] text-[13px] border border-[#0A405C] bg-[#0A405C] text-[#FFC81D] rounded-md flex items-center gap-2'>
                            <PassbookIcon w={20} h={20} />  <span>Passbook</span>
                        </Link>
                    </main>

                    <div className='border-2 border-[#00000030] rounded-lg p-3 px-5'>
                        <main className='flex justify-between items-center gap-5'>
                            <div className='border-2 flex items-center gap-2 px-2 py-1 rounded-md'>
                                <SearchIcon w={20} h={20} />
                                <input placeholder='Search' className='py-1 outline-none text-[14px]' />
                            </div>
                            <button className='px-3 py-[1px] text-[13px] font-bold border border-[#0A405C]  text-[#6F6B80] rounded-md flex items-center'>
                                <MyWalletIcon w={25} h={25} color='#231F40' /> <span>Filter</span>
                            </button>
                        </main>

                        {/* max-sm:w-[300px] */}
                        <main className='flex flex-col gap-3 py-6 overflow-x-auto  scroll-m-6' ref={tableRef}>
                            <div className='text-[#231F40] font-bold text-[15px] flex justify-between border-b-2  gap-5'>
                                <div className='basis-[15%]'>Reference id</div>
                                <div className='basis-[15%]'>Date</div>
                                <div className='basis-[15%]'>Narration</div>
                                <div className='basis-[15%]'>Amount</div>
                                <div className='basis-[15%]'>Mode</div>
                                <div className='basis-[15%]'>Status</div>
                            </div>

                            {
                                rechargeHistory?.map(value => (
                                    <div key={value?.id} className='text-[#6F6B80] text-[13px] font-bold flex justify-between border-b gap-5 py-1'>
                                        <div className=' basis-[15%]'>{value?.refId}</div>
                                        <div className=' basis-[15%]'>{value?.date}</div>
                                        <div className=' basis-[15%]'>{value?.narration}</div>
                                        <div className=' basis-[15%]'>Rs. {value?.amount}</div>
                                        <div className=' basis-[15%]'>{value?.mode}</div>
                                        <div className={`basis-[15%] ${value?.status === 'Successfull' ? 'text-[#459639]' : 'text-[#D10808]'}`}>{value?.status}</div>
                                    </div>
                                ))
                            }
                        </main>
                    </div>
                </main>
            </article>
        </section>
    )
}

export default Passbook

// Passbook.getInitialProps = async () => {
//     return { isStudentDashboard: true };
// };

Passbook.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}