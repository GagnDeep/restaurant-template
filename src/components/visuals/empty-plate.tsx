import { cn } from "@/lib/utils"

export function EmptyPlateGraphic({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={cn("w-full h-full text-muted-foreground/30", className)}
    >
      {/* Plate */}
      <circle cx="100" cy="100" r="90" className="fill-none stroke-current stroke-[3] opacity-60" />
      <circle cx="100" cy="100" r="60" className="fill-none stroke-current stroke-[2] opacity-40" />

      {/* Crumbs */}
      <circle cx="80" cy="90" r="2" className="fill-current" />
      <circle cx="110" cy="100" r="1.5" className="fill-current" />
      <circle cx="100" cy="120" r="2" className="fill-current" />
      <circle cx="130" cy="85" r="1.5" className="fill-current" />
      <circle cx="60" cy="110" r="1" className="fill-current" />

      {/* Fork & Knife (Crossed) */}
      <path d="M60 60 L140 140" className="fill-none stroke-current stroke-[4] stroke-linecap-round" />
      <path d="M140 60 L60 140" className="fill-none stroke-current stroke-[4] stroke-linecap-round" />

      {/* Knife Blade Detail */}
      <path d="M130 70 L140 60" className="fill-none stroke-current stroke-[4]" />

      {/* Fork Tines Detail */}
      <path d="M60 60 L70 50 M65 65 L75 55 M55 55 L65 45" className="fill-none stroke-current stroke-[2]" />
    </svg>
  )
}
