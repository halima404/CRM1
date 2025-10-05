"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesContact } from "@/components/services/services-contact"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ServiceDetailProps {
  service: {
    id: string
    icon: React.ReactNode
    title: string
    description: string
    features: string[]
    technologies: string
  }
  index: number
}

function ServiceDetail({ service, index }: ServiceDetailProps) {
  if (!service) {
    return null
  }

  const colors = [
    { 
      header: "from-blue-50 to-blue-100", 
      icon: "bg-blue-500/10", 
      iconColor: "text-blue-600",
      check: "bg-blue-100",
      checkIcon: "text-blue-600",
      badge: "hover:border-blue-200 hover:bg-blue-50"
    },
    { 
      header: "from-orange-50 to-orange-100", 
      icon: "bg-orange-500/10", 
      iconColor: "text-orange-600",
      check: "bg-orange-100",
      checkIcon: "text-orange-600",
      badge: "hover:border-orange-200 hover:bg-orange-50"
    },
  ]
  
  const colorIndex = service.id === "creation" || service.id === "systemes" ? 0 : 1
  const color = colors[colorIndex]

  return (
    <Card 
      className="group h-full bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden opacity-0 translate-y-8"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 150}ms forwards`
      }}
    >
      {/* Header minimal avec dégradé doux */}
      <div className={`bg-gradient-to-br ${color.header} p-6 relative overflow-hidden`}>
        {/* Cercle décoratif subtil */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150" />
        
        {/* Icon & Title */}
        <div className="relative z-10">
          <div className={`w-14 h-14 ${color.icon} backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            <div className={color.iconColor}>{service.icon}</div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {service.description}
        </p>

        {/* Features List minimal */}
        <div className="space-y-2">
          {service.features?.slice(0, 3).map((feature, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2 opacity-0"
              style={{
                animation: `fadeIn 0.4s ease-out ${index * 150 + 300 + idx * 100}ms forwards`
              }}
            >
              <div className={`w-4 h-4 rounded-full ${color.check} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                <svg className={`w-2.5 h-2.5 ${color.checkIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {service.technologies?.split(", ").slice(0, 3).map((tech, idx) => (
            <Badge 
              key={idx}
              variant="secondary" 
              className={`bg-gray-50 text-gray-600 border border-gray-200 ${color.badge} transition-all duration-300 px-2.5 py-0.5 text-xs opacity-0 hover:scale-105`}
              style={{
                animation: `fadeIn 0.4s ease-out ${index * 150 + 600 + idx * 80}ms forwards`
              }}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </Card>
  )
}

const services = [
  {
    id: "creation",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Création de Logiciels sur Mesure",
    description: "Applications personnalisées pour vos besoins métier.",
    features: ["Applications web", "Mobile", "ERP/CRM"],
    technologies: "Python, React, Node.js",
  },
  {
    id: "maintenance",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
        />
      </svg>
    ),
    title: "Maintenance & Mise à Jour",
    description: "Support et optimisation de vos systèmes.",
    features: ["Surveillance", "Mises à jour", "Support 24/7"],
    technologies: "DevOps, Docker, AWS",
  },
  {
    id: "systemes",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    title: "Installation Systèmes & Réseaux",
    description: "Infrastructures réseau fiables et évolutives.",
    features: ["Réseaux sécurisés", "Serveurs", "VPN"],
    technologies: "Linux, VMware, Cisco",
  },
  {
    id: "securite",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Sécurité Informatique & Cybersécurité",
    description: "Protection multicouche de vos données.",
    features: ["Audit", "Pare-feu", "Formation"],
    technologies: "Firewall, SIEM, Encryption",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <ServicesHero />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id} 
                  className="scroll-mt-20"
                >
                  <ServiceDetail service={service} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesContact />
      </main>

      <Footer />
    </div>
  )
}