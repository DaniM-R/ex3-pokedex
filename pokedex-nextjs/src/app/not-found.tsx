import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-white rounded-lg shadow-xl border-t-4 border-red-500">
      <h1 className="text-6xl font-extrabold text-red-700">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4">Pokémon ou Rota Não Encontrada</h2>
      <p className="text-xl text-gray-600 mt-3">
        A rota solicitada ou o Pokémon especificado não existe na Pokédex.
      </p>
      
      <Link 
        href="/" 
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-lg"
      >
        Voltar para a Listagem
      </Link>
    </div>
  );
}
