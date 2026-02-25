"use client"

import { siteConfig } from "@/config/site"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AnnouncementBar() {
  const { announcement } = siteConfig.home
  const { openingHours } = siteConfig
  const [isOpen, setIsOpen] = useState(false)
  const [statusText, setStatusText] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkTime = () => {
      const now = new Date()
      const hour = now.getHours()

      // Greeting Logic
      const { morning, afternoon, evening } = siteConfig.uiLabels.announcement.greetings
      let greeting = ""
      if (hour < 12) greeting = morning
      else if (hour < 18) greeting = afternoon
      else greeting = evening

      // Open/Closed Logic
      if (hour >= openingHours.open && hour < openingHours.close) {
        setIsOpen(true)
        setStatusText(`${greeting} ${siteConfig.uiLabels.announcement.openNow}`)
      } else {
        setIsOpen(false)
        setStatusText(`${greeting} ${siteConfig.uiLabels.announcement.opensAt} ${openingHours.open}:00`)
      }
    }
    checkTime()
    const interval = setInterval(checkTime, 60000)
    return () => clearInterval(interval)
  }, [openingHours])

  if (!announcement) return null

  return (
    <div className="bg-primary px-4 py-2 text-primary-foreground text-xs sm:text-sm font-medium text-center relative z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
        {mounted && (
          <span className="flex items-center gap-2 animate-in fade-in duration-500">
             <span className={`inline-block w-2 h-2 rounded-full ${isOpen ? 'bg-green-400' : 'bg-red-400'}`}></span>
             <span className="font-bold uppercase tracking-wider text-[10px]">{statusText}</span>
             <span className="hidden sm:inline">•</span>
          </span>
        )}
        <span>{announcement.text}</span>
        {announcement.linkHref && (
          <Link href={announcement.linkHref} className="underline hover:text-primary-foreground/80 inline-flex items-center gap-1 ml-1">
            {announcement.linkText} <ArrowRight className="h-3 w-3" />
          </Link>
        )}
      </div>
    </div>
  )
}
