export type CaseCategory = 'Todos' | 'SaaS' | 'E-commerce' | 'Corporativo' | 'Seguridad';

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: 'SaaS' | 'E-commerce' | 'Corporativo' | 'Seguridad';
  challenge: string;
  solution: string;
  impactMetric: string;
  impactLabel: string;
  techStack: string[];
  imageUrl: string;
  isFeatured?: boolean;
  bentoSpan?: string; // e.g. 'col-span-1 md:col-span-2' or 'col-span-1'
  clientLocation?: string;
  duration?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const CATEGORIES_LIST: CaseCategory[] = [
  'Todos',
  'SaaS',
  'E-commerce',
  'Corporativo',
  'Seguridad',
];

export const CASES_DATA: CaseStudyItem[] = [
  {
    id: 'pagoping-saas',
    slug: 'pagoping-validacion-yape-plin',
    title: 'Validación Automática de Yape y Plin en Tiempo Real',
    client: 'PagoPing',
    category: 'SaaS',
    challenge:
      'Las empresas y comercios peruanos perdían hasta 18 horas semanales verificando comprobantes manuales de Yape y Plin por WhatsApp, sufriendo estafas con capturas falsas y demoras en el despacho.',
    solution:
      'TunkiTek desarrolló un motor SaaS serverless con WebSockets y visión OCR que detecta, valida y concilia pagos en menos de 2.5 segundos con confirmación bancaria directa y webhook instantáneo.',
    impactMetric: '2.5s',
    impactLabel: 'Tiempo de Conciliación Automática',
    techStack: ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS Lambda', 'WebSockets'],
    imageUrl: '/assets/cases/pagoping-saas.jpg',
    isFeatured: true,
    bentoSpan: 'col-span-1 md:col-span-2',
    clientLocation: 'Lima, Perú 🇵🇪',
    duration: '6 semanas',
    testimonial: {
      quote:
        'TunkiTek automatizó lo que antes nos costaba 2 personas a tiempo completo revisando vouchers. La tasa de fraude cayó a cero absoluto.',
      author: 'Rodrigo Alarcón',
      role: 'Head of Product, PagoPing',
    },
  },
  {
    id: 'iluminacion-ecommerce',
    slug: 'sector-iluminacion-catalogo-masivo',
    title: 'Catálogo Masivo B2B/B2C con 5,000+ SKUs de Iluminación',
    client: 'Lumina Tech Perú',
    category: 'E-commerce',
    challenge:
      'Plataforma lenta en WordPress que tardaba más de 7 segundos en cargar, con caídas continuas al sincronizar inventario de más de 5,000 luminarias técnicas y fichas PDF.',
    solution:
      'Reconstrucción total con arquitectura Next.js Headless y motor de búsqueda facetado indexado en memoria, reduciendo el tiempo de carga a 0.65s e integrando pasarelas Niubiz, Yape y cotizador PDF automático.',
    impactMetric: '< 0.7s',
    impactLabel: 'Tiempo de Carga en 4G (Lighthouse 99)',
    techStack: ['Next.js', 'Tailwind CSS', 'Shopify Headless', 'Algolia Search', 'Niubiz', 'Yape QR'],
    imageUrl: '/assets/cases/iluminacion-ecommerce.jpg',
    isFeatured: false,
    bentoSpan: 'col-span-1',
    clientLocation: 'Arequipa, Perú 🇵🇪',
    duration: '5 semanas',
    testimonial: {
      quote:
        'Nuestros clientes corporativos ahora encuentran cualquier luminaria en milisegundos y cotizan proyectos de miles de dólares sin fricción.',
      author: 'Valeria Thorne',
      role: 'Directora Comercial',
    },
  },
  {
    id: 'hsq-consultores-corporativo',
    slug: 'hsq-consultores-seo-leads',
    title: 'Posicionamiento SEO y Captación de Leads B2B Industriales',
    client: 'HSQ Consultores',
    category: 'Corporativo',
    challenge:
      'Falta de visibilidad digital y dependencia exclusiva de referidos para consultorías de seguridad industrial y certificaciones ISO de alto ticket.',
    solution:
      'Diseño web corporativo de alta gama con arquitectura de información semántica, Core Web Vitals perfectos y embudo de conversión integrado con WhatsApp Business API y CRM HubSpot.',
    impactMetric: '+280%',
    impactLabel: 'Incremento en Leads Calificados B2B',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HubSpot API', 'Google Cloud'],
    imageUrl: '/assets/cases/hsq-consultores.jpg',
    isFeatured: false,
    bentoSpan: 'col-span-1',
    clientLocation: 'Lima / Minería Perú 🇵🇪',
    duration: '4 semanas',
    testimonial: {
      quote:
        'Logramos posicionarnos en el top 3 de Google para nuestras palabras clave principales y triplicamos los contactos de empresas mineras.',
      author: 'Ing. Marco Samanez',
      role: 'Socio Director, HSQ',
    },
  },
  {
    id: 'file-security-seguridad',
    slug: 'gestion-segura-file-security-cifrado',
    title: 'Bóveda Documental con Cifrado End-to-End en Frontend',
    client: 'Gestión Segura (File Security)',
    category: 'Seguridad',
    challenge:
      'Riesgo de filtración de contratos confidenciales y estados financieros en tránsito durante auditorías contables y legales corporativas.',
    solution:
      'Arquitectura de encriptación híbrida en el cliente (Web Crypto API + AES-256-GCM) antes de subir a almacenamiento S3 privado, garantizando Zero-Knowledge Architecture.',
    impactMetric: 'Zero-Leak',
    impactLabel: 'Arquitectura Zero-Knowledge Cifrada',
    techStack: ['Web Crypto API', 'React', 'Node.js', 'PostgreSQL', 'AWS S3 Vault', 'Docker'],
    imageUrl: '/assets/cases/file-security.jpg',
    isFeatured: true,
    bentoSpan: 'col-span-1 md:col-span-2',
    clientLocation: 'San Isidro, Lima 🇵🇪',
    duration: '7 semanas',
    testimonial: {
      quote:
        'La solución de TunkiTek pasó sin observaciones la auditoría de ciberseguridad bancaria. Ningún dato viaja sin cifrar.',
      author: 'Dr. Fernando Quiroz',
      role: 'Oficial de Seguridad TI',
    },
  },
  {
    id: 'wedding-invitations-ecommerce',
    slug: 'wedding-invitations-venta-automatizada',
    title: 'E-commerce Interactivo y Generación de Invitaciones Web',
    client: 'Celebration Moments',
    category: 'E-commerce',
    challenge:
      'Proceso manual y artesanal para personalizar y entregar invitaciones interactivas de bodas con RSVP y geolocalización, limitando la capacidad a 10 eventos por mes.',
    solution:
      'Plataforma SaaS + E-commerce automatizada donde las parejas eligen plantilla, configuran música, mapa de Waze/Google Maps, lista de regalos y confirmación por WhatsApp en 5 minutos con pago online.',
    impactMetric: '10x',
    impactLabel: 'Capacidad de Atención sin Personal Extra',
    techStack: ['Next.js', 'Tailwind', 'Stripe', 'Culqi', 'WhatsApp Cloud API', 'PostgreSQL'],
    imageUrl: '/assets/cases/wedding-invitations.jpg',
    isFeatured: false,
    bentoSpan: 'col-span-1',
    clientLocation: 'Lima / Trujillo 🇵🇪',
    duration: '4 semanas',
    testimonial: {
      quote:
        'Pasamos de vender 10 invitaciones al mes a procesar más de 120 eventos automatizados. El flujo de compra es impecable.',
      author: 'Camila & Diego',
      role: 'Fundadores, Celebration Moments',
    },
  },
];
