"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/layout/mobile-nav"
import { AnnouncementBar } from "@/components/layout/announcement-bar"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <AnnouncementBar />
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-serif font-bold text-2xl tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary font-semibold after:absolute after:-bottom-5 after:left-0 after:h-[2px] after:w-full after:bg-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <ModeToggle />
              <Button asChild variant="default" className="rounded-full px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                <Link href={siteConfig.home.hero.primaryCta.href}>
                  {siteConfig.home.hero.primaryCta.text}
                </Link>
              </Button>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <ModeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
