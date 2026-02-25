"use client"

import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTA() {
  const { cta } = siteConfig.home

  return (
    <Section className="py-32 bg-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-black/10 pointer-events-none" />

      <FadeIn className="container px-4 md:px-6 text-center space-y-8 relative z-10">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-display">
          <Marker>{cta.heading}</Marker>
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
          {cta.description}
        </p>
        <div className="flex justify-center pt-4">
          <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 hover:scale-105">
            <Link href={cta.primaryCta.href}>
              {cta.primaryCta.text} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </Section>
  )
}
