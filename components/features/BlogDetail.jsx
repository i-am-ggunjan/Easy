import React from "react";
import {
  ColorArrowIcon,
  DateIconBlogDetailPage,
  EyeIconBlogDetailPage,
  CommentIconBlogDetailPage,
  InstagramIcon,
  TwitterIcon,
  LinkdInIcon,
  WhatsappIcon,
  LeftArrow,
  RightArrow,
} from "@/utils/icons/icons";
import Head from "next/head";

const BlogDetail = ({ fetchedBlog, lastestBlogsList }) => {

  const threeBlogs = lastestBlogsList?.slice(0, 3);
  const twoBlogs = lastestBlogsList?.slice(3, 5);

  return (
    <>
      <div>
        <Head>
          <title>
            Suicide blast hits mosque in Khyber Pakhtunkhwa, 2nd in Pakistan
            within hours | World News - Hindustan Times
          </title>
          <meta
            name="keywords"
            content="pakistan,suicide attack,blast,suicide blast,khyber pakhtunkhwa,pak khyber pakhtunkhwa"
          />
          <meta
            name="title"
            content="pakistan,suicide attack,blast,suicide blast,khyber pakhtunkhwa,pak khyber pakhtunkhwa"
          />
          <meta
            name="description"
            content="Suicide blast at mosque in Pakistan kills three during Friday prayers. | World News"
          />
          <meta name="robots" content="max-image-preview:large" />

          <meta
            property="og:url"
            content="https://www.hindustantimes.com/world-news/suicide-blast-hits-mosque-in-khyber-pakhtunkhwa-2nd-in-pakistan-within-a-day-101695981298475.html"
          />
          <meta
            property="og:image"
            content="https://www.hindustantimes.com/ht-img/img/2023/09/29/1600x900/PAKISTAN-BLAST--0_1695981425340_1695981443695.JPG"
          />
          <meta
            property="og:image:alt"
            content="People gather outside the Mastung hospital, following a deadly suicide attack on a religious gathering in Balochistan province, Pakistan, September 29, 2023 in this handout image."
          />
        </Head>
      </div>

      <section className="sm:my-10 mt-4 relative">
        <article>
          <img
            src="/BlogImage.png"
            alt=""
            className="w-full h-[150px] sm:h-[185px] absolute -z-40 object-cover"
          />
          <main className="lg:px-44 md:px-30 sm:px-10 px-4 py-10 sm:py-16 sm:text-center">
            <div className="text-[#231F40] line-clamp-1 text-[20px] sm:text-[30px] font-extrabold">
              {fetchedBlog?.title}
            </div>
          </main>
        </article>
      </section>

      <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-10">
        <article>
          <main className="flex justify-between gap-6 flex-wrap sm:pl-[69px] pl-4 max-sm:pr-4">
            <main className="sm:basis-[62%] flex flex-col gap-5">
              <div>
                <img
                  src={fetchedBlog?.bannerLink}
                  alt=""
                  className="w-[100%]"
                />
              </div>

              <main className="flex flex-wrap gap-5">
                <main className="flex gap-1 items-center">
                  <div>
                    <img
                      src="/ProfilePic.png"
                      alt=""
                      className="w-6 h-6 rounded-xl"
                    />
                  </div>
                  <div className="text-[13px] text-[#6F6B80]">Lokesh Rawat</div>
                </main>

                <main className="flex gap-1 items-center">
                  <div>
                    <DateIconBlogDetailPage />
                  </div>
                  <div className="text-[13px] text-[#6F6B80]">17 Feb, 2023</div>
                </main>

                <main className="flex gap-1 items-center">
                  <div>
                    <CommentIconBlogDetailPage />
                  </div>
                  <div className="text-[13px] text-[#6F6B80]">0 Comment</div>
                </main>

                <main className="flex gap-1 items-center">
                  <div>
                    <EyeIconBlogDetailPage />
                  </div>
                  <div className="text-[13px] text-[#6F6B80]">1 Min Read</div>
                </main>
              </main>

              <div className="text-[#231F40] line-clamp-2 text-[16px] md:text-[21px] font-extrabold">
                {fetchedBlog?.description}
              </div>



              <main
                dangerouslySetInnerHTML={{ __html: fetchedBlog?.blog }}
              ></main>


              <main className="flex justify-between gap-6 flex-wrap items-center">
                <div className="md:basis-[25%] basis-[40%]">
                  <img src="/ProfilePic.png" alt="" width={"100%"} />
                </div>
                <main className="flex flex-col gap-2 sm:basis-[70%]">
                  <div>
                    <div className="text-[#231F40] text-[15px] font-extrabold">
                      Lokesh Rawat
                    </div>
                    <div className="text-[13px] text-[#6F6B80] text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Architecto, accusamus. Eligendi aperiam veritatis dolor et
                      ipsum dolor sit amet consectetur adipisicing elie.
                    </div>
                  </div>
                  <main className="flex gap-4 text-[#0A405C]">
                    <WhatsappIcon w={20} h={20} color="#0A405C" />
                    <LinkdInIcon w={20} h={20} color="#0A405C" />
                    <InstagramIcon w={20} h={20} color="#0A405C" />
                    <TwitterIcon w={20} h={20} color="#0A405C" />
                  </main>
                </main>
              </main>

              <main className="my-10 flex flex-col md:flex-row gap-5">
                <main className="px-7 py-5 bg-slate-300 w-full flex items-center justify-between gap-5 rounded-sm">
                  <div>
                    <LeftArrow />
                  </div>
                  <div className="text-[#231F40] text-[15px] font-extrabold">
                    {/* {twoBlogs[0].title} */}
                  </div>
                </main>
                <main className="px-7 py-5 bg-slate-300 w-full flex items-center justify-between gap-2 rounded-sm">
                  <div className="text-[#231F40] text-[15px] font-extrabold">
                    {/* {twoBlogs[1].title} */}
                  </div>
                  <div>
                    <RightArrow />
                  </div>
                </main>
              </main>

              <main className="flex flex-col gap-5">
                <div className="text-[#231F40] text-[18px] font-extrabold">
                  Leave a Reply
                </div>
                <div className="text-[13px] text-[#6F6B80] text-justify">
                  Your email address will not be published. Required fields are
                  marked *
                </div>

                <form className="flex flex-col gap-5">
                  <div className="flex gap-5">
                    <input
                      type="text"
                      placeholder="Name"
                      className="bg-slate-300 text-[13px] rounded-sm outline-none px-4 py-2 w-full"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-slate-300 text-[13px] rounded-sm outline-none px-4 py-2 w-full"
                    />
                  </div>
                  <textarea
                    placeholder="Leave a comment"
                    name=""
                    id=""
                    cols="30"
                    rows="8"
                    className="bg-slate-300 text-[13px] rounded-sm outline-none px-4 py-2 w-full"
                  ></textarea>
                  <div className="flex gap-3 items-center">
                    <input type="checkbox" name="" id="" />
                    <div className="text-[13px] text-[#6F6B80] text-justify">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </div>
                  </div>
                  <div>
                    <button
                      className="bg-[#0A405C] text-white text-[13px] py-2 px-3 rounded-sm"
                      onClick={(e) => e.preventDefault()}
                    >
                      Post A Comment
                    </button>
                  </div>
                </form>
              </main>
            </main>

            <aside className="sm:basis-[30%] basis-[100%] flex flex-col gap-7 py-6">
              <div className="text-[#231F40] text-[18px] font-extrabold">
                Latest Post
              </div>

              {threeBlogs?.map((value) => {
                return (
                  <main className="flex items-center gap-4">
                    <img
                      src="/ProfilePic.png"
                      height={"90px"}
                      width={"90px"}
                      alt=""
                      className=""
                    />
                    <main className="flex flex-col gap-2">
                      <div className="text-[13px] text-[#6F6B80]">
                        17 Feb, 2023
                      </div>
                      <div className="text-[#231F40] line-clamp-2  text-[15px] font-extrabold">
                        {value.title}
                      </div>
                    </main>
                  </main>
                );
              })}


              <div className="my-10 relative">
                <img src="/AdvertisementImage.png" alt="" className="w-full" />
                <main className="bg-no-repeat flex flex-col  gap-3 items-center pt-6 text-white absolute top-1 left-[25%] sm:left-[20%]">
                  <div className="text-[14px]">3 Days Free Trial</div>
                  <div className="text-[18px] font-bold">For New Students</div>
                  <div className="bg-[#FFC81D] flex gap-3 rounded-sm items-center  py-2 px-3">
                    <button
                      className="text-[#231F40]  text-[13px] rounded-sm"
                      onClick={(e) => e.preventDefault()}
                    >
                      Join With Us
                    </button>
                    <ColorArrowIcon />
                  </div>
                </main>
              </div>

              <main className="flex flex-col gap-5">
                <div className="text-[#231F40] text-[18px] font-extrabold">
                  JEE Students Also Check
                </div>
                <main className="px-2 flex flex-col gap-6 items-start">
                  <div className="text-[#231F40] text-[13px] bg-slate-300 rounded-sm px-2 py-1">
                    JEE Main Syllabus
                  </div>
                  <div className="text-[#231F40] text-[13px] bg-slate-300 rounded-sm px-2 py-1">
                    JEE Main Study Material
                  </div>
                  <div className="text-[#231F40] text-[13px] bg-slate-300 rounded-sm px-2 py-1">
                    JEE Main Question paper
                  </div>
                  <div className="text-[#231F40] text-[13px] bg-slate-300 rounded-sm px-2 py-1">
                    JEE Main Syllabus
                  </div>
                </main>
              </main>
            </aside>
          </main>
        </article>
      </section>
    </>
  );

}

export default BlogDetail;


