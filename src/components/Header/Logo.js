import React from 'react'
import Link from 'next/link'
import { siteMetadata } from '@/constants/siteMetadata'

const Logo = () => {
  return (
    <Link href="/">
      <a
        aria-label="My avatar, website logo"
        className="flex items-center border-white group focus-visible:outline-accent h-full:hidden"
      >
        <div className="overflow-hidden transition-transform ease-out border-0 group-hover:-translate-y-1 font-semibold text-xl">
          <span>{siteMetadata.headerTitle}</span>
        </div>
      </a>
    </Link>
  )
}

export default Logo
