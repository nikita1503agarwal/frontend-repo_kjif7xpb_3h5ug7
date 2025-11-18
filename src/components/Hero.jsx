import React from 'react'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1523419409543-a7ea0c172d0b?q=80&w=1600&auto=format&fit=crop"
          alt="Sfeervolle tuin met sierbestrating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Sierbestrating en grind voor iedere tuin
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90">
            Al meer dan 25 jaar helpt Crum Sierbestrating gezinnen en bedrijven met het kiezen van duurzame, mooie materialen voor oprit, terras en tuinpaden.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 shadow-sm hover:shadow-md transition">
              Ontdek producten
            </a>
            <a href="/advice" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 transition">
              Krijg advies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
