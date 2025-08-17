import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Location Data?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Join hundreds of organizations that trust SaltGIS to power their geospatial operations.
          Let&apos;s discuss how we can help you make better location-based decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg"
          >
            Schedule a Demo
          </Link>
          <Link
            href="/demo"
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
          >
            Try Live Demo
          </Link>
        </div>
      </div>
    </section>
  )
} 