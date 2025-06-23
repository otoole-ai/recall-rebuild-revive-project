
import React from "react"
import { Button } from "@/components/ui/button"

const PricingSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
            Choose the plan that fits your business needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="text-2xl font-bold">Starter</h3>
              <p className="text-3xl font-bold">$299<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-2 text-sm">
                <li>• Custom website design</li>
                <li>• Mobile responsive</li>
                <li>• Basic SEO optimization</li>
                <li>• Monthly updates</li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>
            <div className="border rounded-lg p-6 space-y-4 border-primary">
              <h3 className="text-2xl font-bold">Professional</h3>
              <p className="text-3xl font-bold">$599<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-2 text-sm">
                <li>• Everything in Starter</li>
                <li>• Advanced features</li>
                <li>• E-commerce integration</li>
                <li>• Priority support</li>
              </ul>
              <Button className="w-full">Most Popular</Button>
            </div>
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-3xl font-bold">$999<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-2 text-sm">
                <li>• Everything in Professional</li>
                <li>• Custom integrations</li>
                <li>• Dedicated AI team</li>
                <li>• 24/7 phone support</li>
              </ul>
              <Button className="w-full">Contact Sales</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
