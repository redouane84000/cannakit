import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface KineticTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  outline?: boolean
}

export function KineticText({
  text,
  className = '',
  as: Tag = 'h1',
  outline = false,
}: KineticTextProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return

    const chars = text.split('')
    el.innerHTML = chars
      .map(
        (char) =>
          `<span class="kinetic-char ${outline ? 'kinetic-outline' : 'kinetic-fill'}" style="display:inline-block">${char === ' ' ? '&nbsp;' : char}</span>`,
      )
      .join('')

    const spans = el.querySelectorAll('.kinetic-char')
    gsap.fromTo(
      spans,
      { y: 80, opacity: 0, rotateX: -40 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.1,
        stagger: 0.04,
        ease: 'power4.out',
        delay: 0.2,
      },
    )
  }, [text, outline, reduced])

  if (reduced) {
    return (
      <Tag className={`font-display font-extrabold leading-[0.9] tracking-tight ${className}`}>
        {text}
      </Tag>
    )
  }

  return (
    <Tag
      ref={ref}
      className={`font-display font-extrabold leading-[0.9] tracking-tight ${className}`}
      aria-label={text}
    />
  )
}
