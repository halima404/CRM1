"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutHero() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-orange-100 px-4 py-2 rounded-full mb-6">
          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-semibold text-gray-700">À propos de Curium-808</span>
        </div>

        {/* Title with thin gradient underline */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Qui sommes-nous ?
          <span className="relative block mx-auto mt-2 w-full max-w-xl">
            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
              <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="url(#about-gradient)" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <linearGradient id="about-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#F97316" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
          Curium-808 transforme vos défis technologiques en opportunités de croissance, avec des solutions sur mesure, sécurisées et durables.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl font-semibold" asChild>
            <Link href="#vision" className="flex items-center gap-2">
              Notre vision
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-2 px-8 py-6 rounded-xl font-semibold" asChild>
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
