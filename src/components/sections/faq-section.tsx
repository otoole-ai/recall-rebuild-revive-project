
import React from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does it take to build my website?",
      answer: "Most websites are completed within 3-7 days, depending on complexity and your specific requirements."
    },
    {
      question: "Can I make changes to my website after it's built?",
      answer: "Absolutely! Our AI agents can make updates and modifications to your website at any time."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we handle all technical aspects including hosting, domain management, and SSL certificates."
    },
    {
      question: "What if I'm not satisfied with my website?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your payment."
    },
    {
      question: "How does the AI understand my business needs?",
      answer: "Our AI agents analyze your industry, competitors, and business goals to create a tailored solution."
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left border rounded-lg hover:bg-muted/50">
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-muted-foreground">+</span>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 pt-0">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
