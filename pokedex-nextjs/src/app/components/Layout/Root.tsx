import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/app/components/Layout/Header';
import Footer from '@/app/components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pokédex Next.js',
  description: 'Uma Pokédex simples utilizando Next.js App Router e TypeScript avançado.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-gray-50"> 
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto p-4 max-w-7xl">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}