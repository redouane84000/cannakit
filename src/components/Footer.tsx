import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { company } from '../data/legal'

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: 'Boutique',
    links: [
      { label: 'Tous les produits', to: '/' },
      { label: 'Capsules & Fusées', to: '/?cat=' + encodeURIComponent('Capsules & Fusées') },
      { label: 'Sachets ZIP', to: '/?cat=' + encodeURIComponent('Sachets ZIP') },
      { label: 'Vaporisateurs', to: '/?cat=Vaporisateurs' },
    ],
  },
  {
    title: 'Infos',
    links: [
      { label: 'Contact', to: '/contact' },
      { label: 'Livraison', to: '/conditions' },
      { label: 'Retours', to: '/conditions' },
      { label: 'À propos', to: '/' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Conditions générales', to: '/conditions' },
      { label: 'Confidentialité', to: '/confidentialite' },
      { label: 'Politique de cookies', to: '/cookies' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mt-8 bg-leaf px-4 py-16 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-10 md:grid-cols-[1.5fr_2fr]">
          <div>
            <Logo className="mb-4" onDark />
            <p className="max-w-xs text-sm text-white/70">Solutions de conditionnement & accessoires fumeur. Pour les professionnels et les particuliers.</p>
            <div className="mt-4 space-y-1 text-xs text-white/60">
              <p>{company.legalName} — {company.brand}</p>
              <p>{company.address}</p>
              <p>SIREN {company.siren} · TVA {company.tva}</p>
              <p>
                <a href={`tel:${company.phoneIntl.replace(/\s/g, '')}`} className="hover:text-white" data-cursor="hover">{company.phoneIntl}</a>
                {' · '}
                <a href={`mailto:${company.email}`} className="hover:text-white" data-cursor="hover">{company.email}</a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-sand">{col.title}</h3>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-white/75 transition-colors hover:text-white" data-cursor="hover">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 md:flex-row">
          <p className="text-xs text-white/60">Vous devez avoir au moins 18 ans pour commander.</p>
          <a href="#top" className="text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-sand" data-cursor="hover">Retour en haut ↑</a>
        </div>
      </div>
    </footer>
  )
}
