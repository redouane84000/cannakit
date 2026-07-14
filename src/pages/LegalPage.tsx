import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { legalDocs } from '../data/legal'

export function LegalPage({ docKey }: { docKey: string }) {
  const doc = legalDocs[docKey]
  if (!doc) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">Page introuvable</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-leaf px-6 py-3 text-white" data-cursor="hover"><ArrowLeft size={16} /> Accueil</Link>
      </main>
    )
  }

  return (
    <main className="px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted hover:text-leaf-deep" data-cursor="hover"><ArrowLeft size={15} /> Retour à la boutique</Link>
        <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">{doc.title}</h1>
        {doc.updated && <p className="mt-2 text-sm text-muted">Dernière mise à jour : {doc.updated}</p>}

        <div className="mt-8 space-y-7">
          {doc.sections.map((sec, i) => (
            <section key={i}>
              {sec.heading && <h2 className="mb-2 font-display text-lg font-bold text-forest">{sec.heading}</h2>}
              <div className="space-y-3">
                {sec.paragraphs.map((p, j) => (
                  <p key={j} className="text-sm leading-relaxed text-muted">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
