import Hero from '@/components/site/Hero'
import FeatureCard from '@/components/site/FeatureCard'
import CTA from '@/components/site/CTA'
import MapSection from '@/components/site/MapSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink mb-4">
              Powerful GIS Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From data collection to advanced analytics, we provide comprehensive geospatial tools
              that help organizations make better location-based decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Data Collection"
              description="Streamlined field data collection with offline capabilities and real-time synchronization."
              icon="📱"
            />
            <FeatureCard
              title="Spatial Analysis"
              description="Advanced spatial analysis tools for complex geospatial modeling and decision support."
              icon="🗺️"
            />
            <FeatureCard
              title="Visualization"
              description="Beautiful, interactive maps and dashboards that bring your data to life."
              icon="📊"
            />
          </div>
        </div>
      </section>
      <MapSection />
      <CTA />
    </>
  )
} 