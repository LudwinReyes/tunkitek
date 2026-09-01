import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ServiceDetailClient } from '@/components/sections/ServiceDetailClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import {
  ALL_SERVICE_SLUGS,
  getServiceBySlug,
  getRelatedServices,
} from '@/lib/servicesData';
import { COMPANY_DATA } from '@/lib/data';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Pre-render all 18 service slugs statically
export async function generateStaticParams() {
  return ALL_SERVICE_SLUGS.map((slug) => ({
    slug,
  }));
}

// Generate dynamic SEO metadata for each service landing page
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return {
      title: 'Servicio No Encontrado | TunkiTek',
      description: 'El servicio solicitado no se encuentra disponible.',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      service.shortTitle,
      service.title,
      'desarrollo de software perú',
      'tunkitek servicios',
      'ingenieria de software lima',
      'soluciones digitales peru',
      'yape integracion',
      'plin ecommerce',
      'whatsapp bots ia',
      'saas a medida',
      'aplicaciones moviles lima',
    ],
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://${COMPANY_DATA.domain}/servicios/${service.slug}`,
      siteName: COMPANY_DATA.name,
      locale: 'es_PE',
      type: 'website',
      images: [
        {
          url: '/favicon.png',
          width: 512,
          height: 512,
          alt: `${service.title} - TunkiTek`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: ['/favicon.png'],
    },
    alternates: {
      canonical: `https://${COMPANY_DATA.domain}/servicios/${service.slug}`,
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
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.slug, 3);
  const serviceSchema = getServiceSchema(service);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Servicios', url: '/servicios' },
    { name: service.shortTitle, url: `/servicios/${service.slug}` },
  ]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white selection:bg-[#FF4500] selection:text-white flex flex-col justify-between transition-colors duration-300">
      {/* Schema Structured Data */}
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Global Header */}
      <Header />

      {/* Main Interactive Service Detail View */}
      <main className="flex-1">
        <ServiceDetailClient service={service} relatedServices={relatedServices} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
