'use client'

import { motion } from 'framer-motion'

// On load fade in animation setup
const duration = 0.4
const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: 0.3,
      ease: 'linear',
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration, ease: 'linear', when: 'beforeChildren' },
  },
}

// Console Credits
console.log(
  '%cDesign & Web Development by Danil Vladimirov \n– https://danilvladimirov.co.uk',
  'display:block;font-family:courier;font-size:12px;font-weight:bold;line-height:1;color:black;',
)

// Wrapping with framer motion
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
