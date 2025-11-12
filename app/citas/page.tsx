"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QuickBooking } from "@/components/quick-booking"

export default function CitasPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background py-12">
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
