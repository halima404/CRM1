import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function FeaturedArticle() {
  return (
    <article className="group">
      <Link href="/blog/cybersecurite-pme-erreurs-eviter">
        <div className="relative overflow-hidden rounded-lg bg-muted cursor-pointer">
          <Image
            src="/cybersecurity-shield-protection-digital.jpg"
            alt="Article à la une"
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <Badge className="mb-3 bg-primary">Cybersécurité</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-balance mb-3">
              5 Erreurs de Cybersécurité que les PME en Guinée Doivent Éviter en 2025
            </h2>
            <p className="text-white/90 text-pretty leading-relaxed mb-4">
              La cybersécurité n'est plus un luxe pour les grandes entreprises. Découvrez les erreurs les plus courantes
              qui exposent les PME africaines aux cyberattaques et comment les éviter.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>Abdoulaye Sall</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>15 janvier 2025</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
