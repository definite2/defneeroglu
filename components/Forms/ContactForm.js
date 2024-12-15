import { useActionState } from 'react'
import Input from './Input'
import { AlertDialog } from '../AlertDialog'
import { m } from 'framer-motion'
import useAlert from '@/hooks/useAlert'
import { validate } from './validate'

const initialFValues = {
  name: '',
  email: '',
  message: '',
}

const ContactForm = () => {

  const { open, close, alertDialogOpen } = useAlert()

  const [formState, submitAction] = useActionState(async (prevFormData, formData) => {
    const formValues = Object.fromEntries((formData ?? initialFValues).entries());
    const { isValid, error } = validate(formValues);
    if (!isValid) {
      return {
        ...formValues,
        success: false,
        validationError: error,
        alertMessage: ''
      }
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
    open()
    if (res.status === 200) {
      return {
        ...initialFValues,
        success: true,
        validationError: null,
        alertMessage: 'Thank you for reaching me out'
      }
    }
    return {
      ...formValues,
      success: false,
      validationError: null,
      alertMessage: 'Please try again later'
    }

  }, {
    name: '',
    email: '',
    message: '',
    success: false,
    validationError: null,
    alertMessage: ''
  })

  const { validationError: error, success, alertMessage, message, name, email } = formState

  return (
    <>
      <AlertDialog
        showAlert={alertDialogOpen}
        message={alertMessage}
        success={success}
        title={success ? 'Thank you!' : 'Something went wrong'}
        handleClose={close}
      />
      <form className="w-full" action={submitAction}>
        <div className="flex flex-wrap mb-6">
          <div className="w-full">
            <Input id="name" type="text" label="Name" error={error?.name} defaultValue={name} />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full">
            <Input id="email" type="email" label="E-mail" error={error?.email} defaultValue={email} />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full ">
            <label
              htmlFor="message"
              className="block tracking-wide mr-3 py-1 text-left font-medium text-xl px-2 text-gray-900 dark:text-gray-50 "
            >
              Message
            </label>
            <textarea
              defaultValue={message}
              id="message"
              name="message"
              className="no-resize block w-full appearance-none rounded-md border-gray-300 dark:border-gray-500 bg-primary-light text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-gray-400 focus:border-gray-400 h-36 resize-none shadow-sm dark:bg-gray-800 dark:text-gray-100 dark:focus:border-gray-500 dark:focus:ring-gray-500"
            />
            {error?.message && <span className="text-xs text-red-600">{error?.message}</span>}
          </div>
        </div>
        <div className="flex flex-wrap  mb-6">
          <div className="w-full flex  justify-end">
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-700 flex items-center justify-center font-medium border  border-gray-500  p-2 rounded-md shadow-sm"
              type="submit"
            >
              <span className="px-6  text-gray-50">Send</span>
            </m.button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactForm
