import { useEffect, useState } from 'react'

// true si l'appareil n'a pas de vrai survol (tactile) → on coupe tilt/magnétique.
export function useIsTouch(): boolean {
  const [touch, setTouch] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover)')
    const update = () => setTouch(!mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return touch
}
