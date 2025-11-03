import { Suspense } from 'react';
import PokemonGrid from '@/app/components/PokemonGrid';
import { getPokemonList } from '@/app/lib/api/pokemon';
import React from 'react';


interface HomePageProps {
  searchParams: {
    name?: string;
    type?: string;
  };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const currentSearchParams = await searchParams;
  
  const allPokemon = await getPokemonList();
  
  const { name, type } = currentSearchParams;
  let filteredPokemon = allPokemon;

  if (name) {
    filteredPokemon = filteredPokemon.filter(p => 
      p.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (type) {
    filteredPokemon = filteredPokemon.filter(p => 
      p.types.some(t => t.toLowerCase() === type.toLowerCase())
    );
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pokemons</h1>
      
   
      
      <div className="mt-8">
        
          <Suspense fallback={<div>Carregando Pokémons...</div>}> 
            <PokemonGrid pokemonList={filteredPokemon} />
          </Suspense>
  
      </div>
    </div>
  );
}