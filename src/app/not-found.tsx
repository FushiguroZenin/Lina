'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function NotFound() {
  const [count, setCount] = useState(5);
  const router = useRouter()

  // Auto redirect after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if(prev <= 1){
          clearInterval(interval);
          return 0;
        } 
        return prev - 1;
      });
    }, 1000);

    const timeout = setTimeout(() => {
      router.push('/');
    }, 5000); // 5 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router])

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-6 bg-white dark:bg-zinc-950">
      {/* Bouncy Emoji */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: [ -10, 0, -10 ] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-5xl mb-4"
      >
        😅
      </motion.div>

      {/* Animated 404 */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl sm:text-8xl font-extrabold text-blue-600 mb-4"
      >
        404
      </motion.h1>

      {/* Playful Message */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-md mb-8"
      >
        Looks like Lina took a wrong turn...  
        <span className="text-blue-600 font-semibold">redirecting you in {count} seconds</span> 💨
      </motion.p>

      {/* Manual Button (in case auto-redirect fails) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
        >
          Go Home Now
        </Link>
      </motion.div>
    </main>
  )
}
