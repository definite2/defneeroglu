import { PageSeo } from "@/components/Seo";
import { siteMetadata } from "@/constants/siteMetadata";
import Avatar from "@/components/Avatar";
import CustomLink from "@/components/CustomLink";

const about = () => {
  const { author, occupation } = siteMetadata;
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
              I've started as full stack development with ASP .NET Web
              Application. I've worked with Elastic Stack. Also I worked with academicians to implement four mathematical models
              (Fuzzy-CMAES, Fuzzy-AHP, Fuzzy-DEMATEL, Fuzzy-TOPSIS) in C# programming language and than integrated these models to a GIS
              desktop product for my former company.
            </p>
            <p>
             After 1 year of C# development, I've been doing frontend development since 2019. I am pretty passionate to learn how Javascript works from its history to browser engines...
             I decided to make this blog site both to reinforce what I know and to be instructive for other beginners.
            </p>
            <h4>Publications</h4>
            <CustomLink className="italic" href="https://dergipark.org.tr/tr/pub/ejosat/issue/53473/711076">
            Zeydan M. , Bostancı B. , Oralhan B. , Eroğlu D. , Aydıner U. Mekânsal Bulanık Karar Destek Sisteminin Geliştirilmesi. EJOSAT. 2020; 418-429.
            </CustomLink>

          </div>
        </div>
      </div>
    </>
  );
};

export default about;
