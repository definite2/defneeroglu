import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { SEO } from "@/components/Seo";
import "../styles/global.scss";
import Wrapper from "@/components/Layout";
import { GlobalStyle } from "styles/GlobalStyle";
import Analytics from "@/components/Analytics";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider attribute="class">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Analytics />
        <DefaultSeo {...SEO} />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
export default App;
