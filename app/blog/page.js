import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    { id: 1, slug: 'hello-world', title: 'Hello World' },
    { id: 2, slug: 'nextjs-tips', title: 'Next.js Tips' },
  ]

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Min Blogg</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}