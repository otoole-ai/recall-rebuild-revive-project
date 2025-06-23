
import React from "react"

const SocialProofSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Trusted by Small Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border rounded-lg space-y-4">
              <p className="text-muted-foreground italic">
                "Humexa.ai transformed our online presence in just one week. 
                Our bookings increased by 40%!"
              </p>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Owner, Bella Hair Salon</p>
              </div>
            </div>
            <div className="p-6 border rounded-lg space-y-4">
              <p className="text-muted-foreground italic">
                "The AI team understood our brand perfectly. Best investment 
                we've made for our business."
              </p>
              <div>
                <p className="font-semibold">Mike Chen</p>
                <p className="text-sm text-muted-foreground">CEO, Chen's Restaurant</p>
              </div>
            </div>
            <div className="p-6 border rounded-lg space-y-4">
              <p className="text-muted-foreground italic">
                "Professional results without the professional price tag. 
                Highly recommend!"
              </p>
              <div>
                <p className="font-semibold">Lisa Rodriguez</p>
                <p className="text-sm text-muted-foreground">Founder, Fit Life Gym</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection
