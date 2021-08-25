import CustomLink from '../components/CustomLink'
import { PageSeo } from '../components/Seo'
import { siteMetadata } from '../constants/siteMetadata'
import { getAllFilesFrontMatter } from '../lib/mdx'
import Tag from '../components/Tag'
import Image from 'next/image'
const max_post_number = 6
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
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
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 sm:gap-8">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, max_post_number).map((frontmatter) => {
            const { slug, date, title, summary, tags, images } = frontmatter
            return (
              <li key={slug} className="pt-6">
                <article>
                  <CustomLink href={`/blog/${slug}`} className="text-gray-800 dark:text-gray-100">
                    <div className="flex flex-col items-center justify-between h-full overflow-hidden cursor-pointer transition-all duration-200 ease-in-out transform border-2 border-gray-100 rounded-lg hover:scale-105 hover:shadow-xl">
                      <div className="relative w-full">
                        <header className="relative pb-1/2">
                          <Image
                            layout="fill"
                            className="absolute top-0 left-0 object-cover w-full h-full"
                            src={images[0]}
                            alt={title}
                          />
                        </header>
                      </div>
                      <dl>
                        <dt className="sr-only"> Published on</dt>
                        <dd className="text-base  leading-6 text-gray-400 dark:text-gray-400">
                          <time dateTime={date}>
                            {' '}
                            {new Date(date).toLocaleDateString(
                              siteMetadata.locale,
                              postDateTemplate
                            )}{' '}
                          </time>
                        </dd>
                      </dl>
                      <section className="flex flex-col h-full px-5 py-5 sm:px-8 sm:py-10">
                        <h2 className="pb-5 text-xl font-semibold leading-tight sm:text-2xl">
                          {title}
                        </h2>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                        <div className="prose transition-opacity duration-200 ease-in-out opacity-75 hover:opacity-100 text-gray-500 max-w-none dark:text-gray-400">
                          <p>{summary}</p>
                        </div>
                      </section>
                    </div>
                  </CustomLink>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > max_post_number && (
        <div className="flex justify-end text-base font-medium leading-6 my-5">
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
  )
}
