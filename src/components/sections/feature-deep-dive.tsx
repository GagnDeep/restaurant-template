"use client"

import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Marker } from "@/components/visuals/marker"
import { Blob } from "@/components/visuals/blobs"
import { FadeIn } from "@/components/ui/fade-in"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export function FeatureDeepDive() {
  const { deepDive } = siteConfig.home

  return (
    <Section className="py-24 bg-muted/50 overflow-hidden relative">
      <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
        <Blob variant={3} className="w-full h-full text-primary" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <FadeIn className="space-y-8">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-4 py-1 text-sm rounded-full">
              {deepDive.badge}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
              <Marker>{deepDive.heading}</Marker>
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
              {deepDive.description}
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {deepDive.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <Link href={deepDive.cta.href}>
                  {deepDive.cta.text} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative mx-auto w-full max-w-[500px] aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden bg-background border shadow-xl flex items-center justify-center">
             {/* Abstract Food Representation */}
             <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-900/10" />
             <div className="relative z-10 w-64 h-64 rounded-full bg-orange-500/20 animate-pulse flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-orange-500/30 flex items-center justify-center">
                   <div className="w-32 h-32 rounded-full bg-orange-500/40" />
                </div>
             </div>
             <div className="absolute bottom-8 right-8 bg-background/80 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium border shadow-sm z-20">
                Authentic Spices
             </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  )
}
