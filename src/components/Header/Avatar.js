import React, { useRef } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import siteMetaData from "@/constants/siteMetadata";
import avatar from "../../../public/media/me.jpg";
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
      `;
    }
    return css`
      opacity: 0;
      margin-right: ${props.marginOnHide || "-.5em"};
    `;
  }};
`;
const ImageWrapper = styled.div`
  transition: display 250ms ease-out, margin 250ms ease-in-out;
  ${(props) => {
    if (shouldShow(props)) {
      return css`
        display: flex;
      `;
    }
    return css`
      display: none;
      margin-right: ${props.marginOnHide || "-.5em"};
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
        <div className="flex items-center justify-between">
          <div
            ref={rref}
            className="mr-3 overflow-hidden transition-transform ease-in-out border-o  group-hover:-translate-y-1"
          >
            <Handle scrolled={isScrolled} showOnScroll>
              &lt;
            </Handle>
            <Handle scrolled={isScrolled} showOnScroll>
              Home
            </Handle>
            <Handle scrolled={isScrolled} default={0} showOnScroll>
              &nbsp;/&gt;
            </Handle>
         
          </div>
          {typeof siteMetaData.headerTitle === "string" ? (
            <>
              <Handle scrolled={isScrolled} showOnScroll>
                &lt;
              </Handle>
              <Handle scrolled={isScrolled} hideOnScroll marginOnHide="-.2em">
                {siteMetaData.headerTitle}
              </Handle>
              <Handle scrolled={isScrolled} default={0} showOnScroll>
                &nbsp;/&gt;
              </Handle>
            </>
          ) : (
            siteMetaData.headerTitle
          )}
        </div>
      </a>
    </Link>
  );
};

export default Logo;
