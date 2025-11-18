import React, { useMemo, useState } from 'react'
import Filters from '../components/Filters'
import ProductGrid from '../components/ProductGrid'
import { products as allProducts } from '../data/products'

export default function Category({ type, onAdd }) {
  const [filters, setFilters] = useState({ color: '', size: '', material: '' })
  const products = useMemo(() => allProducts.filter(p => p.category === type), [type])

  const titles = {
    paving: 'Decoratieve bestrating',
    stones: 'Sierstenen',
    gravel: 'Grind',
    accessories: 'Accessoires',
  }

  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold text-slate-900">{titles[type]}</h1>
          <p className="mt-2 text-slate-600">Vind snel het juiste product met onze filters.</p>
        </div>
        <div className="mt-6"><Filters filters={filters} setFilters={setFilters} /></div>
        <div className="mt-8"><ProductGrid products={products} filters={filters} onAdd={onAdd} /></div>
      </div>
    </section>
  )
}
