import BlogDetail from '@/components/features/BlogDetail';
// import { BlogsData } from '@/utils/db';
const ServerUri = 'https://www.api.easyhaionline.com';

// export async function getStaticPaths() {
//   const paths = BlogsData.map((blog) => ({
//     params: { blogId: blog.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

export async function getServerSideProps({ params }) {
  console.log("Blog Param ::: ", params)
  const toReturn = { 'fetchedBlog': null, 'lastestBlogsList': null };
  try {
    const response = await fetch(
      `${ServerUri}/api/super-admin/content/blog?blogId=${params?.blogId}`
    );
    const data = await response.json();
    if (data?.status) {
      toReturn['fetchedBlog'] = data?.data;
    }
    const _response = await fetch(
      `${ServerUri}/api/super-admin/content/blog-list?page=1`
    );
    const resultList = await _response.json();
    if (resultList?.status) {
      toReturn['lastestBlogsList'] = resultList?.data;
    }
    return {
      props: toReturn,
    };
  } catch (error) {
    return {
      props: toReturn,
    };
  }
}

const BlogDetailPage = ({ fetchedBlog, lastestBlogsList }) => {
  // console.log("-----------------------------------")
  // console.log("fetchedBlog, lastestBlogsList : ", { fetchedBlog, lastestBlogsList })
  // console.log("-----------------------------------")

  return (
    <>
      <BlogDetail
        fetchedBlog={fetchedBlog}
        lastestBlogsList={lastestBlogsList}
      />
    </>
  );
};

export default BlogDetailPage;
