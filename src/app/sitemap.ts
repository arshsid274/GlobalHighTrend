// ============================================================
// FILE: src/app/sitemap.ts
// ============================================================
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://globalhightrend.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/',               priority: 1.0, changeFrequency: 'weekly'  as const },
    { path: '/about',          priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services',       priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/products',       priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/partners',       priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact',        priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/mission-vision', priority: 0.7, changeFrequency: 'yearly'  as const },
    { path: '/gallery',        priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/components',     priority: 0.3, changeFrequency: 'monthly' as const },
  ]
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
