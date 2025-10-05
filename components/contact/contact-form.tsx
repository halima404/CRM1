"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Form submitted:", formData)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      })
    } catch (error) {
      console.log("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const services = [
    { value: "creation", label: "Création de Logiciels" },
    { value: "maintenance", label: "Maintenance" },
    { value: "systemes", label: "Systèmes & Réseaux" },
    { value: "securite", label: "Cybersécurité" },
    { value: "consultation", label: "Consultation" },
    { value: "autre", label: "Autre" },
  ]

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <Card className="bg-white border border-gray-100 rounded-2xl shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-orange-600 p-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <CardTitle className="text-6xl md:text-7xl font-bold text-white mb-6">Parlons de votre projet</CardTitle>
            <p className="text-3xl md:text-4xl text-white/90">Obtenez un devis personnalisé sous 24h</p>
          </div>
        </CardHeader>

        <CardContent className="p-8">
          {submitStatus === "success" && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl text-center">
              <p className="text-3xl font-bold text-green-800 mb-2">Message envoyé avec succès !</p>
              <p className="text-2xl text-green-600">Nous vous recontacterons sous 24h.</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl text-center">
              <p className="text-3xl font-bold text-red-800 mb-2">Erreur lors de l'envoi</p>
              <p className="text-2xl text-red-600">Veuillez réessayer ou nous contacter directement.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Vos informations */}
            <div className="border border-gray-200 rounded-xl p-8">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Vos informations</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label htmlFor="name" className="block text-2xl md:text-3xl font-semibold text-gray-700">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-24 border-2 rounded-xl text-3xl px-6"
                    placeholder="Jean Dupont"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="email" className="block text-2xl md:text-3xl font-semibold text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-24 border-2 rounded-xl text-3xl px-6"
                    placeholder="jean@exemple.com"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="company" className="block text-2xl md:text-3xl font-semibold text-gray-700">
                    Entreprise
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full h-24 border-2 rounded-xl text-3xl px-6"
                    placeholder="Nom de l'entreprise"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="phone" className="block text-2xl md:text-3xl font-semibold text-gray-700">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-24 border-2 rounded-xl text-3xl px-6"
                    placeholder="+224 XX XX XX XX"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            {/* Votre projet */}
            <div className="border border-gray-200 rounded-xl p-8">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Votre projet</h3>
              <div className="space-y-8">
                <div className="space-y-4">
                  <label htmlFor="service" className="block text-2xl md:text-3xl font-semibold text-gray-700">
                    Service souhaité <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-24 border-2 rounded-xl bg-white text-3xl text-gray-900 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isSubmitting}
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value} className="text-3xl">
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label htmlFor="budget" className="block text-2xl md:text-3xl font-semibold text-gray-700">
                      Budget estimé
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full h-20 border-2 rounded-xl bg-white text-2xl text-gray-900 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    >
                      <option value="">Sélectionnez un budget</option>
                      <option value="< 50M">Moins de 50M GNF</option>
                      <option value="50M-150M">50M - 150M GNF</option>
                      <option value="150M-500M">150M - 500M GNF</option>
                      <option value="500M+">Plus de 500M GNF</option>
                      <option value="a-definir">À définir</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="timeline" className="block text-2xl md:text-3xl font-semibold text-gray-700">
                      Délai souhaité
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full h-20 border-2 rounded-xl bg-white text-2xl text-gray-900 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    >
                      <option value="">Sélectionnez un délai</option>
                      <option value="urgent">Urgent (1 mois)</option>
                      <option value="1-3mois">1-3 mois</option>
                      <option value="3-6mois">3-6 mois</option>
                      <option value="6mois+">+ 6 mois</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <label htmlFor="message" className="block text-2xl md:text-3xl font-semibold text-gray-700">
                    Décrivez votre projet <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez vos objectifs, fonctionnalités souhaitées, contraintes techniques..."
                    className="w-full border-2 rounded-xl text-3xl px-6 py-6 resize-y"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto min-w-[400px] h-24 bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white text-3xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
              <p className="text-2xl md:text-3xl text-gray-600">Réponse garantie sous 24h ouvrées</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}