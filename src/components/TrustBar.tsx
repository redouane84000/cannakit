import { Truck, ShieldCheck, Package, Headset } from 'lucide-react'

const items = [
  { icon: Truck, title: 'Livraison 24/48h', desc: 'Expédition rapide' },
  { icon: ShieldCheck, title: 'Paiement sécurisé', desc: 'Transactions protégées' },
  { icon: Package, title: 'Colis soigné', desc: 'Emballage discret' },
  { icon: Headset, title: 'Support réactif', desc: 'Une question ? On répond' },
]

export function TrustBar() {
  return (
    <section className="px-4 md:px-8" aria-label="Nos engagements">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 rounded-[22px] border border-line bg-white p-4 md:grid-cols-4 md:gap-6 md:p-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf-soft text-leaf">
              <Icon size={20} strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{title}</p>
              <p className="text-xs text-muted">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
