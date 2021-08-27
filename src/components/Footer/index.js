import CustomLink from "../CustomLink";
import { siteMetadata } from "@/constants/siteMetadata";
import SocialIcon from "../Social";
import Contact from "../Forms/Contact";
export default function Footer() {
  return (
    <footer className="w-full fixed left-0 bottom-0 text-center bg-primary-100">
      
      <div className="flex flex-col items-center ">
      <Contact />
        <div className="flex mt-6 text-left space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            size="6"
          />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />

          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="flex mt-1 mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>

          <div className="flex items-center">{`© ${new Date().getFullYear()}`}</div>

          <CustomLink href="/">{siteMetadata.title}</CustomLink>
        </div>
      </div>
    </footer>
  );
}
