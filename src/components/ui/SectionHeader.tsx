// ============================================================
// FILE: src/components/ui/SectionHeader.tsx
// ============================================================
interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`mb-10 max-w-3xl ${alignClass}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-brand-text text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
