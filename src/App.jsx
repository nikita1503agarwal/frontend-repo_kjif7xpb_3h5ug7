import React, { useMemo, useState } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Category from './pages/Category'
import AdvicePage from './pages/AdvicePage'
import InspirationPage from './pages/InspirationPage'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import CartDrawer from './components/CartDrawer'
import { CartProvider, useCart } from './context/CartContext'
import { products } from './data/products'

function AppShell() {
  const [cartOpen, setCartOpen] = useState(false)
  const { dispatch } = useCart()
  const location = useLocation()

  const addToCart = (p) => {
    dispatch({
      type: 'ADD',
      item: {
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image,
        quantity: 1,
        variant: 'Standaard',
      },
    })
    setCartOpen(true)
  }

  const routeCategory = (path) => {
    switch (path) {
      case '/category/paving':
        return 'paving'
      case '/category/stones':
        return 'stones'
      case '/category/gravel':
        return 'gravel'
      case '/category/accessories':
        return 'accessories'
      default:
        return null
    }
  }

  const categoryType = useMemo(() => routeCategory(location.pathname), [location.pathname])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <Routes>
        <Route index element={<Home onAdd={addToCart} />} />
        <Route path="/category/paving" element={<Category type="paving" onAdd={addToCart} />} />
        <Route path="/category/stones" element={<Category type="stones" onAdd={addToCart} />} />
        <Route path="/category/gravel" element={<Category type="gravel" onAdd={addToCart} />} />
        <Route path="/category/accessories" element={<Category type="accessories" onAdd={addToCart} />} />
        <Route path="/advice" element={<AdvicePage />} />
        <Route path="/inspiration" element={<InspirationPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <AppShell />
    </CartProvider>
  )
}
