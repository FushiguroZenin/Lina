'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Free',
    price: '$0',
    features: ['Send/Receive Payments', 'Basic Wallet Access', 'Transaction History'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$12/mo',
    features: ['Everything in Free', 'Recurring Payments', 'Priority Support', 'Custom Wallet Themes'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$25/mo',
    features: ['Everything in Pro', 'API Access', 'Dedicated Support', 'Custom Integrations'],
    highlight: false,
  },
]

export default function BillingPage() {
  return (
    <main className="w-full px-6 py-20 max-w-7xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">Choose Your Plan</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">Simple pricing built for every team size.</p>
      </motion.div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 shadow-md ${
              plan.highlight
                ? 'bg-blue-600 text-white shadow-blue-400/40'
                : 'bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/app/not-found"
              className={`inline-block px-5 py-2 rounded-full font-medium transition ${
                plan.highlight
                  ? 'bg-white text-blue-600 hover:bg-blue-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {plan.name === 'Free' ? 'Current Plan' : 'Choose Plan'}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Feature Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="overflow-x-auto"
      >
        <table className="w-full text-left border-separate border-spacing-y-4">
          <thead>
            <tr className="text-zinc-700 dark:text-zinc-300 text-sm">
              <th className="w-1/3">Features</th>
              <th>Free</th>
              <th>Pro</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody className="text-zinc-800 dark:text-zinc-200">
            {[
              ['Send/Receive Payments', true, true, true],
              ['Recurring Billing', false, true, true],
              ['API Access', false, false, true],
              ['Custom Wallet Themes', false, true, true],
              ['Priority Support', false, true, true],
              ['Dedicated Support', false, false, true],
            ].map(([label, free, pro, ent], i) => (
              <tr key={i}>
                <td className="py-2">{label}</td>
                <td>{free ? <CheckCircle className="text-blue-600 w-4 h-4" /> : '-'}</td>
                <td>{pro ? <CheckCircle className="text-blue-600 w-4 h-4" /> : '-'}</td>
                <td>{ent ? <CheckCircle className="text-blue-600 w-4 h-4" /> : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </main>
  )
}
