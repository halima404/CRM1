import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Curium-808 | Solutions Technologiques Innovantes",
  description:
    "Curium-808 transforme les défis technologiques en opportunités de croissance grâce à des solutions sur mesure, sécurisées et conçues avec passion.",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gradient-to-b from-orange-50/40 via-white to-amber-50/40`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
