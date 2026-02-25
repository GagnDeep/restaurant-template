import { cn } from "@/lib/utils"

interface MarkerProps {
  children: React.ReactNode;
  className?: string;
  rotation?: string;
}

export function Marker({ children, className, rotation = "-skew-y-2" }: MarkerProps) {
  return (
    <span className="relative inline-block mx-1">
      <span className={cn("absolute inset-0 bg-yellow-300/50 dark:bg-yellow-500/30 -z-10 rounded-sm", rotation, className)} />
      <span className="relative z-10">{children}</span>
    </span>
  )
}
