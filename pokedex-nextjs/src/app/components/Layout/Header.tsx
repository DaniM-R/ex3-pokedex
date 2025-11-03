import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-red-600 shadow-xl p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 transition opacity-90 hover:opacity-100">
          <span className="text-2xl font-bold text-white tracking-wider">
            Pokédex
          </span>
        </Link>
        
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white font-medium hover:text-red-200 transition">
                Listagem
              </Link>
            </li>
            <li>
              <Link href="/search" className="text-white font-medium hover:text-red-200 transition">
                Busca Avançada
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}