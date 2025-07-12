'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const messages = [
  'Welcome to Lina — Your modern payment system.',
  'No setup fees. Ever.',
  'Handle cards, crypto, and local bank transfers.',
  'Recurring billing made simple.',
  'Seamless integration for apps and websites.',
  'Your payments, your control.',
]

export default function MessageCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 4000) // Change message every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-80 w-full md:w-[500px] bg-blue-100 dark:bg-blue-900 rounded-3xl shadow-xl p-6 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute text-center px-6 text-xl md:text-2xl font-semibold text-zinc-800 dark:text-white"
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
