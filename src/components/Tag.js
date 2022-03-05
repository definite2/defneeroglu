import Link from 'next/link'
import kebabCase from 'lib/kebapCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="flex items-center mr-3 text-xs font-medium uppercase  text-primary-500 hover:text-primary-600">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
