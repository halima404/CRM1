import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const articles = [
  {
    slug: "logiciel-sur-mesure-signes",
    title: "Logiciel sur mesure : Les signes qui ne trompent pas",
    excerpt:
      "Comment savoir si votre entreprise a besoin d'un logiciel sur mesure ? Voici les indicateurs clés à surveiller.",
    category: "Développement",
    author: "Ibrahima Bano Diallo",
    date: "12 janvier 2025",
    image: "/custom-software-development-code-screen.jpg",
  },
  {
    slug: "ia-afrique-opportunite",
    title: "L'IA en Afrique : Mythe ou Opportunité ?",
    excerpt:
      "L'intelligence artificielle transforme le paysage technologique africain. Analyse des défis et opportunités.",
    category: "Innovation",
    author: "Abdoulaye Sall",
    date: "8 janvier 2025",
    image: "/artificial-intelligence-africa-technology-innovation.jpg",
  },
  {
    slug: "curium-808-histoire-passion",
    title: 'Pourquoi nous avons nommé notre entreprise "Curium-808" : une histoire de passion',
    excerpt: "L'histoire derrière notre nom et comment la transformation guide notre mission quotidienne.",
    category: "Vie d'agence",
    author: "Équipe Curium-808",
    date: "5 janvier 2025",
    image: "/curium-element-transformation-chemistry-innovation.jpg",
  },
  {
    slug: "ecommerce-idee-au-code",
    title: "De l'idée au code : comment nous avons construit une solution e-commerce complète",
    excerpt: "Retour d'expérience sur un projet client : défis, solutions et leçons apprises.",
    category: "Développement",
    author: "Ibrahima Bano Diallo",
    date: "2 janvier 2025",
    image: "/ecommerce-development-process-coding-teamwork.jpg",
  },
  {
    slug: "securiser-infrastructure-it-guinee",
    title: "Sécuriser son infrastructure IT : Guide pratique pour les entreprises guinéennes",
    excerpt: "Les étapes essentielles pour protéger vos systèmes et données dans un environnement en évolution.",
    category: "Cybersécurité",
    author: "Abdoulaye Sall",
    date: "28 décembre 2024",
    image: "/it-infrastructure-security-network-protection.jpg",
  },
  {
    slug: "tendances-tech-2025-afrique",
    title: "Tendances Tech 2025 : Ce qui va transformer le paysage numérique africain",
    excerpt: "Notre vision des technologies qui façonneront l'avenir du continent dans les mois à venir.",
    category: "Innovation",
    author: "Équipe Curium-808",
    date: "25 décembre 2024",
    image: "/tech-trends-2025-africa-digital-transformation.jpg",
  },
]

export function ArticleGrid() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">Derniers Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <article key={article.slug} className="group">
            <Link href={`/blog/${article.slug}`} className="block">
              <div className="relative overflow-hidden rounded-lg bg-muted mb-4">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-balance group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>{article.author}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
