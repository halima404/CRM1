import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      {/* Formulaire pleine largeur */}
      <div className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </div>
      
      {/* Informations de contact en bas */}
      <div className="container mx-auto px-4 py-16">
        <ContactInfo />
      </div>
      
      <Footer />
    </main>
  )
}
