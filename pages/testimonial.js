import React from 'react'
import HeadingCard from '@/components/card/HeadingCard'
import FeedBackCard from '@/components/card/FeedBackCard'
// import Pagination from '@/components/features/Pagination'
import { Reviewicon } from '@/utils/icons/icons'

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
    {

        img: "https://img.freepik.com/free-photo/handsome-man-black-suit-with-white-shirt-posing-attractive-guy-with-fashion-hairstyle-confident-man-with-short-beard-adult-boy-with-brown-hair_186202-8527.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph",
        name: "Raj, New Delhi ",
        course: "PCM",
        feedback: "As a 12th standard student with PCM, I was studying from this institute and I performed far better in the JEE’s main exam and I will continue my learning from Easyhai Online again as they teach in most effective and proficient way, the learning and studying will gives the vibes of entertainment and it will stays with you forever and helps you in achieving goals.",
    },
    {
        img: "https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph",
        name: "Abhinav Kumar",
        course: "NEET",
        feedback: " Easyhai Online offers a comprehensive and innovative approach to learning, one that blends technology, top-notch educators, and engaging content easily. Their video lessons are not only visually appealing but also incredibly informative. I found myself eagerly diving into each lesson, as the teachers' clarity and interest made complex concepts seem approachable.",
    },
    {
        img: "https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph",
        name: "Abhishek Chaudhary, Ghaziabad",
        course: "CA",
        feedback: "Pursuing CA foundation from Easyhai Online, and I must say, this institute is having best faculty and study materials and most importantly their way of teaching. ",
    },
    {
        img: "https://img.freepik.com/free-photo/young-handsome-business-man-choosing-car-car-showroom_1303-17901.jpg?size=626&ehxt=jpg&ga=GA1.1.684735313.1698058301&semt=sp",
        name: "Suraj Pandey, Noida",
        course: "PCM",
        feedback: "What truly sets Easyhai Online's apart is their adaptive learning technology. The modified learning path catered to my strengths and weaknesses, ensuring that I was consistently challenged and motivated. This individualized approach to learning faster my progress and boosted my confidence in various subjects like Physics, Chemistry, Biology, etc.",
    },
    {
        img: "https://img.freepik.com/free-photo/portrait-lovely-blond-female-part-time-employee-talking-manager-customer-support_176420-33325.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph",
        name: "Shalu Singh, Allahabad",
        course: "PCM",
        feedback: "Easyhai Online's also provides of practice materials and assessments, which are crucial for learning any subject. The instant feedback and performance analysis helped me point areas where I needed improvement, allowing me to focus my efforts strategically. The modified learning path catered to my strengths and weaknesses, ensuring that I was consistently challenged and motivated. This individualized approach to learning faster my progress and boosted my confidence in various subjects like Physics, Chemistry, Biology, etc.",
    },


]


const Testimonial = () => {
    return (
        <>
            <HeadingCard heading={'Testimonial'} subHeading={'Testimonial'} />

            <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-16 my-24 blogbackground2 mt-[50px]">
                <main className='flex flex-col gap-10 sm:gap-12'>
                    <h5 className="text-[20px] md:text-[30px] text-[#231F40] font-extrabold text-center">What Our Best Student Says</h5>
                    <main className="flex flex-wrap flex-col md:flex-row gap-x-20 gap-y-10 justify-center items-center">
                        <div className='sm:basis-[40%]'><img src="/Testimonial.png" alt="" className='object-cover h-[300px] sm:h-[450px]' /></div>
                        <main className='sm:basis-[40%] flex flex-col gap-10'>
                            <div><img src="/QuotesImg.png" alt="" className='object-contain h-12' /></div>
                            <q className='text-[#6F6B80] sm:text-[19px] font-[600] max-sm:text-justify'>Easyhai Online's online platform is a star trove of knowledge, offering a wide range of engaging and complete resources for learners of all levels. The video lectures, in particular, are a standout feature.
                                The teachers are not only experts in their field but also excellent teachers. They have a unique ability
                                to break down complex concepts into simple, understandable terms, making even the most perplexing physics topics accessible.
                            </q>
                            <main className='flex items-center gap-5'>
                                <div><img src="https://img.freepik.com/premium-photo/portrait-happy-young-casual-man-standing_171337-29744.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph" alt="" className='h-16 rounded-full' /></div>
                                <div>
                                    <div className='text-[#231F40] font-bold sm:text-[19px]'>Gaurav Sen</div>
                                    <div className='text-[#525FE1] font-bold text-[12px] sm:text-[14px]'>NEET</div>
                                </div>
                            </main>
                            <div></div>
                        </main>
                    </main>
                </main>
            </section>

            <section className='lg:px-32 md:px-30 sm:px-10 px-4 py-10 sm:py-10 cursor-pointer '>
                <main className='flex flex-col gap-10 sm:gap-16'>
                    <h5 className="text-[20px] md:text-[30px] text-[#231F40] font-extrabold text-center">Other Students Feedback</h5>
                    <main className="flex flex-wrap flex-col md:flex-row gap-x-8 gap-y-20 items-center justify-center">
                        {feedbackData?.map(value => (
                            <div className="w-[85vw] md:w-[300px] px-5 py-4 rounded-md overflow-hidden shadow-md shadow-black-200 flex flex-col gap-4 hover:bg-[#ececec] hover:transform duration-700 hover:transition-transform delay-100">
                                <div className="flex gap-5">
                                    <img
                                        className="rounded w-16 h-16 object-cover"
                                        src={value.img}
                                        alt=""
                                    />
                                    <div>
                                        <h5 className="text-[16px] text-[#231F40] font-bold text-start">{value.name}</h5>
                                        <p className="text-[#FFC81D] text-sm font-bold mt-2">{value.course}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[12px] sm:text-[12px] font-bold text-[#6F6B80] text-justify line-clamp-5">{value.feedback}</p>
                                    <div className="flex mt-3 gap-1">
                                        <Reviewicon />  <Reviewicon />  <Reviewicon />  <Reviewicon />  <Reviewicon />
                                    </div>
                                </div>

                                <div className="px-3 bg-gray-200 text-gray-700 font-bold text-[14px] rounded-full self-start">#{value.course}</div>
                            </div>

                        ))}
                    </main>
                </main>

                <div className='pt-16 pb-6'>
                    {/* <Pagination /> */}
                </div>
            </section>
        </>
    )
}

export default Testimonial