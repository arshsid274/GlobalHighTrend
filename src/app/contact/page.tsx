// ============================================================
// FILE: src/app/contact/page.tsx
// ============================================================
import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'
import PageHero from '@/components/layout/PageHero'
import Breadcrumb from '@/components/seo/Breadcrumb'
import SEOHead from '@/components/seo/SEOHead'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = createMetadata({
  title: 'Contact Us — Request a Quote, Business Bay Dubai',
  description:
    'Contact Global High Trend General Trading L.L.C. Phone: +971 4 548 8762. Email: info@globalhightrend.com. Burlington Tower, Office 410, Business Bay, Dubai, UAE. 24-hour response.',
  path: '/contact',
})

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Global High Trend General Trading L.L.C',
  url: 'https://globalhightrend.com/contact',
  description: 'Get in touch with our team for product inquiries, bulk orders, and trade partnerships.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Global High Trend General Trading L.L.C',
    telephone: '+971-4-548-8762',
    email: 'info@globalhightrend.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Burlington Tower, Office 410, Marasi Drive',
      addressLocality: 'Business Bay',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <SEOHead data={contactPageSchema} />
      <Breadcrumb crumbs={[{ label: 'Contact', href: '/contact' }]} />

      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for product inquiries, bulk orders, trade partnerships, and general enquiries."
        compact
      />

      {/* ── Section 1: Contact Info + Map ── */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Get in Touch</h2>
            <address className="not-italic flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-lg shrink-0">
                  📞
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm mb-0.5">Phone</p>
                  <a
                    href="tel:+97145488762"
                    className="text-brand-primary hover:underline focus-visible:outline-2 focus-visible:outline-brand-primary rounded"
                  >
                    +971 4 548 8762
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-lg shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm mb-0.5">Email</p>
                  <a
                    href="mailto:info@globalhightrend.com"
                    className="text-brand-primary hover:underline focus-visible:outline-2 focus-visible:outline-brand-primary rounded"
                  >
                    info@globalhightrend.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-lg shrink-0">
                  🌐
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm mb-0.5">Website</p>
                  <a
                    href="https://globalhightrend.com"
                    className="text-brand-primary hover:underline focus-visible:outline-2 focus-visible:outline-brand-primary rounded"
                  >
                    globalhightrend.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-lg shrink-0">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm mb-0.5">Head Office</p>
                  <p className="text-brand-text text-sm">
                    Burlington Tower, Office 410<br />
                    Marasi Drive, Business Bay<br />
                    Dubai, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-lg shrink-0">
                  🏭
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm mb-0.5">Operations</p>
                  <p className="text-brand-text text-sm">Sharjah, UAE</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-lg shrink-0">
                  🌿
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm mb-0.5">Sister Company</p>
                  <p className="text-brand-text text-sm">Flavor Food Trading FZE</p>
                </div>
              </div>
            </address>

            {/* Business Hours */}
            <div className="mt-8 bg-brand-bg rounded-xl border border-brand-border p-5">
              <h3 className="font-bold text-brand-dark mb-3">Business Hours</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Monday – Friday', '9:00 AM – 6:00 PM'],
                    ['Saturday', '10:00 AM – 2:00 PM'],
                    ['Sunday', 'Closed'],
                  ].map(([day, hours]) => (
                    <tr key={day} className="border-b border-brand-border last:border-0">
                      <td className="py-2 font-medium text-brand-dark">{day}</td>
                      <td className="py-2 text-brand-text text-right">{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-brand-bg rounded-2xl border border-brand-border overflow-hidden flex flex-col">
            <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-brand-bg to-brand-border min-h-72">
              <div className="text-center p-6">
                <div className="text-5xl mb-3" aria-hidden="true">🗺️</div>
                <p className="font-semibold text-brand-dark mb-1">Burlington Tower</p>
                <p className="text-brand-text text-sm">Office 410, Marasi Drive</p>
                <p className="text-brand-text text-sm">Business Bay, Dubai, UAE</p>
                <a
                  href="https://maps.google.com/?q=Burlington+Tower+Business+Bay+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-brand-primary text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-brand-primary rounded"
                  aria-label="Open location in Google Maps"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Enquiry / RFQ Form ── */}
      <section className="py-16 sm:py-20 px-4 bg-brand-bg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-2 text-center">
            Send Us an Enquiry
          </h2>
          <p className="text-brand-text text-center mb-10">
            Fill in the form below and our team will respond within 24 hours.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* ── Section 3: Quick Contact Strip ── */}
      <section className="py-12 px-4 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-4">
            <a
              href="tel:+97145488762"
              className="flex items-center gap-2 text-white hover:text-brand-primary transition-colors font-medium"
            >
              📞 +971 4 548 8762
            </a>
            <span className="hidden sm:block text-white/30">|</span>
            <a
              href="mailto:info@globalhightrend.com"
              className="flex items-center gap-2 text-white hover:text-brand-primary transition-colors font-medium"
            >
              ✉️ info@globalhightrend.com
            </a>
            <span className="hidden sm:block text-white/30">|</span>
            <span className="text-white/70 text-sm">
              📍 Burlington Tower, Office 410, Business Bay, Dubai
            </span>
          </div>
          <p className="text-white/60 text-sm">
            We respond within 24 hours. Arabic and English support available.
            Serving clients across the UAE, GCC, MENA, and international markets.
          </p>
        </div>
      </section>
    </>
  )
}
