'use client'

import { motion } from 'framer-motion'
import { FaBolt, FaWallet, FaGlobe, FaShieldAlt } from 'react-icons/fa'

const features = [
  {
    icon: <FaBolt className="text-blue-600 text-3xl mb-4" />,
    title: 'Fast Integration',
    description: 'Connect and start accepting payments in minutes with our developer-friendly tools.',
  },
  {
    icon: <FaWallet className="text-blue-600 text-3xl mb-4" />,
    title: 'All Payment Methods',
    description: 'Cards, Apple & Google Pay, PayPal, crypto, and more — all in one system.',
  },
  {
    icon: <FaGlobe className="text-blue-600 text-3xl mb-4" />,
    title: 'Local Currency Support',
    description: 'Lina adapts to your region and lets you collect payments in your local currency.',
  },
  {
    icon: <FaShieldAlt className="text-blue-600 text-3xl mb-4" />,
    title: 'Secure & Reliable',
    description: 'We handle card data directly with strict security compliance and encryption.',
  },
]

export default function WhyLina() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 bg-white dark:bg-zinc-950">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-blue-600 dark:text-blue-400">
          Why choose Lina?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-blue-50 dark:bg-zinc-900 rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-blue-300/30 transition-all"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
