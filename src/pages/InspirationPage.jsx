import React from 'react'
import Inspiration from '../components/Inspiration'

export default function InspirationPage() {
  return (
    <main className="pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold text-slate-900">Inspiratie</h1>
          <p className="mt-2 text-slate-600">Voorbeelden van geslaagde projecten.</p>
        </div>
      </div>
      <Inspiration />
    </main>
  )
}
