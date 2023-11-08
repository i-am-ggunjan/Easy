import React, { useState } from 'react'
import { DateIcon, DatePick, LeftArrow, RightArrow, SettingIcon, Tick, Timer } from '@/utils/icons/icons';
import DateScroller from '@/components/features/DateScroller';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useGetWidth } from '@/components/hooks/useGetWidth';
// import AttendenceChart from '@/components/charts/AttendenceChart';
const AttendenceChart = dynamic(() => import('@/components/charts/AttendenceChart'), { ssr: false })

const Course = () => {
    const [ref, width] = useGetWidth();
    const [accessedCourse, setAccessedCourse] = useState([
        {
            id: 1,
            title: 'CA/CS/CMS For 2 years',
            tutor: 'Mrs Rajiv Rawat',
            progress: 100,
            date: 'Mon 7.00pm'
        },
        {
            id: 2,
            title: 'CA/CS/CMS For 12 Class',
            tutor: 'Mrs Rahul Negi',
            progress: 45,
            date: 'Tue 8.00pm'
        },
        {
            id: 3,
            title: 'NCERT Class 8',
            tutor: 'Mrs Anshul Negi',
            progress: 45,
            date: 'Thu 8.00pm'
        },
        {
            id: 4,
            title: 'IT-JEE Foundation',
            tutor: 'Mrs Rakesh Negi',
            progress: 55,
            date: 'Thu 8.00pm'
        }
    ])

    const [scheduleCourse, setScheduleCourse] = useState([
        {
            id: 1,
            title: 'CA/CS/CMS FOR 2 Year',
            subject: 'Account & Tax',
            duration: '2 hours',
            startTime: '2:00 pm',
            endTime: '4:00 pm'
        },
        {
            id: 2,
            title: 'CA/CS/CMS FOR 12 class',
            subject: 'Audit & Law',
            duration: '2 hours',
            startTime: '3:00 pm',
            endTime: '5:00 pm'
        },
        {
            id: 3,
            title: 'NCERT Class 8',
            subject: 'Math & Hindi',
            duration: '2 hours',
            startTime: '10:00 pm',
            endTime: '12:00 am'
        },
        {
            id: 4,
            title: 'IIT-JEE Foundation',
            subject: 'Math & Physics',
            duration: '2 hours',
            startTime: '4:00 pm',
            endTime: '6:00 pm'
        },
    ])

    const [date, setDate] = useState([{ id: 1, date: 1 }, { id: 2, date: 1 }, { id: 3, date: 1 }, { id: 4, date: 1 }, { id: 5, date: 1 }, { id: 6, date: 1 }, { id: 7, date: 1 }, { id: 8, date: 1 },
        //  { id: 9, date: 1 }, { id: 10, date: 1 }, { id: 11, date: 1 }
    ])

    // return <div>
    //     <div ref={chartRef}>
    //         <AttendenceChart width={width - 20} height={200} />
    //     </div>
    // </div>

    return (
        <>
            <section className=''>
                <article>
                    <main className='flex flex-col gap-5'>
                        <main className='flex flex-col gap-1'>
                            <div className='text-[#231F40] font-bold text-[18px] md:text-[20px]'>Explore Your Courses</div>
                            <div className='text-[#6F6B80]'>Welcome back gaurav ready to your next  lessson</div>
                        </main>


                        <main className='flex  flex-col gap-3'>
                            <div className='text-[#231F40] font-bold text-[18px] md:text-[20px]'>Recently Accessed Courses</div>
                            <main className='flex flex-wrap gap-5'>
                                {
                                    accessedCourse?.map(value => {
                                        let progressValue = value.progress
                                        return (
                                            <div key={value?.id} className='border-2 border-[#00000030] rounded-lg p-3 flex flex-col gap-5 flex-grow bg-white'>
                                                <main className='flex items-start justify-between gap-1'>
                                                    <img src='/RecentAccess.png' className='object-cover' />
                                                    <main className='flex items-center gap-1'>
                                                        <div className='text-[11px] text-[#6F6B80]'><Timer w={12} h={12} /></div>
                                                        <div className='text-[11px] text-[#6F6B80]'>{value?.date}</div>
                                                    </main>
                                                </main>

                                                <div>
                                                    <div className='text-[#231F40] text-[12px] font-bold'>{value?.title}</div>
                                                    <main className='flex items-center gap-1'>
                                                        <div className='text-[11px] text-[#6F6B80]'><Timer w={12} h={12} /></div>
                                                        <div className='text-[11px] text-[#6F6B80]'>{value?.tutor}</div>
                                                    </main>
                                                </div>

                                                <div className='flex flex-col gap-3'>
                                                    <main className='flex items-center justify-between gap-1'>
                                                        <div className='text-[11px]'>Progress</div>
                                                        <div className='text-[11px]'>{value?.progress} %</div>
                                                    </main>
                                                    <div className='bg-slate-200 rounded-xl'>
                                                        <div className={`py-1 bg-[#0B405D] rounded-xl w-[${progressValue}%]`} style={{ width: value?.progress + '%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </main>
                        </main>

                        <main className='flex flex-wrap justify-between gap-5'>
                            <div className='xl:basis-[70%] basis-[100%] flex-grow flex flex-col gap-5'>
                                <div className='border-2 border-[#00000030] rounded-lg p-3 flex flex-col gap-5 bg-white'>
                                    <div className='text-[#231F40] font-bold'>Your Schedule</div>

                                    <main className='flex justify-between items-center'>
                                        <div className='text-[#231F40] text-[14px] font-bold'>Nov 2022-2023</div>
                                        <div className='flex gap-2'>
                                            <div className='text-[#0B405D] border-[#0B405D] border rounded-md bg-[rgba(11,64,93,0.20)]'><LeftArrow w={23} h={20} /></div>
                                            <div className='text-[#0B405D] border-[#0B405D] border rounded-md bg-[rgba(11,64,93,0.20)]'><RightArrow w={23} h={20} /></div>
                                        </div>
                                    </main>


                                    {/* <div className='md:w-[50vw] w-[84.5vw]'> */}
                                    <DateScroller />
                                    {/* </div> */}


                                    <main className='flex flex-col gap-3 sm:px-4'>
                                        <div className='flex justify-between border-y py-2 gap-5'>
                                            <div className='text-[#231F40] text-[13px] font-bold sm:basis-[25%] basis-[40%] text-start'>Course Title</div>
                                            <div className='text-[#231F40] text-[13px] font-bold sm:basis-[20%] basis-[25%] sm:text-center'>Subject</div>
                                            <div className='text-[#231F40] text-[13px] font-bold basis-[17%] hidden sm:block text-center'>Duration</div>
                                            <div className='text-[#231F40] text-[13px] font-bold sm:basis-[15%] basis-[20%] sm:text-center'>Start time</div>
                                            <div className='text-[#231F40] text-[13px] font-bold basis-[15%] hidden sm:block sm:text-end'>End time</div>
                                        </div>

                                        {
                                            scheduleCourse?.map(value => (
                                                <div key={value?.id} className='flex justify-between border-b py-1'>
                                                    <div className='text-[12px] text-[#6F6B80] sm:basis-[25%] basis-[40%] text-start font-bold text-[#231F text-[#6F6B80]40] '>{value?.title}</div>
                                                    <div className='text-[13px] text-[#6F6B80] sm:basis-[20%] basis-[25%] sm:text-center '>{value?.subject}</div>
                                                    <div className='text-[13px] text-[#6F6B80] basis-[17%] hidden sm:block text-center '>{value?.duration}</div>
                                                    <div className='text-[13px] text-[#6F6B80] sm:basis-[15%] basis-[20%] sm:text-center '>{value?.startTime}</div>
                                                    <div className='text-[13px] text-[#6F6B80] basis-[15%] hidden sm:block sm:text-end '>{value?.endTime}</div>
                                                </div>
                                            ))
                                        }
                                    </main>
                                </div>



                                <div className='flex flex-wrap justify-between gap-5'>
                                    <div className='md:basis-[45%] basis-[100%] border-2 border-[#00000030] rounded-lg p-3 flex justify-between gap-2 items-center flex-grow bg-white'>
                                        <div className='text-[#231F40] text-[14px] font-bold '>Syllabus status </div>
                                        <div>
                                            <Image src={`/SyllabusStatusChart.jpg`} width={40} height={5} alt='SyllabusStatusChart' className='object-contain w-auto h-auto' />
                                        </div>
                                        <div className='border-r border-[#6F6B80] h-5'></div>
                                        <div className='text-[14px] font-bold text-[#6F6B80]'>75/100</div>
                                    </div>

                                    <div className='md:basis-[45%] basis-[100%] border-2 border-[#00000030] rounded-lg p-3 flex justify-between gap-2 items-center flex-grow bg-white'>
                                        <div className='text-[#231F40] text-[14px] font-bold '>Student Progress </div>
                                        <div>
                                            <Image src={`/StudentProgressChart.jpg`} width={100} height={5} alt='StudentProgressChart' className='object-contain w-auto h-auto' />
                                        </div>
                                        <div className='text-[14px] font-bold text-[#6F6B80]'>60/100</div>
                                    </div>
                                </div>
                            </div>


                            <div className='md:basis-[23%] basis-[100%] flex flex-col gap-5'>
                                <div className='border-2 border-[#00000030] rounded-lg flex flex-col gap-[15px] py-5 px-5 bg-white'>
                                    <div className='text-[#231F40] text-[17px] font-bold'>Attendence</div>
                                    <AttendenceChart />
                                    <div className='text-[#231F40] font-bold text-[22px]'>40 %</div>
                                    <div className='text-[13px] text-[#6F6B80]'>Your Attendence is 40% Higher than the last month</div>
                                </div>
                                <div className='border-2 border-[#00000030] rounded-lg p-3 flex justify-between items-center gap-2 bg-white flex-grow'>
                                    <div className='text-[#231F40] text-[14px] font-bold '>4 Assignment</div>
                                    <div className='border-r border-[#6F6B80]'></div>
                                    <div className='text-[14px] font-bold text-[#6F6B80]'>2 Overdue</div>
                                </div>
                            </div>
                        </main>
                    </main>
                </article>
            </section>
        </>
    )
}

export default Course

// Course.getInitialProps = async () => {
//     return { isStudentDashboard: true };
// };

Course.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}