// Télécharge les images produits de la boutique et génère src/data/products.ts
// Usage: node scripts/build-catalog.mjs
import { mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const IMG_DIR = path.join(ROOT, 'public', 'products')
const DATA_FILE = path.join(ROOT, 'src', 'data', 'products.ts')
const BASE = 'https://images.sumup.com/'

// slug, name, price(€), category, variants[{name,options}], images(ids without host)
const RAW = [
  { slug: 'capsules-flip', name: 'Capsules Flip', price: 5.0, category: 'Capsules & Fusées', variants: [{ name: 'Contenance', options: ['1ml', '3ml', '5ml', '8ml', '10ml'] }, { name: 'Couleur', options: ['Transparent', 'Bleu', 'Jaune'] }], images: ['img_6S2FRR6KJ482PVDS7661DPGQJS', 'img_140TA5FZXC9PBA1DC6STNYQJB2', 'img_34QYFZVWQD9JQT7WE6Y23QB7TX', 'img_0QB51TKDG7894T9BJN305MXNWP'] },
  { slug: 'capsules-vissees', name: 'Capsules vissées', price: 8.0, category: 'Capsules & Fusées', variants: [{ name: 'Contenance', options: ['1ml', '3ml', '5ml', '10ml', '15ml', '20ml', '30ml'] }, { name: 'Couleur', options: ['Transparent', 'Bleu', 'Jaune', 'Vert'] }], images: ['img_66FBVXRZ6S9VW8YVJK4DBYVTK4', 'img_0288D922QK8SMS309EQC2AGNXE', 'img_79789KWHGR8Z4VBDC38MWTX273', 'img_2WJV143R2486Q98W4A3YDADDW9'] },
  { slug: 'cone-hermetique', name: 'Cône hermétique', price: 7.5, category: 'Capsules & Fusées', variants: [{ name: 'Couleur', options: ['Transparent', 'Vert', 'Rouge'] }], images: ['img_54CCJHF6ZA997A4BFZ6BXFTMPM', 'img_7V6VX313C88JCTH6ESFY8KVCWZ', 'img_14K3DQ2T4Y9HNR36E8ZVP0GDD2', 'img_3YG061K0VH8F0SS6Z0B7ZD49Y9'] },
  { slug: 'cone-pop', name: 'Cône-Pop', price: 7.5, category: 'Capsules & Fusées', variants: [], images: ['img_4QPE4EDJ6B9AAS6F7RR7C6EC4H'] },
  { slug: 'fusees', name: 'Fusées', price: 2.5, category: 'Capsules & Fusées', variants: [{ name: 'Contenance', options: ['0,5ml', '1ml', '1,5ml'] }, { name: 'Couleur', options: ['Transparent', 'Rose', 'Bleu', 'Rouge', 'Vert'] }], images: ['img_37ESJWTVR39CJBFVEJWG8F4GGT', 'img_7NPSDHACFD9RD8DWAKMWBHBFXH', 'img_2EWXS2CTC59A29R509NCB8DF3N', 'img_30A1HVE1AC8GB9G6B7BSPFMEF1'] },

  { slug: 'pop-top-24-a-120ml', name: 'Pop-Top (24 à 120ml)', price: 10.0, category: 'Tubes & Pop-top', variants: [{ name: 'Contenance', options: ['24ml', '50ml', '80ml', '120ml'] }, { name: 'Couleur', options: ['Transparent', 'Bleu', 'Vert'] }], images: ['img_7NM29GRT0P9SSRKZ8815C026BG', 'img_2G1BJM57JR9CPS8DJAPBHYYJWS', 'img_1XC30NPQ0K9R7RSC8D29K6HJA5', 'img_7W1F3NDCXX9EVS9Z3DW3Y66GN1'] },
  { slug: 'push-down-30ml', name: 'Push-Down (30ml)', price: 10.0, category: 'Tubes & Pop-top', variants: [{ name: 'Couleur', options: ['Gris', 'Bleu'] }], images: ['img_0GGF8D83GZ8NFVZ3XYR3F6GQ7A', 'img_2TNPE682RW8X0818REN1KJVC2N', 'img_1ZR3FCNHQY9Y5V7935QT4HTE96'] },
  { slug: 'tube-pop-90mm', name: 'Tube-Pop (90mm)', price: 7.5, category: 'Tubes & Pop-top', variants: [], images: ['img_1PXP7D4AYQ9A9VQDZXSETJ9P8S'] },
  { slug: 'tubes-a-essais', name: 'Tubes à essais', price: 3.0, category: 'Tubes & Pop-top', variants: [{ name: 'Taille', options: ['Court', 'Long'] }], images: ['img_75QFXBFCRE8EMATRVWAN2NTESZ'] },

  { slug: 'sachets-zip-brillant-metallise', name: 'Sachets ZIP - Brillant métallisé', price: 10.0, category: 'Sachets ZIP', variants: [{ name: 'Couleur', options: ['Rose métallisé', 'Bleu métallisé', 'Vert métallisé', 'Gold métallisé', 'Silver métallisé', 'Noir métallisé'] }, { name: 'Format', options: ['75x65mm', '75x100mm', '85x130mm', '100x150mm'] }], images: ['img_2VDQDD7JWC9SJTSDA4RANT8GWE', 'img_75GWT1153E808BGFDN0TJPB2JR', 'img_3M1JXJM1X38F3AF4M1VWJ3ZYEJ', 'img_2M997E078B8KESQG6HGGPY69T0'] },
  { slug: 'sachets-zip-grands-formats', name: 'Sachets ZIP - Grands formats', price: 14.0, category: 'Sachets ZIP', variants: [{ name: 'Format', options: ['100x150mm', '150x250mm', '200x300mm', '250x350mm', '300x400mm', '350x450mm', '400x600mm'] }, { name: 'Couleur', options: ['Transparent', 'Bleu', 'Vert'] }], images: ['img_4A1H1R3DS48PZTHY4E99T0TKP1'] },
  { slug: 'sachets-zip-x1000', name: 'Sachets ZIP (x1000)', price: 1000.0, category: 'Sachets ZIP', variants: [{ name: 'Couleur', options: ['Transparent', 'Bleu', 'Vert'] }, { name: 'Format', options: ['40x40mm', '40x60mm', '40x75mm', '55x65mm', '60x80mm', '80x45mm', '80x60mm', '100x150mm'] }], images: ['img_5CTH1N2FF7870S0N6E6SDYXQ1D', 'img_67ZK4YWX4Y9M18MCH7BAZD45JT', 'img_6SYP76SM2S8XBAT6EVJY34DAE1', 'img_46VE6N8KFP8CSVA4F6D6DAEDS1'] },
  { slug: 'sachet-zip-petits-formats', name: 'Sachet ZIP - Petits formats', price: 4.5, category: 'Sachets ZIP', variants: [{ name: 'Format', options: ['25x25mm', '30x100mm', '40x40mm', '40x60mm', '40x75mm', '40x90mm', '40x110mm', '55x65mm', '60x80mm', '80x45mm', '80x60mm', '80x120mm', '90x90mm', '100x50mm'] }, { name: 'Couleur', options: ['Transparent', 'Bleu', 'Vert'] }], images: ['img_0W0YH1CKY288HVDBA4GBNG9NB1', 'img_1D0CRV5FVT9TMB02XSDF07HBTX', 'img_78NTREQ7S89W5RHZW0EFTSGH1Q', 'img_182S43W3T89509RYR6ECGAETRE'] },

  { slug: 'bocaux-en-verre-10-a-160ml', name: 'Bocaux en verre (10 à 160ml)', price: 27.0, category: 'Produits en verres', variants: [{ name: 'Contenance', options: ['10ml', '30ml', '40ml', "41ml - Bouchon Alu'", '60ml', '80ml', '120ml', '160ml'] }], images: ['img_0T6BS9A3PG97JTK1WR3QXEQDDY', 'img_73GSMVZSYW9K9V61SYQ63FH3FG', 'img_730DMV5KJK8Y8RA4DWB6J5JFW4', 'img_0V4R0MCDC093N8FTXSYQPKQKWG'] },

  { slug: 'blunt-saveur-chanvre', name: 'Blunt - Saveur chanvre', price: 1.8, category: 'Feuilles & Autres', variants: [], images: ['img_7V5CAAWD8N92TA8FQ2N3VVKHD8'] },
  { slug: 'blunt-saveur-fraise-kiwi', name: 'Blunt - Saveur fraise-kiwi', price: 1.8, category: 'Feuilles & Autres', variants: [], images: ['img_6952286YE091KV5G568BWG2BD6'] },
  { slug: 'blunt-saveur-fruits-des-bois', name: 'Blunt - Saveur fruits des bois', price: 1.8, category: 'Feuilles & Autres', variants: [], images: ['img_2H46GJMGYN8JCTC2K2WW6JTN6F'] },
  { slug: 'blunt-saveur-limonade', name: 'Blunt - Saveur limonade', price: 1.8, category: 'Feuilles & Autres', variants: [], images: ['img_38A1XPBZTQ86096FAW0JVSDT40'] },
  { slug: 'blunt-saveur-raisin', name: 'Blunt - Saveur raisin', price: 1.8, category: 'Feuilles & Autres', variants: [], images: ['img_5FXXZ7FSPN8PMT9EDZT0C74AFD'] },
  { slug: 'blunt-saveur-zer0', name: 'Blunt - Saveur Zer0', price: 1.8, category: 'Feuilles & Autres', variants: [], images: ['img_01CEA91XW58MKS75ESG8CKAHA3'] },
  { slug: 'boite-feuilles-slim-beuz', name: 'Boite - Feuilles Slim / BEUZ', price: 20.0, category: 'Feuilles & Autres', variants: [], images: ['img_2QHSSE0T358KDSN7GCYQPPCVZB'] },
  { slug: 'boite-feuilles-slim-cartons-ocb-virgin', name: 'Boite - Feuilles Slim + Cartons / OCB Virgin', price: 40.0, category: 'Feuilles & Autres', variants: [], images: ['img_6CWJZX9GWZ8QDR77W4F7WXFKA6'] },
  { slug: 'boite-feuilles-slim-ocb', name: 'Boite - Feuilles Slim / OCB', price: 40.0, category: 'Feuilles & Autres', variants: [], images: ['img_3JB6N6PGS893BVWBP3WMKHF5C8'] },
  { slug: 'boite-feuilles-slim-ocb-virgin', name: 'Boite - Feuilles Slim / OCB Virgin', price: 40.0, category: 'Feuilles & Autres', variants: [], images: ['img_1YKHRTR2XX9V1R8QBX55VZ20NN'] },
  { slug: 'boite-filtre-cartons', name: 'Boite - Filtre cartons', price: 20.0, category: 'Feuilles & Autres', variants: [], images: ['img_5NCF50VCWJ83881RX7S8XSRH0C', 'img_2BCANTK7GP82JRJAMWV7BDMD2H'] },
  { slug: 'feuilles-slim-beuz', name: 'Feuilles Slim / BEUZ', price: 1.0, category: 'Feuilles & Autres', variants: [], images: ['img_6DHBHCQCKA8Q2B6DSEPKWWJFSZ'] },
  { slug: 'feuilles-slim-cartons-ocb', name: 'Feuilles Slim + Cartons / OCB', price: 2.5, category: 'Feuilles & Autres', variants: [], images: ['img_0SYXV3ATVF895AB36C3GHNHY0D'] },
  { slug: 'feuilles-slim-cartons-ocb-virgin', name: 'Feuilles Slim + Cartons / OCB Virgin', price: 2.5, category: 'Feuilles & Autres', variants: [], images: ['img_2XBJN1XMR592Q9GVQGVEP4B494'] },
  { slug: 'feuilles-slim-chat-roule', name: 'Feuilles Slim / CHAT ROULE', price: 1.0, category: 'Feuilles & Autres', variants: [], images: ['img_0C1BD3P80B9KES6NK6AQQB7YPJ'] },
  { slug: 'feuilles-slim-chat-roule-virgin', name: 'Feuilles Slim / CHAT ROULE Virgin', price: 1.0, category: 'Feuilles & Autres', variants: [], images: ['img_0HQ7VK35XS9QMR1ZWNE5JE3QB2'] },
  { slug: 'feuilles-slim-longues-cartons-ocb-virgin', name: 'Feuilles Slim Longues + Cartons / OCB Virgin', price: 3.5, category: 'Feuilles & Autres', variants: [], images: ['img_29QE9Z8DEG8WTV73ZJRPPXA966', 'img_17HHPTAZAD9MKRP3G3W0ET4ENA'] },
  { slug: 'feuilles-slim-ocb', name: 'Feuilles Slim / OCB', price: 1.5, category: 'Feuilles & Autres', variants: [], images: ['img_5DD7SK98WH8KMBCHMA8N7FVWSC'] },
  { slug: 'feuilles-slim-ocb-virgin', name: 'Feuilles Slim / OCB Virgin', price: 1.5, category: 'Feuilles & Autres', variants: [], images: ['img_1FQYK31TKR84WTPF6R5QK15E8F'] },
  { slug: 'filtre-carton-ocb', name: 'Filtre carton / OCB', price: 1.0, category: 'Feuilles & Autres', variants: [], images: ['img_2QJTR2BHNH8QVR45H3KCFSS7N4', 'img_3KM3VN0B7987CSWBQPP4C9MERT'] },
  { slug: 'rolls-ocb', name: 'Rolls / OCB', price: 2.0, category: 'Feuilles & Autres', variants: [], images: ['img_3F4RDRH4WP97SBGGZ12W8EYKFN'] },
  { slug: 'lot-feuilles-briquet', name: 'LOT - Feuilles + Briquet', price: 30.0, category: 'Feuilles & Autres', variants: [], images: ['img_00SPPGMND68ZTS31XHRWFX3T7J', 'img_6HMR5W3FGA8VCB2G6R59G7FN86'] },

  { slug: 'broyeur-electrique', name: 'Broyeur électrique', price: 10.0, category: 'Grinders', variants: [], images: ['img_0S18WWB81B81DTTQEBD0X9QQRC'] },
  { slug: 'grinder-beuz', name: 'Grinder BEUZ', price: 3.5, category: 'Grinders', variants: [], images: ['img_7T3KPQX0ZX940RPZ77CTXCSFZD', 'img_6AD0H5B4M080VSWAPDTSBK3WNH', 'img_5K6X5ZTBS299E9AWN9TFMZZXXB'] },
  { slug: 'grinder-metal-avec-reservoir', name: 'Grinder métal avec réservoir', price: 10.0, category: 'Grinders', variants: [{ name: 'Couleur', options: ['Noir', 'Gold', 'Silver', 'Rouge', 'Bleu', 'Vert', 'Rose'] }], images: ['img_56BDM35PME805BGJ49QER1PY3W', 'img_7B5XBKND929969P1B6GS6CT5TD', 'img_4X5J2BDA8Y9ZF997X10DAYZD6N', 'img_68XCZEK57R9FKAEYM739SJC663'] },
  { slug: 'grinder-poker', name: 'Grinder POKER', price: 7.5, category: 'Grinders', variants: [{ name: 'Couleur', options: ['Noir', 'Rouge', 'Vert'] }], images: ['img_6TSAWW1G0X8FPV9S54PPBKDKTZ', 'img_16G25SVW8X80ESS8KPH8V657ND', 'img_2CM4VZWCJ782SRTEPVVX3VJ0KS', 'img_7T5Z0RC0A09G8SC2WKF6DSME6D'] },
  { slug: 'maxi-grinder', name: 'Maxi Grinder', price: 2.0, category: 'Grinders', variants: [{ name: 'Quantité', options: ['1 unité', '12 unités'] }], images: ['img_6WA9425F9M9HQSYX220T54BDS5'] },
  { slug: 'mini-grinder', name: 'Mini Grinder', price: 28.0, category: 'Grinders', variants: [{ name: 'Quantité', options: ['48 unités', '1 unité'] }], images: ['img_75V6RNHW9C96H9PZMFYV2F0DHA'] },

  { slug: 'briquet-clipper', name: 'Briquet CLIPPER', price: 2.0, category: 'Briquets', variants: [], images: ['img_1BV81BJG2F8M2TX0X2RC9YTRWX'] },
  { slug: 'briquet-simple', name: 'Briquet simple', price: 0.5, category: 'Briquets', variants: [], images: ['img_7P4672Z0949MKT1WNNNBDK70D6'] },
  { slug: 'boite-briquets-bic-bx7', name: 'Boite - Briquets BIC BX7', price: 50.0, category: 'Briquets', variants: [], images: ['img_55A7Y9AZE087B940503R4ZHWVQ'] },
  { slug: 'boite-briquets-clipper', name: 'Boite - Briquets CLIPPER', price: 65.0, category: 'Briquets', variants: [], images: ['img_3T4QWQ6KCJ93VV1CSY84EEKK4B'] },
  { slug: 'boite-briquets-cricket', name: 'Boite - Briquets Cricket', price: 39.0, category: 'Briquets', variants: [], images: ['img_7D2PB3ETHX929VW1CR667CGXA9'] },
  { slug: 'boite-briquet-simple', name: 'Boite - Briquet simple', price: 10.0, category: 'Briquets', variants: [], images: ['img_41Y8NHGP6C8GSRWCYK4M3CT192'] },

  { slug: 'vaporisateur-smono-3', name: 'Vaporisateur SMONO 3', price: 89.9, category: 'Vaporisateurs', variants: [], images: ['img_2KVD8CS01H885B4CAPA4V77SJ6', 'img_7DEPEX73JJ9E6VFB4KE6AM1ECM', 'img_7JHXXRRK628FJ9HAV13XCVPGC3'] },
  { slug: 'vaporisateur-smono-5', name: 'Vaporisateur SMONO 5', price: 119.9, category: 'Vaporisateurs', variants: [], images: ['img_17QVKPBPNN99QBMSSKVQMEE081', 'img_1ET190SY5A9DKB49QR8XWQ10TP'] },
  { slug: 'vaporisateur-smono-basic', name: 'Vaporisateur SMONO Basic', price: 89.9, category: 'Vaporisateurs', variants: [], images: ['img_0EFST22V518X4A4VF72S0A09HX', 'img_2A5DJZYBGF9GCTQSDT06PNCYKR', 'img_32GRJR29Q094XTFAN2TXMVWF9D'] },

  { slug: 'agrafes', name: 'Agrafes', price: 2.0, category: 'Fournitures', variants: [{ name: 'Type', options: ['N°10', '24/6'] }], images: ['img_0E8PPW9XG28XASEBPV3MBMY1KH', 'img_0EDHEW2TY78HY9Z4X5SNMBE43Q'] },
  { slug: 'agrafeuse-moyenne', name: 'Agrafeuse moyenne', price: 7.5, category: 'Fournitures', variants: [], images: ['img_5YW1C7MJKZ8GZT75RHWTNC11ER'] },
  { slug: 'grande-agrafeuse', name: 'Grande agrafeuse', price: 7.5, category: 'Fournitures', variants: [], images: ['img_08A102B17D95GBTZC366E18KAT'] },
  { slug: 'mini-agrafeuse-agrafes', name: 'Mini agrafeuse + Agrafes', price: 2.5, category: 'Fournitures', variants: [], images: ['img_38TSE5PJVX8RRBZ6E4RW7AEBBG', 'img_6NS50FXK4P93TRG2Q5CA15K5V2'] },
  { slug: 'marqueur-bic', name: 'Marqueur BIC', price: 1.5, category: 'Fournitures', variants: [], images: ['img_75FGAEK2W68VASH30M5FR62EY8'] },
  { slug: 'elastique-25-32-38mm', name: 'Elastique (25, 32, 38mm)', price: 1.5, category: 'Fournitures', variants: [{ name: 'Taille', options: ['25mm', '32mm', '38mm'] }], images: ['img_1KAM13E78397SA239VSHEJZGN0'] },
  { slug: 'papier-sulfurise', name: 'Papier sulfurisé', price: 0.5, category: 'Fournitures', variants: [], images: ['img_4A25MMGPW99NZB2X2QA425SW1Q'] },
  { slug: 'piles-aaa', name: 'Piles AAA', price: 2.0, category: 'Fournitures', variants: [], images: [] },
  { slug: 'balance-de-poche', name: 'Balance de poche', price: 10.0, category: 'Fournitures', variants: [], images: ['img_4FR1605D3E8RK94RAE66FT9TF1'] },
  { slug: 'balance-professionnelle', name: 'Balance professionnelle', price: 15.0, category: 'Fournitures', variants: [], images: ['img_2M3JA5VW2689HAYHRC39R2NYCS'] },
  { slug: 'balance-superieure', name: 'Balance supérieure', price: 15.0, category: 'Fournitures', variants: [], images: ['img_7W299FX5CR902TWT5JEGTZYQFK'] },
  { slug: 'etiquettes-de-securite-holographiques', name: 'Étiquettes de sécurité holographiques', price: 1.5, category: 'Fournitures', variants: [{ name: 'Conditionnement', options: ['Feuille de 45', '1000'] }], images: ['img_00C3K4AH8K8RK8T9336RPRMF5J'] },

  { slug: 'gants-jetables', name: 'Gants jetables', price: 10.0, category: 'Hygiène', variants: [{ name: 'Taille', options: ['M', 'L'] }], images: ['img_5KFAD1HGDA8JD833PBN1VPASP2', 'img_6CE4GVNANB8C5SCERC6SXN4A2W', 'img_1YGNHAEAVA8PX95WHQ1Q508JTP'] },
  { slug: 'spray-kleaner', name: 'Spray Kleaner', price: 21.0, category: 'Hygiène', variants: [], images: ['img_7Z3FDCM0R692Q9MEXENQ417R3D'] },
  { slug: 'test-salivaire', name: 'Test salivaire', price: 10.0, category: 'Hygiène', variants: [], images: ['img_5ZBHXS4SFV9D29AWXFKXFD9GF7'] },
  { slug: 'substitut-de-tabac-apaisant', name: 'Substitut de tabac / Apaisant', price: 14.9, category: 'Hygiène', variants: [], images: ['img_363CQ5DYGN8ZTRS0RSZK8Q9T3B', 'img_6W5SM8PDS59PRRQC0AN9VXZSA5'] },
]

const CATEGORY_ORDER = [
  'Capsules & Fusées',
  'Tubes & Pop-top',
  'Sachets ZIP',
  'Produits en verres',
  'Feuilles & Autres',
  'Grinders',
  'Briquets',
  'Vaporisateurs',
  'Fournitures',
  'Hygiène',
]

async function download(url, dest) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  await writeFile(dest, buf)
  return buf.length
}

