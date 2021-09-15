import { PageSeo } from "@/components/Seo";
import { siteMetadata } from "@/constants/siteMetadata";
import Image from "next/image";
import SocialIcon from "@/components/Social";
import avatar from "../../public/media/avatar1.jpg";
import ContactForm from "@/components/Forms/ContactForm";
const contact = () => {
  const { author, occupation, email, twitter, linkedin, github } = siteMetadata;
  return (
    <>
      <PageSeo
        title={`About - ${author}`}
        description={`About me - ${author}`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            GET IN TOUCH
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 lg:pt-8 ">
        <div className="flex flex-col items-center pt-8 space-x-2 ">
          Plaese send me message bitches
          </div>
          <div className="pt-8 pb-8 prose lg:prose-lg dark:prose-dark max-w-none xl:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
