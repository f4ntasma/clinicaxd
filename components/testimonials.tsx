"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/lib/mock-data"

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Lo que dicen nuestros pacientes</h2>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={prev} className="rounded-full bg-transparent">
            ←
          </Button>
          <Card className="flex-1 p-8 border-border">
            <p className="text-lg mb-6 italic">"{testimonials[current].quote}"</p>
            <div className="flex items-center gap-4">
              <div className="text-3xl">{testimonials[current].avatar}</div>
              <div>
                <div className="font-semibold">{testimonials[current].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[current].specialty}</div>
              </div>
            </div>
          </Card>
          <Button variant="outline" size="icon" onClick={next} className="rounded-full bg-transparent">
            →
          </Button>
        </div>
      </div>
    </section>
  )
}
