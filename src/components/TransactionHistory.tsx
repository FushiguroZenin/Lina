'use client'

import { useState } from 'react'
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react'

type Transaction = {
  id: number
  type: 'incoming' | 'outgoing'
  description: string
  amount: string
  date: string
}

const transactions: Transaction[] = [
  {
    id: 1,
    type: 'incoming',
    description: 'Payment from Carolina',
    amount: '+$250.00',
    date: 'Jul 7, 2025',
  },
  {
    id: 2,
    type: 'outgoing',
    description: 'Subscription to Ruby Pro Plan',
    amount: '-$20.00',
    date: 'Jul 6, 2025',
  },
  {
    id: 3,
    type: 'incoming',
    description: 'Crypto payout',
    amount: '+0.03 BTC',
    date: 'Jul 5, 2025',
  },
  
]

export default function TransactionHistory() {
  const [filter, setFilter] = useState<'all' | 'incoming' | 'outgoing'>('all')

  const filtered = filter === 'all' ? transactions : transactions.filter(t => t.type === filter)

  return (
    <section className="px-6 sm:px-12 md:px-20 lg:px-32 py-16 bg-white dark:bg-zinc-950">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-blue-600">Transaction History</h2>
        <div className="flex gap-2">
          {['all', 'incoming', 'outgoing'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type as 'all' | 'incoming' | 'outgoing')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                filter === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200'
              }`}
            >
              {type[0].toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-sm text-zinc-500 dark:text-zinc-400 uppercase">
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((tx) => (
              <tr
                key={tx.id}
                className="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 rounded-lg"
              >
                <td className="px-4 py-4 flex items-center gap-2">
                  {tx.type === 'incoming' ? (
                    <ArrowDownCircle className="text-green-500 w-5 h-5" />
                  ) : (
                    <ArrowUpCircle className="text-red-500 w-5 h-5" />
                  )}
                  {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                </td>
                <td className="px-4 py-4">{tx.description}</td>
                <td className="px-4 py-4 font-semibold text-blue-600">{tx.amount}</td>
                <td className="px-4 py-4 text-sm text-zinc-500">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="text-center text-zinc-400 mt-6">No transactions found.</div>
        )}
      </div>
    </section>
  )
}
