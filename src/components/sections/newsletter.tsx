"use client"

import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FadeIn } from "@/components/ui/fade-in"
import { Mail, ArrowRight } from "lucide-react"
import { useState } from "react"
import { Confetti } from "@/components/ui/confetti"
import { z } from "zod"
import { toast } from "sonner"

export function Newsletter() {
  const { newsletter } = siteConfig.home
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check (implementation in JSX below)
    const target = e.target as HTMLFormElement;
    const honeypot = (target.elements.namedItem("website") as HTMLInputElement).value
    if (honeypot) return

    try {
      z.string().email().parse(email)
      setSubscribed(true)
      toast.success(siteConfig.uiLabels.newsletter.success)
    } catch (_err) {
      toast.error(siteConfig.uiLabels.newsletter.error)
    }
  }

  return (
    <Section className="py-24 bg-primary/5 border-t relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center max-w-2xl mx-auto">
          <div className="p-4 bg-background rounded-full text-primary shadow-lg mb-4 ring-4 ring-primary/10">
            <Mail className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading">
            {newsletter.heading}
          </h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed font-sans leading-relaxed">
            {newsletter.description}
          </p>

          {subscribed ? (
            <FadeIn className="pt-6 pb-2 text-green-600 font-bold text-xl flex flex-col items-center gap-2">
              <Confetti />
              <span>{siteConfig.uiLabels.newsletter.welcome}</span>
              <span className="text-sm text-muted-foreground font-normal">{siteConfig.uiLabels.newsletter.checkInbox}</span>
            </FadeIn>
          ) : (
            <form className="flex w-full max-w-md items-center space-x-2 pt-6 relative" onSubmit={handleSubmit}>
              {/* Honeypot field - hidden from users */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={newsletter.placeholder}
                className="bg-background border-primary/20 h-12 focus-visible:ring-primary shadow-sm"
              />
              <Button type="submit" size="lg" className="h-12 px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                {newsletter.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground pt-4">
            {siteConfig.uiLabels.newsletter.privacy} <a href="/privacy" className="underline hover:text-primary">{siteConfig.uiLabels.newsletter.privacyLink}</a>.
          </p>
        </FadeIn>
      </div>
    </Section>
  )
}
