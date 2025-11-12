"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { specialties } from "@/lib/mock-data"

export function Hero() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(specialties[0].name)

  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary pt-20 pb-12 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Tu salud, nuestra prioridad</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Atención médica especializada de calidad con profesionales certificados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-white text-primary hover:bg-slate-100">Agendar cita</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Ver especialidades
              </Button>
            </div>
            <p className="text-sm opacity-75">✓ Atención 24/7 • Resultados en línea • Especialistas certificados</p>
          </div>
          <div className="bg-muted rounded-2xl p-6">
            <h3 className="font-semibold text-primary mb-4">Busca disponibilidad</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Especialidad</label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full p-2 border border-border rounded-lg"
                >
                  {specialties.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Médico</label>
                <input
                  type="text"
                  placeholder="Selecciona médico"
                  className="w-full p-2 border border-border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Fecha</label>
                <input type="date" className="w-full p-2 border border-border rounded-lg" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">Buscar disponibilidad</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
