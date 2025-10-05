// components/services/service-detail.tsx
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceDetailProps {
  service: {
    id: string
    icon: React.ReactNode
    title: string
    description: string
    features?: string[]
    technologies?: string
  }
  reversed?: boolean
}

export function ServiceDetail({ service, reversed = false }: ServiceDetailProps) {
  if (!service) return null

  return (
    <Card className="h-full bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
      <div className="p-6 h-full flex flex-col">
        {/* Icon */}
        <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
          <div className="text-blue-600 text-2xl">{service.icon}</div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {service.description}
        </p>
        
        {/* Features */}
        {service.features && service.features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {service.features.slice(0, 3).map((feature, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Technologies */}
        {service.technologies && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1">
              Technologies
            </p>
            <p className="text-xs text-gray-600">{service.technologies}</p>
          </div>
        )}
        
        {/* CTA Button */}
        <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg mt-auto">
          En savoir plus
        </Button>
      </div>
    </Card>
  )
}