import CustomLink from "../CustomLink";
import { siteMetadata } from "@/constants/siteMetadata";
import Image from "next/image"
import send from "./contactSendIcon.svg";
const Contact = () => {
  return (
    <div className="w-full flex self-start">
      <form className="max-w-screen-xl">
    
          <div class="flex items-center border-b border-primary-400 py-2">
            <input
              className="appearance-none bg-transparent border-none   text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-primary-100 focus:border-primary-100"
              type="text"
              placeholder="Jane Doe"
              aria-label="Full name"
            />
            
            <CustomLink
              href={`mailto:${siteMetadata.email}`}
              className="bg-transparent border-primary-500 rounded-sm "
            >
              <span className="absolute bottom-24 left-64 font-semibold text-gray-600">
               <Image src={send} width="32" height="32" />
              </span>
            </CustomLink>
          </div>
   
      </form>
    </div>
  );
};

export default Contact;
