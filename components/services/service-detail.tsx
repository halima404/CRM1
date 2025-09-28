import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  reversed?: boolean
}

export function ServiceDetail({ service, reversed = false }: ServiceDetailProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? "lg:grid-flow-col-dense" : ""}`}>
      <div className={reversed ? "lg:col-start-2" : ""}>
        <Card className="h-full border-2 hover:border-primary/20 transition-colors">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-xl w-fit">
              <div className="text-primary">{service.icon}</div>
            </div>
            <CardTitle className="text-2xl md:text-3xl text-balance">{service.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>

            <div>
              <h4 className="font-semibold mb-3 text-foreground">Fonctionnalités clés :</h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-foreground">Technologies :</h4>
              <Badge variant="secondary" className="text-xs">
                {service.technologies}
              </Badge>
            </div>

            <Button className="w-full" size="lg">
              Obtenir un devis pour ce service
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className={`space-y-6 ${reversed ? "lg:col-start-1" : ""}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
          <div className="relative bg-card/50 backdrop-blur-sm border rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Pourquoi choisir ce service ?</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Expertise technique</p>
                  <p>Notre équipe maîtrise les dernières technologies et bonnes pratiques du secteur.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Approche personnalisée</p>
                  <p>Chaque solution est conçue sur mesure pour répondre à vos besoins spécifiques.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Support continu</p>
                  <p>Nous vous accompagnons avant, pendant et après la mise en œuvre de votre projet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
