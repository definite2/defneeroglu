import CustomLink from "../components/CustomLink";
import { PageSeo } from "../components/Seo";
import siteMetadata from "../constants/siteMetadata";
import { getAllFilesFrontMatter } from "../utils/mdx";
import Tag from "../components/Tag";
const max_post_number = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  return { props: { posts } };
}
export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <p className="text-lg  leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Recents
          </h1>
     
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && "No posts found."}
          {posts.slice(0, max_post_number).map((frontmatter) => {
            const { slug, date, title, summary, tags } = frontmatter;
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only"> Published on</dt>
                      <dd className="text-base  leading-6 text-gray-400 dark:text-gray-400">
                        <time dateTime={date}>{date} </time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <CustomLink
                            href={`/blog/${slug}`}
                            className="text-gray-800 dark:text-gray-100"
                          >
                            {title}
                          </CustomLink>
                        </h2>
                        <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      {<div className="text-base font-medium leading-6">
                        <CustomLink
                          href={`/blog/${slug}`}
                          className="text-green-600 hover:text-green-500 dark:hover:text-green-400"
                          aria-label={`Read "${title}"`}
                        >
                          {" "}
                          Read more &rarr;
                        </CustomLink>
                      </div>}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {posts.length > max_post_number && (
        <div className="flex justify-end text-base font-medium leading-6">
          <CustomLink
            href="/blog"
            className="text-green-500 hover:text-green-600 dark:hover:text-green-400"
            aria-label="all posts"
          >
            More Posts &rarr;
          </CustomLink>
        </div>
      )}
    </>
  );
}
