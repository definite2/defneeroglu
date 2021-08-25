import ListLayout from "@/layouts/ListLayout";
import { PageSeo } from "@/components/Seo";
import {siteMetadata} from "@/constants/siteMetadata";
import { getAllFilesFrontMatter } from "lib/mdx";
export const POSTS_PER_PAGE = 5;
export const getStaticPaths = async () => {
  const posts = await getAllFilesFrontMatter("blog");
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
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
  const posts=await getAllFilesFrontMatter('blog');
  const pageNumber=parseInt(page);
  const initialDisplayPosts=posts.slice(POSTS_PER_PAGE*(pageNumber-1),POSTS_PER_PAGE*pageNumber);
  const pagination={
    currentPage:pageNumber,
    totalPages:Math.ceil(posts.length/POSTS_PER_PAGE)
  };
  return{
    props:{
      posts,
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