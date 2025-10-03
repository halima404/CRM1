"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// Enhanced SVG Icons with Advanced Animations
const CodeIcon = () => (
  <svg
    className="h-10 w-10 text-blue-600 group-hover:text-orange-500 transition-all duration-500 group-hover:scale-110"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
)

const SettingsIcon = () => (
  <svg
    className="h-10 w-10 text-blue-600 group-hover:text-orange-500 transition-all duration-500 group-hover:rotate-180"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <circle cx="12" cy="12" r="3" strokeWidth={2} />
  </svg>
)

const CloudUploadIcon = () => (
  <svg
    className="h-10 w-10 text-blue-600 group-hover:text-orange-500 transition-all duration-500 group-hover:scale-110"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
)

const ServerIcon = () => (
  <svg
    className="h-10 w-10 text-blue-600 group-hover:text-orange-500 transition-all duration-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  </svg>
)

const ShieldIcon = () => (
  <svg
    className="h-10 w-10 text-blue-600 group-hover:text-orange-500 transition-all duration-500 group-hover:scale-110"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const services = [
  {
    icon: CodeIcon, 
    title: "Création de Logiciels",
    description:
      "Applications sur mesure qui transforment vos idées en solutions digitales innovantes et performantes.",
    features: ["Applications Web & Mobile", "Logiciels Desktop", "API & Intégrations"],
    color: "from-blue-500/10 to-purple-500/10",
    href: "/services#creation",
  },
  {
    icon: CloudUploadIcon,
    title: "Maintenance & Évolution",
    description:
      "Accompagnement continu pour garantir la pérennité et l'évolution de vos systèmes informatiques.",
    features: ["Support 24/7", "Mises à jour régulières", "Optimisation continue"],
    color: "from-cyan-500/10 to-blue-500/10",
    href: "/services#maintenance",
  },
  {
    icon: ServerIcon,
    title: "Infrastructure IT",
    description:
      "Conception et déploiement d'infrastructures réseau robustes, sécurisées et évolutives.",
    features: ["Architecture Cloud", "Serveurs & Réseaux", "Migration de données"],
    color: "from-indigo-500/10 to-blue-500/10",
    href: "/services#systemes",
  },
  {
    icon: ShieldIcon,
    title: "Cybersécurité",
    description:
      "Protection multicouche de vos actifs numériques contre les cybermenaces modernes.",
    features: ["Audit de sécurité", "Protection des données", "Formation équipes"],
    color: "from-orange-500/10 to-red-500/10",
    href: "/services#securite",
  },
]

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">
              Notre Expertise
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Des Solutions{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Sur Mesure
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="url(#services-gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="services-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#F97316" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transformez vos défis technologiques en opportunités de croissance avec nos services intégrés
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-blue-200 rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <CardHeader className="relative text-center p-8">
                {/* Icon container with animated background */}
                <div className="relative mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="relative z-10">{service.icon()}</div>
                </div>

                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative p-6 pt-0">
                <CardDescription className="text-base text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </CardDescription>

                {/* Features list */}
                <ul className="space-y-1.5 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-200 hover:border-blue-600 transition-all duration-300 rounded-xl font-semibold group/btn"
                  asChild
                >
                  <a href={service.href}>
                    En savoir plus
                    <svg
                      className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Button>
              </CardContent>

              {/* Hover indicator */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500 transform origin-left transition-transform duration-500 ${
                  hoveredIndex === index ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}