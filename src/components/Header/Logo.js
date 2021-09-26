import React from 'react'
import Link from 'next/link'
import { siteMetadata } from '@/constants/siteMetadata'
import useScrolling from '@/hooks/useScroll'

const Logo = () => {
  const isScrolled = useScrolling()
  return (
    <Link href="/">
      <a
        aria-label="My avatar, website logo"
        className="flex items-center border-white group focus-visible:outline-accent h-full:hidden"
      >
        <div className="overflow-hidden transition-transform ease-in-out border-0 group-hover:-translate-y-1 font-semibold text-xl">
          <span
            className={`${
              isScrolled ? 'opacity-100 ml-2' : 'opacity-0 -mr-2'
            } "transition-all duration-500 ease-in-out"`}
          >
            &lt;
          </span>
          <span>{siteMetadata.headerTitle}</span>
          <span className={`${isScrolled ? 'opacity-100 ml-2' : 'opacity-0 -mr-0'}`}>
            &nbsp;/&gt;
          </span>
        </div>
      </a>
    </Link>
  )
}

export default Logo
