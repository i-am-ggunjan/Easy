import React from 'react'

const Heading = ({ title }) => {
    return (
        <>
            <h3 className='text-[#231F40] font-bold text-[18px] sm:text-xl'>
                {title}
            </h3>
        </>
    )
}

export default Heading