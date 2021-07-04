import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
const NavLink = (props) => {
  const { href, exact, children, ...others } = props;
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a
        className={`p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100 ${
          isActive ? "active" : ""
        }`}
        {...others}
      >
        {children}
      </a>
    </Link>
  );
};
export default NavLink;
NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool
};
