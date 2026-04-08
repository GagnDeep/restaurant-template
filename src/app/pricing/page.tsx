import { siteConfig } from "@/config/site"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { PricingPreview } from "@/components/sections/pricing-preview"
import { Comparison } from "@/components/sections/comparison"
import { FaqPreview } from "@/components/sections/faq-preview"

export const metadata = {
  title: "Pricing - " + siteConfig.name,
  description: siteConfig.pricing.description,
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Section className="py-24">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              <Marker>{siteConfig.pricing.heading}</Marker>
            </h1>
            <p className="max-w-[700px] mx-auto text-xl text-muted-foreground mb-12">
              {siteConfig.pricing.description}
            </p>
          </div>
        </Section>
        <PricingPreview />
        <Comparison />
        <FaqPreview />
      </main>
      <Footer />
    </div>
  )
}
