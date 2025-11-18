import React from 'react'
import { ShieldCheck, Truck, Phone } from 'lucide-react'

export default function Hero({
  imageUrl = 'https://images.unsplash.com/photo-1523419409543-a7ea0c172d0b?q=80&w=2400&auto=format&fit=crop',
  title = 'Sierbestrating en grind voor iedere tuin',
  subtitle = 'Al meer dan 25 jaar helpt Crum Sierbestrating gezinnen en bedrijven met het kiezen van duurzame, mooie materialen voor oprit, terras en tuinpaden.',
  ctaPrimary = { label: 'Ontdek producten', href: '#products' },
  ctaSecondary = { label: 'Krijg advies', href: '/advice' },
  align = 'center', // 'left' | 'center'
  darkOverlay = 0.55, // 0..1
  showTrust = true,
}) {
  const alignClasses = align === 'center'
    ? 'items-center text-center mx-auto'
    : 'items-center text-left';

  return (
    <header className="relative">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={imageUrl}
          alt="Sfeervolle tuin met sierbestrating"
          className="w-full h-full object-cover lg:object-center lg:bg-fixed"
          loading="eager"
        />
        {/* Gradient overlays for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,${darkOverlay + 0.15}), rgba(0,0,0,${darkOverlay}))`,
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="min-h-screen flex">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex w-full">
          <div className={`flex ${alignClasses} w-full py-28 sm:py-32`}>
            <div className={`max-w-4xl ${align === 'center' ? 'mx-auto' : ''}`}>
              {/* Glass panel */}
              <div className={`rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)] p-6 sm:p-10 text-white ${align === 'center' ? 'text-center' : 'text-left'}`}>
                <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium backdrop-blur ring-1 ring-white/15">
                  Betrouwbaar sinds 1999
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
                  {title}
                </h1>
                <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
                  {subtitle}
                </p>
                <div className={`mt-8 sm:mt-10 flex flex-wrap gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
                  <a
                    href={ctaPrimary.href}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-sm hover:shadow-md hover:bg-white/95 transition"
                  >
                    {ctaPrimary.label}
                  </a>
                  <a
                    href={ctaSecondary.href}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium shadow-sm hover:bg-emerald-700 transition"
                  >
                    {ctaSecondary.label}
                  </a>
                </div>

                {showTrust && (
                  <div className={`mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-white/90`}> 
                    <div className="flex items-center justify-center gap-2 bg-black/20 rounded-xl py-3 px-4 ring-1 ring-white/10">
                      <ShieldCheck className="h-5 w-5 text-emerald-300" />
                      <span className="text-sm">Garantie & advies</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 bg-black/20 rounded-xl py-3 px-4 ring-1 ring-white/10">
                      <Truck className="h-5 w-5 text-emerald-300" />
                      <span className="text-sm">Snelle levering</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 bg-black/20 rounded-xl py-3 px-4 ring-1 ring-white/10">
                      <Phone className="h-5 w-5 text-emerald-300" />
                      <span className="text-sm">Bel: 0314 - 123 456</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="16" height="26" rx="8" stroke="currentColor" strokeWidth="2"/>
              <circle cx="9" cy="8" r="2" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute -bottom-1 left-0 right-0 -z-0">
          <svg className="w-full h-16 text-white" preserveAspectRatio="none" viewBox="0 0 1440 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 32L60 37.3C120 43 240 53 360 64C480 75 600 85 720 80C840 75 960 53 1080 48C1200 43 1320 53 1380 58.7L1440 64V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V32Z" />
          </svg>
        </div>
      </div>
    </header>
  )
}
