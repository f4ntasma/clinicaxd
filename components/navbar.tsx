"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card shadow-md bg-opacity-95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">Clínicaxd</div>
        <ul className="hidden md:flex gap-8 items-center text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-primary transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/#especialidades" className="hover:text-primary transition">
              Especialidades
            </Link>
          </li>
          <li>
            <Link href="/medicos" className="hover:text-primary transition">
              Médicos
            </Link>
          </li>
          <li>
            <Link href="/citas" className="hover:text-primary transition">
              Citas
            </Link>
          </li>
          <li>
            <Link href="/#resultados" className="hover:text-primary transition">
              Resultados
            </Link>
          </li>
          <li>
            <Link href="/#telemedicina" className="hover:text-primary transition">
              Telemedicina
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-primary transition">
              Contacto
            </Link>
          </li>
        </ul>
        <Button className="bg-primary hover:bg-primary/90">Agendar cita</Button>
      </div>
    </nav>
  )
}
