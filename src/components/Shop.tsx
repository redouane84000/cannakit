import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { motion } from 'motion/react'
import { products as allProducts, categories } from '../data/products'
import { ProductCard } from './ProductCard'

type SortKey = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc'

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'name-asc', label: 'Nom A-Z' },
  { value: 'name-desc', label: 'Nom Z-A' },
  { value: 'price-asc', label: 'Prix croissant' },
  { value: 'price-desc', label: 'Prix décroissant' },
]

const PER_PAGE = 12

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('cat') || 'all'
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<SortKey>('name-asc')
  const [page, setPage] = useState(1)

  const setCategory = (c: string) => {
    if (c === 'all') setSearchParams({})
    else setSearchParams({ cat: c })
  }

  const filtered = useMemo(() => {
    let list = allProducts.slice()
    if (category !== 'all') list = list.filter((p) => p.category === category)
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    }
    list.sort((a, b) => {
      switch (sort) {
        case 'name-desc': return b.name.localeCompare(a.name)
        case 'price-asc': return a.price - b.price
        case 'price-desc': return b.price - a.price
        default: return a.name.localeCompare(b.name)
      }
    })
    return list
  }, [category, query, sort])

  useEffect(() => setPage(1), [category, query, sort])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const pageItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <section id="shop" className="px-4 py-16 md:px-8 md:py-24" aria-labelledby="shop-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-leaf">Boutique</p>
          <h2 id="shop-heading" className="font-display text-3xl font-bold text-ink md:text-5xl">Tous les produits</h2>
        </div>

        <div className="sticky top-[132px] z-30 mb-8 flex flex-col gap-3 rounded-[18px] border border-line bg-paper/85 p-3 backdrop-blur-md md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input id="shop-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher un produit…" className="w-full rounded-full border border-line bg-white py-3 pl-10 pr-9 text-sm text-ink placeholder:text-muted/60 focus:border-leaf" />
            {query && (
              <button type="button" onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink" aria-label="Effacer" data-cursor="hover"><X size={15} /></button>
            )}
          </div>
          <div className="flex gap-3">
            <label className="relative flex items-center">
              <span className="sr-only">Catégorie</span>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="appearance-none rounded-full border border-line bg-white py-3 pl-4 pr-9 text-sm text-ink focus:border-leaf" data-cursor="hover">
                <option value="all">Toutes catégories</option>
                {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
              </select>
              <SlidersHorizontal size={15} className="pointer-events-none absolute right-3 text-muted" />
            </label>
            <label className="relative flex items-center">
              <span className="sr-only">Trier</span>
              <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)} className="appearance-none rounded-full border border-line bg-white py-3 pl-4 pr-9 text-sm text-ink focus:border-leaf" data-cursor="hover">
                {sortOptions.map((o) => (<option key={o.value} value={o.value}>{o.label}</option>))}
              </select>
            </label>
          </div>
        </div>

        <p className="mb-6 text-xs text-muted">{filtered.length} produit{filtered.length !== 1 ? 's' : ''}{category !== 'all' && ` · ${category}`}</p>

        {pageItems.length === 0 ? (
          <p className="py-16 text-center text-muted">Aucun produit ne correspond à votre recherche.</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {pageItems.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3), ease: 'easeOut' }}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>
        )}

        {pageCount > 1 && (
          <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Pagination">
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <button key={n} type="button" onClick={() => { setPage(n); document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }) }} aria-current={n === page ? 'page' : undefined} className={`h-10 min-w-10 rounded-full px-3 text-sm transition-colors ${n === page ? 'bg-leaf text-white' : 'border border-line bg-white text-ink hover:border-leaf/50'}`} data-cursor="hover">{n}</button>
            ))}
          </nav>
        )}
      </div>
    </section>
  )
}
