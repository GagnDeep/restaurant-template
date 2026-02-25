"use client"

import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { Check, X } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function Comparison() {
  const { comparison } = siteConfig.home
  const { badge } = siteConfig.uiLabels.comparison

  return (
    <Section className="py-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
            <Marker>{comparison.heading}</Marker>
          </h2>
        </FadeIn>

        <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 md:grid-cols-2 lg:gap-16">
          {/* Competitor Column */}
          <FadeIn delay={0.1} className="flex flex-col gap-8 rounded-3xl border bg-muted/30 p-8 md:p-10 transition-all hover:bg-muted/50">
            <div className="text-center border-b pb-6 border-border/50">
              <h3 className="text-2xl font-bold text-muted-foreground font-display">{comparison.competitorName}</h3>
            </div>
            <ul className="space-y-6">
              {comparison.cons.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-muted-foreground group">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500 dark:bg-red-900/30 group-hover:scale-110 transition-transform">
                    <X className="h-5 w-5" />
                  </div>
                  <span className="mt-1 font-sans text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Our Column */}
          <FadeIn delay={0.3} className="relative flex flex-col gap-8 rounded-3xl border-2 border-primary/50 bg-background p-8 md:p-10 shadow-2xl md:scale-105 z-10 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-300">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-orange-500 text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider flex items-center gap-2 animate-pulse">
              <span className="text-lg">🏆</span> {badge}
            </div>
            <div className="text-center border-b pb-6 border-primary/10">
              <h3 className="text-3xl font-bold text-foreground font-display">{comparison.ourName}</h3>
            </div>
            <ul className="space-y-6">
              {comparison.pros.map((item, i) => (
                <li key={i} className="flex items-start gap-4 font-medium group">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 shadow-sm group-hover:scale-110 transition-transform">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="mt-1 font-sans text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </Section>
  )
}
