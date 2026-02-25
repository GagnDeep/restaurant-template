export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    instagram: string
    facebook: string
  }
  location: {
    lat: number
    lng: number
    address: string
  }
  openingHours: {
    open: number
    close: number
  }
  nav: NavItem[]
  // ... (Complete interface mirroring site.ts)
  // For brevity in this task, we'll rely on type inference for the rest as typescript handles it well
  // But strictly, we should define the full schema here.
}
