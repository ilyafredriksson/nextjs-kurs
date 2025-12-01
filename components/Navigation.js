import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex gap-6">
                <li>
                    <Link href="/" className="hover:text-blue-400">Hem</Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-blue-400">Om oss</Link>
                </li>
                <li>
                    <Link href="/blog" className="hover:text-blue-400">Blogg</Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-blue-400">Kontakt</Link>
                </li>
                <li>
                    <Link href="/services" className="hover:text-blue-400">Tjänster</Link>
                </li>
                <li>
                    <Link href="/team" className="hover:text-blue-400">Team</Link>
                </li>

            </ul>
        </nav>
    )
}