import "@/styles/globals.css"
import { get } from "http"
import { Metadata } from "next"
import { getServerSession } from "next-auth"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import BackToTop from "@/components/back-to-top"
import { ContactForm } from "@/components/forms/contact-form"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

import { authOptions } from "./api/auth/[...nextauth]/route"
import { Providers } from "./providers"

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
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const session = getServerSession(authOptions)
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Toaster />
              <div className="relative flex flex-col min-h-screen" id="#">
                <SiteHeader />
                <div className="flex-1">{children}</div>
              </div>
              <ContactForm />
              <BackToTop />
            </ThemeProvider>
          </Providers>
        </body>
      </html>
    </>
  )
}
