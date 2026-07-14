import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current
    if (!cursor) return

    let x = 0
    let y = 0
    let cx = 0
    let cy = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }

    const loop = () => {
      cx += (x - cx) * 0.15
      cy += (y - cy) * 0.15
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onEnter = () => cursor.classList.add('custom-cursor--hover')
    const onLeave = () => cursor.classList.remove('custom-cursor--hover')

    const interactives = document.querySelectorAll(
      'a, button, [data-cursor="hover"], input, label',
    )
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor="hover"], input, label').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    document.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
      observer.disconnect()
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [reduced])

  if (reduced) return null

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
}
