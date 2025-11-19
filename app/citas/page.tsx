"use client"
import PillNav from "@/components/PillNav"
import { Footer } from "@/components/footer"
import { QuickBooking } from "@/components/quick-booking"

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Médicos", href: "/medicos" },
  { label: "Citas", href: "/citas" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Contacto", href: "/contacto" },
]

export default function CitasPage() {
  return (
    <>
      <PillNav
        logo="/logope.png"
        logoAlt="Clínicaxd Logo"
        items={navItems}
        baseColor="#0d9488"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#0d9488"
      />
      <div className="min-h-screen bg-background pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-4 text-center">Agendar tu Cita</h1>
          <p className="text-center text-muted-foreground mb-12">
            Sigue los pasos para reservar tu consulta con nuestros especialistas.
          </p>
          <QuickBooking />
        </div>
      </div>
      <Footer />
    </>
  )
}
