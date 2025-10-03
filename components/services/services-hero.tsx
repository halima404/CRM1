export function ServicesHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50/10 via-orange-50/10 to-blue-100/10 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 leading-tight animate-fade-in">
          Des solutions complètes pour vos{" "}
          <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            défis technologiques
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 text-pretty max-w-3xl mx-auto mb-10 bg-white/80 px-6 py-4 rounded-lg shadow-md animate-fade-in-up">
          Chez Curium-808, nous transformons vos idées en réalité numérique grâce à notre expertise technique et notre
          approche personnalisée. Découvrez nos services conçus pour propulser votre entreprise vers le succès.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <a
            href="#creation"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-orange-500 to-amber-600 px-8 py-3 text-sm font-medium text-white shadow-lg hover:from-blue-700 hover:via-orange-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
          >
            Découvrir nos services
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-blue-200 bg-white px-8 py-3 text-sm font-medium text-gray-900 shadow-md hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105"
          >
            Demander un devis
          </a>
        </div>
      </div>
      {/* Subtile background effect */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: '#f4a261' }} />
              <stop offset="100%" style={{ stopColor: '#2a6f97' }} />
            </radialGradient>
          </defs>
          <rect width="100" height="100" fill="url(#gradient)" />
        </svg>
      </div>
    </section>
  )
}