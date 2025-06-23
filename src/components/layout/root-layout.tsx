
import React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/layout/site-header"
import SiteFooter from "@/components/layout/site-footer"

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="relative flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  )
}

export default RootLayout
