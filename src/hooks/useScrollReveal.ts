import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealOptions {
  y?: number
  duration?: number
  delay?: number
  stagger?: number
  start?: string
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {},
) {
  const ref = useRef<T>(null)
  const { y = 48, duration = 1, delay = 0, stagger = 0.08, start = 'top 85%' } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      gsap.set(el, { opacity: 1, y: 0 })
      return
    }

    const targets = el.dataset.revealStagger
      ? el.querySelectorAll('[data-reveal-item]')
      : el

    const tween = gsap.fromTo(
      targets,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger: el.dataset.revealStagger ? stagger : 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none reverse',
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [y, duration, delay, stagger, start])

  return ref
}
