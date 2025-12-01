export default function ProductPage({ params }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Produkt Detaljer</h1>
      <p className="mb-2">
        <strong>Kategori:</strong> {params.category}
      </p>
      <p>
        <strong>Produkt ID:</strong> {params.productId}
      </p>
    </div>
  )
}
