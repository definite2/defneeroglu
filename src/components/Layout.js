import SectionContainer from '@/components/SectionContainer'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollTop'
import Footer from '@/components/Footer'
import useScrollingUp from '@/hooks/useScrollingUp'

const Wrapper = ({ children }) => {
  const scrolled = useScrollingUp()

  return (
    <>
      <SectionContainer>
        <Header />
        <main
          role="main"
          className={`xl:col-span-6 xl:col-start-3 col-span-10 px-5 sm:px-0 my-4 sm:my-12 ${
            scrolled ? 'pt-20' : '0'
          }`}
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
