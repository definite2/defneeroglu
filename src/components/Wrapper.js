import SectionContainer from "@/components/SectionContainer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollTop";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
const Wrapper = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      <SectionContainer>
        <div className="flex flex-col justify-between h-screen">
          <Header />
          <main className="pb-28 mb-auto sm:pb-40 mt-28">{children}</main>
        </div>
      </SectionContainer>
      {!pathname.startsWith("/blog/") && <Footer />}
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
