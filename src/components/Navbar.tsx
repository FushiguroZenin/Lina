'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { name: 'Get started', href: '/get-started' },
  { name: 'Wallet', href: '/wallet' },
  { name: 'Security', href: '/settings' },
  { name: 'Support', href: '/billing' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'backdrop-blur-md bg-white/70 dark:bg-black/70 shadow-md'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/linasvg-A.svg" alt="Lina Logo" className="h-6 w-auto" />
          <span className="text-2xl font-semibold tracking-tight text-blue-600">Lina</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xl font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl hover:opacity-80 transition"
            aria-label="Toggle Theme"
          >
            {/* {darkMode ? '🌞' : '🌙'} */}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl"
            aria-label="Toggle Theme"
          >
          {/*  {darkMode ? '🌞' : '🌙'} */}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 dark:text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 px-4 py-3">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
