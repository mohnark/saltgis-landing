import Link from 'next/link'

export default function MapSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-ink mb-6">
              Powerful Mapping & Visualization
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our advanced mapping engine provides real-time visualization, interactive layers, 
              and seamless integration with your existing GIS workflows. Experience the future 
              of location intelligence.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-slate-700">Real-time data updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-slate-700">Custom layer management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-slate-700">Advanced spatial analysis</span>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/demo"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-600 transition-colors"
              >
                Try our interactive demo →
              </Link>
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center text-slate-500">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-lg">Interactive Map Preview</p>
              <p className="text-sm">Visit our demo page to explore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 