import path from 'path';
import * as fs from 'fs/promises';
import { BasePokemon, PokemonListItem } from '../types';

const DATA_FILE_PATH = path.join(process.cwd(), 'public', 'data', 'first-gen-pokemon.json');

interface LocalPokemonData extends BasePokemon {}

export async function getPokemonList(): Promise<PokemonListItem[]> {
  try {
    const fileContents = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    const rawData: LocalPokemonData[] = JSON.parse(fileContents);
    
    const pokemonList: PokemonListItem[] = rawData.map(detail => ({
      id: detail.id,
      name: detail.name,
      types: detail.types, 
      imageUrl: detail.image ?? '/placeholder.png', 
      displayId: `#${String(detail.id).padStart(3, '0')}`,
    }));

    return pokemonList;

  } catch (error) {
    console.error("Erro ao carregar dados do JSON local:", error);
    return []; 
  }
}

export async function getPokemonDetails(idOrName: string | undefined): Promise<BasePokemon | null> {
  if (!idOrName) {
      console.error("ID ou Nome do Pokémon é undefined/null na requisição.");
      return null;
  }

  try {
    const fileContents = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    const rawData: LocalPokemonData[] = JSON.parse(fileContents);
    
    const searchKey = idOrName.toString().toLowerCase();

    const pokemon = rawData.find(p => 
      p.id.toString() === searchKey || p.name.toLowerCase() === searchKey
    );
    
    return pokemon || null;

  } catch (error) {
    console.error("Erro ao buscar detalhes do JSON local:", error);
    return null;
  }
}