export interface Plan {
  id: string;
  name: string;
  price: string;
  currency: string;
  period?: string;
  isPopular?: boolean;
  target: 'emprendedores' | 'empresarios';
  description: string;
  features: string[];
  deliveryTime: string;
  highlight?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  technologies: string[];
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  metrics: string;
  description: string;
  image: string;
  tags: string[];
}

export const COMPANY_DATA = {
  name: "TunkiTek",
  legalName: "TunkiTek Agencia de Tecnología e Innovación",
  slogan: "Más que proveedores, somos tu equipo aliado en tecnología e innovación.",
  domain: "tunkitek.lat",
  email: "ventas@tunkitek.lat",
  phone: "928659361",
  formattedPhone: "+51 928 659 361",
  whatsappUrl: "https://wa.me/51928659361?text=Hola%20TunkiTek,%20quisiera%20cotizar%20un%20proyecto",
  location: "Lima, Perú & Remoto Global",
  socials: {
    linkedin: "https://linkedin.com/company/tunkitek",
    github: "https://github.com/tunkitek",
    instagram: "https://instagram.com/tunkitek.lat",
  },
};

export const PLANS_EMPRENDEDORES: Plan[] = [
  {
    id: "start",
    name: "Start",
    price: "3,500",
    currency: "S/",
    target: "emprendedores",
    description: "Ideal para MVP y negocios que buscan validar su producto digital rápidamente.",
    features: [
      "Landing Page interactiva de alta conversión",
      "Diseño UI/UX orgánico responsive",
      "Integración con WhatsApp & Formularios",
      "SEO técnico optimizado",
      "Alojamiento Cloud & SSL incluido",
      "Entrega en 10-14 días hábiles",
    ],
    deliveryTime: "10-14 días",
    highlight: "Para validar tu idea",
  },
  {
    id: "pro",
    name: "Pro",
    price: "4,500",
    currency: "S/",
    isPopular: true,
    target: "emprendedores",
    description: "El paquete predilecto para startups y marcas con tracción comercial.",
    features: [
      "Aplicación Web / Plataforma multipágina",
      "Panel de administración CMS autogestionable",
      "Integración de Pasarela de Pagos (Yape, Plin, Tarjetas)",
      "Animaciones fluidas con Framer Motion",
      "Optimización de velocidad Core Web Vitals (95+)",
      "Soporte prioritario post-lanzamiento (30 días)",
    ],
    deliveryTime: "15-20 días",
    highlight: "Más Popular",
  },
  {
    id: "business",
    name: "Business",
    price: "5,500",
    currency: "S/",
    target: "emprendedores",
    description: "Solución completa para empresas en expansión que requieren automatización.",
    features: [
      "Plataforma Web a medida + API REST",
      "Autenticación de usuarios y roles",
      "Módulo de métricas y analytics en tiempo real",
      "Integración con CRM y WhatsApp API",
      "Seguridad avanzada y backups automáticos",
      "Garantía de rendimiento y 60 días de soporte",
    ],
    deliveryTime: "20-25 días",
    highlight: "Máxima escalabilidad",
  },
];

export const PLANS_EMPRESARIOS: Plan[] = [
  {
    id: "pionero",
    name: "Pionero",
    price: "10,000",
    currency: "S/",
    target: "empresarios",
    description: "Transformación digital y software empresarial con arquitectura cloud nativa.",
    features: [
      "Arquitectura Microservicios / Cloud Next.js",
      "Diseño Design System exclusivo y escalable",
      "Integración ERP / Sistemas legados",
      "Base de datos distribuida de alta disponibilidad",
      "Auditoría de seguridad y OWASP compliance",
      "SLA de soporte empresarial 99.9%",
    ],
    deliveryTime: "30 días",
    highlight: "Modernización de infraestructura",
  },
  {
    id: "conquistador",
    name: "Conquistador",
    price: "15,000",
    currency: "S/",
    isPopular: true,
    target: "empresarios",
    description: "Ecosistema digital completo, web app de alto tráfico y apps móviles nativas.",
    features: [
      "Desarrollo Full-Stack avanzado (Web + Mobile App)",
      "Inteligencia Artificial integrada y automatizaciones",
      "Panel de Business Intelligence y reportería ejecutiva",
      "Pipeline CI/CD automatizado en Google Cloud / AWS",
      "Optimización de costos cloud y escalado elástico",
      "Equipo de ingeniería dedicado durante el sprint",
    ],
    deliveryTime: "45 días",
    highlight: "Elección Corporativa",
  },
  {
    id: "magnate",
    name: "Magnate",
    price: "20,000",
    currency: "S/",
    target: "empresarios",
    description: "Alianza tecnológica integral con squad dedicado de desarrollo continuo.",
    features: [
      "Squad completo de ingeniería (Frontend, Backend, DevOps, QA)",
      "Desarrollo de Software Custom de misión crítica",
      "Modelos de IA propios y análisis predictivo",
      "Auditorías de penetración y ciberseguridad avanzada",
      "Consultoría de CTO Fractional y gobernanza TI",
      "Soporte 24/7 con respuesta garantizada < 15min",
    ],
    deliveryTime: "Continuo / Sprint mensual",
    highlight: "Innovación Total",
  },
];

