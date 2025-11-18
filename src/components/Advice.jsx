import React from 'react'

export default function Advice() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">Advies & kennisbank</h2>
        <p className="mt-3 text-slate-600">Kies met vertrouwen. Hieronder vindt u heldere uitleg over ondergrond, verwerking en onderhoud van sierbestrating, stenen en grind.</p>

        <div className="mt-8 space-y-6">
          <article className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-6">
            <h3 className="text-xl font-medium text-slate-900">Het aanleggen van een stabiele oprit</h3>
            <p className="mt-2 text-slate-600">Zorg voor een draagkrachtige fundering met menggranulaat, gevolgd door een laag straatzand. Tril lagen in stappen en leg stenen in verband met voegafstand van 3-5 mm.</p>
          </article>
          <article className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-6">
            <h3 className="text-xl font-medium text-slate-900">Onderhoud van keramische tegels</h3>
            <p className="mt-2 text-slate-600">Gebruik pH-neutrale reinigers en spoel royaal na. Vermijd agressieve zuren die voegen en oppervlakken kunnen aantasten.</p>
          </article>
          <article className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-6">
            <h3 className="text-xl font-medium text-slate-900">Welk grind kies ik?</h3>
            <p className="mt-2 text-slate-600">Let op kleur, korrelgrootte en toepassing. Voor opritten raden we 8-16 mm op grindplaten aan; voor paden volstaat 4-8 mm.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
