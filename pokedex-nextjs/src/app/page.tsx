import { Suspense } from 'react';
import PokemonGrid from '@/app/components/PokemonGrid';
import FilterArea from '@/app/components/FilterArea';
import { getPokemonList } from '@/app/lib/api/pokemon';

interface HomePageProps {
  searchParams: {
    name?: string;
    type?: string;
  };
}


  export default async function HomePage({ searchParams }: HomePageProps) {
  const allPokemon = await getPokemonList();
  
  const currentSearchParams = await searchParams;

  const { name, type } = currentSearchParams; 
  let filteredPokemon = allPokemon;

  if (name) {
    filteredPokemon = filteredPokemon.filter(p => 
      p.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (type) {
    filteredPokemon = filteredPokemon.filter(p =>
      p.types.some((t: any) => {
        const typeName = typeof t === 'string' ? t : (t?.type?.name ?? '');
        return String(typeName).toLowerCase() === type.toLowerCase();
      })
    );
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pokédex - Primeira Geração (150)</h1>
      
      <FilterArea currentFilters={{ name, type }} />
      
      <div className="mt-8">
        {filteredPokemon.length === 0 ? (
          <p className="text-xl text-red-500">Nenhum Pokémon encontrado com os filtros aplicados.</p>
        ) : (
          <PokemonGrid pokemonList={filteredPokemon} />
        )}
      </div>
    </div>
  );
}