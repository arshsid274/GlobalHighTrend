// ============================================================
// FILE: src/components/ui/Card.tsx
// ============================================================
import Image from 'next/image'
import Link from 'next/link'
import Badge from './Badge'

interface CardProps {
  title: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  badge?: string
  href?: string
  ctaLabel?: string
  className?: string
}

export default function Card({
  title,
  description,
  imageSrc,
  imageAlt,
  badge,
  href,
  ctaLabel,
  className,
}: CardProps) {
  return (
    <article
      className={`bg-white rounded-xl shadow-sm border border-brand-border overflow-hidden flex flex-col ${className ?? ''}`}
    >
      <div className="relative h-48 bg-brand-bg">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-brand-bg to-brand-border">
            <span className="text-brand-primary opacity-20 text-5xl" aria-hidden="true">
              ◼
            </span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1 gap-2">
        {badge && <Badge label={badge} color="accent" />}
        <h3 className="font-bold text-brand-dark text-lg">{title}</h3>
        {description && (
          <p className="text-brand-text text-sm leading-relaxed flex-1">{description}</p>
        )}
        {href && ctaLabel && (
          <Link
            href={href}
            className="mt-3 text-brand-primary font-semibold text-sm hover:underline focus-visible:outline-2 focus-visible:outline-brand-primary rounded"
          >
            {ctaLabel} →
          </Link>
        )}
      </div>
    </article>
  )
}
