import React, { useState } from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import TopicCardDashboard from '@/components/card/TopicCardDashboard';

const MicroCourses = () => {
  const { user } = useSelector(state => state.appState)
  console.log("User :: ", user)
  console.log("Micro-course ::: ", user?.miniCourses)
  const [selectedTopic, setSelectedTopic] = useState(null)

  return (
    <>
      <section className=''>
        <article>
          <main className='flex flex-col gap-8'>
            <main className='flex flex-col gap-1'>
              <div className='text-[#231F40] font-bold text-[18px] md:text-[20px]'>Explore Your Courses</div>
              <div className='flex justify-between items-center'>
                <div className='text-[#6F6B80]'>Welcome back gaurav ready to your next  lessson</div>
                <Link href={`/dashboard`} className='px-3 py-2 text-[13px] border border-[#0A405C] bg-[#0A405C]  text-[#FFC81D] rounded-md flex items-center gap-2'>
                  Explore Courses
                </Link>
              </div>
            </main>

            <main className='flex flex-wrap justify-center sm:justify-between gap-y-5 gap-x-5 pb-10'>
              {user?.miniCourses && user?.miniCourses?.map((value, index) => (
                <TopicCardDashboard key={index} value={value} setSelectedTopic={setSelectedTopic} />
              ))}
            </main>
          </main>
        </article>
      </section>
    </>
  )
}


export default MicroCourses;

// MicroCourses.getInitialProps = async () => {
//   return { isStudentDashboard: true };
// };

MicroCourses.getLayout = function PageLayout(page) {
  return (<>{page}</>)
}
