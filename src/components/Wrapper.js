import SectionContainer from "@/components/SectionContainer";
import Header from "@/components/Header";

const Wrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <main className="pb-28 sm:pb-40 mt-28">{children}</main>
      </div>
    </SectionContainer>
  );
};

export default Wrapper;
