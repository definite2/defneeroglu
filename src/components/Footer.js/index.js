import CustomLink from "../CustomLink";
import siteMetadata from "@/constants/siteMetadata.json";
import Image from "next/image";
import flower from "../../../public/media/dede.jpg";
export default function Footer() {
  return (
    <footer className="flex justify-center items-center fixed bottom-0 ">
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href={"#"}
          >
            <span>github</span>
          </a>
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href={"#"}
          >
            <span>github</span>
          </a>
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <CustomLink href="/">{siteMetadata.title}</CustomLink>
        </div>
      </div>
    </footer>
  );
}
