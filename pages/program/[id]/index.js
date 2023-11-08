import React, { useState } from 'react';
import {
  RightArrow,
  Dot,
  Timer,
  LinkdInIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  DateIcon,
  ArrowIcon,
  StatsIcon,
  LanguageIcon,
  InstructorIcon,
  TopicIcon,
  PercentageIcon,
} from '@/utils/icons/icons';
import CourseCardTwo from '@/components/card/CourseCardTwo';
import CourseBatchCard from '@/components/card/CourseBatchCard';
import { useRouter } from 'next/router';
import Link from 'next/link';
import CustomSwtichTab from '@/components/features/CustomSwtichTab';
// @/utils/icons/icons
// const Tabs = {
//     1:<div></div>
// }

let videoDetail = [
  {
    id: 1,
    icon: <Timer />,
    head: 'Duration',
    subHead: '10 hours',
  },
  {
    id: 2,
    icon: <StatsIcon />,
    head: 'Skill level',
    subHead: 'Basic',
  },
  {
    id: 3,
    icon: <LanguageIcon />,
    head: 'Language',
    subHead: 'English',
  },
  {
    id: 4,
    icon: <InstructorIcon />,
    head: 'Instructor',
    subHead: '1',
  },
  {
    id: 5,
    icon: <TopicIcon />,
    head: 'Topics',
    subHead: '16',
  },
  {
    id: 6,
    icon: <PercentageIcon />,
    head: 'Pass Percentage',
    subHead: '70%',
  },
];

let batchDetail = [
  {
    id: 1,
    batchName: 'Batch 1',
    startTime: 'Sep 29, (3:00-5:00pm)',
    endTime: 'Sep 29, (3:00-5:00pm)',
  },
  {
    id: 2,
    batchName: 'Batch 2',
    startTime: 'Sep 30, (3:00-5:00pm)',
    endTime: 'Sep 30, (3:00-5:00pm)',
  },
];

