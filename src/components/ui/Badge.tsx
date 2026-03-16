// ============================================================
// FILE: src/components/ui/Badge.tsx
// ============================================================
import clsx from 'clsx'

interface BadgeProps {
  label: string
  color?: 'blue' | 'green' | 'red' | 'gray' | 'accent'
}

const colorMap = {
  blue: 'bg-blue-100 text-blue-800',
  green: 'bg-green-100 text-green-800',
  red: 'bg-red-100 text-red-800',
  gray: 'bg-gray-100 text-gray-700',
  accent: 'bg-brand-primary/10 text-brand-primary',
}

export default function Badge({ label, color = 'blue' }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-block text-xs font-semibold px-3 py-1 rounded-full tracking-wide',
        colorMap[color],
      )}
    >
      {label}
    </span>
  )
}
