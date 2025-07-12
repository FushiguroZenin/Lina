'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="w-full py-28 px-6 sm:px-12 bg-blue-600 dark:bg-blue-500 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Ready to get started with Lina?
        </h2>
        <p className="text-lg sm:text-xl mb-10">
          Experience seamless payments, powerful features, and fast integration — all in one place.
        </p>
        <Link
          href="/get-started"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full text-lg hover:bg-blue-100 transition"
        >
          Start using Lina
        </Link>
      </motion.div>
    </section>
  )
}
