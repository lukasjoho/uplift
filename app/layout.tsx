import "@/styles/globals.css"
import { Metadata } from "next"
import { SessionProvider } from "next-auth/react"
import { Toaster } from "react-hot-toast"

import { siteConfig } from "@/config/site"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import AuthContext from "@/components/AuthContext"
import Header from "@/components/Header/Header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import CommandModal from "@/components/uplift/CommandModal"
import Footer from "@/components/uplift/Footer"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
  params: any
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <AuthContext>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              <div className="relative flex min-h-screen flex-col ">
                <Header />
                <div className="flex-1 flex flex-col ">
                  <CommandModal />
                  {children}
                </div>
              </div>
              <Footer />
              <TailwindIndicator />
              <Toaster
                toastOptions={{
                  // Define default options
                  duration: 5000,
                  success: {
                    style: {
                      background: "rgb(34 197 94)",
                      color: "white",
                    },
                    iconTheme: {
                      primary: "white",
                      secondary: "rgb(34 197 94)",
                    },
                  },
                  error: {
                    style: {
                      background: "rgb(239 68 68)",
                      color: "white",
                    },

                    iconTheme: {
                      primary: "white",
                      secondary: "rgb(239 68 68)",
                    },
                  },

                  // Default options for specific types
                }}
              />
            </ThemeProvider>
          </body>
        </AuthContext>
      </html>
    </>
  )
}
