"use client"

import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { Underline } from "@/components/visuals/underline"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Utensils, ChefHat, MapPin, ShoppingBag, Star, Clock, Search } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/ui/fade-in"
import { Input } from "@/components/ui/input"

export function FeatureGrid() {
  const { featuresGrid } = siteConfig.home
  const { filterAll, filterVeg, filterNonVeg, filterDrinks, filterDessert, chefChoice } = siteConfig.uiLabels.menu

  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const categories = [
    { id: "All", label: filterAll },
    { id: "Veg", label: filterVeg },
    { id: "Non-Veg", label: filterNonVeg }, // Note: Our current config only uses "Veg", "Drinks", "Dessert" in sample, but logic supports all
    { id: "Drinks", label: filterDrinks },
    { id: "Dessert", label: filterDessert },
  ]

  const filteredFeatures = featuresGrid.features.filter(f => {
    const matchesCategory = activeCategory === "All" || f.category === activeCategory
    const matchesSearch = f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          f.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <Section className="bg-background py-24">
      <FadeIn className="container px-4 md:px-6 text-center space-y-4 mb-8">
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

      <FadeIn delay={0.1} className="flex flex-col items-center gap-6 mb-12">
        {/* Search */}
        <div className="relative w-full max-w-sm">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
           <Input
             ref={searchInputRef}
             type="text"
             placeholder="Search menu... (Cmd+K)"
             className="pl-9 h-10 rounded-full border-primary/20 bg-muted/30 focus-visible:ring-primary"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
           />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
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
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredFeatures.map((feature, i) => {
          const Icon = feature.icon === "Utensils" ? Utensils :
                       feature.icon === "ChefHat" ? ChefHat :
                       feature.icon === "MapPin" ? MapPin :
                       feature.icon === "ShoppingBag" ? ShoppingBag :
                       feature.icon === "Star" ? Star : Clock

          return (
            <FadeIn key={`${feature.title}-${i}`} delay={i * 0.1}>
              <SpotlightCard
                className={cn(
                  "group h-full p-6 transition-all hover:shadow-lg hover:-translate-y-1",
                  feature.highlighted && "border-primary/50 ring-2 ring-primary/10 shadow-md"
                )}
                spotlightColor="rgba(var(--primary), 0.15)"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />

                {feature.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-sm z-20">
                    {chefChoice}
                  </div>
                )}

                <div className="relative z-10 space-y-4">
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
                  <h3 className="text-xl font-bold font-heading">{feature.title}</h3>
                  <p className="text-base text-muted-foreground font-sans leading-relaxed">{feature.description}</p>
                </div>
              </SpotlightCard>
            </FadeIn>
          )
        })}
      </div>
    </Section>
  )
}
