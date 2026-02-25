import { cn } from "@/lib/utils"

interface UnderlineProps {
  className?: string
  rotation?: string // Tailwind class e.g. "rotate-1"
}

export function Underline({ className, rotation = "rotate-0" }: UnderlineProps) {
  return (
    <svg
      viewBox="0 0 200 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-auto text-primary", rotation, className)}
    >
      <path
        d="M2.00026 6.99998C18.4924 3.99998 52.8808 2.06248 83.3113 2.06248C138.311 2.06248 201.001 5.99998 198.001 6.99998"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
