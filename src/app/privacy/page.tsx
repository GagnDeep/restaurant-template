import { siteConfig } from "@/config/site"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"

export const metadata = {
  title: "Privacy Policy - " + siteConfig.name,
  description: siteConfig.legal.privacy.heading,
}

export default function PrivacyPage() {
  const { privacy } = siteConfig.legal

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Section className="py-24 bg-background">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-12 font-heading">
              <Marker>{privacy.heading}</Marker>
            </h1>
            <div className="prose dark:prose-invert max-w-none">
              <p>{privacy.content}</p>
              <h3>1. Data Collection</h3>
              <p>We collect minimal personal data necessary to provide our services, such as your name and email when you contact us.</p>
              <h3>2. Use of Data</h3>
              <p>Your data is used solely for communication and service delivery. We do not sell your data to third parties.</p>
              <h3>3. Cookies</h3>
              <p>We use cookies to improve your browsing experience and analyze site traffic.</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
