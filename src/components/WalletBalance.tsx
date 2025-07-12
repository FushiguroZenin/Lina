// components/WalletBalance.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const currencies = [
  { id: 'USD', label: 'USD', value: '$12,450.40' },
  { id: 'BTC', label: 'BTC', value: '0.215 BTC' },
  { id: 'ETH', label: 'ETH', value: '3.58 ETH' },
  { id: 'NGN', label: 'NGN', value: '₦19,111,230.90' },
]

export default function WalletBalance() {
  const [active, setActive] = useState('USD')

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-8 md:px-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Your Balance</h2>

      <div className="flex space-x-3 mb-10">
        {currencies.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              active === c.id
                ? 'bg-blue-600 text-white'
                : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-blue-100 dark:hover:bg-blue-800 text-zinc-800 dark:text-white'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="h-24 flex items-center justify-center text-4xl md:text-6xl font-semibold text-blue-600 relative w-full">
        <AnimatePresence mode="wait">
          {currencies
            .filter((c) => c.id === active)
            .map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute"
              >
                {c.value}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
