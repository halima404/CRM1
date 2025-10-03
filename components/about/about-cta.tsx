"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutCTA() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-sm p-10 shadow-sm">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-orange-100 px-4 py-2 rounded-full mb-4">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-gray-700">Travaillons ensemble</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Prêts à écrire la suite avec nous ?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Contactez-nous pour une consultation gratuite. Nous revenons vers vous sous 24h avec des pistes concrètes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl font-semibold" asChild>
              <Link href="/contact">Nous contacter</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 px-8 py-6 rounded-xl font-semibold" asChild>
              <Link href="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
