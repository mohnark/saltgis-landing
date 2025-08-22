import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-background opacity-5" />
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6 max-w-4xl mx-auto">
      Software for Advanced Location Technologies in{' '}
          <span className="text-primary">Geographic Information Systems</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
          Transforming complex spatial data into clear, actionable intelligence for smarter land, infrastructure, and resource management.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Book a Call
          </Link>
          <Link
            href="/portfolio"
            className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            View Our Work
          </Link>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2025</div>
            <div className="text-slate-600">Founded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-slate-600">Core Pillars</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-slate-600">Focus on Precision</div>
          </div>
        </div>
      </div>
    </section>
  )
} 