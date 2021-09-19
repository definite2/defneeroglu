import { PageSeo } from "@/components/Seo";
import { siteMetadata } from "@/constants/siteMetadata";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import ContactForm from "@/components/Forms/ContactForm";
const about = () => {
  const { author, occupation } = siteMetadata;
  return (
    <>
      <PageSeo
        title={`Contact - ${author}`}
        description={`Contact me - ${author}`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Hey, I'm Defne 👋
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-12 xl:space-y-0 lg:pt-8 ">
          <div className="flex flex-col items-center pt-8 space-x-2 lg:-ml-16 xl:col-start-1 xl:col-span-1">
            <Avatar />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
          </div>
          <div className="pt-8 pb-8 prose lg:prose-lg dark:prose-dark max-w-none xl:col-span-2 xl:col-start-2">
            <p>
              I'm a frontend development engineer. Crurently working at Huawei.
            </p>
            <p>
              I'm a self taught developer. My BS in physics, I still have some
              passion for it, but I've prefered to develop my career in software
              development.
            </p>
            <p>
              I'm here to share some web develompent skills I gained on my
              journey from being a physics student to becoming a software
              developer. The secret how I've becoming a better programmer is
              just using my Impostor syndrome as persistently to learning new
              things and become a better version of myself... If these sounds something to you, than feel free to send
              me message.
            </p>
          </div>
        </div>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 lg:pt-8 ">
        <div className="pt-8 pb-8 prose lg:prose-lg dark:prose-dark max-w-none xl:col-span-2">
          <ContactForm />
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

export default about;
