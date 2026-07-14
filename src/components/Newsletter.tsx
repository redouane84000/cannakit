import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Newsletter() {
  const ref = useScrollReveal<HTMLElement>({ y: 50 })
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSent(true)
  }

  return (
    <section ref={ref} className="px-4 py-14 md:px-8 md:py-20" aria-labelledby="newsletter-heading">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-line bg-mint px-6 py-12 text-center md:px-12">
        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-leaf text-white">
          <Mail size={22} />
        </span>
        <h2 id="newsletter-heading" className="font-display text-2xl font-bold text-ink md:text-4xl">
          Restez informé
        </h2>
        <p className="mx-auto mb-8 mt-3 max-w-md text-muted">
          Nouveautés, réassorts et offres — directement dans votre boîte mail.
        </p>

        {sent ? (
          <p className="font-semibold text-leaf" role="status">✓ Merci ! Vous êtes bien inscrit.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="nl-email" className="sr-only">Adresse email</label>
            <input
              id="nl-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="flex-1 rounded-full border border-line bg-white px-5 py-3.5 text-sm text-ink placeholder:text-muted/60 focus:border-leaf"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-leaf-deep"
              data-cursor="hover"
            >
              S&apos;inscrire <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
