import { siteMetadata } from '@/constants/siteMetadata'
import SocialIcon from '../Social'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className=" mt-auto text-center bg-gray-700 ">
      <div className="flex flex-col justify-center items-center py-8">
        <div className="flex-grow flex-col">
          <div className="flex text-right space-x-4">
            <SocialIcon
              className="text-primary-500 "
              kind="github"
              href={siteMetadata.github}
              size="6"
            />

            <SocialIcon
              className="text-primary-500 "
              kind="linkedin"
              href={siteMetadata.linkedin}
              size="6"
            />
          </div>
        </div>
        <div className="flex my-2 space-x-1 text-sm text-gray-400">
          <div>{siteMetadata.author}</div>
          <div className="flex items-center">{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
