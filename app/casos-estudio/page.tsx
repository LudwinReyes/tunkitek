import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CasesClient } from '@/components/sections/CasesClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { COMPANY_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Casos de Estudio & Prueba Social | TunkiTek',
  description:
    'Explora los proyectos reales de TunkiTek: SaaS con validación de Yape/Plin, e-commerce masivos de 5,000+ SKUs, ciberseguridad frontend y soluciones corporativas de alto impacto en Perú.',
  keywords: [
    'casos de estudio tunkitek',
    'proyectos de software peru',
    'yape plin saas pagoping',
    'ecommerce iluminacion perú',
    'gestion segura encriptacion',
    'casos de exito ingenieria de software',
    'desarrollo web resultados peru',
  ],
  openGraph: {
    title: 'Casos de Estudio & Proyectos Reales | TunkiTek',
    description:
      'Proyectos reales y métricas demostradas de desarrollo web, SaaS y automatización en Perú.',
    url: `https://${COMPANY_DATA.domain}/casos-estudio`,
    siteName: COMPANY_DATA.name,
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'Casos de Éxito TunkiTek',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casos de Estudio & Proyectos Reales | TunkiTek',
    description:
      'Métricas demostradas y casos de éxito en software, SaaS y ecommerce en Perú.',
    images: ['/favicon.png'],
  },
  alternates: {
    canonical: `https://${COMPANY_DATA.domain}/casos-estudio`,
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

export default function CasosEstudioPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Casos de Éxito', url: '/casos-estudio' },
  ]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white selection:bg-[#FF4500] selection:text-white flex flex-col justify-between transition-colors duration-300">
      <JsonLd data={breadcrumbSchema} />
      {/* Global Header */}
      <Header />

      {/* Main Interactive Case Studies Content */}
      <main className="flex-1">
        <CasesClient />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
