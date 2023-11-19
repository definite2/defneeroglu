import ThemeToggle from './ThemeToggle'
import NavLink from './NavLink'
import MobileNavbar from './MobileNavbar'
import navLinks from '@/constants/navLinks'
import React from 'react'
import Logo from './Logo'
import useScrollingUp from '@/hooks/useScrollingUp'

const Header = () => {
  const scrolledToTop = useScrollingUp()
  return (
    <>
      <nav
        style={{ height: '100px' }}
        className={`${
          scrolledToTop
            ? 'fixed top-0 left-0 w-full z-10 shadow-nav dark:shadow-2xl'
            : 'col-span-12 shadow-none'
        } transition-shadow duration-300 ease-out flex  items-center justify-between border-0 xl:grid xl:grid-cols-12 gap-1 bg-primary-light dark:bg-gray-900 py-6`}
      >
        <div className="w-full xl:col-span-10 xl:col-start-2 flex justify-between px-5 sm:px-0 ">
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
      <div
        style={{ height: 100 }}
        className={`${scrolledToTop ? 'block' : 'hidden'} col-span-12`}
      ></div>
    </>
  )
}
export default Header
