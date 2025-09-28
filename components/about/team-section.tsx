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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Notre Équipe</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-6">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2 rounded-lg">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.title}</p>
                  <blockquote className="text-muted-foreground italic leading-relaxed">"{member.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
