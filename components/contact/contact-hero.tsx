export function ContactHero() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20">
      {/* SVG Background Layer */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/bg-shape-1.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top right',
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-20">
        {/* Title with thin gradient underline */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Parlons de votre projet
          <span className="relative block mx-auto mt-2 w-full max-w-xl">
            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
              <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="url(#contact-gradient)" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <linearGradient id="contact-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#F97316" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
          Transformons ensemble vos défis technologiques en opportunités de croissance. Notre équipe est prête à vous
          accompagner dans votre transformation digitale.
        </p>
      </div>
    </section>
  )
}