const Course = ({ courses, pathId }) => {
  console.log("Program Page :: ", courses)
  const router = useRouter();
  const [blogList, setBlogList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const [activeTab, setActiveTab] = useState(0);
  const [selectBatch, setSelectBatch] = useState(null);

  return (
    <>
      <section className="sm:my-10 mt-4 relative">
        <article>
          <img
            src="/BlogImage.png"
            alt=""
            className="w-full h-[150px] sm:h-[185px] absolute -z-40 object-cover"
          />
          <main className="flex flex-col justify-center items-center lg:px-44 md:px-30 sm:px-10 px-4 py-10 sm:py-12 sm:text-center">
            <div className="text-[#231F40] text-[20px] sm:text-[38px] font-extrabold">
              {courses?.programName}
            </div>
            <div className="text-[#878398] sm:text-[20px] font-[500] flex items-start">
              Home {<RightArrow />} Courses {<RightArrow />}{' '}
              {courses?.programName}{' '}
            </div>
          </main>
        </article>
      </section>

      <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-10 pb-24">
        <article className="flex flex-col gap-10">
          <div className="">
            <img src={'/CourseImage.png'} style={{ width: '100vw' }} />
          </div>

          <main className="flex justify-between sm:gap-6 flex-wrap px-4">
            <main className="md:basis-[60%] basis-[100%] flex flex-col gap-5 pt-5 pb-14">
              <div className="text-[#231F40] text-[20px] sm:text-[27px] font-extrabold">
                {courses?.programName}
              </div>

              <main className="flex justify-around">
                <div
                  onClick={() => setActiveTab(0)}
                  className={`border-[#6F6B80] ${activeTab == 0 ? `border-b-[3px]` : ``
                    } px-3 py-2 text-[#6F6B80] font-bold sm:text-[17px]`}
                >
                  Overview
                </div>
                <div
                  onClick={() => setActiveTab(1)}
                  className={`border-[#6F6B80] ${activeTab == 1 ? `border-b-[3px]` : ``
                    } px-3 py-2 text-[#6F6B80] font-bold sm:text-[17px]`}
                >
                  Instructor
                </div>
                <div
                  onClick={() => setActiveTab(2)}
                  className={`border-[#6F6B80] ${activeTab == 2 ? `border-b-[3px]` : ``
                    } px-3 py-2 text-[#6F6B80] font-bold sm:text-[17px]`}
                >
                  Reviews
                </div>
              </main>

              <CustomSwtichTab activeTab={activeTab} data={courses} />
            </main>

            <main className="bg-white sm:px-4 py-4 md:basis-[37%] basis-[100%] rounded-t-lg relative top-0 sm:top-[-120px] flex flex-col gap-10 shadow-md shadow-gray-300">
              <div>
                {/* <video
                  width="100%"
                  height={'150px'}
                  controls
                  poster={courses?.bannerURI}
                >
                  <source src="movie.mp4" type="video/mp4" />
                </video> */}
                <img src={courses?.bannerURI} className='h-44 w-full object-cover' />
              </div>

              <main className="px-2 flex flex-col gap-6">
                {videoDetail.map((value) => (
                  <main
                    key={value.id}
                    className="flex justify-between border-b-[3px] pb-4"
                  >
                    <main className="flex items-center gap-4">
                      <div className="text-[#0A405C]">{value.icon}</div>
                      <div className="text-[#6F6B80] text-[15px]">
                        {value.head}
                      </div>
                    </main>
                    <div className="text-[#6F6B80] text-[15px]">
                      {value.subHead}
                    </div>
                  </main>
                ))}

                <div className="text-[#231F40] border-[2px] border-[#0A405C] bg-[#0A406C33] py-3 font-bold rounded-lg text-center mt-3">
                  Price: 20,709
                </div>
                <button className="text-white bg-[#0A405C] py-3 rounded-lg">
                  <Link className="w-full" href="#choose-batch-class">
                    Buy Now
                  </Link>
                </button>

                <Link href="/">Back to home</Link>
                <main className="flex justify-between px-5 gap-4 text-[#0A405C]">
                  <FacebookIcon w="30" h="30" color="#0A405C" />
                  <InstagramIcon w="30" h="30" color="#0A405C" />
                  <LinkdInIcon w="30" h="30" color="#0A405C" />
                  <TwitterIcon w="30" h="30" color="#0A405C" />
                </main>
              </main>
            </main>
          </main>

          <main id="choose-batch-class" className="flex flex-col gap-5 px-4">
            <div>
              <div className="text-[#FFC81D] text-[14px] font-bold">
                CHOOSE ONE BATCH
              </div>
              <div className="text-[#231F40] text-[24px] font-bold">
                Batch Schedule
              </div>
            </div>
            <main className=" flex justify-center sm:justify-between gap-10 flex-wrap">
              {batchDetail.map((value) => (
                <CourseBatchCard
                  onBatchSelect={(batch) => {
                    router.push(`/summary/${pathId}?batch=${batch?.id}`);
                  }}
                  key={value?.id}
                  data={value}
                />
              ))}
            </main>
          </main>

          {/* <main className='flex flex-col gap-5 px-4'>
            <div>
              <div className='text-[#FFC81D] text-[14px] font-bold'>RELATED COURSES</div>
              <div className='text-[#231F40] text-[20px] sm:text-[24px] font-bold'>Courses related to the topic</div>
            </div>
            <main className='flex justify-center sm:justify-between gap-10 flex-wrap'>
              {blogList.map(value => <CourseCardTwo key={value?.id} />)}
            </main>
          </main> */}
        </article>
      </section>
    </>
  );
};

export default Course;

export async function getStaticProps(context) {
  const { params } = context;
  const id = params.id;

  const response = await fetch(
    `https://www.api.easyhaionline.com/api/super-admin/progams/get-program?id=${id}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const result = await response.json();
  return { props: { courses: result, pathId: id } };
}

export const getStaticPaths = () => {
  return {
    paths: [{ params: { id: '64d47e55e134ee74ba30870c' } }],
    fallback: true,
  };
};
