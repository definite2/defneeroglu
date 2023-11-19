import React from 'react'
import { List, X } from 'react-feather'
import { m, AnimatePresence } from 'framer-motion'

const toggleIconClosed = {
  rotate: 180,
  transition: {
    duration: 0.5,
  },
}

const toggleIconOpen = {
  rotate: 0,
  transition: {
    duration: 0.3,
  },
}

export default ({ isToggled, onClick }) => (
  <AnimatePresence initial={false}>
    <m.button
      key="aniamte-toggle"
      initial={toggleIconClosed}
      animate={!isToggled ? toggleIconOpen : toggleIconClosed}
      exit={toggleIconClosed}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 180 }}
      onClick={onClick}
      className="h-12  flex bg-gray-100 items-center justify-center w-12 text-primary-500 font-bold rounded-full shadow-2xl drop-shadow-xl dark:bg-gray-800"
    >
      {!isToggled ? (
        <List className="text-primary-500" size={28} />
      ) : (
        <X className="text-primary-500" size={28} />
      )}
    </m.button>
  </AnimatePresence>
)
