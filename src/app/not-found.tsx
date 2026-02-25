import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { EmptyPlateGraphic } from "@/components/visuals/empty-plate"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  const { notFound } = siteConfig

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-background">
      <FadeIn className="space-y-6 max-w-md flex flex-col items-center">
        <div className="w-48 h-48 mb-8 animate-pulse">
          <EmptyPlateGraphic />
        </div>
        <h1 className="text-8xl font-bold text-primary opacity-20 select-none font-display absolute -z-10 blur-sm scale-150">404</h1>
        <h2 className="text-4xl font-bold tracking-tight text-foreground font-display">{notFound.heading}</h2>
        <p className="text-lg text-muted-foreground font-sans leading-relaxed">{notFound.description}</p>
        <Button asChild size="lg" className="rounded-full mt-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {notFound.backButton}
          </Link>
        </Button>
      </FadeIn>
    </div>
  )
}
