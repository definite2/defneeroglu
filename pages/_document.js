import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons//favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#14b8a6" />
          <meta name="theme-color" content="#14b8a6" />
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
