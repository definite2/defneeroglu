import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "next/legacy/image";
import CustomLink from "../CustomLink";
import Pre from "./Pre";
import { WarningBodyMessage, HighlightInline } from "../Atoms";
import { Accordion } from "../Accordion";
import PostLayout from "../../layouts/PostLayout";

const MdxComponents = {
  Image,
  WarningBodyMessage,
  HighlightInline,
  a: CustomLink,
  pre: Pre,
  wrapper: ({ components, ...rest }) => {
    return <PostLayout {...rest} />;
  },
  Accordion
};

export const MdxLayoutRenderer = ({ mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout components={MdxComponents} {...rest} />;
};