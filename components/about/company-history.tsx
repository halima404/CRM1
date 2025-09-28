import Image from "next/image"

export function CompanyHistory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Notre Histoire</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo des fondateurs */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/two-professional-african-tech-entrepreneurs-in-mod.jpg"
                  alt="Abdoulaye Sall et Ibrahima Bano Diallo, fondateurs de Curium-808"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl">
                <p className="font-semibold">2024</p>
                <p className="text-sm">Fondation</p>
              </div>
            </div>

            {/* Histoire de l'entreprise */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  L'histoire de <strong className="text-foreground">Curium-808</strong> commence par la rencontre de
                  deux esprits visionnaires :<strong className="text-foreground"> Abdoulaye Sall</strong> et{" "}
                  <strong className="text-foreground">Ibrahima Bano Diallo</strong>. Unis par une passion commune pour
                  la technologie et l'innovation, ils ont décidé de créer une entreprise qui transformerait les défis
                  technologiques en opportunités de croissance.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Forts de leurs expériences complémentaires en développement logiciel, cybersécurité et gestion de
                  projets, ils ont fondé Curium-808 avec une mission claire : offrir des solutions technologiques sur
                  mesure, sécurisées et fiables aux entreprises guinéennes et internationales.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Le nom "Curium-808" symbolise notre approche : comme le curium, un élément rare et précieux, nous
                  créons des solutions uniques et durables. Le "808" représente notre rythme constant d'innovation et
                  notre engagement à battre au cœur de la transformation digitale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
