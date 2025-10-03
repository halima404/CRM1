import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMissionVision } from "@/components/about/about-mission-vision"
import { CompanyHistory } from "@/components/about/company-history"
import { CompanyValues } from "@/components/about/company-values"
import { TeamSection } from "@/components/about/team-section"
import { AboutTimeline } from "@/components/about/about-timeline"
import { AboutCTA } from "@/components/about/about-cta"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <AboutHero />
        <AboutMissionVision />
        <CompanyHistory />
        <CompanyValues />
        <TeamSection />
        <AboutTimeline />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  )
}
