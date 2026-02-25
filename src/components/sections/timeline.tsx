import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { Underline } from "@/components/visuals/underline"
import { Menu, ShoppingBag, Clock } from "lucide-react"

export function Timeline() {
  const { howItWorks } = siteConfig.home

  return (
    <Section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {howItWorks.heading}
            <span className="relative ml-2 inline-block">
              <Marker>{howItWorks.headingHighlight}</Marker>
              <span className="absolute -bottom-2 left-0 w-full h-2">
                <Underline />
              </span>
            </span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl items-start gap-12 py-12 md:grid-cols-3 md:gap-8 lg:gap-16">
          {howItWorks.steps.map((step, i) => {
             const Icon = step.icon === "Menu" ? Menu :
                          step.icon === "ShoppingBag" ? ShoppingBag : Clock

             return (
               <div key={i} className="relative flex flex-col items-center gap-4 text-center group">
                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted border-2 border-transparent group-hover:border-primary/50 transition-colors shadow-sm group-hover:shadow-md">
                   <Icon className="h-8 w-8 text-foreground/80 group-hover:text-primary transition-colors" />
                 </div>

                 {i < howItWorks.steps.length - 1 && (
                   <div className="hidden md:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[2px] bg-muted-foreground/20" />
                 )}

                 <div className="space-y-2">
                   <h3 className="font-bold text-xl">{step.title}</h3>
                   <p className="text-muted-foreground">{step.description}</p>
                 </div>

                 <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm border border-primary/20">
                    {i + 1}
                 </div>
               </div>
             )
          })}
        </div>
      </div>
    </Section>
  )
}
