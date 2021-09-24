import { useEffect } from 'react'
import CustomLink from '../components/CustomLink'
import { PageSeo } from '../components/Seo'
import { siteMetadata } from '../constants/siteMetadata'
import { getAllFilesFrontMatter } from '../lib/mdx'
import BlogSummaryCard from '@/components/BlogSummaryCard'
import AlertDialog from '@/components/AlertDialog'
import useAlert from '@/hooks/useAlert'
import { AlertContainer } from '@/components/AlertDialog/AlertContainer'
const max_post_number = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }) {
  useEffect(() => {
    open()
  }, [])

  const { open, close, alertDialogOpen } = useAlert()
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <AlertContainer>
        {alertDialogOpen && (
          <AlertDialog
            alertDialogOpen={alertDialogOpen}
            message={"Thank you for visiting my blog; it's still under construction "}
            success={false}
            title={'Under construction 🚧!'}
            handleClose={close}
          />
        )}
      </AlertContainer>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pb-10 pt-20 space-y-2 md:space-y-5">
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
            const { slug, date, title, summary, tags, image } = frontmatter
            return (
              <li key={slug} className="pt-6">
                <BlogSummaryCard
                  slug={slug}
                  date={date}
                  title={title}
                  summary={summary}
                  tags={tags}
                  image={image}
                />
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
