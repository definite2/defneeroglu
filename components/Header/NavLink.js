import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import CustomLink from '../CustomLink'

const NavLink = (props) => {
  const { href, exact, children, ...others } = props
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  return (
    <CustomLink
      href={href}
      className={`p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100 ${
        isActive ? 'active' : ''
      }`}
      {...others}
    >
      {children}
    </CustomLink>
  )
}
export default NavLink
NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
}
