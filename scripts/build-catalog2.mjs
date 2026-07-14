// Fusionne descriptions + variantes/prix (scrapés) avec les images locales,
// et régénère src/data/products.ts (modèle avec variantes prix par option).
// node scripts/build-catalog2.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OLD = path.join(ROOT, 'src', 'data', 'products.ts')
const OUT = path.join(ROOT, 'src', 'data', 'products.ts')

const LOGS = 'C:/Users/redou/.cursor/browser-logs'
const DESC_FILE = path.join(LOGS, 'cdp-response-Runtime.evaluate-2026-07-14T18-40-22-333Z.json')
const VAR_B1_FILE = path.join(LOGS, 'cdp-response-Runtime.evaluate-2026-07-14T18-17-47-533Z.json')

// Batch 2 variants (inline)
const VAR_B2 = [{"s":"rolls-ocb","base":2,"variants":[{"n":"","p":2,"o":[]}]},{"s":"lot-feuilles-briquet","base":30,"variants":[{"n":"","p":30,"o":[]}]},{"s":"broyeur-electrique","base":10,"variants":[{"n":"","p":10,"o":[]}]},{"s":"grinder-beuz","base":3.5,"variants":[{"n":"","p":3.5,"o":[]}]},{"s":"grinder-metal-avec-reservoir","base":10,"variants":[{"n":"Noir","p":10,"o":[{"a":"Couleurs","v":"Noir"}]},{"n":"Gold","p":10,"o":[{"a":"Couleurs","v":"Gold"}]},{"n":"Silver","p":10,"o":[{"a":"Couleurs","v":"Silver"}]},{"n":"Rouge","p":10,"o":[{"a":"Couleurs","v":"Rouge"}]},{"n":"Bleu","p":10,"o":[{"a":"Couleurs","v":"Bleu"}]},{"n":"Vert","p":10,"o":[{"a":"Couleurs","v":"Vert"}]},{"n":"Rose","p":10,"o":[{"a":"Couleurs","v":"Rose"}]}]},{"s":"grinder-poker","base":7.5,"variants":[{"n":"Noir","p":7.5,"o":[{"a":"Couleurs","v":"Noir"}]},{"n":"Rouge","p":7.5,"o":[{"a":"Couleurs","v":"Rouge"}]},{"n":"Vert","p":7.5,"o":[{"a":"Couleurs","v":"Vert"}]}]},{"s":"maxi-grinder","base":2,"variants":[{"n":"1 unité","p":2,"o":[{"a":"Option","v":"1 unité"}]},{"n":"12 unités","p":24,"o":[{"a":"Option","v":"12 unités"}]}]},{"s":"mini-grinder","base":28,"variants":[{"n":"48 unités","p":28,"o":[{"a":"Option","v":"48 unités"}]},{"n":"1 unité","p":1,"o":[{"a":"Option","v":"1 unité"}]}]},{"s":"briquet-clipper","base":2,"variants":[{"n":"","p":2,"o":[]}]},{"s":"briquet-simple","base":0.5,"variants":[{"n":"","p":0.5,"o":[]}]},{"s":"boite-briquets-bic-bx7","base":50,"variants":[{"n":"","p":50,"o":[]}]},{"s":"boite-briquets-clipper","base":65,"variants":[{"n":"","p":65,"o":[]}]},{"s":"boite-briquets-cricket","base":39,"variants":[{"n":"","p":39,"o":[]}]},{"s":"boite-briquet-simple","base":10,"variants":[{"n":"","p":10,"o":[]}]},{"s":"vaporisateur-smono-3","base":89.9,"variants":[{"n":"","p":89.9,"o":[]}]},{"s":"vaporisateur-smono-5","base":119.9,"variants":[{"n":"","p":119.9,"o":[]}]},{"s":"vaporisateur-smono-basic","base":89.9,"variants":[{"n":"","p":89.9,"o":[]}]},{"s":"agrafes","base":2,"variants":[{"n":"N°10","p":2,"o":[{"a":"Type d'agrafes","v":"N°10"}]},{"n":"24/6","p":3,"o":[{"a":"Type d'agrafes","v":"24/6"}]}]},{"s":"agrafeuse-moyenne","base":7.5,"variants":[{"n":"","p":7.5,"o":[]}]},{"s":"grande-agrafeuse","base":7.5,"variants":[{"n":"","p":7.5,"o":[]}]},{"s":"mini-agrafeuse-agrafes","base":2.5,"variants":[{"n":"","p":2.5,"o":[]}]},{"s":"marqueur-bic","base":1.5,"variants":[{"n":"","p":1.5,"o":[]}]},{"s":"elastique-25-32-38mm","base":1.5,"variants":[{"n":"25mm","p":1.5,"o":[{"a":"Dimension","v":"25mm"}]},{"n":"38mm","p":2.5,"o":[{"a":"Dimension","v":"38mm"}]},{"n":"32mm","p":2,"o":[{"a":"Dimension","v":"32mm"}]}]},{"s":"papier-sulfurise","base":0.5,"variants":[{"n":"","p":0.5,"o":[]}]},{"s":"piles-aaa","base":2,"variants":[{"n":"","p":2,"o":[]}]},{"s":"balance-de-poche","base":10,"variants":[{"n":"","p":10,"o":[]}]},{"s":"balance-professionnelle","base":15,"variants":[{"n":"","p":15,"o":[]}]},{"s":"balance-superieure","base":15,"variants":[{"n":"","p":15,"o":[]}]},{"s":"etiquettes-de-securite-holographiques","base":1.5,"variants":[{"n":"Feuille de 45","p":1.5,"o":[{"a":"Quantité","v":"Feuille de 45"}]},{"n":"1000","p":30,"o":[{"a":"Quantité","v":"1000"}]}]},{"s":"gants-jetables","base":10,"variants":[{"n":"M","p":10,"o":[{"a":"Taille","v":"M"}]},{"n":"L","p":10,"o":[{"a":"Taille","v":"L"}]}]},{"s":"spray-kleaner","base":21,"variants":[{"n":"","p":21,"o":[]}]},{"s":"test-salivaire","base":10,"variants":[{"n":"","p":10,"o":[]}]},{"s":"substitut-de-tabac-apaisant","base":14.9,"variants":[{"n":"","p":14.9,"o":[]}]}]

