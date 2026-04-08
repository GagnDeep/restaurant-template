import { siteConfig } from "@/config/site"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"

export const metadata = {
  title: "Terms of Service - " + siteConfig.name,
  description: siteConfig.legal.terms.heading,
}

export default function TermsPage() {
  const { terms } = siteConfig.legal

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Section className="py-24 bg-background">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-12 font-heading">
              <Marker>{terms.heading}</Marker>
            </h1>
            <div className="prose dark:prose-invert max-w-none">
              <p>{terms.content}</p>
              {terms.sections.map((section, i) => (
                <div key={i}>
                  <h3>{section.title}</h3>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
