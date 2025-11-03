import { ReactNode } from 'react';
import Header from '@/app/components/Layout/Header';
import Footer from '@/app/components/Layout/Footer';
import './globals.css'; 

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}