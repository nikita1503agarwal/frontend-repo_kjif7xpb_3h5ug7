import React from 'react'
import { X } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { state, dispatch, totals } = useCart()

  return (
    <div className={`fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <h3 className="font-semibold text-slate-900">Winkelwagen</h3>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-4 space-y-4 max-h-[calc(100%-200px)] overflow-y-auto">
          {state.items.length === 0 && (
            <div className="text-slate-500 text-sm">Uw winkelwagen is leeg.</div>
          )}
          {state.items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="font-medium text-slate-900">{item.name}</div>
                <div className="text-sm text-slate-500">{item.variant}</div>
                <div className="mt-1 text-emerald-700 font-semibold">€ {(item.price * item.quantity).toFixed(2)}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => dispatch({ type: 'UPDATE_QTY', id: item.id, quantity: item.quantity - 1 })} className="px-2 rounded-lg bg-slate-100">-</button>
                  <span className="text-sm">{item.quantity}</span>
                  <button onClick={() => dispatch({ type: 'UPDATE_QTY', id: item.id, quantity: item.quantity + 1 })} className="px-2 rounded-lg bg-slate-100">+</button>
                  <button onClick={() => dispatch({ type: 'REMOVE', id: item.id })} className="ml-auto text-red-600 text-sm">Verwijderen</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 p-4 space-y-2 bg-white">
          <div className="flex justify-between text-sm text-slate-600"><span>Subtotaal</span><span>€ {totals.subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between text-sm text-slate-600"><span>Verzending</span><span>€ {totals.shipping.toFixed(2)}</span></div>
          <div className="flex justify-between text-sm text-slate-600"><span>Btw (21%)</span><span>€ {totals.tax.toFixed(2)}</span></div>
          <div className="flex justify-between font-semibold text-slate-900"><span>Totaal</span><span>€ {totals.total.toFixed(2)}</span></div>
          <a href="/checkout" className="block text-center mt-2 px-4 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">Afrekenen</a>
        </div>
      </aside>
    </div>
  )
}
