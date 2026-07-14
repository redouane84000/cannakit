import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const KEY = 'cannakit_age_ok'
const ease: [number, number, number, number] = [0.83, 0, 0.17, 1]

function LeafMark() {
  return (
    <svg width="44" height="44" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <g stroke="#DAB086" strokeWidth="1.4" strokeLinecap="round" fill="#DAB086">
        <path d="M16 28 V15" fill="none" />
        <path d="M16 16 C16 10 15 5 16 3 C17 5 16 10 16 16" opacity="0.95" />
        <path d="M16 17 C12 14 8 12 5 12 C7 16 11 18 16 19" opacity="0.8" />
        <path d="M16 17 C20 14 24 12 27 12 C25 16 21 18 16 19" opacity="0.8" />
        <path d="M16 20 C13 19 9 19 6 21 C9 23 13 23 16 22" opacity="0.65" />
        <path d="M16 20 C19 19 23 19 26 21 C23 23 19 23 16 22" opacity="0.65" />
      </g>
    </svg>
  )
}

export function AgeGate() {
  const reduced = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [denied, setDenied] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(KEY) === '1') {
      document.body.classList.add('age-verified')
    } else {
      setOpen(true)
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [])

  const finish = () => {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    setOpen(false)
  }
  const confirm = () => {
    localStorage.setItem(KEY, '1')
    document.body.classList.add('age-verified', 'site-reveal')
    if (reduced) finish()
    else setLeaving(true)
  }

  if (!open) return null
  const dur = reduced ? 0 : 1

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-leaf px-6 text-center text-white"
      role="dialog"
      aria-modal="true"
      aria-label="Vérification de l'âge"
      initial={false}
      animate={{ y: leaving ? '-100%' : 0 }}
      transition={{ duration: dur, ease }}
      onAnimationComplete={() => { if (leaving) finish() }}
    >
      {/* Fonds décoratifs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(72% 55% at 50% 38%, rgba(218,176,134,0.24), transparent 70%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.14), transparent 28%, transparent 72%, rgba(0,0,0,0.2))' }} />

      <motion.div
        className="relative z-10 w-full max-w-lg"
        animate={{ opacity: leaving ? 0 : 1 }}
        transition={{ duration: leaving ? 0.35 : 0.01 }}
      >
        <motion.div
          className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/10"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="absolute inset-0 rounded-full ring-1 ring-white/25" />
          {!reduced && (
            <motion.span
              className="absolute inset-0 rounded-full ring-2 ring-sand/50"
              animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
            />
          )}
          <LeafMark />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-sand"
        >
          CannaKit
        </motion.p>

        {denied ? (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl font-bold md:text-4xl">Accès réservé aux majeurs</h1>
            <p className="mx-auto mt-4 max-w-md text-white/75">
              Vous devez avoir au moins 18 ans pour accéder à cette boutique. Revenez quand vous serez
              majeur·e.
            </p>
            <button
              type="button"
              onClick={() => setDenied(false)}
              className="mt-8 min-h-[48px] rounded-full border border-white/40 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Finalement, j&apos;ai 18 ans ou plus
            </button>
          </motion.div>
        ) : (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
              className="font-display text-[clamp(2rem,7vw,3.6rem)] font-bold leading-tight"
            >
              Avez-vous <span className="text-sand">18 ans</span> ou plus ?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto mt-4 max-w-md text-white/75"
            >
              Cette boutique propose des produits & accessoires réservés à un public adulte.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mx-auto mt-9 flex max-w-sm flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <button
                type="button"
                onClick={confirm}
                className="min-h-[54px] w-full rounded-full bg-sand px-8 text-base font-bold text-ink shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-transform hover:scale-[1.03]"
              >
                Oui, entrer
              </button>
              <button
                type="button"
                onClick={() => setDenied(true)}
                className="min-h-[54px] w-full rounded-full border border-white/40 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Non
              </button>
            </motion.div>
            <p className="mt-6 text-xs text-white/50">En entrant, vous confirmez avoir l&apos;âge légal requis.</p>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}
