import React from 'react';
import { DateIcon } from '@/utils/icons/icons';
import CourseCardOne from '@/components/card/CourseCardOne';
import HeadingCard from '@/components/card/HeadingCard';
import { CoursesData } from '@/utils/db';

const Courses = ({ courses }) => {
  console.log("Course Page ::: ", courses)
  return (
    <>
      <HeadingCard heading={'Courses'} subHeading={'Welcome to our Course Page, your gateway to a world of knowledge, skill development, and personal growth. Here, you ll find a diverse range of courses designed to cater to your interests, aspirations, and educational needs'} />

      <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-10">
        <article className="flex flex-col gap-14">
          <main className="flex md:justify-between gap-5 md:gap-10 flex-wrap justify-start md:px-28 px-3">
            <div className="text-[16px] text-[#6F6B80]">
              Showing all the Courses
            </div>
            <div className="flex items-center gap-2 border-2 px-3 rounded-[5px]">
              <input
                placeholder="Search Courses"
                className="text-[15px] py-1 outline-none"
              />
              <div>
                <DateIcon />
              </div>
            </div>
          </main>

          <main className="flex justify-center sm:justify-around gap-10 flex-wrap md:px-24">
            {courses && courses.length > 0
              ? courses.map((value) => {
                let current_item = CoursesData.find(
                  (obj) => obj.name === value.stream
                );
                return (
                  <CourseCardOne
                    key={`${value.stream}`}
                    data={value}
                    current_item={current_item}
                  />
                );
              })
              : `No Content Found`}
          </main>
        </article>
      </section>
    </>
  );
};

export default Courses;

export async function getStaticProps() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/api/super-admin/progams/get-programs`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'streamBased': true }),
      }
    );
    const result = await response.json();
    return { props: { courses: result } };

  } catch (error) {
    console.log("Error ::: ", error)
    return { props: { courses: null } };
  }
}
