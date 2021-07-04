import Link from 'next/link';
import { PageSeo } from "../components/Seo";
import siteMetadata from "../constants/siteMetadata";

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
     
    </>
  );
}
