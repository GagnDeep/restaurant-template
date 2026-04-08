import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"

export function Logos() {
  const { trustedBy } = siteConfig.home

  return (
    <Section variant="muted" className="border-b py-12 md:py-16">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          {trustedBy.title}
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {trustedBy.logos.map((logo) => (
             /* Fallback to text for logos since we don't have assets */
             <div key={logo.name} className="flex items-center space-x-2 font-bold text-xl text-foreground/50 hover:text-foreground">
               {/* <Image src={logo.src} alt={logo.name} width={120} height={40} className="h-8 w-auto object-contain" /> */}
               <span>{logo.name}</span>
             </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
