"use client"

import { ServiceDetailCompact } from "./service-detail-compact"

interface Service {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  technologies: string
}

interface ServicesGridProps {
  services: Service[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de solutions technologiques
            </p>
          </div>

          {/* Horizontal Grid of compact service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {services.map((service, index) => (
              <ServiceDetailCompact
                key={service.id}
                service={service}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
