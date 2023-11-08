import React from 'react';
import { ArrowIcon, DateIcon } from '@/utils/icons/icons';
import Link from 'next/link';
import { formatDate } from '@/utils/common-function';

const CourseCardTwo = ({ data }) => {
  return (
    <>
      <div className="group/first w-[85vw] sm:w-[280px]  rounded-lg shadow-2xl">
        <div className=" h-[200px] overflow-hidden rounded-t-lg">
          <img
            src={data?.bannerURI}
            alt=""
            className="w-[100%] h-[100%] object-cover transform duration-700 transition-transform hover:scale-[1.3]"
          />
        </div>
        <main className="flex flex-col flex-wrap gap-3 px-5 py-5">
          <main className="flex flex-wrap gap-2">
            <main className="flex gap-1">
              <div>
                <DateIcon />
              </div>
              <div className="text-[14px] text-[#6F6B80]">
                Actual Price : ₹{data?.actualPrice}
              </div>
            </main>

            <main className="flex gap-1">
              <div>
                <DateIcon />
              </div>
              <div className="text-[14px] text-[#6F6B80]">
                Discount Price : ₹{data?.discountPrice}
              </div>
            </main>
          </main>
          <div className="text-[#231F40] text-[17px] font-bold transition duration-700 group-hover/first:text-[#0A405C] w-[100%]">
            {data?.programName}
          </div>
          <main className="flex justify-between">
            <main className="flex gap-1 items-center">
              <div>
                <DateIcon />
              </div>
              <div className="text-[14px] text-[#6F6B80]">
                {formatDate(data?.createdAt)}
              </div>
            </main>
            <div className="relative group/under overflow-hidden">
              <main className="flex items-center gap-1">
                <Link
                  href={`/program/${data?._id}?name=${data?.programName}`}
                  className="text-[14px] font-bold text-[#FFC81D]"
                >
                  Read More
                </Link>
                <div>
                  <ArrowIcon />
                </div>
              </main>
              <div className="w-full h-1 bg-[#FFC81D] transform translate-y-1/2 -translate-x-[150px] group-hover/under:translate-x-0 duration-700 transition-transform origin-center"></div>
            </div>
          </main>
        </main>
      </div>
    </>
  );
};

export default CourseCardTwo;
