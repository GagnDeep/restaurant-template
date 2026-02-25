import * as React from "react"
import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialsCarousel() {
  const { testimonials } = siteConfig.home

  return (
    <Section className="py-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
          <Marker>{testimonials.heading}</Marker>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 animate-infinite-scroll w-max">
          {[...testimonials.items, ...testimonials.items, ...testimonials.items].map((item, index) => (
             <div key={index} className="w-[350px] md:w-[450px] shrink-0">
                <Card className="border shadow-sm bg-muted/20 hover:bg-muted/40 transition-colors duration-300">
                  <CardContent className="flex flex-col items-start gap-4 p-8 relative min-h-[220px]">
                    <Quote className="h-10 w-10 text-primary/10 absolute top-6 right-6" />
                    <div className="flex items-center gap-1 text-yellow-500 mb-2">
                      {[1,2,3,4,5].map(star => <span key={star} className="text-lg">★</span>)}
                    </div>
                    <p className="text-lg italic text-muted-foreground leading-relaxed font-sans">
                      &quot;{item.text}&quot;
                    </p>
                    <div className="flex flex-col mt-auto pt-4 border-t w-full">
                      <span className="font-bold text-foreground font-display">{item.author}</span>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">{item.role}</span>
                    </div>
                  </CardContent>
                </Card>
             </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
