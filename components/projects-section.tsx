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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Nos Réalisations</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets qui ont transformé les entreprises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1 text-balance">{project.title}</h3>
                <p className="text-sm text-accent font-medium mb-2">{project.client}</p>
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/projects">Voir tous nos projets</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
