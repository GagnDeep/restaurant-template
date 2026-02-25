"use client"

import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card"
import { Check, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function PricingPreview() {
  const { pricingPreview } = siteConfig.home
  const { popular, orderNow } = siteConfig.uiLabels.pricing

  return (
    <Section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <FadeIn className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
            <Marker>{pricingPreview.heading}</Marker>
          </h2>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto items-start">
          {pricingPreview.plans.map((plan, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card
                className={cn(
                  "flex flex-col relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
                  i === 1 ? "border-primary shadow-xl scale-110 z-10 bg-background" : "bg-muted/30 border-none shadow-md"
                )}
              >
                {i === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-orange-500 text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Zap className="w-3 h-3 fill-current" /> {popular}
                  </div>
                )}
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="flex justify-center mb-4">
                     <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", i === 1 ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground")}>
                        {i === 0 ? "🌱" : i === 1 ? "🔥" : "👑"}
                     </div>
                  </div>
                  <CardTitle className="text-xl font-bold font-display">{plan.name}</CardTitle>
                  <CardDescription className="flex items-baseline justify-center gap-1 mt-2">
                     <span className="text-4xl font-bold text-foreground font-display">{plan.price}</span>
                     <span className="text-sm font-medium text-muted-foreground">/ person</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="h-5 w-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6 pb-8">
                  <Button className="w-full h-12 rounded-xl font-bold shadow-sm" variant={i === 1 ? "default" : "outline"} asChild>
                    <Link href="/contact">
                      {orderNow} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-16 text-center">
          <Button variant="link" size="lg" asChild className="text-muted-foreground hover:text-primary transition-colors text-lg">
            <Link href={pricingPreview.cta.href} className="inline-flex items-center gap-2">
              {pricingPreview.cta.text} <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </Section>
  )
}
