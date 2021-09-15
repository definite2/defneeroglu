import { siteMetadata } from "@/constants/siteMetadata";
import SocialIcon from "../Social";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full fixed left-0 bottom-0 text-center bg-gradient-to-r from-primary-200 via-primary-200 to-orange-300">
      <div className="flex flex-col justify-center items-center my-6">
        <div className="flex-grow flex-col">
        <div className="flex text-right space-x-4">
         
          <SocialIcon
            className="text-primary-400 "
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            size="6"
          />
          <SocialIcon className="text-primary-400 " kind="github" href={siteMetadata.github} size="6" />

          <SocialIcon className="text-primary-400 " kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon className="text-primary-400 " kind="twitter" href={siteMetadata.twitter} size="6" />
 
        </div>
        </div>
        <div className="flex my-2 space-x-1 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div className="flex items-center">{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  );
}
