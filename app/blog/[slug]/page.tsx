import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
    slug: doc._raw.flattenedPath,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug)
  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug)

  if (!doc) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-ink mb-4">{doc.title}</h1>
        <p className="text-slate-600 mb-4">{doc.description}</p>
        <time className="text-sm text-slate-500">
          {format(parseISO(doc.date), 'MMMM dd, yyyy')}
        </time>
      </div>
      <div className="prose prose-lg max-w-none">
        {/* Content will be rendered here by Contentlayer */}
      </div>
    </article>
  )
} 