'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const messages = [
  'with Lina, your payment processes, billing cycles and on-the-go expenses are on us. we are your online wallet, safer and accessible -even from the other room.',
  'Get started now. No setup fees. Ever.',
  'Handle cards, crypto, and local bank transfers.',
  'Recurring billing made simple.',
  'Seamless integration for apps and websites.',
]

export default function ScrollMessageCarousel() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Translate Y upward by 100% * (messages.length - 1)
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100 * (messages.length - 1)]
  )

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[500vh] bg-white dark:bg-zinc-950 px-6 sm:px-12"
    >
      {/* Sticky pinned card */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left text block */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-4xl md:text-5xl leading-tight font-semibold text-zinc-900 dark:text-white">
              Say hello to <span className="text-blue-600">Lina</span> — the smart, modern way to handle payments.
            </p>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300">
              From checkout to recurring billing, <span className="text-blue-600 font-medium">Lina</span> gives you everything you need to manage payments effortlessly.
            </p>
          </div>

          {/* Carousel card */}
          <div className="relative h-[320px] w-full md:w-[520px] overflow-hidden rounded-3xl bg-blue-100 dark:bg-blue-900 shadow-xl">
            <motion.div
              style={{ y: translateY }}
              className="absolute top-0 left-0 w-full"
            >
              {messages.map((text, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-[320px] w-full px-8 text-center text-2xl md:text-3xl font-semibold text-blue-700 dark:text-blue-300"
                >
                  {text}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
