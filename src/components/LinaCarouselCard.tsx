'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const messages = [
  "Get started in minutes with zero setup.",
  "No hidden fees. Everything’s clear with Lina.",
  "Accept cards, crypto, bank transfers – all in one place.",
  "Recurring billing made seamless.",
]

export function LinaCarouselCard() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-80 md:h-[22rem] bg-blue-100 dark:bg-zinc-800 rounded-3xl relative overflow-hidden shadow-2xl flex items-center justify-center px-6 py-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center px-6 py-8 text-center"
        >
          <p className="text-3xl md:text-5xl font-semibold leading-tight text-blue-700 dark:text-blue-400">
            {messages[index]}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
