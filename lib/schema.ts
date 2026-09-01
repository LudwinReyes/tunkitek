import { COMPANY_DATA } from '@/lib/data';
import { ServiceDetail } from '@/lib/servicesData';

export const BASE_URL = 'https://tunkitek.lat';

/**
 * Organization & ProfessionalService schema for Local & Global SEO
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#organization`,
    name: COMPANY_DATA.name,
    legalName: COMPANY_DATA.legalName,
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.png`,
    image: `${BASE_URL}/favicon.png`,
    description:
      'Agencia de ingeniería de software y tecnología en Lima, Perú. Especializada en desarrollo web con Next.js, sistemas SaaS cloud, aplicaciones móviles y automatización con IA.',
    telephone: `+51${COMPANY_DATA.phone}`,
    email: COMPANY_DATA.email,
    priceRange: 'S/ 2,500 - S/ 25,000',
    currenciesAccepted: 'PEN, USD',
    paymentAccepted: 'Transferencia bancaria, Yape, Plin, Tarjeta de crédito',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lima',
      addressRegion: 'Lima',
      addressCountry: 'PE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -12.046374,
      longitude: -77.042793,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Perú',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Latinoamérica',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '08:30',
        closes: '18:30',
      },
    ],
    sameAs: [
      COMPANY_DATA.socials.linkedin,
      COMPANY_DATA.socials.github,
      COMPANY_DATA.socials.instagram,
    ],
  };
}

/**
 * WebSite schema for Sitewide & Sitelinks Searchbox
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: COMPANY_DATA.name,
    alternateName: 'TunkiTek Perú',
    description: COMPANY_DATA.slogan,
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/servicios?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'es-PE',
  };
}

/**
 * Service Schema for each of the 18 Service landing pages
 */
export function getServiceSchema(service: ServiceDetail) {
  const numericPrice = service.pricingHint?.startingAt
    ? service.pricingHint.startingAt.replace(/[^0-9]/g, '')
    : '2600';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/servicios/${service.slug}#service`,
    name: service.title,
    alternateName: service.shortTitle,
    serviceType: service.categoryLabel,
    category: service.category,
    description: service.metaDescription,
    url: `${BASE_URL}/servicios/${service.slug}`,
    provider: {
      '@id': `${BASE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Perú',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Capacidades de ${service.shortTitle}`,
      itemListElement: service.subServices.map((sub, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: sub,
        },
        position: index + 1,
      })),
    },
    offers: {
      '@type': 'Offer',
      price: numericPrice,
      priceCurrency: 'PEN',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: numericPrice,
        priceCurrency: 'PEN',
        name: service.pricingHint?.planReference || 'Presupuesto Inicial Estimado',
      },
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/servicios/${service.slug}#cotizar`,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * BreadcrumbList schema for rich SERP breadcrumbs
 */
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}
