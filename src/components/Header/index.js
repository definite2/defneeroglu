import ThemeToggle from './ThemeToggle'
import NavLink from './NavLink'
import MobileNavbar from './MobileNavbar'
import navLinks from '@/constants/navLinks'
import React from 'react'
import Logo from './Logo'
import useScrollingUp from '@/hooks/useScrollingUp'

const Header = () => {
  const scrolled = useScrollingUp()
  return (
    <nav
      className={`${
        scrolled ? 'fixed top-0 left-0 w-full z-10 shadow-nav' : 'col-span-10 shadow-none'
      } transition-all duration-500 ease-in-out flex  items-center justify-between border-0 xl:grid xl:grid-cols-10 gap-1 bg-primary-light dark:bg-gray-900 py-6`}
    >
      <div className="w-full xl:col-span-6 xl:col-start-3 flex justify-between lg:px-40  xl:px-12 px-5 ">
        <Logo />
        <div className="flex justify-between items-center text-base leading-5">
          <div className="hidden sm:block">
            {navLinks.map((route, i) => (
              <NavLink key={i} href={route.href}>
                {route.title}
              </NavLink>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
      <MobileNavbar />
    </nav>
  )
}
export default Header
