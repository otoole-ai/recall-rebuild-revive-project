
import React from "react"
import { Button } from "@/components/ui/button"

const HumexaFixSection = () => {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            The Humexa Fix
          </h2>
          <p className="mx-auto max-w-[800px] text-lg text-muted-foreground">
            Traditional website builders limit your growth. Our AI agents create fully 
            custom-coded websites that evolve with your business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">No Templates</h3>
              <p className="text-muted-foreground">Every website is built from scratch</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">AI-Powered</h3>
              <p className="text-muted-foreground">Intelligent agents handle everything</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">Always Growing</h3>
              <p className="text-muted-foreground">Your site evolves with your business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HumexaFixSection
