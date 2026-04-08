"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { HeroSkeleton } from "@/components/visuals/hero-skeleton"

export function HeroGraphic({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return <HeroSkeleton className={className} />

  return (
    <div className={cn("relative w-full h-[500px] flex items-center justify-center overflow-visible", className)}>
      {/* Background abstract blobs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 dark:opacity-20 blur-3xl rounded-full bg-gradient-to-tr from-orange-300 via-red-300 to-yellow-200 dark:from-orange-900 dark:via-red-900 dark:to-yellow-900"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.svg
        viewBox="0 0 800 800"
        className="w-full h-full max-w-[800px] max-h-[800px] will-change-transform"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ x: mousePosition.x * 0.2, y: mousePosition.y * 0.2 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        {/* Decorative circle ring (Plate rim) */}
        <motion.circle
          cx="400"
          cy="400"
          r="250"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="10 20"
          className="text-muted-foreground/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner circle (Plate base) */}
        <circle
          cx="400"
          cy="400"
          r="200"
          className="fill-background stroke-border stroke-2"
        />

        {/* Abstract Food/Spice Elements */}
        <g transform="translate(400, 400)">
          {/* Central Spice Pile (Triangle/Mountain shape) */}
          <motion.path
            d="M0 -120 L100 80 L-100 80 Z"
            className="fill-orange-500/80 dark:fill-orange-600/80 mix-blend-multiply dark:mix-blend-normal"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, x: mousePosition.x * -1.5, y: mousePosition.y * -1.5 }}
            transition={{ type: "spring", stiffness: 40 }}
          />

          {/* Secondary Shape (Circle) */}
          <motion.circle
            cx="60"
            cy="40"
            r="70"
            className="fill-yellow-400/80 dark:fill-yellow-500/80 mix-blend-multiply dark:mix-blend-normal"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, x: mousePosition.x * 1.5, y: mousePosition.y * 1.5 }}
            transition={{ type: "spring", stiffness: 40 }}
          />

          {/* Tertiary Shape (Blob) */}
          <motion.path
             d="M-80 -40 Q-120 -80 -60 -120 T20 -100 T-80 -40"
             className="fill-red-500/80 dark:fill-red-600/80 mix-blend-multiply dark:mix-blend-normal"
             initial={{ scale: 0, opacity: 0 }}
             animate={{ scale: 1, opacity: 1, x: mousePosition.x * 0.8, y: mousePosition.y * 0.8 }}
             transition={{ type: "spring", stiffness: 40 }}
          />
        </g>

        {/* Floating Aroma Particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={400}
            cy={400}
            r={4 + i}
            className="fill-primary/60"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: -200 - Math.random() * 100,
              x: (Math.random() - 0.5) * 100,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Orbiting Elements (Ingredients) */}
        <motion.g animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ originX: "400px", originY: "400px" }}>
           <circle cx="400" cy="100" r="15" className="fill-green-500/80" />
           <circle cx="700" cy="400" r="10" className="fill-blue-500/80" />
           <rect x="390" y="680" width="20" height="20" rx="4" className="fill-purple-500/80" />
           <path d="M115 400 L135 430 L95 430 Z" className="fill-pink-500/80" />
        </motion.g>

      </motion.svg>
    </div>
  )
}
