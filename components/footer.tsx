"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

// Enhanced SVG Icons
const LocationIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const EmailIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const ArrowUpIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
)

export function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)
  const [emailCopied, setEmailCopied] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@votreentreprise.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }



  const quickLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'À Propos', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  const services = [
    'Développement Web',
    'Applications Mobiles',
    'Cloud & DevOps',
    'Sécurité IT',
    'Consulting',
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative container mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="group">
              <Link href="/" className="flex items-center gap-3 mb-2">
                <Image src="/logo.png" alt="Curium-808" width={40} height={40} className="h-10 w-10 rounded" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Curium-808
                </h3>
              </Link>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full transition-all duration-300 group-hover:w-32" />
            </div>
            <p className="text-gray-300 leading-relaxed line-clamp-3">
              Curium-808 transforme vos défis technologiques en opportunités de croissance.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4" />
                    <span className="line-clamp-1">{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                <LocationIcon />
                <span className="line-clamp-2">Conakry, Guinée</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                <PhoneIcon />
                <a href="tel:+224000000000" className="hover:underline">
                  +224 000 000 000
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300 group">
                <EmailIcon />
                <button 
                  onClick={copyEmail}
                  className="hover:text-white transition-colors duration-300 relative"
                >
                  <span className="line-clamp-1">contact@votreentreprise.com</span>
                  {emailCopied && (
                    <span className="absolute -top-8 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded animate-fade-in">
                      Copié!
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} VotreSociété. Tous droits réservés.
          </p>
          


          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
            aria-label="Retour en haut"
          >
            <ArrowUpIcon />
          </button>
        </div>


      </div>
    </footer>
  )
}