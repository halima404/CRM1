"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const projects = [
  {
    title: "Système de Gestion E-commerce",
    client: "Retail Solutions",
    description: "Plateforme omnicanale avec intelligence artificielle pour prédictions de stocks et analytics avancés.",
    image: "/modern-ecommerce-dashboard.png",
    category: "E-commerce",
    metrics: [
      { label: "Augmentation ventes", value: "+250%" },
      { label: "Temps de traitement", value: "-70%" }
    ],
    tags: ["React", "Node.js", "AI/ML"],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Application Mobile Banking",
    client: "FinTech Guinée",
    description: "Solution bancaire mobile avec authentification biométrique multi-facteurs et transactions instantanées.",
    image: "/mobile-banking-app.png",
    category: "FinTech",
    metrics: [
      { label: "Utilisateurs actifs", value: "50K+" },
      { label: "Transactions/jour", value: "15K" }
    ],
    tags: ["React Native", "Blockchain", "Biométrie"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Infrastructure Cloud Hybride",
    client: "TechCorp",
    description: "Architecture cloud multi-régions avec failover automatique et scalabilité à la demande.",
    image: "/cloud-infrastructure-diagram.png",
    category: "Cloud",
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Réduction coûts", value: "-45%" }
    ],
    tags: ["AWS", "Kubernetes", "Terraform"],
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    title: "Écosystème IoT Sécurisé",
    client: "Smart Buildings",
    description: "Réseau IoT intelligent pour la gestion énergétique et la sécurité avec IA prédictive.",
    image: "/iot-security-system-dashboard.jpg",
    category: "IoT",
    metrics: [
      { label: "Capteurs connectés", value: "500+" },
      { label: "Économie énergie", value: "-35%" }
    ],
    tags: ["IoT", "Edge Computing", "AI"],
    gradient: "from-orange-500/20 to-red-500/20"
  },
]

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full mb-6">
            <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Nos{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                Réalisations
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#F97316" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des projets qui redéfinissent l'excellence technologique et génèrent des résultats mesurables
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
              className="group relative overflow-hidden bg-white border-2 border-gray-100 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-300 cursor-pointer"
            >
              {/* Image Section with Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 shadow-md">
                  {project.category}
                </div>

                {/* Hover Overlay with Metrics */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center text-white">
                        <span className="text-xs font-medium">{metric.label}</span>
                        <span className="text-sm font-bold text-orange-400">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-6">
                {/* Client Name */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-orange-600">{project.client}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-center text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 border border-blue-200 hover:border-transparent transition-all duration-300 rounded-xl font-semibold group/btn"
                >
                  Voir le projet
                  <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </CardContent>

              {/* Progress Indicator */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transform origin-left transition-transform duration-500 ${activeProject === index ? 'scale-x-100' : 'scale-x-0'}`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}