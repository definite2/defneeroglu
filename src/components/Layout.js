import SectionContainer from "@/components/SectionContainer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollTop";
import Footer from "@/components/Footer";
const Wrapper = ({ children }) => {
  console.log(children.layout)
  return (
    <>
      <SectionContainer>
        <Header />
        <main
          role="main"
          className="xl:col-span-6 xl:col-start-3 col-span-10 px-5 my-40"
        >
          {children}
        </main>
      </SectionContainer>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
