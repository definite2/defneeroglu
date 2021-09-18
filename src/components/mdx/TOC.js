import { useState, useEffect } from "react";
import classNames from "classnames";
import useIntersectNode from "@/hooks/useIntersection";
import clsx from "clsx";
import CustomLink from "../CustomLink";

export function TOC() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h4")
    );
    setHeadings(headingElements);
  }, []);

  const [activeNode] = useIntersectNode(
    ["#introduction", ...headings.map((heading) => `#${heading.id}`)],
    `0% 0% -55% 0%`,
    1
  );

  // Function to determine the Heading Level based on `nodeName` (H2, H3, etc)
  const getLevel = (nodeName) => {
    return Number(nodeName.replace("H", ""));
  };

  return (
    <nav className="toc text-fore-subtle">
      <h2 className="font-semibold text-gray-800 dark:text-gray-200 tracking-widestest">
        Table Of Contents
      </h2>

      {headings.map((heading) => {
        return (
          <CustomLink
            key={heading.id}
            href={`#${heading.id}`}
            className={clsx(
              "block mt-3 text-sm hover:text-primary-500 focus-visible:outline-primary",
              {
                "text-primary-500": heading.id === activeNode,
                "ml-3": getLevel(heading.nodeName) === 3,
              }
            )}
          >
            {heading.innerText}
          </CustomLink>
        );
      })}
    </nav>
  );
}
