import React from 'react'
import CustomLink from '@/components/CustomLink'
import { siteMetadata } from '@/constants/siteMetadata'

const Logo = () => {
  return (
    <CustomLink
      href="/"
      className="flex items-center border-white group focus-visible:outline-accent h-full:hidden"
    >
      <div className="overflow-hidden transition-transform ease-out border-0 group-hover:-translate-y-1 font-semibold text-xl">
        <span>{siteMetadata.headerTitle}</span>
      </div>
    </CustomLink>
  )
}

export default Logo
