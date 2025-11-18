import React from 'react'

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-100 hover:shadow-md transition">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium text-slate-900 leading-tight">{product.name}</h3>
          <div className="text-emerald-700 font-semibold">€ {product.price.toFixed(2)}</div>
        </div>
        <p className="mt-1 text-sm text-slate-500 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => onAdd(product)} className="flex-1 px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition">In winkelwagen</button>
          <a href="#" className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200">Details</a>
        </div>
      </div>
    </div>
  )
}
