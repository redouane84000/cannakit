import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, Phone, MapPin, Building2 } from 'lucide-react'
import { company } from '../data/legal'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <main className="px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted hover:text-leaf-deep" data-cursor="hover"><ArrowLeft size={15} /> Retour à la boutique</Link>
        <h1 className="font-display text-3xl font-bold text-ink md:text-5xl">Contactez-nous</h1>
        <p className="mt-3 max-w-xl text-muted">Une question sur un produit, une commande ou une demande professionnelle ? Écrivez‑nous, on répond vite.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <a href={`mailto:${company.email}`} className="flex items-center gap-4 rounded-[18px] border border-line bg-white p-5 transition-colors hover:border-leaf/50" data-cursor="hover">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-leaf-soft text-leaf"><Mail size={20} /></span>
              <span><span className="block text-xs uppercase tracking-wide text-muted">Email</span><span className="font-semibold text-ink">{company.email}</span></span>
            </a>
            <a href={`tel:${company.phoneIntl.replace(/\s/g, '')}`} className="flex items-center gap-4 rounded-[18px] border border-line bg-white p-5 transition-colors hover:border-leaf/50" data-cursor="hover">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-leaf-soft text-leaf"><Phone size={20} /></span>
              <span><span className="block text-xs uppercase tracking-wide text-muted">Téléphone</span><span className="font-semibold text-ink">{company.phoneIntl}</span></span>
            </a>
            <div className="flex items-center gap-4 rounded-[18px] border border-line bg-white p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-leaf-soft text-leaf"><MapPin size={20} /></span>
              <span><span className="block text-xs uppercase tracking-wide text-muted">Adresse</span><span className="font-semibold text-ink">{company.address}</span></span>
            </div>
            <div className="flex items-start gap-4 rounded-[18px] border border-line bg-white p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-leaf-soft text-leaf"><Building2 size={20} /></span>
              <span className="text-sm text-muted">
                <span className="block font-semibold text-ink">{company.legalName} — {company.brand}</span>
                {company.form} · Capital {company.capital}<br />
                SIREN {company.siren} · RCS {company.rcs}<br />
                TVA {company.tva}
              </span>
            </div>
          </div>

          <div className="rounded-[22px] border border-line bg-mint p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-ink">Écrivez‑nous</h2>
            {sent ? (
              <p className="mt-6 font-semibold text-leaf">✓ Merci, votre message a bien été envoyé.</p>
            ) : (
              <form className="mt-5 space-y-3" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <input required placeholder="Votre nom" className="w-full rounded-[14px] border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-leaf" />
                <input required type="email" placeholder="Votre email" className="w-full rounded-[14px] border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-leaf" />
                <textarea required rows={5} placeholder="Votre message" className="w-full rounded-[14px] border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-leaf" />
                <button type="submit" className="w-full rounded-full bg-leaf py-3.5 text-sm font-semibold text-white transition-colors hover:bg-leaf-deep" data-cursor="hover">Envoyer</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
