import { getPokemonDetails, getPokemonList } from '@/app/lib/api/pokemon';
import { TypeColors, AppPokemonPageProps } from '@/app/lib/types';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export async function generateMetadata({ params }: AppPokemonPageProps): Promise<Metadata> {
  const currentParams = await params; 
  const pokemon = await getPokemonDetails(currentParams.id);

  if (!pokemon) {
    return { title: 'Pokémon Não Encontrado' };
  }

  const capitalizedName = capitalize(pokemon.name);
  const displayId = `#${String(pokemon.id).padStart(3, '0')}`;

  return {
    title: `${capitalizedName} ${displayId} | Pokédex Next.js`,
    description: `Detalhes de ${capitalizedName}, um Pokémon dos tipos ${pokemon.types.join(' e ')}.`,
    openGraph: {
        images: [{ url: pokemon.image }], 
    },
  };
}

export async function generateStaticParams() {
    const list = await getPokemonList();
    return list.map(p => ({
        id: p.id.toString(),
    }));
}

export default async function PokemonPage({ params }: AppPokemonPageProps) {
  const currentParams = await params;
  
  const pokemon = await getPokemonDetails(currentParams.id);

  if (!pokemon) {
    notFound(); 
  }

  const capitalizedName = capitalize(pokemon.name);
  const displayId = `#${String(pokemon.id).padStart(3, '0')}`;
  const officialArt = pokemon.image; 

  return (
    <div className="container mx-auto p-4 max-w-2xl bg-white shadow-xl rounded-lg border-t-4 border-red-500">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block font-medium transition">
        ← Voltar para a Listagem
      </Link>
      
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">{capitalizedName}</h1>
        <p className="text-2xl text-gray-500 mt-1">{displayId}</p>
        
        <div className="relative w-64 h-64 mx-auto my-6">
            <Image
                src={officialArt}
                alt={capitalizedName}
                fill 
                className="object-contain"
                priority
                unoptimized={officialArt.startsWith('/')} 
            />
        </div>
        
        <div className="flex justify-center gap-4 mt-4">
          {pokemon.types.map((typeName) => (
            <span
              key={typeName}
              className={`px-4 py-1 rounded-full text-white font-semibold shadow-md ${TypeColors[typeName] || 'bg-gray-500'}`}
            >
              {capitalize(typeName)}
            </span>
          ))}
        </div>

      </div>
      

    </div>
  );
}