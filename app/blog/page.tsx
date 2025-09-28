import { BlogHero } from "@/components/blog/blog-hero"
import { FeaturedArticle } from "@/components/blog/featured-article"
import { ArticleGrid } from "@/components/blog/article-grid"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <FeaturedArticle />
            <ArticleGrid />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}
