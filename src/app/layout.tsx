// ============================================================
// FILE: src/app/layout.tsx
// ============================================================
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://globalhightrend.com'),
  title: {
    default: 'Global High Trend General Trading L.L.C — Dubai, UAE',
    template: '%s | Global High Trend',
  },
  description:
    'UAE-based multi-sector trading company specialising in eco-friendly fuel, oil & gas, construction machinery, food ingredients, and renewable energy. Headquartered in Business Bay, Dubai.',
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  keywords: [
    'charcoal supplier Dubai',
    'sawdust briquette charcoal UAE',
    'import export company Dubai',
    'general trading company UAE',
    'oil gas trading Dubai',
    'construction equipment supplier UAE',
    'food ingredients supplier MENA',
    'renewable energy trading UAE',
    'industrial machinery UAE',
    'automotive parts supplier Dubai',
    'B2B trading company Business Bay Dubai',
    'CIF L/C trade UAE',
    'GCC commodity supplier',
  ],
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Global High Trend General Trading L.L.C',
  alternateName: 'Global High Trend',
  url: 'https://globalhightrend.com',
  logo: 'https://globalhightrend.com/logo.png',
  foundingDate: '2021',
  description:
    'UAE-based multi-sector trading company in eco-friendly fuel, oil & gas, construction machinery, food ingredients, and renewable energy.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Burlington Tower, Office 410, Marasi Drive',
    addressLocality: 'Business Bay',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971-4-548-8762',
    email: 'info@globalhightrend.com',
    contactType: 'customer service',
    availableLanguage: ['English', 'Arabic'],
  },
  areaServed: ['AE', 'SA', 'KW', 'QA', 'BH', 'OM', 'EG', 'JO'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 z-50 rounded text-brand-primary font-semibold"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
