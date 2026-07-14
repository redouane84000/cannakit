import type { ReactNode, ButtonHTMLAttributes } from 'react'
import { useMagnetic } from '../hooks/useMagnetic'

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'dark'
}

const variants = {
  primary:
    'bg-leaf text-white font-semibold hover:bg-leaf-deep shadow-[0_10px_28px_rgba(51,104,76,0.25)]',
  ghost: 'bg-white text-forest font-medium border border-line hover:border-leaf/60',
  dark: 'bg-ink text-paper font-semibold hover:bg-leaf-deep',
}

export function MagneticButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}: MagneticButtonProps) {
  const ref = useMagnetic(0.3)
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      data-cursor="hover"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
