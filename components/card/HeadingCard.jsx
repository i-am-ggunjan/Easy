import React from 'react'

const HeadingCard = ({ heading, subHeading }) => {
    return (
        <section className='sm:my-10 mt-4 relative'>
            <article>
                <img src="/BlogImage.png" alt="" className='w-full h-[130px] sm:h-[155px] absolute -z-40 object-fit' />
                <main className='flex flex-col gap-2 lg:px-44 md:px-30 sm:px-10 px-4 py-12'>
                    <div className='text-[#231F40] sm:text-[38px] text-[26px] font-extrabold'>{heading}</div>
                    {/* <div className='text-[#878398] sm:text-[20px] text-[16px] font-[500]'>{subHeading}</div> */}
                </main>
            </article>
        </section>
    )
}

export default HeadingCard