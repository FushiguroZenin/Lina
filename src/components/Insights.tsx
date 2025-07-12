'use client'

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const pieData = [
  { name: 'Subscriptions', value: 400 },
  { name: 'Shopping', value: 300 },
  { name: 'Crypto', value: 200 },
  { name: 'Bills', value: 100 },
]

const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe']

const barData = [
  { name: 'Mon', spending: 120 },
  { name: 'Tue', spending: 180 },
  { name: 'Wed', spending: 75 },
  { name: 'Thu', spending: 150 },
  { name: 'Fri', spending: 200 },
  { name: 'Sat', spending: 90 },
  { name: 'Sun', spending: 130 },
]

export default function Insights() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } })
    }
  }, [inView, controls])

  return (
    <section
      ref={ref}
      className="px-6 sm:px-12 md:px-20 lg:px-32 py-16 bg-white dark:bg-zinc-950"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={controls}
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Your Insights</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-10">
          Track your spending and monitor wallet activity over time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Pie Chart */}
          <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">Spending Breakdown (in USD Hundreds)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#3b82f6"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">Spending Over Time (In Naira Thousands)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="spending" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
