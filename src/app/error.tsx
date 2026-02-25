"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-[calc(100vh-200px)] flex-col items-center justify-center gap-4 text-center">
      <FadeIn>
        <h2 className="text-4xl font-bold font-heading mb-4">Something went wrong!</h2>
        <p className="text-muted-foreground mb-8">
          We apologize for the inconvenience. Our chefs are looking into it.
        </p>
        <Button onClick={() => reset()} size="lg">
          Try again
        </Button>
      </FadeIn>
    </div>
  )
}
