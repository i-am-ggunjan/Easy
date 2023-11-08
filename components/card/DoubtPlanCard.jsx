import React from 'react'
import { useSelector } from 'react-redux'
import { discountCalculation } from '@/utils/common-function'
import { useRouter } from 'next/router'

function DoubtPlanCard({ data }) {
    const { user, token } = useSelector(state => state?.appState)
    console.log("User ::: ", user)
    const router = useRouter()
    const handleBuy = async (doubtData) => {
        const order_info = {
            totalAmount: doubtData?.discountedPrice,
            payment_for: "doubt",
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
            purchasedDoubtPlan: doubtData
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
        <>
            <div className='w-[85vw] sm:w-[377px] h-[168px] 
                 rounded-[13px] mt-6 bg-[#0B405D] border-[#FFC81D] border-[1px] ' style={{ boxShadow: "0 0 7px #FFC81D" }}>
                <div className='p-3 text-white '>
                    <div className='flex justify-between items-center'>
                        <div className='text-[18px]'>{data?.planName}</div>
                        <button onClick={() => handleBuy(data)} className='cursor-pointer text-[#FFC81D] px-2 py-1 rounded-md text-[14px] font-semibold border-[1px] border-[#FFC81D]'>Buy Now</button>
                    </div>
                    <div className='flex gap-7 mt-6 text-[15px]'>
                        <div>₹ {data?.discountedPrice}</div>
                        <div className='line-through text-[#BAB5B5]'>₹ {data?.planPrice}</div>
                    </div>
                    <div className='flex gap-4 justify-between mt-5 text-[15px]'>
                        <div >
                            <div className='text-[#BAB5B5]'>  Discounts</div>
                            <div className=''>{discountCalculation(data?.planPrice, data?.discountedPrice)} %</div>
                        </div>
                        <div>
                            <div className='text-[#BAB5B5]'>Validity</div>
                            <div className=' '>{data?.askDoubtPurchasedValidity} days</div>
                        </div>
                        <div>
                            <div className='text-[#BAB5B5]'> Total Doubts</div>
                            <div>{data?.askDoubtPurchasedNumber}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoubtPlanCard;
