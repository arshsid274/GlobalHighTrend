// ============================================================
// FILE: src/app/page.tsx — Home
// ============================================================
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createMetadata } from '@/lib/seo'
import Button from '@/components/ui/Button'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import StatCard from '@/components/ui/StatCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import Badge from '@/components/ui/Badge'
import SEOHead from '@/components/seo/SEOHead'
import { HeroCarousel } from '@/components/layout/HeroCarousel'
import { AboutSection } from '@/components/layout/AboutSection'
import { StatsSection } from '@/components/layout/StatsSection'

export const metadata: Metadata = createMetadata({
  title: 'Import Export & Multi-Sector Trading Company Dubai',
  description:
    'Global High Trend General Trading L.L.C — UAE-based trading specialists in eco-friendly fuel, oil & gas, construction machinery, food ingredients, and renewable energy. Business Bay, Dubai.',
  path: '/',
})

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Global High Trend General Trading L.L.C — Home',
  url: 'https://globalhightrend.com',
  description:
    'UAE-based multi-sector trading company connecting global supply to regional demand.',
  inLanguage: 'en-US',
}

export default function HomePage() {
  return (
    <>
      <SEOHead data={webPageSchema} />

      {/* ── Section 1: Hero Carousel ── */}
      <HeroCarousel />

      {/* ── Section 2: About ── */}
      <AboutSection />
      <StatsSection />

      {/* ── Section 3: Services Overview ── */}
      <section className="py-16 sm:py-24 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Our Trading Services"
            subtitle="End-to-end trade solutions across six high-growth sectors, tailored for B2B clients across the GCC and MENA region."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon="📦"
              title="Import / Export"
              description="Sawdust briquette charcoal and commodity trade across borders under CIF and L/C terms."
              href="/services"
            />
            <ServiceCard
              icon="⛽"
              title="Oil & Gas Trading"
              description="Refined petroleum products, lubricants, and petrochemicals for international markets."
              href="/services"
            />
            <ServiceCard
              icon="🏗️"
              title="Construction Machinery"
              description="Heavy equipment and industrial machinery from globally recognised manufacturers."
              href="/services"
            />
            <ServiceCard
              icon="🌿"
              title="Food Ingredients"
              description="Premium-grade raw materials and food ingredients via our sister company Flavor Food Trading FZE."
              href="/services"
            />
            <ServiceCard
              icon="☀️"
              title="Renewable Energy"
              description="Solar panels and energy storage systems for the clean energy transition."
              href="/services"
            />
            <ServiceCard
              icon="🚗"
              title="CIF / L/C Trade"
              description="Secure international transactions with end-to-end supply chain coordination."
              href="/services"
            />
          </div>
        </div>
      </section>

      {/* ── Section 4: Featured Product Spotlight ── */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge label="Flagship Product" color="accent" />
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-3 mb-5 leading-tight">
              Sawdust Briquette Charcoal
            </h2>
            <p className="text-brand-text leading-relaxed mb-6">
              High-efficiency, eco-friendly fuel solution for industrial and domestic use.
              Low emissions, long burn time, and sustainably sourced. Made from compressed
              sawdust waste — no deforestation required. Available for bulk export under
              CIF and L/C terms, serving the GCC, MENA, and international markets.
            </p>
            <ul className="flex flex-col gap-2 mb-8">
              {[
                'Renewable resource — sawdust waste repurposed',
                'Burns cleaner with fewer VOCs',
                'Custom packaging & flexible MOQ',
                'CIF, FOB, and L/C trade terms available',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-brand-text">
                  <span className="text-brand-primary font-bold" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/products" variant="primary">
              View Product Details
            </Button>
          </div>
          <div className="relative rounded-2xl h-72 lg:h-96 overflow-hidden border border-brand-border">
            <Image src="/images/charcoal-product.svg" alt="Sawdust briquette charcoal — Global High Trend flagship product" fill className="object-cover" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Section 5: Industry Sectors ── */}
      <section className="py-16 sm:py-24 px-4 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Our Industry Sectors"
            subtitle="Six high-growth sectors where Global High Trend delivers reliable supply chain solutions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔥', name: 'Eco-Friendly Fuel', desc: 'Sawdust briquette charcoal for industrial and domestic markets.' },
              { icon: '⛽', name: 'Oil & Gas', desc: 'Refined petroleum, lubricants, and petrochemical materials.' },
              { icon: '🏗️', name: 'Construction & Machinery', desc: 'Heavy equipment via Zoomlion, XCMG, Kerui, and more.' },
              { icon: '🌿', name: 'Food Ingredients', desc: 'Premium raw materials via Döhler, Symrise, Lactalis, and others.' },
              { icon: '☀️', name: 'Renewable Energy', desc: 'Solar panels and energy storage for the clean energy transition.' },
              { icon: '🚗', name: 'Automotive Parts', desc: 'OEM and aftermarket components from trusted global suppliers.' },
            ].map((sector) => (
              <article
                key={sector.name}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{sector.icon}</div>
                <h3 className="font-bold text-white mb-2">{sector.name}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{sector.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Why Choose Us ── */}
      <section className="py-16 sm:py-24 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Why Choose Global High Trend?"
            subtitle="A trusted B2B partner with the reach, expertise, and commitment to deliver."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🌱', title: 'Eco-Conscious Trade', desc: 'Sustainable and eco-friendly trade solutions across all sectors.' },
              { icon: '📍', title: 'Dual UAE Presence', desc: 'Business Bay, Dubai headquarters with Sharjah operations.' },
              { icon: '🌍', title: 'GCC & MENA Access', desc: 'Direct market access to the fast-growing Gulf and MENA region.' },
              { icon: '🤝', title: 'Multilingual Team', desc: 'Professional team with Arabic and English support for global clients.' },
              { icon: '🔗', title: 'Global Supplier Network', desc: 'Trusted partnerships across Europe, Asia, and the Middle East.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-brand-border p-6 flex gap-4 items-start"
              >
                <div className="text-2xl shrink-0" aria-hidden="true">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">{item.title}</h3>
                  <p className="text-brand-text text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: Partners Strip ── */}
      <section className="py-14 px-4 bg-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-8">
            Our Trusted Global Partners
          </h2>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold text-brand-text uppercase tracking-wider mb-4">
                Industrial &amp; Construction
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Zoomlion', 'XCMG', 'Kerui', 'SLC', 'Sashi Steel', 'Oil Dynamics', 'COIN', 'TATA', 'Yinhe'].map(
                  (p) => (
                    <span
                      key={p}
                      className="px-4 py-2 border border-brand-border rounded-lg text-sm font-medium text-brand-text bg-brand-bg hover:border-brand-primary hover:text-brand-primary transition-colors"
                    >
                      {p}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-brand-text uppercase tracking-wider mb-4">
                Food &amp; Ingredients
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Döhler', 'Symrise', 'BK Giulini', 'Lactalis', 'Friesland Campina'].map((p) => (
                  <span
                    key={p}
                    className="px-4 py-2 border border-brand-border rounded-lg text-sm font-medium text-brand-text bg-brand-bg hover:border-brand-primary hover:text-brand-primary transition-colors"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/partners"
            className="inline-block mt-8 text-brand-primary font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-brand-primary rounded"
          >
            View all partners →
          </Link>
        </div>
      </section>

      {/* ── Section 8: Contact CTA Banner ── */}
      <section className="py-16 sm:py-24 px-4 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Get in touch with our team for product inquiries, bulk orders, and trade
            partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:+97145488762"
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium"
              aria-label="Call Global High Trend"
            >
              📞 +971 4 548 8762
            </a>
            <span className="hidden sm:block text-white/40">|</span>
            <a
              href="mailto:info@globalhightrend.com"
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium"
              aria-label="Email Global High Trend"
            >
              ✉️ info@globalhightrend.com
            </a>
            <span className="hidden sm:block text-white/40">|</span>
            <span className="text-white/80 text-sm">
              📍 Burlington Tower, Office 410, Business Bay, Dubai
            </span>
          </div>
          <Button href="/contact" variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 sm:py-24 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Building long-term relationships across the GCC and MENA region."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Global High Trend delivered our sawdust briquette charcoal order on time with excellent quality. Their CIF terms and documentation support made cross-border trade seamless."
              author="Ahmed Al-Rashidi"
              role="Procurement Manager, Kuwait"
            />
            <TestimonialCard
              quote="We've worked with GHT for construction equipment sourcing. Their network with Zoomlion and XCMG gives us access to competitive pricing and reliable delivery."
              author="Priya Sharma"
              role="Operations Director, UAE"
            />
            <TestimonialCard
              quote="As a food manufacturer, finding reliable ingredient suppliers in the MENA region is challenging. Global High Trend's connections to Döhler and Symrise have been invaluable."
              author="Carlos Mendez"
              role="Supply Chain Head, Qatar"
            />
          </div>
        </div>
      </section>
    </>
  )
}
