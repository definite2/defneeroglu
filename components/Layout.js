import SectionContainer from '@/components/SectionContainer'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollTop'
import Footer from '@/components/Footer'

const Wrapper = ({ children }) => {
  return (
    <>
      <SectionContainer>
        <Header />
        <main
          role="main"
          className="xl:col-span-10 xl:col-start-2 col-span-12 px-5 sm:px-0 my-4 sm:my-12"
        >
          {children}
        </main>
      </SectionContainer>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Wrapper
