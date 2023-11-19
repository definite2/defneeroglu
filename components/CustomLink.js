import Link from 'next/link'
import PropTypes from 'prop-types'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href?.startsWith('/')
  const isAnchorLink = href?.startsWith('#')

  if (isInternalLink) {
    return <Link href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

CustomLink.propTypes = {
  href: PropTypes.string,
}

export default CustomLink
