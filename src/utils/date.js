import {siteMetadata} from "@/constants/siteMetadata"
export const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const now = new Date(date).toLocaleDateString(siteMetadata.locale, options)
  return now
}