'use client'

import { motion } from 'framer-motion'
import { FaUserPlus, FaCreditCard, FaRocket } from 'react-icons/fa'

const steps = [
  {
    icon: <FaUserPlus size={32} />,
    title: 'Create an account',
    description: 'Sign up in seconds and get access to Lina’s unified payment dashboard.',
  },
  {
    icon: <FaCreditCard size={32} />,
    title: 'Add payment methods',
    description: 'Enable cards, bank transfers, Apple/Google Pay, and crypto — all in one place.',
  },
  {
    icon: <FaRocket size={32} />,
    title: 'Start collecting payments',
    description: 'Integrate with your app or site and start accepting payments instantly.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-28 px-6 sm:px-12 md:px-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
          How it works
        </h2>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300">
          Get started with <span className='text-blue-600'>Lina</span> in just a few simple steps.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-100 dark:bg-blue-900 rounded-3xl p-8 shadow-lg text-left flex flex-col gap-4 hover:shadow-blue-300/40 transition-all"
          >
            <div className="text-blue-700 dark:text-blue-300">{step.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold text-zinc-800 dark:text-white">
              {`Step ${i + 1}: ${step.title}`}
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
