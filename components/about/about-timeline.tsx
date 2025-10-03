"use client"

export function AboutTimeline() {
  const milestones = [
    { year: "2024", title: "Fondation", desc: "Création de Curium-808 et premiers clients accompagnés." },
    { year: "2025", title: "Scale", desc: "Renforcement des expertises Cloud, Sécurité et Mobile." },
    { year: "2026", title: "Innovation", desc: "Lancement d'initiatives R&D et partenariats stratégiques." },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Notre Parcours
            <span className="relative block mx-auto mt-2 w-full max-w-md">
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="url(#about-tl)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="about-tl" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#F97316" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-orange-200 rounded-full" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-1/2">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow">
                      <div className="text-sm font-semibold text-blue-600">{m.year}</div>
                      <h3 className="text-xl font-bold text-gray-900">{m.title}</h3>
                      <p className="text-gray-600 mt-2">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 ring-8 ring-white" />
                  <div className="w-full md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
