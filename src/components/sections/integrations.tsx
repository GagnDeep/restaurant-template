import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"

export function Integrations() {
  const { integrations } = siteConfig.home

  return (
    <Section variant="muted" className="py-24">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
          <Marker>{integrations.heading}</Marker>
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {integrations.partners.map((partner) => (
             <div key={partner} className="text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-all duration-300 hover:scale-110 cursor-pointer">
               {partner}
             </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
