import CustomLink from "@/components/CustomLink";
import PageTitle from "@/components/PageTitle";
import SectionContainer from "@/components/SectionContainer";
import { BlogSeo } from "@/components/Seo";
import { siteMetadata } from "@/constants/siteMetadata";
import Image from "next/image";
import { formatDate } from "lib/date";

const editUrl = (fileName) =>
  `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`;

const postDateTemplate = { year: "numeric", month: "long", day: "numeric" };
export default function PostLayout({ frontMatter, next, prev, children }) {
  const { slug, fileName, title, tags, lastmod } = frontMatter;

  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetadata.siteUrl}/blog/${slug}`} {...frontMatter} />
      <article>
        <div>
          <header className="xl:pb-6">
            <div className="pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700">
              <div className="mb-6">
                <PageTitle>{title}</PageTitle>
              </div>
              <dl className="flex text-base justify-center font-medium leading-6 text-gray-500 dark:text-gray-400">
                <dt className="sr-only">Published on</dt>
                <dd>
                  <time dateTime={lastmod}>{formatDate(lastmod)}</time>
                </dd>
                <span className="dot"></span>
                <span>{frontMatter.readingTime.text}</span>
              </dl>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 "
            style={{ gridTemplateRows: "auto 1fr" }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-8 lg:pt-6 pb-8 prose lg:prose-lg dark:prose-dark max-w-none">
                {children}
              </div>
            </div>

            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <CustomLink
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </CustomLink>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <CustomLink
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 hover:primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </CustomLink>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
