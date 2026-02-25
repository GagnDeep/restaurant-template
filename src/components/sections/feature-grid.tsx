"use client"

import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { Underline } from "@/components/visuals/underline"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Utensils, ChefHat, MapPin, ShoppingBag, Star, Clock } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/ui/fade-in"

export function FeatureGrid() {
  const { featuresGrid } = siteConfig.home
  const { filterAll, filterVeg, filterNonVeg, filterDrinks, filterDessert, chefChoice } = siteConfig.uiLabels.menu

  const [activeCategory, setActiveCategory] = useState("All")

  const categories = [
    { id: "All", label: filterAll },
    { id: "Veg", label: filterVeg },
    { id: "Non-Veg", label: filterNonVeg }, // Note: Our current config only uses "Veg", "Drinks", "Dessert" in sample, but logic supports all
    { id: "Drinks", label: filterDrinks },
    { id: "Dessert", label: filterDessert },
  ]

  const filteredFeatures = activeCategory === "All"
    ? featuresGrid.features
    : featuresGrid.features.filter(f => f.category === activeCategory)

  return (
    <Section className="bg-background py-24">
      <FadeIn className="container px-4 md:px-6 text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading">
          {featuresGrid.heading}
          <span className="relative ml-2 inline-block">
            <Marker>{featuresGrid.headingHighlight}</Marker>
            <span className="absolute -bottom-2 left-0 w-full h-2">
              <Underline />
            </span>
          </span>
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
          {featuresGrid.description}
        </p>
      </FadeIn>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
         {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                  : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:bg-muted"
              )}
            >
              {cat.label}
            </button>
         ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredFeatures.map((feature, i) => {
          const Icon = feature.icon === "Utensils" ? Utensils :
                       feature.icon === "ChefHat" ? ChefHat :
                       feature.icon === "MapPin" ? MapPin :
                       feature.icon === "ShoppingBag" ? ShoppingBag :
                       feature.icon === "Star" ? Star : Clock

          return (
            <FadeIn key={`${feature.title}-${i}`} delay={i * 0.1}>
              <Card
                className={cn(
                  "group relative overflow-hidden border bg-background p-6 transition-all hover:shadow-lg hover:-translate-y-1 h-full",
                  feature.highlighted && "border-primary/50 ring-2 ring-primary/10 shadow-md"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                {feature.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-sm">
                    {chefChoice}
                  </div>
                )}

                <CardHeader className="relative z-10 p-0 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    {feature.category && !feature.highlighted && (
                       <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-sm">
                         {feature.category}
                       </span>
                    )}
                  </div>
                  <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
                  <CardDescription className="text-base font-sans leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>
          )
        })}
      </div>
    </Section>
  )
}
