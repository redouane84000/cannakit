import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  type ReactNode,
  type Dispatch,
} from 'react'
import type { Product, Variant } from '../data/products'
import { variantKey, type CartAction, type CartState } from '../types'

const initialState: CartState = { items: [], isOpen: false }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const key = variantKey(action.product.slug, action.variant)
      const existing = state.items.find((i) => i.key === key)
      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + action.quantity } : i,
          ),
        }
      }
      return {
        ...state,
        isOpen: true,
        items: [
          ...state.items,
          { key, product: action.product, variant: action.variant, quantity: action.quantity },
        ],
      }
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.key !== action.key) }
    case 'UPDATE_QTY': {
      if (action.quantity <= 0) return { ...state, items: state.items.filter((i) => i.key !== action.key) }
      return {
        ...state,
        items: state.items.map((i) => (i.key === action.key ? { ...i, quantity: action.quantity } : i)),
      }
    }
    case 'CLEAR':
      return { ...state, items: [] }
    case 'TOGGLE_CART':
      return { ...state, isOpen: action.open ?? !state.isOpen }
    default:
      return state
  }
}

interface CartContextValue {
  state: CartState
  dispatch: Dispatch<CartAction>
  total: number
  itemCount: number
  addToCart: (product: Product, variant: Variant, quantity?: number) => void
  removeItem: (key: string) => void
  updateQty: (key: string, quantity: number) => void
  clearCart: () => void
  toggleCart: (open?: boolean) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const total = useMemo(
    () => state.items.reduce((s, i) => s + i.variant.price * i.quantity, 0),
    [state.items],
  )
  const itemCount = useMemo(() => state.items.reduce((s, i) => s + i.quantity, 0), [state.items])

  const value = useMemo<CartContextValue>(
    () => ({
      state,
      dispatch,
      total,
      itemCount,
      addToCart: (product, variant, quantity = 1) => dispatch({ type: 'ADD', product, variant, quantity }),
      removeItem: (key) => dispatch({ type: 'REMOVE_ITEM', key }),
      updateQty: (key, quantity) => dispatch({ type: 'UPDATE_QTY', key, quantity }),
      clearCart: () => dispatch({ type: 'CLEAR' }),
      toggleCart: (open) => dispatch({ type: 'TOGGLE_CART', open }),
    }),
    [state, total, itemCount],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
