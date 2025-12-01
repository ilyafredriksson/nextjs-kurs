import Link from "next/link";

export default function ProductsPage() {
    const products = ['elektronik', 'kläder', 'böcker', 'möbler'];
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Våra Produkter</h1>
            <p className="mb-4">Välj en kategori:</p>
            <ul className="space-y-2">
                {products.map((category) => (
                    <li key={category}>
                        <Link href={`/products/${category}`} className="text-blue-500 hover:underline">
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}