async function main() {
  if (!existsSync(IMG_DIR)) await mkdir(IMG_DIR, { recursive: true })

  const out = []
  let ok = 0
  let fail = 0

  for (const p of RAW) {
    const localImages = []
    for (let i = 0; i < p.images.length; i++) {
      const url = `${BASE}${p.images[i]}/image.png`
      const filename = i === 0 ? `${p.slug}.png` : `${p.slug}-${i}.png`
      const dest = path.join(IMG_DIR, filename)
      try {
        const size = await download(url, dest)
        localImages.push(`/products/${filename}`)
        ok++
        console.log(`  ok  ${filename} (${(size / 1024).toFixed(0)}kb)`)
      } catch (e) {
        fail++
        console.log(`  !!  ${filename} -> ${e.message}`)
      }
    }
    out.push({
      id: p.slug,
      slug: p.slug,
      name: p.name,
      price: p.price,
      category: p.category,
      image: localImages[0] ?? null,
      gallery: localImages,
      variants: p.variants,
    })
  }

  const categories = CATEGORY_ORDER.filter((c) => out.some((p) => p.category === c))

  const ts = `// GÉNÉRÉ automatiquement par scripts/build-catalog.mjs — ne pas éditer à la main.
export interface ProductVariant {
  name: string
  options: string[]
}

export interface Product {
  id: string
  slug: string
  name: string
  price: number
  category: string
  image: string | null
  gallery: string[]
  variants: ProductVariant[]
}

export const products: Product[] = ${JSON.stringify(out, null, 2)}

export const categories: string[] = ${JSON.stringify(categories, null, 2)}
`

  await writeFile(DATA_FILE, ts, 'utf8')
  console.log(`\nProduits: ${out.length} | images ok: ${ok} | échecs: ${fail}`)
  console.log(`Écrit: ${path.relative(ROOT, DATA_FILE)}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
