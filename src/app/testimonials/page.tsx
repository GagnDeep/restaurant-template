import { siteConfig } from "@/config/site"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel"
import { SocialProof } from "@/components/sections/social-proof"
import { CreatorPreview } from "@/components/sections/creator-preview"

export const metadata = {
  title: "Testimonials - " + siteConfig.name,
  description: "See what our customers say about " + siteConfig.name,
}

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <SocialProof />
        <TestimonialsCarousel />
        <CreatorPreview />
      </main>
      <Footer />
    </div>
  )
}
