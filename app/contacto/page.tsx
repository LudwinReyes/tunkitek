import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactClient } from '@/components/sections/ContactClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { COMPANY_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto & Cotizaciones | TunkiTek Agencia de Tecnología',
  description:
    'Inicia la evolución de tu negocio con TunkiTek. Habla directamente con ingenieros de software senior en Lima, Perú. Tel: +51 928 659 361 | Email: ventas@tunkitek.lat.',
  keywords: [
    'contacto tunkitek',
    'cotizar software peru',
    'desarrollo saas peru',
    'whatsapp bots ia cotizacion',
    'consultoria tecnologica lima',
    'ingenieria de software lima',
    'presupuesto desarrollo web peru',
  ],
  openGraph: {
    title: 'Contacto & Cotizaciones | TunkiTek',
    description:
      'Habla directamente con ingenieros de software senior para cotizar plataformas web, sistemas SaaS y automatizaciones con IA en Perú.',
    url: `https://${COMPANY_DATA.domain}/contacto`,
    siteName: COMPANY_DATA.name,
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'Contacto TunkiTek Perú',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto & Cotizaciones | TunkiTek',
    description:
      'Cotiza tu plataforma web, app o sistema a medida directamente con nuestro equipo de ingeniería.',
    images: ['/favicon.png'],
  },
  alternates: {
    canonical: `https://${COMPANY_DATA.domain}/contacto`,
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

export default function ContactoPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Contacto', url: '/contacto' },
  ]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white selection:bg-[#FF4500] selection:text-white flex flex-col justify-between transition-colors duration-300">
      <JsonLd data={breadcrumbSchema} />
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
