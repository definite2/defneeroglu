import { useEffect, useState } from "react";
import { off, on } from "lib/ui";

const useScrolling = (offset) => {
  const [scrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    const isScrolled = window.pageYOffset > offset;
    setScrolling(isScrolled);
  };
  useEffect(() => {
    on(window, "scroll", handleScroll, { passive: true });
    return () => {
      off(window, "scroll", handleScroll, { passive: true });
    };
  }, []);
  return scrolling;
};

export default useScrolling;
