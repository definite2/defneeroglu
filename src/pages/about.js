import { PageSeo } from "@/components/Seo";
import {siteMetadata} from "@/constants/siteMetadata";
import Image from "next/image";
import SocialIcon from "@/components/Social";
const about = () => {
  const { author, image, occupation, email, twitter, linkedin, github } =
    siteMetadata;
  return (
    <>
      <PageSeo
        title={`About - ${author}`}
        description={`About me - ${author}`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Hey, I'm Defne 👋
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 lg:pt-8 ">
          <div className="flex flex-col items-center pt-8 space-x-2 lg:-ml-16">
            <Image
              src={image}
              alt="avatar"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${email}`} size="4" />
              <SocialIcon kind="github" href={github} size="4"/>
              <SocialIcon kind="linkedin" href={linkedin} size="4"/>
              <SocialIcon kind="twitter" href={twitter} size="4"/>
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2 lg:-ml-16">
            {" "}
            <p>
              I'm a frontend development engineer working at Huawei, mostly
              working at React and Angular projects.
            </p>
            <p>
              BS in physics, I still have some passion for it but I've
              prefered to develop my career in software development.
            </p>
            <p>
              I've started programming with MATLAB then worked as full stack
              with ASP .NET Web Application. I've also developed a desktop
              module as developing four mathematical models- Fuzzy based and
              Evolutionary strategy- and integrated these models to desktop
              product to make spatial decision making support system.
            </p>
            <p>
              Currently I'm focusing my personal development on JavaScript and
              its ecosystem (frameworks, bundlers, engines, UI libraries etc.).
              And I'm here to share some of my experiences 🙃.{" "}
            </p>
          </div>
          <div className="flex justify-end pt-40 prose dark:prose-dark max-w-none xl:col-span-3">
            <Image
              className="svg-draw float-right"
              src="/media/wiggle.svg"
              width={172}
              height={145}
              alt="wiggle"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
