import React from 'react'
import BlogCard from '@/components/card/BlogCard';
import BookSeatCard from '@/components/card/BookSeatCard';
import CourseCardOne from '@/components/card/CourseCardOne';
import FeedBackCard from '@/components/card/FeedBackCard';
import ResponsiveCarousel from '@/components/card/ResponsiveCarousel';
import useMediaQuery from '@/components/hooks/useMediaQuery';
import { CoursesData, slide_content_one, slide_content_three, slide_content_two } from '@/utils/db';
import { CommunityImage3, Communityimg1, Communityimg2, Communityimg5, Demoicons, Eduimg, Eduimg2, Eduimg3, Reviewicon, SubmitBtn, Timer } from '@/utils/icons/icons';
import { fetchCourseData } from '@/utils/apis_functions/public/progams';
import { fetchBlogData } from '@/utils/apis_functions/public/content';
import Link from 'next/link';
import SwiperSlider from '@/components/features/SwiperSlider';

const breakpoints = {
  xs: "(max-width: 599px)",
  sm: "(min-width: 600px) and (max-width: 899px)",
  md: "(min-width: 900px) and (max-width: 1199px)",
  lg: "(min-width: 1200px) and (max-width: 1535px)",
  xl: "(min-width: 1536px)",
};

const Home = ({ courses, blogs }) => {
  const activeBreakpoints = useMediaQuery(breakpoints);
  const swiperProps = {
    slidesPerView: activeBreakpoints.xs ? 1 : 4,
    isPagination: false,
  };
  const customProps = { marginOneSide: "0" }

  const feedbackData = [
    {
      img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
      name: "Shamsher Ali, Noida",
      course: "IIT",
      feedback: "I was quite weak in Physics, so I decided to take classes of this subject, due to shortage of timing, I opted out for online education and chose Easyhai Online, this platform made me a good student with its teaching facilities and expert faculties.",
    },
    {
      img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph",
      name: "Ajay Kumar, Delhi",
      course: "IIT",
      feedback: "Easyhai Online helped me out in learning Math as I was having difficulties, but now I am able to solve my tough questions all thanks to this platform which is having potential to help out children’s doubts and problems like me",
    },
    {
      img: "https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph",
      name: "Shivani Gupta",
      course: "NEET",
      feedback: "Whether you're a high school student struggling with the basics of physics, Chemistry, Math or a university-level learner struggling with advanced concepts, Easyhai Online has resources tailored to your needs. The platform is flexible, allowing you to learn at your own pace and revisit challenging topics as often as necessary.",
    },
  ]

  return (
    <>
      <section><ResponsiveCarousel contentList={...slide_content_one} /></section>

      <section className='lg:px-32 md:px-30 sm:px-10 px-4 py-10 sm:py-20'>
        <main className='flex flex-col gap-10 sm:gap-20'>
          <h5 className="text-[20px] md:text-[30px] text-[#231F40] font-extrabold text-center">Benefit’s of easyhaionline classes </h5>
          <SwiperSlider
            slideContent={slide_content_two}
            swiperProps={swiperProps}
            customProps={customProps}
          />
        </main>
      </section>

      <section className='lg:px-32 md:px-30 sm:px-10 px-4 py-10 sm:py-10 banner1'>
        <main className='flex flex-col gap-10 sm:gap-12'>
          <h5 className="text-[20px] md:text-[30px] text-[#231F40] font-extrabold text-center">Popular Courses To Learn</h5>

          <main data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className='flex justify-center sm:justify-around gap-10 flex-wrap md:px-24'>
            {courses && courses.length > 0 ? (
              courses.map(value => {
                let current_item = CoursesData.find((obj) => obj.name === value.stream)
                return <CourseCardOne key={`${value.stream}`} data={value} current_item={current_item} />
              })
            ) : <div className='text-[#6F6B80]'>No Content Found</div>}
          </main>
        </main>
      </section>

      <div className=' flex  gap-10 md:flex-row p-6 md:p-10 justify-center flex-wrap flex-col  '>
        <div data-aos="fade-up"
          data-aos-anchor-placement="center-center" className='bg-[#FFF4D2]     rounded-[10px] cursor-pointer hover:bg-yellow-200'>
          <div className='flex p-4 ml-2 md:mt-3 '>
            <div className=''>
              <div className="flex justify-center  ">
                <img src='/askdoubt.png' className='w-[70px]' />
              </div>
            </div>
            <Link href='/ask-doubt'>
              <div className=" ml-4">
                <h1 className='text-[25px] font-semibold text-[urbanist]'>Ask Doubt</h1>
                <p className=''>Student Can ask his/her doubt</p>
              </div></Link>
          </div>
        </div>
        <div data-aos="fade-up"
          data-aos-anchor-placement="center-center" className='bg-[#F5E5E5] rounded-[10px] cursor-pointer hover:bg-red-400'>
          <div className='flex p-4 ml-2 md:mt-3 '>
            <div className=''>
              <div className="flex justify-center ">
                <img src='/expertteacher.png' className='w-[70px]' />
              </div>
            </div>
            <Link href="/expert-teacher">
              <div className=" ml-4">
                <h1 className='text-[25px] font-semibold text-[urbanist]'>Expert Teachers</h1>
                <p className=''>At easyhaionline we have a pool...</p>
              </div>
            </Link>
          </div>
        </div>
        <div data-aos="fade-up"
          data-aos-anchor-placement="center-center" className='bg-[#E7EEF1]    rounded-[10px] h-[135px] cursor-pointer hover:bg-[rgb(2,197,250)]'>
          <div className='flex p-4 ml-2 md:mt-3'>
            <div className=''>
              <div className="flex justify-center ">
                <img src='/freeavulation.png' className='w-[70px]' />
              </div>
            </div>
            <Link href="/free-evaluation">
              <div className=" ml-4 ">
                <h1 className='text-[25px] font-semibold text-[urbanist]'>Free Evaluation</h1>
                <p className=''>Students can get his/her free...</p>
              </div>
            </Link>
          </div>
        </div>
      </div>


      <section className="lg:px-32 md:px-30 sm:px-10 px-4 py-10 bg-[#f8f7f5] md:mt-10">
        <main className='flex justify-center items-center gap-x-16'>
          <main className="flex flex-col items-start gap-3 sm:basis-[70%]" data-aos="zoom-in-down" >
            <h5 className="text-[22px] sm:text-[28px] text-[#231F40] font-bold">Book Your<span className="text-[rgb(254,206,48)]"> Free Demo</span> Session - Your Gateway to Success</h5>
            <div className="text-[13px] sm:text-[16px] text-[#6F6B80] font-[500]">Don't wait to take the first step on your path to self-discovery and personal growth. Book your free demo session now, and begin your journey toward a more, qualified, fulfilled, and purposeful life.</div>
            <button className="bg-[#0A405C] text-white flex items-center gap-1 px-3 py-2  rounded-md my-2">
              <div className="font-[600] text-[13px] sm:text-[13px]">Book Your Free Demo</div>
              <Demoicons className="font-bold" w={18} />
            </button>
          </main>
          <div className="hidden md:block " data-aos="zoom-in-down">
            <img src="/de.png" className="hover:transform md:w-[450px] md:h-[330px]  hover:scale-90 transition-transform duration-300 ease-in-out" typeof="image" />
          </div>
        </main>
      </section>

      <section className="lg:px-32  md:px-30 sm:px-10 px-4 py-10 sm:py-10 blogbackground2">
        <main className="flex items-center flex-col md:flex-row gap-10 ">
          <div className="education_image md:w-[50%] w-full h-auto md:ml-12">
            <div className="mianedu flex">
              <div className="md:p-5 p-3 mt-12 md:h-[250px] md:w-[200px] md:mt-[50px]">
                <img
                  className="md:rounded md:mt-10 md:ml-3 "
                  data-aos="zoom-in"
                  src="/education/education1.jpg"
                  alt=""
                />
              </div>
              <div className="md:p-3 p-3 cursor-pointer ">
                <img
                  data-aos="zoom-in"
                  className="md:rounded h-[200px] w-auto md:h-[250px]  hover:-translate-y-6 md:w-[280px] object-cover"
                  src="/education/education22.png"
                  alt=""
                />
              </div>
            </div>
            <div className="secmainedu flex mr-4 " data-aos="zoom-in">
              <div className="mt-[120px] md:ml-2 max-sm:hidden   animate-bounce relative h-[50px] w-auto mr-[-20px] rounded-lg flex bg-white shadow-md">
                <div className="md:w-[40px]  h-[40px] ml-3   pl-1 mt-1 rounded-full bg-[#F7E5E5]">
                  <Communityimg5 className="" />
                </div>
                <div className="pb-1 ml-2 md:w-[120px] hidden md:block " >
                  <h1 className="font-bold text-orange-400">90k+</h1>
                  <p className="">Total Students</p>
                </div>
              </div>
              <img
                className="md:rounded md:h-[200px] md:ml-[-40px] "
                //  data-aos="zoom-in"
                src="education/education3.png"
                alt=""
              />
            </div>
          </div>

          <main className="flex flex-col items-start gap-7 basis-[55%] " data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <h5 className="text-[20px] md:text-[30px] text-[#231F40] font-extrabold">The Highest Result of Education: Fostering Tolerance</h5>
            <p className="text-[12px] sm:text-[13px] text-[#6F6B80] text-justify">Education is crucial for personal growth and societal progress, providing knowledge, skills, and perspectives that enrich lives and contribute to the betterment of the world.</p>
            <div className="flex justify-between gap-5 max-sm:flex-col">
              <div className="sm:basis-[48%] flex gap-5">
                <div><Eduimg /></div>
                <div>
                  <h1 className="text-[16px] text-[#231F40] font-bold text-start">Flexible Classes</h1>
                  <p className="text-[12px] sm:text-[13px] text-[#6F6B80] text-justify">You have the opportunity to personalize their learning journey. You can choose the courses, modules, and subjects that align with their goals and interests.</p>
                </div>
              </div>

              <div className="sm:basis-[48%] flex gap-5">
                <div><Eduimg2 /></div>
                <div>
                  <h1 className="text-[16px] text-[#231F40] font-bold text-start">Problem Solving</h1>
                  <p className="text-[12px] sm:text-[13px] text-[#6F6B80] text-justify">Tolerance fosters the ability to work collaboratively with students who have different perspectives, which can lead to more innovative problem-solving and decision-making.</p>
                </div>
              </div>
            </div>
            <button className="bg-[#0A405C] text-white flex items-start gap-1 px-6 py-3 rounded-md my-2">
              <div className="font-[600] text-[13px] sm:text-[14px]">Read More</div>
              <Demoicons w={20} h={20} />
            </button>
          </main>
        </main>
      </section>

      <section className='lg:px-32 md:px-30 sm:px-10 px-4 py-10 sm:py-10'>
        <main className='flex flex-col gap-10 sm:gap-10'>
          <h5 className="text-[20px] md:text-[30px] text-[#231F40] font-extrabold">Study Material</h5>
          <SwiperSlider
            slideContent={slide_content_three}
            swiperProps={swiperProps}
            customProps={customProps}
          />
        </main>
      </section>

      <section className="pt-10 mb-[-160px]" data-aos="zoom-in">
        <iframe
          className="w-[80%] md:w-[650px] rounded-md m-auto h-[250px] md:h-[380px] aspect-video"
          src="https://www.youtube.com/embed/GA07jhle6V8"
        ></iframe>
      </section>
      <section className="lg:px-32 md:px-30 sm:px-10 px-4 pt-48 pb-20 blogbackground" >
        <main className="flex flex-col gap-10" data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">
          <h5 className="text-[20px] md:text-[30px] text-[#231F40] font-extrabold text-center">Master any topic Rs 11</h5>
          <div className="flex flex-wrap justify-center gap-x-32 gap-y-14">
            <BookSeatCard />
          </div>
        </main>
      </section>

      <section className='lg:px-32 md:px-30 sm:px-10 px-4 py-10 sm:py-10'>
        <main className='flex flex-col gap-10 sm:gap-12'>
          <h5 className="text-[20px] md:text-[30px] text-[#231F40] font-extrabold text-center">Our Lovely Students Feedback</h5>
          <main data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" className="flex flex-wrap flex-col md:flex-row gap-7 items-center justify-center">

            {feedbackData?.map((value, index) => (
              <FeedBackCard key={index} data={value} />
            ))}
          </main>
        </main>
      </section>

      <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-10 sm:py-20 banner4 ">
        <main className="flex flex-col md:flex-row gap-16 sm:gap-5 items-center">
          <div className="basis-[50%]">
            <div className="">
              <div className="flex md:flex-row flex-col text-center justify-center gap-[30px]">
                <div data-aos="flip-right" className="basis-1/3 px-6 py-3 sm:p-2 flex flex-col items-center rounded-md shadow-lg hover:bg-[#fed354] delay-100 ">
                  <div className="flex justify-center">
                    <CommunityImage3 className="" />
                  </div>
                  <div className="counter"></div>
                  <span className='text-[13px] text-[#6F6B80]'>Learners & counting</span>
                </div>

                <div data-aos="flip-right" className="basis-1/3 px-6 py-3 sm:p-2 flex flex-col items-center rounded-md shadow-lg hover:bg-[#fed354] delay-100 ">
                  <img src="img1.jpg" alt="" />
                  <div className="counter"></div>
                  <span className='text-[13px] text-[#6F6B80]'>Courses & Video</span>
                </div>
              </div>

              <div className="flex md:flex-row gap-[30px] flex-col justify-center text-center mt-10">
                <div data-aos="flip-right" className="basis-1/3 px-6 py-3 sm:p-2 flex flex-col items-center rounded-md shadow-lg hover:bg-[#fed354] delay-100 ">
                  <img src="cimg2.jpg" alt="" />
                  <div className="counter"></div>
                  <span className='text-[13px] text-[#6F6B80]'>Certified Students</span>
                </div>

                <div data-aos="flip-right" className="basis-1/3 px-6 py-3 sm:p-2 flex flex-col items-center rounded-md shadow-lg hover:bg-[#fed354] delay-100 ">
                  <img src="cimg3.jpg" alt="" />
                  <div className="counter"></div>
                  <span className='text-[13px] text-[#6F6B80]'>Winning Award</span>
                </div>
              </div>
            </div>
          </div>

          <main className="flex flex-col items-start gap-7 basis-[50%] " data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <h5 className="text-[20px] md:text-[30px] text-[#231F40]  font-extrabold">Creating A Community of Life Long Learners</h5>
            <p className="text-[12px] sm:text-[13px] text-[#6F6B80] text-justify">Our courses are designed by industry experts and delivered through interactive online modules, allowing you to learn at your own pace.</p>
            <div className="flex justify-between gap-5 flex-col">
              <div className="flex items-center gap-5">
                <div>
                  <div className="md:w-[60px]  h-[60px]  pl-1 mt-1 rounded-full bg-[#F7E5E5]">
                    <Communityimg2 className="" />
                  </div>
                </div>
                <div>
                  <h5 className="text-[16px] text-[#231F40] font-bold text-start">Trusted by Millions</h5>
                  <p className="text-[12px] sm:text-[13px] text-[#6F6B80] text-justify">Many students opted for online studies due to shortage of timings, recorded video lectures and to remove the hindrances of traveling.</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div>
                  <div className="md:w-[60px]  h-[60px]  pl-1 mt-1 rounded-full bg-[#EEEFFC]">
                    <Communityimg1 className="" />
                  </div>
                </div>
                <div>
                  <h5 className="text-[16px] text-[#231F40] font-bold text-start">Unlimited Resources With Strong Assistant</h5>
                  <p className="text-[12px] sm:text-[13px] text-[#6F6B80] text-justify">We have large number of educational resources in our library</p>
                </div>
              </div>
            </div>
          </main>
        </main>
      </section>

      <section className='lg:px-32 md:px-30 sm:px-10 px-4 py-10 sm:py-20 blogbackground2'>
        <main className='flex flex-col gap-10 sm:gap-12'>
          <h5 className="text-[20px] md:text-[30px] text-[#231F40] font-extrabold text-center">Our Latest Blog</h5>
          <main data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" className='flex justify-center sm:justify-center gap-7 flex-wrap'>
            {blogs && blogs.length > 0 ? (
              blogs.map((value, index) => <BlogCard key={index} data={value} />)
            ) : <div className='text-[#6F6B80]'>No Content Found</div>}
          </main>
        </main>
      </section>

      <section className="lg:px-32 md:px-30 sm:px-10 px-4 py-10 sm:py-16 bg-[#f8f7f5]">
        <main className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[20px] md:text-[30px] text-[#231F40] font-extrabold">SUBSCRIBE TO GET THE LATEST NEWS ABOUT US</h2>
          <p className='w-[80%] m-auto' >"At Easyhai Online, we're committed to empowering learners from diverse backgrounds. Our mission is to help you achieve your educational goals by providing the latest developments and educational insights."</p>
          {/* <p className="w-[70%] m-auto text-justify">We hope this newsletter finds you in high spirits and thriving in your pursuit of knowledge! At Easyhai Online, we're excited to share the latest developments and educational insights with you. Our mission has always been to empower learners of all ages and backgrounds, and we're dedicated to helping you achieve your educational goals.</p> */}
          <div className="flex justify-center items-center border-l  border-y border-[#FFC81D] rounded-full bg-white">
            <input placeholder="ENTER YOUR EMAIL ADDRESS"
              className="text-[12px] px-4 py-3 text-gray w-[60vw] sm:w-[30vw] outline-none rounded-l-full placeholder:text-[#FFC81D] placeholder:font-bold " />
            <SubmitBtn />
          </div>
        </main>
      </section>
    </>
  )
}

export default Home

export async function getStaticProps() {
  try {
    const data1 = await fetchCourseData();
    const data2 = await fetchBlogData();
    return { props: { courses: data1, blogs: data2 } }
  } catch (error) {
    console.log(error)
    return { props: { courses: null, blogs: null } }
  }
}
