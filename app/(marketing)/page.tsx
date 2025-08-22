import Hero from '@/components/site/Hero'
import FeatureCard from '@/components/site/FeatureCard'
import CTA from '@/components/site/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink mb-4">
              Our Three Pillars
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built on precision, usability, and innovation to deliver software that transforms complex spatial data into actionable intelligence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Precision"
              description="Accurate insights and reliable spatial analysis that organizations can trust for critical decision-making."
              icon="🎯"
            />
            <FeatureCard
              title="Usability"
              description="Intuitive software designed for everyday users, ensuring accessibility at every level of expertise."
              icon="💡"
            />
            <FeatureCard
              title="Innovation"
              description="Cutting-edge spatial analysis combined with modern design to unlock the full potential of location data."
              icon="🚀"
            />
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
} 