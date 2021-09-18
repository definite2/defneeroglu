import SectionContainer from "@/components/SectionContainer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollTop";
import Footer from "@/components/Footer";
const Wrapper = ({ children }) => {
  return (
    <>
      <SectionContainer>
        <Header />
        <main role="main" className="md:col-span-7 md:col-start-4 col-span-12 px-5 my-40">
          {children}
        </main>

      </SectionContainer>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
