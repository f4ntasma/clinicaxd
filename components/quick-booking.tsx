"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { specialties, doctors } from "@/lib/mock-data"

export function QuickBooking() {
  const [step, setStep] = useState(1)
  const [selectedSpecialty, setSelectedSpecialty] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [selectedDate, setSelectedDate] = useState("")

  const filteredDoctors = selectedSpecialty ? doctors.filter((d) => d.specialty === selectedSpecialty) : []

  const handleNext = () => {
    if (step < 3 && ((step === 1 && selectedSpecialty) || (step === 2 && selectedDoctor) || step === 3)) {
      setStep(step + 1)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Card className="p-8 border-border shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">Agendar Cita Rápida</h2>
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded-full transition-colors ${s <= step ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>

          {step === 1 && (
            <div>
              <label className="block font-semibold mb-4">Paso 1: Selecciona Especialidad</label>
              <div className="space-y-3 mb-6">
                {specialties.map((spec) => (
                  <button
                    key={spec.id}
                    onClick={() => setSelectedSpecialty(spec.name)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition ${
                      selectedSpecialty === spec.name
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <div className="font-semibold">{spec.name}</div>
                    <div className="text-sm text-muted-foreground">{spec.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block font-semibold mb-4">Paso 2: Selecciona Médico</label>
              <div className="space-y-3 mb-6">
                {filteredDoctors.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDoctor(doc.name)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition ${
                      selectedDoctor === doc.name
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <div className="font-semibold">{doc.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {doc.experience} años de experiencia • ★ {doc.rating}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <label className="block font-semibold mb-4">Paso 3: Selecciona Fecha y Hora</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 border border-border rounded-lg mb-4"
              />
              <div className="grid grid-cols-4 gap-2 mb-6">
                {["09:00", "10:00", "14:00", "15:00", "16:00", "17:00"].map((time) => (
                  <button key={time} className="p-2 border border-border rounded-lg hover:bg-primary/10 transition">
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
                Atrás
              </Button>
            )}
            {step < 3 ? (
              <Button
                onClick={handleNext}
                disabled={(step === 1 && !selectedSpecialty) || (step === 2 && !selectedDoctor)}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Siguiente
              </Button>
            ) : (
              <Button
                onClick={() => alert("Cita confirmada!")}
                disabled={!selectedDate}
                className="flex-1 bg-secondary hover:bg-secondary/90"
              >
                Confirmar Cita
              </Button>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}
