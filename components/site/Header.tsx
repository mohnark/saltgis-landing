'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="SaltGIS Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-ink">SaltGIS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="text-slate-600 hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="text-slate-600 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Book a Call
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-slate-600 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="text-slate-600 hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="/blog" className="text-slate-600 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors text-center"
              >
                Book a Call
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 