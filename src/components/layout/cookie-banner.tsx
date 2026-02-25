"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[400px] z-[100] bg-background/95 backdrop-blur border rounded-xl p-6 shadow-2xl ring-1 ring-primary/10"
        >
          <h3 className="font-bold text-lg mb-2">We use cookies 🍪</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            We use cookies to improve your experience. By using our site, you agree to our <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>.
          </p>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" size="sm" onClick={() => setIsVisible(false)}>
              Close
            </Button>
            <Button size="sm" onClick={handleAccept}>
              Accept All
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
