
import React from "react"
import { Button } from "@/components/ui/button"

const SalonDemoSection = () => {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            See It In Action
          </h2>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
            Watch how our AI creates a beautiful salon website in minutes
          </p>
          <div className="bg-background rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Demo Video Placeholder</p>
            </div>
          </div>
          <Button size="lg">Watch Full Demo</Button>
        </div>
      </div>
    </section>
  )
}

export default SalonDemoSection
