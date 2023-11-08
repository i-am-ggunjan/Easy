import React from 'react'
import { DateIconBlogDetailPage, Timer } from '@/utils/icons/icons'

const LecturesCard = () => {
    return (
        <>

            <main className='flex flex-wrap gap-3'>

                <div className='w-[85vw] sm:w-[350px] rounded-md shadow-md'>
                    <div className=' flex items-center bg-white p-3 gap-7 '>
                        <div className='h-[84px] w-[84px] '>
                            <img className='w-[84px] h-[84px] rounded-md' src="https://s3-alpha-sig.figma.com/img/ed6b/932a/2bd869d1a0e76ad52545ffa279f2d217?Expires=1698624000&Signature=jOmsDDA6wWnUmFV4ZBHoGhaGkGQnODpPpZ95noy3vJ0wHLMMJwWnu-Aov7SeIVmt~8CLIEeraIT8nM6ND24THptCY8KWJbvGNsvdTL6uUoaKD-ti6VEEKTSyoqObaa2XaIr0-ZCBTRdXnBsIHmTd~jMjRgKXVUEqw58bFsEOe2NEYtS-phxgwO4-ul9XCzY1O5I~3KimW2fwyZrF1B2OJwC9Hgo~8eVFlFrOrUFlrRmBshh0Gq09qq5UtdCU2-jBE3wFu877ULSFlzn9MbVk2ZkfLajsa36YQaNiXXpBfUl41iCXC3u5dtYFbDSXg2~kAKYz8cUlxkc5qxV5LxWAXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        </div>

                        <div className='text-[#6F6B80] text-[13px] text-justify flex flex-col gap-2'>
                            <div className="text-[#231F40] font-bold text-[16px] sm:text-[18px]">
                                <h1>NCERT Class 8</h1>
                            </div>
                            <div className="flex gap-1 items-center">
                                <Timer w={16} />
                                <p> 4 Topics</p>
                                <Timer w={16} />
                                <p>4/11/23, mon, 4:00pm</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <DateIconBlogDetailPage w={16} />
                                <p>Mrs Rajiv Rawat</p>
                            </div>
                        </div>
                    </div>
                    <div className=' p-2'  >
                        <div className='border border-[#66F6B80] basis-[42%]'></div>
                    </div>
                    <div className='flex justify-between p-2'>
                        <div><h1 className='text-[#EB5E32]'>Basis Class</h1></div>
                        <div>

                            <button className=" w-full shadow  bg-[#0B405D] hover:bg-[rgb(255,200,29)] hover:text-black focus:shadow-outline focus:outline-none text-white  py-1 px-2 rounded" type="submit">
                                Join Now
                            </button>

                        </div>
                    </div>
                </div>

            </main>

        </>
    )
}

export default LecturesCard