import React, { useMemo, useState } from 'react'
import Hero from '../components/Hero'
import Filters from '../components/Filters'
import ProductGrid from '../components/ProductGrid'
import Inspiration from '../components/Inspiration'
import { products as allProducts } from '../data/products'

export default function Home({ onAdd }) {
  const [filters, setFilters] = useState({ color: '', size: '', material: '' })
  const featured = useMemo(() => allProducts.slice(0, 6), [])

  return (
    <>
      <Hero />
      <section id="products" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Onze producten</h2>
            <p className="mt-2 text-slate-600">Grote foto’s, heldere prijzen en snelle filters om te vinden wat u zoekt.</p>
          </div>
          <div className="mt-6">
            <Filters filters={filters} setFilters={setFilters} />
          </div>
          <div className="mt-8">
            <ProductGrid products={featured} filters={filters} onAdd={onAdd} />
          </div>
        </div>
      </section>
      <Inspiration />
    </>
  )
}
