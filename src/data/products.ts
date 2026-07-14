// GÉNÉRÉ par scripts/build-catalog2.mjs — descriptions & prix repris de cannakit.fr.
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

export const products: Product[] = [
  {
    "id": "capsules-flip",
    "slug": "capsules-flip",
    "name": "Capsules Flip",
    "category": "Capsules & Fusées",
    "description": "Vendu par lot de 50 pièces.\nOptimisez votre conditionnement avec nos capsules flip, conçues pour allier praticité, sécurité et conservation optimale. Idéales pour les échantillons, ces capsules offrent une fermeture hermétique garantissant l’intégrité de vos produits.\nCaractéristiques principales :\n* ⚙️ Capacités : 1 ml, 3 ml, 5 ml, 8 ml et 10 ml\n* ⚒️ Matériau : Plastique de haute qualité, résistant et recyclable\n* ✅ Fermeture sécurisée : Préserve la fraîcheur et évite les fuites.\n* 🛍️ Utilisations variées : Idéales pour les secteurs cosmétique, pharmaceutique et alimentaire.",
    "image": "/products/capsules-flip.png",
    "gallery": [
      "/products/capsules-flip.png",
      "/products/capsules-flip-1.png",
      "/products/capsules-flip-2.png",
      "/products/capsules-flip-3.png"
    ],
    "price": 5,
    "variantAxes": [
      "Size",
      "Couleurs"
    ],
    "variants": [
      {
        "label": "1ml · Transparent",
        "price": 5,
        "options": [
          {
            "axis": "Size",
            "value": "1ml"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "1ml · Bleu",
        "price": 5,
        "options": [
          {
            "axis": "Size",
            "value": "1ml"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "1ml · Jaune",
        "price": 5,
        "options": [
          {
            "axis": "Size",
            "value": "1ml"
          },
          {
            "axis": "Couleurs",
            "value": "Jaune"
          }
        ]
      },
      {
        "label": "5ml · Bleu",
        "price": 8,
        "options": [
          {
            "axis": "Size",
            "value": "5ml"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "10ml · Bleu",
        "price": 11,
        "options": [
          {
            "axis": "Size",
            "value": "10ml"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "8ml · Transparent",
        "price": 8.5,
        "options": [
          {
            "axis": "Size",
            "value": "8ml"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "10ml · Transparent",
        "price": 11,
        "options": [
          {
            "axis": "Size",
            "value": "10ml"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "3ml · Transparent",
        "price": 6,
        "options": [
          {
            "axis": "Size",
            "value": "3ml"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "8ml · Bleu",
        "price": 8.5,
        "options": [
          {
            "axis": "Size",
            "value": "8ml"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "8ml · Jaune",
        "price": 8.5,
        "options": [
          {
            "axis": "Size",
            "value": "8ml"
          },
          {
            "axis": "Couleurs",
            "value": "Jaune"
          }
        ]
      },
      {
        "label": "3ml · Bleu",
        "price": 6,
        "options": [
          {
            "axis": "Size",
            "value": "3ml"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "3ml · Jaune",
        "price": 6,
        "options": [
          {
            "axis": "Size",
            "value": "3ml"
          },
          {
            "axis": "Couleurs",
            "value": "Jaune"
          }
        ]
      },
      {
        "label": "5ml · Jaune",
        "price": 8,
        "options": [
          {
            "axis": "Size",
            "value": "5ml"
          },
          {
            "axis": "Couleurs",
            "value": "Jaune"
          }
        ]
      },
      {
        "label": "5ml · Transparent",
        "price": 8,
        "options": [
          {
            "axis": "Size",
            "value": "5ml"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "10ml · Jaune",
        "price": 11,
        "options": [
          {
            "axis": "Size",
            "value": "10ml"
          },
          {
            "axis": "Couleurs",
            "value": "Jaune"
          }
        ]
      }
    ]
  },
  {
    "id": "capsules-vissees",
    "slug": "capsules-vissees",
    "name": "Capsules vissées",
    "category": "Capsules & Fusées",
    "description": "Vendues par lot de 50 pièces.\nCapsules robustes avec fermeture sécurisée, idéales pour les fleurs et résines.\nOptimisez le conditionnement avec nos capsules vissées, conçues pour allier praticité, sécurité et conservation optimale. Idéales pour les échantillons, ces capsules offrent une fermeture hermétique garantissant l’intégrité de vos produits.\nCaractéristiques principales :\n⚙️ Capacité : de 1 ml à 30 ml\n⚒️ Matériau : Plastique de haute qualité, résistant et recyclable\n✅ Fermeture sécurisée : Préserve la fraîcheur et prévient les fuites\n🛍️ Utilisations variées : Idéales pour les secteurs cosmétique, pharmaceutique et alimentaire.",
    "image": "/products/capsules-vissees.png",
    "gallery": [
      "/products/capsules-vissees.png",
      "/products/capsules-vissees-1.png",
      "/products/capsules-vissees-2.png",
      "/products/capsules-vissees-3.png"
    ],
    "price": 6,
    "variantAxes": [
      "Size",
      "Color"
    ],
    "variants": [
      {
        "label": "3ml · Transparent",
        "price": 8,
        "options": [
          {
            "axis": "Size",
            "value": "3ml"
          },
          {
            "axis": "Color",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "3ml · Bleu",
        "price": 8,
        "options": [
          {
            "axis": "Size",
            "value": "3ml"
          },
          {
            "axis": "Color",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "3ml · Jaune",
        "price": 8,
        "options": [
          {
            "axis": "Size",
            "value": "3ml"
          },
          {
            "axis": "Color",
            "value": "Jaune"
          }
        ]
      },
      {
        "label": "3ml · Vert",
        "price": 8,
        "options": [
          {
            "axis": "Size",
            "value": "3ml"
          },
          {
            "axis": "Color",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "5ml · Transparent",
        "price": 10,
        "options": [
          {
            "axis": "Size",
            "value": "5ml"
          },
          {
            "axis": "Color",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "5ml · Bleu",
        "price": 10,
        "options": [
          {
            "axis": "Size",
            "value": "5ml"
          },
          {
            "axis": "Color",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "5ml · Jaune",
        "price": 10,
        "options": [
          {
            "axis": "Size",
            "value": "5ml"
          },
          {
            "axis": "Color",
            "value": "Jaune"
          }
        ]
      },
      {
        "label": "5ml · Vert",
        "price": 10,
        "options": [
          {
            "axis": "Size",
            "value": "5ml"
          },
          {
            "axis": "Color",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "10ml · Transparent",
        "price": 12,
        "options": [
          {
            "axis": "Size",
            "value": "10ml"
          },
          {
            "axis": "Color",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "10ml · Bleu",
        "price": 12,
        "options": [
          {
            "axis": "Size",
            "value": "10ml"
          },
          {
            "axis": "Color",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "10ml · Jaune",
        "price": 12,
        "options": [
          {
            "axis": "Size",
            "value": "10ml"
          },
          {
            "axis": "Color",
            "value": "Jaune"
          }
        ]
      },
      {
        "label": "10ml · Vert",
        "price": 12,
        "options": [
          {
            "axis": "Size",
            "value": "10ml"
          },
          {
            "axis": "Color",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "15ml · Transparent",
        "price": 14,
        "options": [
          {
            "axis": "Size",
            "value": "15ml"
          },
          {
            "axis": "Color",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "15ml · Bleu",
        "price": 14,
        "options": [
          {
            "axis": "Size",
            "value": "15ml"
          },
          {
            "axis": "Color",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "15ml · Jaune",
        "price": 14,
        "options": [
          {
            "axis": "Size",
            "value": "15ml"
          },
          {
            "axis": "Color",
            "value": "Jaune"
          }
        ]
      },
      {
        "label": "15ml · Vert",
        "price": 14,
        "options": [
          {
            "axis": "Size",
            "value": "15ml"
          },
          {
            "axis": "Color",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "20ml · Transparent",
        "price": 15,
        "options": [
          {
            "axis": "Size",
            "value": "20ml"
          },
          {
            "axis": "Color",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "20ml · Bleu",
        "price": 15,
        "options": [
          {
            "axis": "Size",
            "value": "20ml"
          },
          {
            "axis": "Color",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "20ml · Jaune",
        "price": 15,
        "options": [
          {
            "axis": "Size",
            "value": "20ml"
          },
          {
            "axis": "Color",
            "value": "Jaune"
          }
        ]
      },
      {
        "label": "20ml · Vert",
        "price": 15,
        "options": [
          {
            "axis": "Size",
            "value": "20ml"
          },
          {
            "axis": "Color",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "30ml · Transparent",
        "price": 18,
        "options": [
          {
            "axis": "Size",
            "value": "30ml"
          },
          {
            "axis": "Color",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "30ml · Bleu",
        "price": 18,
        "options": [
          {
            "axis": "Size",
            "value": "30ml"
          },
          {
            "axis": "Color",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "30ml · Jaune",
        "price": 18,
        "options": [
          {
            "axis": "Size",
            "value": "30ml"
          },
          {
            "axis": "Color",
            "value": "Jaune"
          }
        ]
      },
      {
        "label": "30ml · Vert",
        "price": 18,
        "options": [
          {
            "axis": "Size",
            "value": "30ml"
          },
          {
            "axis": "Color",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "1ml · Transparent",
        "price": 6,
        "options": [
          {
            "axis": "Size",
            "value": "1ml"
          },
          {
            "axis": "Color",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "1ml · Bleu",
        "price": 6,
        "options": [
          {
            "axis": "Size",
            "value": "1ml"
          },
          {
            "axis": "Color",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "1ml · Jaune",
        "price": 6,
        "options": [
          {
            "axis": "Size",
            "value": "1ml"
          },
          {
            "axis": "Color",
            "value": "Jaune"
          }
        ]
      },
      {
        "label": "1ml · Vert",
        "price": 6,
        "options": [
          {
            "axis": "Size",
            "value": "1ml"
          },
          {
            "axis": "Color",
            "value": "Vert"
          }
        ]
      }
    ]
  },
  {
    "id": "cone-hermetique",
    "slug": "cone-hermetique",
    "name": "Cône hermétique",
    "category": "Capsules & Fusées",
    "description": "Lot de 50 tubes coniques plastiques avec capuchon pression.\nLe cône hermétique incontournable pour préserver arômes, fraîcheur et présentation de vos produits.\nBoîte conique pratique pour préserver et transporter des pré-rolls.\nLe Pop Cône est un tube de laboratoire en plastique, caractérisé par sa base conique. Idéal pour la centrifugation et le stockage d’échantillons, il assure une manipulation précise et sécurisée. Sa conception ergonomique et sa graduation claire en font un outil essentiel.",
    "image": "/products/cone-hermetique.png",
    "gallery": [
      "/products/cone-hermetique.png",
      "/products/cone-hermetique-1.png",
      "/products/cone-hermetique-2.png",
      "/products/cone-hermetique-3.png"
    ],
    "price": 7.5,
    "variantAxes": [
      "Couleurs"
    ],
    "variants": [
      {
        "label": "Transparent",
        "price": 7.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "Vert",
        "price": 7.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "Rouge",
        "price": 7.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Rouge"
          }
        ]
      }
    ]
  },
  {
    "id": "cone-pop",
    "slug": "cone-pop",
    "name": "Cône-Pop",
    "category": "Capsules & Fusées",
    "description": "Lot de 50 tubes coniques avec capuchon solidarisé à ouverture \"pop top\".\nLe Pop Cône est un tube de laboratoire en plastique, caractérisé par sa base conique. Idéal pour la centrifugation et le stockage d’échantillons, il assure une manipulation précise et sécurisée. Sa conception ergonomique et sa graduation claire en font un outil essentiel.\nUn tube conique élégant, pratique et hermétique pour préserver l’intégrité de vos produits tout en facilitant leur usage.",
    "image": "/products/cone-pop.png",
    "gallery": [
      "/products/cone-pop.png"
    ],
    "price": 7.5,
    "variantAxes": [],
    "variants": [
      {
        "label": "Cône-Pop",
        "price": 7.5,
        "options": []
      }
    ]
  },
  {
    "id": "fusees",
    "slug": "fusees",
    "name": "Fusées",
    "category": "Capsules & Fusées",
    "description": "Lot de 50 mini tubes coniques avec bouchon solidaire.\nUn tube conique étanche, pratique et recyclable, pensé pour vos dosages, mélanges ou conditionnements de précision.\nLa Fusée est un petit tube de centrifugeuse conçu pour le stockage et la manipulation sécurisée d’échantillons. Fabriqué en plastique résistant, il offre une grande fiabilité lors des processus de centrifugation et d’analyse en laboratoire. Son format compact et sa conception hermétique garantissent une conservation optimale des liquides et des substances, tout en facilitant leur manipulation.",
    "image": "/products/fusees.png",
    "gallery": [
      "/products/fusees.png",
      "/products/fusees-1.png",
      "/products/fusees-2.png",
      "/products/fusees-3.png"
    ],
    "price": 2.5,
    "variantAxes": [
      "Volume",
      "Couleurs"
    ],
    "variants": [
      {
        "label": "0,5ml · Transparent",
        "price": 2.5,
        "options": [
          {
            "axis": "Volume",
            "value": "0,5ml"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "0,5ml · Rose",
        "price": 2.5,
        "options": [
          {
            "axis": "Volume",
            "value": "0,5ml"
          },
          {
            "axis": "Couleurs",
            "value": "Rose"
          }
        ]
      },
      {
        "label": "0,5ml · Bleu",
        "price": 2.5,
        "options": [
          {
            "axis": "Volume",
            "value": "0,5ml"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "0,5ml · Vert",
        "price": 2.5,
        "options": [
          {
            "axis": "Volume",
            "value": "0,5ml"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "0,5ml · Rouge",
        "price": 2.5,
        "options": [
          {
            "axis": "Volume",
            "value": "0,5ml"
          },
          {
            "axis": "Couleurs",
            "value": "Rouge"
          }
        ]
      },
      {
        "label": "1ml · Transparent",
        "price": 5,
        "options": [
          {
            "axis": "Volume",
            "value": "1ml"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "1ml · Bleu",
        "price": 5,
        "options": [
          {
            "axis": "Volume",
            "value": "1ml"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "1ml · Rose",
        "price": 5,
        "options": [
          {
            "axis": "Volume",
            "value": "1ml"
          },
          {
            "axis": "Couleurs",
            "value": "Rose"
          }
        ]
      },
      {
        "label": "1ml · Vert",
        "price": 5,
        "options": [
          {
            "axis": "Volume",
            "value": "1ml"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "1ml · Rouge",
        "price": 5,
        "options": [
          {
            "axis": "Volume",
            "value": "1ml"
          },
          {
            "axis": "Couleurs",
            "value": "Rouge"
          }
        ]
      },
      {
        "label": "1,5ml · Rose",
        "price": 3.5,
        "options": [
          {
            "axis": "Volume",
            "value": "1,5ml"
          },
          {
            "axis": "Couleurs",
            "value": "Rose"
          }
        ]
      },
      {
        "label": "1,5ml · Transparent",
        "price": 3.5,
        "options": [
          {
            "axis": "Volume",
            "value": "1,5ml"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "1,5ml · Rouge",
        "price": 3.5,
        "options": [
          {
            "axis": "Volume",
            "value": "1,5ml"
          },
          {
            "axis": "Couleurs",
            "value": "Rouge"
          }
        ]
      },
      {
        "label": "1,5ml · Bleu",
        "price": 3.5,
        "options": [
          {
            "axis": "Volume",
            "value": "1,5ml"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "1,5ml · Vert",
        "price": 3.5,
        "options": [
          {
            "axis": "Volume",
            "value": "1,5ml"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      }
    ]
  },
  {
    "id": "pop-top-24-a-120ml",
    "slug": "pop-top-24-a-120ml",
    "name": "Pop-Top (24 à 120ml)",
    "category": "Tubes & Pop-top",
    "description": "Boîte pop top résistante avec ouverture rapide et fermeture hermétique.\nLe Pop-Top est un petit pot en plastique conçu pour offrir une fermeture hermétique en toute simplicité. Grâce à son système de verrouillage pratique, il se scelle d’une simple pression sur le couvercle, garantissant la protection et la conservation de son contenu. Compact, léger et résistant, il est idéal pour stocker en toute sécurité divers petits objets ou substances.Vendu par lot de 50",
    "image": "/products/pop-top-24-a-120ml.png",
    "gallery": [
      "/products/pop-top-24-a-120ml.png",
      "/products/pop-top-24-a-120ml-1.png",
      "/products/pop-top-24-a-120ml-2.png",
      "/products/pop-top-24-a-120ml-3.png"
    ],
    "price": 10,
    "variantAxes": [
      "Volume",
      "Couleur"
    ],
    "variants": [
      {
        "label": "24ml · Transparent",
        "price": 10,
        "options": [
          {
            "axis": "Volume",
            "value": "24ml"
          },
          {
            "axis": "Couleur",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "24ml · Bleu",
        "price": 10,
        "options": [
          {
            "axis": "Volume",
            "value": "24ml"
          },
          {
            "axis": "Couleur",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "24ml · Vert",
        "price": 10,
        "options": [
          {
            "axis": "Volume",
            "value": "24ml"
          },
          {
            "axis": "Couleur",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "50ml · Transparent",
        "price": 12,
        "options": [
          {
            "axis": "Volume",
            "value": "50ml"
          },
          {
            "axis": "Couleur",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "50ml · Bleu",
        "price": 12,
        "options": [
          {
            "axis": "Volume",
            "value": "50ml"
          },
          {
            "axis": "Couleur",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "50ml · Vert",
        "price": 12,
        "options": [
          {
            "axis": "Volume",
            "value": "50ml"
          },
          {
            "axis": "Couleur",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "80ml · Transparent",
        "price": 14,
        "options": [
          {
            "axis": "Volume",
            "value": "80ml"
          },
          {
            "axis": "Couleur",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "80ml · Bleu",
        "price": 14,
        "options": [
          {
            "axis": "Volume",
            "value": "80ml"
          },
          {
            "axis": "Couleur",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "80ml · Vert",
        "price": 14,
        "options": [
          {
            "axis": "Volume",
            "value": "80ml"
          },
          {
            "axis": "Couleur",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "120ml · Transparent",
        "price": 16,
        "options": [
          {
            "axis": "Volume",
            "value": "120ml"
          },
          {
            "axis": "Couleur",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "120ml · Bleu",
        "price": 16,
        "options": [
          {
            "axis": "Volume",
            "value": "120ml"
          },
          {
            "axis": "Couleur",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "120ml · Vert",
        "price": 16,
        "options": [
          {
            "axis": "Volume",
            "value": "120ml"
          },
          {
            "axis": "Couleur",
            "value": "Vert"
          }
        ]
      }
    ]
  },
  {
    "id": "push-down-30ml",
    "slug": "push-down-30ml",
    "name": "Push-Down (30ml)",
    "category": "Tubes & Pop-top",
    "description": "Lot de 50 flacons transparents à ouverture sécurisée.\nFlacon en plastique rigide conçu avec un bouchon sécurité \"push &amp; turn\" (appuyer puis tourner) empêchant l’ouverture accidentelle par les enfants.",
    "image": "/products/push-down-30ml.png",
    "gallery": [
      "/products/push-down-30ml.png",
      "/products/push-down-30ml-1.png",
      "/products/push-down-30ml-2.png"
    ],
    "price": 10,
    "variantAxes": [
      "Option"
    ],
    "variants": [
      {
        "label": "Gris",
        "price": 10,
        "options": [
          {
            "axis": "Option",
            "value": "Gris"
          }
        ]
      },
      {
        "label": "Bleu",
        "price": 10,
        "options": [
          {
            "axis": "Option",
            "value": "Bleu"
          }
        ]
      }
    ]
  },
  {
    "id": "tube-pop-90mm",
    "slug": "tube-pop-90mm",
    "name": "Tube-Pop (90mm)",
    "category": "Tubes & Pop-top",
    "description": "Lot de 50 tubes droit avec capuchon solidarisé à ouverture \"pop top\".\nLe Tube pop est un tube rapide à ouvrir, hermétique et recyclable, pensé pour préserver vos produits tout en facilitant leur utilisation. Tube hermétique avec système pop pour transporter vos produits facilement.",
    "image": "/products/tube-pop-90mm.png",
    "gallery": [
      "/products/tube-pop-90mm.png"
    ],
    "price": 7.5,
    "variantAxes": [],
    "variants": [
      {
        "label": "Tube-Pop (90mm)",
        "price": 7.5,
        "options": []
      }
    ]
  },
  {
    "id": "tubes-a-essais",
    "slug": "tubes-a-essais",
    "name": "Tubes à essais",
    "category": "Tubes & Pop-top",
    "description": "Les Tubes à Essai est un récipient cylindrique en verre ou en plastique, conçu pour la manipulation, le stockage et l'analyse d'échantillons en laboratoire. Résistant et pratique, il permet de conserver en toute sécurité les échantillons grâce à sa forme allongée et son fond arrondi ou plat.",
    "image": "/products/tubes-a-essais.png",
    "gallery": [
      "/products/tubes-a-essais.png"
    ],
    "price": 3,
    "variantAxes": [
      "Volume"
    ],
    "variants": [
      {
        "label": "Court",
        "price": 3,
        "options": [
          {
            "axis": "Volume",
            "value": "Court"
          }
        ]
      },
      {
        "label": "Long",
        "price": 5,
        "options": [
          {
            "axis": "Volume",
            "value": "Long"
          }
        ]
      }
    ]
  },
  {
    "id": "sachets-zip-brillant-metallise",
    "slug": "sachets-zip-brillant-metallise",
    "name": "Sachets ZIP - Brillant métallisé",
    "category": "Sachets ZIP",
    "description": "",
    "image": "/products/sachets-zip-brillant-metallise.png",
    "gallery": [
      "/products/sachets-zip-brillant-metallise.png",
      "/products/sachets-zip-brillant-metallise-1.png",
      "/products/sachets-zip-brillant-metallise-2.png",
      "/products/sachets-zip-brillant-metallise-3.png"
    ],
    "price": 10,
    "variantAxes": [
      "Couleurs",
      "Volume"
    ],
    "variants": [
      {
        "label": "Rose métallisé · 75x65mm",
        "price": 10,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Rose métallisé"
          },
          {
            "axis": "Volume",
            "value": "75x65mm"
          }
        ]
      },
      {
        "label": "Bleu métallisé · 75x65mm",
        "price": 10,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Bleu métallisé"
          },
          {
            "axis": "Volume",
            "value": "75x65mm"
          }
        ]
      },
      {
        "label": "Vert métallisé · 75x65mm",
        "price": 10,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert métallisé"
          },
          {
            "axis": "Volume",
            "value": "75x65mm"
          }
        ]
      },
      {
        "label": "Gold métallisé · 75x65mm",
        "price": 10,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Gold métallisé"
          },
          {
            "axis": "Volume",
            "value": "75x65mm"
          }
        ]
      },
      {
        "label": "Silver métallisé · 75x65mm",
        "price": 10,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Silver métallisé"
          },
          {
            "axis": "Volume",
            "value": "75x65mm"
          }
        ]
      },
      {
        "label": "Noir métallisé · 75x65mm",
        "price": 10,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Noir métallisé"
          },
          {
            "axis": "Volume",
            "value": "75x65mm"
          }
        ]
      },
      {
        "label": "Rose métallisé · 75x100mm",
        "price": 13.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Rose métallisé"
          },
          {
            "axis": "Volume",
            "value": "75x100mm"
          }
        ]
      },
      {
        "label": "Bleu métallisé · 75x100mm",
        "price": 13.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Bleu métallisé"
          },
          {
            "axis": "Volume",
            "value": "75x100mm"
          }
        ]
      },
      {
        "label": "Vert métallisé · 75x100mm",
        "price": 13.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert métallisé"
          },
          {
            "axis": "Volume",
            "value": "75x100mm"
          }
        ]
      },
      {
        "label": "Gold métallisé · 75x100mm",
        "price": 13.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Gold métallisé"
          },
          {
            "axis": "Volume",
            "value": "75x100mm"
          }
        ]
      },
      {
        "label": "Silver métallisé · 75x100mm",
        "price": 13.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Silver métallisé"
          },
          {
            "axis": "Volume",
            "value": "75x100mm"
          }
        ]
      },
      {
        "label": "Noir métallisé · 75x100mm",
        "price": 13.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Noir métallisé"
          },
          {
            "axis": "Volume",
            "value": "75x100mm"
          }
        ]
      },
      {
        "label": "Rose métallisé · 85x130mm",
        "price": 16,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Rose métallisé"
          },
          {
            "axis": "Volume",
            "value": "85x130mm"
          }
        ]
      },
      {
        "label": "Bleu métallisé · 85x130mm",
        "price": 16,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Bleu métallisé"
          },
          {
            "axis": "Volume",
            "value": "85x130mm"
          }
        ]
      },
      {
        "label": "Vert métallisé · 85x130mm",
        "price": 16,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert métallisé"
          },
          {
            "axis": "Volume",
            "value": "85x130mm"
          }
        ]
      },
      {
        "label": "Gold métallisé · 85x130mm",
        "price": 16,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Gold métallisé"
          },
          {
            "axis": "Volume",
            "value": "85x130mm"
          }
        ]
      },
      {
        "label": "Silver métallisé · 85x130mm",
        "price": 16,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Silver métallisé"
          },
          {
            "axis": "Volume",
            "value": "85x130mm"
          }
        ]
      },
      {
        "label": "Noir métallisé · 85x130mm",
        "price": 16,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Noir métallisé"
          },
          {
            "axis": "Volume",
            "value": "85x130mm"
          }
        ]
      },
      {
        "label": "Rose métallisé · 100x150mm",
        "price": 18.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Rose métallisé"
          },
          {
            "axis": "Volume",
            "value": "100x150mm"
          }
        ]
      },
      {
        "label": "Bleu métallisé · 100x150mm",
        "price": 18.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Bleu métallisé"
          },
          {
            "axis": "Volume",
            "value": "100x150mm"
          }
        ]
      },
      {
        "label": "Vert métallisé · 100x150mm",
        "price": 18.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert métallisé"
          },
          {
            "axis": "Volume",
            "value": "100x150mm"
          }
        ]
      },
      {
        "label": "Gold métallisé · 100x150mm",
        "price": 18.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Gold métallisé"
          },
          {
            "axis": "Volume",
            "value": "100x150mm"
          }
        ]
      },
      {
        "label": "Silver métallisé · 100x150mm",
        "price": 18.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Silver métallisé"
          },
          {
            "axis": "Volume",
            "value": "100x150mm"
          }
        ]
      },
      {
        "label": "Noir métallisé · 100x150mm",
        "price": 18.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Noir métallisé"
          },
          {
            "axis": "Volume",
            "value": "100x150mm"
          }
        ]
      }
    ]
  },
  {
    "id": "sachets-zip-grands-formats",
    "slug": "sachets-zip-grands-formats",
    "name": "Sachets ZIP - Grands formats",
    "category": "Sachets ZIP",
    "description": "",
    "image": "/products/sachets-zip-grands-formats.png",
    "gallery": [
      "/products/sachets-zip-grands-formats.png"
    ],
    "price": 14,
    "variantAxes": [
      "Volume",
      "Couleurs"
    ],
    "variants": [
      {
        "label": "100x150mm · Transparent",
        "price": 14,
        "options": [
          {
            "axis": "Volume",
            "value": "100x150mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "100x150mm · Vert",
        "price": 15,
        "options": [
          {
            "axis": "Volume",
            "value": "100x150mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "100x150mm · Bleu",
        "price": 15,
        "options": [
          {
            "axis": "Volume",
            "value": "100x150mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "150x250mm · Transparent",
        "price": 16,
        "options": [
          {
            "axis": "Volume",
            "value": "150x250mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "150x250mm · Vert",
        "price": 17,
        "options": [
          {
            "axis": "Volume",
            "value": "150x250mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "150x250mm · Bleu",
        "price": 17,
        "options": [
          {
            "axis": "Volume",
            "value": "150x250mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "200x300mm · Bleu",
        "price": 22,
        "options": [
          {
            "axis": "Volume",
            "value": "200x300mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "200x300mm · Transparent",
        "price": 21,
        "options": [
          {
            "axis": "Volume",
            "value": "200x300mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "200x300mm · Vert",
        "price": 22,
        "options": [
          {
            "axis": "Volume",
            "value": "200x300mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "250x350mm · Transparent",
        "price": 23,
        "options": [
          {
            "axis": "Volume",
            "value": "250x350mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "250x350mm · Bleu",
        "price": 24,
        "options": [
          {
            "axis": "Volume",
            "value": "250x350mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "250x350mm · Vert",
        "price": 24,
        "options": [
          {
            "axis": "Volume",
            "value": "250x350mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "300x400mm · Transparent",
        "price": 26,
        "options": [
          {
            "axis": "Volume",
            "value": "300x400mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "300x400mm · Bleu",
        "price": 27,
        "options": [
          {
            "axis": "Volume",
            "value": "300x400mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "300x400mm · Vert",
        "price": 27,
        "options": [
          {
            "axis": "Volume",
            "value": "300x400mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "350x450mm · Transparent",
        "price": 29,
        "options": [
          {
            "axis": "Volume",
            "value": "350x450mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "350x450mm · Bleu",
        "price": 30,
        "options": [
          {
            "axis": "Volume",
            "value": "350x450mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "350x450mm · Vert",
        "price": 30,
        "options": [
          {
            "axis": "Volume",
            "value": "350x450mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "400x600mm · Bleu",
        "price": 53,
        "options": [
          {
            "axis": "Volume",
            "value": "400x600mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "400x600mm · Transparent",
        "price": 52,
        "options": [
          {
            "axis": "Volume",
            "value": "400x600mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "400x600mm · Vert",
        "price": 53,
        "options": [
          {
            "axis": "Volume",
            "value": "400x600mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      }
    ]
  },
  {
    "id": "sachets-zip-x1000",
    "slug": "sachets-zip-x1000",
    "name": "Sachets ZIP (x1000)",
    "category": "Sachets ZIP",
    "description": "",
    "image": "/products/sachets-zip-x1000.png",
    "gallery": [
      "/products/sachets-zip-x1000.png",
      "/products/sachets-zip-x1000-1.png",
      "/products/sachets-zip-x1000-2.png",
      "/products/sachets-zip-x1000-3.png"
    ],
    "price": 1000,
    "variantAxes": [
      "Couleurs",
      "Dimension"
    ],
    "variants": [
      {
        "label": "Transparent · 40x40mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Transparent"
          },
          {
            "axis": "Dimension",
            "value": "40x40mm"
          }
        ]
      },
      {
        "label": "Transparent · 40x60mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Transparent"
          },
          {
            "axis": "Dimension",
            "value": "40x60mm"
          }
        ]
      },
      {
        "label": "Vert · 40x40mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert"
          },
          {
            "axis": "Dimension",
            "value": "40x40mm"
          }
        ]
      },
      {
        "label": "Bleu · 40x60mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Bleu"
          },
          {
            "axis": "Dimension",
            "value": "40x60mm"
          }
        ]
      },
      {
        "label": "Bleu · 40x40mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Bleu"
          },
          {
            "axis": "Dimension",
            "value": "40x40mm"
          }
        ]
      },
      {
        "label": "Vert · 40x60mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert"
          },
          {
            "axis": "Dimension",
            "value": "40x60mm"
          }
        ]
      },
      {
        "label": "Bleu · 40x75mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Bleu"
          },
          {
            "axis": "Dimension",
            "value": "40x75mm"
          }
        ]
      },
      {
        "label": "Vert · 40x75mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert"
          },
          {
            "axis": "Dimension",
            "value": "40x75mm"
          }
        ]
      },
      {
        "label": "Bleu · 55x65mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Bleu"
          },
          {
            "axis": "Dimension",
            "value": "55x65mm"
          }
        ]
      },
      {
        "label": "Vert · 55x65mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert"
          },
          {
            "axis": "Dimension",
            "value": "55x65mm"
          }
        ]
      },
      {
        "label": "Transparent · 55x65mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Transparent"
          },
          {
            "axis": "Dimension",
            "value": "55x65mm"
          }
        ]
      },
      {
        "label": "Transparent · 40x75mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Transparent"
          },
          {
            "axis": "Dimension",
            "value": "40x75mm"
          }
        ]
      },
      {
        "label": "Bleu · 60x80mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Bleu"
          },
          {
            "axis": "Dimension",
            "value": "60x80mm"
          }
        ]
      },
      {
        "label": "Transparent · 60x80mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Transparent"
          },
          {
            "axis": "Dimension",
            "value": "60x80mm"
          }
        ]
      },
      {
        "label": "Vert · 60x80mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert"
          },
          {
            "axis": "Dimension",
            "value": "60x80mm"
          }
        ]
      },
      {
        "label": "Bleu · 80x45mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Bleu"
          },
          {
            "axis": "Dimension",
            "value": "80x45mm"
          }
        ]
      },
      {
        "label": "Transparent · 80x45mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Transparent"
          },
          {
            "axis": "Dimension",
            "value": "80x45mm"
          }
        ]
      },
      {
        "label": "Vert · 80x45mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert"
          },
          {
            "axis": "Dimension",
            "value": "80x45mm"
          }
        ]
      },
      {
        "label": "Bleu · 80x60mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Bleu"
          },
          {
            "axis": "Dimension",
            "value": "80x60mm"
          }
        ]
      },
      {
        "label": "Vert · 80x60mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert"
          },
          {
            "axis": "Dimension",
            "value": "80x60mm"
          }
        ]
      },
      {
        "label": "Transparent · 80x60mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Transparent"
          },
          {
            "axis": "Dimension",
            "value": "80x60mm"
          }
        ]
      },
      {
        "label": "Transparent · 100x150mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Transparent"
          },
          {
            "axis": "Dimension",
            "value": "100x150mm"
          }
        ]
      },
      {
        "label": "Bleu · 100x150mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Bleu"
          },
          {
            "axis": "Dimension",
            "value": "100x150mm"
          }
        ]
      },
      {
        "label": "Vert · 100x150mm",
        "price": 1000,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert"
          },
          {
            "axis": "Dimension",
            "value": "100x150mm"
          }
        ]
      }
    ]
  },
  {
    "id": "sachet-zip-petits-formats",
    "slug": "sachet-zip-petits-formats",
    "name": "Sachet ZIP - Petits formats",
    "category": "Sachets ZIP",
    "description": "",
    "image": "/products/sachet-zip-petits-formats.png",
    "gallery": [
      "/products/sachet-zip-petits-formats.png",
      "/products/sachet-zip-petits-formats-1.png",
      "/products/sachet-zip-petits-formats-2.png",
      "/products/sachet-zip-petits-formats-3.png"
    ],
    "price": 4.5,
    "variantAxes": [
      "Volume",
      "Couleurs"
    ],
    "variants": [
      {
        "label": "25x25mm · Transparent",
        "price": 4.5,
        "options": [
          {
            "axis": "Volume",
            "value": "25x25mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "25x25mm · Bleu",
        "price": 5.5,
        "options": [
          {
            "axis": "Volume",
            "value": "25x25mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "25x25mm · Vert",
        "price": 5.5,
        "options": [
          {
            "axis": "Volume",
            "value": "25x25mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "30x100mm · Transparent",
        "price": 6,
        "options": [
          {
            "axis": "Volume",
            "value": "30x100mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "30x100mm · Bleu",
        "price": 7,
        "options": [
          {
            "axis": "Volume",
            "value": "30x100mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "30x100mm · Vert",
        "price": 7,
        "options": [
          {
            "axis": "Volume",
            "value": "30x100mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "40x40mm · Transparent",
        "price": 5,
        "options": [
          {
            "axis": "Volume",
            "value": "40x40mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "40x40mm · Bleu",
        "price": 6,
        "options": [
          {
            "axis": "Volume",
            "value": "40x40mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "40x40mm · Vert",
        "price": 6,
        "options": [
          {
            "axis": "Volume",
            "value": "40x40mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "40x60mm · Transparent",
        "price": 5.5,
        "options": [
          {
            "axis": "Volume",
            "value": "40x60mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "40x60mm · Bleu",
        "price": 6.5,
        "options": [
          {
            "axis": "Volume",
            "value": "40x60mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "40x60mm · Vert",
        "price": 6.5,
        "options": [
          {
            "axis": "Volume",
            "value": "40x60mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "40x75mm · Transparent",
        "price": 5.5,
        "options": [
          {
            "axis": "Volume",
            "value": "40x75mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "40x75mm · Bleu",
        "price": 6.5,
        "options": [
          {
            "axis": "Volume",
            "value": "40x75mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "40x75mm · Vert",
        "price": 6.5,
        "options": [
          {
            "axis": "Volume",
            "value": "40x75mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "40x90mm · Transparent",
        "price": 6,
        "options": [
          {
            "axis": "Volume",
            "value": "40x90mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "40x90mm · Bleu",
        "price": 7,
        "options": [
          {
            "axis": "Volume",
            "value": "40x90mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "40x90mm · Vert",
        "price": 7,
        "options": [
          {
            "axis": "Volume",
            "value": "40x90mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "40x110mm · Transparent",
        "price": 6,
        "options": [
          {
            "axis": "Volume",
            "value": "40x110mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "40x110mm · Bleu",
        "price": 7,
        "options": [
          {
            "axis": "Volume",
            "value": "40x110mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "40x110mm · Vert",
        "price": 7,
        "options": [
          {
            "axis": "Volume",
            "value": "40x110mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "55x65mm · Transparent",
        "price": 6,
        "options": [
          {
            "axis": "Volume",
            "value": "55x65mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "55x65mm · Bleu",
        "price": 7,
        "options": [
          {
            "axis": "Volume",
            "value": "55x65mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "55x65mm · Vert",
        "price": 7,
        "options": [
          {
            "axis": "Volume",
            "value": "55x65mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "60x80mm · Transparent",
        "price": 6.5,
        "options": [
          {
            "axis": "Volume",
            "value": "60x80mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "60x80mm · Bleu",
        "price": 7.5,
        "options": [
          {
            "axis": "Volume",
            "value": "60x80mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "60x80mm · Vert",
        "price": 7.5,
        "options": [
          {
            "axis": "Volume",
            "value": "60x80mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "80x45mm · Transparent",
        "price": 6.5,
        "options": [
          {
            "axis": "Volume",
            "value": "80x45mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "80x45mm · Bleu",
        "price": 7.5,
        "options": [
          {
            "axis": "Volume",
            "value": "80x45mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "80x45mm · Vert",
        "price": 7.5,
        "options": [
          {
            "axis": "Volume",
            "value": "80x45mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "80x60mm · Transparent",
        "price": 6.5,
        "options": [
          {
            "axis": "Volume",
            "value": "80x60mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "80x60mm · Bleu",
        "price": 7.5,
        "options": [
          {
            "axis": "Volume",
            "value": "80x60mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "80x60mm · Vert",
        "price": 7.5,
        "options": [
          {
            "axis": "Volume",
            "value": "80x60mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "80x120mm · Transparent",
        "price": 11,
        "options": [
          {
            "axis": "Volume",
            "value": "80x120mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "80x120mm · Bleu",
        "price": 12,
        "options": [
          {
            "axis": "Volume",
            "value": "80x120mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "80x120mm · Vert",
        "price": 12,
        "options": [
          {
            "axis": "Volume",
            "value": "80x120mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "90x90mm · Transparent",
        "price": 7.5,
        "options": [
          {
            "axis": "Volume",
            "value": "90x90mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "90x90mm · Bleu",
        "price": 8.5,
        "options": [
          {
            "axis": "Volume",
            "value": "90x90mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "90x90mm · Vert",
        "price": 8.5,
        "options": [
          {
            "axis": "Volume",
            "value": "90x90mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "100x50mm · Transparent",
        "price": 6,
        "options": [
          {
            "axis": "Volume",
            "value": "100x50mm"
          },
          {
            "axis": "Couleurs",
            "value": "Transparent"
          }
        ]
      },
      {
        "label": "100x50mm · Bleu",
        "price": 7,
        "options": [
          {
            "axis": "Volume",
            "value": "100x50mm"
          },
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "100x50mm · Vert",
        "price": 7,
        "options": [
          {
            "axis": "Volume",
            "value": "100x50mm"
          },
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      }
    ]
  },
  {
    "id": "bocaux-en-verre-10-a-160ml",
    "slug": "bocaux-en-verre-10-a-160ml",
    "name": "Bocaux en verre (10 à 160ml)",
    "category": "Produits en verres",
    "description": "Les Bocaux en Verre sont des récipients polyvalents disponibles en plusieurs tailles, parfaits pour le stockage et la conservation de divers produits. Fabriqués en verre robuste, ils garantissent une excellente étanchéité et préservent la fraîcheur de leur contenu.\nIdéals pour les préparations artisanales, ils allient praticité et esthétisme tout en étant réutilisables et écologiques.",
    "image": "/products/bocaux-en-verre-10-a-160ml.png",
    "gallery": [
      "/products/bocaux-en-verre-10-a-160ml.png",
      "/products/bocaux-en-verre-10-a-160ml-1.png",
      "/products/bocaux-en-verre-10-a-160ml-2.png",
      "/products/bocaux-en-verre-10-a-160ml-3.png"
    ],
    "price": 21,
    "variantAxes": [
      "Volume"
    ],
    "variants": [
      {
        "label": "30ml",
        "price": 27,
        "options": [
          {
            "axis": "Volume",
            "value": "30ml"
          }
        ]
      },
      {
        "label": "40ml",
        "price": 32,
        "options": [
          {
            "axis": "Volume",
            "value": "40ml"
          }
        ]
      },
      {
        "label": "41ml - Bouchon Alu'",
        "price": 32,
        "options": [
          {
            "axis": "Volume",
            "value": "41ml - Bouchon Alu'"
          }
        ]
      },
      {
        "label": "60ml",
        "price": 39,
        "options": [
          {
            "axis": "Volume",
            "value": "60ml"
          }
        ]
      },
      {
        "label": "80ml",
        "price": 41,
        "options": [
          {
            "axis": "Volume",
            "value": "80ml"
          }
        ]
      },
      {
        "label": "120ml",
        "price": 43,
        "options": [
          {
            "axis": "Volume",
            "value": "120ml"
          }
        ]
      },
      {
        "label": "160ml",
        "price": 53,
        "options": [
          {
            "axis": "Volume",
            "value": "160ml"
          }
        ]
      },
      {
        "label": "10ml",
        "price": 21,
        "options": [
          {
            "axis": "Volume",
            "value": "10ml"
          }
        ]
      }
    ]
  },
  {
    "id": "blunt-saveur-chanvre",
    "slug": "blunt-saveur-chanvre",
    "name": "Blunt - Saveur chanvre",
    "category": "Feuilles & Autres",
    "description": "",
    "image": "/products/blunt-saveur-chanvre.png",
    "gallery": [
      "/products/blunt-saveur-chanvre.png"
    ],
    "price": 1.8,
    "variantAxes": [],
    "variants": [
      {
        "label": "Blunt - Saveur chanvre",
        "price": 1.8,
        "options": []
      }
    ]
  },
  {
    "id": "blunt-saveur-fraise-kiwi",
    "slug": "blunt-saveur-fraise-kiwi",
    "name": "Blunt - Saveur fraise-kiwi",
    "category": "Feuilles & Autres",
    "description": "",
    "image": "/products/blunt-saveur-fraise-kiwi.png",
    "gallery": [
      "/products/blunt-saveur-fraise-kiwi.png"
    ],
    "price": 1.8,
    "variantAxes": [],
    "variants": [
      {
        "label": "Blunt - Saveur fraise-kiwi",
        "price": 1.8,
        "options": []
      }
    ]
  },
  {
    "id": "blunt-saveur-fruits-des-bois",
    "slug": "blunt-saveur-fruits-des-bois",
    "name": "Blunt - Saveur fruits des bois",
    "category": "Feuilles & Autres",
    "description": "",
    "image": "/products/blunt-saveur-fruits-des-bois.png",
    "gallery": [
      "/products/blunt-saveur-fruits-des-bois.png"
    ],
    "price": 1.8,
    "variantAxes": [],
    "variants": [
      {
        "label": "Blunt - Saveur fruits des bois",
        "price": 1.8,
        "options": []
      }
    ]
  },
  {
    "id": "blunt-saveur-limonade",
    "slug": "blunt-saveur-limonade",
    "name": "Blunt - Saveur limonade",
    "category": "Feuilles & Autres",
    "description": "",
    "image": "/products/blunt-saveur-limonade.png",
    "gallery": [
      "/products/blunt-saveur-limonade.png"
    ],
    "price": 1.8,
    "variantAxes": [],
    "variants": [
      {
        "label": "Blunt - Saveur limonade",
        "price": 1.8,
        "options": []
      }
    ]
  },
  {
    "id": "blunt-saveur-raisin",
    "slug": "blunt-saveur-raisin",
    "name": "Blunt - Saveur raisin",
    "category": "Feuilles & Autres",
    "description": "",
    "image": "/products/blunt-saveur-raisin.png",
    "gallery": [
      "/products/blunt-saveur-raisin.png"
    ],
    "price": 1.8,
    "variantAxes": [],
    "variants": [
      {
        "label": "Blunt - Saveur raisin",
        "price": 1.8,
        "options": []
      }
    ]
  },
  {
    "id": "blunt-saveur-zer0",
    "slug": "blunt-saveur-zer0",
    "name": "Blunt - Saveur Zer0",
    "category": "Feuilles & Autres",
    "description": "",
    "image": "/products/blunt-saveur-zer0.png",
    "gallery": [
      "/products/blunt-saveur-zer0.png"
    ],
    "price": 1.8,
    "variantAxes": [],
    "variants": [
      {
        "label": "Blunt - Saveur Zer0",
        "price": 1.8,
        "options": []
      }
    ]
  },
  {
    "id": "boite-feuilles-slim-beuz",
    "slug": "boite-feuilles-slim-beuz",
    "name": "Boite - Feuilles Slim / BEUZ",
    "category": "Feuilles & Autres",
    "description": "Boîte de feuilles à Rouler Slim BEUZ sont des feuilles ultra-fines et de haute qualité, conçues pour une combustion lente et homogène. Fabriquées à partir de fibres naturelles et dotées d’une gomme arabique 100 % végétale, elles garantissent une expérience de roulage fluide et sans altération du goût. Leur format slim offre une prise en main optimale et une consommation maîtrisée. Idéales pour les amateurs recherchant finesse, légèreté et performance.",
    "image": "/products/boite-feuilles-slim-beuz.png",
    "gallery": [
      "/products/boite-feuilles-slim-beuz.png"
    ],
    "price": 20,
    "variantAxes": [],
    "variants": [
      {
        "label": "Boite - Feuilles Slim / BEUZ",
        "price": 20,
        "options": []
      }
    ]
  },
  {
    "id": "boite-feuilles-slim-cartons-ocb-virgin",
    "slug": "boite-feuilles-slim-cartons-ocb-virgin",
    "name": "Boite - Feuilles Slim + Cartons / OCB Virgin",
    "category": "Feuilles & Autres",
    "description": "Boîte de feuilles à Rouler Slim OCB non blanchies avec cartons sont des feuilles ultra-fines et de haute qualité, conçues pour une combustion lente et homogène. Fabriquées à partir de fibres naturelles et dotées d’une gomme arabique 100 % végétale, elles garantissent une expérience de roulage fluide et sans altération du goût. Leur format slim offre une prise en main optimale et une consommation maîtrisée. Idéales pour les amateurs recherchant finesse, légèreté et performance.",
    "image": "/products/boite-feuilles-slim-cartons-ocb-virgin.png",
    "gallery": [
      "/products/boite-feuilles-slim-cartons-ocb-virgin.png"
    ],
    "price": 40,
    "variantAxes": [],
    "variants": [
      {
        "label": "Boite - Feuilles Slim + Cartons / OCB Virgin",
        "price": 40,
        "options": []
      }
    ]
  },
  {
    "id": "boite-feuilles-slim-ocb",
    "slug": "boite-feuilles-slim-ocb",
    "name": "Boite - Feuilles Slim / OCB",
    "category": "Feuilles & Autres",
    "description": "Boîte de feuilles à Rouler Slim OCB sont des feuilles ultra-fines et de haute qualité, conçues pour une combustion lente et homogène. Fabriquées à partir de fibres naturelles et dotées d’une gomme arabique 100 % végétale, elles garantissent une expérience de roulage fluide et sans altération du goût. Leur format slim offre une prise en main optimale et une consommation maîtrisée. Idéales pour les amateurs recherchant finesse, légèreté et performance.",
    "image": "/products/boite-feuilles-slim-ocb.png",
    "gallery": [
      "/products/boite-feuilles-slim-ocb.png"
    ],
    "price": 40,
    "variantAxes": [],
    "variants": [
      {
        "label": "Boite - Feuilles Slim / OCB",
        "price": 40,
        "options": []
      }
    ]
  },
  {
    "id": "boite-feuilles-slim-ocb-virgin",
    "slug": "boite-feuilles-slim-ocb-virgin",
    "name": "Boite - Feuilles Slim / OCB Virgin",
    "category": "Feuilles & Autres",
    "description": "Boîte de feuilles à Rouler Slim OCB sont des feuilles ultra-fines non blanchies et de haute qualité, conçues pour une combustion lente et homogène. Fabriquées à partir de fibres naturelles et dotées d’une gomme arabique 100 % végétale, elles garantissent une expérience de roulage fluide et sans altération du goût. Leur format slim offre une prise en main optimale et une consommation maîtrisée. Idéales pour les amateurs recherchant finesse, légèreté et performance.",
    "image": "/products/boite-feuilles-slim-ocb-virgin.png",
    "gallery": [
      "/products/boite-feuilles-slim-ocb-virgin.png"
    ],
    "price": 40,
    "variantAxes": [],
    "variants": [
      {
        "label": "Boite - Feuilles Slim / OCB Virgin",
        "price": 40,
        "options": []
      }
    ]
  },
  {
    "id": "boite-filtre-cartons",
    "slug": "boite-filtre-cartons",
    "name": "Boite - Filtre cartons",
    "category": "Feuilles & Autres",
    "description": "Les Filtres Carton sont des embouts rigides utilisés pour rouler et stabiliser une cigarette. Ils offrent une meilleure prise en main, empêchent l’inhalation de résidus et améliorent le confort d’usage. Simples et efficaces, ils sont essentiels pour une expérience de roulage optimale.",
    "image": "/products/boite-filtre-cartons.png",
    "gallery": [
      "/products/boite-filtre-cartons.png",
      "/products/boite-filtre-cartons-1.png"
    ],
    "price": 20,
    "variantAxes": [],
    "variants": [
      {
        "label": "Boite - Filtre cartons",
        "price": 20,
        "options": []
      }
    ]
  },
  {
    "id": "feuilles-slim-beuz",
    "slug": "feuilles-slim-beuz",
    "name": "Feuilles Slim / BEUZ",
    "category": "Feuilles & Autres",
    "description": "Les Feuilles à Rouler Slim BEUZ sont des feuilles ultra-fines et de haute qualité, conçues pour une combustion lente et homogène. Fabriquées à partir de fibres naturelles et dotées d’une gomme arabique 100 % végétale, elles garantissent une expérience de roulage fluide et sans altération du goût. Leur format slim offre une prise en main optimale et une consommation maîtrisée. Idéales pour les amateurs recherchant finesse, légèreté et performance.",
    "image": "/products/feuilles-slim-beuz.png",
    "gallery": [
      "/products/feuilles-slim-beuz.png"
    ],
    "price": 1,
    "variantAxes": [],
    "variants": [
      {
        "label": "Feuilles Slim / BEUZ",
        "price": 1,
        "options": []
      }
    ]
  },
  {
    "id": "feuilles-slim-cartons-ocb",
    "slug": "feuilles-slim-cartons-ocb",
    "name": "Feuilles Slim + Cartons / OCB",
    "category": "Feuilles & Autres",
    "description": "Les Feuilles à Rouler Slim OCB sont des feuilles ultra-fines et de haute qualité, conçues pour une combustion lente et homogène. Fabriquées à partir de fibres naturelles et dotées d’une gomme arabique 100 % végétale, elles garantissent une expérience de roulage fluide et sans altération du goût. Leur format slim offre une prise en main optimale et une consommation maîtrisée. Idéales pour les amateurs recherchant finesse, légèreté et performance.",
    "image": "/products/feuilles-slim-cartons-ocb.png",
    "gallery": [
      "/products/feuilles-slim-cartons-ocb.png"
    ],
    "price": 2.5,
    "variantAxes": [],
    "variants": [
      {
        "label": "Feuilles Slim + Cartons / OCB",
        "price": 2.5,
        "options": []
      }
    ]
  },
  {
    "id": "feuilles-slim-cartons-ocb-virgin",
    "slug": "feuilles-slim-cartons-ocb-virgin",
    "name": "Feuilles Slim + Cartons / OCB Virgin",
    "category": "Feuilles & Autres",
    "description": "Les Feuilles à Rouler Slim OCB sont des feuilles ultra-fines et de haute qualité, conçues pour une combustion lente et homogène. Fabriquées à partir de fibres naturelles et dotées d’une gomme arabique 100 % végétale, elles garantissent une expérience de roulage fluide et sans altération du goût. Leur format slim offre une prise en main optimale et une consommation maîtrisée. Idéales pour les amateurs recherchant finesse, légèreté et performance.",
    "image": "/products/feuilles-slim-cartons-ocb-virgin.png",
    "gallery": [
      "/products/feuilles-slim-cartons-ocb-virgin.png"
    ],
    "price": 2.5,
    "variantAxes": [],
    "variants": [
      {
        "label": "Feuilles Slim + Cartons / OCB Virgin",
        "price": 2.5,
        "options": []
      }
    ]
  },
  {
    "id": "feuilles-slim-chat-roule",
    "slug": "feuilles-slim-chat-roule",
    "name": "Feuilles Slim / CHAT ROULE",
    "category": "Feuilles & Autres",
    "description": "Les Feuilles à Rouler Slim CHAT ROULE sont des feuilles ultra-fines et de haute qualité, conçues pour une combustion lente et homogène. Fabriquées à partir de fibres naturelles et dotées d’une gomme arabique 100 % végétale, elles garantissent une expérience de roulage fluide et sans altération du goût. Leur format slim offre une prise en main optimale et une consommation maîtrisée. Idéales pour les amateurs recherchant finesse, légèreté et performance.",
    "image": "/products/feuilles-slim-chat-roule.png",
    "gallery": [
      "/products/feuilles-slim-chat-roule.png"
    ],
    "price": 1,
    "variantAxes": [],
    "variants": [
      {
        "label": "Feuilles Slim / CHAT ROULE",
        "price": 1,
        "options": []
      }
    ]
  },
  {
    "id": "feuilles-slim-chat-roule-virgin",
    "slug": "feuilles-slim-chat-roule-virgin",
    "name": "Feuilles Slim / CHAT ROULE Virgin",
    "category": "Feuilles & Autres",
    "description": "Les Feuilles à Rouler Slim CHAT ROULE sont des feuilles ultra-fines et de haute qualité, conçues pour une combustion lente et homogène. Fabriquées à partir de fibres naturelles et dotées d’une gomme arabique 100 % végétale, elles garantissent une expérience de roulage fluide et sans altération du goût. Leur format slim offre une prise en main optimale et une consommation maîtrisée. Idéales pour les amateurs recherchant finesse, légèreté et performance.",
    "image": "/products/feuilles-slim-chat-roule-virgin.png",
    "gallery": [
      "/products/feuilles-slim-chat-roule-virgin.png"
    ],
    "price": 1,
    "variantAxes": [],
    "variants": [
      {
        "label": "Feuilles Slim / CHAT ROULE Virgin",
        "price": 1,
        "options": []
      }
    ]
  },
  {
    "id": "feuilles-slim-longues-cartons-ocb-virgin",
    "slug": "feuilles-slim-longues-cartons-ocb-virgin",
    "name": "Feuilles Slim Longues + Cartons / OCB Virgin",
    "category": "Feuilles & Autres",
    "description": "Les Feuilles à Rouler Slim OCB sont des feuilles ultra-fines et de haute qualité, conçues pour une combustion lente et homogène. Fabriquées à partir de fibres naturelles et dotées d’une gomme arabique 100 % végétale, elles garantissent une expérience de roulage fluide et sans altération du goût. Leur format slim offre une prise en main optimale et une consommation maîtrisée. Idéales pour les amateurs recherchant finesse, légèreté et performance.",
    "image": "/products/feuilles-slim-longues-cartons-ocb-virgin.png",
    "gallery": [
      "/products/feuilles-slim-longues-cartons-ocb-virgin.png",
      "/products/feuilles-slim-longues-cartons-ocb-virgin-1.png"
    ],
    "price": 3.5,
    "variantAxes": [],
    "variants": [
      {
        "label": "Feuilles Slim Longues + Cartons / OCB Virgin",
        "price": 3.5,
        "options": []
      }
    ]
  },
  {
    "id": "feuilles-slim-ocb",
    "slug": "feuilles-slim-ocb",
    "name": "Feuilles Slim / OCB",
    "category": "Feuilles & Autres",
    "description": "Les Feuilles à Rouler Slim OCB  sont des feuilles ultra-fines et de haute qualité, conçues pour une combustion lente et homogène. Fabriquées à partir de fibres naturelles et dotées d’une gomme arabique 100 % végétale, elles garantissent une expérience de roulage fluide et sans altération du goût. Leur format slim offre une prise en main optimale et une consommation maîtrisée. Idéales pour les amateurs recherchant finesse, légèreté et performance.",
    "image": "/products/feuilles-slim-ocb.png",
    "gallery": [
      "/products/feuilles-slim-ocb.png"
    ],
    "price": 1.5,
    "variantAxes": [],
    "variants": [
      {
        "label": "Feuilles Slim / OCB",
        "price": 1.5,
        "options": []
      }
    ]
  },
  {
    "id": "feuilles-slim-ocb-virgin",
    "slug": "feuilles-slim-ocb-virgin",
    "name": "Feuilles Slim / OCB Virgin",
    "category": "Feuilles & Autres",
    "description": "Les Feuilles à Rouler Slim OCB non blanchies sont des feuilles ultra-fines et de haute qualité, conçues pour une combustion lente et homogène. Fabriquées à partir de fibres naturelles et dotées d’une gomme arabique 100 % végétale, elles garantissent une expérience de roulage fluide et sans altération du goût. Leur format slim offre une prise en main optimale et une consommation maîtrisée. Idéales pour les amateurs recherchant finesse, légèreté et performance.",
    "image": "/products/feuilles-slim-ocb-virgin.png",
    "gallery": [
      "/products/feuilles-slim-ocb-virgin.png"
    ],
    "price": 1.5,
    "variantAxes": [],
    "variants": [
      {
        "label": "Feuilles Slim / OCB Virgin",
        "price": 1.5,
        "options": []
      }
    ]
  },
  {
    "id": "filtre-carton-ocb",
    "slug": "filtre-carton-ocb",
    "name": "Filtre carton / OCB",
    "category": "Feuilles & Autres",
    "description": "Les Filtres Carton (x50) sont des embouts rigides utilisés pour rouler et stabiliser une cigarette. Ils offrent une meilleure prise en main, empêchent l’inhalation de résidus et améliorent le confort d’usage. Simples et efficaces, ils sont essentiels pour une expérience de roulage optimale.\nUne unité contient 50 cartons",
    "image": "/products/filtre-carton-ocb.png",
    "gallery": [
      "/products/filtre-carton-ocb.png",
      "/products/filtre-carton-ocb-1.png"
    ],
    "price": 1,
    "variantAxes": [],
    "variants": [
      {
        "label": "Filtre carton / OCB",
        "price": 1,
        "options": []
      }
    ]
  },
  {
    "id": "rolls-ocb",
    "slug": "rolls-ocb",
    "name": "Rolls / OCB",
    "category": "Feuilles & Autres",
    "description": "",
    "image": "/products/rolls-ocb.png",
    "gallery": [
      "/products/rolls-ocb.png"
    ],
    "price": 2,
    "variantAxes": [],
    "variants": [
      {
        "label": "Rolls / OCB",
        "price": 2,
        "options": []
      }
    ]
  },
  {
    "id": "lot-feuilles-briquet",
    "slug": "lot-feuilles-briquet",
    "name": "LOT - Feuilles + Briquet",
    "category": "Feuilles & Autres",
    "description": "Sac de 50 lot feuilles slim (de la marque CHAT ROULE) + un briquet générique",
    "image": "/products/lot-feuilles-briquet.png",
    "gallery": [
      "/products/lot-feuilles-briquet.png",
      "/products/lot-feuilles-briquet-1.png"
    ],
    "price": 30,
    "variantAxes": [],
    "variants": [
      {
        "label": "LOT - Feuilles + Briquet",
        "price": 30,
        "options": []
      }
    ]
  },
  {
    "id": "broyeur-electrique",
    "slug": "broyeur-electrique",
    "name": "Broyeur électrique",
    "category": "Grinders",
    "description": "Le Grinder électronique est un accessoire conçu pour effriter efficacement les herbes sèches. Doté de dents aiguisées et d’un mécanisme simple, il assure un broyage homogène en quelques tours. Compact et pratique, il est idéal pour une préparation rapide et sans effort.",
    "image": "/products/broyeur-electrique.png",
    "gallery": [
      "/products/broyeur-electrique.png"
    ],
    "price": 10,
    "variantAxes": [],
    "variants": [
      {
        "label": "Broyeur électrique",
        "price": 10,
        "options": []
      }
    ]
  },
  {
    "id": "grinder-beuz",
    "slug": "grinder-beuz",
    "name": "Grinder BEUZ",
    "category": "Grinders",
    "description": "Le Grinder Beuz Organique Marron est un broyeur écologique de 50mm, fabriqué en chanvre recyclable. Simple d'utilisation et durable, il est composé de 3 parties avec un compartiment de rangement discret, idéal pour vos herbes et épices.\n- Grinder Chanvre Recyclable\n- Compartiment Rangement Discret",
    "image": "/products/grinder-beuz.png",
    "gallery": [
      "/products/grinder-beuz.png",
      "/products/grinder-beuz-1.png",
      "/products/grinder-beuz-2.png"
    ],
    "price": 3.5,
    "variantAxes": [],
    "variants": [
      {
        "label": "Grinder BEUZ",
        "price": 3.5,
        "options": []
      }
    ]
  },
  {
    "id": "grinder-metal-avec-reservoir",
    "slug": "grinder-metal-avec-reservoir",
    "name": "Grinder métal avec réservoir",
    "category": "Grinders",
    "description": "Le Grinder en métal est un accessoire conçu pour effriter efficacement les herbes sèches, le thé, etc... Doté de dents aiguisées et d’un mécanisme simple, il assure un broyage homogène en quelques tours. Compact et pratique, il est idéal pour une préparation rapide et sans effort.",
    "image": "/products/grinder-metal-avec-reservoir.png",
    "gallery": [
      "/products/grinder-metal-avec-reservoir.png",
      "/products/grinder-metal-avec-reservoir-1.png",
      "/products/grinder-metal-avec-reservoir-2.png",
      "/products/grinder-metal-avec-reservoir-3.png"
    ],
    "price": 10,
    "variantAxes": [
      "Couleurs"
    ],
    "variants": [
      {
        "label": "Noir",
        "price": 10,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Noir"
          }
        ]
      },
      {
        "label": "Gold",
        "price": 10,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Gold"
          }
        ]
      },
      {
        "label": "Silver",
        "price": 10,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Silver"
          }
        ]
      },
      {
        "label": "Rouge",
        "price": 10,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Rouge"
          }
        ]
      },
      {
        "label": "Bleu",
        "price": 10,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Bleu"
          }
        ]
      },
      {
        "label": "Vert",
        "price": 10,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      },
      {
        "label": "Rose",
        "price": 10,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Rose"
          }
        ]
      }
    ]
  },
  {
    "id": "grinder-poker",
    "slug": "grinder-poker",
    "name": "Grinder POKER",
    "category": "Grinders",
    "description": "Le Grinder est un accessoire conçu pour effriter efficacement les herbes sèches. Doté de dents aiguisées et d’un mécanisme simple, il assure un broyage homogène en quelques tours. Compact et pratique, il est idéal pour une préparation rapide et sans effort.",
    "image": "/products/grinder-poker.png",
    "gallery": [
      "/products/grinder-poker.png",
      "/products/grinder-poker-1.png",
      "/products/grinder-poker-2.png",
      "/products/grinder-poker-3.png"
    ],
    "price": 7.5,
    "variantAxes": [
      "Couleurs"
    ],
    "variants": [
      {
        "label": "Noir",
        "price": 7.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Noir"
          }
        ]
      },
      {
        "label": "Rouge",
        "price": 7.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Rouge"
          }
        ]
      },
      {
        "label": "Vert",
        "price": 7.5,
        "options": [
          {
            "axis": "Couleurs",
            "value": "Vert"
          }
        ]
      }
    ]
  },
  {
    "id": "maxi-grinder",
    "slug": "maxi-grinder",
    "name": "Maxi Grinder",
    "category": "Grinders",
    "description": "Le Grinder est un accessoire conçu pour effriter efficacement les herbes sèches. Doté de dents aiguisées et d’un mécanisme simple, il assure un broyage homogène en quelques tours. Compact et pratique, il est idéal pour une préparation rapide et sans effort.",
    "image": "/products/maxi-grinder.png",
    "gallery": [
      "/products/maxi-grinder.png"
    ],
    "price": 2,
    "variantAxes": [
      "Option"
    ],
    "variants": [
      {
        "label": "1 unité",
        "price": 2,
        "options": [
          {
            "axis": "Option",
            "value": "1 unité"
          }
        ]
      },
      {
        "label": "12 unités",
        "price": 24,
        "options": [
          {
            "axis": "Option",
            "value": "12 unités"
          }
        ]
      }
    ]
  },
  {
    "id": "mini-grinder",
    "slug": "mini-grinder",
    "name": "Mini Grinder",
    "category": "Grinders",
    "description": "Le Grinder est un accessoire conçu pour effriter efficacement les herbes sèches. Doté de dents aiguisées et d’un mécanisme simple, il assure un broyage homogène en quelques tours. Compact et pratique, il est idéal pour une préparation rapide et sans effort.",
    "image": "/products/mini-grinder.png",
    "gallery": [
      "/products/mini-grinder.png"
    ],
    "price": 1,
    "variantAxes": [
      "Option"
    ],
    "variants": [
      {
        "label": "48 unités",
        "price": 28,
        "options": [
          {
            "axis": "Option",
            "value": "48 unités"
          }
        ]
      },
      {
        "label": "1 unité",
        "price": 1,
        "options": [
          {
            "axis": "Option",
            "value": "1 unité"
          }
        ]
      }
    ]
  },
  {
    "id": "briquet-clipper",
    "slug": "briquet-clipper",
    "name": "Briquet CLIPPER",
    "category": "Briquets",
    "description": "Le Briquet Cricket est un accessoire pratique et fiable, conçu pour allumer en toute simplicité. Compact et rechargeable ou jetable, il offre une flamme stable et sécurisée. Idéal pour un usage quotidien, il allie fonctionnalité et durabilité.\nVendu à l'unité, coloris non-personnalisable.",
    "image": "/products/briquet-clipper.png",
    "gallery": [
      "/products/briquet-clipper.png"
    ],
    "price": 2,
    "variantAxes": [],
    "variants": [
      {
        "label": "Briquet CLIPPER",
        "price": 2,
        "options": []
      }
    ]
  },
  {
    "id": "briquet-simple",
    "slug": "briquet-simple",
    "name": "Briquet simple",
    "category": "Briquets",
    "description": "Le Briquet Cricket est un accessoire pratique et fiable, conçu pour allumer en toute simplicité. Compact et rechargeable ou jetable, il offre une flamme stable et sécurisée. Idéal pour un usage quotidien, il allie fonctionnalité et durabilité.\nVendu à l'unité, coloris non-personnalisable.",
    "image": "/products/briquet-simple.png",
    "gallery": [
      "/products/briquet-simple.png"
    ],
    "price": 0.5,
    "variantAxes": [],
    "variants": [
      {
        "label": "Briquet simple",
        "price": 0.5,
        "options": []
      }
    ]
  },
  {
    "id": "boite-briquets-bic-bx7",
    "slug": "boite-briquets-bic-bx7",
    "name": "Boite - Briquets BIC BX7",
    "category": "Briquets",
    "description": "Boite de 50 unités",
    "image": "/products/boite-briquets-bic-bx7.png",
    "gallery": [
      "/products/boite-briquets-bic-bx7.png"
    ],
    "price": 50,
    "variantAxes": [],
    "variants": [
      {
        "label": "Boite - Briquets BIC BX7",
        "price": 50,
        "options": []
      }
    ]
  },
  {
    "id": "boite-briquets-clipper",
    "slug": "boite-briquets-clipper",
    "name": "Boite - Briquets CLIPPER",
    "category": "Briquets",
    "description": "Lot de 48 unités",
    "image": "/products/boite-briquets-clipper.png",
    "gallery": [
      "/products/boite-briquets-clipper.png"
    ],
    "price": 65,
    "variantAxes": [],
    "variants": [
      {
        "label": "Boite - Briquets CLIPPER",
        "price": 65,
        "options": []
      }
    ]
  },
  {
    "id": "boite-briquets-cricket",
    "slug": "boite-briquets-cricket",
    "name": "Boite - Briquets Cricket",
    "category": "Briquets",
    "description": "Boite de 50 unités",
    "image": "/products/boite-briquets-cricket.png",
    "gallery": [
      "/products/boite-briquets-cricket.png"
    ],
    "price": 39,
    "variantAxes": [],
    "variants": [
      {
        "label": "Boite - Briquets Cricket",
        "price": 39,
        "options": []
      }
    ]
  },
  {
    "id": "boite-briquet-simple",
    "slug": "boite-briquet-simple",
    "name": "Boite - Briquet simple",
    "category": "Briquets",
    "description": "Boite de 50 unités",
    "image": "/products/boite-briquet-simple.png",
    "gallery": [
      "/products/boite-briquet-simple.png"
    ],
    "price": 10,
    "variantAxes": [],
    "variants": [
      {
        "label": "Boite - Briquet simple",
        "price": 10,
        "options": []
      }
    ]
  },
  {
    "id": "vaporisateur-smono-3",
    "slug": "vaporisateur-smono-3",
    "name": "Vaporisateur SMONO 3",
    "category": "Vaporisateurs",
    "description": "",
    "image": "/products/vaporisateur-smono-3.png",
    "gallery": [
      "/products/vaporisateur-smono-3.png",
      "/products/vaporisateur-smono-3-1.png",
      "/products/vaporisateur-smono-3-2.png"
    ],
    "price": 89.9,
    "variantAxes": [],
    "variants": [
      {
        "label": "Vaporisateur SMONO 3",
        "price": 89.9,
        "options": []
      }
    ]
  },
  {
    "id": "vaporisateur-smono-5",
    "slug": "vaporisateur-smono-5",
    "name": "Vaporisateur SMONO 5",
    "category": "Vaporisateurs",
    "description": "",
    "image": "/products/vaporisateur-smono-5.png",
    "gallery": [
      "/products/vaporisateur-smono-5.png",
      "/products/vaporisateur-smono-5-1.png"
    ],
    "price": 119.9,
    "variantAxes": [],
    "variants": [
      {
        "label": "Vaporisateur SMONO 5",
        "price": 119.9,
        "options": []
      }
    ]
  },
  {
    "id": "vaporisateur-smono-basic",
    "slug": "vaporisateur-smono-basic",
    "name": "Vaporisateur SMONO Basic",
    "category": "Vaporisateurs",
    "description": "",
    "image": "/products/vaporisateur-smono-basic.png",
    "gallery": [
      "/products/vaporisateur-smono-basic.png",
      "/products/vaporisateur-smono-basic-1.png",
      "/products/vaporisateur-smono-basic-2.png"
    ],
    "price": 89.9,
    "variantAxes": [],
    "variants": [
      {
        "label": "Vaporisateur SMONO Basic",
        "price": 89.9,
        "options": []
      }
    ]
  },
  {
    "id": "agrafes",
    "slug": "agrafes",
    "name": "Agrafes",
    "category": "Fournitures",
    "description": "Les Agrafes sont des attaches métalliques conçues pour fixer solidement des documents ou divers matériaux à l’aide d’une agrafeuse. Résistantes et polyvalentes, elles assurent une tenue fiable et durable. Disponibles en plusieurs tailles et formats, elles s’adaptent à différents types d’agrafage, que ce soit pour un usage bureautique, scolaire ou industriel. Essentielles pour une organisation efficace, elles garantissent une finition nette et professionnelle.\nChoix :\nN°10 : Adapté a des petites agrafeuses\n24/6 : Adapté aux agrafeuses standard (moyenne agrafeuse, grande agrafeuse)",
    "image": "/products/agrafes.png",
    "gallery": [
      "/products/agrafes.png",
      "/products/agrafes-1.png"
    ],
    "price": 2,
    "variantAxes": [
      "Type d'agrafes"
    ],
    "variants": [
      {
        "label": "N°10",
        "price": 2,
        "options": [
          {
            "axis": "Type d'agrafes",
            "value": "N°10"
          }
        ]
      },
      {
        "label": "24/6",
        "price": 3,
        "options": [
          {
            "axis": "Type d'agrafes",
            "value": "24/6"
          }
        ]
      }
    ]
  },
  {
    "id": "agrafeuse-moyenne",
    "slug": "agrafeuse-moyenne",
    "name": "Agrafeuse moyenne",
    "category": "Fournitures",
    "description": "Les Agrafeuses sont des outils essentiels pour assembler rapidement et solidement des documents ou divers matériaux. Ergonomiques et faciles à utiliser, elles garantissent une fixation efficace grâce à un mécanisme précis et robuste. Disponibles en différents formats, elles s’adaptent aussi bien à un usage bureautique, scolaire que professionnel. Fiables et durables, elles assurent une organisation optimale au quotidien.",
    "image": "/products/agrafeuse-moyenne.png",
    "gallery": [
      "/products/agrafeuse-moyenne.png"
    ],
    "price": 7.5,
    "variantAxes": [],
    "variants": [
      {
        "label": "Agrafeuse moyenne",
        "price": 7.5,
        "options": []
      }
    ]
  },
  {
    "id": "grande-agrafeuse",
    "slug": "grande-agrafeuse",
    "name": "Grande agrafeuse",
    "category": "Fournitures",
    "description": "Les Agrafeuses sont des outils essentiels pour assembler rapidement et solidement des documents ou divers matériaux. Ergonomiques et faciles à utiliser, elles garantissent une fixation efficace grâce à un mécanisme précis et robuste. Disponibles en différents formats, elles s’adaptent aussi bien à un usage bureautique, scolaire que professionnel. Fiables et durables, elles assurent une organisation optimale au quotidien.",
    "image": "/products/grande-agrafeuse.png",
    "gallery": [
      "/products/grande-agrafeuse.png"
    ],
    "price": 7.5,
    "variantAxes": [],
    "variants": [
      {
        "label": "Grande agrafeuse",
        "price": 7.5,
        "options": []
      }
    ]
  },
  {
    "id": "mini-agrafeuse-agrafes",
    "slug": "mini-agrafeuse-agrafes",
    "name": "Mini agrafeuse + Agrafes",
    "category": "Fournitures",
    "description": "Les Agrafeuses sont des outils essentiels pour assembler rapidement et solidement des documents ou divers matériaux. Ergonomiques et faciles à utiliser, elles garantissent une fixation efficace grâce à un mécanisme précis et robuste. Disponibles en différents formats, elles s’adaptent aussi bien à un usage bureautique, scolaire que professionnel. Fiables et durables, elles assurent une organisation optimale au quotidien.\nContenu du lot :\nUne mini-agrafeuse + 50 agrafes",
    "image": "/products/mini-agrafeuse-agrafes.png",
    "gallery": [
      "/products/mini-agrafeuse-agrafes.png",
      "/products/mini-agrafeuse-agrafes-1.png"
    ],
    "price": 2.5,
    "variantAxes": [],
    "variants": [
      {
        "label": "Mini agrafeuse + Agrafes",
        "price": 2.5,
        "options": []
      }
    ]
  },
  {
    "id": "marqueur-bic",
    "slug": "marqueur-bic",
    "name": "Marqueur BIC",
    "category": "Fournitures",
    "description": "",
    "image": "/products/marqueur-bic.png",
    "gallery": [
      "/products/marqueur-bic.png"
    ],
    "price": 1.5,
    "variantAxes": [],
    "variants": [
      {
        "label": "Marqueur BIC",
        "price": 1.5,
        "options": []
      }
    ]
  },
  {
    "id": "elastique-25-32-38mm",
    "slug": "elastique-25-32-38mm",
    "name": "Elastique (25, 32, 38mm)",
    "category": "Fournitures",
    "description": "Les Élastiques sont des accessoires polyvalents conçus pour regrouper, attacher ou sécuriser divers objets. Fabriqués en caoutchouc résistant, ils offrent une excellente élasticité et s’adaptent à de nombreux usages.\nDisponibles en différentes tailles et épaisseurs, ils garantissent une fixation pratique et réutilisable pour un rangement organisé et efficace.\nVendu par lot de 100.",
    "image": "/products/elastique-25-32-38mm.png",
    "gallery": [
      "/products/elastique-25-32-38mm.png"
    ],
    "price": 1.5,
    "variantAxes": [
      "Dimension"
    ],
    "variants": [
      {
        "label": "25mm",
        "price": 1.5,
        "options": [
          {
            "axis": "Dimension",
            "value": "25mm"
          }
        ]
      },
      {
        "label": "38mm",
        "price": 2.5,
        "options": [
          {
            "axis": "Dimension",
            "value": "38mm"
          }
        ]
      },
      {
        "label": "32mm",
        "price": 2,
        "options": [
          {
            "axis": "Dimension",
            "value": "32mm"
          }
        ]
      }
    ]
  },
  {
    "id": "papier-sulfurise",
    "slug": "papier-sulfurise",
    "name": "Papier sulfurisé",
    "category": "Fournitures",
    "description": "Vendu par feuille de 40x40cm",
    "image": "/products/papier-sulfurise.png",
    "gallery": [
      "/products/papier-sulfurise.png"
    ],
    "price": 0.5,
    "variantAxes": [],
    "variants": [
      {
        "label": "Papier sulfurisé",
        "price": 0.5,
        "options": []
      }
    ]
  },
  {
    "id": "piles-aaa",
    "slug": "piles-aaa",
    "name": "Piles AAA",
    "category": "Fournitures",
    "description": "Les Piles AAA sont des sources d’énergie compactes et puissantes, idéales pour alimenter une large gamme d’appareils du quotidien. Fiables et durables, elles assurent une performance optimale pour les télécommandes, jouets, lampes et autres équipements électroniques.\nLot de 2 piles",
    "image": null,
    "gallery": [],
    "price": 2,
    "variantAxes": [],
    "variants": [
      {
        "label": "Piles AAA",
        "price": 2,
        "options": []
      }
    ]
  },
  {
    "id": "balance-de-poche",
    "slug": "balance-de-poche",
    "name": "Balance de poche",
    "category": "Fournitures",
    "description": "La Balance de Poche 0,01g est un instrument de pesée ultra-précis, idéal pour mesurer de petites quantités avec une grande exactitude. Compacte et facile à transporter, elle offre une lecture rapide et fiable grâce à son écran numérique. Dotée d’un plateau robuste et d’une fonction de tare, elle convient parfaitement pour les usages professionnels nécessitant une précision au centième de gramme, comme la pesée d’épices, de bijoux ou de substances fines.",
    "image": "/products/balance-de-poche.png",
    "gallery": [
      "/products/balance-de-poche.png"
    ],
    "price": 10,
    "variantAxes": [],
    "variants": [
      {
        "label": "Balance de poche",
        "price": 10,
        "options": []
      }
    ]
  },
  {
    "id": "balance-professionnelle",
    "slug": "balance-professionnelle",
    "name": "Balance professionnelle",
    "category": "Fournitures",
    "description": "La Balance de Poche Professionnelle 0,01g est un instrument de pesée ultra-précis, idéal pour mesurer de petites quantités avec une grande exactitude. Compacte et facile à transporter, elle offre une lecture rapide et fiable grâce à son écran numérique. Dotée d’un plateau robuste et d’une fonction de tare, elle convient parfaitement pour les usages professionnels nécessitant une précision au centième de gramme, comme la pesée d’épices, de bijoux ou de substances fines.",
    "image": "/products/balance-professionnelle.png",
    "gallery": [
      "/products/balance-professionnelle.png"
    ],
    "price": 15,
    "variantAxes": [],
    "variants": [
      {
        "label": "Balance professionnelle",
        "price": 15,
        "options": []
      }
    ]
  },
  {
    "id": "balance-superieure",
    "slug": "balance-superieure",
    "name": "Balance supérieure",
    "category": "Fournitures",
    "description": "La Balance supérieur allie précision, élégance et performance. Dotée d’une surface en acier inoxydable, d’un écran LCD clair et d’une fonction tare intelligente, elle offre une mesure fiable au gramme près. Compacte, moderne et polyvalente, elle s’adapte à toutes vos pesées du quotidien.",
    "image": "/products/balance-superieure.png",
    "gallery": [
      "/products/balance-superieure.png"
    ],
    "price": 15,
    "variantAxes": [],
    "variants": [
      {
        "label": "Balance supérieure",
        "price": 15,
        "options": []
      }
    ]
  },
  {
    "id": "etiquettes-de-securite-holographiques",
    "slug": "etiquettes-de-securite-holographiques",
    "name": "Étiquettes de sécurité holographiques",
    "category": "Fournitures",
    "description": "Assurez l’intégrité de vos produits grâce à nos étiquettes de sécurité holographiques, spécialement conçues pour prouver qu’un emballage n’a jamais été ouvert. Une fois posées, ces étiquettes agissent comme un scellé inviolable : toute tentative d’ouverture laisse une marque visible (motif VOID, délamination ou déchirure), rendant impossible une réutilisation ou une manipulation discrète.\nL’effet holographique brillant rend l’étiquette immédiatement identifiable, renforçant la confiance du client et la protection de vos produits. Elles adhèrent fortement sur de nombreuses surfaces : boîtes, sachets, flacons, enveloppes, appareils électroniques, documents scellés, etc.\nCaractéristiques principales\n- Scellé inviolable : laisse une marque claire en cas d’ouverture\n- Effet holographique facilement reconnaissable\n- Impossibles à retirer sans trace\n- Adhérence forte sur la plupart des matériaux",
    "image": "/products/etiquettes-de-securite-holographiques.png",
    "gallery": [
      "/products/etiquettes-de-securite-holographiques.png"
    ],
    "price": 1.5,
    "variantAxes": [
      "Quantité"
    ],
    "variants": [
      {
        "label": "Feuille de 45",
        "price": 1.5,
        "options": [
          {
            "axis": "Quantité",
            "value": "Feuille de 45"
          }
        ]
      },
      {
        "label": "1000",
        "price": 30,
        "options": [
          {
            "axis": "Quantité",
            "value": "1000"
          }
        ]
      }
    ]
  },
  {
    "id": "gants-jetables",
    "slug": "gants-jetables",
    "name": "Gants jetables",
    "category": "Hygiène",
    "description": "Les Gants en Latex (x100) offrent une protection souple et résistante pour diverses utilisations, qu’elles soient médicales, industrielles ou domestiques. Ajustés et confortables, ils assurent une excellente dextérité tout en limitant les risques de contamination et d’irritation.\nTaille M ou L\nUne boite = 100 gants.",
    "image": "/products/gants-jetables.png",
    "gallery": [
      "/products/gants-jetables.png",
      "/products/gants-jetables-1.png",
      "/products/gants-jetables-2.png"
    ],
    "price": 10,
    "variantAxes": [
      "Taille"
    ],
    "variants": [
      {
        "label": "M",
        "price": 10,
        "options": [
          {
            "axis": "Taille",
            "value": "M"
          }
        ]
      },
      {
        "label": "L",
        "price": 10,
        "options": [
          {
            "axis": "Taille",
            "value": "L"
          }
        ]
      }
    ]
  },
  {
    "id": "spray-kleaner",
    "slug": "spray-kleaner",
    "name": "Spray Kleaner",
    "category": "Hygiène",
    "description": "Le spray Kleaner 100ml est une solution de nettoyage multifonctionnelle conçue pour maintenir la bouche, la peau et les surfaces impeccablement propres.\n- Polyvalence : nettoie la bouche, la peau et diverses surfaces, offrant une solution tout-en-un.\n- Efficacité : élimine complètement les traces de consommation et assure une propreté durable.\n- Facilité d'utilisation : vaporisez simplement sur la zone concernée et rincez ou essuyez après 5 à 15 minutes.\n- Durée d'efficacité : maintient la propreté de la salive et de la peau jusqu'à une heure et des surfaces jusqu'à la prochaine contamination.\n- Sécurité et qualité : 100% organique, peut être avalé sans crainte, et contient de l'alcool pour une efficacité maximale.\nRéservé aux adultes, interdit aux mineurs et aux femmes enceintes.\nÀ conserver dans un endroit frais et sec, à l'abri de la lumière directe du soleil et de l'humidité.",
    "image": "/products/spray-kleaner.png",
    "gallery": [
      "/products/spray-kleaner.png"
    ],
    "price": 21,
    "variantAxes": [],
    "variants": [
      {
        "label": "Spray Kleaner",
        "price": 21,
        "options": []
      }
    ]
  },
  {
    "id": "test-salivaire",
    "slug": "test-salivaire",
    "name": "Test salivaire",
    "category": "Hygiène",
    "description": "Ce test salivaire pour le dépistage du Cannabis est disponible en vue de faire de la prévention et ne permet pas de contourner la législation en vigueur.\nNe buvez pas et ne fumez pas si vous prenez le volant.\nVente définitive – Non retournable",
    "image": "/products/test-salivaire.png",
    "gallery": [
      "/products/test-salivaire.png"
    ],
    "price": 10,
    "variantAxes": [],
    "variants": [
      {
        "label": "Test salivaire",
        "price": 10,
        "options": []
      }
    ]
  },
  {
    "id": "substitut-de-tabac-apaisant",
    "slug": "substitut-de-tabac-apaisant",
    "name": "Substitut de tabac / Apaisant",
    "category": "Hygiène",
    "description": "",
    "image": "/products/substitut-de-tabac-apaisant.png",
    "gallery": [
      "/products/substitut-de-tabac-apaisant.png",
      "/products/substitut-de-tabac-apaisant-1.png"
    ],
    "price": 14.9,
    "variantAxes": [],
    "variants": [
      {
        "label": "Substitut de tabac / Apaisant",
        "price": 14.9,
        "options": []
      }
    ]
  }
]

export const categories: string[] = [
  "Capsules & Fusées",
  "Tubes & Pop-top",
  "Sachets ZIP",
  "Produits en verres",
  "Feuilles & Autres",
  "Grinders",
  "Briquets",
  "Vaporisateurs",
  "Fournitures",
  "Hygiène"
]
