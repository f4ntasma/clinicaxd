import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SpecialtyGrid } from "@/components/specialty-grid"
import { QuickBooking } from "@/components/quick-booking"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { blogPosts, insurances } from "@/lib/mock-data"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SpecialtyGrid />
      <QuickBooking />

      {/* Lab Results Section */}
      <section id="resultados" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados de Laboratorio</h2>
              <p className="text-muted-foreground mb-6">
                Accede a tus resultados de laboratorio de forma segura en línea. Disponibles 24 horas después de
                realizado el análisis.
              </p>
              <Button className="bg-primary hover:bg-primary/90 mb-4">Ir a Resultados</Button>
              <p className="text-sm text-muted-foreground">
                Privacidad y seguridad garantizadas • Encriptación SSL • HIPAA compliant
              </p>
            </div>
            <Card className="bg-muted p-6 border-border flex items-center justify-center min-h-64">
              <div className="text-center text-muted-foreground">Tablero de Resultados</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Telemedicine Section */}
      <section id="telemedicina" className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Telemedicina</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 border-border bg-background">
              <h3 className="text-xl font-semibold mb-4">Consulta Presencial</h3>
              <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                <li>✓ Examen físico completo</li>
                <li>✓ Diagnóstico inmediato</li>
                <li>✓ Procedimientos en sala</li>
              </ul>
              <Button variant="outline">Agendar Presencial</Button>
            </Card>
            <Card className="p-8 border-border bg-background">
              <h3 className="text-xl font-semibold mb-4">Consulta Virtual</h3>
              <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                <li>✓ Video llamada HD</li>
                <li>✓ Disponible desde casa</li>
                <li>✓ Recetas digitales</li>
              </ul>
              <Button className="bg-secondary hover:bg-secondary/90">Agendar Teleconsulta</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance & Pricing */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Seguros Aceptados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {insurances.map((insurance, i) => (
              <Card key={i} className="p-6 text-center border-border grayscale hover:grayscale-0 transition">
                <div className="font-semibold text-sm">{insurance.name}</div>
              </Card>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-center mb-8">Paquetes de Salud</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Chequeo Preventivo",
                price: "S/ 299",
                services: ["Examen general", "Análisis de sangre", "ECG"],
              },
              { name: "Salud Mujer", price: "S/ 399", services: ["Ginecología", "Mamografía", "Ecografía"] },
              {
                name: "Salud Integral",
                price: "S/ 599",
                services: ["Todos los anteriores", "Dermatología", "Nutrición"],
              },
            ].map((pkg, i) => (
              <Card key={i} className="p-6 border-border text-center hover:shadow-lg transition">
                <h4 className="text-lg font-semibold mb-2">{pkg.name}</h4>
                <p className="text-2xl font-bold text-primary mb-4">{pkg.price}</p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  {pkg.services.map((s, j) => (
                    <li key={j}>✓ {s}</li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">Contratar</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Blog */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Blog de Salud</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-border overflow-hidden hover:shadow-lg transition cursor-pointer">
                <div className="bg-primary/20 h-40" />
                <div className="p-6">
                  <div className="text-xs font-semibold text-primary mb-2">{post.category}</div>
                  <h3 className="font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline">Ver todos los artículos</Button>
          </div>
        </div>
      </section>

      <FaqSection />
      <Footer />
    </>
  )
}
