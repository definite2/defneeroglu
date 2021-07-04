import { NextSeo, ArticleJsonLd } from "next-seo";
import siteMetaData from "../constants/siteMetadata.json";
export const SEO = {
  title: siteMetaData.title,
  description: siteMetaData.description,
  openGraph: {
    type: "website",
    locale: siteMetaData.language,
    url: siteMetaData.siteUrl,
    title: siteMetaData.title,
    description: siteMetaData.description,
    images: [
      {
        url: `${siteMetaData.siteUrl}${siteMetaData.socialBanner}`,
        alt: siteMetaData.title,
        width: 1200,
        height: 600,
      },
    ],
  },
  twitter: {
    handle: siteMetaData.twitter,
    site: siteMetaData.twitter,
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "author",
      content: siteMetaData.author,
    },
  ],
};
export const PageSeo = ({ title, description, url }) => {
  return (
    <NextSeo
      title={`${title} – ${siteMetaData.title}`}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
      }}
    />
  );
};
export const BlogSeo = ({
  title,
  summary,
  date,
  lastmod,
  url,
  tags,
  images = [],
}) => {
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(lastmod || date).toISOString();
  let imagesArr =
    images.length === 0
      ? [siteMetaData.socialBanner]
      : typeof images === "string"
      ? [images]
      : images;
  const featuredImages = imagesArr.map((img) => {
    return {
      url: `${siteMetaData.siteUrl}${img}`,
      alt: title,
    };
  });
  return (
    <>
      <NextSeo
        title={`${title} – ${siteMetaData.title}`}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            authors: [`${siteMetaData.siteUrl}/about`],
            tags,
          },
          url,
          title,
          description: summary,
          images: featuredImages,
        }}
        additionalMetaTags={[
          {
            name: "twitter:image",
            content: featuredImages[0].url,
          },
        ]}
      />
      <ArticleJsonLd
        authorName={siteMetaData.author}
        dateModified={modifiedAt}
        datePublished={publishedAt}
        description={summary}
        images={featuredImages}
        publisherName={siteMetaData.author}
        title={title}
        url={url}
      />
    </>
  );
};
