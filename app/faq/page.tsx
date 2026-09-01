import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FaqClient } from '@/components/sections/FaqClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { COMPANY_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: `Preguntas Frecuentes | Desarrollo de Software y Cotizaciones | ${COMPANY_DATA.name}`,
  description:
    'Resuelve todas tus dudas sobre desarrollo de software a medida, tiempos de entrega, integración de Yape/Plin, propiedad del código fuente y facturación formal con TunkiTek en Perú.',
  keywords: [
    'tunkitek faq',
    'preguntas frecuentes desarrollo software peru',
    'yape integracion dudas',
    'factura electronica software peru',
    'tiempos desarrollo software',
    'contratos nda software lima',
  ],
  openGraph: {
    title: `Preguntas Frecuentes | ${COMPANY_DATA.name}`,
    description:
      'Respuestas claras para decisiones rápidas. Todo lo que necesitas saber antes de iniciar tu proyecto con TunkiTek.',
    url: `https://${COMPANY_DATA.domain}/faq`,
    siteName: COMPANY_DATA.name,
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'FAQ TunkiTek',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Preguntas Frecuentes | ${COMPANY_DATA.name}`,
    description:
      'Respuestas sobre presupuestos, metodologías ágiles y entregables con TunkiTek.',
    images: ['/favicon.png'],
  },
  alternates: {
    canonical: `https://${COMPANY_DATA.domain}/faq`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function FaqPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Preguntas Frecuentes', url: '/faq' },
  ]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white selection:bg-[#FF4500] selection:text-white flex flex-col justify-between transition-colors duration-300">
      <JsonLd data={breadcrumbSchema} />
      <Header />
      <main className="flex-1">
        <FaqClient />
      </main>
      <Footer />
    </div>
  );
}
