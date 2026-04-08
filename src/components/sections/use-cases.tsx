import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Sparkles, Calendar, Users } from "lucide-react"

export function UseCases() {
  const { useCases } = siteConfig.home

  return (
    <Section variant="muted" className="py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">
          <Marker>{useCases.heading}</Marker>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.cases.map((useCase, i) => {
            const Icon = i === 0 ? Users : i === 1 ? Sparkles : Calendar

            return (
              <Card key={i} className="bg-background border-none shadow-md hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="flex flex-col items-center text-center pb-2">
                  <div className="mb-4 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
