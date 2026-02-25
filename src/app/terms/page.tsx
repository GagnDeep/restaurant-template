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
        <Section className="py-24">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">
              <Marker>{terms.heading}</Marker>
            </h1>
            <div className="prose dark:prose-invert max-w-none">
              <p>{terms.content}</p>
              {/* Placeholder for more content since config is minimal */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
