"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { testimonials } from "@/lib/mock-data"

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Lo que dicen nuestros pacientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col p-6 border-border">
              <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatarUrl}
                  alt={`Avatar de ${testimonial.name}`}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.specialty}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
