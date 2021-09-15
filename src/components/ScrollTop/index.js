import Image from "next/image";
import scroll from "./scrolltotop.svg";
import useScrolling from "@/hooks/useScroll";
import styled, { css } from "styled-components";
export default function ScrollToTop() {
  const shouldShow = (props) => {
    if (props.scrolled) {
      if (props.showOnScroll) return true;
      if (props.hideOnScroll) return false;
    }
    if (props.showOnScroll) return false;
    return true;
  };

  const Scroll = styled.button`
    transition: opacity 500ms ease-in-out,transform 700ms ease-in-out;

    ${(props) => {
      if (shouldShow(props)) {
        return css`
          opacity: 1;
          transform: translateY(0);
        `;
      }
      return css`
        opacity: 0;
        transform: translateY(100px);
      `;
    }};
  `;
  const isscrolled = useScrolling(924);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Scroll
      scrolled={isscrolled}
      className=" overflow-hidden fixed bottom-4 cursor-pointer right-8 transform-transition hover:-translate-y-2 "
      onClick={scrollToTop}
      showOnScroll
    >
      <Image src={scroll} width="48" height="48" color="pink" />
    </Scroll>
  );
}
