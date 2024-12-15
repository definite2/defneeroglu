import CustomLink from '@/components/CustomLink'
import PostTitle from '@/components/PostTitle'
import { BlogSeo } from '@/components/Seo'
import { siteMetadata } from '@/constants/siteMetadata'
import { formatDate } from 'lib/date'
import Sidebar from '@/components/Sidebar'

export default function PostLayout({ frontMatter, next, prev, children }) {
  const { slug, fileName, title, tags, lastmod, isToc, image, alt, summary } = frontMatter

  return (
    <>
      <BlogSeo
        title={fileName}
        tags={tags}
        lastmod={lastmod}
        summary={summary}
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        {...frontMatter}
        images={image}
      />
      <div>
        <article className="w-full">
          <div>
            <header className="xl:pb-6">
              <div className="pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700">
                <div className="mb-6">
                  <PostTitle>{title}</PostTitle>
                </div>
                <dl className="flex flex-col sm:flex-row text-base justify-center font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <dt className="sr-only">Published on</dt>
                  <dd>
                    Updated on <time dateTime={lastmod}>{formatDate(lastmod)}</time>
                  </dd>
                  <div className="dot"></div>
                  <div>{frontMatter.readingTime.text}</div>
                </dl>
              </div>
              <img className="w-full" src={image[0]} height={600} alt={alt} />
            </header>

            <div id="post-body" className="pt-8 lg:pt-6 pb-8 prose dark:prose-dark max-w-none">
              {children}
            </div>
          </div>
        </article>
        {isToc && <Sidebar />}
      </div>
      <div className="mb-8">
        <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
          {prev && (
            <div className="pt-4 xl:pt-8 xl:pr-4">
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
      </div>
    </>
  )
}
