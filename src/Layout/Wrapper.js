import SectionContainer from "../components/SectionContainer";
import Header from "../components/Header";

const Wrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <main className="mb-auto">{children}</main>
      </div>
    </SectionContainer>
  );
};

export default Wrapper;
