export function CompanyValues() {
  const values = [
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "Nous repoussons constamment les limites technologiques pour créer des solutions avant-gardistes qui anticipent les besoins de demain.",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Sécurité",
      description:
        "La protection de vos données et systèmes est notre priorité absolue. Nous intégrons la sécurité dès la conception de chaque solution.",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      title: "Fiabilité",
      description:
        "Nos solutions sont conçues pour durer et performer dans le temps. Nous nous engageons sur la qualité et la stabilité de nos réalisations.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white/80 via-orange-50/30 to-blue-50/20 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Subtle background animation */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute w-32 h-32 bg-orange-400/10 rounded-full blur-lg animate-float-slow" style={{ top: '10%', left: '10%' }} />
          <div className="absolute w-40 h-40 bg-orange-500/10 rounded-full blur-lg animate-float-medium" style={{ bottom: '15%', right: '15%' }} />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 animate-fade-in-up">
            Nos Valeurs 
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}