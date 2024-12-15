import { PageSeo } from '@/components/Seo'
import { siteMetadata } from '@/constants/siteMetadata'
import ContactForm from '@/components/Forms/ContactForm'
import { PageTitle } from '@/components/PageTitle'


const contact = () => {
  const { author } = siteMetadata
  return (
    <>
      <PageSeo title={`Contact - ${author}`} description={`Contact me - ${author}`} />

      <div id="contact_form" className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <PageTitle text="Let's Connect"
          />
        </div>
        <div className="flex flex-col-reverse items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0 sm:pt-8 sm:pb-20 mb-12  ">
          <div className="pt-8 pb-8 prose px-4 sm:pl-0  dark:prose-dark max-w-none xl:col-span-2">
            <ContactForm />
          </div>
          <div className="sm:pt-16 pt-4 px-4 prose  dark:prose-dark max-w-none xl:col-span-2">
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
