import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { value: '67+', label: 'Références' },
  { value: '10', label: 'Catégories' },
  { value: '24/48h', label: 'Expédition' },
]

export function EditorialBanner() {
  const ref = useScrollReveal<HTMLElement>({ y: 60 })

  return (
    <section id="about" ref={ref} className="px-4 py-8 md:px-8" aria-labelledby="about-heading">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-leaf">
        <div className="blob-glow -left-16 -top-16" aria-hidden="true" />
        <div className="blob-glow -bottom-20 -right-12 opacity-70" aria-hidden="true" />

        <div className="relative grid gap-10 px-8 py-14 md:grid-cols-2 md:px-16 md:py-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sand">Notre approche</p>
            <h2 id="about-heading" className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">
              Le bon matériel, <span className="text-sand">simplement</span>.
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              CannaKit sélectionne des solutions de conditionnement et des accessoires fiables,
              pensés pour durer. Des capsules aux vaporisateurs, chaque produit est choisi pour sa
              qualité et son rapport prix/usage — pour les pros comme pour les particuliers.
            </p>
            <div className="flex gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-[11px] uppercase tracking-wide text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
