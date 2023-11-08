import { MyWalletIcon, PassbookIcon } from '@/utils/icons/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const rechargeHistory = [
    { id: 1, sNo: '01', amount: 5000, date: '20-05-2023', status: 'Successfull' },
    { id: 2, sNo: '02', amount: 59000, date: '20-05-2023', status: 'Successfull' },
    { id: 3, sNo: '03', amount: 550700, date: '20-05-2023', status: 'Unsuccessfull' },
    { id: 4, sNo: '04', amount: 800, date: '20-05-2023', status: 'Successfull' },
    { id: 5, sNo: '05', amount: 68000, date: '20-05-2023', status: 'Successfull' },
    { id: 6, sNo: '06', amount: 200, date: '20-05-2023', status: 'Unsuccessfull' },
    { id: 7, sNo: '07', amount: 550700, date: '20-05-2023', status: 'Unsuccessfull' },
    { id: 8, sNo: '08', amount: 5000, date: '20-05-2023', status: 'Unsuccessfull' },
    { id: 9, sNo: '09', amount: 550700, date: '20-05-2023', status: 'Successfull' },
    { id: 10, sNo: '10', amount: 68000, date: '20-05-2023', status: 'Successfull' },
    { id: 11, sNo: '11', amount: 68000, date: '20-05-2023', status: 'Successfull' },
    { id: 12, sNo: '12', amount: 5000, date: '20-05-2023', status: 'Successfull' },
    { id: 13, sNo: '13', amount: 5000, date: '20-05-2023', status: 'Unsuccessfull' },
    { id: 14, sNo: '14', amount: 68000, date: '20-05-2023', status: 'Successfull' },
]

const Wallet = () => {
    const { user, token } = useSelector(state => state?.appState)
    const router = useRouter()
    const [walletAmount, setWalletAmount] = useState(null)

    const walletData = [
        { id: 1, image: '/UseableBalance.png', title: 'Useable Balance', amount: 0 },
        { id: 2, image: '/MyWallet.png', title: 'My Wallet', amount: user?.wallet },
        { id: 3, image: '/MonthlySpending.png', title: 'Monthly Spending', amount: 0 },
    ]

    const handleAddWalletPayment = async (e) => {
        e.preventDefault()
        console.log(walletAmount)

        const order_info = {
            totalAmount: walletAmount,
            payment_for: "wallet",
            studentData: {
                _id: user?._id,
                name: user?.name?.firstName + user?.name?.lastName,
                phoneNumber: user?.phoneNumber,
                email: user?.email
            },
            address: {
                billing_name: user?.name?.firstName + user?.name?.lastName,
                billing_address: user?.address?.line1,
                billing_city: user?.address?.city,
                billing_state: user?.address?.state,
                billing_zip: user?.address?.pinCode,
                billing_country: user?.address?.country,
                billing_tel: user?.phoneNumber,
                billing_email: user?.email,
            },
        }
        console.log("clicked", order_info)
        try {
            console.log("Clicked")
            const data = await fetch(`http://192.168.29.13:8080/api/v1/modules/phonepe`, {
                method: 'POST',
                body: JSON.stringify(order_info),
                headers: {
                    'Content-Type': 'application/json',
                    "eh-auth-token": token
                }
            })
            const response = await data.json()
            console.log("Response", response)
            router.replace(response?.data?.redirectInfo?.url)
        } catch (error) {
            console.log("Error in hitting API ::: ", error)
        }
    }

    return (
        <section>
            <article>
                <main className='flex flex-col gap-8'>
                    <main className='flex flex-wrap justify-between gap-6'>
                        {walletData?.map(value => (
                            <div key={value?.id} className='border-2 border-[#00000030] rounded-lg p-3 flex items-center gap-3 basis-[45%] md:basis-[30%] lg:basis-[22%]'>
                                <Image width={40} height={40} src={value?.image} alt="" className='w-auto h-auto object-contain' />
                                <div>
                                    <div className='text-[#231F40] text-[14px] font-bold'>{value?.title}</div>
                                    <div className='text-[#6F6B80] text-[12px] font-bold'>Rs. {value?.amount}</div>
                                </div>
                            </div>
                        ))}
                    </main>

                    <main className='flex flex-wrap items-center justify-between gap-5'>
                        <form>
                            <input onChange={(e) => setWalletAmount(e.target.value)} type='number' className='py-1 px-4 border-r text-[12px] rounded-l-lg border-2  border-[#00000030] font-bold text-[#6F6B80] outline-none sm:w-32' placeholder='Add amount' />
                            <button onClick={handleAddWalletPayment} className='py-1 px-4 border-l text-[12px] rounded-r-lg border-2 border-[#0A405C] text-white bg-[#0A405C]'>Make Payment</button>
                        </form>
                        <div className='flex gap-3'>
                            <Link href={`/dashboard/payment/wallet`} className='px-3 py-2 text-[13px] border border-[#0A405C] bg-[#0A405C]  text-[#FFC81D] rounded-md flex items-center gap-2'>
                                <MyWalletIcon w={25} h={25} color='#FFC81D' /> <span>Recharge History</span>
                            </Link>
                            <Link href={`/dashboard/payment/passbook`} className='px-8 py-2 text-[13px] border border-[#0A405C]  bg-[rgba(11,64,93,0.20)]   text-[#0A405C] rounded-md flex items-center gap-2 font-bold'>
                                <PassbookIcon w={20} h={20} color='#0B405D' />  <span>Passbook</span>
                            </Link>
                        </div>
                    </main>

                    <div className='border-2 border-[#00000030] rounded-lg p-3 px-5'>
                        <main className='flex justify-between items-center gap-5'>
                            <div className='text-[#231F40] font-bold'>Recharge History</div>
                            <div className='flex gap-3'>
                                <button className='px-3 py-1 text-[13px] border border-[#0A405C] bg-[#0A405C] text-[#FFC81D] rounded-lg'>newest</button>
                                <button className='px-5 py-1 text-[13px] font-bold border border-[#0A405C] bg-[rgba(11,64,93,0.20)]  text-[#0A405C] rounded-lg'>oldest</button>
                            </div>
                        </main>

                        <main className='flex flex-col gap-3 py-6'>
                            <div className='text-[#231F40] text-[15px] font-bold flex justify-between border-b-2 py-2 gap-5'>
                                <div className='basis-[20%]'>S.No</div>
                                <div className='basis-[20%]'>Amount</div>
                                <div className='basis-[20%]'>Date</div>
                                <div className='basis-[20%]'>Status</div>
                            </div>

                            {
                                rechargeHistory?.map(value => (
                                    <div key={value?.id} className='text-[#6F6B80] text-[14px] font-bold flex justify-between border-b py-1'>
                                        <div className='basis-[20%]'>{value?.sNo}</div>
                                        <div className='basis-[20%]'>{value?.amount}</div>
                                        <div className='basis-[20%]'>{value?.date}</div>
                                        <div className={`basis-[20%] ${value?.status === 'Successfull' ? 'text-[#459639]' : 'text-[#D10808]'}`}>{value?.status}</div>
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

export default Wallet

Wallet.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}