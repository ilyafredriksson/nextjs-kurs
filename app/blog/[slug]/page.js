export default function BlogPost({ params }) {
  return (
    <article className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Blogg: {params.slug}
      </h1>
      <p>Detta är ett dynamiskt blogginlägg!</p>
    </article>
  )
}