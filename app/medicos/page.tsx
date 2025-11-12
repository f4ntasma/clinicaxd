"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { doctors, specialties } from "@/lib/mock-data"

export default function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState("")

  const filtered = doctors.filter(
    (doctor) =>
      (!selectedSpecialty || doctor.specialty === selectedSpecialty) &&
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Nuestros Médicos</h1>

          {/* Filters */}
          <div className="bg-muted rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">Buscar por nombre</label>
                <input
                  type="text"
                  placeholder="Ej: Dr. Carlos"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 border border-border rounded-lg"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Filtrar por especialidad</label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full p-3 border border-border rounded-lg"
                >
                  <option value="">Todas las especialidades</option>
                  {specialties.map((spec) => (
                    <option key={spec.id} value={spec.name}>
                      {spec.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((doctor) => (
              <Card key={doctor.id} className="p-6 border-border hover:shadow-lg transition">
                <div className="text-5xl mb-4">{doctor.avatar}</div>
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-primary font-semibold mb-3">{doctor.specialty}</p>
                <p className="text-sm text-muted-foreground mb-4">{doctor.experience} años de experiencia</p>
                <div className="flex items-center gap-2 mb-4">
                  <span>★</span>
                  <span className="font-semibold">{doctor.rating}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Ver agenda</Button>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No se encontraron médicos con esos criterios.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
