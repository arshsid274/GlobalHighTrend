// ============================================================
// FILE: src/app/gallery/page.tsx
// ============================================================
import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'
import PageHero from '@/components/layout/PageHero'
import Breadcrumb from '@/components/seo/Breadcrumb'
import SEOHead from '@/components/seo/SEOHead'
import GalleryItem from '@/components/ui/GalleryItem'

export const metadata: Metadata = createMetadata({
  title: 'Gallery — Global High Trend Trading Operations',
  description:
    'Visual gallery of Global High Trend General Trading L.L.C operations — charcoal production, construction machinery, food ingredients, renewable energy, and logistics across UAE.',
  path: '/gallery',
})

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Gallery — Global High Trend',
  url: 'https://globalhightrend.com/gallery',
  description: 'Photo gallery of Global High Trend trading operations and products.',
}

const galleryItems = [
  { src: '/gallery/img-1-charcoal-export.svg', alt: 'Sawdust Briquette Charcoal — Flagship Product', caption: 'Sawdust Briquette Charcoal — Eco-friendly fuel for industrial & domestic use' },
  { src: '/gallery/img-2-shipping.svg', alt: 'Container shipping — Global export operations', caption: 'International export logistics — CIF/L/C trade operations' },
  { src: '/gallery/img-3-machinery.svg', alt: 'Construction machinery — Heavy equipment supply', caption: 'Construction & Industrial Machinery via Zoomlion, XCMG' },
  { src: '/gallery/img-4-oil-gas.svg', alt: 'Oil & Gas trading operations', caption: 'Oil & Gas — Petroleum products & petrochemical supply' },
  { src: '/gallery/img-5-food-ingredients.svg', alt: 'Food ingredients warehouse — Raw materials', caption: 'Food Ingredients — Premium raw materials via Flavor Food Trading FZE' },
  { src: '/gallery/img-6-solar-panels.svg', alt: 'Solar panels — Renewable energy products', caption: 'Renewable Energy — Solar panels & energy storage systems' },
  { src: '/gallery/img-7-dubai-office.svg', alt: 'Business Bay Dubai headquarters', caption: 'Head Office — Burlington Tower, Business Bay, Dubai' },
  { src: '/gallery/img-8-automotive.svg', alt: 'Automotive parts — OEM & aftermarket', caption: 'Automotive Parts — OEM & aftermarket components' },
  { src: '/gallery/img-9-global-trade.svg', alt: 'Global trade network — GCC & MENA markets', caption: 'Serving the GCC & MENA region — global supply chain' },
]

export default function GalleryPage() {
  return (
    <>
      <SEOHead data={webPageSchema} />
      <Breadcrumb crumbs={[{ label: 'Gallery', href: '/gallery' }]} />

      <PageHero
        title="Gallery"
        subtitle="A visual overview of Global High Trend's trading operations, products, and facilities across Dubai and beyond."
        compact
      />

      <section className="py-16 sm:py-24 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item) => (
              <GalleryItem key={item.alt} alt={item.alt} caption={item.caption} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
