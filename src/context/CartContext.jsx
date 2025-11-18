import React, { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

const initialState = {
  items: [], // { id, name, price, image, quantity, variant }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { item } = action
      const idx = state.items.findIndex(
        (i) => i.id === item.id && i.variant === item.variant
      )
      let items
      if (idx >= 0) {
        items = state.items.map((i, n) =>
          n === idx ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      } else {
        items = [...state.items, item]
      }
      return { ...state, items }
    }
    case 'REMOVE': {
      return { ...state, items: state.items.filter((i) => i.id !== action.id) }
    }
    case 'UPDATE_QTY': {
      const items = state.items.map((i) =>
        i.id === action.id ? { ...i, quantity: Math.max(1, action.quantity) } : i
      )
      return { ...state, items }
    }
    case 'CLEAR':
      return initialState
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const totals = useMemo(() => {
    const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
    const shipping = subtotal > 250 ? 0 : subtotal > 0 ? 24.95 : 0
    const tax = subtotal * 0.21
    const total = subtotal + shipping + tax
    return { subtotal, shipping, tax, total }
  }, [state.items])

  const value = useMemo(
    () => ({ state, dispatch, totals }),
    [state, totals]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
