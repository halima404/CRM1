import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyHistory } from "@/components/about/company-history"
import { CompanyValues } from "@/components/about/company-values"
import { TeamSection } from "@/components/about/team-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <AboutHero />
        <CompanyHistory />
        <CompanyValues />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
