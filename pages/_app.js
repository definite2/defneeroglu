import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { SEO } from '@/components/Seo'
import Wrapper from '@/components/Layout'
import Analytics from '@/components/Analytics'
import { LazyMotion, m } from 'framer-motion'
import '../styles/global.scss'

const App = ({ Component, pageProps, router }) => {
  let easing = [0.175, 0.85, 0.12, 0.96]
  const loadFeatures = () => import('../framerFeatures').then((res) => res.default)
  return (
    <LazyMotion features={loadFeatures} strict>
      <ThemeProvider attribute="class">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Analytics />
        <DefaultSeo {...SEO} />
        <Wrapper>
          <m.div
            initial="pageInitial"
            animate="pageAnimate"
            key={router.route}
            variants={{
              pageInitial: {
                opacity: 0,
                x: -100,
                y: 0,
              },
              pageAnimate: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  ease: easing,
                },
              },
              pageExit: {
                opacity: 0,
                x: 0,
                y: -100,
              },
            }}
          >
            <Component {...pageProps} />
          </m.div>
        </Wrapper>
      </ThemeProvider>
    </LazyMotion>
  )
}
export default App
