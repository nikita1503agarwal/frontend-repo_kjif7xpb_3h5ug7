import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="font-semibold text-slate-900">Crum Sierbestrating</div>
          <p className="mt-2 text-sm text-slate-600">Familiebedrijf met jarenlange ervaring. Specialist in sierbestrating, sierstenen en grind.</p>
        </div>
        <div>
          <div className="font-medium text-slate-900">Categorieën</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/category/paving" className="hover:text-emerald-700">Decoratieve bestrating</a></li>
            <li><a href="/category/stones" className="hover:text-emerald-700">Sierstenen</a></li>
            <li><a href="/category/gravel" className="hover:text-emerald-700">Grind</a></li>
            <li><a href="/category/accessories" className="hover:text-emerald-700">Accessoires</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-slate-900">Informatie</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/advice" className="hover:text-emerald-700">Advies</a></li>
            <li><a href="/inspiration" className="hover:text-emerald-700">Inspiratie</a></li>
            <li><a href="/contact" className="hover:text-emerald-700">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-slate-900">Contact</div>
          <p className="mt-3 text-sm text-slate-600">Oudeweg 12, 1234 AB Tuindorp
            <br />Ma–Vr 09:00–17:30, Za 09:00–16:00
            <br />Tel: 012-3456789</p>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Crum Sierbestrating. Alle rechten voorbehouden.</div>
    </footer>
  )
}
