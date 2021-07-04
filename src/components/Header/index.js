import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";
import siteMetaData from "../../constants/siteMetadata";
import MobileNavbar from "./MobileNavbar";
import navLinks from "../../constants/navLinks";
import Image from "next/image";
import avatar from "../../../public/images/me.jpg";
const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      {/* begin::website logo */}
      <Link href="/">
        <a aria-label="My avatar, website logo" className="flex items-center border-white group focus-visible:outline-accent">
        <div className="flex items-center justify-between">
          <div className="mr-3 overflow-hidden transition-transform ease-in-out border-2 rounded-full w-12 h-12 group-hover:-translate-y-1">
            <Image
              src={avatar}
              alt="My avatar"
              width={80}
              height={80}
              priority={true}
              
            />
          </div>
          {typeof siteMetaData.headerTitle === "string" ? (
            <div className="hidden h-8 text-2xl font-semibold sm:block">
              {siteMetaData.headerTitle}
            </div>
          ) : (
            siteMetaData.headerTitle
          )}
         </div>
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
    </header>
  );
};
export default Header;
