import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutClient } from '@/components/sections/AboutClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { COMPANY_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: `Nosotros | Ingeniería de Software de Alto Impacto | ${COMPANY_DATA.name}`,
  description:
    'Conoce al equipo de TunkiTek: ingenieros senior especializados en desarrollo web Next.js, SaaS cloud, pasarelas de pago peruanas y automatización con IA en Lima, Perú.',
  keywords: [
    'tunkitek nosotros',
    'agencia tecnologia peru',
    'ingenieria de software lima',
    'desarrolladores nextjs peru',
    'software a medida peru',
    'equipo ingenieria tunkitek',
  ],
  openGraph: {
    title: `Nosotros | ${COMPANY_DATA.name}`,
    description:
      'Ingeniería pura. Cero excusas. Construimos software de alto rendimiento que escala la facturación de tu empresa.',
    url: `https://${COMPANY_DATA.domain}/nosotros`,
    siteName: COMPANY_DATA.name,
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'Equipo TunkiTek Perú',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Nosotros | ${COMPANY_DATA.name}`,
    description:
      'Conoce a los ingenieros de software detrás de las plataformas digitales de alto impacto en Perú.',
    images: ['/favicon.png'],
  },
  alternates: {
    canonical: `https://${COMPANY_DATA.domain}/nosotros`,
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

export default function NosotrosPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Nosotros', url: '/nosotros' },
  ]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white selection:bg-[#FF4500] selection:text-white flex flex-col justify-between transition-colors duration-300">
      <JsonLd data={breadcrumbSchema} />
      <Header />
      <main className="flex-1">
        <AboutClient />
      </main>
      <Footer />
    </div>
  );
}
