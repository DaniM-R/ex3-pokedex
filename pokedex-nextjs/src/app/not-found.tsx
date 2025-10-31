import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-gray-50 rounded-lg shadow-xl">
      <h1 className="text-6xl font-extrabold text-red-700">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4">Página ou Pokémon Não Encontrado</h2>
      <p className="text-xl text-gray-600 mt-3">
        Ops! Parece que você tentou acessar uma rota ou um Pokémon que não existe na Pokédex da Primeira Geração.
      </p>
      
      <Link 
        href="/" 
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-md"
      >
        Voltar para a Listagem de Pokémons
      </Link>
    </div>
  );
}