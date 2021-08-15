import React, { useRef } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import {siteMetadata} from "@/constants/siteMetadata";
import useScrolling from "@/hooks/useScroll";
const shouldShow = (props) => {
  if (props.scrolled) {
    if (props.showOnScroll) return true;
    if (props.hideOnScroll) return false;
  }
  if (props.showOnScroll) return false;
  return true;
};

const Handle = styled.span`
  transition: opacity 500ms ease-out, margin 500ms ease-in-out;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;

  ${(props) => {
    if (shouldShow(props)) {
      return css`
        opacity: 1;
        margin-left: ${props.marginOnHide || ".5rem"};
      `;
    }
    return css`
      opacity: 0;
      margin-right: ${props.marginOnHide || "-.5rem"};
    `;
  }};
`;
const Handle2 = styled.span`
  transition: opacity 500ms ease-out, margin 500ms ease-in-out;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  ${(props) => {
    if (shouldShow(props)) {
      return css`
        opacity: 1;
      `;
    }
    return css`
      opacity: 0;
      margin-right: ${props.marginOnHide || "-1.5rem"};
    `;
  }};
`;
const Logo = () => {
  const rref = useRef(null);
  const isScrolled = useScrolling(rref);
  return (
    <Link href="/">
      <a
        aria-label="My avatar, website logo"
        className="flex items-center border-white group focus-visible:outline-accent h-full:hidden"
      >
        <div
          ref={rref}
          className="overflow-hidden transition-transform ease-in-out border-0 group-hover:-translate-y-1"
        >
          <Handle scrolled={isScrolled} showOnScroll className="lg:-ml-1 ml-1">
            &lt;
          </Handle>
          <Handle2 scrolled={isScrolled} hideOnScroll >
            {siteMetadata.headerTitle}
          </Handle2>
          <Handle2 scrolled={isScrolled} showOnScroll className="-ml-10">
           Home
          </Handle2>
          <Handle scrolled={isScrolled} default={0} showOnScroll marginOnHide="0">
            &nbsp;/&gt;
          </Handle>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
