"use client"

import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { FadeIn } from "@/components/ui/fade-in"


export function AboutTimeline() {
  const { timeline } = siteConfig.about

  if (!timeline) return null

  return (
    <Section className="py-24 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-12 relative">

          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />

          {timeline.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

              {/* Content Side */}
              <div className="flex-1 w-full pl-12 md:pl-0 md:text-right md:pr-12 group">
                 <div className={`p-6 bg-background rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 ${i % 2 === 0 ? "md:text-left md:pl-6 md:pr-6" : "md:text-right"}`}>
                    <span className="text-primary font-bold text-xl block mb-2 font-heading">{item.year}</span>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                 </div>
              </div>

              {/* Dot */}
              <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-background border-4 border-primary z-10 shadow-sm" />

              {/* Empty Side (for balance) */}
              <div className="hidden md:block flex-1" />

            </FadeIn>
          ))}

        </div>
      </div>
    </Section>
  )
}
