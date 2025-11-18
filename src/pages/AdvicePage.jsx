import React from 'react'
import Advice from '../components/Advice'

export default function AdvicePage() {
  return (
    <main className="pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold text-slate-900">Advies</h1>
          <p className="mt-2 text-slate-600">Uitleg over aanleg, onderhoud en materiaalkeuze.</p>
        </div>
      </div>
      <Advice />
    </main>
  )
}
