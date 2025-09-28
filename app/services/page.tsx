import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServiceDetail } from "@/components/services/service-detail"
import { ServicesContact } from "@/components/services/services-contact"

const services = [
  {
    id: "creation",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Création de Logiciels sur Mesure",
    description:
      "Nous développons des applications personnalisées qui répondent parfaitement à vos besoins métier. De l'analyse des exigences au déploiement, nous vous accompagnons dans la création de solutions logicielles innovantes et performantes.",
    features: [
      "Applications web modernes (React, Vue.js, Angular)",
      "Applications mobiles natives et hybrides",
      "Systèmes de gestion d'entreprise (ERP, CRM)",
      "APIs et services web sécurisés",
      "Intégration de bases de données",
      "Interface utilisateur intuitive et responsive",
    ],
    technologies: "Python, Java, JavaScript, React, Node.js, Django, .NET",
  },
  {
    id: "maintenance",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
        />
      </svg>
    ),
    title: "Maintenance & Mise à Jour",
    description:
      "Assurez la pérennité et les performances optimales de vos systèmes existants. Notre service de maintenance proactive garantit la sécurité, la stabilité et l'évolution continue de vos applications.",
    features: [
      "Surveillance continue des performances",
      "Mises à jour de sécurité régulières",
      "Correction de bugs et optimisations",
      "Sauvegarde automatisée des données",
      "Support technique réactif 24/7",
      "Évolution fonctionnelle selon vos besoins",
    ],
    technologies: "Monitoring, DevOps, CI/CD, Docker, Kubernetes, AWS, Azure",
  },
  {
    id: "systemes",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    title: "Installation Systèmes & Réseaux",
    description:
      "Conception et déploiement d'infrastructures réseau robustes et évolutives. Nous mettons en place des architectures techniques fiables qui supportent la croissance de votre entreprise.",
    features: [
      "Architecture réseau sécurisée",
      "Configuration serveurs et cloud",
      "Virtualisation et conteneurisation",
      "Réseaux privés virtuels (VPN)",
      "Systèmes de sauvegarde automatisés",
      "Optimisation des performances réseau",
    ],
    technologies: "Linux, Windows Server, VMware, Cisco, Mikrotik, pfSense",
  },
  {
    id: "securite",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Sécurité Informatique & Cybersécurité",
    description:
      "Protection complète de vos actifs numériques contre les menaces cybernétiques. Nous implémentons des stratégies de sécurité multicouches pour garantir l'intégrité et la confidentialité de vos données.",
    features: [
      "Audit de sécurité et tests de pénétration",
      "Pare-feu et systèmes de détection d'intrusion",
      "Chiffrement des données sensibles",
      "Formation du personnel aux bonnes pratiques",
      "Plan de continuité d'activité",
      "Conformité RGPD et normes sectorielles",
    ],
    technologies: "Firewall, IDS/IPS, SIEM, Antivirus, Encryption, PKI",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <ServicesHero />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <ServiceDetail service={service} reversed={index % 2 === 1} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesContact />
      </main>

      <Footer />
    </div>
  )
}
