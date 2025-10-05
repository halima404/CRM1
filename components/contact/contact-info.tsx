import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <Card className="bg-slate-900 text-white border-slate-700">
        <CardHeader>
          <CardTitle className="text-2xl">Informations de contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-6 h-6 mt-1 flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-full h-full text-orange-400"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Adresse</h3>
              <p className="text-slate-300">
                Conakry, Guinée
                <br />
                Quartier Foulamadina
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-6 h-6 mt-1 flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-full h-full text-orange-400"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <a
                href="mailto:contact@curium-808.com"
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                contact@curium-808.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-6 h-6 mt-1 flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-full h-full text-orange-400"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
              <a href="tel:+224123456789" className="text-orange-400 hover:text-orange-300 transition-colors">
                +224 123 456 789
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-6 h-6 mt-1 flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-full h-full text-orange-400"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Horaires</h3>
              <p className="text-slate-300">
                Lundi - Vendredi: 8h00 - 18h00
                <br />
                Samedi: 9h00 - 13h00
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white border-0">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Pourquoi choisir Curium-808 ?</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
              <span>Expertise technique reconnue</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
              <span>Solutions sur mesure</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
              <span>Support technique réactif</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
              <span>Accompagnement personnalisé</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
