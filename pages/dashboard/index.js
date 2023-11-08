import React, { useState } from 'react';
import { DateIcon, DatePick, RightArrow, SettingIcon, Tick, Timer, } from '@/utils/icons/icons';
import ResponsiveCarousel from '@/components/card/ResponsiveCarousel';

const slideContent = [
  <div className="swiper-slide rounded-lg border-2 border-[#00000030]">
    <img
      src="/banner/banner1.webp"
      className="object-cover w-full rounded-lg"
      alt="Slide1"
    />
  </div>,
  <div className="swiper-slide rounded-lg border-2 border-[#00000030]">
    <img
      src="/banner/banner2.webp"
      className="object-cover w-full rounded-lg"
      alt="Slide1"
    />
  </div>,
  <div className="swiper-slide rounded-lg border-2 border-[#00000030]">
    <img
      src="/banner/banner3.webp"
      className="object-cover w-full rounded-lg"
      alt="Slide1"
    />
  </div>,
];
const topPerformer = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
const threeData = [{ id: 1 }, { id: 2 }, { id: 3 }]

const Dashboard = () => {

  return (
    <>
      <section className="">
        <article>
          <main className="flex flex-wrap justify-between gap-5">
            <main className="lg:basis-[68%] basis-[100%] rounded-lg flex flex-col gap-5">
              <div className="rounded-lg overflow-hidden">
                <ResponsiveCarousel contentList={slideContent} />
              </div>

              <main className="flex justify-between flex-wrap gap-5">
                <div className="flex-grow border-2 border-[#00000030] rounded-lg xl:basis-[35%] sm:basis-[45%] basis-[100%] flex flex-col p-4 gap-3 bg-white">
                  <main className="flex justify-between">
                    <div className="text-[#231F40] text-[16px] font-bold ">
                      Courses Activities
                    </div>
                    <div>
                      <div className="text-[13px]">This Week</div>
                      <div></div>
                    </div>
                  </main>
                  <main className="flex items-center gap-5">
                    <div className="flex gap-2 items-center">
                      <div className="p-1 bg-[#FFC81D] rounded-xl"></div>
                      <div className="text-[#6F6B80] text-[14px]">Process</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-[#0B405D] rounded-xl"></div>
                      <div className="text-[#6F6B80] text-[14px]">
                        In Process
                      </div>
                    </div>
                  </main>
                  <img
                    src={`/TimeSpendChart.jpg`}
                    width={250}
                    alt="TimeSpendChart"
                    className="object-contain self-center"
                  />
                </div>

                <div className="flex-grow border-2 border-[#00000030] rounded-lg xl:basis-[28%] sm:basis-[45%] basis-[100%] flex flex-col p-4 items-center gap-3 bg-white">
                  <div className="text-[#231F40] text-[18px] font-bold ">
                    Courses Activities
                  </div>
                  <img
                    src={`/CoursesActivitiesChart.jpg`}
                    width={150}
                    alt="CoursesActivitiesChart"
                    className="object-contain"
                  />
                  <main className="flex items-center gap-5">
                    <div className="flex gap-2 items-center">
                      <div className="p-1 bg-[#FFC81D] rounded-xl"></div>
                      <div className="text-[#6F6B80] text-[14px]">Process</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-[#0B405D] rounded-xl"></div>
                      <div className="text-[#6F6B80] text-[14px]">
                        In Process
                      </div>
                    </div>
                  </main>
                </div>

                <div className="flex-grow border-2 border-[#00000030] rounded-lg xl:basis-[28%] sm:basis-[45%] basis-[100%] flex flex-col py-4 gap-5 bg-white">
                  <div className="text-[#231F40] text-[18px] font-bold text-center">Top Performance</div>

                  <main className="flex flex-col gap-3 h-48 overflow-custom-style">
                    <div className="text-[#231F40] text-[13px] font-bold text-center flex justify-between border-b border-[#00000030] py-1 gap-5">
                      <div className="basis-[30%]">Name</div>
                      <div className="basis-[30%]">Rank</div>
                      <div className="basis-[30%]">Marks</div>
                    </div>

                    {topPerformer?.map((value, index) => (
                      <div key={index} className={`text-[#6F6B80] text-[13px] text-center flex justify-between border-b py-1 gap-5 border-b-[#00000030] ${index === 3 ? `bg-yellow-400 border-[#00000030] rounded-lg mx-2 px-1 border` : ``}`}>
                        <div className='text-[#231F40] font-bold basis-[30%]'>Name</div>
                        <div className='basis-[30%]'>Rank</div>
                        <div className='basis-[30%]'>Marks</div>
                      </div>
                    ))}
                  </main>
                </div>
              </main>

              <main className="flex justify-between flex-wrap-reverse gap-5">
                <div className="border-2 border-[#00000030] rounded-lg lg:basis-[35%] basis-[100%] p-3 flex  flex-col gap-4 bg-white flex-grow">
                  <main className="flex justify-between items-center">
                    <div className="sm:text-[14px] font-bold">Suggested Courses</div>
                    <div className="text-[11px] text-[#6F6B80]">View all</div>
                  </main>

                  <main className="flex lg:flex-col flex-wrap gap-5">
                    {threeData?.map((value, index) => (
                      <main key={index} className="flex gap-2 items-center  flex-grow">
                        <div className='p-[14px] bg-[#f4f4f4] shadow-sm rounded-[4px]'>
                          <img src="/doctor.jpg" className="h-7" />
                        </div>
                        <div className='flex flex-col gap-[6px]'>
                          <div className="text-[13px] font-bold">
                            NEET Foundation for 2 ys
                          </div>
                          <main className="flex justify-between items-center">
                            <main className="flex justify-between items-center gap-2">
                              <img
                                src="/ProfilePic.png"
                                alt=""
                                className="h-3 rounded-xl"
                              />
                              <div className="text-[11px] text-[#6F6B80]">
                                Rachit Jain
                              </div>
                            </main>
                            <main className="text-[11px] text-[#6F6B80] flex justify-between items-center gap-2">
                              <Timer w={12} h={12} />
                              <div>20 min</div>
                            </main>
                          </main>
                        </div>
                      </main>
                    ))}
                  </main>
                </div>

                <main className="rounded-lg lg:basis-[61%] basis-[100%] flex flex-col gap-5">
                  <div className="rounded-lg bg-white">
                    <img
                      src="/StudentDashBoardCorousel.png"
                      className="object-fit h-40 w-full rounded-lg border-2 border-[#00000030]"
                    />
                  </div>

                  <div className="flex justify-between flex-wrap gap-5">
                    <div className="border-2 border-[#00000030] rounded-lg sm:basis-[45%] basis-[100%] p-3 flex flex-col gap-4 bg-white flex-grow">
                      <div className="sm:text-[14px] font-bold">
                        Recent access Courses
                      </div>

                      <main className="flex items-start justify-between gap-1">
                        <img src="/RecentAccess.png" className="object-cover" />
                        <main className="text-[11px] text-[#6F6B80] flex items-center gap-1">
                          <Timer w={12} h={12} />
                          <div>Monday 7 P.M</div>
                        </main>
                      </main>

                      <div>
                        <div className="text-[12px] font-bold">CA/CS/CMS For 2 years</div>
                        <main className="text-[11px] text-[#6F6B80] flex items-center gap-1">
                          <Timer w={12} h={12} />
                          <div>Mrs Rajiv Rawat</div>
                        </main>
                      </div>

                      <div>
                        <main className="text-[11px] flex items-center justify-between gap-1">
                          <div>Progress</div>
                          <div>75%</div>
                        </main>
                        <input disabled value={75} type="range" className="w-full" />
                      </div>
                    </div>

                    <div className="border-2 border-[#00000030] rounded-lg sm:basis-[45%] basis-[100%] p-3 flex flex-col gap-6 bg-white flex-grow">
                      <main className="flex justify-between items-center">
                        <div className="sm:text-[14px] font-bold">
                          Today’s Class
                        </div>
                        <div className="text-[11px] text-[#6F6B80]">
                          <Timer w={12} h={12} />
                        </div>
                      </main>

                      <main className="flex sm:justify-between items-center gap-2">
                        <img src="/doctor.jpg" className="h-7" />
                        <div>
                          <div className="sm:text-[12px] font-bold">Corporate Accounting</div>
                          <main className="text-[11px] text-[#6F6B80] flex items-center gap-1">
                            <Timer w={12} h={12} />
                            <div>Mrs Rajiv Rawat </div>
                          </main>
                        </div>
                      </main>

                      <main className="flex justify-around text-[11px] text-[#6F6B80]">
                        <main className="flex items-center gap-1">
                          <Timer w={12} h={12} />
                          <div>20 min</div>
                        </main>
                        <main className="flex items-center gap-1">
                          <Timer w={12} h={12} />
                          <div>20 min</div>
                        </main>
                      </main>

                      <main className="flex justify-around text-[11px] text-[#6F6B80]">
                        <main className="flex items-center gap-1">
                          <Timer w={12} h={12} />
                          <div>20 min</div>
                        </main>
                        <main className="flex items-center gap-1">
                          <Timer w={12} h={12} />
                          <div>20 min</div>
                        </main>
                      </main>
                    </div>
                  </div>
                </main>
              </main>
            </main>

            <main className="lg:basis-[28%] basis-[100%] rounded-lg border-2 border-[#00000030] py-5 px-5 flex flex-col gap-10 bg-white flex-grow">
              <main className="flex  justify-center items-center gap-6 font-bold">
                <DateIcon />
                <div className="text-[22px]">Upcomings</div>
              </main>

              <main className="">
                <div className="mb-8 font-bold text-[19px]">
                  Upcoming <span className="">Tests</span>{' '}
                </div>

                <main className="flex lg:flex-col flex-wrap gap-8">
                  {threeData?.map((value, index) => (
                    <div key={index} className="flex items-center justify-between pl-3 border-l-4 border-[#FFC81D] flex-grow">
                      <div>
                        <div className="font-bold text-[14px]">
                          Corporate Accounting
                        </div>
                        <main className="text-[13px] flex gap-3">
                          <div>Class Text 2</div>
                          <div className="text-[#FFC81D] font-bold">19 October </div>
                        </main>
                      </div>

                      <div>
                        <RightArrow />
                      </div>
                    </div>
                  ))}
                </main>
              </main>

              <div className="text-[#0B405D] text-center border-[#0B405D] border rounded-lg py-2 text-[13px] font-bold">
                See All Upcoming Events
              </div>

              <div className="border border-[#00000070]"></div>

              <main className="">
                <div className="text-[19px] mb-8 font-bold">Assignments</div>

                <main className="flex lg:flex-col flex-wrap gap-8">
                  {threeData?.map((value, index) => (
                    <div key={index} className="flex items-center gap-5 flex-grow">
                      <div className="p-0 bg-[#FFC81D] text-white">
                        <Tick w={16} h={16} />
                      </div>
                      <div>
                        <div className="font-bold text-[14px]">
                          Corporate Accounting
                        </div>
                        <main className="flex gap-6">
                          <main className="flex gap-1">
                            <DatePick />
                            <div className="text-[13px]">15 Aug</div>
                          </main>
                          <div className="text-[13px] text-[#258316] font-bold">
                            Submmited
                          </div>
                        </main>
                      </div>
                    </div>
                  ))}
                </main>
              </main>
            </main>
          </main>
        </article>
      </section>
    </>
  );
};

export default Dashboard;

// Dashboard.getInitialProps = async () => {
//   return { isStudentDashboard: true };
// };

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>
}