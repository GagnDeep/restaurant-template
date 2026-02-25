import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: "default" | "muted" | "accent" | "brand"
  className?: string
  container?: boolean
}

export function Section({ children, variant = "default", className, container = true, ...props }: SectionProps) {
  const variants = {
    default: "bg-background",
    muted: "bg-muted/30",
    accent: "bg-accent/10",
    brand: "bg-primary/5",
  }

  return (
    <section className={cn("py-16 md:py-24", variants[variant], className)} {...props}>
      {container ? (
        <div className="container mx-auto px-4 md:px-6">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}
