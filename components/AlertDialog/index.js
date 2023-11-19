import { m } from 'framer-motion'
import { AlertTriangle, Check } from 'react-feather'
import Backdrop from './Backdrop'

const alertVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transform: 'scale(0) rotateX(-360deg)',
  },
  visible: {
    y: '-25vh',
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    y: '-100vh',
    opacity: 0,
  },
}

const AlertDialog = ({ handleClose, message, title, success }) => {
  return (
    <Backdrop onClick={handleClose}>
      <m.div
        onClick={(e) => e.stopPropagation()}
        className="inline-block align-bottom bg-primary-grayish dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl sm:py-8 sm:align-middle sm:max-w-lg sm:w-full"
        variants={alertVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
          
          <div className="bg-primary-grayish dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div
            className={`m-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${
              success ? 'bg-primary-100' : 'bg-red-100'
            } sm:mx-0 sm:h-10 sm:w-10`}
          >
            {success ? (
              <Check className="text-primary-500" />
            ) : (
              <AlertTriangle className="text-red-500" />
            )}
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50"
              id="alert-dialog-title"
            >
              {title}
            </h3>
            <div className="mt-2">
              <p id="alert-description" className="text-sm text-gray-00 dark:text-gray-100">
                {message}
              </p>
            </div>
          </div>
        </div>
        </div>
      </m.div>
    </Backdrop>
  )
}

export default AlertDialog
