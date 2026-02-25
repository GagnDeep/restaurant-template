import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function Benefits() {
  const { benefits } = siteConfig.home

  return (
    <Section variant="muted" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="outline" className="px-4 py-1 text-sm rounded-full">
            {siteConfig.uiLabels.benefits.badge}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {benefits.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-5xl">
             {benefits.items.map((benefit, i) => (
                <div key={i} className="flex flex-col items-center p-8 bg-background rounded-2xl border shadow-sm hover:shadow-md transition-all">
                  <div className="mb-4 h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                     <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-center text-sm/relaxed">{benefit.description}</p>
                </div>
             ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
