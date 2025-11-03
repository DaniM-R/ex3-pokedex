import { PokemonListItem } from '@/app/lib/types';
import PokemonCard from './PokemonCard';

interface PokemonGridProps {
  pokemonList: PokemonListItem[];
}

export default function PokemonGrid({ pokemonList }: PokemonGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}