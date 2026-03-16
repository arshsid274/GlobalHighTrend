// ============================================================
// FILE: src/components/layout/Navbar.tsx
// ============================================================
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-border shadow-sm">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-brand-primary rounded"
          aria-label="Global High Trend — home"
        >
          <Image
            src="/Global_High_Trend_Logo.png"
            alt="Global High Trend General Trading L.L.C"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  'text-sm font-medium px-3 py-2 rounded transition-colors hover:text-brand-primary hover:bg-brand-bg focus-visible:outline-2 focus-visible:outline-brand-primary',
                  pathname === href
                    ? 'text-brand-primary font-semibold'
                    : 'text-brand-text',
                )}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="bg-brand-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-accent transition-colors focus-visible:outline-2 focus-visible:outline-brand-primary"
            aria-label="Request a quote from Global High Trend"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 rounded text-brand-dark hover:bg-brand-bg focus-visible:outline-2 focus-visible:outline-brand-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-brand-border bg-white px-4 pb-4"
        >
          <ul className="flex flex-col gap-1 pt-3" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    'block py-2.5 px-3 rounded text-sm font-medium transition-colors hover:bg-brand-bg hover:text-brand-primary',
                    pathname === href
                      ? 'text-brand-primary bg-brand-bg font-semibold'
                      : 'text-brand-text',
                  )}
                  onClick={() => setMobileOpen(false)}
                  aria-current={pathname === href ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-3 block w-full text-center bg-brand-primary text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-brand-accent transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Request a quote"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  )
}
