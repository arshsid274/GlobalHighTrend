// ============================================================
// FILE: src/components/ui/ServiceCard.tsx
// ============================================================
import Link from 'next/link'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href?: string
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <article className="bg-white rounded-xl border border-brand-border shadow-sm p-6 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary text-2xl">
        {icon}
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-brand-dark text-lg">{title}</h3>
        <p className="text-brand-text text-sm leading-relaxed">{description}</p>
      </div>
      {href && (
        <Link
          href={href}
          className="text-brand-primary font-semibold text-sm hover:underline focus-visible:outline-2 focus-visible:outline-brand-primary rounded"
          aria-label={`Learn more about ${title}`}
        >
          Learn more →
        </Link>
      )}
    </article>
  )
}
