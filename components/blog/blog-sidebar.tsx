"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const categories = [
  { name: "Cybersécurité", count: 8 },
  { name: "Développement", count: 12 },
  { name: "Innovation", count: 6 },
  { name: "Vie d'agence", count: 4 },
  { name: "Transformation Digitale", count: 7 },
]

const recentPosts = [
  {
    title: "5 Erreurs de Cybersécurité que les PME Doivent Éviter",
    date: "15 janvier 2025",
  },
  {
    title: "Logiciel sur mesure : Les signes qui ne trompent pas",
    date: "12 janvier 2025",
  },
  {
    title: "L'IA en Afrique : Mythe ou Opportunité ?",
    date: "8 janvier 2025",
  },
]

export function BlogSidebar() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-muted/50 p-6 rounded-lg">
        <h3 className="font-semibold mb-4">Rechercher</h3>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <Input type="search" placeholder="Rechercher un article..." className="pl-10" />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-muted/50 p-6 rounded-lg">
        <h3 className="font-semibold mb-4">Catégories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center justify-between">
              <button className="text-left hover:text-primary transition-colors">{category.name}</button>
              <Badge variant="outline" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
        <div className="text-center mb-4">
          <svg className="h-8 w-8 text-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <h3 className="font-semibold">Restez à la pointe</h3>
        </div>
        <p className="text-sm text-muted-foreground text-center mb-4 text-pretty">
          Recevez nos analyses et conseils directement dans votre boîte mail. Pas de spam, que du contenu de qualité.
        </p>
        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">
            S'abonner
          </Button>
        </form>
      </div>

      {/* Recent Posts */}
      <div className="bg-muted/50 p-6 rounded-lg">
        <h3 className="font-semibold mb-4">Articles Récents</h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="border-b border-border/50 pb-3 last:border-b-0 last:pb-0">
              <h4 className="text-sm font-medium text-balance hover:text-primary transition-colors cursor-pointer">
                {post.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
