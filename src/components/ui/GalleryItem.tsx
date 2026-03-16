// ============================================================
// FILE: src/components/ui/GalleryItem.tsx
// ============================================================
import Image from 'next/image'

interface GalleryItemProps {
  src?: string
  alt: string
  caption?: string
}

export default function GalleryItem({ src, alt, caption }: GalleryItemProps) {
  return (
    <figure className="group overflow-hidden rounded-xl border border-brand-border bg-brand-bg">
      <div className="relative aspect-video overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-bg to-brand-border gap-2">
            <div className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center">
              <span className="text-brand-primary text-xl" aria-hidden="true">◼</span>
            </div>
            <span className="text-xs text-brand-text opacity-60">{alt}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="p-3 text-sm text-brand-text text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
