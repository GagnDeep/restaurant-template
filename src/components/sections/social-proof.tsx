import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { Users, Star, Award } from "lucide-react"

export function SocialProof() {
  const { socialProofSnapshot } = siteConfig.home

  return (
    <Section variant="default" className="py-20 bg-background/50 border-b">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight font-heading">
            {socialProofSnapshot.heading}
            <span className="block mt-2">
              <Marker>{socialProofSnapshot.highlight}</Marker>
            </span>
          </h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium border border-green-500/20 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {siteConfig.uiLabels.socialProof.liveStatus}
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
          {socialProofSnapshot.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center p-4 bg-muted/20 rounded-xl border hover:border-primary/50 transition-colors">
              <div className="p-2 mb-2 bg-primary/10 rounded-full text-primary">
                 {i === 0 ? <Star className="w-6 h-6" /> : i === 1 ? <Users className="w-6 h-6" /> : <Award className="w-6 h-6" />}
              </div>
              <span className="text-2xl font-bold text-foreground font-heading">{stat.value}</span>
              <span className="text-sm text-muted-foreground font-medium font-sans">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
