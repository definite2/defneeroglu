import { getAllFilesFrontMatter } from 'lib/mdx'
import { siteMetadata } from '@/constants/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/Seo'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Blog({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSeo
        title={`Software Post List - ${siteMetadata.siteUrl}`}
        description={`Searchable and paginated list of all software development related posts of ${siteMetadata.siteUrl}.`}
      />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
