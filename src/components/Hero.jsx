import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1523419409543-a7ea0c172d0b?q=80&w=2000&auto=format&fit=crop"
          alt="Sfeervolle tuin met sierbestrating"
          className="w-full h-full object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 h-full flex items-center">
        <div className="max-w-2xl text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
          <p className="text-sm sm:text-base uppercase tracking-[0.2em] text-white/80">Crum Sierbestrating</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Groot assortiment sierbestrating, grind en natuursteen
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-xl">
            Duurzame materialen en persoonlijk advies voor oprit, terras en tuinpad. Laat je inspireren en vind precies wat past bij jouw buitenruimte.
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

      {/* Subtle bottom fade into page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}
