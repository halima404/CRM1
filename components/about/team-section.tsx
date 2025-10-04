import Image from "next/image"

export function TeamSection() {
  const team = [
    {
      name: "Abdoulaye Sall",
      title: "Fondateur & PDG",
      image: "/professional-african-tech-ceo-in-modern-business-a.jpg",
      quote: "L'innovation naît de l'audace de transformer les idées en réalité technologique.",
    },
    {
      name: "Ibrahima Bano Diallo",
      title: "Cofondateur & Visionnaire",
      image: "/professional-african-tech-visionary-in-modern-busi.jpg",
      quote: "Chaque ligne de code que nous écrivons contribue à bâtir l'avenir numérique de l'Afrique.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deux visionnaires unis par une passion commune pour l'innovation technologique
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="group relative">
                {/* Card container with hover effects */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 border border-gray-100">
                  {/* Image section */}
                  <div className="relative mb-6">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Floating quote badge */}
                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="text-center space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-blue-100 px-4 py-2 rounded-full">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full" />
                        <p className="text-gray-700 font-semibold text-sm">{member.title}</p>
                      </div>
                    </div>
                    
                    {/* Quote section */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-lg p-4 mt-4">
                      <blockquote className="text-gray-700 italic leading-relaxed text-base font-medium">
                        "{member.quote}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}