import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ServicesHubClient } from '@/components/sections/ServicesHubClient';
import { SERVICES_DETAILED_DATA } from '@/lib/servicesData';
import { COMPANY_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Catálogo de Servicios Digitales e Ingeniería de Software | TunkiTek',
  description:
    'Ecosistema Tecnológico TunkiTek: 18 soluciones de ingeniería desarrolladas para escalar operaciones y multiplicar conversiones en Perú y la región.',
  keywords: [
    'servicios tunkitek',
    'desarrollo web peru',
    'landing pages cro lima',
    'ecommerce b2b whatsapp',
    'headless commerce nextjs',
    'desarrollo apps moviles flutter',
    'sistemas saas cloud',
    'erp crm a medida peru',
    'validacion yape plin',
    'whatsapp bots ia',
  ],
  openGraph: {
    title: 'Catálogo de Servicios Digitales e Ingeniería de Software | TunkiTek',
    description:
      'Soluciones de ingeniería desarrolladas para escalar operaciones y multiplicar conversiones. Conoce nuestros 18 servicios de Desarrollo Web, Apps Móviles, SaaS y Automatización con IA.',
    url: `https://${COMPANY_DATA.domain}/servicios`,
    siteName: COMPANY_DATA.name,
    locale: 'es_PE',
    type: 'website',
  },
  alternates: {
    canonical: `https://${COMPANY_DATA.domain}/servicios`,
  },
};

export default function ServiciosPage() {
  const servicesList = Object.values(SERVICES_DETAILED_DATA);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white selection:bg-[#FF4500] selection:text-white flex flex-col justify-between transition-colors duration-300">
      {/* Global Navigation Header */}
      <Header />

      {/* Main Hub Content */}
      <main className="flex-1 pt-12 sm:pt-16">
        <ServicesHubClient services={servicesList} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
