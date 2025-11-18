import React, { useMemo } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products, filters, onAdd }) {
  const filtered = useMemo(() => {
    return products.filter((p) =>
      (!filters.color || p.color === filters.color) &&
      (!filters.size || p.size === filters.size) &&
      (!filters.material || p.material === filters.material)
    )
  }, [products, filters])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  )
}
