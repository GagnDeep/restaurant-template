"use client"

import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { Underline } from "@/components/visuals/underline"
import { Icon } from "@/components/ui/icon"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"

export function Timeline() {
  const { howItWorks } = siteConfig.home

  return (
    <Section className="py-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading">
            {howItWorks.heading}
            <span className="relative ml-2 inline-block">
              <Marker>{howItWorks.headingHighlight}</Marker>
              <span className="absolute -bottom-2 left-0 w-full h-2">
                <Underline />
              </span>
            </span>
          </h2>
        </FadeIn>

        <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-3 md:gap-8 lg:gap-16 relative">

          {/* Animated Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[3px] bg-muted overflow-hidden rounded-full z-0">
             <motion.div
               className="h-full bg-primary origin-left"
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
             />
          </div>

          {howItWorks.steps.map((step, i) => (
             <FadeIn key={i} delay={i * 0.3} className="relative flex flex-col items-center gap-6 text-center group z-10">
               <div className="relative">
                 <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-background border-2 border-muted group-hover:border-primary/50 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2">
                   <Icon name={step.icon} className="h-8 w-8 text-foreground/80 group-hover:text-primary transition-colors" />
                 </div>
                 <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-md ring-4 ring-background">
                    {i + 1}
                 </div>
               </div>

               <div className="space-y-2">
                 <h3 className="font-bold text-xl font-heading">{step.title}</h3>
                 <p className="text-muted-foreground font-sans leading-relaxed">{step.description}</p>
               </div>
             </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  )
}
