import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { TestimonialSection } from "@/components/testimonial-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  )
}
