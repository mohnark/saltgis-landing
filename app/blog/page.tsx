import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4">Blog</h1>
          <p className="text-xl text-slate-600">
            Insights, updates, and stories from the world of geospatial technology
          </p>
        </div>

        <div className="text-center py-12">
          <p className="text-slate-600 mb-4">Blog posts will appear here once Contentlayer is configured.</p>
          <Link href="/" className="text-primary hover:text-primary-600 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 