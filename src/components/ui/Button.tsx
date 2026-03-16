// ============================================================
// FILE: src/components/ui/Button.tsx
// ============================================================
import Link from 'next/link'
import clsx from 'clsx'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  'aria-label'?: string
}

const base =
  'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:opacity-50 disabled:cursor-not-allowed'

const variants = {
  primary:
    'bg-brand-primary text-white hover:bg-brand-accent shadow-sm hover:shadow-md',
  secondary:
    'bg-brand-dark text-white hover:bg-brand-accent shadow-sm hover:shadow-md',
  outline:
    'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
}

const sizes = {
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-6 py-3',
  lg: 'text-lg px-8 py-4',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  onClick,
  type = 'button',
  disabled,
  className,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = clsx(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
