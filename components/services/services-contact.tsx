import { Button } from "@/components/ui/button"

export function ServicesContact() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Un besoin spécifique ?</h2>
        <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
          Nos experts sont à votre disposition pour analyser vos défis technologiques et vous proposer des solutions sur
          mesure adaptées à votre secteur d'activité.
        </p>
        <Button size="lg" asChild>
          <a href="/contact">Discutons-en</a>
        </Button>
      </div>
    </section>
  )
}
