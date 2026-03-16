// ============================================================
// FILE: src/components/ui/StatCard.tsx
// ============================================================
interface StatCardProps {
  value: string
  label: string
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-brand-border shadow-sm text-center">
      <span className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-1">
        {value}
      </span>
      <span className="text-brand-text text-sm font-medium">{label}</span>
    </div>
  )
}
