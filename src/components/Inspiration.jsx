import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1533636721434-0e2d61030955?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1563974318767-1c43811a662b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1615266895738-3c0a8bd1bfa1?q=80&w=1600&auto=format&fit=crop',
]

export default function Inspiration() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Inspiratie</h2>
          <p className="mt-2 text-slate-600">Bekijk voorbeelden van tuinen en opritten die we hebben gerealiseerd met onze materialen.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl shadow-sm">
              <img src={src} alt="Project inspiratie" className="w-full h-48 object-cover hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
