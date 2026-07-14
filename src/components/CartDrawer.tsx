import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'

export function CartDrawer() {
  const { state, toggleCart, removeItem, updateQty, clearCart, total, itemCount } = useCart()

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm" onClick={() => toggleCart(false)} aria-hidden="true" />
          <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 300 }} className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-line bg-paper" role="dialog" aria-modal="true" aria-label="Panier">
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <div>
                <h2 className="font-display text-xl font-bold text-ink">Votre panier</h2>
                <p className="text-xs text-muted">{itemCount} article{itemCount !== 1 ? 's' : ''}</p>
              </div>
              <button type="button" onClick={() => toggleCart(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-ink" aria-label="Fermer" data-cursor="hover"><X size={18} /></button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-leaf-soft text-leaf"><ShoppingBag size={22} /></span>
                  <p className="text-sm text-muted">Votre panier est vide.</p>
                </div>
              ) : (
                <ul className="space-y-3">
                  {state.items.map((item) => (
                    <li key={item.key} className="flex gap-3 rounded-[16px] border border-line bg-white p-3">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-leaf-soft/40">
                        {item.product.image ? (
                          <img src={item.product.image} alt="" className="h-full w-full object-cover" />
                        ) : (
                          <span className="font-display text-xl font-bold text-leaf/40">{item.product.name.charAt(0)}</span>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-semibold leading-snug text-ink">{item.product.name}</p>
                            {item.variant.options.length > 0 && (
                              <p className="mt-0.5 text-[11px] text-muted">{item.variant.options.map((o) => o.value).join(' · ')}</p>
                            )}
                            <p className="mt-0.5 text-xs font-semibold text-forest">{formatPrice(item.variant.price)}</p>
                          </div>
                          <button type="button" onClick={() => removeItem(item.key)} className="text-muted transition-colors hover:text-leaf-deep" aria-label={`Retirer ${item.product.name}`} data-cursor="hover"><Trash2 size={14} /></button>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <button type="button" onClick={() => updateQty(item.key, item.quantity - 1)} className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-muted hover:text-ink" aria-label="Diminuer" data-cursor="hover"><Minus size={12} /></button>
                          <span className="w-6 text-center text-sm tabular-nums">{item.quantity}</span>
                          <button type="button" onClick={() => updateQty(item.key, item.quantity + 1)} className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-muted hover:text-ink" aria-label="Augmenter" data-cursor="hover"><Plus size={12} /></button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {state.items.length > 0 && (
              <div className="border-t border-line px-6 py-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-muted">Total</span>
                  <span className="font-display text-xl font-bold text-ink">{formatPrice(total)}</span>
                </div>
                <button type="button" className="mb-2 w-full rounded-full bg-leaf py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-leaf-deep" data-cursor="hover">Passer commande</button>
                <button type="button" onClick={clearCart} className="w-full py-2 text-center text-xs text-muted transition-colors hover:text-leaf-deep" data-cursor="hover">Vider le panier</button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
