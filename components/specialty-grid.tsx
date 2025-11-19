import Link from "next/link"
import Image from "next/image"
import { specialties } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function SpecialtyGrid() {
  return (
    <section id="especialidades" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Especialidades</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contamos con un equipo de especialistas certificados en diversas áreas de la medicina.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty) => (
            <Card key={specialty.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-border flex flex-col">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={specialty.imageUrl}
                  alt={`Imagen de ${specialty.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{specialty.name}</h3>
              <p className="text-muted-foreground mb-4">{specialty.description}</p>
              <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary/10 bg-transparent">
                <Link href="/medicos">Ver médicos</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
