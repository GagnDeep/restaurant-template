"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/config/site"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true")
    setIsVisible(false)
  }

  const { heading, description, policyLink, close, accept } = siteConfig.uiLabels.cookie

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[400px] z-[100] bg-background/95 backdrop-blur border rounded-xl p-6 shadow-2xl ring-1 ring-primary/10"
        >
          <h3 className="font-bold text-lg mb-2">{heading}</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {description} <a href="/privacy" className="underline hover:text-primary">{policyLink}</a>.
          </p>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" size="sm" onClick={() => setIsVisible(false)}>
              {close}
            </Button>
            <Button size="sm" onClick={handleAccept}>
              {accept}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
