export function ServicesHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
          Des solutions complètes pour vos <span className="text-primary">défis technologiques</span>
        </h1>
        <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto mb-8">
          Chez Curium-808, nous transformons vos idées en réalité numérique grâce à notre expertise technique et notre
          approche personnalisée. Découvrez nos services conçus pour propulser votre entreprise vers le succès.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#creation"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Découvrir nos services
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  )
}
