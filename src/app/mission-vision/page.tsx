// ============================================================
// FILE: src/app/mission-vision/page.tsx
// ============================================================
import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'
import PageHero from '@/components/layout/PageHero'
import Breadcrumb from '@/components/seo/Breadcrumb'
import SEOHead from '@/components/seo/SEOHead'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'

export const metadata: Metadata = createMetadata({
  title: 'Mission & Vision — Global High Trend Trading Dubai',
  description:
    'Discover the mission, vision, and core values of Global High Trend General Trading L.L.C — connecting global supply to regional demand across the GCC and MENA since 2021.',
  path: '/mission-vision',
})

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Mission & Vision — Global High Trend',
  url: 'https://globalhightrend.com/mission-vision',
  description: 'Mission, vision, and core values of Global High Trend General Trading L.L.C.',
}

export default function MissionVisionPage() {
  return (
    <>
      <SEOHead data={webPageSchema} />
      <Breadcrumb crumbs={[{ label: 'Mission & Vision', href: '/mission-vision' }]} />

      <PageHero
        title="Our Mission & Vision"
        subtitle="The principles and purpose driving Global High Trend General Trading L.L.C forward."
        compact
      />

      {/* Mission & Vision Cards */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          <article className="bg-brand-primary text-white rounded-2xl p-8">
            <div className="text-4xl mb-4" aria-hidden="true">🎯</div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-white/80 leading-relaxed">
              To connect global manufacturers with emerging markets while ensuring quality,
              transparency, and long-term business relationships through sustainable,
              scalable trade solutions.
            </p>
          </article>
          <article className="bg-brand-accent text-white rounded-2xl p-8">
            <div className="text-4xl mb-4" aria-hidden="true">🔭</div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-white/80 leading-relaxed">
              To become a trusted global trading partner by delivering high-quality products,
              reliable supply chains, and strategic international partnerships across the
              MENA region and beyond.
            </p>
          </article>
        </div>

        {/* Goal */}
        <div className="max-w-4xl mx-auto mt-8">
          <article className="bg-brand-dark text-white rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4" aria-hidden="true">🚀</div>
            <h2 className="text-2xl font-bold mb-4">Our Goal</h2>
            <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
              To bridge global supply and regional demand by delivering high-quality,
              cost-effective, and sustainable trade solutions, while fostering long-term
              partnerships and driving mutual growth for all stakeholders.
            </p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide every trade, relationship, and decision."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🤝', title: 'Integrity', text: 'Transparent, honest dealings with every partner and client.' },
              { icon: '⭐', title: 'Quality', text: 'Uncompromising standards from sourcing to final delivery.' },
              { icon: '🌱', title: 'Sustainability', text: 'Responsible trading that protects our environment and communities.' },
              { icon: '🔄', title: 'Reliability', text: 'Consistent performance and dependable supply chains across all sectors.' },
            ].map((val) => (
              <article key={val.title} className="bg-white rounded-xl border border-brand-border p-6 text-center">
                <div className="text-3xl mb-3" aria-hidden="true">{val.icon}</div>
                <h3 className="font-bold text-brand-dark mb-2">{val.title}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{val.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Our Milestones" subtitle="Key moments in our growth journey." />
          <ol className="relative border-l-2 border-brand-primary pl-6 flex flex-col gap-8">
            {[
              { year: '2021', title: 'Founded in Dubai', desc: 'Global High Trend General Trading L.L.C established at Burlington Tower, Business Bay, Dubai, UAE.' },
              { year: '2022', title: 'Multi-Sector Expansion', desc: 'Expanded trading operations across oil & gas, construction machinery, food ingredients, and renewable energy sectors.' },
              { year: '2023', title: 'GCC Market Penetration', desc: 'Strengthened partnerships with global manufacturers and expanded client base across the GCC and MENA region.' },
            ].map((milestone) => (
              <li key={milestone.year} className="relative">
                <div className="absolute -left-9 w-5 h-5 rounded-full bg-brand-primary border-4 border-white" />
                <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">{milestone.year}</span>
                <h3 className="font-bold text-brand-dark mt-1 mb-1">{milestone.title}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{milestone.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-brand-primary text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Partner With a Company That Means It</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Our mission is your success. Let&apos;s build a long-term trading relationship.
        </p>
        <Button href="/contact" variant="secondary" size="lg">
          Get in Touch
        </Button>
      </section>
    </>
  )
}
