
import React from "react"

const AiTeamSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Meet Your AI Team
          </h2>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
            Our specialized AI agents work together to create and maintain your website
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Designer Agent</h3>
              <p className="text-sm text-muted-foreground">Creates beautiful, brand-aligned designs</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Developer Agent</h3>
              <p className="text-sm text-muted-foreground">Writes clean, optimized code</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Content Agent</h3>
              <p className="text-sm text-muted-foreground">Crafts compelling copy and content</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">SEO Agent</h3>
              <p className="text-sm text-muted-foreground">Optimizes for search engines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AiTeamSection
