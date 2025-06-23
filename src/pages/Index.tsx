
import React from "react"
import HeroSection from "@/components/sections/hero-section"
import HumexaFixSection from "@/components/sections/humexa-fix-section"
import AiTeamSection from "@/components/sections/ai-team-section"
import BenefitsFeaturesSection from "@/components/sections/benefits-features-section"
import PricingSection from "@/components/sections/pricing-section"
import SalonDemoSection from "@/components/sections/salon-demo-section"
import SocialProofSection from "@/components/sections/social-proof-section"
import FAQSection from "@/components/sections/faq-section"

const Index = () => {
  return (
    <div>
      <HeroSection />
      <HumexaFixSection />
      <AiTeamSection />
      <BenefitsFeaturesSection />
      <PricingSection />
      <SalonDemoSection />
      <SocialProofSection />
      <FAQSection />
    </div>
  )
}

export default Index
