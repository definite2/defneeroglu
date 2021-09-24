import { motion } from 'framer-motion'

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      role="alertdialog"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-description"
      className="fixed z-10 top-1/4 inset-x-2 overflow-y-auto sm:inset-0"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
