import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";
import styled, { css } from "styled-components";
import MobileNavbar from "./MobileNavbar";
import navLinks from "@/constants/navLinks";
import React, { useRef } from "react";
import Logo from "./Avatar";
import useScrolling from "@/hooks/useScroll";
const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border: none;
  box-shadow: none;
  background-color: ${(props) => props.theme.background};
  transition: box-shadow 250ms ease-in-out;
  ${(props) =>
    props.isScrolled &&
    css`
      box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
      z-index: 9;
    `};
`;

const Header = () => {
  const reff = useRef(null);
  const scrolled = useScrolling(reff);
  return (
    <Wrapper
      isScrolled={scrolled}
      className="flex items-center justify-between  bg-white dark:bg-gray-900 py-5"
    >
      <div className="w-full justify-between flex xl:max-w-5xl my-0 mx-auto py-1 lg:m ">
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
  );
};
export default Header;
