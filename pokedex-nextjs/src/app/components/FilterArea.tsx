'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TypeColors } from '@/app/lib/types';
import Link from 'next/link'; 

interface FilterAreaProps {
    currentFilters: { name?: string; type?: string };
}

export default function FilterArea({ currentFilters }: FilterAreaProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [nameSearch, setNameSearch] = useState(currentFilters.name || '');
  const [typeFilter, setTypeFilter] = useState(currentFilters.type || '');
  
  const allTypes = Object.keys(TypeColors);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    
    if (nameSearch) {
      params.set('name', nameSearch);
    } else {
      params.delete('name');
    }
    
    if (typeFilter) {
      params.set('type', typeFilter);
    } else {
      params.delete('type');
    }
    
    router.push(`/?${params.toString()}`);
  };

  const handleClear = () => {
    setNameSearch('');
    setTypeFilter('');
    router.push('/');
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <form onSubmit={handleSearch} className="flex gap-4 items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Buscar por Nome</label>
          <input
            type="text"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
            placeholder="Ex: bulbasaur, char"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div className="w-48">
          <label className="block text-sm font-medium text-gray-700">Filtro por Tipo</label>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="">Todos os Tipos</option>
            {allTypes.map(type => (
              <option key={type} value={type}>{type.toUpperCase()}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Buscar/Filtrar
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200 transition"
        >
          Limpar
        </button>
      </form>
      
      <div className="mt-4 text-sm">
        <Link 
          href={`/search?${searchParams.toString()}`} 
          className="text-blue-600 hover:text-blue-800"
        >
          Ir para Busca Avançada (/search)
        </Link>
      </div>
    </div>
  );
}