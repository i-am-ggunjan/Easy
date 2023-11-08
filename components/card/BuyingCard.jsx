import React from 'react'

const BuyingCard = ({ image, title, price }) => {
    return (
        <>
            <div className='flex sm:flex-col gap-4 p-2 px-3 max-sm:w-[100%] items-center border-[3px] rounded-lg'>
                <div className="flex justify-center items-center">
                    <img src={image} alt="" className='h-20 w-20 object-cover rounded-lg' />
                </div>
                <div className='flex flex-col sm:items-center'>
                    <div className="text-[#231F40] text-[12px] font-bold uppercase">{title}</div>
                    <div className="text-[13px] text-[#6F6B80]">{price}</div>
                </div>
            </div>
        </>
    )
}

export default BuyingCard