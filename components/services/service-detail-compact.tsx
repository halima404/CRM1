"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
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
}

export function ServiceDetailCompact({ service }: ServiceDetailProps) {
  return (
    <div className="w-full max-w-sm">
      {/* Compact Horizontal Card */}
      <div className="relative group">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-blue-50/30 to-orange-50/20 backdrop-blur-xl rounded-xl border border-white/30 shadow-lg" />
        
        <Card className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <CardContent className="p-4 relative z-10">
            {/* Header - Icon and Title */}
            <div className="flex items-center gap-3 mb-3">
              {/* Icon container */}
              <div className="flex-shrink-0 p-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 group-hover:scale-105 transition-all duration-200">
                <div className="text-blue-600 text-lg">{service.icon}</div>
              </div>
              
              <div className="flex-1 min-w-0">
                <CardTitle className="text-base font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent truncate">
                  {service.title}
                </CardTitle>
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mt-1" />
              </div>
            </div>

            {/* Description - compact */}
            <CardDescription className="text-sm leading-relaxed text-gray-800 font-medium mb-3 line-clamp-2">
              {service.description}
            </CardDescription>

            {/* Features - horizontal list */}
            <div className="mb-3">
              <h4 className="font-semibold mb-1 text-gray-900 text-xs flex items-center gap-1">
                <div className="w-1 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full" />
                Fonctionnalités
              </h4>
              <div className="flex flex-wrap gap-1">
                {service.features.slice(0, 2).map((feature, index) => (
                  <span key={index} className="text-xs text-gray-700 bg-white/30 px-2 py-0.5 rounded-md border border-white/20">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies - compact badges */}
            <div className="mb-3">
              <h4 className="font-semibold mb-1 text-gray-900 text-xs flex items-center gap-1">
                <div className="w-1 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full" />
                Tech
              </h4>
              <div className="flex flex-wrap gap-1">
                {service.technologies.split(", ").slice(0, 3).map((tech, index) => (
                  <Badge
                    key={index}
                    className="bg-white/40 backdrop-blur-sm text-gray-800 border border-white/30 hover:bg-white/60 transition-all duration-200 px-1.5 py-0.5 text-xs font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Button - mini */}
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-1.5 px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-200 text-xs" 
              size="sm"
            >
              <span className="flex items-center gap-1">
                Devis
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
