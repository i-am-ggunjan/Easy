import Link from 'next/link'
import React from 'react'

const LinkCard = ({ path }) => {
    return (
        <>
            <Link href={`category/${path}`} className='text-[14px] font-bold text-[#FFC81D]'>Read More</Link>
        </>
    )
}

export default LinkCard