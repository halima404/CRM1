"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceDetailProps {
  service: {
    id: string
    icon: React.ReactNode
    title: string
    description: string
  }
  reversed?: boolean
}

export function ServiceDetailCompact({ service, reversed = false }: ServiceDetailProps) {
  if (!service) {
    return null
  }

  return (
    <Card className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300 w-full max-w-sm">
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
        <div className="text-blue-600 text-xl">{service.icon}</div>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h2 className="font-bold text-gray-900 text-base mb-1">
          {service.title}
        </h2>
        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
          {service.description}
        </p>
        
        {/* CTA Button */}
        <Button 
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-xs"
        >
          En savoir plus
        </Button>
      </div>
    </Card>
  )
}