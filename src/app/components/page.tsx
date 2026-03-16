// ============================================================
// FILE: src/app/components/page.tsx — Component Library Showcase
// ============================================================
import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'
import PageHero from '@/components/layout/PageHero'
import Breadcrumb from '@/components/seo/Breadcrumb'
import SEOHead from '@/components/seo/SEOHead'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import SectionHeader from '@/components/ui/SectionHeader'
import StatCard from '@/components/ui/StatCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import ServiceCard from '@/components/ui/ServiceCard'
import TeamMemberCard from '@/components/ui/TeamMemberCard'
import GalleryItem from '@/components/ui/GalleryItem'

export const metadata: Metadata = createMetadata({
  title: 'Component Library — UI Components',
  description:
    'Internal component library for the Global High Trend website. All reusable UI components with live previews.',
  path: '/components',
})

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Component Library — Global High Trend',
  url: 'https://globalhightrend.com/components',
}

const components = [
  { name: 'Button', path: 'src/components/ui/Button.tsx', desc: 'Primary, secondary, outline variants. sm/md/lg sizes. Renders as next/link when href provided.' },
  { name: 'Card', path: 'src/components/ui/Card.tsx', desc: 'Content card with optional image, badge, title, description, and CTA link.' },
  { name: 'Badge', path: 'src/components/ui/Badge.tsx', desc: 'Coloured pill label. Colors: blue, green, red, gray, accent.' },
  { name: 'SectionHeader', path: 'src/components/ui/SectionHeader.tsx', desc: 'h2 section title with optional subtitle. Align: center or left.' },
  { name: 'StatCard', path: 'src/components/ui/StatCard.tsx', desc: 'Large metric value with label. Accent-coloured value.' },
  { name: 'TestimonialCard', path: 'src/components/ui/TestimonialCard.tsx', desc: 'Client quote with author name, role, and avatar initial.' },
  { name: 'ServiceCard', path: 'src/components/ui/ServiceCard.tsx', desc: 'Icon, title, description, and optional CTA. Used for service overviews.' },
  { name: 'TeamMemberCard', path: 'src/components/ui/TeamMemberCard.tsx', desc: 'Team member with avatar (or letter fallback), name, role, and bio.' },
  { name: 'GalleryItem', path: 'src/components/ui/GalleryItem.tsx', desc: 'Aspect-ratio image with hover scale effect. Placeholder when no src.' },
  { name: 'Navbar', path: 'src/components/layout/Navbar.tsx', desc: 'Sticky nav with active link detection, mobile hamburger, and Request a Quote CTA.' },
  { name: 'Footer', path: 'src/components/layout/Footer.tsx', desc: 'Three-column footer: quick links, services list, contact address.' },
  { name: 'PageHero', path: 'src/components/layout/PageHero.tsx', desc: 'Page-level hero with h1, subtitle, and optional primary/secondary CTAs.' },
  { name: 'WhatsAppButton', path: 'src/components/layout/WhatsAppButton.tsx', desc: 'Fixed bottom-right WhatsApp floating button linking to +971 4 548 8762.' },
  { name: 'ContactForm', path: 'src/components/forms/ContactForm.tsx', desc: 'Full RFQ form with name, company, country, email, phone, industry, product interest, and message.' },
  { name: 'FormField', path: 'src/components/forms/FormField.tsx', desc: 'Reusable field for input, textarea, and select. Supports all common HTML attributes.' },
  { name: 'SEOHead', path: 'src/components/seo/SEOHead.tsx', desc: 'Renders JSON-LD structured data as a script tag.' },
  { name: 'Breadcrumb', path: 'src/components/seo/Breadcrumb.tsx', desc: 'Accessible breadcrumb nav with auto-generated BreadcrumbList JSON-LD.' },
]

