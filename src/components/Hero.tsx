'use client'

import MessageCarousel from "@/components/MessageCarousel"; 
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'


export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Scroll transforms
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
//   const infoOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
//   const infoY = useTransform(scrollYProgress, [0.2, 0.4], [50, 0])
//   const cardOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
//   const cardY = useTransform(scrollYProgress, [0.5, 0.7], [50, 0])

  return (
    <section ref={containerRef} className="h-screen relative bg-white dark:bg-black">
      <div className="sticky top-0 h-screen w-full">

        {/*  Hero Text (Initial View) */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
            Pay seamlessly with{' '}
            <span className="text-blue-600 hover:animate-pulse transition-colors">
              Lina
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Secure. Simple. Yours — Lina handles the complexity for you.
          </p>
        </motion.div>

        {/*  Scroll-In Info Section (Left Text + Right Card) */}
     

        {/*  Animated Cards Section */}
       
      </div>
    </section>
  )
}
