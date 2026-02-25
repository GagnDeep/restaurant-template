import { cn } from "@/lib/utils"

export function HeroSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full h-[500px] flex items-center justify-center", className)}>
      <div className="absolute inset-0 bg-muted/20 animate-pulse rounded-full opacity-30" />
      <div className="w-[800px] h-[800px] rounded-full border border-muted/30 animate-[spin_10s_linear_infinite]" />
      <div className="w-[600px] h-[600px] rounded-full border border-muted/20 animate-[spin_15s_linear_infinite_reverse]" />
    </div>
  )
}
