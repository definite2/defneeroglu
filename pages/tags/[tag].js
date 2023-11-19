import { PageSeo } from '@/components/Seo'
import { siteMetadata } from '@/constants/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import kebabCase from '@/lib/kebapCase'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'

//create paths for tags
export async function getStaticPaths() {
  const tags = await getAllTags('blog')
  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const filteredPosts = allPosts.filter((post) =>
    post.tags.map((t) => kebabCase(t)).includes(params.tag)
  )
  return {
    props: {
      posts: filteredPosts,
      tag: params.tag,
    },
  }
}
export default function Tag({ posts, tag }) {
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  return (
    <>
      <PageSeo
        title={`${tag} - ${siteMetadata.siteUrl}`}
        description={`${tag} tags - ${siteMetadata.siteUrl}`}
      />
      <ListLayout posts={posts} title={`${title} Posts`} />
    </>
  )
}
