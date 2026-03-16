// ============================================================
// FILE: src/app/products/page.tsx
// ============================================================
import type { Metadata } from 'next'
import Image from 'next/image'
import { createMetadata } from '@/lib/seo'
import PageHero from '@/components/layout/PageHero'
import Breadcrumb from '@/components/seo/Breadcrumb'
import SEOHead from '@/components/seo/SEOHead'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = createMetadata({
  title: 'Products — Sawdust Briquette Charcoal, Oil & Gas, Machinery UAE',
  description:
    'Global High Trend products: sawdust briquette charcoal, oil & gas, construction machinery, food ingredients, solar energy, and automotive parts. Bulk export. CIF/L/C terms. Dubai, UAE.',
  path: '/products',
})

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Sawdust Briquette Charcoal',
  description:
    'High-efficiency, eco-friendly compressed briquette charcoal for industrial and domestic use. Low emissions, long burn time. Available for bulk export under CIF and L/C terms.',
  brand: { '@type': 'Brand', name: 'Global High Trend General Trading L.L.C' },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    seller: {
      '@type': 'Organization',
      name: 'Global High Trend General Trading L.L.C',
      url: 'https://globalhightrend.com',
    },
  },
}

export default function ProductsPage() {
  return (
    <>
      <SEOHead data={productSchema} />
      <Breadcrumb crumbs={[{ label: 'Products', href: '/products' }]} />

      <PageHero
        title="Our Products & Commodities"
        subtitle="From eco-friendly sawdust briquette charcoal to oil & gas, food ingredients, construction machinery, and renewable energy — Global High Trend sources and supplies quality goods across multiple sectors."
        primaryCta={{ label: 'Request a Quotation', href: '/contact' }}
        compact
      />

      {/* ── Section 2: Flagship Product ── */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Badge label="Flagship Product" color="accent" />
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-3 mb-5 leading-tight">
              Sawdust Briquette Charcoal
            </h2>
            <p className="text-brand-text leading-relaxed mb-6">
              High-efficiency, eco-friendly fuel solution for industrial and domestic use.
              Low emissions, long burn time, and sustainably sourced from compressed
              sawdust waste — no deforestation required. A clean alternative to
              conventional charcoal for BBQ, restaurant grilling, industrial processes,
              and domestic cooking.
            </p>
            <p className="text-brand-text leading-relaxed mb-8">
              Available for bulk export under CIF and L/C terms. Serving B2B buyers
              across the GCC, MENA, and international markets. Contact our team for
              pricing, samples, and logistics arrangements.
            </p>
            <Button href="/contact" variant="primary">
              Enquire About Charcoal
            </Button>
          </div>

          {/* Spec table */}
          <div className="bg-brand-bg rounded-2xl border border-brand-border p-6">
            <h3 className="font-bold text-brand-dark mb-4 text-lg">Product Specifications</h3>
            <dl className="flex flex-col gap-3 text-sm">
              {[
                ['Type', 'Sawdust Briquette Charcoal'],
                ['Form', 'Compressed briquette'],
                ['Applications', 'Industrial, BBQ, restaurant grilling, domestic cooking'],
                ['Trade Terms', 'CIF, L/C, FOB'],
                ['Origin', 'Globally sourced'],
                ['Packaging', 'Custom on request'],
                ['MOQ', 'Available on inquiry'],
                ['Supply Chain', 'Quality-controlled end-to-end'],
              ].map(([key, val]) => (
                <div
                  key={key}
                  className="flex gap-3 pb-3 border-b border-brand-border last:border-0 last:pb-0"
                >
                  <dt className="font-semibold text-brand-dark w-32 shrink-0">{key}</dt>
                  <dd className="text-brand-text">{val}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Sawdust Briquette ── */}
      <section className="py-16 sm:py-20 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Why Sawdust Briquette Charcoal?"
            subtitle="An eco-conscious fuel solution that delivers performance and sustainability."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: '♻️',
                title: 'Renewable Resource',
                text: 'Made from sawdust waste, reducing landfill and promoting the circular economy.',
              },
              {
                icon: '💨',
                title: 'Lower Emissions',
                text: 'Burns cleaner than conventional wood charcoal with fewer VOCs and less smoke.',
              },
              {
                icon: '🌳',
                title: 'No Deforestation',
                text: 'Does not require tree cutting, protecting forest biodiversity and ecosystems.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-xl border border-brand-border shadow-sm p-6 text-center"
              >
                <div className="text-4xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Other Sectors ── */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Other Sectors & Commodities"
            subtitle="Beyond charcoal, Global High Trend sources and supplies across five additional high-demand sectors."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '⛽',
                name: 'Oil & Gas',
                desc: 'Refined petroleum products, lubricants, and petrochemicals for international markets.',
              },
              {
                icon: '🏗️',
                name: 'Construction Machinery',
                desc: 'Heavy equipment and industrial solutions via Zoomlion, XCMG, Kerui, SLC, and more.',
              },
              {
                icon: '🌿',
                name: 'Food Ingredients',
                desc: 'Premium raw materials from Döhler, Symrise, BK Giulini, Lactalis, and Friesland Campina via Flavor Food Trading FZE.',
              },
              {
                icon: '☀️',
                name: 'Renewable Energy',
                desc: 'Solar panels and energy storage systems for clean energy projects.',
              },
              {
                icon: '🚗',
                name: 'Automotive Parts',
                desc: 'OEM and aftermarket components from certified global suppliers.',
              },
              {
                icon: '📦',
                name: 'General Raw Materials',
                desc: 'Industrial commodities under GHT\'s general trading licence — contact us for specific requirements.',
              },
            ].map((sector) => (
              <article
                key={sector.name}
                className="bg-brand-bg rounded-xl border border-brand-border p-6 flex gap-4 items-start hover:border-brand-primary transition-colors"
              >
                <div className="text-2xl shrink-0" aria-hidden="true">{sector.icon}</div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-2">{sector.name}</h3>
                  <p className="text-brand-text text-sm leading-relaxed">{sector.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Own-Brand Development ── */}
      <section className="py-14 px-4 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Own-Brand &amp; Private Label Development
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            As part of our business expansion strategy, Global High Trend is developing
            its own-brand consumer products and private label goods in partnership with
            global manufacturers. Contact our team to discuss branding, manufacturing,
            and distribution arrangements.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Enquire About Private Label
          </Button>
        </div>
      </section>

      {/* ── Section 6: Bulk Order CTA ── */}
      <section className="py-16 sm:py-20 px-4 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Interested in Bulk Orders?
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            We supply to hotels, restaurants, retailers, industrial clients, exporters,
            and government entities across the UAE and GCC. Competitive pricing, reliable
            logistics, and flexible trade terms available.
          </p>
          <p className="text-brand-primary font-semibold mb-8">
            CIF / L/C terms available. Arabic &amp; English support.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Request a Quotation
          </Button>
        </div>
      </section>
    </>
  )
}
