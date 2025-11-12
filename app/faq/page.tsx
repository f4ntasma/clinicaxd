import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FaqSection } from "@/components/faq-section"

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background py-16">
        <FaqSection />
      </div>
      <Footer />
    </>
  )
}
