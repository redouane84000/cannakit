interface LogoProps {
  className?: string
  onDark?: boolean
}

export function Logo({ className = '', onDark = false }: LogoProps) {
  const leaf = onDark ? '#DAB086' : 'var(--leaf)'
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <g stroke={leaf} strokeWidth="1.6" strokeLinecap="round" fill={leaf}>
          <path d="M16 28 V15" fill="none" />
          <path d="M16 16 C16 10 15 5 16 3 C17 5 16 10 16 16" opacity="0.9" />
          <path d="M16 17 C12 14 8 12 5 12 C7 16 11 18 16 19" opacity="0.75" />
          <path d="M16 17 C20 14 24 12 27 12 C25 16 21 18 16 19" opacity="0.75" />
          <path d="M16 20 C13 19 9 19 6 21 C9 23 13 23 16 22" opacity="0.6" />
          <path d="M16 20 C19 19 23 19 26 21 C23 23 19 23 16 22" opacity="0.6" />
        </g>
      </svg>
      <span className="font-display text-xl font-bold tracking-tight leading-none">
        <span className={onDark ? 'text-white' : 'text-ink'}>Canna</span>
        <span className={onDark ? 'text-sand' : 'text-leaf'}>Kit</span>
      </span>
    </span>
  )
}
