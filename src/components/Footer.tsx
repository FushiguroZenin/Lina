'use client'

import { FaGithub, FaXTwitter, FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-100 dark:bg-zinc-900 py-12 px-6 sm:px-12 text-zinc-700 dark:text-zinc-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo or Name */}
        <div className="text-xl font-semibold text-blue-600 dark:text-blue-400">
          Lina
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/FushiguroZenin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-zinc-500 dark:text-zinc-500 mt-8">
        © {new Date().getFullYear()} Lina. All rights reserved.
      </div>
    </footer>
  )
}
