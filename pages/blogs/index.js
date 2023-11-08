// import { BlogsData } from "@/utils/db";
import BlogCard from '@/components/card/BlogCard';
import Pagination from '@/components/features/Pagination';
import HeadingCard from '@/components/card/HeadingCard';
const ServerUri = 'https://www.api.easyhaionline.com';

const BlogPage = ({ data }) => {
  return (
    <>
      <HeadingCard heading={'Blogs'} subHeading={'Some of the courses blog are represented by Easyhai Online for instructing the students about the summary of courses they are interested to pursue in their particular interest course are as follows'
} />

      <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-10">
        <article>
          <main className="flex justify-center sm:justify-between gap-10 flex-wrap">
            {data.map((value) => (
              <BlogCard key={value?._id} data={value} />
            ))}
          </main>

          <Pagination />
        </article>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch(
      `${ServerUri}/api/super-admin/content/blog-list?page=1&count=4`
    );
    const data = await response.json();
    const serializedData = data?.data || [];
    return { props: { data: serializedData } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { data: [] },
    };
  }
}
export default BlogPage;
