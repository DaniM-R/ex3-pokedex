import Link from 'next/link';
import Image from 'next/image';
import { PokemonListItem, TypeColors } from '@/app/lib/types';

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

interface PokemonCardProps {
  pokemon: PokemonListItem;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const { id, name, displayId, imageUrl, types } = pokemon;

  return (
    <Link href={`/pokemon/${id}`} passHref>
      <div className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-200 cursor-pointer">
        
        <div className="relative h-40 bg-gray-50 flex items-center justify-center p-4">
          <Image
            src={imageUrl}
            alt={name}
            width={120}
            height={120}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
            unoptimized={imageUrl.startsWith('/')} 
          />
        </div>

        <div className="p-4 text-center">
          
          <p className="text-sm font-medium text-gray-500 mb-1">{displayId}</p>
          
          <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
            {capitalize(name)}
          </h2>

          <div className="flex justify-center gap-2 flex-wrap">
            {types.map((typeName) => (
              <span
                key={typeName}
                className={`px-3 py-0.5 text-xs font-semibold rounded-full text-white ${
                  TypeColors[typeName] || 'bg-gray-500'
                }`}
              >
                {capitalize(typeName)}
              </span>
            ))}
          </div>

        </div>
      </div>
    </Link>
  );
}