import ThemeToggle from './ThemeToggle'
import NavLink from './NavLink'
import styled, { css } from 'styled-components'
import MobileNavbar from './MobileNavbar'
import navLinks from '@/constants/navLinks'
import React, { useRef } from 'react'
import Logo from './Logo'
import useScrolling from '@/hooks/useScroll'
const Wrapper = styled.nav`
  box-shadow: none;
  transition: box-shadow 250ms ease-in-out;
  ${(props) =>
    props.isScrolled &&
    css`
      box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
      z-index: 9;
    `};
`

const Header = () => {
  const scrolled = useScrolling(0)
  return (
    <Wrapper
      isScrolled={scrolled}
      className="fixed top-0 left-0 w-full flex items-center justify-between border-0 xl:grid xl:grid-cols-10 gap-1 bg-primary-light dark:bg-gray-900 py-6"
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
    </Wrapper>
  )
}
export default Header
