export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Uplift",
  description: "Supercharge experimentation.",
  mainNav: [
    {
      type: "application",
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      type: "website",
      title: "Releases",
      href: "/",
    },
    {
      type: "website",
      title: "Blog",
      href: "/blog",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
