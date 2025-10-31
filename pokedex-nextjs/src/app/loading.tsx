import React from 'react'; 

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-xl font-semibold text-blue-600">
        Carregando Pokémons... 🌐
      </div>
    </div>
  );
}