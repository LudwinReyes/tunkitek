import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CasesClient } from '@/components/sections/CasesClient';
import { COMPANY_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Casos de Estudio & Prueba Social | TunkiTek',
  description:
    'Explora los proyectos reales de TunkiTek: SaaS con validación de Yape/Plin, e-commerce masivos de 5,000+ SKUs, ciberseguridad frontend y soluciones corporativas de alto impacto.',
  keywords: [
    'casos de estudio tunkitek',
    'proyectos de software peru',
    'yape plin saas pagoping',
    'ecommerce iluminacion perú',
    'gestion segura encriptacion',
    'casos de exito ingenieria de software',
  ],
  openGraph: {
    title: 'Casos de Estudio & Prueba Social | TunkiTek',
    description:
      'Proyectos reales y métricas demostradas de desarrollo web, SaaS y automatización en Perú.',
    url: `https://${COMPANY_DATA.domain}/casos-estudio`,
    siteName: COMPANY_DATA.name,
    locale: 'es_PE',
    type: 'website',
  },
  alternates: {
    canonical: `https://${COMPANY_DATA.domain}/casos-estudio`,
  },
};

export default function CasosEstudioPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white selection:bg-[#FF4500] selection:text-white flex flex-col justify-between transition-colors duration-300">
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
