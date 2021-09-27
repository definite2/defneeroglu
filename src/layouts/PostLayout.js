import CustomLink from '@/components/CustomLink'
import PageTitle from '@/components/PageTitle'
import { BlogSeo } from '@/components/Seo'
import { siteMetadata } from '@/constants/siteMetadata'
import { formatDate } from 'lib/date'
import { TOC } from '@/components/mdx/TOC'
import clsx from 'clsx'
import Image from 'next/image'
export default function PostLayout({ frontMatter, next, prev, children }) {
  const { slug, fileName, title, tags, lastmod, isToc, image,alt } = frontMatter

  return (
    <>
      <BlogSeo url={`${siteMetadata.siteUrl}/blog/${slug}`} {...frontMatter} />
      <div
        className={clsx('relative flex xl:justify-between justify-center my-12', {
          'flex-row-reverse': Boolean(isToc),
        })}
      >
        {isToc && (
          <aside className="sticky hidden h-screen  max-w-xs mt-1/3 xl:mt-1/4 3xl:mt-1/5 top-32 xl:block">
            <TOC />
          </aside>
        )}
        <article className="text-base max-w-prose lg:text-lg xl:max-w-xl 2xl:max-w-2.5xl 3xl:max-w-3xl 4xl:max-w-4xl min-w-0">
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

              <Image className="w-full" src={image} width="900px" height="600px" alt={alt} />
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
      </div>
    </>
  )
}
