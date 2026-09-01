import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutClient } from '@/components/sections/AboutClient';
import { COMPANY_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: `Nosotros | Ingeniería Pura. Cero Excusas | ${COMPANY_DATA.name}`,
  description:
    'Conoce al equipo detrás de TunkiTek: ingenieros de software senior especializados en desarrollo web de alta conversión, SaaS a medida, pasarelas de pago y automatización con IA en Perú.',
  keywords: [
    'tunkitek nosotros',
    'agencia tecnologia peru',
    'ingenieria de software lima',
    'desarrolladores nextjs peru',
    'software a medida peru',
  ],
  openGraph: {
    title: `Nosotros | ${COMPANY_DATA.name}`,
    description:
      'Ingeniería pura. Cero excusas. Construimos software de alto impacto y plataformas que escalan tu facturación.',
    url: `https://${COMPANY_DATA.domain}/nosotros`,
    siteName: COMPANY_DATA.name,
    locale: 'es_PE',
    type: 'website',
  },
  alternates: {
    canonical: `https://${COMPANY_DATA.domain}/nosotros`,
  },
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white selection:bg-[#FF4500] selection:text-white flex flex-col justify-between transition-colors duration-300">
      <Header />
      <main className="flex-1">
        <AboutClient />
      </main>
      <Footer />
    </div>
  );
}
