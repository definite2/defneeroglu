import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";
import siteMetaData from "../../constants/siteMetadata";
import MobileNavbar from "./MobileNavbar";
import navLinks from "../../constants/navLinks";
const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <nav>
        {/* begin::website logo */}
        <Link href="/">
          <a className="flex items-center" aria-label="My avatar, website logo">
            <div className="overflow-hidden transition-transform ease-in-out border-2 rounded-full w-9 h-9 group-hover:-translate-y-1">
              Defneee
            </div>
            {typeof siteMetaData.headerTitle === "string" ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetaData.headerTitle}
              </div>
            ) : (
              siteMetaData.headerTitle
            )}
          </a>
        </Link>
        {/* end::website logo */}
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {navLinks.map((route, i) => (
              <NavLink key={i} href={route.href}>
                {route.title}
              </NavLink>
            ))}
          </div>
          <ThemeToggle />
          <MobileNavbar />
        </div>
      </nav>
    </header>
  );
};
export default Header;
