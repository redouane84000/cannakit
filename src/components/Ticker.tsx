const items = [
  'Livraison 24/48h',
  'Colis soigné & discret',
  'Paiement sécurisé',
  'Pros & particuliers',
  'Nouveautés chaque mois',
]

export function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="relative z-50 overflow-hidden bg-sand py-1.5 text-ink" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="mx-5 flex shrink-0 items-center gap-4 text-[11px] font-medium uppercase tracking-[0.15em]">
            {item}
            <span className="inline-block h-1 w-1 rounded-full bg-leaf" />
          </span>
        ))}
      </div>
    </div>
  )
}
