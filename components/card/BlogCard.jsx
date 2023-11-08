import React from "react";
import { TagIcon, ArrowIcon, DateIcon } from "@/utils/icons/icons";
import Link from "next/link";
const BlogCard = ({ data }) => {
  const originalDate = new Date(data.createdAt);

  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = originalDate.toLocaleDateString("en-US", options);

  return (
    <div className="group/first w-[85vw] md:w-[300px] bg-white rounded-lg shadow-md">
      <div className=" h-[190px] overflow-hidden rounded-t-lg">
        <img
          src={data.bannerLink}
          alt=""
          className="w-[100%] h-[100%] object-cover transform duration-700 transition-transform hover:scale-[1.3]"
        />
      </div>
      <main className="flex flex-col gap-3 px-5 py-5">
        <main className="flex gap-1">
          <div>
            <TagIcon />
          </div>
          <div className="text-[14px] text-[#6F6B80]">
            {data.tagList && data.tagList.length > 0
              ? data.tagList[0]
              : "No tags"}
          </div>
        </main>
        <div className="text-[#231F40] line-clamp-2 text-[18px] font-bold transition duration-700 group-hover/first:text-[#0A405C] w-[100%]">
          {data.title}
        </div>
        <main className="flex justify-between">
          <main className="flex gap-1 items-center">
            <div>
              <DateIcon />
            </div>
            <div className="text-[14px] text-[#6F6B80]">{formattedDate}</div>
          </main>
          <div className="relative group/under overflow-hidden">
            <main className="flex items-center gap-1">
              <Link href={`blog/${data?.blogId}`}>  <div className="text-[14px] font-bold text-[#FFC81D] cursor-pointer">
                Read More
              </div></Link>
              <div>
                <ArrowIcon />
              </div>
            </main>
            <div className="w-full h-1 bg-[#FFC81D] transform translate-y-1/2 -translate-x-[150px] group-hover/under:translate-x-0 duration-700 transition-transform origin-center"></div>
          </div>
        </main>
      </main>
    </div>
  );
};

export default BlogCard;