export const SERVICES: Service[] = [
  {
    id: "desarrollo-web",
    slug: "desarrollo-web-moderno",
    title: "Desarrollo Web & SaaS",
    shortDescription: "Aplicaciones web ultrarrápidas construidas con Next.js, TypeScript y arquitecturas serverless escalables.",
    fullDescription: "Construimos plataformas digitales que cargan en milisegundos, posicionan en los primeros lugares de Google y convierten visitantes en clientes fieles.",
    iconName: "Code2",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    deliverables: ["Código limpio y documentado", "Testing automatizado", "Despliegue CI/CD"],
  },
  {
    id: "software-a-medida",
    slug: "software-a-medida",
    title: "Software & APIs a Medida",
    shortDescription: "Sistemas backend robustos, microservicios e integraciones complejas para optimizar operaciones.",
    fullDescription: "Automatizamos tus procesos manuales con software diseñado exactamente para el flujo de trabajo de tu organización.",
    iconName: "Cpu",
    technologies: ["Python", "FastAPI", "Go", "Docker", "Google Cloud Platform"],
    deliverables: ["APIs documentadas con Swagger", "Arquitectura escalable", "Monitoreo 24/7"],
  },
  {
    id: "inteligencia-artificial",
    slug: "inteligencia-artificial",
    title: "Inteligencia Artificial & Automatización",
    shortDescription: "Agentes inteligentes, procesamiento de lenguaje natural y flujos automatizados de negocio.",
    fullDescription: "Integramos modelos de IA generativa y visión por computadora para dar a tu negocio una ventaja competitiva insuperable.",
    iconName: "Sparkles",
    technologies: ["Gemini 2.5", "LangChain", "Vector DBs", "n8n", "OpenAI"],
    deliverables: ["Agentes conversacionales", "Pipelines de extracción", "Dashboards predictivos"],
  },
  {
    id: "diseno-ui-ux",
    slug: "diseno-ui-ux",
    title: "Diseño UI/UX & Producto Digital",
    shortDescription: "Interfaces orgánicas, accesibles y centradas en la psicología del usuario para maximizar retención.",
    fullDescription: "Creamos experiencias memorables con prototipos interactivos, sistemas de diseño cohesivos y micro-interacciones fluidas.",
    iconName: "Layout",
    technologies: ["Figma", "Design Systems", "Framer Motion", "Design Tokens"],
    deliverables: ["Figma interactivo", "Design System UI Kit", "Guía de estilos"],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fintech-peru",
    title: "Billetera Digital B2B",
    client: "PayFlow Perú",
    category: "Fintech & Pagos",
    metrics: "+340% transacciones procesadas",
    description: "Plataforma de liquidaciones instantáneas con conciliación bancaria automatizada para empresas peruanas.",
    image: "/assets/cases/pagoping-saas.jpg",
    tags: ["Next.js", "Fintech", "Microservicios"],
  },
  {
    id: "logistica-latam",
    title: "Optimizador de Rutas y Flotas",
    client: "AndesLogistics",
    category: "Logística & Supply Chain",
    metrics: "-28% costos de combustible",
    description: "Sistema de despacho inteligente en tiempo real con algoritmos de optimización geoespacial.",
    image: "/assets/cases/hsq-consultores.jpg",
    tags: ["IA", "Maps API", "Real-time"],
  },
  {
    id: "ecommerce-escalable",
    title: "E-Commerce Headless de Alto Tráfico",
    client: "ModaAndina",
    category: "E-Commerce",
    metrics: "0.8s tiempo de carga | 99.99% uptime",
    description: "Tienda online construida con arquitectura headless capaz de soportar picos de Cyber Days peruanos sin caídas.",
    image: "/assets/cases/iluminacion-ecommerce.jpg",
    tags: ["Headless", "Next.js", "Pasarelas"],
  },
];

