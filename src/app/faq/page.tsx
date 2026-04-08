import { siteConfig } from "@/config/site"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FaqPreview } from "@/components/sections/faq-preview"
import { Newsletter } from "@/components/sections/newsletter"

export const metadata = {
  title: "FAQ - " + siteConfig.name,
  description: siteConfig.home.faq.heading,
}

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <FaqPreview />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
