export function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
      {/* SVG Background Layer */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/bg-shape-1.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Parlons de votre projet</h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto text-balance">
          Transformons ensemble vos défis technologiques en opportunités de croissance. Notre équipe est prête à vous
          accompagner dans votre transformation digitale.
        </p>
      </div>
    </section>
  )
}
