import Link from 'next/link'

export default function CategoryPage({ params }) {
  const products = ['produkt-1', 'produkt-2', 'produkt-3']
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Kategori: {params.category}</h1>
      <p className="mb-4">Produkter i denna kategori:</p>
      <ul className="space-y-2">
        {products.map((productId) => (
          <li key={productId}>
            <Link 
              href={`/products/${params.category}/${productId}`} 
              className="text-blue-500 hover:underline"
            >
              {productId}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
