
import React from "react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            AI-Powered Custom Websites
          </h1>
          <h2 className="text-xl text-muted-foreground sm:text-2xl">
            for Small Businesses
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Humexa.ai builds and manages fully custom-coded websites for small businesses 
            using intelligent AI agents. Get your professional website today.
          </p>
        </div>
        <div className="space-x-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
