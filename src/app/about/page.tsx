import { siteConfig } from "@/config/site"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { CreatorPreview } from "@/components/sections/creator-preview"
import { Logos } from "@/components/sections/logos"

export const metadata = {
  title: "About Us - " + siteConfig.name,
  description: siteConfig.about.description,
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Section className="py-24">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">
              <Marker>{siteConfig.about.heading}</Marker>
            </h1>
            <p className="max-w-[800px] text-lg text-muted-foreground leading-relaxed">
              {siteConfig.about.description}
            </p>
          </div>
        </Section>
        <CreatorPreview />
        <Logos />
      </main>
      <Footer />
    </div>
  )
}
