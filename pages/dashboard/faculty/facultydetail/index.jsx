import React, { useState } from 'react';
import SwitchTab from '@/components/features/Switchtab2';

const Course = ({ courses, pathId }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className='border-2 rounded-lg  bg-white'>
                <div className=' flex gap-6 p-5'>
                    <div className="  ">
                        <img src="/benifit/CONCEPT.jpg" alt="" />
                    </div>
                    <div className='p-3 '>
                        <h4 className='text-[32px] font-semibold'>Ankit shukla Tiwari</h4>
                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur. Dignissim erat id gravida lobortis commodo.</p>
                        <div className='pt-2'>
                            <button className='bg-[#0A405C]  p-1.5  rounded-[167px] mt-2 w-[150px] text-[#FFF] hover:bg-[rgb(255,200,29)] hover:text-black'>100+ years exp</button>

                        </div>
                    </div>
                </div>

                <div>
                    <section className="p-2">
                        <article className="flex flex-col gap-10">


                            <main className="flex justify-between sm:gap-6 flex-wrap px-4">
                                <main className="md:basis-[60%] basis-[100%] flex flex-col gap-5 pt-5 pb-14">
                                    <div className="text-[#231F40] text-[20px] sm:text-[27px] font-extrabold">
                                        {courses?.programName}
                                    </div>

                                    <main className="flex justify-around bg-[#F5F5F5] rounded-[6px] border-none">
                                        <div
                                            onClick={() => setActiveTab(0)}
                                            className={`border-[#6F6B80] cursor-pointer ${activeTab == 0 ? `border-b-[3px]` : ``
                                                } px-3 py-2 text-[#6F6B80] font-bold sm:text-[17px]`}
                                        >
                                            About
                                        </div>
                                        <div
                                            onClick={() => setActiveTab(1)}
                                            className={`border-[#6F6B80] cursor-pointer ${activeTab == 1 ? `border-b-[3px]` : ``
                                                } px-3 py-2 text-[#6F6B80] font-bold sm:text-[17px]`}
                                        >
                                            Reviews
                                        </div>
                                        <div
                                            onClick={() => setActiveTab(2)}
                                            className={`border-[#6F6B80] cursor-pointer ${activeTab == 2 ? `border-b-[3px]` : ``
                                                } px-3 py-2 text-[#6F6B80] font-bold sm:text-[17px]`}
                                        >
                                            Achievements
                                        </div>
                                    </main>

                                    <SwitchTab activeTab={activeTab} />
                                </main>


                            </main>




                        </article>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Course;

Course.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}