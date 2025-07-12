'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'

export default function SettingsPage() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 px-6 sm:px-12 md:px-24 py-16">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/" className="flex items-center text-blue-600 hover:underline">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-12">Settings</h1>

      {/* Account Settings */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Account</h2>

        <form onSubmit={handleSubmit} className="grid gap-6 max-w-xl">
          <Input label="Full Name" placeholder="deraa16" required />
          <Input label="Email Address" placeholder="jane@example.com" required type="email" />
          <Input label="Phone Number" placeholder="+1 234 567 8901" required />
          <Input label="Change Password" type="password" placeholder="••••••••" />

          <AnimatePresence>
            {showSuccess && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-600 text-sm"
              >
                ✅ Changes saved successfully.
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>
      </section>

      {/* Security Settings (Placeholder) */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Security</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Additional security settings will appear here in future updates.
        </p>
      </section>

      {/* Danger Zone */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-red-600">Danger Zone</h2>

        <div className="space-y-6 max-w-md">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition">
            Deactivate Account
          </button>

          {!confirmDelete ? (
            <button
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
              onClick={() => setConfirmDelete(true)}
            >
              Delete Account
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-100 dark:bg-red-900 p-4 rounded-lg space-y-4"
            >
              <p className="text-red-700 dark:text-red-300 text-sm">
                ⚠️ Are you absolutely sure you want to permanently delete your Lina account? You cant undo this.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => {
                    alert('Account deleted (not really, no backend yet).')
                    setConfirmDelete(false)
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
