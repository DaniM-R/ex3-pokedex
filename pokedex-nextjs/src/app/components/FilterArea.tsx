'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TypeColors, PokemonType } from '@/app/lib/types';
import Link from 'next/link'; 
import React from 'react';
import { capitalize } from '@/app/lib/utils'; 

interface FilterAreaProps {
    currentFilters: { name?: string; type?: string };
}

const allTypes: PokemonType[] = Object.keys(TypeColors);

export default function FilterArea({ currentFilters }: FilterAreaProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [nameSearch, setNameSearch] = useState(currentFilters.name || '');
  const [typeFilter, setTypeFilter] = useState(currentFilters.type || '');
  

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
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 sm:items-end">
        <div className="flex-1 min-w-40">
          <label className="block text-sm font-medium text-gray-700">Buscar por Nome</label>
          <input
            type="text"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
            placeholder="Ex: bulbasaur"
            className="mt-1 block w-full border border-black-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium text-gray-700"
          />
        </div>

        <div className="w-full sm:w-48">
          <label className="block text-sm font-medium text-gray-700">Filtro por Tipo</label>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium text-gray-700"
          >
            <option value="">Todos os Tipos</option>
            {allTypes.map(type => (
              <option key={type} value={type}>{capitalize(type)}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-2 mt-4 sm:mt-0">
            <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition shadow-md w-full sm:w-auto"
            >
            Buscar
            </button>
            <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 border bg-red-600 rounded-md bg-gray-100 hover:bg-red-700 transition shadow-md w-full sm:w-auto"
            >
            Limpar
            </button>
        </div>
      </form>

    </div>
  );
}
