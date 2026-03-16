// ============================================================
// FILE: src/components/seo/Breadcrumb.tsx
// ============================================================
import Link from 'next/link'
import SEOHead from './SEOHead'

interface Crumb {
  label: string
  href: string
}

interface BreadcrumbProps {
  crumbs: Crumb[]
  baseUrl?: string
}

export default function Breadcrumb({
  crumbs,
  baseUrl = 'https://globalhightrend.com',
}: BreadcrumbProps) {
  const allCrumbs = [{ label: 'Home', href: '/' }, ...crumbs]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allCrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${baseUrl}${crumb.href}`,
    })),
  }

  return (
    <>
      <SEOHead data={schema} />
      <nav
        aria-label="Breadcrumb"
        className="py-3 px-4 sm:px-6 lg:px-8 bg-brand-bg border-b border-brand-border"
      >
        <ol
          className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-brand-text flex-wrap"
          role="list"
        >
          {allCrumbs.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-2">
              {i < allCrumbs.length - 1 ? (
                <>
                  <Link
                    href={crumb.href}
                    className="text-brand-primary hover:underline focus-visible:outline-2 focus-visible:outline-brand-primary rounded"
                  >
                    {crumb.label}
                  </Link>
                  <span aria-hidden="true" className="text-brand-border select-none">
                    /
                  </span>
                </>
              ) : (
                <span
                  className="text-brand-dark font-medium"
                  aria-current="page"
                >
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
