import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-12 shadow-inner">
      <div className="container mx-auto text-center">
        <p>Desenvolvido com Next.js 15 (App Router) e TypeScript Avançado</p>
        <p className="text-sm text-gray-400 mt-1">
          Projeto acadêmico - Dados da Primeira Geração.
        </p>
      </div>
    </footer>
  );
}