// ============================================================
// FILE: src/components/ui/TeamMemberCard.tsx
// ============================================================
import Image from 'next/image'

interface TeamMemberCardProps {
  name: string
  role: string
  bio?: string
  imageSrc?: string
}

export default function TeamMemberCard({ name, role, bio, imageSrc }: TeamMemberCardProps) {
  return (
    <article className="bg-white rounded-xl border border-brand-border shadow-sm p-6 flex flex-col items-center text-center gap-3">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-brand-primary flex items-center justify-center shrink-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-white font-bold text-2xl">{name.charAt(0)}</span>
        )}
      </div>
      <div>
        <h3 className="font-bold text-brand-dark">{name}</h3>
        <p className="text-brand-primary text-sm font-medium">{role}</p>
      </div>
      {bio && (
        <p className="text-brand-text text-sm leading-relaxed">{bio}</p>
      )}
    </article>
  )
}
