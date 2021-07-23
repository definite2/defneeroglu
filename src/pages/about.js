import { PageSeo } from "../components/Seo";
import siteMetadata from "../constants/siteMetadata";
const about = () => {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        {/* begin::header */}
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Hey, I'm Defne 👋
          </h1>
        </div>
        {/* end::header */}
        {/* begin::body */}
        <div className="pt-8 pb-8 prose dark:prose-dark max-w-none ">
          <p>
            I'm a frontend development engineer working at Huawei, mostly working at React
            and Angular projects. 
          </p>
          <p>I am here to share some of my adventures </p>
        </div>
        {/* end::body */}
      </div>
    </>
  );
};

export default about;
