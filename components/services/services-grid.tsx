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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme de solutions
            </p>
          </div>

          {/* Horizontal grid of compact service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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