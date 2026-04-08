import { siteConfig } from "@/config/site"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { CreatorPreview } from "@/components/sections/creator-preview"
import { Logos } from "@/components/sections/logos"
import { AboutTimeline } from "@/components/sections/about-timeline"
import { FadeIn } from "@/components/ui/fade-in"
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema"

export const metadata = {
  title: "About Us - " + siteConfig.name,
  description: siteConfig.about.description,
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <BreadcrumbSchema items={[{ name: "Home", item: "/" }, { name: "About", item: "/about" }]} />
      <Navbar />
      <main className="flex-1">
        <Section className="py-24 bg-background">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8 font-heading">
                <Marker>{siteConfig.about.heading}</Marker>
              </h1>
              <p className="max-w-[800px] text-lg text-muted-foreground leading-relaxed font-sans">
                {siteConfig.about.description}
              </p>
            </FadeIn>
          </div>
        </Section>
        <AboutTimeline />
        <CreatorPreview />
        <Logos />
      </main>
      <Footer />
    </div>
  )
}
