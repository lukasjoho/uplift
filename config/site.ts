export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Uplift",
  description: "Supercharge experimentation.",
  appNav: [
    {
      type: "app",
      title: "Space",
      href: "/dashboard",
    },
  ],
  siteNav: [
    {
      type: "site",
      title: "Releases",
      href: "/releases/launched",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
