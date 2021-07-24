import ListLayout from "../../../components/Layout/ListLayout";
import { PageSeo } from "../../../components/Seo";
import siteMetadata from "../../../constants/siteMetadata.json";
import { getAllFilesFrontMatter } from "../../../utils/mdx";
export const POSTS_PER_PAGE = 5;
export const getStaticPaths = async () => {
  const allPosts = await getAllFilesFrontMatter("blog");
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const{params:{page}}=context;
  const allPosts=await getAllFilesFrontMatter('blog');
  const pageNumber=parseInt(page);
  const initialDisplayPosts=allPosts.slice(POSTS_PER_PAGE*(pageNumber-1),POSTS_PER_PAGE*pageNumber);
  const pagination={
    currentPage=pageNumber,
    totalPages:Math.ceil(allPosts.length/POSTS_PER_PAGE)
  };
  return{
    props:{
      posts:allPosts,
      initialDisplayPosts,
      pagination
    }
  }
};
export default function PostPage({posts,initialDisplayPosts,pagination}){
  return(
    <>
    <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
    <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} title="All Posts"
    />
    </>
  )
}