import { useEffect, useState } from "react";
import { off, on } from "lib/ui";

const useScrolling = (ref) => {
  const [scrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    const isScrolled = window.pageYOffset > 0;
    setScrolling(isScrolled);
  };
  useEffect(() => {
    on(window, "scroll", handleScroll, { passive: true });
    return () => {
      off(window, "scroll", handleScroll, { passive: true });
    };
  }, [ref]);
  return scrolling;
};

export default useScrolling;
