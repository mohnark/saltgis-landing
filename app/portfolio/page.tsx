export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-ink mb-4">Our Portfolio</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing our expertise in building modern GIS applications, automation pipelines, 
            and location intelligence platforms that drive real-world impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio items will be added here */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <div className="h-48 bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-slate-400">Project Image</span>
            </div>
            <h3 className="text-lg font-semibold text-ink mb-2">Coming Soon</h3>
            <p className="text-slate-600 text-sm">
              Our portfolio of innovative GIS solutions will be showcased here.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Interested in seeing our work in action? Contact us to discuss your specific needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
} 