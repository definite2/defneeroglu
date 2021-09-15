import SectionContainer from "@/components/SectionContainer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollTop";
import Footer from "@/components/Footer";

import RightSidebar from "./Sidebar/RightSidebar";

const Wrapper = ({ children }) => {
  return (
    <>
      <SectionContainer>
        <Header />
        <main role="main" className="md:col-span-6 md:col-start-3 col-span-10 px-4 my-40">
          {children}
        </main>
        <RightSidebar />
      </SectionContainer>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
