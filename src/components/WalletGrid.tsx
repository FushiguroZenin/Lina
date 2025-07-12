'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { motion } from 'framer-motion'

type Wallet = {
  id: number
  name: string
  balance: string
  currency: string
}

const wallets: Wallet[] = [
  {
    id: 1,
    name: 'Bank Wallet (USD)',
    balance: '$4,850.00',
    currency: 'USD',
  },
  {
    id: 2,
    name: 'Bitcoin Wallet',
    balance: '0.085 BTC',
    currency: 'BTC',
  },
  {
    id: 3,
    name: 'Bank Wallet (EUR)',
    balance: '€1,200.00',
    currency: 'EUR',
  },
  {
    id: 4,
    name: 'Ethereum Wallet',
    balance: '1.2 ETH',
    currency: 'ETH',
  },
  {
    id: 5,
    name: 'Bank Wallet (NGN)',
    balance: '₦24,000,000',
    currency: 'NGN',
  },
]

export default function WalletGrid() {
  const [visibleBalances, setVisibleBalances] = useState<Record<number, boolean>>({})

  const toggleBalance = (id: number) => {
    setVisibleBalances((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section className="bg-blue-50 dark:bg-zinc-950 py-16 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Your Wallets
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {wallets.map((wallet, index) => {
          const isVisible = visibleBalances[wallet.id] ?? true
          return (
            <motion.div
              key={wallet.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-blue-200 dark:hover:shadow-blue-500/20 transition-all duration-300 relative"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold text-zinc-800 dark:text-white">
                  {wallet.name}
                </h4>

                <button
                  onClick={() => toggleBalance(wallet.id)}
                  className="text-blue-600 hover:text-blue-800 transition"
                  aria-label={isVisible ? 'Hide balance' : 'Show balance'}
                >
                  {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <p className="text-2xl font-bold text-blue-600">
                {isVisible ? wallet.balance : '••••••'}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                {wallet.currency}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
