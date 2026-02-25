"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function Footer() {
  const { footer } = siteConfig

  const getIcon = (name: string) => {
    switch (name) {
      case "Instagram": return Instagram
      case "Facebook": return Facebook
      case "Twitter": return Twitter
      default: return Twitter
    }
  }

  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <FadeIn className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
               <h2 className="text-2xl font-display font-bold tracking-tighter text-foreground hover:text-primary transition-colors">
                 {footer.logo}
               </h2>
            </Link>
            <p className="text-muted-foreground max-w-xs leading-relaxed text-sm">
              {footer.description}
            </p>
            <div className="flex gap-4 pt-2">
              {footer.socials.map((social, i) => {
                const Icon = getIcon(social.icon)
                return (
                  <Link
                    key={i}
                    href={social.href}
                    className="p-2 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.icon}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          {footer.sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-display font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      {/* Optional: Add icon based on link type if needed, keeping it simple for now */}
                      <span className="relative">
                        {link.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs text-muted-foreground">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
             <Link href="/privacy" className="hover:text-foreground transition-colors">{siteConfig.uiLabels.footer.privacy}</Link>
             <Link href="/terms" className="hover:text-foreground transition-colors">{siteConfig.uiLabels.footer.terms}</Link>
          </div>
        </div>
      </FadeIn>
    </footer>
  )
}
