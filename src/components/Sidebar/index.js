import React from 'react'
import { AnimatePresence, m, useCycle } from 'framer-motion'
import ToggleTOCMenu from './ToggleTOCMenu'
import { TOC } from './TOC'

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
}

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
}

const Sidebar = () => {
  const [open, setOpen] = useCycle(false, true)
  const tocRef = React.useRef()
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <m.aside
            key="aside"
            ref={tocRef}
            drag
            dragConstraints={{
              top: -50,
              left: -1000,
              right: 0,
              bottom: -100,
            }}
            className="hidden xl:block fixed h-auto bg-primary-light rounded-md dark:bg-gray-800 py-6 px-6 shadow-2xl top-24 z-6 right-0 max-w-xs divide-y-2 divide-gray-800 dark:divide-gray-50"
            initial={{ x: 400 }}
            animate={{ x: -10 }}
            exit={{
              x: 400,
              transition: { delay: 0.7, duration: 0.3, when: 'beforeChildren' },
            }}
          >
            <h2 className="font-semibold">Table of Contents</h2>
            <m.nav
              key="nav"
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <TOC whileHover={{ scale: 1.1 }} variants={itemVariants} />
            </m.nav>
          </m.aside>
        )}
      </AnimatePresence>
      <div className={`hidden xl:block fixed bottom-32 right-4`}>
        <ToggleTOCMenu isToggled={open} onClick={handleClick} />
      </div>
    </>
  )
}

export default Sidebar
