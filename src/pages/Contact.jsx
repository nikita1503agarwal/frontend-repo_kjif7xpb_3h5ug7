import React from 'react'

export default function Contact() {
  return (
    <main className="pt-24 sm:pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>
          <p className="mt-2 text-slate-600">Bezoek onze showroom of neem contact op voor persoonlijk advies.</p>

          <div className="mt-6 space-y-3 text-slate-700">
            <p><span className="font-medium">Adres:</span> Oudeweg 12, 1234 AB Tuindorp</p>
            <p><span className="font-medium">Openingstijden:</span> Ma–Vr 09:00–17:30 • Za 09:00–16:00</p>
            <p><span className="font-medium">Telefoon:</span> 012-3456789</p>
            <p><span className="font-medium">E-mail:</span> info@crumsierbestrating.nl</p>
          </div>
        </div>
        <div>
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-100">
            <iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=5.087%2C52.089%2C5.121%2C52.106&layer=mapnik&marker=52.097%2C5.104"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </main>
  )
}
