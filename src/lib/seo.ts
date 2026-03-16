// ============================================================
// FILE: src/lib/seo.ts
// ============================================================
import type { Metadata } from 'next'

const BASE_URL = 'https://globalhightrend.com'
const BRAND = 'Global High Trend General Trading L.L.C'
const BRAND_SHORT = 'Global High Trend'

export { BASE_URL, BRAND, BRAND_SHORT }

export function createMetadata({
  title,
  description,
  path = '/',
  ogImage = '/og-image.png',
}: {
  title: string
  description: string
  path?: string
  ogImage?: string
}): Metadata {
  const url = `${BASE_URL}${path}`
  const fullTitle = `${title} | ${BRAND_SHORT}`
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BRAND,
      images: [
        {
          url: `${BASE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${BASE_URL}${ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
  }
}
