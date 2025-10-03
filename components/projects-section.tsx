import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "Système de Gestion E-commerce",
    client: "Retail Solutions",
    description: "Plateforme complète de commerce électronique avec gestion des stocks et analytics.",
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    title: "Application Mobile Banking",
    client: "FinTech Guinée",
    description: "Application mobile sécurisée pour services bancaires avec authentification biométrique.",
    image: "/mobile-banking-app.png",
  },
  {
    title: "Infrastructure Cloud",
    client: "TechCorp",
    description: "Migration et optimisation d'infrastructure vers le cloud avec haute disponibilité.",
    image: "/cloud-infrastructure-diagram.png",
  },
  {
    title: "Système de Sécurité IoT",
    client: "Smart Buildings",
    description: "Solution IoT intégrée pour la surveillance et contrôle d'accès intelligent.",
    image: "/iot-security-system-dashboard.jpg",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50/20 via-white/50 to-orange-50/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-balance mb-6">Nos Réalisations</h2>
          <p className="text-lg md:text-xl text-gray-600 text-pretty max-w-2xl mx-auto animate-fade-in-up">
            Découvrez quelques-uns de nos projets qui ont transformé les entreprises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-white/30 backdrop-blur-md border-none rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6 text-center bg-white/20 backdrop-blur-sm">
                <h3 className="font-semibold text-xl md:text-2xl mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 animate-fade-in-up">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-orange-500 font-medium mb-3">{project.client}</p>
                <p className="text-sm md:text-base text-gray-700 text-pretty leading-relaxed animate-fade-in-up">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 via-orange-500 to-amber-600 text-white hover:from-blue-700 hover:via-orange-600 hover:to-amber-700 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/projects">Voir tous nos projets</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}