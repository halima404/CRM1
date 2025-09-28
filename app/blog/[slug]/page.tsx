import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock data for articles - in a real app, this would come from a CMS or database
const articles = {
  "cybersecurite-pme-erreurs-eviter": {
    title: "5 Erreurs de Cybersécurité que les PME Doivent Éviter",
    excerpt:
      "La cybersécurité n'est plus un luxe pour les grandes entreprises. Découvrez les erreurs les plus courantes et comment les éviter.",
    content: `
      <p>Dans un monde de plus en plus connecté, la cybersécurité est devenue un enjeu majeur pour toutes les entreprises, y compris les PME. Malheureusement, beaucoup d'entre elles commettent des erreurs qui peuvent coûter cher.</p>
      
      <h2>1. Négliger la formation des employés</h2>
      <p>L'erreur humaine reste la principale cause de failles de sécurité. Il est crucial de former régulièrement vos équipes aux bonnes pratiques de cybersécurité.</p>
      
      <h2>2. Utiliser des mots de passe faibles</h2>
      <p>Les mots de passe simples sont la porte d'entrée préférée des cybercriminels. Implémentez une politique de mots de passe robuste et encouragez l'utilisation de gestionnaires de mots de passe.</p>
      
      <h2>3. Ignorer les mises à jour de sécurité</h2>
      <p>Reporter les mises à jour système et logicielles expose votre entreprise à des vulnérabilités connues. Automatisez ces processus quand c'est possible.</p>
      
      <h2>4. Absence de sauvegarde régulière</h2>
      <p>Sans stratégie de sauvegarde solide, une attaque ransomware peut paralyser votre activité. Implémentez la règle 3-2-1 : 3 copies, 2 supports différents, 1 hors site.</p>
      
      <h2>5. Sous-estimer les menaces internes</h2>
      <p>Les menaces ne viennent pas toujours de l'extérieur. Mettez en place des contrôles d'accès appropriés et surveillez les activités suspectes.</p>
      
      <p>Chez Curium-808, nous accompagnons les PME dans la mise en place de stratégies de cybersécurité adaptées à leurs besoins et leur budget.</p>
    `,
    image: "/cybersecurity-shield-protection-digital.jpg",
    author: "Abdoulaye Sall",
    date: "15 janvier 2025",
    readTime: "5 min",
    category: "Cybersécurité",
    tags: ["Sécurité", "PME", "Formation", "Prévention"],
  },
  "logiciel-sur-mesure-signes": {
    title: "Logiciel sur mesure : Les signes qui ne trompent pas",
    excerpt:
      "Comment savoir si votre entreprise a besoin d'un logiciel sur mesure ? Voici les indicateurs clés à surveiller.",
    content: `
      <p>Beaucoup d'entreprises se demandent s'il est temps d'investir dans un logiciel sur mesure. Voici les signes révélateurs qui indiquent que c'est le moment de franchir le pas.</p>
      
      <h2>Vous perdez du temps avec des processus manuels</h2>
      <p>Si vos équipes passent des heures sur des tâches répétitives qui pourraient être automatisées, un logiciel sur mesure peut transformer votre productivité.</p>
      
      <h2>Les solutions existantes ne répondent pas à vos besoins</h2>
      <p>Quand vous devez adapter vos processus aux limitations d'un logiciel générique, il est temps de penser sur mesure.</p>
      
      <h2>Vous jongler entre plusieurs outils</h2>
      <p>L'utilisation de multiples applications non intégrées crée des silos de données et des inefficacités. Une solution unifiée peut révolutionner votre workflow.</p>
      
      <h2>Votre croissance est freinée par vos outils</h2>
      <p>Si vos systèmes actuels ne peuvent pas évoluer avec votre entreprise, investir dans du sur mesure devient un impératif stratégique.</p>
      
      <p>Chez Curium-808, nous analysons vos besoins spécifiques pour créer des solutions qui s'adaptent parfaitement à votre activité.</p>
    `,
    image: "/custom-software-development-code-screen.jpg",
    author: "Ibrahima Bano Diallo",
    date: "12 janvier 2025",
    readTime: "4 min",
    category: "Développement",
    tags: ["Logiciel sur mesure", "Productivité", "Automatisation", "ROI"],
  },
  "ia-afrique-opportunite": {
    title: "L'IA en Afrique : Mythe ou Opportunité ?",
    excerpt:
      "L'intelligence artificielle transforme le paysage technologique africain. Analyse des défis et opportunités.",
    content: `
      <p>L'intelligence artificielle suscite beaucoup d'espoirs en Afrique, mais aussi des interrogations. Faisons le point sur les réalités du terrain.</p>
      
      <h2>Les opportunités sont réelles</h2>
      <p>L'IA peut révolutionner des secteurs clés comme la santé, l'agriculture et l'éducation, en apportant des solutions adaptées aux défis africains.</p>
      
      <h2>Les défis à surmonter</h2>
      <p>Infrastructure, formation, financement : plusieurs obstacles doivent être levés pour démocratiser l'IA sur le continent.</p>
      
      <h2>Des success stories inspirantes</h2>
      <p>De nombreuses startups africaines prouvent déjà que l'IA peut créer de la valeur et résoudre des problèmes locaux.</p>
      
      <h2>Notre vision chez Curium-808</h2>
      <p>Nous croyons en une IA accessible et utile, qui serve le développement économique et social de l'Afrique.</p>
    `,
    image: "/artificial-intelligence-africa-technology-innovation.jpg",
    author: "Abdoulaye Sall",
    date: "8 janvier 2025",
    readTime: "6 min",
    category: "Innovation",
    tags: ["Intelligence Artificielle", "Afrique", "Innovation", "Technologie"],
  },
  "curium-808-histoire-passion": {
    title: 'Pourquoi nous avons nommé notre entreprise "Curium-808" : une histoire de passion',
    excerpt: "L'histoire derrière notre nom et comment la transformation guide notre mission quotidienne.",
    content: `
      <p>Le nom "Curium-808" n'a pas été choisi au hasard. Il reflète notre philosophie d'entreprise et notre vision de la technologie comme force de transformation.</p>
      
      <h2>Le Curium : un élément de transformation</h2>
      <p>Le Curium est un élément chimique artificiel, créé par l'homme pour repousser les limites de la science. Comme cet élément, nous créons des solutions technologiques qui n'existaient pas auparavant.</p>
      
      <h2>808 : La fréquence de l'innovation</h2>
      <p>Le nombre 808 évoque pour nous la fréquence de l'innovation constante. C'est le rythme auquel nous voulons faire évoluer les entreprises africaines.</p>
      
      <h2>Une mission de transformation</h2>
      <p>Chaque jour, nous travaillons à transformer les défis technologiques en opportunités de croissance pour nos clients.</p>
      
      <h2>L'avenir que nous construisons</h2>
      <p>Notre nom nous rappelle que nous ne sommes pas seulement des développeurs, mais des architectes du futur numérique africain.</p>
    `,
    image: "/curium-element-transformation-chemistry-innovation.jpg",
    author: "Équipe Curium-808",
    date: "5 janvier 2025",
    readTime: "3 min",
    category: "Vie d'agence",
    tags: ["Histoire", "Mission", "Vision", "Transformation"],
  },
  "ecommerce-idee-au-code": {
    title: "De l'idée au code : comment nous avons construit une solution e-commerce complète",
    excerpt: "Retour d'expérience sur un projet client : défis, solutions et leçons apprises.",
    content: `
      <p>Récemment, nous avons accompagné une entreprise guinéenne dans la création de sa plateforme e-commerce. Voici les coulisses de ce projet passionnant.</p>
      
      <h2>Le défi initial</h2>
      <p>Notre client souhaitait digitaliser son commerce traditionnel, mais les solutions existantes ne correspondaient pas à ses besoins spécifiques et à son budget.</p>
      
      <h2>Notre approche méthodologique</h2>
      <p>Nous avons commencé par une phase d'analyse approfondie pour comprendre les processus métier, les contraintes techniques et les attentes des utilisateurs finaux.</p>
      
      <h2>Les défis techniques relevés</h2>
      <p>Intégration des paiements mobiles locaux, gestion des stocks en temps réel, interface multilingue (français, soussou, peul) - chaque défi a été une opportunité d'innovation.</p>
      
      <h2>Résultats et impact</h2>
      <p>En 6 mois, la plateforme a généré une augmentation de 300% des ventes en ligne et permis l'expansion vers 3 nouvelles régions.</p>
      
      <h2>Les leçons apprises</h2>
      <p>L'importance de l'écoute client, l'adaptation aux réalités locales et la formation des équipes sont les clés du succès d'un projet digital.</p>
    `,
    image: "/ecommerce-development-process-coding-teamwork.jpg",
    author: "Ibrahima Bano Diallo",
    date: "2 janvier 2025",
    readTime: "7 min",
    category: "Développement",
    tags: ["E-commerce", "Projet client", "Innovation", "Success story"],
  },
  "securiser-infrastructure-it-guinee": {
    title: "Sécuriser son infrastructure IT : Guide pratique pour les entreprises guinéennes",
    excerpt: "Les étapes essentielles pour protéger vos systèmes et données dans un environnement en évolution.",
    content: `
      <p>La sécurisation de l'infrastructure IT est devenue cruciale pour les entreprises guinéennes. Voici un guide pratique pour protéger efficacement vos systèmes.</p>
      
      <h2>Évaluation des risques spécifiques</h2>
      <p>Chaque entreprise a ses propres vulnérabilités. Une analyse de risque personnalisée est le point de départ de toute stratégie de sécurité.</p>
      
      <h2>Mise en place des fondamentaux</h2>
      <p>Pare-feu, antivirus, mises à jour régulières : ces bases sont essentielles mais souvent négligées par manque de ressources ou de connaissances.</p>
      
      <h2>Formation et sensibilisation</h2>
      <p>Vos employés sont votre première ligne de défense. Investir dans leur formation en cybersécurité est un impératif stratégique.</p>
      
      <h2>Surveillance et réaction</h2>
      <p>Détecter rapidement les incidents et avoir un plan de réponse structuré peut faire la différence entre un incident mineur et une catastrophe.</p>
      
      <h2>Accompagnement local</h2>
      <p>Chez Curium-808, nous proposons des solutions de sécurité adaptées au contexte guinéen et à votre budget.</p>
    `,
    image: "/it-infrastructure-security-network-protection.jpg",
    author: "Abdoulaye Sall",
    date: "28 décembre 2024",
    readTime: "8 min",
    category: "Cybersécurité",
    tags: ["Infrastructure", "Sécurité", "Guide pratique", "Guinée"],
  },
  "tendances-tech-2025-afrique": {
    title: "Tendances Tech 2025 : Ce qui va transformer le paysage numérique africain",
    excerpt: "Notre vision des technologies qui façonneront l'avenir du continent dans les mois à venir.",
    content: `
      <p>2025 s'annonce comme une année charnière pour la technologie en Afrique. Voici les tendances que nous surveillons de près.</p>
      
      <h2>L'essor de l'IA générative</h2>
      <p>Les outils d'IA générative commencent à être adoptés massivement, transformant la création de contenu et l'automatisation des processus.</p>
      
      <h2>Fintech et inclusion financière</h2>
      <p>Les solutions de paiement mobile continuent d'évoluer, avec de nouveaux services qui rapprochent les populations rurales du système financier.</p>
      
      <h2>Cloud et edge computing</h2>
      <p>L'amélioration des infrastructures réseau permet une adoption plus large du cloud computing et des solutions edge.</p>
      
      <h2>Cybersécurité : une priorité absolue</h2>
      <p>Avec la digitalisation croissante, la cybersécurité devient un enjeu majeur pour toutes les organisations africaines.</p>
      
      <h2>Notre rôle dans cette transformation</h2>
      <p>Chez Curium-808, nous accompagnons cette révolution en proposant des solutions innovantes et accessibles.</p>
    `,
    image: "/tech-trends-2025-africa-digital-transformation.jpg",
    author: "Équipe Curium-808",
    date: "25 décembre 2024",
    readTime: "6 min",
    category: "Innovation",
    tags: ["Tendances", "2025", "Afrique", "Transformation digitale"],
  },
}

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Article Header */}
      <div className="bg-gradient-to-b from-muted/50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/blog">
                <Button variant="ghost" className="mb-4">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Retour au blog
                </Button>
              </Link>
              <Badge className="mb-4">{article.category}</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">{article.title}</h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <span>Par {article.author}</span>
              <span>{article.date}</span>
              <span>{article.readTime} de lecture</span>
            </div>

            <p className="text-xl text-muted-foreground text-pretty">{article.excerpt}</p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="mb-12">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Besoin d'accompagnement ?</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Nos experts sont là pour vous aider à concrétiser vos projets technologiques.
            </p>
            <Button size="lg">Contactez-nous</Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }))
}
