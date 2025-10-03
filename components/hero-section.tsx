"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth - 0.5) * 20
    const y = (clientY / innerHeight - 0.5) * 20
    setMousePosition({ x, y })
  }

  return (
    <section
      className="relative w-full overflow-hidden pt-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/newHero.png')" }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay sombre */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[800px]">
          {/* Left: Image (maintenant en fond, pas de carte) */}
          <div className="order-1 lg:order-none hidden lg:block">
            <div
              className="h-[560px] w-full bg-contain bg-no-repeat bg-center opacity-0"
              aria-hidden="true"
            />
          </div>

          {/* Right: Content */}
          <div className="text-center lg:text-left max-w-2xl lg:max-w-none mx-auto space-y-8">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', animationDelay: '0.1s' }}
            >
              L'innovation technologique au service de{" "}
              <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-amber-600 bg-clip-text text-transparent animate-gradient">
                votre avenir
              </span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto bg-black/30 p-4 rounded-lg animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              Nous développons des solutions logicielles sur mesure, sécurisées et fiables pour transformer vos idées en succès concrets et durables.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6 animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-orange-500 to-amber-600 hover:from-blue-700 hover:via-orange-600 hover:to-amber-700 text-white font-bold px-8 py-6 rounded-full shadow-2xl shadow-orange-500/50 hover:shadow-orange-600/60 hover:scale-105 transition-all duration-300 border-2 border-white/20 text-base"
              >
                <a href="/contact" className="flex items-center space-x-2">
                  <span>Commencer maintenant</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-white/95 backdrop-blur-sm text-gray-900 hover:bg-white hover:scale-105 border-2 border-white/40 font-semibold px-8 py-6 rounded-full shadow-2xl hover:shadow-white/30 transition-all duration-300 text-base"
              >
                <a href="/services" className="flex items-center space-x-2">
                  <span>Découvrir nos services</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </Button>
            </div>

            <div
              className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl lg:max-w-none mx-auto lg:mx-0 pt-12 animate-fade-in-up"
              style={{ animationDelay: '0.7s' }}
            >
              <div className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-300">Projets réalisés</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-300">Satisfaction client</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-300">Support dédié</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        .animate-bounce { animation: bounce 1.5s infinite; }
      `}</style>
    </section>
  )
}