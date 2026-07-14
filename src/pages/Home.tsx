import { Hero } from '../components/Hero'
import { CategoryGrid } from '../components/CategoryGrid'
import { Shop } from '../components/Shop'
import { EditorialBanner } from '../components/EditorialBanner'
import { Newsletter } from '../components/Newsletter'

export function Home() {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <Shop />
      <EditorialBanner />
      <Newsletter />
    </main>
  )
}
