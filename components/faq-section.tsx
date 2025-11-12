"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { faqs } from "@/lib/mock-data"

export function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card
              key={faq.id}
              className="border-border cursor-pointer"
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            >
              <div className="p-6">
                <h3 className="font-semibold flex items-center justify-between">
                  {faq.question}
                  <span className="transition-transform">{openId === faq.id ? "−" : "+"}</span>
                </h3>
                {openId === faq.id && <p className="mt-4 text-muted-foreground">{faq.answer}</p>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