function readCdp(file) {
  const j = JSON.parse(readFileSync(file, 'utf8'))
  return JSON.parse(j.result.value)
}

function parseOldProducts() {
  const raw = readFileSync(OLD, 'utf8')
  const s = raw.indexOf('export const products')
  const eq = raw.indexOf('=', s)
  const arrStart = raw.indexOf('[', eq)
  const cm = raw.indexOf('export const categories')
  const arrEnd = raw.lastIndexOf(']', cm)
  return JSON.parse(raw.slice(arrStart, arrEnd + 1))
}

const descArr = readCdp(DESC_FILE)
const varB1 = readCdp(VAR_B1_FILE)
const oldProducts = parseOldProducts()

const I18N = 'Nous avons prérempli'
function pickDesc(e) {
  let d = (e.d || '').trim()
  const f = (e.f || '').trim()
  if (!d || d.startsWith(I18N)) d = f
  if (d.startsWith(I18N)) d = ''
  return d
}
const descMap = new Map(descArr.map((e) => [e.s, pickDesc(e)]))
const varMap = new Map()
for (const v of [...varB1, ...VAR_B2]) varMap.set(v.s, v)

const CATEGORY_ORDER = [
  'Capsules & Fusées', 'Tubes & Pop-top', 'Sachets ZIP', 'Produits en verres',
  'Feuilles & Autres', 'Grinders', 'Briquets', 'Vaporisateurs', 'Fournitures', 'Hygiène',
]

function cleanDesc(d) {
  if (!d) return ''
  for (const marker of ['","formattedDescription', '","image', '","seoTitle', 'formattedDescription']) {
    const i = d.indexOf(marker)
    if (i > -1) d = d.slice(0, i)
  }
  return d.replace(/\s+\n/g, '\n').trim()
}

const out = oldProducts.map((p) => {
  const vraw = varMap.get(p.slug)
  const desc = cleanDesc(descMap.get(p.slug) || '')
  let variants = []
  if (vraw && vraw.variants && vraw.variants.length) {
    variants = vraw.variants.map((v) => ({
      label: v.n && v.n.length ? v.n : p.name,
      price: v.p,
      options: (v.o || []).map((o) => ({ axis: o.a, value: o.v })),
    }))
  } else {
    variants = [{ label: p.name, price: p.price ?? 0, options: [] }]
  }

  // axes order from first variant having options
  let variantAxes = []
  const withOpts = variants.find((v) => v.options.length)
  if (withOpts) variantAxes = withOpts.options.map((o) => o.axis)

  const prices = variants.map((v) => v.price)
  const minPrice = Math.min(...prices)

  return {
    id: p.slug,
    slug: p.slug,
    name: p.name,
    category: p.category,
    description: desc,
    image: p.image,
    gallery: p.gallery,
    price: minPrice,
    variantAxes,
    variants,
  }
})

const categories = CATEGORY_ORDER.filter((c) => out.some((p) => p.category === c))

const withDesc = out.filter((p) => p.description).length
const withVar = out.filter((p) => p.variantAxes.length).length

const ts = `// GÉNÉRÉ par scripts/build-catalog2.mjs — descriptions & prix repris de cannakit.fr.
export interface VariantOption {
  axis: string
  value: string
}

export interface Variant {
  label: string
  price: number
  options: VariantOption[]
}

export interface Product {
  id: string
  slug: string
  name: string
  category: string
  description: string
  image: string | null
  gallery: string[]
  price: number
  variantAxes: string[]
  variants: Variant[]
}

export const products: Product[] = ${JSON.stringify(out, null, 2)}

export const categories: string[] = ${JSON.stringify(categories, null, 2)}
`

writeFileSync(OUT, ts, 'utf8')
console.log(`Produits: ${out.length} | avec description: ${withDesc} | avec variantes: ${withVar}`)
console.log('Exemple bocaux:', JSON.stringify(out.find((p) => p.slug === 'bocaux-en-verre-10-a-160ml').variants.slice(0, 3)))
console.log('Desc capsules-flip:', (descMap.get('capsules-flip') || '(vide)').slice(0, 120))
