export type PokemonType = string; 

export interface BasePokemon {
  id: number;
  name: string;
  types: PokemonType[]; 
  image: string; 
}

export type PokemonListItem = Pick<BasePokemon, 'id' | 'name' | 'types'> & {
  imageUrl: string; 
  displayId: string;
};

export const TypeColors: Record<string, string> = {
  grass: 'bg-green-500',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  bug: 'bg-lime-500',
  normal: 'bg-gray-400',
  poison: 'bg-purple-500',
  electric: 'bg-yellow-400',
  ground: 'bg-yellow-700',
  fairy: 'bg-pink-300',
  fighting: 'bg-orange-700',
  psychic: 'bg-fuchsia-600',
  rock: 'bg-amber-700',
  ghost: 'bg-indigo-700',
  ice: 'bg-sky-300',
  dragon: 'bg-indigo-900',
  steel: 'bg-slate-500',
  dark: 'bg-zinc-700',
  flying: 'bg-sky-400',
};

export interface PokemonSearchParams {
    name?: string;
    type?: string; 
}