import { m } from 'framer-motion'

const backDropVariants = {
  visible: { opacity: 1, transition: { when: "beforeChildren" } },
  hidden: { opacity: 0, transition: { when: "afterChildren" } }
}


export const Backdrop = ({ children, onClick }) => {
  return (
    <m.div
      key="alert-backdrop"
      role="alertdialog"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-description"
      className="absolute top-1/5 z-10 left-0 h-full w-full flex overflow-y-auto items-center justify-center"
      onClick={onClick}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={backDropVariants}
    >
      {children}
    </m.div>
  )
}

