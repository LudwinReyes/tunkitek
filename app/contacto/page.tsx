import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactClient } from '@/components/sections/ContactClient';
import { COMPANY_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto & Cotizaciones | TunkiTek Agencia de Tecnología',
  description:
    'Inicia la evolución de tu negocio con TunkiTek. Habla directamente con nuestros ingenieros sin intermediarios. Tel: 928659361 | Email: ventas@tunkitek.lat.',
  keywords: [
    'contacto tunkitek',
    'cotizar software peru',
    'desarrollo saas peru',
    'whatsapp bots ia cotizacion',
    'consultoria tecnologica lima',
    'ingenieria de software lima',
  ],
  openGraph: {
    title: 'Contacto & Cotizaciones | TunkiTek',
    description:
      'Habla directamente con ingenieros de software senior para cotizar plataformas web, sistemas SaaS y automatizaciones con IA en Perú.',
    url: `https://${COMPANY_DATA.domain}/contacto`,
    siteName: COMPANY_DATA.name,
    locale: 'es_PE',
    type: 'website',
  },
  alternates: {
    canonical: `https://${COMPANY_DATA.domain}/contacto`,
  },
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white selection:bg-[#FF4500] selection:text-white flex flex-col justify-between transition-colors duration-300">
      {/* Global Header */}
      <Header />

      {/* Main Interactive Contact Content with dedicated top padding for glassmorphism header */}
      <main className="flex-1 pt-24 sm:pt-28">
        <ContactClient />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
