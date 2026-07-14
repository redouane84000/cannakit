import { ArrowUpRight } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { categories, products } from '../data/products'
import { useScrollReveal } from '../hooks/useScrollReveal'

function cover(category: string): string | null {
  return products.find((p) => p.category === category && p.image)?.image ?? null
}
function count(category: string): number {
  return products.filter((p) => p.category === category).length
}

export function CategoryGrid() {
  const ref = useScrollReveal<HTMLElement>({ y: 50, stagger: 0.06 })
  const [, setSearchParams] = useSearchParams()

  const pick = (cat: string) => {
    setSearchParams({ cat })
    window.setTimeout(() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }), 60)
  }

  return (
    <section id="categories" ref={ref} className="px-4 py-16 md:px-8 md:py-20" aria-labelledby="cat-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Nos rayons</p>
            <h2 id="cat-heading" className="font-display text-3xl font-bold text-ink md:text-5xl">Explorez par catégorie</h2>
          </div>
          <p className="max-w-sm text-sm text-muted">Tout le nécessaire, rangé par usage — cliquez pour filtrer la boutique.</p>
        </div>

        <div data-reveal-stagger className="mobile-hrow grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat) => {
            const img = cover(cat)
            return (
              <button key={cat} type="button" data-reveal-item onClick={() => pick(cat)} data-cursor="hover" className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-white text-left transition-transform duration-300 hover:-translate-y-1">
                <div className="card-media aspect-[5/4] overflow-hidden bg-white">
                  {img ? (
                    <img src={img} alt="" loading="lazy" className="h-full w-full object-cover object-center" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-leaf-soft/40 font-display text-4xl font-bold text-leaf/30">{cat.charAt(0)}</div>
                  )}
                </div>
                <div className="flex items-center justify-between gap-2 bg-leaf px-4 py-3 text-white transition-colors group-hover:bg-leaf-deep">
                  <div>
                    <p className="text-sm font-semibold leading-tight">{cat}</p>
                    <p className="text-[11px] text-white/70">+ de {count(cat)} produits</p>
                  </div>
                  <ArrowUpRight size={18} className="shrink-0 text-sand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
