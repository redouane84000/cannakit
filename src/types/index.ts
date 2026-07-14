import type { Product, Variant } from '../data/products'

export interface CartItem {
  key: string
  product: Product
  variant: Variant
  quantity: number
}

export interface CartState {
  items: CartItem[]
  isOpen: boolean
}

export type CartAction =
  | { type: 'ADD'; product: Product; variant: Variant; quantity: number }
  | { type: 'REMOVE_ITEM'; key: string }
  | { type: 'UPDATE_QTY'; key: string; quantity: number }
  | { type: 'CLEAR' }
  | { type: 'TOGGLE_CART'; open?: boolean }

export function variantKey(slug: string, variant: Variant): string {
  return `${slug}|${variant.label}`
}
