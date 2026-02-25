"use client"

import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { FadeIn } from "@/components/ui/fade-in"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

function MapGraphic() {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-muted/20 rounded-3xl overflow-hidden border border-border/50">
       {/* Abstract stylized map pattern */}
       <svg className="absolute inset-0 w-full h-full opacity-50" preserveAspectRatio="xMidYMid slice">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
             <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/30"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Stylized Roads */}
          <path d="M0 200 Q 150 150 400 200 T 800 200" fill="none" stroke="currentColor" strokeWidth="20" className="text-muted-foreground/10" />
          <path d="M400 0 Q 350 200 400 400" fill="none" stroke="currentColor" strokeWidth="15" className="text-muted-foreground/10" />
       </svg>

       {/* Location Pin */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce">
          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg z-10">
             <MapPin className="w-6 h-6" />
          </div>
          <div className="w-4 h-2 bg-black/20 rounded-[100%] blur-[2px] mt-1" />
          <div className="mt-2 bg-background px-4 py-2 rounded-lg shadow-md border text-sm font-bold whitespace-nowrap">
             {siteConfig.name}
          </div>
       </div>
    </div>
  )
}

export default function Contact() {
  const { contact, openingHours } = siteConfig
  const { visitUs, callUs, emailUs, openingHours: hoursLabel, daily } = siteConfig.uiLabels.contact

  return (
    <Section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <FadeIn className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-display">
              <Marker>{contact.heading}</Marker>
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed">
              {contact.description}
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                 </div>
                 <div>
                    <h3 className="font-bold text-lg">{visitUs}</h3>
                    <p className="text-muted-foreground">{contact.info.address}</p>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                 </div>
                 <div>
                    <h3 className="font-bold text-lg">{callUs}</h3>
                    <a href={`tel:${contact.info.phone}`} className="text-muted-foreground hover:text-primary transition-colors">{contact.info.phone}</a>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                 </div>
                 <div>
                    <h3 className="font-bold text-lg">{emailUs}</h3>
                    <a href={`mailto:${contact.info.email}`} className="text-muted-foreground hover:text-primary transition-colors">{contact.info.email}</a>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                 </div>
                 <div>
                    <h3 className="font-bold text-lg">{hoursLabel}</h3>
                    <p className="text-muted-foreground">{daily}: {openingHours.open}:00 AM - {openingHours.close}:00 PM</p>
                 </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full min-h-[400px]">
             <MapGraphic />
          </FadeIn>

        </div>
      </div>
    </Section>
  )
}
