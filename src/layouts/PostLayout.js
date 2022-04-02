import CustomLink from '@/components/CustomLink'
import PageTitle from '@/components/PageTitle'
import { BlogSeo } from '@/components/Seo'
import { siteMetadata } from '@/constants/siteMetadata'
import { formatDate } from 'lib/date'
import { TOC } from '@/components/mdx/TOC'
import Image from 'next/image'

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
      <div
        className={`relative w-full flex xl:${
          isToc ? 'justify-between' : 'justify-center'
        } justify-center`}
      >
        <article className="w-full xl:max-w-3xl 2xl:max-w-5xl 3xl:max-w-7xl 3xl:ml-28 2xl:ml-12">
          <div>
            <header className="xl:pb-6 xl:ml-40">
              <div className="pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700">
                <div className="mb-6">
                  <PageTitle>{title}</PageTitle>
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
              <div className="flex justify-center items-center">
                <Image className="w-full" src={image[0]} width="900px" height="600px" alt={alt} />
              </div>
            </header>

            <div
              className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 "
              style={{ gridTemplateRows: 'auto 1fr' }}
            >
              <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
                <div
                  id="post-body"
                  className="pt-8 lg:pt-6 pb-8 prose lg:prose-lg dark:prose-dark max-w-none"
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        </article>
        {isToc && (
          <aside
            style={{ paddingTop: frontMatter.tocPaddingTop ? frontMatter.tocPaddingTop : '2rem' }}
            className="sticky hidden h-screen max-w-xs mt-4/5 top-32 bottom-4 pl-4 xl:block"
          >
            <TOC />
          </aside>
        )}
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
