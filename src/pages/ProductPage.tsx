import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRight, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { motion } from 'motion/react'
import { products, type Product, type Variant } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'
import { ProductCard } from '../components/ProductCard'

const AXIS_LABELS: Record<string, string> = {
  Size: 'Taille',
  Color: 'Couleur',
  Couleurs: 'Couleur',
  Couleur: 'Couleur',
  Volume: 'Format',
  Dimension: 'Dimension',
}
const prettyAxis = (a: string) => AXIS_LABELS[a] ?? a

function axisValues(product: Product, axis: string): string[] {
  const seen: string[] = []
  for (const v of product.variants) {
    const o = v.options.find((x) => x.axis === axis)
    if (o && !seen.includes(o.value)) seen.push(o.value)
  }
  return seen
}

function findVariant(product: Product, selected: Record<string, string>): Variant | undefined {
  if (product.variantAxes.length === 0) return product.variants[0]
  return product.variants.find((v) =>
    product.variantAxes.every((ax) => v.options.find((o) => o.axis === ax)?.value === selected[ax]),
  )
}

export function ProductPage() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addToCart } = useCart()

  const [selected, setSelected] = useState<Record<string, string>>({})
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    setQty(1)
    setActiveImg(0)
    if (product) {
      const init: Record<string, string> = {}
      for (const o of product.variants[0].options) init[o.axis] = o.value
      setSelected(init)
    }
  }, [slug]) // eslint-disable-line react-hooks/exhaustive-deps

  const current = useMemo(() => (product ? findVariant(product, selected) : undefined), [product, selected])

  if (!product) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">Produit introuvable</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-leaf px-6 py-3 text-white" data-cursor="hover">
          <ArrowLeft size={16} /> Retour à la boutique
        </Link>
      </main>
    )
  }

  const gallery = product.gallery.length ? product.gallery : []
  const price = current ? current.price : product.price
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4)

  return (
    <main className="has-buybar px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted" aria-label="Fil d'ariane">
          <Link to="/" className="hover:text-leaf-deep" data-cursor="hover">Accueil</Link>
          <ChevronRight size={13} />
          <Link to={`/?cat=${encodeURIComponent(product.category)}`} className="hover:text-leaf-deep" data-cursor="hover">{product.category}</Link>
          <ChevronRight size={13} />
          <span className="text-ink">{product.name}</span>
        </nav>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Gallery */}
          <div className="flex flex-col gap-3">
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[24px] border border-line bg-white">
              {gallery[activeImg] ? (
                <img src={gallery[activeImg]} alt={product.name} className="h-full w-full object-contain p-6" />
              ) : (
                <span className="font-display text-7xl font-bold text-leaf/30">{product.name.charAt(0)}</span>
              )}
            </div>
            {gallery.length > 1 && (
              <div className="no-scrollbar flex gap-2 overflow-x-auto">
                {gallery.map((g, i) => (
                  <button key={g} type="button" onClick={() => setActiveImg(i)} className={`h-16 w-16 shrink-0 overflow-hidden rounded-[14px] border bg-white transition-colors ${i === activeImg ? 'border-leaf' : 'border-line'}`} aria-label={`Image ${i + 1}`} data-cursor="hover">
                    <img src={g} alt="" className="h-full w-full object-contain p-1.5" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <span className="mb-3 inline-flex rounded-full bg-leaf-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-leaf">{product.category}</span>
            <h1 className="font-display text-3xl font-bold leading-tight text-ink md:text-4xl">{product.name}</h1>
            <p className="mt-3 font-display text-3xl font-bold text-forest">{formatPrice(price)}</p>

            {product.variantAxes.map((axis) => (
              <div key={axis} className="mt-6">
                <p className="mb-2 text-[12px] font-semibold uppercase tracking-wide text-muted">
                  {prettyAxis(axis)}
                  {selected[axis] && <span className="ml-2 text-ink">· {selected[axis]}</span>}
                </p>
                <div className="flex flex-wrap gap-2">
                  {axisValues(product, axis).map((val) => {
                    const isSel = selected[axis] === val
                    return (
                      <button key={val} type="button" onClick={() => setSelected((s) => ({ ...s, [axis]: val }))} className={`rounded-full border px-4 py-2 text-sm transition-colors ${isSel ? 'border-leaf bg-leaf text-white' : 'border-line bg-white text-ink hover:border-leaf/50'}`} data-cursor="hover">
                        {val}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 rounded-full border border-line bg-white p-1">
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="flex h-10 w-10 items-center justify-center rounded-full text-muted hover:text-ink" aria-label="Diminuer" data-cursor="hover"><Minus size={16} /></button>
                <span className="w-8 text-center text-sm font-semibold tabular-nums">{qty}</span>
                <button type="button" onClick={() => setQty((q) => q + 1)} className="flex h-10 w-10 items-center justify-center rounded-full text-muted hover:text-ink" aria-label="Augmenter" data-cursor="hover"><Plus size={16} /></button>
              </div>

              <button
                type="button"
                disabled={!current}
                onClick={() => current && addToCart(product, current, qty)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-leaf px-6 py-4 font-semibold text-white transition-colors hover:bg-leaf-deep disabled:cursor-not-allowed disabled:bg-muted"
                data-cursor="hover"
              >
                <ShoppingBag size={18} /> {current ? `Ajouter au panier — ${formatPrice(price * qty)}` : 'Combinaison indisponible'}
              </button>
            </div>

            {product.description && (
              <div className="mt-8 border-t border-line pt-6">
                <h2 className="mb-3 font-display text-lg font-bold text-ink">Description</h2>
                <p className="whitespace-pre-line text-sm leading-relaxed text-muted">{product.description}</p>
              </div>
            )}
          </div>
        </motion.div>

        {related.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="mb-6 font-display text-2xl font-bold text-ink md:text-3xl">Articles similaires</h2>
            <div className="mobile-hrow grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((p) => (<ProductCard key={p.id} product={p} />))}
            </div>
          </div>
        )}
      </div>

      {/* Barre d'achat fixe (mobile uniquement) */}
      <div className="buybar">
        <div className="min-w-0">
          <p className="truncate text-[11px] text-muted">{product.name}</p>
          <p className="font-display text-lg font-bold text-forest">{formatPrice(price)}</p>
        </div>
        <button
          type="button"
          disabled={!current}
          onClick={() => current && addToCart(product, current, qty)}
          className="add rounded-full bg-leaf px-5 font-semibold text-white transition-colors hover:bg-leaf-deep disabled:bg-muted"
        >
          {current ? 'Ajouter au panier' : 'Indisponible'}
        </button>
      </div>
    </main>
  )
}
