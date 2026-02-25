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
              <h3>1. Introduction</h3>
              <p>Welcome to {siteConfig.name}. By accessing our website, you agree to these terms.</p>
              <h3>2. Services</h3>
              <p>We provide authentic Indian cuisine and catering services. Prices and availability are subject to change.</p>
              <h3>3. User Conduct</h3>
              <p>You agree to use our site responsibly and not to disrupt our services.</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
