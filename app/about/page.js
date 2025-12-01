export default function BlogPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Min Blogg</h1>
      <ul>
        <li>
          <a href="/blog/first-post" className="text-blue-500 hover:underline">
            Mitt första inlägg
          </a>
        </li>
      </ul>
    </div>
  )
}