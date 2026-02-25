"use client"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Marker } from "@/components/visuals/marker"
import { Underline } from "@/components/visuals/underline"
import { HeroGraphic } from "@/components/visuals/hero-graphic"
import { Section } from "@/components/ui/section"
import { FadeIn } from "@/components/ui/fade-in"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Hero() {
  const { hero } = siteConfig.home

  return (
    <Section className="relative overflow-hidden pt-32 pb-20 md:pt-40 lg:pt-48">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <FadeIn className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10">
            <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full bg-secondary/50 backdrop-blur-sm border border-secondary-foreground/10 animate-fade-in-up">
              {hero.badge}
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground font-display leading-[1.1]">
              {hero.heading} <br className="hidden lg:block" />
              <span className="relative inline-block mt-2 lg:mt-0">
                <Marker rotation="-rotate-1">{hero.headingHighlight}</Marker>
                <span className="absolute -bottom-2 left-0 w-full z-0">
                  <Underline className="text-primary w-full h-3" />
                </span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-sans">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                <Link href={hero.primaryCta.href}>
                  {hero.primaryCta.text} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg bg-background/50 backdrop-blur-sm hover:bg-background/80 border-2 hover:border-primary/50 transition-all">
                <Link href={hero.secondaryCta.href}>
                  {hero.secondaryCta.text}
                </Link>
              </Button>
            </div>

            <div className="pt-6 flex flex-col items-center lg:items-start gap-4">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                   {/* Avatar Fallback */}
                   {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={cn("w-12 h-12 rounded-full border-4 border-background flex items-center justify-center text-sm font-bold text-white shadow-sm transition-transform hover:translate-y-[-2px] hover:z-10",
                        i === 1 ? "bg-orange-500" :
                        i === 2 ? "bg-emerald-500" :
                        i === 3 ? "bg-blue-500" :
                        "bg-purple-500"
                      )}>
                        {String.fromCharCode(64 + i)}
                      </div>
                   ))}
                   <div className="w-12 h-12 rounded-full border-4 border-background bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground shadow-sm">
                     +2k
                   </div>
                </div>
                <div className="flex flex-col items-start">
                   <div className="flex text-yellow-500 mb-1">
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                   </div>
                   <span className="text-sm font-medium text-muted-foreground">
                     From <span className="text-foreground font-bold">10,000+</span> happy customers
                   </span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative w-full flex justify-center lg:justify-end min-h-[400px] lg:min-h-[600px] order-first lg:order-last">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent rounded-full blur-3xl opacity-30 pointer-events-none" />
             <HeroGraphic className="scale-110 lg:scale-125" />
          </FadeIn>

        </div>
      </div>
    </Section>
  )
}
