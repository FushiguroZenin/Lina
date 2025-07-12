'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const logos = [
  
  '/logos/shopifysvg.png',
  '/logos/slacksvg.png',
  '/logos/notionsvg.png',
  '/logos/githubsvg.png',
  '/logos/airbnbsvg.png',
]

export default function Sponsors() {
  const duplicatedLogos = [...logos, ...logos] // ensure seamless loop

  return (
    <section className="w-full py-20 bg-blue-50 dark:bg-zinc-900 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400">
          Trusted by modern businesses
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          }}
        >
          {duplicatedLogos.map((logo, index) => (
           <div
  key={index}
  className="w-32 h-16 relative transition-all duration-300 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:drop-shadow-[0_4px_10px_rgba(37,99,235,0.35)]"
>
  <Image
    src={logo}
    alt="Brand logo"
    fill
    className="object-contain"
  />
</div>

          ))}
        </motion.div>
      </div>
    </section>
  )
}
