import CustomLink from "@/components/CustomLink";
import PageTitle from "@/components/PageTitle";
import SectionContainer from "@/components/SectionContainer";
import { BlogSeo } from "@/components/Seo";
import siteMetadata from "@/constants/siteMetadata.json";
const editUrl = (fileName) =>
  `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`;

const postDateTemplate = { year: "numeric", month: "long", day: "numeric" };
export default function PostLayout({ frontMatter, next, prev, children }) {
  const { slug, fileName, date, title, tags } = frontMatter;

  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetadata.siteUrl}/blog/${slug}`} {...frontMatter} />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700">
              <div className="mb-6">
                <PageTitle>{title}</PageTitle>
              </div>
              <dl>
                <div className="flex text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <dt className="sr-only">Published on</dt>
                  <dd>
                    {new Date(date).toLocaleDateString(
                      siteMetadata.locale,
                      postDateTemplate
                    )}
                  </dd>
                  <span class="dot"></span>
                  <span>{frontMatter.readingTime.text}</span>
                </div>
              </dl>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 "
            style={{ gridTemplateRows: "auto 1fr" }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none font-sans  font-medium">
                {children}
              </div>
            </div>
            {/* <Comments frontMatter={frontMatter} /> */}
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
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
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
