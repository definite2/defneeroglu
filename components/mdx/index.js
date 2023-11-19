/* eslint-disable react/display-name */
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "next/image";
import CustomLink from "../CustomLink";
import Pre from "./Pre";
import { WarningBodyMessage,HighlightInline } from "../Atoms";
import { Accordion } from "../Accordion";
export const MdxComponents = {
  Image,
  WarningBodyMessage,
  HighlightInline,
  a: CustomLink,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../../layouts/${layout}`).default;
    return <Layout {...rest} />;
  },
  Accordion
};

export const MdxLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout layout={layout} components={MdxComponents} {...rest} />;
};
