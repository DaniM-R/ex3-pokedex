import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-red-600 shadow-md p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white tracking-wider">
            Pokédex Gen 1
          </span>
        </Link>
        
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-red-200 transition">
                Listagem
              </Link>
            </li>
            <li>
              <Link href="/search" className="text-white hover:text-red-200 transition">
                Busca
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}