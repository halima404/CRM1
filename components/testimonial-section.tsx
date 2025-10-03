import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Testimonial data
const testimonials = [
  {
    name: "Aminata Diallo",
    role: "Directrice, FinTech Guinée",
    text: "L'application bancaire développée par Curium-808 a révolutionné notre service client. Une équipe réactive et innovante !",
    image: "/avatar-aminata.jpg",
  },
  {
    name: "Mamadou Bah",
    role: "CEO, Retail Solutions",
    text: "Grâce à leur système e-commerce, nos ventes ont augmenté de 40 % en six mois. Un travail exceptionnel !",
    image: "/avatar-mamadou.jpg",
  },
  {
    name: "Fatoumata Sow",
    role: "CTO, Smart Buildings",
    text: "La solution IoT de Curium-808 offre une sécurité inégalée. Leur expertise est impressionnante.",
    image: "/avatar-fatoumata.jpg",
  },
]

export function TestimonialSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-blue-50/30 via-white/60 to-orange-50/30 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-balance mb-8 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Ce que disent nos clients
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 text-pretty max-w-4xl mx-auto animate-fade-in-up">
            Découvrez les retours de nos partenaires qui ont bénéficié de nos solutions innovantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 bg-white/20 backdrop-blur-lg border-none rounded-3xl overflow-hidden transform hover:rotate-1 hover:scale-105"
            >
              <CardHeader className="p-8 text-center bg-gradient-to-br from-blue-100/30 to-orange-100/30">
                <div className="mx-auto mb-6 animate-scale-up">
                  <Avatar className="w-20 h-20 border-4 border-white/50 group-hover:border-orange-300 transition-all duration-300">
                    <AvatarImage src={testimonial.image || "/placeholder-avatar.jpg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </CardHeader>
              <CardContent className="p-8 text-center bg-white/10 backdrop-blur-md">
                <CardDescription className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 animate-fade-in-up">
                  {testimonial.text}
                </CardDescription>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-600 hover:text-orange-500 hover:bg-blue-50/30 border border-blue-200 rounded-full px-6 py-2 transition-all duration-300 animate-hover-glow"
                  asChild
                >
                  <Link href="/testimonials">Lire plus</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Subtle background effect */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute w-5 h-5 bg-blue-300 rounded-full animate-float-slow" style={{ top: '15%', left: '10%' }} />
        <div className="absolute w-7 h-7 bg-orange-300 rounded-full animate-float-medium" style={{ top: '40%', right: '15%' }} />
        <div className="absolute w-4 h-4 bg-blue-200 rounded-full animate-float-fast" style={{ bottom: '20%', left: '25%' }} />
      </div>
    </section>
  )
}