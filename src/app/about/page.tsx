// ============================================================
// FILE: src/app/about/page.tsx
// ============================================================
import type { Metadata } from 'next'
import Image from 'next/image'
import { createMetadata } from '@/lib/seo'
import PageHero from '@/components/layout/PageHero'
import Breadcrumb from '@/components/seo/Breadcrumb'
import SEOHead from '@/components/seo/SEOHead'
import SectionHeader from '@/components/ui/SectionHeader'
import TeamMemberCard from '@/components/ui/TeamMemberCard'

export const metadata: Metadata = createMetadata({
  title: 'About Us — UAE Import Export Trading Company',
  description:
    'Learn about Global High Trend General Trading L.L.C — established 2021, Business Bay, Dubai. Multi-sector trading in eco-fuel, oil & gas, machinery, food ingredients, and renewable energy.',
  path: '/about',
})

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Global High Trend General Trading L.L.C',
  url: 'https://globalhightrend.com/about',
  description:
    'About Global High Trend — UAE-based multi-sector trading company established in 2021.',
}

export default function AboutPage() {
  return (
    <>
      <SEOHead data={webPageSchema} />
      <Breadcrumb crumbs={[{ label: 'About Us', href: '/about' }]} />

      <PageHero
        title="About Global High Trend"
        subtitle="A dynamic, rapidly growing international trading company built on global vision and local expertise since 2021."
        compact
      />

      {/* ── Section 1: Company Story ── */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6 leading-tight">
              Our Story
            </h2>
            <div className="flex flex-col gap-4 text-brand-text leading-relaxed">
              <p>
                Global High Trend General Trading L.L.C is a dynamic and rapidly growing
                international trading company established in 2021 and headquartered at
                Burlington Tower, Business Bay, Dubai, UAE. Since its inception, the company
                has built a strong reputation for reliability, quality sourcing, and
                strategic global partnerships.
              </p>
              <p>
                We operate across multiple sectors — including eco-friendly fuel, oil &amp; gas,
                industrial machinery, food raw materials, renewable energy, and automotive
                parts — serving businesses across the GCC, MENA, and international markets.
                We believe that trade is more than an exchange of goods — it&apos;s an opportunity
                to shape the future responsibly and profitably.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl h-72 lg:h-80 overflow-hidden border border-brand-border">
            <Image src="/images/about-office.svg" alt="Burlington Tower Business Bay Dubai — Global High Trend head office" fill className="object-cover" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Section 2: Mission, Vision & Goal ── */}
      <section className="py-16 sm:py-24 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Mission, Vision & Goal"
            subtitle="The principles that drive everything we do at Global High Trend."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Our Mission',
                text: 'To connect global manufacturers with emerging markets while ensuring quality, transparency, and long-term business relationships through sustainable, scalable trade solutions.',
              },
              {
                icon: '🔭',
                title: 'Our Vision',
                text: 'To become a trusted global trading partner by delivering high-quality products, reliable supply chains, and strategic international partnerships across the MENA region and beyond.',
              },
              {
                icon: '🚀',
                title: 'Our Goal',
                text: 'To bridge global supply and regional demand by delivering high-quality, cost-effective, and sustainable trade solutions, while fostering long-term partnerships and driving mutual growth.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-xl border border-brand-border shadow-sm p-8 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-2xl">
                  <span aria-hidden="true">{item.icon}</span>
                </div>
                <h3 className="font-bold text-brand-dark text-xl">{item.title}</h3>
                <p className="text-brand-text leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Our Approach ── */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6 leading-tight">
              How We Operate
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                { icon: '👥', text: 'Client-focused and solution-driven operations' },
                { icon: '🤝', text: 'Transparent, long-term partnerships built on trust and compliance' },
                { icon: '📍', text: 'Agile operations across Dubai (Business Bay) &amp; Sharjah' },
                { icon: '🌱', text: 'Commitment to quality, sustainability, and responsible sourcing' },
                { icon: '📊', text: 'Data-informed, market-aligned strategy across multiple industry sectors' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-4">
                  <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">{item.icon}</span>
                  <span
                    className="text-brand-text"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '2021', label: 'Founded' },
              { value: 'GCC+', label: 'Markets Served' },
              { value: 'B2B', label: 'Focus' },
              { value: '24h', label: 'Response Time' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-bg rounded-xl border border-brand-border p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-brand-primary mb-1">{stat.value}</p>
                <p className="text-sm text-brand-text font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Business Expansion ── */}
      <section className="py-16 sm:py-24 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-5 leading-tight">
                Growing Beyond Borders
              </h2>
              <p className="text-brand-text leading-relaxed mb-8">
                As part of our long-term growth strategy, Global High Trend is actively
                expanding its operations to include own-brand consumer products, raw
                material supply chains for food and industrial industries, manufacturing
                partnerships for finished goods, and global sourcing and distribution
                networks.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🏷️', label: 'Own-Brand Products' },
                  { icon: '🌾', label: 'Food Supply Chains' },
                  { icon: '🏭', label: 'Manufacturing Partnerships' },
                  { icon: '🌐', label: 'Global Distribution' },
                ].map((pillar) => (
                  <div
                    key={pillar.label}
                    className="bg-white rounded-xl border border-brand-border p-4 flex items-center gap-3"
                  >
                    <span className="text-xl" aria-hidden="true">{pillar.icon}</span>
                    <span className="text-sm font-semibold text-brand-dark">{pillar.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-2xl p-8 border border-brand-border">
              <h3 className="font-bold text-brand-dark text-xl mb-4">Key Facts</h3>
              <dl className="flex flex-col gap-3 text-sm">
                {[
                  ['Founded', '2021'],
                  ['Headquarters', 'Burlington Tower, Office 410, Business Bay, Dubai'],
                  ['Operations', 'Sharjah, UAE'],
                  ['Sectors', '6 industries'],
                  ['Trade Terms', 'CIF, FOB, L/C'],
                  ['Languages', 'Arabic & English'],
                ].map(([key, val]) => (
                  <div key={key} className="flex gap-2">
                    <dt className="font-semibold text-brand-dark w-28 shrink-0">{key}:</dt>
                    <dd className="text-brand-text">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Sister Company ── */}
      <section className="py-16 sm:py-24 px-4 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-2">
              Meet Our Sister Company
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
              Flavor Food Trading FZE
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Operating under the same management as Global High Trend, Flavor Food Trading
              FZE focuses specifically on food ingredients trading, sourcing, and supply for
              the food manufacturing industry. Powered by partnerships with globally reputed
              suppliers including Döhler, Symrise, BK Giulini, Lactalis, and Friesland Campina.
            </p>
            <a
              href="https://globalhightrend.com"
              className="inline-flex items-center gap-2 text-white font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-white rounded"
              aria-label="Learn more about Flavor Food Trading FZE"
            >
              Learn More About Flavor Food Trading →
            </a>
          </div>
          <div className="relative rounded-2xl h-64 overflow-hidden border border-white/20">
            <Image src="/images/sister-company.svg" alt="Flavor Food Trading FZE — food ingredients sister company" fill className="object-cover" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Section 6: Team ── */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="The Team Behind the Trade"
            subtitle="Professionals with experience in regional and global trade across multiple industries."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            <TeamMemberCard name="Procurement" role="Sourcing & Supply" bio="Global supplier network management and quality control." />
            <TeamMemberCard name="Sales" role="Business Development" bio="B2B client acquisition and trade partnership management." />
            <TeamMemberCard name="Logistics" role="Supply Chain" bio="Freight forwarding, customs clearance, and delivery coordination." />
            <TeamMemberCard name="Accounting" role="Finance & Compliance" bio="Financial operations, trade finance, and regulatory compliance." />
            <TeamMemberCard name="BD Team" role="Strategy & Growth" bio="Market expansion, sector analysis, and new opportunity identification." />
          </div>
        </div>
      </section>
    </>
  )
}
