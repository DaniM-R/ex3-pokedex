import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh] text-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      <p className="text-xl font-semibold text-gray-600 mt-4">
        Carregando Pokémons... Preparando o Canvas.
      </p>
    </div>
  );
}