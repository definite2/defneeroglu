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
        <div className="pt-8 pb-8 prose dark:prose-dark prose text-gray-500 max-w-none dark:text-gray-400">
          <p>
            I'm a frontend development engineer working at Huawei, mostly
            working at React and Angular projects.
          </p>
          <p>
            My BS in physics, I still have some passion for it but I've prefered
            to develop my career in software development.
          </p>
          <p>
            I've started programming with MATLAB then worked as full stack with
            C# and Javascript ASP .NET Web Application. I've developed some
            mathematical models- Fuzzy based and Evolutionary strategy- and
            integrated those models to desktop modules for my previous company.
          </p>

          <p>
            And I'm here to share some
            of my adventures 🙃.{" "}
          </p>
        </div>
        {/* end::body */}
      </div>
    </>
  );
};

export default about;
