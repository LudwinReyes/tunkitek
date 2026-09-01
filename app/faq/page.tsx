import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FaqClient } from '@/components/sections/FaqClient';
import { COMPANY_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: `Preguntas Frecuentes | Respuestas Claras para Decisiones Rápidas | ${COMPANY_DATA.name}`,
  description:
    'Resuelve todas tus dudas sobre desarrollo de software a medida, tiempos de entrega, integración de Yape/Plin, propiedad del código fuente y facturación formal con TunkiTek en Perú.',
  keywords: [
    'tunkitek faq',
    'preguntas frecuentes desarrollo software peru',
    'yape integracion dudas',
    'factura electronica software peru',
    'tiempos desarrollo software',
  ],
  openGraph: {
    title: `Preguntas Frecuentes | ${COMPANY_DATA.name}`,
    description:
      'Respuestas claras para decisiones rápidas. Todo lo que necesitas saber antes de iniciar tu proyecto con TunkiTek.',
    url: `https://${COMPANY_DATA.domain}/faq`,
    siteName: COMPANY_DATA.name,
    locale: 'es_PE',
    type: 'website',
  },
  alternates: {
    canonical: `https://${COMPANY_DATA.domain}/faq`,
  },
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white selection:bg-[#FF4500] selection:text-white flex flex-col justify-between transition-colors duration-300">
      <Header />
      <main className="flex-1">
        <FaqClient />
      </main>
      <Footer />
    </div>
  );
}
