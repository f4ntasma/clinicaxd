"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", consent: false })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Mensaje enviado exitosamente!")
    setForm({ name: "", email: "", subject: "", message: "", consent: false })
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12 text-center">Contacto</h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Nombre</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full p-3 border border-border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full p-3 border border-border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Asunto</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full p-3 border border-border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Mensaje</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full p-3 border border-border rounded-lg h-32"
                    required
                  />
                </div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    required
                  />
                  <span className="text-sm">Acepto la política de privacidad</span>
                </label>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Enviar Mensaje
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 border-border">
                <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">📞 Teléfono</p>
                    <p className="text-muted-foreground">+51 (1) XXXX-XXXX</p>
                  </div>
                  <div>
                    <p className="font-semibold">📧 Email</p>
                    <p className="text-muted-foreground">info@clinica.com</p>
                  </div>
                  <div>
                    <p className="font-semibold">💬 WhatsApp</p>
                    <p className="text-muted-foreground">+51 XXX XXXXXX</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-xl font-bold mb-4">Horarios de Atención</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Lunes - Viernes:</span> 8:00 AM - 8:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Sábados:</span> 9:00 AM - 5:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Emergencias 24/7</span>
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-xl font-bold mb-4">Sedes</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">Sede Centro</p>
                    <p className="text-muted-foreground">Av. Principal 123, Centro</p>
                  </div>
                  <div>
                    <p className="font-semibold">Sede Norte</p>
                    <p className="text-muted-foreground">Calle 456, Zona Norte</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
