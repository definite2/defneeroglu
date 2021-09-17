import SectionContainer from "@/components/SectionContainer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollTop";
import Footer from "@/components/Footer";
const Wrapper = ({ children }) => {
  return (
    <>
      <SectionContainer>
        <Header />
        <main role="main" className="md:col-span-6 md:col-start-3 col-span-10 px-5 my-40">
          {children}
        </main>

      </SectionContainer>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
