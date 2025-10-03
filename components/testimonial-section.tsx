"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

// Premium SVG Icons
const QuoteIcon = () => (
  <svg className="h-16 w-16 text-blue-500/20 absolute -top-4 -left-4 group-hover:text-orange-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </svg>
)

const StarIcon = () => (
  <svg className="h-5 w-5 fill-amber-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const VerifiedIcon = () => (
  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
)

const testimonials = [
  {
    name: "Amadou Diallo",
    role: "CEO",
    company: "Retail Solutions",
    image: "/images/t2.jpg",
    content: "L'équipe a transformé notre vision en une plateforme e-commerce performante. Leur expertise technique et leur compréhension de nos besoins ont dépassé nos attentes.",
    rating: 5,
    project: "E-commerce",
    metric: "+250% de ventes",
    verified: true,
    tags: ["E-commerce", "UX Design", "Performance"]
  },
  {
    name: "Fatoumata Camara",
    role: "Directrice Technique",
    company: "FinTech Guinée",
    image: "/images/t1.jpg",
    content: "Professionnalisme exceptionnel et livraison dans les délais. Notre application mobile banking est devenue la référence du secteur grâce à leur travail méticuleux sur la sécurité et l'expérience utilisateur.",
    rating: 4,
    project: "Mobile Banking",
    metric: "50K+ utilisateurs",
    verified: true,
    tags: ["Mobile", "Sécurité", "FinTech"]
  },
  {
    name: "Ibrahima Sow",
    role: "CTO",
    company: "TechCorp",
    image: "/images/t3.jpg",
    content: "La migration de notre infrastructure vers le cloud s'est déroulée sans accroc. Leur expertise en DevOps et leur support continu ont assuré une transition fluide avec zéro temps d'arrêt.",
    rating: 4,
    project: "Cloud Migration",
    metric: "99.99% uptime",
    verified: true,
    tags: ["Cloud", "DevOps", "Infrastructure"]
  },
  {
    name: "Mariama Bah",
    role: "Directrice Innovation",
    company: "Smart Buildings",
    image: "/placeholder.svg",
    content: "Leur solution IoT a révolutionné notre gestion de sécurité. L'intégration avec nos systèmes existants a été transparente et le ROI a été atteint en moins de 6 mois.",
    rating: 5,
    project: "IoT Security",
    metric: "ROI en 6 mois",
    verified: true,
    tags: ["IoT", "Sécurité", "Innovation"]
  },
  {
    name: "Ousmane Barry",
    role: "Fondateur",
    company: "EduTech Guinée",
    image: "/placeholder.svg",
    content: "Une équipe créative et réactive qui a su transformer notre concept éducatif en une plateforme intuitive. Le support post-lancement est exceptionnel et les mises à jour régulières démontrent leur engagement.",
    rating: 5,
    project: "Plateforme LMS",
    metric: "10K+ étudiants",
    verified: true,
    tags: ["EdTech", "Web App", "UX"]
  },
  {
    name: "Aissatou Diaby",
    role: "COO",
    company: "LogisTech Solutions",
    image: "/placeholder.svg",
    content: "Le système de gestion logistique qu'ils ont développé a optimisé nos opérations de 40%. Leur approche analytique et leur attention aux détails ont fait toute la différence.",
    rating: 5,
    project: "Logistique",
    metric: "+40% efficacité",
    verified: true,
    tags: ["Logistique", "Analytics", "Automation"]
  }
]

export function TestimonialSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-orange-100 px-4 py-2 rounded-full mb-6">
            <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700">Témoignages Clients</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Ce Que Disent Nos{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          
          {/* Animated Underline */}
          <div className="flex justify-center mb-6">
            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 rounded-full" />
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto line-clamp-2">
            Découvrez comment nous avons aidé des entreprises comme la vôtre à atteindre leurs objectifs technologiques et à transformer leurs opérations
          </p>
        </div>

        

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-gray-200 hover:border-blue-300 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Quote Icon Background */}
              <QuoteIcon />
              
            

              <CardContent className="p-8 relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4" aria-label={`Note: ${testimonial.rating}/5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`${i < testimonial.rating ? 'fill-amber-400' : 'fill-gray-300'} h-5 w-5`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className={`text-gray-700 text-base leading-relaxed mb-6 ${expandedIndex === index ? '' : 'line-clamp-4'}`}>
                  "{testimonial.content}"
                </p>

                {/* Read More Button */}
                {index === 0 && testimonial.content.length > 150 && (
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="text-blue-600 hover:text-orange-600 text-sm font-semibold mb-6 transition-colors duration-300 flex items-center gap-1"
                  >
                    {expandedIndex === index ? 'Voir moins' : 'Lire plus'}
                    <svg className={`h-4 w-4 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}

                {/* Minimalist: removed metric badge */}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {testimonial.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-xs font-medium rounded-full transition-colors duration-300 cursor-pointer line-clamp-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-5 pt-6 border-t border-gray-200">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-orange-100 transition-all duration-300"
                    />
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                        <VerifiedIcon />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-lg line-clamp-1">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 line-clamp-1">{testimonial.role}</p>
                    <p className="text-sm text-orange-600 font-semibold line-clamp-1">{testimonial.company}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 rounded-full transition-all duration-700 ${
                      hoveredIndex === index ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}