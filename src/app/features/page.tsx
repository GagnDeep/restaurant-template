import { siteConfig } from "@/config/site"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { ProductPreview } from "@/components/sections/product-preview"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Menu - " + siteConfig.name,
  description: siteConfig.menu.description,
}

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Section className="py-24">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              <Marker>{siteConfig.menu.heading}</Marker>
            </h1>
            <p className="max-w-[700px] text-xl text-muted-foreground mb-12">
              {siteConfig.menu.description}
            </p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {siteConfig.menu.categories.map((category) => (
                <Badge key={category} variant="secondary" className="justify-center py-4 text-lg rounded-xl">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </Section>
        <FeatureGrid />
        <ProductPreview />
      </main>
      <Footer />
    </div>
  )
}
