// ============================================================
// FILE: src/components/seo/SEOHead.tsx
// ============================================================
interface SEOHeadProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export default function SEOHead({ data }: SEOHeadProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
