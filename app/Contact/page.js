export default function ContactPage() {
  return (
    <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Kontakta oss</h1>
        <form className="max-w-lg">
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Namn</label>
                <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">E-post</label>
                <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Meddelande</label>
                <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" rows="5"></textarea>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">Skicka</button>
        </form>
    </div>
  )
}