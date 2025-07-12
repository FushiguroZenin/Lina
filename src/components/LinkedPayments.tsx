'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CreditCard, Banknote, Plus } from 'lucide-react'

const paymentMethods = [
  {
    type: 'Visa',
    details: '**** **** **** 1234',
    icon: <CreditCard className="w-6 h-6 mr-2" />,
  },

  {
    type: 'Bank Account',
    details: 'Chase ••• 4589',
    icon: <Banknote className="w-6 h-6 mr-2" />,
  },
]

export default function LinkedPayments() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  return (
    <section className="py-16 px-6 sm:px-12 md:px-20 lg:px-32 bg-white dark:bg-zinc-950">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-10">
        Linked Payment Methods
      </h2>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {paymentMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1 },
              },
            }}
            className="border dark:border-zinc-800 rounded-xl p-5 flex items-center justify-between shadow hover:shadow-blue-300/30 transition-all"
          >
            <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
              {method.icon}
              <div className="flex flex-col">
                <span>{method.type}</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {method.details}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

     <Link href="/not-found" passHref>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition"
  >
    <Plus className="w-5 h-5 mr-2" />
    Add Payment Option
  </motion.button>
</Link>
    </section>
  )
}
