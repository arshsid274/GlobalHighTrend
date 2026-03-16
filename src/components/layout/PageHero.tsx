// ============================================================
// FILE: src/components/layout/PageHero.tsx
// ============================================================
import Button from '@/components/ui/Button'

interface PageHeroProps {
  title: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  compact?: boolean
}

export default function PageHero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  compact = false,
}: PageHeroProps) {
  return (
    <section className={`bg-gradient-to-br from-brand-accent via-brand-dark to-brand-dark text-white ${compact ? 'py-12 sm:py-16' : 'py-20 sm:py-28'} px-4`}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta && (
              <Button href={primaryCta.href} variant="primary" size="lg">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