export default function ComponentsPage() {
  return (
    <>
      <SEOHead data={webPageSchema} />
      <Breadcrumb crumbs={[{ label: 'Component Library', href: '/components' }]} />

      <PageHero
        title="Component Library"
        subtitle="All reusable UI components used across the Global High Trend website."
        compact
      />

      {/* Component Index Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Component Index" subtitle="17 components across ui/, layout/, forms/, and seo/ folders." align="left" />
          <div className="overflow-x-auto rounded-xl border border-brand-border">
            <table className="w-full text-sm">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Component</th>
                  <th className="text-left px-4 py-3 font-semibold">File Path</th>
                  <th className="text-left px-4 py-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {components.map((comp, i) => (
                  <tr
                    key={comp.name}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-brand-bg'}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-primary">{comp.name}</td>
                    <td className="px-4 py-3 text-brand-text font-mono text-xs">{comp.path}</td>
                    <td className="px-4 py-3 text-brand-text">{comp.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Live Previews */}
      <section className="py-16 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">

          {/* Buttons */}
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-4">Button</h2>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </div>

          {/* Badges */}
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-4">Badge</h2>
            <div className="flex flex-wrap gap-3">
              <Badge label="Blue Badge" color="blue" />
              <Badge label="Green Badge" color="green" />
              <Badge label="Red Badge" color="red" />
              <Badge label="Gray Badge" color="gray" />
              <Badge label="Accent Badge" color="accent" />
            </div>
          </div>

          {/* SectionHeader */}
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-4">SectionHeader</h2>
            <SectionHeader
              title="Section Title Example"
              subtitle="Optional subtitle text that describes the section content in more detail."
            />
          </div>

          {/* StatCard */}
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-4">StatCard</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard value="500+" label="Clients Served" />
              <StatCard value="GCC" label="Market Access" />
              <StatCard value="2021" label="Founded" />
              <StatCard value="24h" label="Response Time" />
            </div>
          </div>

          {/* ServiceCard */}
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-4">ServiceCard</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <ServiceCard icon="📦" title="Import / Export" description="Sawdust briquette charcoal and commodity trade across borders." href="/services" />
              <ServiceCard icon="⛽" title="Oil & Gas" description="Refined petroleum products and petrochemicals." href="/services" />
              <ServiceCard icon="🌿" title="Food Ingredients" description="Premium raw materials from global trusted suppliers." href="/services" />
            </div>
          </div>

          {/* Card */}
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-4">Card</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <Card title="Card with Badge" description="Example card with badge and CTA link." badge="Flagship" href="/products" ctaLabel="View Details" />
              <Card title="Card No Image" description="Card with placeholder image shown when no imageSrc is provided." />
              <Card title="Card with CTA" description="Full card with a call-to-action link at the bottom." href="/contact" ctaLabel="Get in Touch" />
            </div>
          </div>

          {/* TestimonialCard */}
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-4">TestimonialCard</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
              <TestimonialCard
                quote="Excellent service and reliable delivery. Global High Trend is our preferred trading partner for the UAE market."
                author="Ahmed Al-Rashidi"
                role="Procurement Manager, Kuwait"
              />
              <TestimonialCard
                quote="Their CIF and L/C trade expertise made our international transactions seamless and secure."
                author="Priya Sharma"
                role="Operations Director, UAE"
              />
            </div>
          </div>

          {/* TeamMemberCard */}
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-4">TeamMemberCard</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
              <TeamMemberCard name="Procurement" role="Supply Chain" bio="Global sourcing and quality control." />
              <TeamMemberCard name="Sales" role="Business Dev" bio="B2B client acquisition." />
              <TeamMemberCard name="Logistics" role="Operations" bio="Freight & customs coordination." />
              <TeamMemberCard name="Finance" role="Accounting" bio="Trade finance & compliance." />
            </div>
          </div>

          {/* GalleryItem */}
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-4">GalleryItem</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <GalleryItem alt="Sawdust Briquette Charcoal" caption="Sawdust Briquette Charcoal — Flagship Product" />
              <GalleryItem alt="Construction Machinery" caption="Heavy Equipment — Zoomlion & XCMG" />
              <GalleryItem alt="Solar Energy Panels" caption="Renewable Energy — Solar & Storage" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
