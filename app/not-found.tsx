import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white flex flex-col justify-between transition-colors duration-300">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-32 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF1493]">
            404
          </div>
          <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white">
            Página No Encontrada
          </h1>
          <p className="text-neutral-600 dark:text-white/60 text-sm">
            La página que buscas no existe o ha sido movida. Puedes volver al inicio o revisar nuestros servicios.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF4500] hover:bg-[#FF5514] text-white font-bold text-sm transition-colors shadow-lg shadow-[#FF4500]/25"
            >
              <Home className="w-4 h-4" />
              <span>Ir al Inicio</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
