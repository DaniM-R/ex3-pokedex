/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para o componente next/image
  images: {
    // Usamos remotePatterns para ser mais flexível e seguro, 
    // especificando o protocolo, hostname e, opcionalmente, o pathname.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        // Opcional: Se necessário, você pode restringir a um path específico
        // pathname: '/PokeAPI/sprites/**', 
      },
    ],
    // Se você estiver em uma versão mais antiga (Next.js 12 ou anterior), use 'domains':
    // domains: ['raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;