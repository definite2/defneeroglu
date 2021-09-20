import { PageSeo } from "@/components/Seo";
import { siteMetadata } from "@/constants/siteMetadata";
import Image from "next/image";
import ContactForm from "@/components/Forms/ContactForm";
const contact = () => {
  const { author } = siteMetadata;
  return (
    <>
      <PageSeo
        title={`Contact - ${author}`}
        description={`Contact me - ${author}`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Let's Connect
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 lg:pt-8 ">
          <div className="pt-8 pb-8 prose lg:prose-lg dark:prose-dark max-w-none xl:col-span-2">
            <ContactForm />
          </div>
        </div>
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
    </>
  );
};

export default contact;
