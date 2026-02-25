import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import { Blob } from "@/components/visuals/blobs"

export function ProductPreview() {
  const { productPreview } = siteConfig.home

  return (
    <Section className="py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <Marker>{productPreview.heading}</Marker>
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {productPreview.description}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-4xl aspect-video rounded-xl border bg-muted/50 shadow-2xl flex items-center justify-center overflow-hidden">
           <Blob variant={1} className="absolute -top-1/2 -left-1/2 w-full h-full opacity-20" />
           <Blob variant={2} className="absolute -bottom-1/2 -right-1/2 w-full h-full opacity-20" />

           <div className="relative z-10 p-8 grid grid-cols-2 gap-4 w-full h-full">
              {/* Mockup of food spread */}
              <div className="bg-background rounded-lg shadow-sm p-4 flex flex-col gap-2">
                 <div className="h-32 bg-orange-100 rounded-md animate-pulse" />
                 <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
                 <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
              </div>
              <div className="bg-background rounded-lg shadow-sm p-4 flex flex-col gap-2 translate-y-8">
                 <div className="h-32 bg-green-100 rounded-md animate-pulse" />
                 <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
                 <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
              </div>
           </div>
        </div>
      </div>
    </Section>
  )
}
