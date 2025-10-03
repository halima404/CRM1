"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-orange-300/30 bg-gradient-to-r from-orange-50/80 via-amber-50/70 to-orange-100/80 shadow-lg shadow-orange-100/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Très agrandi avec animation */}
          <a href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 group">
            <div className="h-20 md:h-24 flex items-center p-2">
              <img
                src="/logo.png"
                alt="Curium-808"
                className="h-full w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation - Belle typographie (aligné à droite avec CTA inclus) */}
          <div className="hidden lg:flex items-center space-x-12">
            <a 
              href="/" 
              className="text-gray-800 hover:text-orange-600 transition-all duration-300 font-semibold text-base tracking-wider hover:scale-110 transform relative group"
              style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}
            >
              Accueil
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="/about" 
              className="text-gray-800 hover:text-orange-600 transition-all duration-300 font-semibold text-base tracking-wider hover:scale-110 transform relative group"
              style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}
            >
              À propos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="/services" 
              className="text-gray-800 hover:text-orange-600 transition-all duration-300 font-semibold text-base tracking-wider hover:scale-110 transform relative group"
              style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="/blog" 
              className="text-gray-800 hover:text-orange-600 transition-all duration-300 font-semibold text-base tracking-wider hover:scale-110 transform relative group"
              style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="/contact" 
              className="text-gray-800 hover:text-orange-600 transition-all duration-300 font-semibold text-base tracking-wider hover:scale-110 transform relative group"
              style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            {/* CTA intégré à droite (glassmorphism compact) */}
            <Button 
              asChild
              className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white font-semibold text-sm px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
              style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}
            >
              <a href="/contact" className="flex items-center space-x-2">
                <span>Demander un devis</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button - Stylé */}
          <button 
            className="lg:hidden text-gray-800 hover:text-orange-600 transition-all duration-300 p-2 rounded-xl hover:bg-white/40 backdrop-blur-sm" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation - Glassmorphism */}
        {isOpen && (
          <div className="lg:hidden py-8 border-t border-orange-300/30 bg-white/30 backdrop-blur-xl rounded-b-3xl shadow-2xl -mx-6 px-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-6">
              <a 
                href="/" 
                className="text-gray-800 hover:text-orange-600 transition-all duration-300 font-semibold text-lg tracking-wide hover:translate-x-2 transform"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}
              >
                🏠 Accueil
              </a>
              <a 
                href="/about" 
                className="text-gray-800 hover:text-orange-600 transition-all duration-300 font-semibold text-lg tracking-wide hover:translate-x-2 transform"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}
              >
                💡 À propos
              </a>
              <a 
                href="/services" 
                className="text-gray-800 hover:text-orange-600 transition-all duration-300 font-semibold text-lg tracking-wide hover:translate-x-2 transform"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}
              >
                ⚡ Services
              </a>
              <a 
                href="/blog" 
                className="text-gray-800 hover:text-orange-600 transition-all duration-300 font-semibold text-lg tracking-wide hover:translate-x-2 transform"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}
              >
                📝 Blog
              </a>
              <a 
                href="/contact" 
                className="text-gray-800 hover:text-orange-600 transition-all duration-300 font-semibold text-lg tracking-wide hover:translate-x-2 transform"
                onClick={() => setIsOpen(false)}
              >
                📧 Contact
              </a>
              <Button 
                asChild
                className="mt-4 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white font-semibold text-sm px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20"
                style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}
              >
                <a href="/contact" className="flex items-center justify-center space-x-2">
                  <span>Demander un devis</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}