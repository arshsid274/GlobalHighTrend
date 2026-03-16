// ============================================================
// FILE: src/components/ui/TestimonialCard.tsx
// ============================================================
interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <figure className="bg-white rounded-xl border border-brand-border shadow-sm p-6 flex flex-col gap-4">
      <div className="text-brand-primary text-3xl leading-none" aria-hidden="true">
        &ldquo;
      </div>
      <blockquote className="text-brand-text leading-relaxed flex-1">
        {quote}
      </blockquote>
      <figcaption className="flex items-center gap-3 pt-2 border-t border-brand-border">
        <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-brand-dark text-sm">{author}</p>
          <p className="text-brand-text text-xs">{role}</p>
        </div>
      </figcaption>
    </figure>
  )
}
