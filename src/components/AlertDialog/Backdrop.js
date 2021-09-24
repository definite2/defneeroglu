import { motion } from 'framer-motion'

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      role="alertdialog"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-description"
      className="absolute top-1/5 z-10 left-0 h-full w-full flex overflow-y-auto items-center justify-center"
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
