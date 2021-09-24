import { useState } from 'react'
//TODO add email validation
import Input from './Input'
import AlertDialog from '../AlertDialog'
import { AlertContainer } from '../AlertDialog/AlertContainer'
import { motion } from 'framer-motion'
import { useForm } from '@/hooks/useForm'
import useAlert from '@/hooks/useAlert'

const initialFValues = {
  name: '',
  email: '',
  message: '',
}
const ContactForm = () => {
  const [alertMessage, setAlertMessage] = useState('')
  const [success, setSuccess] = useState(null)
  const { open, close, alertDialogOpen } = useAlert()

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues) temp.name = fieldValues.name ? '' : 'Your name should not be empty'
    if ('email' in fieldValues) {
      if (!fieldValues.email) temp.email = 'Your email should not be empty'
      else if (!/$^|.+@.+..+/.test(fieldValues.email)) {
        temp.email = 'Please provide a valid email address'
      } else {
        temp.email = ''
      }
    }
    if ('message' in fieldValues) {
      if (!fieldValues.message) {
        temp.message = 'Your message should not be empty'
      } else if (fieldValues.message.length > 1001) {
        temp.message = 'Too long message!'
      } else {
        temp.message = ''
      }
    }
    setErrors({
      ...temp,
    })

    if (fieldValues == values) return Object.values(temp).every((x) => x == '')
  }
  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialFValues,
    true,
    validate
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          open()
          if (res.status === 200) {
            setAlertMessage('Thank you for reaching me out')
            setSuccess(true)
          }
        })
        .catch((err) => {
          setAlertMessage(err.message)
          setSuccess(false)
        })
      resetForm()
    }
  }
  return (
    <>
      <AlertContainer>
        {alertDialogOpen && (
          <AlertDialog
            alertDialogOpen={alertDialogOpen}
            message={alertMessage}
            success={success}
            title={success ? 'Thank you!' : 'Something went wrong'}
            handleClose={close}
          />
        )}
      </AlertContainer>
      <form className="w-full">
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-2/3 ">
            <Input
              id="name"
              type="text"
              label="Name"
              value={values.name}
              onChange={handleInputChange}
              error={errors.name}
            />
          </div>
          <div className="w-full md:w-2/3 ">
            <Input
              id="email"
              type="email"
              label="E-mail"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-2/3">
            <label className="block tracking-wide mr-3 py-1 text-left font-medium text-xl px-2 text-transparent bg-clip-text bg-gradient-to-br from-orange-400  to-primary-400">
              Message
            </label>
            <textarea
              id="message"
              className="no-resize block w-full appearance-none rounded-md border-primary-300 bg-primary-light text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-primary-400 focus:border-primary-400 h-36 resize-none shadow-sm dark:bg-gray-800 dark:text-gray-100"
              onChange={handleInputChange}
              value={values.message}
              error={errors.message}
            />
            {errors.message && <span class="text-xs text-red-600">{errors.message}</span>}
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="  bg-gradient-to-r from-orange-400 to-primary-400 flex items-center justify-center font-medium  border-0 p-2 rounded-md shadow-sm"
            onClick={handleSubmit}
          >
            <span className="px-3  text-primary-light dark:text-gray-900">Send</span>
          </motion.button>
        </div>
      </form>
    </>
  )
}

export default ContactForm
