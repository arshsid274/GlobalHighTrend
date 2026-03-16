// ============================================================
// FILE: src/app/partners/page.tsx
// ============================================================
import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'
import PageHero from '@/components/layout/PageHero'
import Breadcrumb from '@/components/seo/Breadcrumb'
import SEOHead from '@/components/seo/SEOHead'
import Button from '@/components/ui/Button'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = createMetadata({
  title: 'Global Partners — Zoomlion, XCMG, Döhler, Symrise & More',
  description:
    'Global High Trend partners with world-leading manufacturers: Zoomlion, XCMG, Kerui, Döhler, Symrise, Lactalis, Friesland Campina. Trusted supply chain for GCC & MENA markets.',
  path: '/partners',
})

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Global Partners — Global High Trend',
  url: 'https://globalhightrend.com/partners',
  description: 'Our trusted global partners across construction, machinery, and food ingredients.',
}

const industrialPartners = [
  { name: 'Zoomlion', tag: 'Construction Machinery', icon: '🏗️' },
  { name: 'XCMG', tag: 'Heavy Equipment', icon: '🚧' },
  { name: 'Kerui', tag: 'Industrial Machinery', icon: '⚙️' },
  { name: 'SLC', tag: 'Industrial Solutions', icon: '🔧' },
  { name: 'Sashi Steel', tag: 'Steel Products', icon: '🏭' },
  { name: 'Oil Dynamics', tag: 'Oil & Gas Equipment', icon: '⛽' },
  { name: 'COIN', tag: 'Industrial Goods', icon: '📦' },
  { name: 'TATA', tag: 'Doors & Wood Products', icon: '🚪' },
  { name: 'Yinhe', tag: 'Industrial Goods', icon: '🌐' },
]

const foodPartners = [
  { name: 'Döhler', tag: 'Food Ingredients & Flavours', icon: '🌿' },
  { name: 'Symrise', tag: 'Flavour & Fragrance Solutions', icon: '🧪' },
  { name: 'BK Giulini', tag: 'Food Stabilisers & Additives', icon: '⚗️' },
  { name: 'Lactalis', tag: 'Dairy Products & Ingredients', icon: '🥛' },
  { name: 'Friesland Campina', tag: 'Dairy & Nutritional Ingredients', icon: '🐄' },
]

export default function PartnersPage() {
  return (
    <>
      <SEOHead data={webPageSchema} />
      <Breadcrumb crumbs={[{ label: 'Partners', href: '/partners' }]} />

      <PageHero
        title="Our Global Partners"
        subtitle="Trusted international manufacturers and suppliers across Europe, Asia, and the Middle East — powering our supply chain for clients across the GCC and MENA."
        compact
      />

      {/* ── Section 1: Intro ── */}
      <section className="py-12 px-4 bg-white border-b border-brand-border">
        <div className="max-w-4xl mx-auto text-center text-brand-text leading-relaxed">
          Global High Trend has built strong, long-standing relationships with trusted
          international manufacturers, suppliers, and partners across Europe, Asia, and
          the Middle East. These partnerships allow us to deliver consistent product
          quality, competitive pricing, and reliable supply chains for our clients
          across the MENA region and beyond.
        </div>
      </section>

      {/* ── Section 2: Industrial Partners ── */}
      <section className="py-16 sm:py-24 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Construction, Machinery & Industrial"
            subtitle="World-leading manufacturers delivering heavy equipment and industrial solutions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industrialPartners.map((partner) => (
              <article
                key={partner.name}
                className="bg-white rounded-xl border border-brand-border shadow-sm p-6 flex items-center gap-4 hover:border-brand-primary hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-2xl shrink-0">
                  <span aria-hidden="true">{partner.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">{partner.name}</h3>
                  <p className="text-brand-text text-xs mt-0.5">{partner.tag}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Food Partners ── */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Food Ingredients & Raw Materials"
            subtitle="Global ingredient leaders supplying premium-grade food raw materials via Flavor Food Trading FZE."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {foodPartners.map((partner) => (
              <article
                key={partner.name}
                className="bg-brand-bg rounded-xl border border-brand-border shadow-sm p-6 flex items-center gap-4 hover:border-green-400 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-2xl shrink-0">
                  <span aria-hidden="true">{partner.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">{partner.name}</h3>
                  <p className="text-brand-text text-xs mt-0.5">{partner.tag}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Become a Partner ── */}
      <section className="py-16 sm:py-20 px-4 bg-brand-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Interested in Partnering with Us?
          </h2>
          <p className="text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            We are always open to new supplier, distribution, and manufacturing partnerships.
            Whether you are a global producer seeking MENA market access or a regional buyer
            looking for reliable sourcing, our team is ready to build a long-term relationship.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
