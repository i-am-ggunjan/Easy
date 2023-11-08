import React, { useState } from 'react';
import CourseCardTwo from '@/components/card/CourseCardTwo';
import HeadingCard from '@/components/card/HeadingCard';
import { CoursesData } from '@/utils/db';

const StreamDetail = ({ courses, pathname }) => {
  console.log("Category Page ::: ", courses)

  let current_item = CoursesData.find((obj) => obj.path === pathname);
  return (
    <>
      <HeadingCard heading={'Courses'} subHeading={'Courses Page'} />
      <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-10 pb-24">
        <article className="flex flex-col gap-16">
          <main className="flex flex-col items-start gap-6">
            <div className="text-[#231F40] md:text-[28px] text-[20px] font-bold border-b-[3px] border-[#231F40] text-start uppercase">
              {pathname}
            </div>
            <div className="text-[14px] sm:text-[18px] text-[#6F6B80] text-justify">
              {current_item?.des}
            </div>
          </main>

          <main className="flex justify-center sm:justify-between gap-10 flex-wrap md:px-12">
            {courses?.map((value) => (
              <CourseCardTwo key={value._id} data={value} />
            ))}
          </main>
        </article>
      </section>
    </>
  );
};

export default StreamDetail;

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const pathname = params.stream;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/api/super-admin/progams/get-programs`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          streamBased: true,
          stream: pathname?.toUpperCase(),
        }),
      }
    );
    const result = await response.json();
    return { props: { courses: result, pathname } };
  } catch (error) {
    return { props: { courses: null, pathname: null } };
  }
}

export const getStaticPaths = () => {
  return {
    // paths: CoursesData.map((prm) => ({ params: { stream: prm?.path } })),
    paths: [{ params: { stream: "ncert" } }],
    fallback: true,
  };
};
