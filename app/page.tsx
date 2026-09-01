import type { Metadata } from 'next';
import { HomeClient } from '@/components/sections/HomeClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/schema';
import { COMPANY_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: 'TunkiTek | Desarrollo de Software, Páginas Web y Apps Móviles en Perú',
  description:
    'Agencia de ingeniería de software en Lima, Perú. Desarrollo web de alta velocidad con Next.js, sistemas SaaS cloud, aplicaciones móviles y automatizaciones con IA.',
  keywords: [
    'desarrollo de software peru',
    'agencia de tecnologia lima',
    'desarrollo web nextjs lima',
    'sistemas saas a medida',
    'desarrollo de aplicaciones moviles peru',
    'validacion yape plin ecommerce',
    'chatbots whatsapp con ia peru',
    'ingenieria de software tunkitek',
    'consultoria tecnologica peru',
  ],
  openGraph: {
    title: 'TunkiTek | Desarrollo de Software, Páginas Web y Apps Móviles en Perú',
    description:
      'Soluciones digitales de alto impacto para escalar operaciones y multiplicar conversiones. Especialistas en Next.js, SaaS cloud, Flutter e Inteligencia Artificial.',
    url: 'https://tunkitek.lat',
    siteName: COMPANY_DATA.name,
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'TunkiTek - Agencia de Tecnología e Innovación',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TunkiTek | Desarrollo de Software, Páginas Web y Apps Móviles en Perú',
    description:
      'Ingeniería de software, desarrollo web y automatización con IA de alto impacto en Perú y la región.',
    images: ['/favicon.png'],
  },
  alternates: {
    canonical: 'https://tunkitek.lat',
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

export default function HomePage() {
  const orgSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <>
      <JsonLd data={orgSchema} />
      <JsonLd data={webSiteSchema} />
      <HomeClient />
    </>
  );
}
