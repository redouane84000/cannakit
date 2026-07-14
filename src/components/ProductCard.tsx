import { useRef, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plus, SlidersHorizontal } from 'lucide-react'
import type { Product } from '../data/products'
import { useCart } from '../context/CartContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useIsTouch } from '../hooks/useIsTouch'
import { formatPrice } from '../utils/format'

export function ProductCard({ product, shopGrid = false }: { product: Product; shopGrid?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const { addToCart } = useCart()
  const navigate = useNavigate()
  const reduced = useReducedMotion()
  const isTouch = useIsTouch()
  const hasVariants = (product.variantAxes?.length ?? 0) > 0
  const to = `/produit/${product.slug}`

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || isTouch || !innerRef.current || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    innerRef.current.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`
  }, [reduced, isTouch])
  const onLeave = useCallback(() => {
    if (innerRef.current) innerRef.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0)'
  }, [])

  const handleAction = () => {
    if (hasVariants) navigate(to)
    else addToCart(product, product.variants[0])
  }

  return (
    <article
      ref={cardRef}
      data-reveal-item
      className={`group h-full min-w-0 ${shopGrid ? 'shop-card' : ''}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div ref={innerRef} className="tilt-inner flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-white">
        <Link to={to} className="card-media relative block aspect-square w-full shrink-0 overflow-hidden bg-white" aria-label={`Voir ${product.name}`} data-cursor="hover">
          {product.image ? (
            <img src={product.image} alt={product.name} loading="lazy" className="card-img h-full w-full object-cover object-center" />
          ) : (
            <span className="flex h-full w-full items-center justify-center bg-leaf-soft/40 font-display text-4xl font-bold text-leaf/30">{product.name.charAt(0)}</span>
          )}
          {hasVariants && (
            <span className="card-options absolute right-3 top-3 rounded-full bg-sand px-2.5 py-1 text-[10px] font-semibold text-ink">Options</span>
          )}
        </Link>

        <div className="card-body flex min-h-0 flex-1 flex-col p-4">
          <span className="card-category mb-2 inline-flex w-fit rounded-full bg-leaf-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-leaf">{product.category}</span>
          <Link to={to} className="card-title mb-3 line-clamp-2 min-h-[2.6rem] text-[15px] font-semibold leading-snug text-ink hover:text-leaf-deep" data-cursor="hover">{product.name}</Link>

          <div className="card-footer mt-auto flex items-center justify-between gap-2">
            <span className="card-price text-lg font-bold text-forest">
              {hasVariants && <span className="mr-1 text-[11px] font-normal text-muted">dès</span>}
              {formatPrice(product.price)}
            </span>
            <button type="button" onClick={handleAction} className="card-action flex shrink-0 items-center gap-1.5 rounded-full bg-leaf px-3.5 py-2 text-white transition-colors hover:bg-leaf-deep" aria-label={hasVariants ? `Choisir les options de ${product.name}` : `Ajouter ${product.name} au panier`} data-cursor="hover">
              {hasVariants ? <SlidersHorizontal size={15} /> : <Plus size={15} />}
              <span className="text-xs font-semibold">{hasVariants ? 'Choisir' : 'Ajouter'}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
