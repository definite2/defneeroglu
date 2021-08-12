import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";
import styled, { css } from "styled-components";
import MobileNavbar from "./MobileNavbar";
import navLinks from "@/constants/navLinks";
import React, { useRef } from "react";
import Logo from "./Avatar";
import useScrolling from "@/hooks/useScroll";
const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  border: none;
  box-shadow: none;
  padding: 2rem 0;
  background-color: white;
  transition: box-shadow 250ms ease-in-out, background 250ms ease-in-out;
  ${(props) =>
    props.isScrolled &&
    css`
    background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
      z-index: 9;
    `};
`;
const Header = () => {
  const reff = useRef(null);
  const scrolled = useScrolling(reff);
  return (
    <Wrapper isScrolled={scrolled}>
      <Logo />
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
    </Wrapper>
  );
};
export default Header;
