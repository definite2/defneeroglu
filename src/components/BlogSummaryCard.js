import CustomLink from './CustomLink'
import Image from 'next/image'
import Tag from './Tag'
import { siteMetadata } from '@/constants/siteMetadata'
import { m  } from 'framer-motion'
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }
export default function BlogSummaryCard(props) {
  const { slug, date, title, summary, tags, image } = props
  return (
    <article className="h-full">
      <CustomLink href={`/blog/${slug}`} className="text-gray-800 dark:text-gray-100">
        <m.div 
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center justify-between h-full overflow-hidden cursor-pointer border-2 border-gray-150  dark:border-gray-800 rounded-lg">
          {image && (
            <div className="relative w-full">
              <header className="relative pb-1/2">
                <Image
                  layout="fill"
                  className="absolute top-0 left-0 object-cover w-full h-full"
                  src={image}
                  alt={title}
                />
              </header>
            </div>
          )}
          <div className="flex w-full justify-center mt-2">
          <dl>
            <dt className="sr-only"> Published on</dt>
            <dd className="text-base  leading-6 text-gray-400 dark:text-gray-400">
              <time dateTime={date}>
                {' '}
                {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}{' '}
              </time>
            </dd>
          </dl>
          </div>
          <section className="flex flex-col h-full px-5 py-5 sm:px-8 ">
            <h2 className="pb-5 text-xl font-semibold leading-tight sm:text-2xl">{title}</h2>
            <div className="flex flex-wrap">
              {tags&&tags.map((tag) => (
                <object key={tag}>
                  <Tag key={tag} text={tag} />
                </object>
              ))}
            </div>
            <div className="prose transition-opacity duration-200 ease-in-out opacity-75 hover:opacity-100 text-gray-500 max-w-none dark:text-gray-400">
              <p>{summary}</p>
            </div>
          </section>
        </m.div>
      </CustomLink>
    </article>
  )
}
