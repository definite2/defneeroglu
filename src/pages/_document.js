import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="icon" type="image/png" sizes="32x32" href="my-first-kaktus.ico" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,800&display=swap"
            rel="stylesheet"
          />
          <meta
            name="google-site-verification"
            content="RY2CSkpUeAHEyh5f6rmsclP7ia1rrPWriN2gmc5U5OI"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="antialiased text-black bg-primary-light dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
