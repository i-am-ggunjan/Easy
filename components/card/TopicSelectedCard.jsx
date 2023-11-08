import React from 'react'
import { DateIconBlogDetailPage, Demoicons, Timer } from '@/utils/icons/icons'
import { useSelector } from 'react-redux'
import useAlert from '@/components/hooks/useAlert';
// import axios from 'axios';
import { useRouter } from 'next/router';
import Player from '../features/Player';

const TopicSelectedCard = ({ data }) => {
    const [openAlert, AlertWrapper] = useAlert();
    const router = useRouter()
    const { user, token } = useSelector(state => state?.appState)
    // console.log("Token :: ", token)
    console.log("User Data ::: ", user)

    const order_info = {
        totalAmount: "11",
        payment_for: "micro-courses",
        studentData: {
            _id: user?._id,
            name: user?.name?.firstName + user?.name?.lastName,
            phoneNumber: user?.phoneNumber,
            email: user?.email
        },
        videoLearnList: {
            index: data?.playlist[0]?.index,
            name: data?.playlist[0]?.name,
            url: data?.playlist[0]?.url,
            videoPlaylistId: data?._id,
            video_price: data?.playlist[0]?.video_price,
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
        }
    }

    console.log("Order Info ::: ", order_info)

    const handleBuy = async (price) => {
        if (!user) {
            openAlert("Please LoggedIn First")
        }
        else {
            try {
                console.log("Clicked")
                const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/phonepe`, {
                    method: 'POST',
                    body: JSON.stringify(order_info),
                    headers: {
                        'Content-Type': 'application/json',
                        "eh-auth-token": token
                    },
                })
                const response = await data.json()
                console.log("Response", response)

                router.replace(response?.data?.redirectInfo?.url)
                // openAlert(`Purchased Successsfully ${price}`)
                // console.log("Inside Selected ::: ", data)
            } catch (error) {
                console.log("Error in hitting API ::: ", error)
            }
        }
    }

    return (
        <div className='border sm:w-[500px] flex max-sm:flex-col items-center bg-white p-3 gap-5 sm:gap-7 rounded-md shadow-2xl'>
            <AlertWrapper />
            <div className='h-32 sm:h-24 w-[100%] sm:w-24'>
                <Player url={data?.playlist[0]?.url} playable={false} />
            </div>

            <main className='flex-1 flex sm:items-center justify-between max-sm:flex-col'>
                <div className='text-[#3d3c42] text-[13px] text-justify flex flex-col gap-1 sm:gap-2'>
                    <div className="text-[#231F40] text-start  font-bold text-[16px] sm:text-[14px]">{data?.playlist[0]?.name}</div>
                    <div className="flex gap-3 items-center">
                        <Timer w={16} />
                        <div>Course Duration <span className='text-[#231F40] font-bold'> {data?.duration}</span></div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <DateIconBlogDetailPage w={16} />
                        <div>Micro Course for <span className='text-[#231F40] font-bold'> Class 8</span></div>
                    </div>
                </div>

                <div className='my-3 flex sm:flex-col gap-4 sm:gap-1 items-center'>
                    <div className='text-[14px] text-[#231F40]  font-bold'>Just {data?.playlist[0]?.video_price}</div>
                    <button onClick={() => handleBuy(data?.playlist[0]?.video_price)} className="bg-[#0A405C] text-white flex items-center gap-1 px-3 py-2 rounded-md">
                        <div className="font-[600] text-[10px] whitespace-nowrap">Buy Now</div>
                        <Demoicons w={20} h={20} />
                    </button>
                </div>
            </main>
        </div>
    )
}

export default TopicSelectedCard