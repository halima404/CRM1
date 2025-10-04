import Image from "next/image"
export function CompanyHistory() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Notre Histoire
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo des fondateurs */}
            <div className="relative group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/images/history .png"
                  alt="Deux collègues analysant un tableau blanc — histoire de Curium-808"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Histoire de l'entreprise */}
            <div className="space-y-6">
              <div className="space-y-5">
                <p className="text-lg text-gray-700 leading-relaxed">
                  L'histoire de <span className="font-bold text-gray-900">Curium-808</span> commence par la rencontre de
                  deux esprits visionnaires : <span className="font-bold text-gray-900">Abdoulaye Sall</span> et{" "}
                  <span className="font-bold text-gray-900">Ibrahima Bano Diallo</span>. Unis par une passion commune pour
                  la technologie et l'innovation, ils ont décidé de créer une entreprise qui transformerait les défis
                  technologiques en opportunités de croissance.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Forts de leurs expériences complémentaires en développement logiciel, cybersécurité et gestion de
                  projets, ils ont fondé Curium-808 avec une mission claire : offrir des solutions technologiques sur
                  mesure, sécurisées et fiables aux entreprises guinéennes et internationales.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Le nom <span className="font-bold text-blue-900">"Curium-808"</span> symbolise notre approche : comme le curium, un élément rare et précieux, nous
                    créons des solutions uniques et durables. Le <span className="font-bold text-blue-900">"808"</span> représente notre rythme constant d'innovation et
                    notre engagement à battre au cœur de la transformation digitale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}