// ============================================================
// FILE: src/components/layout/Footer.tsx
// ============================================================
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Logo & tagline */}
        <div className="mb-10">
          <Image
            src="/Global_High_Trend_Logo.png"
            alt="Global High Trend General Trading L.L.C"
            width={200}
            height={50}
            className="mb-2"
          />
          <p className="text-gray-400 text-sm mt-1">
            Connecting Global Supply to Regional Demand
          </p>
        </div>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <nav aria-label="Footer quick links">
              <ul className="flex flex-col gap-2.5" role="list">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Products', href: '/products' },
                  { label: 'Partners', href: '/partners' },
                  { label: 'Contact', href: '/contact' },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-brand-primary transition-colors text-sm focus-visible:outline-2 focus-visible:outline-brand-primary rounded"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-400" role="list">
              <li>Import / Export Trading</li>
              <li>Oil &amp; Gas Trading</li>
              <li>Construction Machinery</li>
              <li>Food Ingredients</li>
              <li>Renewable Energy</li>
              <li>Automotive Parts</li>
              <li>CIF / L/C Trade &amp; Logistics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h3>
            <address className="not-italic flex flex-col gap-3 text-sm text-gray-400">
              <p>
                Burlington Tower, Office 410<br />
                Marasi Drive, Business Bay<br />
                Dubai, UAE
              </p>
              <p>
                Operations: Sharjah, UAE
              </p>
              <p>
                <a
                  href="tel:+97145488762"
                  className="hover:text-brand-primary transition-colors focus-visible:outline-2 focus-visible:outline-brand-primary rounded"
                >
                  +971 4 548 8762
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@globalhightrend.com"
                  className="hover:text-brand-primary transition-colors focus-visible:outline-2 focus-visible:outline-brand-primary rounded"
                >
                  info@globalhightrend.com
                </a>
              </p>
              <p>
                <a
                  href="https://globalhightrend.com"
                  className="hover:text-brand-primary transition-colors focus-visible:outline-2 focus-visible:outline-brand-primary rounded"
                >
                  globalhightrend.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          © {year} Global High Trend General Trading L.L.C | globalhightrend.com
        </div>
      </div>
    </footer>
  )
}
