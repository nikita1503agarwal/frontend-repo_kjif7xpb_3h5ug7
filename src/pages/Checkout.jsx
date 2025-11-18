import React from 'react'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { state, totals } = useCart()

  return (
    <main className="pt-24 sm:pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-6">
          <h1 className="text-2xl font-semibold text-slate-900">Afrekenen</h1>
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Voornaam</label>
              <input className="mt-1 w-full rounded-xl border-slate-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Achternaam</label>
              <input className="mt-1 w-full rounded-xl border-slate-200" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Adres</label>
              <input className="mt-1 w-full rounded-xl border-slate-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Postcode</label>
              <input className="mt-1 w-full rounded-xl border-slate-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Plaats</label>
              <input className="mt-1 w-full rounded-xl border-slate-200" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">E-mail</label>
              <input type="email" className="mt-1 w-full rounded-xl border-slate-200" />
            </div>
            <div className="sm:col-span-2">
              <button className="w-full mt-2 px-4 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">Bestelling plaatsen</button>
            </div>
          </form>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-6">
            <h2 className="font-semibold text-slate-900">Overzicht</h2>
            <ul className="mt-4 divide-y divide-slate-100">
              {state.items.map((i) => (
                <li key={i.id} className="py-3 flex justify-between text-sm">
                  <span className="text-slate-600">{i.name} × {i.quantity}</span>
                  <span className="font-medium">€ {(i.price * i.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-1 text-sm text-slate-600">
              <div className="flex justify-between"><span>Subtotaal</span><span>€ {totals.subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Verzending</span><span>€ {totals.shipping.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Btw (21%)</span><span>€ {totals.tax.toFixed(2)}</span></div>
              <div className="flex justify-between font-semibold text-slate-900"><span>Totaal</span><span>€ {totals.total.toFixed(2)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
