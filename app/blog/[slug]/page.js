export default function BlogPost({ params }) {
  const posts = [
    { id: 1, slug: 'hello-world', title: 'Hello World' },
    { id: 2, slug: 'nextjs-tips', title: 'Next.js Tips' },
  ]

  // Hitta posten som matchar slug
  const post = posts.find((p) => p.slug === params.slug)

  return (
    <article className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        {post ? post.title : 'Post hittades inte'}
      </h1>
      <p className="text-gray-700">
        {post ? `Detta är blogginlägget: ${post.title}` : 'Denna post finns inte.'}
      </p>
    </article>
  )
}