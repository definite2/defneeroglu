import React, { useRef } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { siteMetadata } from "@/constants/siteMetadata";
import useScrolling from "@/hooks/useScroll";
const shouldShow = (props) => {
  if (props.scrolled) {
    if (props.showOnScroll) return true;
    if (props.hideOnScroll) return false;
  }
  if (props.showOnScroll) return false;
  return true;
};

const Visibility = styled.span`
  transition: opacity 500ms ease-out, margin 500ms ease-in-out;

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
          className="overflow-hidden transition-transform ease-in-out border-0 group-hover:-translate-y-1 font-semibold text-xl"
        >
          <Visibility scrolled={isScrolled} showOnScroll>
            &lt;
          </Visibility>
          <Visibility>{siteMetadata.headerTitle}</Visibility>
          <Visibility
            scrolled={isScrolled}
            default={0}
            showOnScroll
            marginOnHide="0"
          >
            &nbsp;/&gt;
          </Visibility>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
