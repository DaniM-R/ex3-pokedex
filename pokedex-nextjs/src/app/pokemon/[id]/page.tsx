import { getPokemonDetails, getPokemonList } from '@/app/lib/api/pokemon';
import { BasePokemon, TypeColors } from '@/app/lib/types';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

interface PokemonPageProps {
  params: { id: string }; 
}

export async function generateMetadata({ params }: PokemonPageProps): Promise<Metadata> {
  const currentParams = await params; 
  const pokemon = await getPokemonDetails(currentParams.id);

  if (!pokemon) {
    return { title: 'Pokémon Não Encontrado' };
  }

  const capitalizedName = capitalize(pokemon.name);

  return {
    title: `${capitalizedName} #${String(pokemon.id).padStart(3, '0')} | Pokédex Next.js`,
    description: `Detalhes de ${capitalizedName}, um Pokémon dos tipos ${pokemon.types.join(' e ')}.`,
  };
}

export async function generateStaticParams() {
    const list = await getPokemonList();
    return list.map(p => ({
        id: p.id.toString(),
    }));
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const currentParams = await params;
  const pokemon = await getPokemonDetails(currentParams.id);

  if (!pokemon) {
    notFound(); 
  }

  const capitalizedName = capitalize(pokemon.name);
  const displayId = `#${String(pokemon.id).padStart(3, '0')}`;
  const officialArt = pokemon.image; 

  return (
    <div className="container mx-auto p-4 max-w-2xl bg-white shadow-lg rounded-lg">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← Voltar para a Listagem
      </Link>
      
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">{capitalizedName}</h1>
        <p className="text-2xl text-gray-600 mt-1">{displayId}</p>
        
        <Image
          src={officialArt}
          alt={capitalizedName}
          width={300}
          height={300}
          className="mx-auto my-6"
          priority
          unoptimized={officialArt.startsWith('/')} 
        />
        
        <div className="flex justify-center gap-4 mt-4">
          {pokemon.types.map((typeName) => (
            <span
              key={typeName}
              className={`px-4 py-1 rounded-full text-white font-semibold ${TypeColors[typeName] || 'bg-gray-500'}`}
            >
              {capitalize(typeName)}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}


