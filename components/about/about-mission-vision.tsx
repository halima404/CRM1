"use client"

export function AboutMissionVision() {
  const items = [
    {
      title: "Notre Mission",
      desc:
        "Offrir des solutions technologiques sur mesure, sécurisées et durables qui transforment les défis en opportunités de croissance.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      ),
    },
    {
      title: "Notre Vision",
      desc:
        "Construire un écosystème numérique de confiance en Guinée et au-delà, où l'innovation crée un impact durable pour les organisations.",
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="vision" className="py-20 bg-white/60">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">Mission & Vision</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Notre Cap Nord
              <span className="relative block mx-auto mt-2 w-full max-w-md">
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="url(#about-mv)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="about-mv" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {items.map((it, i) => (
              <div key={i} className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-sm p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-3">{it.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{it.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{it.desc}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
