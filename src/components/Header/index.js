import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import NavLink from "../NavLink";
import siteMetaData from "../../configs/siteMetadata";
const routes = [
  {
    path: "/blog",
    label: "BLOG",
  },
  {
    path: "/projects",
    label: "PROJECTS",
  },
  {
    path: "/about",
    label: "ABOUT",
  },
];
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
        <div className="lex items-center text-base leading-5">
          <div className="hidden sm:block">
            {routes.map((route, i) => (
              <NavLink key={i} href={route.path}>
                {route.label}
              </NavLink>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
export default Header;
