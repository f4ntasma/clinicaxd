import Link from "next/link"
import Image from "next/image"
import PillNav from "@/components/PillNav"
import { Hero } from "@/components/hero"
import { SpecialtyGrid } from "@/components/specialty-grid"
import { QuickBooking } from "@/components/quick-booking"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { blogPosts, insurances } from "@/lib/mock-data"

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Médicos", href: "/medicos" },
  { label: "Citas", href: "/citas" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Contacto", href: "/contacto" },
]

export default function Home() {
  return (
    <>
      <PillNav
        logo="/logope.png"
        logoAlt="Clínicaxd Logo"
        items={navItems}
        baseColor="#ede6e7ff"
        pillColor="#ffffffff"
        hoveredPillTextColor="#595c5cff"
        pillTextColor="#0d9488"
      />
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
              <Button className="bg-primary hover:bg-primary/90 mb-4" asChild>
                <Link href="/citas">Ir a Resultados</Link>
              </Button>
              <p className="text-sm text-muted-foreground">
                Privacidad y seguridad garantizadas • Encriptación SSL • HIPAA compliant
              </p>
            </div>
            <Card className="bg-muted p-2 border-border flex items-center justify-center min-h-64 overflow-hidden">
              <img className="border-boder flex rounded-2xl" src="https://previews.123rf.com/images/akkamulator/akkamulator1710/akkamulator171000363/87897731-doctor-and-patient-close-up-of-hands-physician-talking-about-medical-examination-results.jpg" alt="Lab Results Dashboard" />
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
              <Card key={post.id} className="border-border overflow-hidden hover:shadow-lg transition flex flex-col">
                <Link href="#" className="block">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.imageUrl}
                      alt={`Imagen para ${post.title}`}
                      fill
                      className="object-cover rounded-t-2xl"
                    />
                  </div>
                  <CardHeader>
                    <p className="text-xs font-semibold text-primary mb-2">{post.category}</p>
                    <h3 className="font-semibold">{post.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/citas">Ver todos los artículos</Link>
            </Button>
          </div>
        </div>
      </section>

      <FaqSection />
      <Footer />
    </>
  )
}
