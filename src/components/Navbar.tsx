import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { categories } from '../data/products'
import { Logo } from './Logo'

const links = [
  { label: 'Boutique', target: 'shop' },
  { label: 'Catégories', target: 'categories' },
  { label: 'À propos', target: 'about' },
]

export function Navbar() {
  const { itemCount, toggleCart } = useCart()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollSoon = (id: string, delay: number) => {
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), delay)
  }
  const goSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      scrollSoon(id, 450)
    } else {
      scrollSoon(id, 0)
    }
  }
  const goCategory = (cat: string) => {
    navigate('/?cat=' + encodeURIComponent(cat))
    scrollSoon('shop', location.pathname !== '/' ? 450 : 50)
  }
  const goSearch = () => {
    goSection('shop')
    window.setTimeout(() => document.getElementById('shop-search')?.focus(), 550)
  }

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-leaf text-white">
        <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-8" aria-label="Navigation principale">
          <button type="button" onClick={() => navigate('/')} data-cursor="hover" aria-label="CannaKit, accueil">
            <Logo onDark />
          </button>

          <button
            type="button"
            onClick={goSearch}
            className="ml-2 hidden flex-1 items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-left text-sm text-muted transition-colors hover:bg-white md:flex"
            data-cursor="hover"
          >
            <Search size={16} className="text-leaf" /> Rechercher un produit…
          </button>

          <ul className="ml-auto hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <li key={l.target}>
                <button type="button" onClick={() => goSection(l.target)} className="text-sm font-medium text-white/85 transition-colors hover:text-sand" data-cursor="hover">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2 md:ml-2">
            <button type="button" onClick={goSearch} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden" aria-label="Rechercher" data-cursor="hover">
              <Search size={18} />
            </button>
            <button type="button" onClick={() => toggleCart(true)} className="relative flex h-10 items-center gap-2 rounded-full bg-white/10 px-3 text-white transition-colors hover:bg-white/20" aria-label={`Ouvrir le panier, ${itemCount} article${itemCount !== 1 ? 's' : ''}`} data-cursor="hover">
              <ShoppingBag size={18} />
              <span className="hidden text-sm font-medium sm:inline">Panier</span>
              {itemCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-sand px-1 text-[10px] font-bold text-ink">{itemCount}</span>
              )}
            </button>
            <button type="button" onClick={() => setOpen((v) => !v)} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white md:hidden" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} data-cursor="hover">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        <div className="border-t border-white/10 bg-leaf-deep">
          <div className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2 md:px-8">
            {categories.map((c) => (
              <button key={c} type="button" onClick={() => goCategory(c)} className="shrink-0 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/85 transition-colors hover:bg-sand hover:text-ink" data-cursor="hover">
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {open && (
        <div className="border-b border-line bg-paper p-3 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.target}>
                <button type="button" onClick={() => { setOpen(false); goSection(l.target) }} className="w-full rounded-[12px] px-4 py-3 text-left text-sm text-ink transition-colors hover:bg-leaf-soft">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
