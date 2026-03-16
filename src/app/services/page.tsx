// ============================================================
// FILE: src/app/services/page.tsx
// ============================================================
import type { Metadata } from 'next'
import Image from 'next/image'
import { createMetadata } from '@/lib/seo'
import PageHero from '@/components/layout/PageHero'
import Breadcrumb from '@/components/seo/Breadcrumb'
import SEOHead from '@/components/seo/SEOHead'
import Button from '@/components/ui/Button'

export const metadata: Metadata = createMetadata({
  title: 'Trading Services — Oil & Gas, Charcoal, Machinery, Food Ingredients',
  description:
    'Global High Trend offers import/export, oil & gas trading, construction machinery, food ingredients, renewable energy, and CIF/L/C trade services across UAE, GCC, and MENA markets.',
  path: '/services',
})

const servicesSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Import/Export Trading',
    name: 'Sawdust Briquette Charcoal Import/Export',
    provider: { '@type': 'Organization', name: 'Global High Trend General Trading L.L.C' },
    areaServed: 'GCC, MENA',
    description: 'Global sourcing and export of sawdust briquette charcoal under CIF and L/C terms.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Oil & Gas Trading',
    name: 'Oil & Gas — Refined Petroleum & Petrochemicals',
    provider: { '@type': 'Organization', name: 'Global High Trend General Trading L.L.C' },
    areaServed: 'International',
    description: 'Supply of refined petroleum products, lubricants, and petrochemical materials.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <SEOHead data={servicesSchema} />
      <Breadcrumb crumbs={[{ label: 'Services', href: '/services' }]} />

      <PageHero
        title="Our Trading Services"
        subtitle="From eco-friendly fuel to oil & gas, construction machinery, food ingredients, and renewable energy — Global High Trend delivers tailored, multi-sector trade solutions across the UAE and beyond."
        compact
      />

      {/* Intro */}
      <section className="py-10 px-4 bg-white border-b border-brand-border">
        <div className="max-w-4xl mx-auto text-center text-brand-text leading-relaxed">
          We manage end-to-end trade services including customs clearance, freight
          forwarding, sourcing, and procurement customised to meet client needs across
          continents. All services are available with CIF, FOB, and Letter of Credit
          trade terms.
        </div>
      </section>

      {/* ── Service 1: Import / Export Charcoal ── */}
      <section className="py-16 sm:py-20 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl h-64 overflow-hidden border border-brand-border order-last lg:order-first">
            <Image src="/images/charcoal-product.svg" alt="Sawdust briquette charcoal bulk export" fill className="object-cover" unoptimized />
          </div>
          <div>
            <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-2">Service 01</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
              Import / Export — Sawdust Briquette Charcoal
            </h2>
            <ul className="flex flex-col gap-2 text-brand-text">
              {[
                'Global sourcing of sawdust briquette charcoal',
                'Export documentation handling',
                'Support for GCC and MENA markets',
                'Flexible MOQ for bulk buyers',
                'CIF and L/C trade terms available',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span className="text-brand-primary font-bold" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Service 2: Oil & Gas ── */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-2">Service 02</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
              Oil &amp; Gas — Refined Petroleum &amp; Petrochemicals
            </h2>
            <p className="text-brand-text leading-relaxed">
              Supply and distribution of refined petroleum products, lubricants, and
              petrochemical materials to international markets. Reliable sourcing and
              logistics solutions for energy sector clients. Our oil &amp; gas trading
              capabilities cover upstream, midstream, and downstream supply chain needs.
            </p>
          </div>
          <div className="relative rounded-2xl h-64 overflow-hidden border border-brand-border">
            <Image src="/images/oil-gas.svg" alt="Oil and gas trading — petroleum products" fill className="object-cover" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Service 3: Construction & Machinery ── */}
      <section className="py-16 sm:py-20 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl h-64 overflow-hidden border border-brand-border order-last lg:order-first">
            <Image src="/images/construction-machinery.svg" alt="Construction and industrial machinery — Zoomlion XCMG Kerui" fill className="object-cover" unoptimized />
          </div>
          <div>
            <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-2">Service 03</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
              Construction &amp; Industrial Machinery
            </h2>
            <p className="text-brand-text leading-relaxed mb-4">
              Global High Trend collaborates with world-leading manufacturers to provide
              high-quality construction equipment, machinery, and industrial solutions
              across various markets.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Zoomlion', 'XCMG', 'Kerui', 'SLC', 'Sashi Steel', 'Oil Dynamics', 'COIN'].map(
                (brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-semibold rounded-full"
                  >
                    {brand}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service 4: Food Ingredients ── */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-2">Service 04</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
              Food Raw Materials &amp; Ingredients
            </h2>
            <p className="text-brand-text leading-relaxed mb-4">
              GHT works with globally reputed partners to supply premium-grade food
              ingredients and raw materials to manufacturers and distributors across
              different regions. This segment is also served by our sister company,
              Flavor Food Trading FZE.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Döhler', 'Symrise', 'BK Giulini', 'Lactalis', 'Friesland Campina'].map(
                (brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full"
                  >
                    {brand}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="relative rounded-2xl h-64 overflow-hidden border border-brand-border">
            <Image src="/images/food-ingredients.svg" alt="Food ingredients raw materials — Döhler Symrise Lactalis" fill className="object-cover" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Service 5: Renewable Energy ── */}
      <section className="py-16 sm:py-20 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl h-64 overflow-hidden border border-brand-border order-last lg:order-first">
            <Image src="/images/renewable-energy.svg" alt="Renewable energy solar panels and storage systems" fill className="object-cover" unoptimized />
          </div>
          <div>
            <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-2">Service 05</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
              Renewable Energy — Solar &amp; Storage
            </h2>
            <p className="text-brand-text leading-relaxed">
              Committed to sustainable development, GHT trades in solar panels, energy
              storage systems, and related renewable technologies. Our offerings align
              with global efforts to transition toward cleaner, greener energy and support
              clients in the UAE and MENA region pursuing sustainability goals.
            </p>
          </div>
        </div>
      </section>

      {/* ── Service 6: Automotive Parts ── */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-2">Service 06</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
              Automotive Parts — OEM &amp; Aftermarket
            </h2>
            <p className="text-brand-text leading-relaxed">
              GHT provides high-quality original equipment manufacturer (OEM) and
              aftermarket automotive components, serving wholesalers, retailers, and
              service centers. All parts are sourced from trusted global suppliers and
              comply with international quality standards.
            </p>
          </div>
          <div className="relative rounded-2xl h-64 overflow-hidden border border-brand-border">
            <Image src="/images/automotive-parts.svg" alt="Automotive parts OEM and aftermarket components" fill className="object-cover" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Service 7: CIF / L/C ── */}
      <section className="py-16 sm:py-20 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl h-64 overflow-hidden border border-brand-border order-last lg:order-first">
            <Image src="/images/cif-lc-trade.svg" alt="CIF LC trade finance international transactions" fill className="object-cover" unoptimized />
          </div>
          <div>
            <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-2">Service 07</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
              CIF / L/C — Secure International Transactions
            </h2>
            <p className="text-brand-text leading-relaxed mb-4">
              GHT facilitates secure cross-border transactions using CIF (Cost, Insurance,
              Freight) and Letter of Credit (L/C) payment terms, protecting both buyers
              and sellers. We support all major Incoterms and provide general trading
              across industrial and raw materials with flexible B2B sourcing arrangements.
            </p>
            <div className="flex gap-3 flex-wrap">
              {['CIF', 'FOB', 'EXW', 'DDP', 'L/C', 'T/T'].map((term) => (
                <span
                  key={term}
                  className="px-3 py-1.5 bg-brand-dark text-white text-xs font-bold rounded"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: What We Deliver ── */}
      <section className="py-16 sm:py-24 px-4 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            What We Deliver
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              'High-efficiency, eco-friendly fuel solutions for industrial and domestic use',
              'Reliable oil & gas product supply and petrochemical distribution',
              'Construction and industrial machinery from globally recognised manufacturers',
              'Premium food ingredients and raw materials via trusted global partners',
              'Solar panels and energy storage systems supporting the clean energy transition',
              'OEM and aftermarket automotive parts from quality-certified global suppliers',
              'Secure international transactions using CIF and L/C trade terms',
              'Supply chain optimisation with flexible warehousing and logistics support across the UAE',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                <span className="text-brand-primary font-bold text-lg mt-0.5 shrink-0" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Button href="/contact" variant="primary" size="lg">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
