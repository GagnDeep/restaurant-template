import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Underline } from "@/components/visuals/underline"
import { Badge } from "@/components/ui/badge"

export function CreatorPreview() {
  const { creatorPreview } = siteConfig.home

  return (
    <Section variant="accent" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative mx-auto w-full max-w-[400px] aspect-square rounded-full overflow-hidden border-4 border-background shadow-xl">
             {/* Chef Image Placeholder */}
             <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <span className="text-4xl">👨‍🍳</span>
             </div>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <Badge variant="outline" className="w-fit">{creatorPreview.subheading}</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {creatorPreview.heading}
              <span className="block mt-2 w-1/2">
                 <Underline />
              </span>
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {creatorPreview.description}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
