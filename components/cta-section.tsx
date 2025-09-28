import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Prêt à démarrer votre projet ?</h2>
        <p className="text-lg text-primary-foreground/90 text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
          Transformons ensemble vos défis technologiques en opportunités de croissance. Contactez-nous pour une
          consultation gratuite.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact">Contactez-nous</Link>
        </Button>
      </div>
    </section>
  )
}
