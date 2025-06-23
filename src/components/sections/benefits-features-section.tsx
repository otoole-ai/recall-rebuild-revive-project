
import React from "react"

const BenefitsFeaturesSection = () => {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Why Choose Humexa.ai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground">Get your website live in days, not months</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Cost Effective</h3>
              <p className="text-muted-foreground">Fraction of the cost of hiring a dev team</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Always Updated</h3>
              <p className="text-muted-foreground">Your site stays current with latest trends</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Mobile First</h3>
              <p className="text-muted-foreground">Perfect on every device and screen size</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">SEO Optimized</h3>
              <p className="text-muted-foreground">Built to rank high in search results</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-muted-foreground">AI agents monitor and maintain your site</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsFeaturesSection
