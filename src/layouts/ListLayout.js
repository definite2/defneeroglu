import { useState } from 'react'
import CustomLink from '@/components/CustomLink'
import Pagination from '@/components/Pagination'
import { formatDate } from 'lib/date'
import Tag from '@/components/Tag'
import Input from '@/components/Forms/Input'
import { motion } from 'framer-motion'
//TODO paginationa later
const ListLayout = ({ posts, title, initialDisplayPosts = [], pagination }) => {
  const [searchValue, setSearchValue] = useState('')
  const filteredPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join('')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })
  const displayPosts = !searchValue ? initialDisplayPosts : filteredPosts
  return (
    <>
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.2,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
              },
            }}
          >
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {title}
            </h1>
          </motion.div>
          <div className="flex items-center max-w-lg">
            <Input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
            />
            <object className="w-6 h-6 -ml-8 text-gray-400" data={'/media/searchIcon.svg'} />
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {' '}
          {!filteredPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter, index) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={index} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <CustomLink
                          href={`/blog/${slug}`}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          {title}
                        </CustomLink>
                      </h3>
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
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

export default ListLayout