export const NAV_LINKS = [
  { label: "Servicios", href: "/servicios" },
  { label: "Casos de Éxito", href: "/casos-estudio" },
  { label: "Planes", href: "/#planes" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "FAQ", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
];

export interface ServiceSelectGroup {
  group: string;
  iconName: 'Code2' | 'ShoppingCart' | 'Cpu' | 'Smartphone' | 'Bot' | 'Briefcase';
  options: {
    value: string;
    label: string;
  }[];
}

export const SERVICE_SELECT_OPTIONS: ServiceSelectGroup[] = [
  {
    group: "Desarrollo Web & Landing Pages",
    iconName: "Code2",
    options: [
      { value: "Landing Pages de Ultra Conversión (CRO)", label: "Landing Pages de Ultra Conversión (CRO)" },
      { value: "Desarrollo Web Corporativo de Alto Impacto", label: "Desarrollo Web Corporativo de Alto Impacto" },
      { value: "Sitios Web en WordPress & WooCommerce Pro", label: "Sitios Web en WordPress & WooCommerce Pro" },
      { value: "Rediseño & Migración a Arquitectura Moderna", label: "Rediseño & Migración a Arquitectura Moderna" },
    ],
  },
  {
    group: "Comercio Electrónico & Catálogos",
    iconName: "ShoppingCart",
    options: [
      { value: "E-Commerce B2B para Catálogos Masivos", label: "E-Commerce B2B para Catálogos Masivos" },
      { value: "Catálogos Digitales con Checkout a WhatsApp", label: "Catálogos Digitales con Checkout a WhatsApp" },
      { value: "Tiendas Virtuales Headless de Alta Escala", label: "Tiendas Virtuales Headless de Alta Escala" },
      { value: "E-Commerce para Tiendas Minoristas & Pymes", label: "E-Commerce para Tiendas Minoristas & Pymes" },
    ],
  },
  {
    group: "Plataformas SaaS & Software Cloud",
    iconName: "Cpu",
    options: [
      { value: "Aplicaciones Web & Portales de Clientes (PWA)", label: "Aplicaciones Web & Portales de Clientes (PWA)" },
      { value: "Desarrollo de Plataformas SaaS Multi-Tenant", label: "Desarrollo de Plataformas SaaS Multi-Tenant" },
      { value: "SaaS de Conciliación Bancaria & Validación Yape/Plin", label: "SaaS de Conciliación Bancaria & Validación Yape/Plin" },
      { value: "Bóvedas de Gestión Documental Cifrada", label: "Bóvedas de Gestión Documental Cifrada" },
    ],
  },
  {
    group: "Apps Móviles & Sistemas Integrales",
    iconName: "Smartphone",
    options: [
      { value: "Desarrollo de Aplicaciones Móviles (iOS & Android)", label: "Desarrollo de Aplicaciones Móviles (iOS & Android)" },
      { value: "Sistemas Integrales (Web + Móvil + Desktop)", label: "Sistemas Integrales (Web + Móvil + Desktop)" },
      { value: "Paneles Administrativos ERP & CRM a Medida", label: "Paneles Administrativos ERP & CRM a Medida" },
    ],
  },
  {
    group: "Automatización RPA & WhatsApp con IA",
    iconName: "Bot",
    options: [
      { value: "Agentes de IA en WhatsApp Business API Oficial", label: "Agentes de IA en WhatsApp Business API Oficial" },
      { value: "Automatización de Procesos RPA & Flujos", label: "Automatización de Procesos RPA & Flujos" },
      { value: "Integración de APIs & Pasarelas de Pago", label: "Integración de APIs & Pasarelas de Pago" },
    ],
  },
  {
    group: "Planes de Inversión & Squads",
    iconName: "Briefcase",
    options: [
      { value: "Plan Start (S/ 2,500 - S/ 3,500)", label: "Plan Start - S/ 2,500 - S/ 3,500 (Landing & MVP)" },
      { value: "Plan Pro (S/ 4,500)", label: "Plan Pro - S/ 4,500 (Web App & Pasarelas)" },
      { value: "Plan Business (S/ 5,500)", label: "Plan Business - S/ 5,500 (Completo & CRM)" },
      { value: "Plan Empresarial / Squad Dedicado (Desde S/ 10,000)", label: "Plan Empresarial / Squad Dedicado (Desde S/ 10,000)" },
      { value: "Consultoría Técnica / Proyecto a Medida", label: "Consultoría Técnica / Proyecto a Medida" },
    ],
  },
];

