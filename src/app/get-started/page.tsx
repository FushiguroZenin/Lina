'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'

export default function GetStartedPage() {
  const [mode, setMode] = useState<'signup' | 'login'>('signup')
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  })

  const validate = () => {
    let newErrors = { name: '', email: '', password: '' }
    let isValid = true

    if (mode === 'signup' && form.name.trim().length < 2) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!form.email.includes('@') || form.email.length < 5) {
      newErrors.email = 'Valid email required'
      isValid = false
    }

    if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      alert(`${mode === 'signup' ? 'Account created' : 'Logged in'} successfully!`)
      // Handle real logic here
    }
  }

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value })
    setErrors({ ...errors, [field]: '' }) // clear error on input
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white px-4">
      <div className="w-full max-w-md bg-zinc-100 dark:bg-zinc-900 p-8 rounded-2xl shadow-xl relative">

        {/* Back Button */}
        <Link
          href="/"
          className="absolute -top-12 left-1 text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2 text-sm"
        >
          <FaArrowLeft className="text-sm" />
          Back to Home
        </Link>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
              {mode === 'signup' ? 'Create an Account' : 'Welcome Back'}
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {mode === 'signup' && (
                <>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`p-3 rounded-md bg-white dark:bg-zinc-800 border ${
                      errors.name ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-700'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </>
              )}

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`p-3 rounded-md bg-white dark:bg-zinc-800 border ${
                  errors.email ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-700'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => handleChange('password', e.target.value)}
                className={`p-3 rounded-md bg-white dark:bg-zinc-800 border ${
                  errors.password ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-700'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                {mode === 'signup' ? 'Create Account' : 'Login'}
              </button>
            </form>

            <p className="text-center text-sm mt-6">
              {mode === 'signup' ? (
                <>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="text-blue-600 hover:underline"
                  >
                    Log in
                  </button>
                </>
              ) : (
                <>
                  New to Lina?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('signup')}
                    className="text-blue-600 hover:underline"
                  >
                    Create account
                  </button>
                </>
              )}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
