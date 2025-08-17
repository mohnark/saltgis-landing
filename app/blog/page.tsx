import Link from 'next/link'
import { allDocs } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

export default function BlogPage() {
  const posts = allDocs
    .filter((doc) => doc.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4">Blog</h1>
          <p className="text-xl text-slate-600">
            Insights, updates, and stories from the world of geospatial technology
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post._id} className="border-b border-slate-200 pb-8 last:border-b-0">
              <div className="mb-4">
                <time className="text-sm text-slate-500">
                  {format(parseISO(post.date), 'MMMM dd, yyyy')}
                </time>
              </div>
              <h2 className="text-2xl font-bold text-ink mb-3">
                <Link href={post.url} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-slate-600 mb-4">{post.description}</p>
              <div className="flex items-center space-x-4">
                <Link
                  href={post.url}
                  className="text-primary font-semibold hover:text-primary-600 transition-colors"
                >
                  Read more →
                </Link>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex space-x-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
} 