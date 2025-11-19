import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Clínicaxd</h4>
            <p className="text-muted-foreground text-sm">
              Tu salud, nuestra prioridad. Atención médica de calidad 24/7.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacidad" className="hover:text-primary">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-primary">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/politicas" className="hover:text-primary">
                  Políticas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📞 +51 9123 123 123</li>
              <li>📧 centroayuda@clinicaxd.com</li>
              <li>👻 Wazaaaaa</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 Clínicaxd. Todos los derechos reservados a Ghost.☕</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="https://www.linkedin.com/in/angel-vasquez-requejo-725a59312/" className="hover:text-primary">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
