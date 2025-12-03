import Modal from "@/components/Modal";

async function getUsers() {

    return [
        { id: 1, name: "Ilya Fredriksson",email: "ilya@example.com", role: "Admin" },
        { id: 2, name: "Anna Svensson",email: "anna@example.com", role: "User" },
        { id: 3, name: "Erik Johansson",email: "erik@example.com", role: "User" },
    ];
}

async function getProducts() {

    return [
        { id: 1, name: "Laptop", price: 19999 },
        { id: 2, name: "Mus", price: 299 },
        { id: 3, name: "Padda", price: 3999 },
    ];
}

export default async function ModalDemoPage() {
// Hämta data för användare och produkter
    const users = await getUsers();
    const products = await getProducts();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Modal med server component</h1>
            <p className="mb-6 text-gray-700">
                 modal komponent som används i en server component i Next.js 13.
            </p>
            <div className="space-y-4">
                  {/* Modal 1: Visa användare */}
                <Modal triggerButton="visa användare">
                    <h2 className="text-2xl font-bold mb-4">Användarlista</h2>
                    <div className="space-y-2">
                        {users.map((user) => (
                            <div key={user.id} className="p-4 border rounded">
                                <p><span className="font-semibold">Namn:</span> {user.name}</p>
                                <p><span className="text-sm text-gray-600">Email:</span> {user.email}</p>
                                <p><span className="text-sm text-gray-600">Roll:</span> {user.role}</p>
                            </div>
                        ))}
                    </div>
                </Modal>
                    {/* Modal 2: Visa produkter */}
                <Modal triggerButton="visa produkter">
                    <h2 className="text-2xl font-bold mb-4">Produktlista</h2>
                    <div className="space-y-2">
                        {products.map((product) => (
                            <div key={product.id} className="p-4 border rounded flex justify-between">
                                <span className="font-semibold" >{product.name}</span>
                                <span className="text-gray-700">{product.price} SEK</span>
                            </div>
                        ))}
                    </div>
                </Modal>
            </div>
        </div>
    );
}