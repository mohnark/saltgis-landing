import { notFound } from 'next/navigation'

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-ink mb-4">Blog Post</h1>
        <p className="text-slate-600 mb-4">This is a placeholder blog post.</p>
      </div>
      <div className="prose prose-lg max-w-none">
        <p>Content will be rendered here by Contentlayer once the build process is working.</p>
      </div>
    </article>
  )
} 