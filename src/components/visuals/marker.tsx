import { cn } from "@/lib/utils"

interface MarkerProps {
  children: React.ReactNode;
  className?: string;
  rotation?: string;
}

export function Marker({ children, className, rotation = "-skew-y-2" }: MarkerProps) {
  return (
    <span className="relative inline-block mx-1">
      <span className={cn("absolute inset-0 bg-gradient-to-r from-yellow-300/50 to-orange-300/50 dark:from-yellow-500/30 dark:to-orange-500/30 -z-10 rounded-sm animate-gradient-xy", rotation, className)} />
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 animate-text-shimmer">{children}</span>
    </span>
  )
}
