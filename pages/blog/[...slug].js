import fs from "fs";
import PostTitle from "@/components/PostTitle";
import {
  getAllFilesFrontMatter,
  formatSlug,
  getFilesBySlug,
  getFiles,
} from "@/lib/mdx";
import { MdxLayoutRenderer } from "@/components/mdx/index";
import { generateRss } from "@/lib/generateRss";

const DEFAULT_LAYOUT = "PostLayout";

export const getStaticPaths = async () => {
  const posts = getFiles("blog");
  return {
    paths: posts.map((post) => ({
      params: { slug: formatSlug(post).split("/") },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const allPosts = await getAllFilesFrontMatter("blog");
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params.slug.join("/")
  );
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getFilesBySlug("blog", params.slug.join("/"));
  const authorList = post.frontMatter.authors || ["default"];
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFilesBySlug("authors", [author]);
    return authorResults.frontMatter;
  });
  const rss = generateRss(allPosts);
  fs.writeFileSync("./public/feed.xml", rss);

  const authorDetails = await Promise.all(authorPromise);
  return { props: { post, authorDetails, prev, next } };
};

const Blog = ({ post, authorDetails, prev, next }) => {
  const { mdxSource, frontMatter } = post;

  return (
    <>
      {!frontMatter.draft ? (
        <MdxLayoutRenderer
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PostTitle>
            Under Construction{" "}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PostTitle>
        </div>
      )}
    </>
  );
};

export default Blog;
