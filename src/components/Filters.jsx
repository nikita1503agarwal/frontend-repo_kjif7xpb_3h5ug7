import React from 'react'

export default function Filters({ filters, setFilters }) {
  function update(key, value) {
    setFilters((f) => ({ ...f, [key]: value }))
  }

  return (
    <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Kleur</label>
          <select value={filters.color} onChange={(e) => update('color', e.target.value)} className="w-full rounded-xl border-slate-200 focus:ring-emerald-600 focus:border-emerald-600">
            <option value="">Alle kleuren</option>
            <option>Grijs</option>
            <option>Anthraciet</option>
            <option>Beige</option>
            <option>Rood</option>
            <option>Gemengd</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Formaat</label>
          <select value={filters.size} onChange={(e) => update('size', e.target.value)} className="w-full rounded-xl border-slate-200 focus:ring-emerald-600 focus:border-emerald-600">
            <option value="">Alle formaten</option>
            <option>Klinker</option>
            <option>Tegel 60x60</option>
            <option>Tegel 80x80</option>
            <option>Split 8-16 mm</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Materiaal</label>
          <select value={filters.material} onChange={(e) => update('material', e.target.value)} className="w-full rounded-xl border-slate-200 focus:ring-emerald-600 focus:border-emerald-600">
            <option value="">Alle materialen</option>
            <option>Beton</option>
            <option>Natuursteen</option>
            <option>Keramiek</option>
            <option>Grind</option>
          </select>
        </div>
      </div>
    </div>
  )
}
