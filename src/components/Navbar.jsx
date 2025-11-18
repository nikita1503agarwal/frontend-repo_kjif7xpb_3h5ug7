import React from 'react'
import { ShoppingCart, Menu } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ onOpenCart }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white grid place-items-center shadow-sm">
            <span className="font-bold">C</span>
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-900 group-hover:text-emerald-700 transition">Crum Sierbestrating</div>
            <div className="text-xs text-slate-500">Decoratieve bestrating & grind</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/category/paving" className={({isActive}) => isActive ? 'text-emerald-700 font-medium' : 'text-slate-700 hover:text-emerald-700'}>Decoratieve bestrating</NavLink>
          <NavLink to="/category/stones" className={({isActive}) => isActive ? 'text-emerald-700 font-medium' : 'text-slate-700 hover:text-emerald-700'}>Sierstenen</NavLink>
          <NavLink to="/category/gravel" className={({isActive}) => isActive ? 'text-emerald-700 font-medium' : 'text-slate-700 hover:text-emerald-700'}>Grind</NavLink>
          <NavLink to="/category/accessories" className={({isActive}) => isActive ? 'text-emerald-700 font-medium' : 'text-slate-700 hover:text-emerald-700'}>Accessoires</NavLink>
          <NavLink to="/advice" className={({isActive}) => isActive ? 'text-emerald-700 font-medium' : 'text-slate-700 hover:text-emerald-700'}>Advies</NavLink>
          <NavLink to="/inspiration" className={({isActive}) => isActive ? 'text-emerald-700 font-medium' : 'text-slate-700 hover:text-emerald-700'}>Inspiratie</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-emerald-700 font-medium' : 'text-slate-700 hover:text-emerald-700'}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100">
            <Menu className="w-5 h-5" />
          </button>
          <button onClick={onOpenCart} className="relative p-2 rounded-lg hover:bg-slate-100">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center text-[10px] bg-emerald-600 text-white w-4 h-4 rounded-full">3</span>
          </button>
        </div>
      </div>
    </header>
  )
}
