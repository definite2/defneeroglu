import kebabCase from 'lib/kebapCase'
import CustomLink from '@/components/CustomLink'

const Tag = ({ text }) => {
  return (
    <CustomLink
      className="flex items-center mr-3 text-xs font-medium uppercase  text-primary-500 hover:text-primary-600"
      href={`/tags/${kebabCase(text)}`}
    >
      {text.split(' ').join('-')}
    </CustomLink>
  )
}

export default Tag
