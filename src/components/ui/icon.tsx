import * as Icons from "lucide-react"
import type { LucideProps } from "lucide-react"

export type IconName = keyof typeof Icons

interface IconProps extends LucideProps {
  name: string
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = Icons[name as IconName] as React.ElementType

  if (!LucideIcon) {
    return <Icons.HelpCircle {...props} />
  }

  return <LucideIcon {...props} />
}
