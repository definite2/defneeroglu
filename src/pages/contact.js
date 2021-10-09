import { PageSeo } from '@/components/Seo'
import { siteMetadata } from '@/constants/siteMetadata'
import Image from 'next/image'
import ContactForm from '@/components/Forms/ContactForm'
import { motion } from 'framer-motion'
const contact = () => {
  const { author } = siteMetadata
  return (
    <>
      <PageSeo title={`Contact - ${author}`} description={`Contact me - ${author}`} />

      <div id="contact_form" className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.2,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
              },
            }}
          >
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
              Let's Connect
            </h1>
          </motion.div>
        </div>
        <div className="flex flex-col-reverse items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0 sm:pt-8 sm:pb-12  ">
          <div className="pt-8 pb-8 prose pl-4 sm:pl-0 lg:prose-lg dark:prose-dark max-w-none xl:col-span-2">
            <ContactForm />
          </div>
          <div className="sm:pt-16 pt-4 pl-4 prose lg:prose-lg dark:prose-dark max-w-none xl:col-span-2">
            <p>
              If you have any suggestions or if you just want to chat with me please feel free to
              drop a message.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact
