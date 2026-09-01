export interface TechStackItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'cloud' | 'payment' | 'integration' | 'security' | 'mobile';
  description: string;
  isPopular?: boolean;
}

export interface IntegrationItem {
  name: string;
  tag: string;
  description: string;
  category: 'peru' | 'global' | 'cloud' | 'ai';
  badgeColor?: string;
}

export interface TechnicalCapability {
  id: string;
  iconName: 'Zap' | 'CheckCircle2' | 'ShieldAlert' | 'Cpu' | 'Layers' | 'Bot';
  title: string;
  description: string;
  metric?: {
    value: string;
    label: string;
  };
  details: string[];
}

export interface ServiceDetail {
  slug: string;
  id: string;
  category: 'web' | 'ecommerce' | 'saas' | 'mobile' | 'automation';
  categoryLabel: string;
  badge: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  subServices: string[];
  keyFeatures: string[];
  techStack: TechStackItem[];
  integrations: IntegrationItem[];
  capabilities: TechnicalCapability[];
  processSteps: {
    step: string;
    title: string;
    duration: string;
    description: string;
  }[];
  pricingHint: {
    startingAt: string;
    currency: string;
    planReference: string;
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES_DETAILED_DATA: Record<string, ServiceDetail> = {
  // ================= 1. WEB & LANDING PAGES =================
  'landing-pages-alta-conversion': {
    slug: 'landing-pages-alta-conversion',
    id: 'landing-pages',
    category: 'web',
    categoryLabel: 'Conversión & Campañas Ads',
    badge: 'Arquitectura CRO • Carga < 0.6s • Google Ads Ready',
    title: 'Landing Pages de Ultra Conversión (CRO)',
    shortTitle: 'Landing Pages CRO',
    subtitle: 'Páginas de aterrizaje diseñadas para maximizar el retorno de inversión en Google Ads, Meta Ads y lanzamientos comerciales.',
    heroDescription:
      'Optimizamos cada elemento visual y psicológico para convertir visitas frías en clientes potenciales calificados. Con Next.js 15 y tiempos de carga menores a 0.6 segundos, eliminamos la fuga de tráfico antes de que el usuario vea tu oferta principal.',
    metaTitle: 'Landing Pages de Alta Conversión (CRO) | TunkiTek Perú',
    metaDescription:
      'Landing pages de alto impacto para Google Ads y Meta Ads. Carga < 0.6s, diseño persuasivo A/B testing y checkout directo a WhatsApp en Perú.',
    subServices: [
      'Páginas de Captación de Leads B2B',
      'Páginas de Venta Directa (Direct Response)',
      'Funnels de Lanzamiento de Productos',
      'Optimización de Tasa de Conversión (CRO)',
    ],
    keyFeatures: [
      'Tasa de rebote reducida en más del 45% gracias a carga sub-segundo',
      'Estructura persuasiva basada en la fórmula PAS y gatillos de urgencia',
      'Formularios dinámicos con validación instantánea y conexión a WhatsApp',
      'Píxeles de conversión configurados (Meta CAPI, Google Ads, TikTok Ads)',
      'Pruebas A/B multivariables para escalar el ratio de conversión',
      'Certificado SSL grado A+ y CDN perimetral Cloudflare',
    ],
    techStack: [
      { name: 'Next.js 15', category: 'frontend', description: 'SSR híbrido para renderizado ultrarrápido', isPopular: true },
      { name: 'Tailwind CSS', category: 'frontend', description: 'Diseño modular ligero y adaptativo' },
      { name: 'Framer Motion', category: 'frontend', description: 'Microinteracciones que guían la atención visual' },
      { name: 'Meta Pixel & CAPI', category: 'integration', description: 'Trazabilidad de conversiones por servidor' },
      { name: 'Cloudflare Edge', category: 'cloud', description: 'Distribución global y protección anti-DDoS' },
    ],
    integrations: [
      { name: 'WhatsApp Business API', tag: 'Captación', description: 'Disparadores directos de chat con mensaje prellenado', category: 'global', badgeColor: '#25D366' },
      { name: 'HubSpot / ActiveCampaign', tag: 'CRM', description: 'Sincronización instantánea de nuevos prospectos', category: 'global' },
      { name: 'Google Ads & Tag Manager', tag: 'Analytics', description: 'Seguimiento milimétrico del costo por adquisición (CPA)', category: 'global' },
    ],
    capabilities: [
      {
        id: 'cap-speed-cro',
        iconName: 'Zap',
        title: 'Velocidad que Multiplica tu Inversión en Ads',
        description: 'Cada 100ms de retraso reduce conversiones un 7%. Nuestras landings cargan al instante en redes 4G peruanas.',
        metric: { value: '< 0.6s', label: 'First Contentful Paint' },
        details: ['Optimización de imágenes WebP/AVIF', 'CSS crítico incrustado', 'Cero dependencias bloqueantes'],
      },
      {
        id: 'cap-ab-testing',
        iconName: 'Cpu',
        title: 'Arquitectura Preparada para A/B Testing',
        description: 'Prueba múltiples titulares, ofertas y botones de llamada a la acción sin afectar el SEO ni la velocidad.',
        metric: { value: '+35%', label: 'Aumento en ratio de conversión' },
        details: ['Variantes dinámicas en el Edge', 'Métricas de mapa de calor', 'Trazabilidad por fuente de tráfico'],
      },
      {
        id: 'cap-lead-capture',
        iconName: 'CheckCircle2',
        title: 'Formularios Inteligentes Anti-Fricción',
        description: 'Captura el número de teléfono con código de país automático y valida correos corporativos en tiempo real.',
        metric: { value: '99.4%', label: 'Leads válidos entregados' },
        details: ['Validación en tiempo real', 'Envío instantáneo a CRM y correo', 'Redirección a WhatsApp'],
      },
      {
        id: 'cap-capi-meta',
        iconName: 'ShieldAlert',
        title: 'Tracking Avanzado con Conversions API',
        description: 'Supera el bloqueo de cookies de iOS enviando los eventos de compra y lead directamente desde el servidor.',
        metric: { value: '100%', label: 'Precisión de atribución de pauta' },
        details: ['Meta Conversions API (CAPI)', 'Google Enhanced Conversions', 'Eventos personalizados de scroll'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Análisis de Oferta & Copywriting Persuasivo', duration: 'Semana 1', description: 'Estructuración del mensaje de venta, ganchos de atención y llamado a la acción.' },
      { step: '02', title: 'Diseño UX/UI & Prototipado de Alta Fidelidad', duration: 'Semana 1-2', description: 'Creación de la interfaz visual con identidad de marca y microinteracciones.' },
      { step: '03', title: 'Programación en Next.js & Conexión de Píxeles', duration: 'Semana 2', description: 'Desarrollo en código limpio, configuración de analítica y pruebas de estrés.' },
      { step: '04', title: 'Lanzamiento en Producción & Pruebas A/B', duration: 'Semana 2-3', description: 'Publicación en dominio propio y verificación de eventos con campañas activas.' },
    ],
    pricingHint: {
      startingAt: 'S/ 1,800',
      currency: 'S/',
      planReference: 'Plan Start Landing',
    },
    faq: [
      {
        question: '¿Por qué una landing en Next.js convierte más que una en WordPress o Elementor?',
        answer: 'Elementor genera decenas de archivos CSS/JS lentos que tardan más de 3.5 segundos en cargar, haciendo que la mitad de los usuarios de tus anuncios abandonen la página. Next.js carga en menos de 0.6 segundos, multiplicando la retención y bajando tu costo por lead.',
      },
      {
        question: '¿Incluye la integración con mi cuenta publicitaria de Facebook y Google Ads?',
        answer: 'Sí. Configuramos Google Tag Manager, Google Analytics 4, Meta Pixel con API de Conversiones (CAPI) y seguimiento de clics a WhatsApp para medir el retorno exacto de tu inversión.',
      },
    ],
  },

  'desarrollo-web-corporativo': {
    slug: 'desarrollo-web-corporativo',
    id: 'web-corporativo',
    category: 'web',
    categoryLabel: 'Presencia & Autoridad Web',
    badge: 'Arquitectura Web de Élite • Carga Sub-Segundo',
    title: 'Desarrollo Web Corporativo de Alto Impacto',
    shortTitle: 'Web Corporativa',
    subtitle: 'Portales institucionales ultra veloces que proyectan solidez corporativa y convierten tráfico calificado en contratos.',
    heroDescription:
      'Diseñamos y programamos sitios web institucionales de alta gama con Next.js 15, optimizados para superar el 98% en Google Lighthouse y estructurados para cerrar reuniones B2B desde el primer clic. Cero plantillas genéricas: arquitectura a medida con micro-animaciones fluidas y SEO técnico.',
    metaTitle: 'Desarrollo Web Corporativo de Alto Impacto | TunkiTek Perú',
    metaDescription:
      'Portales institucionales de alto rendimiento y diseño a medida en Next.js. Carga < 0.8s, SEO estructurado y persuasión B2B para líderes del mercado.',
    subServices: [
      'Portales Institucionales B2B & B2C',
      'Sitios Web Multi-Idioma para Exportación',
      'Optimización Extrema de Velocidad (WPO < 0.8s)',
      'SEO Técnico & Schema Structured Data',
    ],
    keyFeatures: [
      'Puntaje de velocidad Google Core Web Vitals 98+ garantizado',
      'Diseño exclusivo adaptativo con micro-interacciones suaves en Framer Motion',
      'Integración con WhatsApp Business, Hubspot, Zoho CRM y Google Analytics 4',
      'Arquitectura Serverless autogestionable con CMS Headless intuitivo',
      'Seguridad perimetral Cloudflare con certificado SSL grado A+',
      'Optimización semántica para posicionar en los primeros puestos de Google',
    ],
    techStack: [
      { name: 'Next.js 15', category: 'frontend', description: 'Server Components y renderizado híbrido ultraveloz', isPopular: true },
      { name: 'TypeScript', category: 'frontend', description: 'Código tipado estricto libre de fallos en ejecución' },
      { name: 'Tailwind CSS', category: 'frontend', description: 'Estilización modular liviana sin sobrecarga de CSS' },
      { name: 'Framer Motion', category: 'frontend', description: 'Animaciones vectoriales orgánicas y transiciones fluidas' },
      { name: 'Cloudflare Edge', category: 'cloud', description: 'Distribución global con CDN y protección DDoS' },
      { name: 'Sanity / Strapi', category: 'backend', description: 'CMS Headless para gestión autónoma de contenido' },
    ],
    integrations: [
      { name: 'WhatsApp Business API', tag: 'Captación', description: 'Botones y disparadores inteligentes de chat con mensajes prellenados', category: 'global', badgeColor: '#25D366' },
      { name: 'HubSpot / Zoho CRM', tag: 'Leads', description: 'Envío directo de contactos calificados a tu equipo comercial', category: 'global' },
      { name: 'Google Workspace', tag: 'Productividad', description: 'Enrutamiento de correos corporativos y agendamiento de citas', category: 'global' },
    ],
    capabilities: [
      {
        id: 'cap-wpo-elite',
        iconName: 'Zap',
        title: 'Puntuación 99+ en Google PageSpeed',
        description: 'Eliminamos la fricción técnica. Tu web corporativa responde de forma instantánea en cualquier smartphone.',
        metric: { value: '< 0.8s', label: 'Tiempo de carga total' },
        details: ['Optimización de renderizado en el servidor', 'Precarga de rutas y assets críticos', 'Cero código basura'],
      },
      {
        id: 'cap-b2b-authority',
        iconName: 'CheckCircle2',
        title: 'Diseño Diseñado para Proyectar Solidez B2B',
        description: 'La primera impresión define si ganas una licitación o contrato. Creamos interfaces sobrias, modernas y persuasivas.',
        metric: { value: '3.8x', label: 'Más credibilidad percibida' },
        details: ['Tipografía editorial de alta jerarquía', 'Micro-animaciones no invasivas', 'Casos de estudio interactivos'],
      },
      {
        id: 'cap-seo-schema',
        iconName: 'Layers',
        title: 'SEO Técnico & Marcado Semántico Schema',
        description: 'Estructuramos tu contenido con metadatos JSON-LD para destacar con fragmentos enriquecidos en Google.',
        metric: { value: 'Top 3', label: 'Objetivo de visibilidad orgánica' },
        details: ['Organización Organization/LocalBusiness', 'Arquitectura Hub and Spoke', 'Sitemap dinámico y robots.txt'],
      },
      {
        id: 'cap-cloudflare-defense',
        iconName: 'ShieldAlert',
        title: 'Blindaje Cloudflare contra Ataques y Caídas',
        description: 'Protección perimetral WAF de nivel bancario contra inyecciones SQL, bots maliciosos y ataques DDoS.',
        metric: { value: '99.99%', label: 'Uptime garantizado por SLA' },
        details: ['Certificados SSL de 256 bits', 'Bloqueo de raspadores maliciosos', 'Caché perimetral en 300+ ciudades'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Inmersión Estratégica & Arquitectura de Información', duration: 'Semana 1', description: 'Definición de buyer personas, árbol de navegación y estructura SEO de contenidos.' },
      { step: '02', title: 'Diseño UI/UX en Figma con Tu Aprobación', duration: 'Semana 2', description: 'Creación de prototipos interactivos navegables para escritorio y móviles.' },
      { step: '03', title: 'Programación Full-Stack en Next.js & CMS', duration: 'Semana 3', description: 'Desarrollo en código limpio, componentes interactivos y panel de administración.' },
      { step: '04', title: 'Auditoría WPO, SEO Técnico & Lanzamiento', duration: 'Semana 4', description: 'Pruebas de velocidad, configuración de dominio, correos y entrega de accesos.' },
    ],
    pricingHint: {
      startingAt: 'S/ 3,500',
      currency: 'S/',
      planReference: 'Plan Start / Pro',
    },
    faq: [
      {
        question: '¿Podré editar los textos y fotos de mi web sin saber programar?',
        answer: 'Sí. Integramos un panel de administración CMS visual (Sanity o Strapi) donde podrás actualizar textos, imágenes, noticias y servicios de manera intuitiva desde tu celular o computadora.',
      },
      {
        question: '¿El sitio web incluye correos corporativos y dominio?',
        answer: 'Te asesoramos y dejamos configurado tu dominio (.pe o .com) con correos corporativos profesionales en Google Workspace o Microsoft 365 con firmas digitales uniformes.',
      },
    ],
  },

  'sitios-web-wordpress-profesional': {
    slug: 'sitios-web-wordpress-profesional',
    id: 'wordpress-profesional',
    category: 'web',
    categoryLabel: 'Gestión Ágil & Blogs',
    badge: 'WordPress Optimizado • Cero Plugins Basura • Máxima Seguridad',
    title: 'Sitios Web en WordPress & WooCommerce Pro',
    shortTitle: 'WordPress & WooCommerce Pro',
    subtitle: 'Desarrollos en WordPress con plantillas a medida, optimización de velocidad y seguridad blindada para autogestión total.',
    heroDescription:
      'Eliminamos la mala fama de WordPress. Creamos temas personalizados en PHP moderno y bloques Gutenberg nativos, sin builders lentos que ralenticen tu negocio. Perfecto para empresas que requieren un blog dinámico o catálogo administrable con total autonomía.',
    metaTitle: 'Desarrollo Web en WordPress & WooCommerce Profesional | TunkiTek',
    metaDescription:
      'Sitios web en WordPress profesionales sin lentitud ni plugins inseguros. Temas a medida, velocidad optimizada y soporte técnico en Lima, Perú.',
    subServices: [
      'Temas Personalizados a Medida (Sin Elementor)',
      'Tiendas WooCommerce Optimizadas',
      'Portales de Noticias y Blogs Corporativos',
      'Mantenimiento y Blindaje de Seguridad WordPress',
    ],
    keyFeatures: [
      'Desarrollo con bloques nativos Gutenberg de carga rápida',
      'Optimización de base de datos MySQL y caché de objetos Redis',
      'Eliminación de plugins innecesarios para evitar vulnerabilidades',
      'Integración con pasarelas de pago peruanas en WooCommerce',
      'Capacitación personalizada en video para administración del sitio',
      'Copias de seguridad diarias automáticas en la nube',
    ],
    techStack: [
      { name: 'WordPress 6.7+', category: 'backend', description: 'CMS más utilizado del mundo con seguridad reforzada', isPopular: true },
      { name: 'WooCommerce', category: 'backend', description: 'Motor de e-commerce flexible y escalable' },
      { name: 'PHP 8.3', category: 'backend', description: 'Ejecución rápida con soporte JIT y OPcache' },
      { name: 'Redis Cache', category: 'database', description: 'Aceleración de consultas a la base de datos' },
      { name: 'Tailwind CSS', category: 'frontend', description: 'Estilos limpios sin sobrecarga de código' },
    ],
    integrations: [
      { name: 'Niubiz / Culqi / Mercado Pago', tag: 'Pagos', description: 'Cobros con tarjetas de crédito y débito peruanas', category: 'peru', badgeColor: '#0052FF' },
      { name: 'Yoast / RankMath SEO', tag: 'SEO', description: 'Gestión sencilla de títulos y metadescripciones', category: 'global' },
      { name: 'Cloudflare SSL & WAF', tag: 'Seguridad', description: 'Bloqueo de ataques de fuerza bruta al wp-admin', category: 'cloud' },
    ],
    capabilities: [
      {
        id: 'cap-clean-wp',
        iconName: 'Zap',
        title: 'WordPress Sin la Lentitud Tradicional',
        description: 'Optimizamos la carga a menos de 1.2 segundos eliminando builders pesados y optimizando assets.',
        metric: { value: '< 1.2s', label: 'Tiempo de carga optimizado' },
        details: ['Temas desarrollados en código limpio', 'Caché avanzada Redis y NGINX', 'Imágenes optimizadas en WebP'],
      },
      {
        id: 'cap-wp-security',
        iconName: 'ShieldAlert',
        title: 'Blindaje Anti-Hackeo y Fuerza Bruta',
        description: 'Protegemos el panel de administración con autenticación de dos factores (2FA), firewall y bloqueo de IPs maliciosas.',
        metric: { value: '0 Brechas', label: 'Garantía de protección' },
        details: ['Ocultación de rutas sensibles', 'Escaneo automático de malware', 'Copias de seguridad diarias off-site'],
      },
      {
        id: 'cap-gutenberg-blocks',
        iconName: 'Layers',
        title: 'Bloques Gutenberg Modulares a Medida',
        description: 'Construye páginas nuevas arrastrando componentes con los colores, tipografías y botones exactos de tu marca.',
        metric: { value: '100%', label: 'Autogestionable por tu equipo' },
        details: ['Sin pagar licencias de Elementor Pro', 'Edición visual intuitiva', 'Estructura responsive garantizada'],
      },
      {
        id: 'cap-woo-checkout',
        iconName: 'CheckCircle2',
        title: 'Checkout WooCommerce en 1 Sola Página',
        description: 'Reducimos los pasos de compra para evitar que los clientes abandonen el carrito antes de pagar.',
        metric: { value: '+28%', label: 'Incremento en checkout completado' },
        details: ['Campos adaptados al mercado peruano (DNI/RUC)', 'Cálculo de envíos por distritos de Lima', 'Pasarelas integradas'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Estructura & Arquitectura de Contenidos', duration: 'Semana 1', description: 'Organización de categorías, páginas clave y definición del diseño a medida.' },
      { step: '02', title: 'Desarrollo del Tema Personalizado', duration: 'Semana 2', description: 'Maquetación de plantillas y bloques visuales sin plugins de constructores.' },
      { step: '03', title: 'Carga de Contenido, Pasarelas & Optimización', duration: 'Semana 3', description: 'Configuración de métodos de pago, formularios y auditoría de velocidad.' },
      { step: '04', title: 'Capacitación & Puesta en Marcha', duration: 'Semana 4', description: 'Entrega de videos explicativos para administración y migración a hosting optimizado.' },
    ],
    pricingHint: {
      startingAt: 'S/ 2,800',
      currency: 'S/',
      planReference: 'Plan Start WordPress',
    },
    faq: [
      {
        question: '¿Qué incluye el mantenimiento y actualización de WordPress?',
        answer: 'Ofrecemos planes mensuales que cubren la actualización segura del núcleo de WordPress, plugins, escaneos de seguridad, respaldos automáticos y soporte para cambios de contenido.',
      },
      {
        question: '¿Puedo migrar mi sitio WordPress actual con ustedes para que sea más rápido?',
        answer: 'Sí. Realizamos auditorías y limpiezas de sitios WordPress existentes, optimizando la base de datos y migrándolos a servidores de alta velocidad.',
      },
    ],
  },

  'rediseno-migracion-web-moderna': {
    slug: 'rediseno-migracion-web-moderna',
    id: 'rediseno-migracion',
    category: 'web',
    categoryLabel: 'Modernización & Refactorización',
    badge: 'Migración a Next.js • Respeto de URLs SEO • Cero Caídas',
    title: 'Rediseño & Migración Web a Arquitectura Moderna',
    shortTitle: 'Rediseño & Migración Web',
    subtitle: 'Transforma tu sitio web obsoleto en una plataforma moderna, rápida y segura sin perder tu posicionamiento en Google.',
    heroDescription:
      '¿Tu sitio web actual tiene más de 3 años, es lento o se ve antiguo en celulares? Rediseñamos tu plataforma completa y migramos tu arquitectura a Next.js 15, conservando tus URLs posicionadas, mejorando la experiencia de usuario y multiplicando tus ventas.',
    metaTitle: 'Rediseño Web & Migración a Next.js | TunkiTek Perú',
    metaDescription:
      'Moderniza tu página web antigua. Rediseño UI/UX de alta conversión, migración a Next.js y conservación total del SEO en Perú.',
    subServices: [
      'Auditoría UI/UX y Diagnóstico de Conversión',
      'Migración de WordPress/Joomla/Wix a Next.js',
      'Mapeo de Redirecciones 301 para Proteger el SEO',
      'Optimización de Tiempos de Carga y Accesibilidad',
    ],
    keyFeatures: [
      'Diagnóstico exhaustivo de fugas de tráfico y cuellos de botella del sitio actual',
      'Nuevo diseño UI/UX premium alineado a los estándares de las mejores marcas globales',
      'Mapeo exhaustivo de URLs para mantener el tráfico orgánico posicionado en Google',
      'Aceleración de velocidad: de 4-6 segundos a menos de 0.8 segundos de carga',
      'Compatibilidad móvil perfecta con enfoque Mobile-First',
      'Arquitectura desacoplada libre de virus o fallas de seguridad del sistema antiguo',
    ],
    techStack: [
      { name: 'Next.js 15', category: 'frontend', description: 'Framework líder para modernización web', isPopular: true },
      { name: 'Tailwind CSS', category: 'frontend', description: 'Diseño orgánico moderno y ultra ligero' },
      { name: 'TypeScript', category: 'frontend', description: 'Código robusto y mantenible' },
      { name: 'Screaming Frog SEO', category: 'integration', description: 'Rastreo profundo de URLs para mapeo de redirecciones' },
      { name: 'Lighthouse CI', category: 'cloud', description: 'Validación automatizada de rendimiento y SEO' },
    ],
    integrations: [
      { name: 'Google Search Console', tag: 'SEO', description: 'Monitoreo de indexación y salud de URLs migradas', category: 'global' },
      { name: 'Google Analytics 4', tag: 'Métricas', description: 'Comparativa de métricas antes vs después de la migración', category: 'global' },
      { name: 'Cloudflare', tag: 'Edge', description: 'Reglas de redirección instantáneas a nivel CDN', category: 'cloud' },
    ],
    capabilities: [
      {
        id: 'cap-seo-protection',
        iconName: 'CheckCircle2',
        title: 'Protección Total de tu Tráfico Orgánico',
        description: 'Mapeamos cada URL existente y configuramos redirecciones 301 automáticas para no perder ni una sola visita de Google.',
        metric: { value: '0 Tráfico', label: 'Pérdida de visitas orgánicas' },
        details: ['Auditoría previa de enlaces indexados', 'Redirecciones 301 server-side', 'Reenvío de sitemap a Google'],
      },
      {
        id: 'cap-ui-revamp',
        iconName: 'Layers',
        title: 'Salto Cuántico en Imagen Corporativa',
        description: 'Pasarás de una web que luce desactualizada a una plataforma de vanguardia tecnológica que inspira confianza instantánea.',
        metric: { value: '100%', label: 'Diseño nuevo y a medida' },
        details: ['Diseño contemporáneo con estética orgánica', 'Micro-animaciones suaves', 'Tipografía y paleta moderna'],
      },
      {
        id: 'cap-speed-jump',
        iconName: 'Zap',
        title: 'De 5 Segundos a Carga Sub-Segundo',
        description: 'Sustituimos el código pesado del sitio anterior por una arquitectura moderna que vuela en cualquier dispositivo.',
        metric: { value: '4x Más', label: 'Velocidad de respuesta comprobada' },
        details: ['Eliminación de plugins lentos', 'Renderizado híbrido en servidor', 'Optimización de base de datos'],
      },
      {
        id: 'cap-mobile-cro',
        iconName: 'Bot',
        title: 'Experiencia Mobile-First de Alta Conversión',
        description: 'El 80% de tus clientes navega desde el celular. Diseñamos menús accesibles, botones flotantes y checkout ágil.',
        metric: { value: '+40%', label: 'Mayor interacción en móviles' },
        details: ['Navegación con pulgar ergonómica', 'Botones de WhatsApp estratégicos', 'Formularios simplificados'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Auditoría del Sitio Actual & Extracción SEO', duration: 'Semana 1', description: 'Inventario de contenidos, análisis de palabras clave posicionadas y mapa de URLs.' },
      { step: '02', title: 'Propuesta de Nuevo Diseño UI/UX', duration: 'Semana 2', description: 'Presentación del nuevo look & feel interactivo para validación del cliente.' },
      { step: '03', title: 'Desarrollo en Next.js & Migración de Datos', duration: 'Semana 3', description: 'Programación de la nueva web, migración de artículos y configuración de redirecciones.' },
      { step: '04', title: 'Switch de Dominio & Monitoreo en Search Console', duration: 'Semana 4', description: 'Cambio de DNS en minutos sin tiempo de inactividad y verificación de rastreo.' },
    ],
    pricingHint: {
      startingAt: 'S/ 3,800',
      currency: 'S/',
      planReference: 'Plan Pro Migración',
    },
    faq: [
      {
        question: '¿Mi web dejará de funcionar durante los días de la migración?',
        answer: 'No. Desarrollamos la nueva plataforma en un servidor de pruebas privado. Tu sitio web actual seguirá operando con normalidad hasta el día del switch de DNS, el cual se realiza en minutos sin caídas.',
      },
      {
        question: '¿Qué pasa con los artículos del blog y las páginas ya creadas?',
        answer: 'Migramos todos tus artículos, imágenes y contenidos al nuevo sistema, asegurando que las URLs conserven su estructura para no afectar tus enlaces compartidos ni el SEO.',
      },
    ],
  },

  // ================= 2. E-COMMERCE & COMERCIO DIGITAL =================
  'ecommerce-b2b-catalogos-masivos': {
    slug: 'ecommerce-b2b-catalogos-masivos',
    id: 'ecommerce-b2b',
    category: 'ecommerce',
    categoryLabel: 'Comercio B2B & Escala',
    badge: 'Arquitectura B2B • 50,000+ SKUs • Búsqueda < 50ms',
    title: 'E-Commerce B2B para Catálogos Masivos',
    shortTitle: 'E-Commerce B2B',
    subtitle: 'Plataformas mayoristas ultra veloces capaces de gestionar decenas de miles de productos, precios por volumen y crédito comercial.',
    heroDescription:
      'Solución enterprise para importadoras, distribuidoras y fabricantes. Desarrollamos motores de comercio electrónico B2B con búsqueda facetada instantánea en memoria, listas de precios diferenciadas por cliente, cotizaciones en PDF en 1 clic e integración con ERPs contables peruanos.',
    metaTitle: 'E-Commerce B2B y Catálogos Masivos | TunkiTek Perú',
    metaDescription:
      'Tiendas B2B de alto volumen. Soporte para más de 50,000 SKUs, precios mayoristas personalizados, cotizaciones automáticas y sincronización ERP.',
    subServices: [
      'Portales de Pedidos Mayoristas para Distribuidores',
      'Catálogos Masivos de +50,000 Productos con Búsqueda Instantánea',
      'Listas de Precios Segmentadas por Tipo de Cliente',
      'Generador Automático de Proformas y Cotizaciones PDF',
    ],
    keyFeatures: [
      'Búsqueda en memoria con Meilisearch / Typesense en menos de 50 milisegundos',
      'Módulo de crédito comercial con validación de línea aprobada y plazos de pago',
      'Importación y exportación masiva de inventario mediante Excel y conexión API con ERP',
      'Generación automática de facturas electrónicas con detracción y retención SUNAT',
      'Panel de autogestión para distribuidores con historial de compras y reorden en 1 clic',
      'Infraestructura serverless con balanceo de carga automático para Cyber Days',
    ],
    techStack: [
      { name: 'Next.js 15', category: 'frontend', description: 'Frontend de comercio desacoplado de máxima velocidad', isPopular: true },
      { name: 'PostgreSQL', category: 'database', description: 'Base de datos relacional para estructuras complejas de SKUs' },
      { name: 'Meilisearch', category: 'backend', description: 'Motor de búsqueda ultrarrápido con tolerancia a errores de tipeo' },
      { name: 'Redis Cache', category: 'database', description: 'Caché de consultas complejas de precios y stock' },
      { name: 'Node.js / NestJS', category: 'backend', description: 'Microservicios de alta concurrencia' },
      { name: 'Docker & AWS ECS', category: 'cloud', description: 'Contenedores autodesplegables de alta disponibilidad' },
    ],
    integrations: [
      { name: 'SUNAT Facturación API', tag: 'Legal', description: 'Emisión automática de Facturas y Guías de Remisión', category: 'peru', badgeColor: '#003399' },
      { name: 'Izipay / Niubiz / BCP', tag: 'Bancario', description: 'Pasarelas B2B y transferencias directas con validación', category: 'peru' },
      { name: 'SAP / StarSoft / Siscont', tag: 'ERP', description: 'Sincronización bidireccional de inventario y pedidos', category: 'global' },
    ],
    capabilities: [
      {
        id: 'cap-b2b-search',
        iconName: 'Zap',
        title: 'Búsqueda Instantánea en Catálogos Gigantes',
        description: 'Tus clientes encuentran productos por código OEM, nombre técnico o medida en menos de 50ms sin recargar la página.',
        metric: { value: '< 50ms', label: 'Tiempo de respuesta de búsqueda' },
        details: ['Filtros dinámicos por marca, voltaje o dimensión', 'Tolerancia a faltas ortográficas', 'Indexación en tiempo real'],
      },
      {
        id: 'cap-b2b-pricing',
        iconName: 'Cpu',
        title: 'Listas de Precios y Descuentos por Escala',
        description: 'Configura precios especiales para distribuidores Platino, Oro o Minoristas con visualización privada tras iniciar sesión.',
        metric: { value: 'Multi-Tarifa', label: 'Precios dinámicos por cliente' },
        details: ['Precios por volumen y millar', 'Límites mínimos de compra', 'Ocultación de precios a visitantes no registrados'],
      },
      {
        id: 'cap-b2b-quote',
        iconName: 'Layers',
        title: 'Cotizador B2B & Proformas Formales PDF',
        description: 'Tus clientes arman pedidos y descargan proformas formales con membrete, IGV y validez de 15 días en un clic.',
        metric: { value: '1 Clic', label: 'Descarga de cotización PDF' },
        details: ['Envío automático por correo', 'Conversión directa de proforma a pedido', 'Asignación a ejecutivo de cuenta'],
      },
      {
        id: 'cap-b2b-bulk-import',
        iconName: 'ShieldAlert',
        title: 'Carga Masiva de Stock y Actualización Rápida',
        description: 'Sube 10,000 cambios de precio o stock en 5 segundos con archivos Excel validados antes de procesar.',
        metric: { value: '10k SKUs', label: 'Actualizados en segundos' },
        details: ['Validador previo de errores en Excel', 'Rollback automático ante inconsistencias', 'Historial de modificaciones de precio'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Modelado de Datos & Estructura de Catálogo', duration: 'Semana 1-2', description: 'Definición de atributos técnicos, relaciones entre SKUs y reglas de precios mayoristas.' },
      { step: '02', title: 'Desarrollo de Arquitectura Headless & Búsqueda', duration: 'Semana 3-4', description: 'Programación del motor de búsqueda en memoria, interfaz y portal de distribuidores.' },
      { step: '03', title: 'Integración con ERP / Facturación SUNAT', duration: 'Semana 5', description: 'Conexión de APIs de inventario, pasarelas de pago y emisión de comprobantes.' },
      { step: '04', title: 'Pruebas de Carga & Despliegue en AWS', duration: 'Semana 6', description: 'Simulación de 50,000 consultas simultáneas y capacitación al equipo de almacén y ventas.' },
    ],
    pricingHint: {
      startingAt: 'S/ 6,500',
      currency: 'S/',
      planReference: 'Plan Conquistador B2B',
    },
    faq: [
      {
        question: '¿La tienda se puede sincronizar con nuestro sistema de inventario actual?',
        answer: 'Sí. Diseñamos conectores API para enlazar la tienda con tu ERP (StarSoft, SAP Business One, Siscont, Defontana o bases de datos SQL propias) para mantener stock y precios sincronizados.',
      },
      {
        question: '¿Los clientes mayoristas pueden pagar con crédito a 30 o 60 días?',
        answer: 'Sí. El sistema permite asignar líneas de crédito aprobadas por cliente, bloqueando pedidos automáticamente si superan su cupo o tienen facturas vencidas.',
      },
    ],
  },

  'ecommerce-pedidos-whatsapp': {
    slug: 'ecommerce-pedidos-whatsapp',
    id: 'ecommerce-whatsapp',
    category: 'ecommerce',
    categoryLabel: 'Conversión Ágil & WhatsApp',
    badge: 'Checkout 1-Clic • QR Yape/Plin • Cero Fricción',
    title: 'Catálogos Digitales con Checkout a WhatsApp',
    shortTitle: 'Catálogo WhatsApp',
    subtitle: 'Catálogos interactivos mobile-first donde tus clientes arman su pedido y finalizan la compra directamente en WhatsApp.',
    heroDescription:
      'El 85% de las compras en Perú se coordinan por WhatsApp. Creamos catálogos interactivos ultra rápidos donde el comprador navega fotos, variantes y stock, agrega productos al carrito y genera un mensaje estructurado con el resumen del pedido y QR de pago listo para enviar al asesor comercial.',
    metaTitle: 'Catálogos con Pedidos Directos a WhatsApp | TunkiTek Perú',
    metaDescription:
      'Catálogo online mobile-first con carrito de compras y cierre directo en WhatsApp. Integración con Yape, Plin y envíos rápidos en Perú.',
    subServices: [
      'Catálogos Mobile-First para Moda, Alimentos y Ferretería',
      'Generador de Carrito y Mensaje Estructurado para WhatsApp',
      'Integración con Códigos QR Dinámicos Yape y Plin',
      'Panel de Gestión de Productos y Stock en Tiempo Real',
    ],
    keyFeatures: [
      'Navegación táctil fluida optimizada para compradores en smartphones',
      'Cero registro obligatorio: el cliente compra en menos de 45 segundos',
      'Mensaje de WhatsApp automático con desglose exacto, dirección y monto total',
      'Módulo de cálculo de delivery según distrito o provincia de destino',
      'Panel administrativo simple para cambiar precios y fotos desde el celular',
      'Carga instantánea (< 0.5s) que no consume los datos móviles del usuario',
    ],
    techStack: [
      { name: 'Next.js 15 PWA', category: 'frontend', description: 'Aplicación web progresiva instalable en el celular', isPopular: true },
      { name: 'Tailwind CSS', category: 'frontend', description: 'Interfaz táctil de alta respuesta' },
      { name: 'Supabase / Firebase', category: 'database', description: 'Base de datos en tiempo real para control de stock' },
      { name: 'WhatsApp API Link Builder', category: 'integration', description: 'Generador de mensajes codificados con formato limpio' },
    ],
    integrations: [
      { name: 'Yape & Plin QR', tag: 'Billeteras', description: 'Generación de QR y números de abono directo', category: 'peru', badgeColor: '#6B117B' },
      { name: 'WhatsApp Multi-Agente', tag: 'Ventas', description: 'Enrutamiento de chats a diferentes vendedores según turno', category: 'peru' },
      { name: 'Google Sheets / Notion', tag: 'Inventario', description: 'Gestión de productos sincronizada con hojas de cálculo', category: 'global' },
    ],
    capabilities: [
      {
        id: 'cap-wa-checkout',
        iconName: 'Zap',
        title: 'Cierre de Venta en Menos de 45 Segundos',
        description: 'Tus clientes seleccionan talla, color o modelo y dan clic en "Pedir por WhatsApp". El pedido llega formateado y listo para cobrar.',
        metric: { value: '< 45s', label: 'Tiempo promedio de compra' },
        details: ['Resumen claro con precios e IGV', 'Dirección de entrega pre-llenada', 'Botón de pago directo'],
      },
      {
        id: 'cap-wa-anti-confusion',
        iconName: 'CheckCircle2',
        title: 'Cero Errores en la Toma de Pedidos',
        description: 'Tus vendedores no pierden tiempo preguntando "¿cuál producto era?" ni enviando fotos sueltas por chat.',
        metric: { value: '-80%', label: 'Tiempo de atención por cliente' },
        details: ['Foto del producto incrustada en el resumen', 'Código SKU único por variante', 'Cálculo exacto del total'],
      },
      {
        id: 'cap-yape-qr',
        iconName: 'Layers',
        title: 'QR de Yape y Plin en Pantalla de Cierre',
        description: 'Muestra tu código QR de Yape/Plin antes de enviar el WhatsApp para que el cliente adjunte la captura de pago de inmediato.',
        metric: { value: '+65%', label: 'Ventas pagadas al instante' },
        details: ['Soporte para múltiples cuentas', 'Datos bancarios claros BCP/BBVA', 'Instrucciones paso a paso'],
      },
      {
        id: 'cap-mobile-catalog',
        iconName: 'Bot',
        title: 'Panel Móvil para Cambiar Precios en 10s',
        description: 'Actualiza precios, activa promociones relámpago o marca productos como "Agotado" directamente desde tu celular.',
        metric: { value: 'En Vivo', label: 'Actualización instantánea' },
        details: ['Subida de fotos desde la cámara', 'Control de stock por variantes', 'Categorías y destacados'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Estructuración de Catálogo & Categorías', duration: 'Semana 1', description: 'Organización de fotos, variantes (tallas/colores) y datos de contacto de vendedores.' },
      { step: '02', title: 'Diseño UX Mobile-First & Carrito WhatsApp', duration: 'Semana 1-2', description: 'Desarrollo de la interfaz de navegación rápida y generador de mensajes.' },
      { step: '03', title: 'Configuración de Métodos de Pago & Envíos', duration: 'Semana 2', description: 'Integración de QR Yape/Plin, cuentas bancarias y tarifas de despacho por zona.' },
      { step: '04', title: 'Lanzamiento & Capacitación de Vendedores', duration: 'Semana 2-3', description: 'Puesta en marcha con dominio propio y capacitación para gestión de stock.' },
    ],
    pricingHint: {
      startingAt: 'S/ 2,200',
      currency: 'S/',
      planReference: 'Plan Start WhatsApp',
    },
    faq: [
      {
        question: '¿Los clientes tienen que instalar alguna aplicación para ver el catálogo?',
        answer: 'No. El catálogo funciona como un enlace web rápido (ej. catalogo.tuempresa.pe) accesible desde cualquier navegador o enlace en Instagram/TikTok/Facebook.',
      },
      {
        question: '¿Puedo conectar varios números de WhatsApp para que atiendan distintos vendedores?',
        answer: 'Sí. El sistema puede rotar los pedidos entre tu equipo de ventas de manera equitativa o asignar números específicos por sucursal/ciudad.',
      },
    ],
  },

  'ecommerce-headless-alto-rendimiento': {
    slug: 'ecommerce-headless-alto-rendimiento',
    id: 'ecommerce-headless',
    category: 'ecommerce',
    categoryLabel: 'Comercio Digital Avanzado',
    badge: 'Headless Commerce • Next.js 15 • Shopify / Medusa Backend',
    title: 'Tiendas Virtuales Headless Commerce de Alta Escala',
    shortTitle: 'Headless Commerce',
    subtitle: 'Arquitectura de comercio desacoplada con frontend ultrarrápido en Next.js y backend robusto en Shopify Plus o MedusaJS.',
    heroDescription:
      'La arquitectura utilizada por las marcas globales más grandes del mundo. Separamos la interfaz visual del motor de base de datos para lograr velocidad extrema, personalización de diseño al 100% y cero limitaciones de plataformas tradicionales.',
    metaTitle: 'Desarrollo Headless Commerce en Next.js | TunkiTek Perú',
    metaDescription:
      'Tiendas online headless ultra rápidas con Next.js, Shopify Storefront API y MedusaJS. Máxima velocidad y conversión en e-commerce.',
    subServices: [
      'Frontend Headless en Next.js 15 con Storefront API',
      'Integración con Shopify Plus / MedusaJS / Strapi',
      'Checkouts Personalizados con Pasarelas Peruanas y Globales',
      'Arquitectura Omnicanal para Web, App Móvil y Kioskos',
    ],
    keyFeatures: [
      'Tiempos de carga de página sub-segundo con 99+ en Google Lighthouse',
      'Libertad absoluta de diseño sin las limitaciones de plantillas Liquid de Shopify',
      'Integración con pasarelas de pago peruanas e internacionales sin comisiones abusivas',
      'Gestión unificada de productos, inventario y órdenes desde tu panel habitual',
      'Búsqueda predictiva con filtros instantáneos y recomendaciones con IA',
      'Despliegues en Edge Computing con disponibilidad 99.99% durante Cyber Days',
    ],
    techStack: [
      { name: 'Next.js 15', category: 'frontend', description: 'Frontend headless de máximo rendimiento', isPopular: true },
      { name: 'Shopify Storefront API', category: 'backend', description: 'Motor de e-commerce robusto y seguro' },
      { name: 'MedusaJS', category: 'backend', description: 'Motor e-commerce open source en Node.js' },
      { name: 'GraphQL', category: 'integration', description: 'Consultas de datos ultra optimizadas' },
      { name: 'Algolia / Typesense', category: 'ai', description: 'Búsqueda predictiva con inteligencia artificial' },
      { name: 'Vercel Edge Network', category: 'cloud', description: 'Distribución perimetral global' },
    ],
    integrations: [
      { name: 'Niubiz / Izipay / Culqi', tag: 'Pasarelas', description: 'Cobro con todas las tarjetas en moneda nacional y dólares', category: 'peru', badgeColor: '#0052FF' },
      { name: 'Klaviyo / Omnisend', tag: 'Marketing', description: 'Automatización de carritos abandonados y post-venta', category: 'global' },
      { name: 'ERP / WMS Logístico', tag: 'Logística', description: 'Sincronización con operadores de despacho como Olva y Urbano', category: 'peru' },
    ],
    capabilities: [
      {
        id: 'cap-headless-speed',
        iconName: 'Zap',
        title: 'Navegación Instantánea Sin Recargas',
        description: 'El cambio entre páginas de producto ocurre en milisegundos gracias a la hidratación progresiva de Next.js.',
        metric: { value: '< 0.7s', label: 'Carga completa de producto' },
        details: ['Preejecución de rutas en segundo plano', 'Cero recargas de pantalla completa', 'Imágenes responsive optimizadas'],
      },
      {
        id: 'cap-headless-freedom',
        iconName: 'Layers',
        title: 'Diseño y Experiencia de Usuario 100% a Medida',
        description: 'Crea cualquier experiencia interactiva: configuradores de producto 3D, bundles dinámicos o ventas cruzadas inteligentes.',
        metric: { value: '100%', label: 'Libertad de personalización' },
        details: ['Sin restricciones de Liquid o temas rígidos', 'Microinteracciones con Framer Motion', 'Pruebas de diseño continuas'],
      },
      {
        id: 'cap-headless-security',
        iconName: 'ShieldAlert',
        title: 'Seguridad Desacoplada y Cero Caídas',
        description: 'Si tu base de datos sufre un pico, el frontend en caché perimetral sigue respondiendo sin caerse jamás.',
        metric: { value: '99.99%', label: 'Uptime en Cyber Days' },
        details: ['Protección contra caídas de base de datos', 'Frontend estático en CDN global', 'Certificados SSL automáticos'],
      },
      {
        id: 'cap-headless-multichannel',
        iconName: 'Cpu',
        title: 'Un Solo Backend para Web, App y Kioskos',
        description: 'Conecta tu catálogo a tu tienda web, tu aplicación móvil nativa y pantallas táctiles de tiendas físicas.',
        metric: { value: 'Omnicanal', label: 'Catálogo centralizado' },
        details: ['APIs GraphQL unificadas', 'Gestión central de stock', 'Experiencia uniforme de marca'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Definición de Arquitectura & Backend', duration: 'Semana 1-2', description: 'Configuración de Shopify Storefront API o MedusaJS y modelado de datos.' },
      { step: '02', title: 'Diseño UX/UI de Alta Gama en Figma', duration: 'Semana 3-4', description: 'Prototipado de la experiencia de compra, fichas de producto y checkout.' },
      { step: '03', title: 'Desarrollo Frontend en Next.js & GraphQL', duration: 'Semana 5-6', description: 'Construcción en código modular, integración de pasarelas y búsqueda predictiva.' },
      { step: '04', title: 'Auditoría de Conversión & Despliegue', duration: 'Semana 7-8', description: 'Pruebas de estrés, auditoría de Core Web Vitals y lanzamiento en producción.' },
    ],
    pricingHint: {
      startingAt: 'S/ 7,500',
      currency: 'S/',
      planReference: 'Plan Conquistador Headless',
    },
    faq: [
      {
        question: '¿Puedo seguir usando mi panel de Shopify para gestionar pedidos y stock?',
        answer: 'Sí. Tu equipo seguirá usando el panel de administración de Shopify exactamente como siempre, pero tus clientes disfrutarán de una web 4 veces más rápida y con diseño exclusivo.',
      },
      {
        question: '¿Qué pasarelas de pago peruanas se pueden usar en Headless?',
        answer: 'Integramos Niubiz, Izipay, Culqi, Mercado Pago, PagoEfectivo y transferencias directas con validación bancaria.',
      },
    ],
  },

  'ecommerce-tiendas-minoristas': {
    slug: 'ecommerce-tiendas-minoristas',
    id: 'ecommerce-minoristas',
    category: 'ecommerce',
    categoryLabel: 'Venta Online B2C',
    badge: 'Tiendas B2C • Pasarelas Peruanas • Control de Stock',
    title: 'E-Commerce para Tiendas Minoristas & Pymes',
    shortTitle: 'Tienda Online B2C',
    subtitle: 'Tiendas virtuales completas para vender productos físicos al consumidor final con pasarelas de pago integradas y control de stock.',
    heroDescription:
      'Convierte tu negocio tradicional en una máquina de ventas online 24/7. Desarrollamos tiendas virtuales profesionales con pasarelas de pago peruanas (Visa, Mastercard, Yape, Plin), cálculo de delivery por distritos, cupones de descuento y control de inventario.',
    metaTitle: 'Creación de Tiendas Virtuales B2C en Perú | TunkiTek',
    metaDescription:
      'Tiendas online para pymes y marcas minoristas. Pasarelas Niubiz, Culqi, Mercado Pago, control de stock y carrito optimizado en Perú.',
    subServices: [
      'Tiendas Online para Retail, Moda, Calzado y Tecnología',
      'Integración con Pasarelas de Pago Peruanas e Internacionales',
      'Módulo de Envíos con Tarifas por Distritos de Lima y Provincias',
      'Gestión de Cupones, Promociones y Carritos Abandonados',
    ],
    keyFeatures: [
      'Cobros seguros con Niubiz, Culqi, Mercado Pago, Yape y transferencias',
      'Panel administrativo en español para subir fotos y cambiar precios en segundos',
      'Cálculo automático de costo de envío según dirección del cliente',
      'Alertas de stock bajo para evitar quiebres de inventario en almacén',
      'Generación automática de comprobantes de pago para el comprador',
      'Diseño 100% responsivo y optimizado para compras desde el celular',
    ],
    techStack: [
      { name: 'Next.js / WooCommerce Pro', category: 'frontend', description: 'Plataforma rápida y autogestionable', isPopular: true },
      { name: 'Tailwind CSS', category: 'frontend', description: 'Diseño limpio enfocado en producto' },
      { name: 'PostgreSQL / MySQL', category: 'database', description: 'Base de datos segura para órdenes y clientes' },
      { name: 'Stripe / Niubiz SDK', category: 'payment', description: 'Procesamiento seguro de tarjetas' },
    ],
    integrations: [
      { name: 'Niubiz & Culqi', tag: 'Tarjetas', description: 'Pagos con Visa, Mastercard, Diners y Amex', category: 'peru', badgeColor: '#0052FF' },
      { name: 'Yape y Plin con QR', tag: 'Billeteras', description: 'Validación de pagos móviles peruanos', category: 'peru', badgeColor: '#6B117B' },
      { name: 'Olva Courier / Chazki', tag: 'Logística', description: 'Tarifas y seguimiento de despachos a domicilio', category: 'peru' },
    ],
    capabilities: [
      {
        id: 'cap-b2c-checkout',
        iconName: 'Zap',
        title: 'Checkout Optimizado con Pasarelas Peruanas',
        description: 'Acepta todas las tarjetas de débito y crédito, Yape, Plin y PagoEfectivo con comisiones competitivas.',
        metric: { value: 'Multi-Pago', label: '100% métodos de pago en Perú' },
        details: ['Niubiz y Culqi oficiales', 'Yape con QR dinámico', 'Transferencias BCP y BBVA'],
      },
      {
        id: 'cap-b2c-inventory',
        iconName: 'CheckCircle2',
        title: 'Control de Stock por Variantes y Almacén',
        description: 'Maneja tallas, colores o capacidades con stock independiente. Si un producto se agota, el sistema lo bloquea automáticamente.',
        metric: { value: 'Exacto', label: 'Control de stock en vivo' },
        details: ['Variantes ilimitadas por producto', 'Notificación de stock mínimo por email', 'Historial de compras por cliente'],
      },
      {
        id: 'cap-b2c-coupons',
        iconName: 'Layers',
        title: 'Motor de Cupones y Promociones Flash',
        description: 'Crea descuentos por porcentaje, 2x1, envío gratis en compras mayores a S/ 150 o cupones exclusivos para influencers.',
        metric: { value: '+22%', label: 'Ticket promedio de compra' },
        details: ['Cupones con fecha de caducidad', 'Descuentos automáticos en carrito', 'Banners promocionales dinámicos'],
      },
      {
        id: 'cap-b2c-mobile-ui',
        iconName: 'Bot',
        title: 'Diseño Mobile-First para Redes Sociales',
        description: 'Tus clientes llegarán desde Instagram o TikTok y podrán comprar con solo 3 toques en la pantalla.',
        metric: { value: '3 Clics', label: 'Para completar el pedido' },
        details: ['Barra inferior fija con botón de compra', 'Galería de fotos deslizables', 'Formulario simplificado'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Diseño Visual & Configuración de Marca', duration: 'Semana 1', description: 'Adaptación de colores, tipografías, banners promocionales y estructura de catálogo.' },
      { step: '02', title: 'Carga de Productos & Estructura de Envíos', duration: 'Semana 2', description: 'Subida de inventario inicial, configuración de distritos y costos de delivery.' },
      { step: '03', title: 'Homologación de Pasarelas de Pago', duration: 'Semana 3', description: 'Conexión con Niubiz, Culqi o Mercado Pago y pruebas de cobro real.' },
      { step: '04', title: 'Capacitación & Lanzamiento al Público', duration: 'Semana 4', description: 'Entrenamiento para gestión de pedidos y publicación en dominio propio.' },
    ],
    pricingHint: {
      startingAt: 'S/ 3,200',
      currency: 'S/',
      planReference: 'Plan Start E-Commerce',
    },
    faq: [
      {
        question: '¿Qué comisiones cobran las pasarelas de pago en Perú?',
        answer: 'Las pasarelas peruanas (Niubiz, Culqi, Mercado Pago) cobran entre 3.45% y 3.99% + IGV por transacción exitosa. El dinero se deposita directamente en tu cuenta bancaria de empresa.',
      },
      {
        question: '¿Cómo se configuran los costos de envío para Lima y provincias?',
        answer: 'Configuramos una matriz de costos por distrito (ej. Lima Centro S/ 10, Lima Sur S/ 15, Provincias S/ 20) o tarifas fijas por agencia de transporte (Olva, Shalom, Marvisur).',
      },
    ],
  },

  // ================= 3. SAAS & APLICACIONES CLOUD =================
  'aplicaciones-web-a-medida': {
    slug: 'aplicaciones-web-a-medida',
    id: 'web-apps',
    category: 'saas',
    categoryLabel: 'Software & Portales Cloud',
    badge: 'Full-Stack • PWA • Arquitectura Modular Escalable',
    title: 'Aplicaciones Web & Portales de Clientes (PWA)',
    shortTitle: 'Aplicaciones Web a Medida',
    subtitle: 'Sistemas web interactivos con flujos de trabajo complejos, autenticación por roles y bases de datos en la nube.',
    heroDescription:
      'Cuando un sitio web informativo no es suficiente, construimos aplicaciones web robustas y progresivas (PWA) diseñadas para digitalizar procesos internos de tu empresa: extranets para clientes, portales de proveedores, sistemas de reserva y calculadoras financieras interactivas.',
    metaTitle: 'Desarrollo de Aplicaciones Web a Medida | TunkiTek Perú',
    metaDescription:
      'Desarrollo de aplicaciones web y portales de clientes en Next.js, Node.js y PostgreSQL. Seguridad empresarial y escalabilidad garantizada.',
    subServices: [
      'Portales de Autoservicio para Clientes y Proveedores',
      'Aplicaciones Web Progresivas (PWA) Instalables',
      'Sistemas de Reservas, Cotizadores y Calculadoras Complejas',
      'Dashboards Interactivos con Métricas en Tiempo Real',
    ],
    keyFeatures: [
      'Autenticación segura con JWT, OAuth2 (Google/Microsoft) y roles jerárquicos',
      'Bases de datos relacionales PostgreSQL con respaldo automático diario',
      'Diseño PWA que permite instalar la aplicación en computadoras y celulares',
      'Exportación automática de reportes a PDF, Excel y formatos contables',
      'Arquitectura modular basada en microservicios y APIs REST / GraphQL',
      'Código 100% transferido a tu empresa sin licencias cautivas mensuales',
    ],
    techStack: [
      { name: 'Next.js 15 App Router', category: 'frontend', description: 'Frontend reactivo de alto rendimiento', isPopular: true },
      { name: 'Node.js / Express / NestJS', category: 'backend', description: 'Servidores backend estructurados y escalables' },
      { name: 'PostgreSQL / Prisma', category: 'database', description: 'Base de datos tipada con migraciones seguras' },
      { name: 'Tailwind CSS & Shadcn UI', category: 'frontend', description: 'Componentes de interfaz accesibles y elegantes' },
      { name: 'Docker & AWS', category: 'cloud', description: 'Despliegues en contenedores con autoescalado' },
    ],
    integrations: [
      { name: 'Auth0 / Clerk / Supabase Auth', tag: 'Seguridad', description: 'Gestión segura de identidades y usuarios', category: 'global' },
      { name: 'SendGrid / Resend', tag: 'Emails', description: 'Envío de correos transaccionales y notificaciones', category: 'global' },
      { name: 'AWS S3 / Cloudflare R2', tag: 'Storage', description: 'Almacenamiento seguro de archivos adjuntos y documentos', category: 'cloud' },
    ],
    capabilities: [
      {
        id: 'cap-pwa-install',
        iconName: 'Zap',
        title: 'Aplicación Progresiva Instalable (PWA)',
        description: 'Tus usuarios pueden instalar el portal como una app en su pantalla de inicio en Windows, Mac, Android e iOS.',
        metric: { value: 'PWA Ready', label: 'Instalable en cualquier equipo' },
        details: ['Acceso con un clic desde el escritorio', 'Modo offline para funciones básicas', 'Notificaciones push en tiempo real'],
      },
      {
        id: 'cap-rbac-security',
        iconName: 'ShieldAlert',
        title: 'Control de Permisos y Roles (RBAC)',
        description: 'Define qué puede ver y editar cada usuario: administradores, supervisores, clientes o personal de almacén.',
        metric: { value: 'Granular', label: 'Seguridad por nivel de usuario' },
        details: ['Registro de auditoría de cada acción', 'Sesiones cifradas con expiración automática', 'Protección contra inyección SQL y XSS'],
      },
      {
        id: 'cap-realtime-data',
        iconName: 'Cpu',
        title: 'Datos en Tiempo Real con WebSockets',
        description: 'Visualiza cambios en vivo sin necesidad de recargar la página (estados de pedidos, chat interno o métricas de ventas).',
        metric: { value: '< 100ms', label: 'Latencia de sincronización' },
        details: ['Conexiones WebSockets bidireccionales', 'Actualización de tableros Kanban', 'Notificaciones instantáneas'],
      },
      {
        id: 'cap-export-reports',
        iconName: 'CheckCircle2',
        title: 'Reportes y Exportación Masiva en 1 Clic',
        description: 'Descarga reportes consolidados en Excel con formato contable o genera certificados y contratos en PDF con firma digital.',
        metric: { value: 'PDF & Excel', label: 'Formatos ejecutivos automáticos' },
        details: ['Generación de PDFs membretados', 'Exportación de tablas con filtros activos', 'Envío programado de reportes por correo'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Ingeniería de Requerimientos & Diagramas de BD', duration: 'Semana 1-2', description: 'Mapeo de casos de uso, entidades de base de datos y flujos de usuario.' },
      { step: '02', title: 'Prototipado Interactivo UI/UX en Figma', duration: 'Semana 3', description: 'Diseño de todas las pantallas, formularios y componentes del sistema.' },
      { step: '03', title: 'Desarrollo Full-Stack en Sprints Ágiles', duration: 'Semana 4-6', description: 'Programación de backend, frontend, endpoints de API y pruebas unitarias.' },
      { step: '04', title: 'Control de Calidad (QA), Seguridad & Despliegue', duration: 'Semana 7-8', description: 'Auditoría de seguridad, pruebas de penetración y entrega del código fuente.' },
    ],
    pricingHint: {
      startingAt: 'S/ 5,500',
      currency: 'S/',
      planReference: 'Plan Pionero Web App',
    },
    faq: [
      {
        question: '¿Quién es el dueño del código fuente de la aplicación?',
        answer: 'Tu empresa es dueña del 100% del código fuente y de la base de datos. Al finalizar el proyecto te transferimos el repositorio privado completo en GitHub o GitLab.',
      },
      {
        question: '¿Se puede alojar en nuestros propios servidores o nube corporativa?',
        answer: 'Sí. Desplegamos la aplicación en tu cuenta propia de AWS, Google Cloud, DigitalOcean o servidores dedicados locales.',
      },
    ],
  },

  'sistemas-saas-cloud': {
    slug: 'sistemas-saas-cloud',
    id: 'saas-cloud',
    category: 'saas',
    categoryLabel: 'Productos Digitales & SaaS',
    badge: 'Arquitectura Multi-Tenant • Cobro Recurrente • Escala Global',
    title: 'Desarrollo de Plataformas SaaS Multi-Tenant',
    shortTitle: 'Plataformas SaaS Cloud',
    subtitle: 'Arquitectura de software como servicio diseñada para escalar a miles de suscriptores con facturación recurrente automatizada.',
    heroDescription:
      'Convierte tu idea de negocio o software interno en un producto SaaS escalable. Diseñamos arquitecturas multi-tenant seguras con aislamiento de bases de datos por cliente, pasarelas de suscripción mensual/anual, planes tarifarios y paneles administrativos de control global.',
    metaTitle: 'Desarrollo de Software SaaS Multi-Tenant | TunkiTek Perú',
    metaDescription:
      'Desarrollo de plataformas SaaS en la nube. Arquitectura multi-tenant, suscripciones automáticas, escalabilidad en AWS y código 100% tuyo.',
    subServices: [
      'Arquitecturas Multi-Tenant con Aislamiento de Datos',
      'Integración de Cobro Recurrente con Tarjetas y Bancos',
      'Panel de Super-Administración de Clientes y Licencias',
      'Onboarding Automatizado de Usuarios y Periodos de Prueba',
    ],
    keyFeatures: [
      'Aislamiento de bases de datos por Tenant (esquemas separados o bases independientes)',
      'Cobros recurrentes automáticos con Stripe Billing, Niubiz y Mercado Pago',
      'Gestión automática de upgrades, downgrades, cancelaciones y reintentos de cobro',
      'Métricas clave de SaaS en tiempo real: MRR, ARR, Churn Rate, LTV y CAC',
      'Infraestructura serverless autodesplegable con costo operativo cercano a cero al inicio',
      'Soporte multi-idioma y multi-moneda para expansión internacional',
    ],
    techStack: [
      { name: 'Next.js 15', category: 'frontend', description: 'Frontend de alta velocidad para clientes y portal de administración', isPopular: true },
      { name: 'PostgreSQL / Supabase', category: 'database', description: 'Base de datos relacional con Row-Level Security (RLS)' },
      { name: 'Stripe Billing / Lemonsqueezy', category: 'payment', description: 'Gestión global de suscripciones e impuestos' },
      { name: 'NestJS / Go', category: 'backend', description: 'Microservicios de alta concurrencia y baja latencia' },
      { name: 'Redis', category: 'database', description: 'Gestión de colas de trabajo y control de cuotas API' },
      { name: 'AWS Lambda / ECS', category: 'cloud', description: 'Cómputo elástico sin servidores que administra picos de uso' },
    ],
    integrations: [
      { name: 'Stripe / Niubiz Recurrente', tag: 'Suscripciones', description: 'Cobro automático mes a mes con reintentos inteligentes', category: 'global', badgeColor: '#635BFF' },
      { name: 'PostHog / Mixpanel', tag: 'Product Analytics', description: 'Métricas de retención, uso de funciones y embudo de conversión', category: 'global' },
      { name: 'Intercom / Crisp', tag: 'Soporte', description: 'Chat de atención al cliente integrado en la plataforma', category: 'global' },
    ],
    capabilities: [
      {
        id: 'cap-multi-tenant-rls',
        iconName: 'ShieldAlert',
        title: 'Aislamiento de Datos por Tenant con Row-Level Security',
        description: 'Garantía matemática de que ningún suscriptor podrá acceder a los datos de otra empresa, cumpliendo normas de compliance.',
        metric: { value: 'Aislamiento', label: 'Seguridad estricta por empresa' },
        details: ['Políticas RLS en base de datos', 'Cifrado de datos en reposo y tránsito', 'Subdominios propios por cliente (empresa.tusaas.com)'],
      },
      {
        id: 'cap-recurring-billing',
        iconName: 'Zap',
        title: 'Facturación Recurrente y Gestión de Licencias',
        description: 'Tus clientes eligen plan, ingresan su tarjeta y el sistema cobra mes a mes automáticamente, generando facturas electrónicas.',
        metric: { value: 'Automático', label: 'Cobros recurrentes sin fricción' },
        details: ['Dunning inteligente para tarjetas vencidas', 'Planes mensuales y anuales con descuento', 'Periodos de prueba gratuitos (Free Trial)'],
      },
      {
        id: 'cap-mrr-dashboard',
        iconName: 'Cpu',
        title: 'Dashboard de Métricas MRR y Salud del Negocio',
        description: 'Mide la salud financiera de tu SaaS en vivo: ingresos recurrentes mensuales (MRR), tasa de retención y usuarios activos.',
        metric: { value: 'MRR & ARR', label: 'Telemetría financiera en vivo' },
        details: ['Tasa de abandono (Churn)', 'Valor de vida del cliente (LTV)', 'Gráficos de crecimiento de suscriptores'],
      },
      {
        id: 'cap-api-ecosystem',
        iconName: 'Layers',
        title: 'API Pública y Webhooks para Desarrolladores',
        description: 'Permite que tus clientes conecten tu SaaS con sus propios sistemas mediante claves API seguras y webhooks en tiempo real.',
        metric: { value: 'REST API', label: 'Ecosistema de integración abierto' },
        details: ['Documentación Swagger / OpenAPI interactiva', 'Control de límites de uso (Rate Limiting)', 'Logs de peticiones para depuración'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Arquitectura de Datos Multi-Tenant & Casos de Uso', duration: 'Semana 1-2', description: 'Diseño de la base de datos, aislamiento de información y definición de niveles de suscripción.' },
      { step: '02', title: 'Diseño UI/UX del Portal y Onboarding', duration: 'Semana 3-4', description: 'Creación de interfaces para el cliente final y para el panel maestro de administración.' },
      { step: '03', title: 'Desarrollo de Motor Core & Suscripciones', duration: 'Semana 5-8', description: 'Programación de la lógica del producto, pasarelas de cobro recurrente y correos automáticos.' },
      { step: '04', title: 'Pruebas de Seguridad, Carga & Lanzamiento', duration: 'Semana 9-10', description: 'Auditoría de seguridad contra vulnerabilidades, configuración de DNS y lanzamiento MVP.' },
    ],
    pricingHint: {
      startingAt: 'S/ 10,000',
      currency: 'S/',
      planReference: 'Plan Pionero / Magnate SaaS',
    },
    faq: [
      {
        question: '¿Cuánto cuesta mantener la infraestructura en la nube de un SaaS al inicio?',
        answer: 'Gracias a la arquitectura Serverless en AWS o Vercel, los costos de infraestructura inician prácticamente en S/ 0 a S/ 80 mensuales y solo crecen proporcionalmente conforme aumentan tus suscriptores de pago.',
      },
      {
        question: '¿El sistema emite Factura Electrónica SUNAT por cada cobro mensual?',
        answer: 'Sí. Integramos APIs de facturación electrónica en Perú para emitir y enviar la factura automáticamente al correo del cliente tan pronto como la tarjeta es debitada con éxito.',
      },
    ],
  },

  'sistemas-validacion-pagos': {
    slug: 'sistemas-validacion-pagos',
    id: 'validacion-pagos',
    category: 'saas',
    categoryLabel: 'Fintech & Anti-Fraude',
    badge: 'Validación en < 3s • OCR con IA • Cero Yape Falso',
    title: 'SaaS de Conciliación Bancaria & Validación de Pagos',
    shortTitle: 'Validación de Pagos',
    subtitle: 'Sistemas automatizados de lectura y conciliación de billeteras móviles (Yape / Plin) y transferencias bancarias en tiempo real.',
    heroDescription:
      'Protege tu negocio contra estafas de capturas falsificadas de Yape o transferencias adulteradas. Nuestro motor fintech valida el número de operación bancario y monto abonado directamente en la cuenta de tu empresa en menos de 3 segundos mediante OCR con IA y webhooks bancarios seguros.',
    metaTitle: 'Validación Automática de Pagos Yape / Plin y Bancos | TunkiTek',
    metaDescription:
      'Software de conciliación bancaria y detección de comprobantes falsos en Perú. Validación automática en 3 segundos con OCR e inteligencia artificial.',
    subServices: [
      'Detección de Yape y Plin Falso con OCR e Inteligencia Artificial',
      'Conciliación Bancaria Automática con BCP, BBVA, Interbank y Scotiabank',
      'Despacho y Liberación Automática de Pedidos Pagados',
      'Dashboard Financiero con Métricas de Flujo de Caja en Tiempo Real',
    ],
    keyFeatures: [
      'Lectura automática de comprobantes bancarios mediante OCR de alta precisión',
      'Cotejo en tiempo real del número de operación con los movimientos reales de tu cuenta',
      'Detección de capturas editadas con Photoshop o aplicaciones de comprobantes truchos',
      'Liberación automática de pedidos en tu e-commerce sin intervención humana',
      'Alertas instantáneas por WhatsApp y Telegram ante intentos de fraude detectados',
      'Exportación de estados de conciliación contable listos para declarar a SUNAT',
    ],
    techStack: [
      { name: 'Python / FastAPI', category: 'backend', description: 'Microservicios de alta velocidad para procesamiento de comprobantes', isPopular: true },
      { name: 'Gemini Vision / Tesseract OCR', category: 'ai', description: 'Modelos de visión por computadora para lectura de imágenes' },
      { name: 'PostgreSQL', category: 'database', description: 'Registro inmutable de transacciones y estados bancarios' },
      { name: 'Next.js 15', category: 'frontend', description: 'Panel de monitoreo financiero en vivo' },
      { name: 'Redis Queue', category: 'database', description: 'Procesamiento paralelo de cientos de pagos por minuto' },
    ],
    integrations: [
      { name: 'Yape & Plin Webhooks', tag: 'Billeteras', description: 'Recepción y validación de notificaciones de abono móvil', category: 'peru', badgeColor: '#6B117B' },
      { name: 'BCP / BBVA / Interbank', tag: 'Bancos', description: 'Lectura segura de movimientos de cuentas corrientes y ahorros', category: 'peru' },
      { name: 'WooCommerce / Shopify / Next.js', tag: 'E-commerce', description: 'Actualización del estado del pedido a "Pagado" en segundos', category: 'global' },
    ],
    capabilities: [
      {
        id: 'cap-ocr-ai-detection',
        iconName: 'Zap',
        title: 'Detección de Fraude en Menos de 3 Segundos',
        description: 'La IA analiza la tipografía, alineación de píxeles y metadatos de la imagen para detectar si el comprobante fue manipulado.',
        metric: { value: '100%', label: 'Eficacia en detección de Yape trucho' },
        details: ['Análisis de tipografía y espaciado bancario', 'Validación del código de operación único', 'Bloqueo automático de números fraudulentos'],
      },
      {
        id: 'cap-bank-reconciliation',
        iconName: 'CheckCircle2',
        title: 'Cotejo Automático con tu Cuenta Bancaria',
        description: 'El sistema verifica que el dinero esté realmente acreditado en tu cuenta de banco antes de marcar el pedido como completado.',
        metric: { value: '< 3s', label: 'Tiempo de confirmación de abono' },
        details: ['Conexión segura con API bancaria o email de notificación', 'Validación de monto exacto', 'Eliminación del trabajo manual de fin de mes'],
      },
      {
        id: 'cap-instant-dispatch',
        iconName: 'Cpu',
        title: 'Liberación Inmediata de Pedidos para Delivery',
        description: 'Apenas se confirma el pago, la orden se envía automáticamente a la impresora de almacén o al sistema de despacho.',
        metric: { value: '0 Esperas', label: 'Para despachar al cliente' },
        details: ['Notificación por WhatsApp al cliente confirmando el pago', 'Generación de orden de despacho', 'Emisión de boleta electrónica'],
      },
      {
        id: 'cap-cashflow-telemetry',
        iconName: 'ShieldAlert',
        title: 'Dashboard de Flujo de Caja y Alertas de Fraude',
        description: 'Visualiza cuánto dinero ingresó hoy por Yape, Plin o transferencias, con gráficos de horas pico y lista negra de estafadores.',
        metric: { value: 'En Vivo', label: 'Métricas de tesorería consolidadas' },
        details: ['Reporte consolidado de todas las cuentas', 'Detección de duplicados', 'Exportación a Excel para contabilidad'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Auditoría de Métodos de Cobro & Cuentas', duration: 'Semana 1', description: 'Revisión de cuentas bancarias de la empresa, canales de venta y formato de comprobantes.' },
      { step: '02', title: 'Entrenamiento del Motor OCR & Algoritmo Anti-Fraude', duration: 'Semana 2', description: 'Configuración de modelos de visión para lectura precisa de capturas y validación de operaciones.' },
      { step: '03', title: 'Integración con Tienda Online & Notificaciones', duration: 'Semana 3', description: 'Conexión con el e-commerce o sistema de ventas y configuración de webhooks de alerta.' },
      { step: '04', title: 'Pruebas de Estrés con Comprobantes Reales', duration: 'Semana 4', description: 'Validación en vivo de transacciones y capacitación al equipo de finanzas.' },
    ],
    pricingHint: {
      startingAt: 'S/ 4,200',
      currency: 'S/',
      planReference: 'Plan Pro Fintech',
    },
    faq: [
      {
        question: '¿El sistema almacena las claves de mis cuentas bancarias?',
        answer: 'No. La solución opera bajo estándares de seguridad bancaria mediante lectura de notificaciones oficiales o conexiones API tokenizadas de solo lectura, sin acceso a transferir fondos.',
      },
      {
        question: '¿Qué sucede si un cliente envía una captura borrosa o ilegible?',
        answer: 'El sistema le responde automáticamente por el chat solicitándole que reenvíe una imagen clara o ingrese manualmente su número de operación para su verificación instantánea.',
      },
    ],
  },

  'gestion-documental-segura': {
    slug: 'gestion-documental-segura',
    id: 'gestion-documental',
    category: 'saas',
    categoryLabel: 'Seguridad & LegalTech',
    badge: 'Cifrado AES-256 • Firma Digital Legal • Compliance',
    title: 'Bóvedas de Gestión Documental & Firma Digital',
    shortTitle: 'Gestión Documental Segura',
    subtitle: 'Plataformas cloud privadas con encriptación avanzada, firma electrónica con valor legal y búsqueda semántica de contratos.',
    heroDescription:
      'Solución diseñada para estudios jurídicos, inmobiliarias, financieras y empresas con alto flujo de contratos confidenciales. Desarrollamos bóvedas digitales seguras con cifrado militar de extremo a extremo, trazabilidad inmutable de accesos, flujos de firma electrónica y búsqueda de texto dentro de documentos escaneados.',
    metaTitle: 'Sistema de Gestión Documental y Firma Electrónica | TunkiTek',
    metaDescription:
      'Bóvedas documentales cloud con cifrado AES-256, firma electrónica legal, OCR semántico y control de accesos para empresas en Perú.',
    subServices: [
      'Bóvedas Cloud Privadas con Cifrado Militar AES-256',
      'Flujos de Firma Electrónica y Digital con Validez Jurídica',
      'Búsqueda Semántica de Texto en PDFs y Documentos Escaneados',
      'Control de Versiones y Registro de Auditoría Inmutable',
    ],
    keyFeatures: [
      'Cifrado de datos en reposo y en tránsito con algoritmos AES de 256 bits',
      'Flujo de firma electrónica con sellado de tiempo y certificado de trazabilidad (IP, fecha y hora)',
      'Búsqueda inteligente con OCR que indexa el texto dentro de contratos escaneados',
      'Permisos jerárquicos estrictos por departamento, expediente o cliente',
      'Historial de versiones con capacidad de restaurar versiones anteriores en 1 clic',
      'Cumplimiento de normativas de protección de datos personales y requisitos SUNAT',
    ],
    techStack: [
      { name: 'Next.js 15', category: 'frontend', description: 'Interfaz web segura con visor de documentos integrado', isPopular: true },
      { name: 'Node.js & Go', category: 'backend', description: 'Microservicios de cifrado y procesamiento de PDFs' },
      { name: 'PostgreSQL', category: 'database', description: 'Base de datos relacional con logs de auditoría inmutables' },
      { name: 'AWS S3 con Cifrado SSE-KMS', category: 'cloud', description: 'Almacenamiento de archivos con claves de cifrado dedicadas' },
      { name: 'Elasticsearch / OpenSearch', category: 'backend', description: 'Motor de búsqueda de texto completo en millones de páginas' },
    ],
    integrations: [
      { name: 'RENIEC / SUNAT API', tag: 'Identidad', description: 'Validación de DNI y RUC de firmantes en tiempo real', category: 'peru', badgeColor: '#003399' },
      { name: 'Firma Perú / Adobe Sign', tag: 'Firma Digital', description: 'Soporte para certificados digitales acreditados', category: 'global' },
      { name: 'Microsoft 365 & Google Drive', tag: 'Sincronización', description: 'Importación y exportación de archivos corporativos', category: 'global' },
    ],
    capabilities: [
      {
        id: 'cap-aes-encryption',
        iconName: 'ShieldAlert',
        title: 'Cifrado Militar AES-256 de Extremo a Extremo',
        description: 'Tus archivos son encriptados antes de guardarse en la nube. Ni siquiera los administradores del servidor pueden leer tus documentos.',
        metric: { value: 'AES-256', label: 'Estándar criptográfico militar' },
        details: ['Claves de cifrado rotativas KMS', 'Aislamiento total por expediente', 'Canales TLS 1.3 de alta seguridad'],
      },
      {
        id: 'cap-e-signature',
        iconName: 'CheckCircle2',
        title: 'Firma Electrónica con Certificado de Evidencia Legal',
        description: 'Genera un documento probatorio con dirección IP, geolocalización, huella digital SHA-256 y sellado de tiempo formal.',
        metric: { value: '100% Legal', label: 'Validez según ley peruana de firmas' },
        details: ['Firma desde el celular con trazo o código OTP', 'Notificación automática por correo y WhatsApp a los firmantes', 'Bloqueo de alteraciones post-firma'],
      },
      {
        id: 'cap-ocr-search',
        iconName: 'Zap',
        title: 'Búsqueda Instantánea Dentro de Documentos Escaneados',
        description: 'Encuentra cualquier cláusula, número de DNI o monto entre 50,000 archivos en menos de 1 segundo mediante OCR semántico.',
        metric: { value: '< 1s', label: 'Búsqueda en millones de páginas' },
        details: ['Reconocimiento óptico de caracteres (OCR)', 'Filtros por fecha, cliente o tipo de contrato', 'Visor de PDF con resaltado de coincidencias'],
      },
      {
        id: 'cap-audit-logs',
        iconName: 'Cpu',
        title: 'Trazabilidad y Registro de Auditoría Inmutable',
        description: 'Conoce con exactitud qué usuario descargó, visualizó, editó o compartió un documento y en qué momento.',
        metric: { value: 'Inmutable', label: 'Bitácora a prueba de manipulaciones' },
        details: ['Registro de IP y dispositivo', 'Alertas ante descargas masivas sospechosas', 'Políticas de retención y borrado seguro'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Clasificación de Documentos & Matriz de Permisos', duration: 'Semana 1-2', description: 'Definición de tipos de expedientes, niveles de confidencialidad y roles de acceso.' },
      { step: '02', title: 'Desarrollo de Bóveda Cifrada & Visor Seguro', duration: 'Semana 3-4', description: 'Implementación del almacenamiento cifrado en AWS S3, visor web y motor OCR.' },
      { step: '03', title: 'Módulo de Firma Electrónica & Notificaciones', duration: 'Semana 5-6', description: 'Programación del flujo de firmas con certificados de trazabilidad y validación RENIEC.' },
      { step: '04', title: 'Auditoría de Seguridad & Despliegue', duration: 'Semana 7-8', description: 'Pruebas de penetración (Ethical Hacking), capacitación al equipo legal y entrega.' },
    ],
    pricingHint: {
      startingAt: 'S/ 5,800',
      currency: 'S/',
      planReference: 'Plan Pro LegalTech',
    },
    faq: [
      {
        question: '¿Los contratos firmados en la plataforma tienen validez legal en Perú?',
        answer: 'Sí. El sistema cumple con la Ley N° 27269 (Ley de Firmas y Certificados Digitales en Perú), generando un certificado de trazabilidad con huella digital SHA-256 y sellado de tiempo admisible como medio probatorio.',
      },
      {
        question: '¿Se pueden establecer fechas de vencimiento con alertas automáticas?',
        answer: 'Sí. Puedes configurar alertas para que el sistema notifique a los responsables 30, 15 y 5 días antes del vencimiento de un contrato, póliza o alquiler.',
      },
    ],
  },

  // ================= 4. MÓVIL & SISTEMAS INTEGRALES =================
  'aplicaciones-moviles-ios-android': {
    slug: 'aplicaciones-moviles-ios-android',
    id: 'apps-moviles',
    category: 'mobile',
    categoryLabel: 'Móvil & Multiplataforma',
    badge: 'Flutter & React Native • Publicación en App Store y Google Play',
    title: 'Desarrollo de Aplicaciones Móviles (iOS & Android)',
    shortTitle: 'Apps Móviles (iOS & Android)',
    subtitle: 'Aplicaciones móviles nativas y multiplataforma de alto rendimiento con diseño premium y publicación oficial en las tiendas.',
    heroDescription:
      'Construimos aplicaciones móviles fluidas con Flutter y React Native para empresas que necesitan conectar con sus clientes o coordinar a su personal de campo. Desde apps de delivery y transporte hasta herramientas de inspección técnica con geolocalización y funcionamiento offline.',
    metaTitle: 'Desarrollo de Aplicaciones Móviles iOS y Android | TunkiTek Perú',
    metaDescription:
      'Desarrollo de apps móviles en Flutter y React Native. Publicación en App Store y Google Play, geolocalización en tiempo real y soporte en Perú.',
    subServices: [
      'Desarrollo de Apps Nativas y Multiplataforma en Flutter',
      'Publicación y Aprobación en Apple App Store y Google Play Store',
      'Geolocalización GPS y Rutas en Tiempo Real con Mapas',
      'Notificaciones Push Segmentadas y Modo Offline',
    ],
    keyFeatures: [
      'Un solo código base para iOS y Android con rendimiento nativo de 60fps',
      'Soporte completo para geolocalización GPS, cámara, escaneo QR y biometría (Face ID / Huella)',
      'Funcionamiento offline con sincronización automática de datos al recuperar internet',
      'Notificaciones push personalizadas para fidelización y alertas de pedidos',
      'Gestión integral del proceso de aprobación en Apple App Store y Google Play',
      'Panel web administrativo para monitoreo de usuarios y control de la app',
    ],
    techStack: [
      { name: 'Flutter / Dart', category: 'mobile', description: 'Framework de Google para apps móviles de máximo rendimiento a 60fps', isPopular: true },
      { name: 'React Native', category: 'mobile', description: 'Framework multiplataforma con amplio ecosistema' },
      { name: 'Node.js / NestJS', category: 'backend', description: 'Backend de APIs de alta velocidad y baja latencia' },
      { name: 'Firebase / Supabase', category: 'cloud', description: 'Base de datos en tiempo real y notificaciones push' },
      { name: 'PostgreSQL / PostGIS', category: 'database', description: 'Consultas espaciales y de geolocalización avanzada' },
    ],
    integrations: [
      { name: 'Google Maps Platform API', tag: 'Mapas', description: 'Trazado de rutas, cálculo de distancias y geocodificación', category: 'global', badgeColor: '#34A853' },
      { name: 'Firebase Cloud Messaging (FCM)', tag: 'Notificaciones', description: 'Envío de notificaciones push a millones de dispositivos', category: 'global' },
      { name: 'Apple Pay & Google Pay / Niubiz', tag: 'Pagos Móviles', description: 'Cobros seguros en 1 toque dentro de la app', category: 'global' },
    ],
    capabilities: [
      {
        id: 'cap-native-performance',
        iconName: 'Zap',
        title: 'Rendimiento Nativo Fluido a 60 Fotogramas por Segundo',
        description: 'Animaciones suaves y transiciones instantáneas que transmiten calidad y estabilidad desde el primer uso.',
        metric: { value: '60 FPS', label: 'Fluidez nativa garantizada' },
        details: ['Compilación nativa en código máquina AOT', 'Carga instantánea de pantallas', 'Bajo consumo de batería del smartphone'],
      },
      {
        id: 'cap-gps-tracking',
        iconName: 'Cpu',
        title: 'Geolocalización GPS y Trazado de Rutas en Vivo',
        description: 'Rastrea la ubicación de repartidores, técnicos de campo o vehículos con actualización en tiempo real sobre el mapa.',
        metric: { value: 'En Vivo', label: 'Seguimiento por GPS en mapa' },
        details: ['Cálculo de tiempo estimado de llegada (ETA)', 'Geocercas y alertas de llegada', 'Historial de recorridos'],
      },
      {
        id: 'cap-offline-sync',
        iconName: 'CheckCircle2',
        title: 'Operación Offline Sin Conexión a Internet',
        description: 'Tu personal puede registrar fotos, inspecciones o ventas en zonas sin cobertura; los datos se sincronizan solos al volver a tener señal.',
        metric: { value: '100% Offline', label: 'Operatividad en campo garantizada' },
        details: ['Base de datos SQLite local en el teléfono', 'Cola de sincronización automática', 'Resolución de conflictos de datos'],
      },
      {
        id: 'cap-store-approval',
        iconName: 'ShieldAlert',
        title: 'Publicación Exitosa en App Store y Google Play',
        description: 'Nos encargamos de las políticas de privacidad, certificados, capturas promocionales y aprobación oficial en las tiendas.',
        metric: { value: 'Aprobado', label: 'En App Store y Google Play' },
        details: ['Cumplimiento de directrices de Apple y Google', 'Configuración de cuentas de desarrollador', 'Actualizaciones periódicas sin problemas'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Definición de Alcance & Wireframes Móviles', duration: 'Semana 1-2', description: 'Mapeo de pantallas, arquitectura de información y validación de flujos de usuario.' },
      { step: '02', title: 'Diseño UI/UX de Alta Fidelidad en Figma', duration: 'Semana 3-4', description: 'Prototipado interactivo adaptado a las guías de diseño de iOS (Human Interface) y Android (Material Design).' },
      { step: '03', title: 'Desarrollo en Flutter & Conexión con Backend', duration: 'Semana 5-8', description: 'Programación de la app móvil, APIs en tiempo real, mapas, pasarelas y notificaciones push.' },
      { step: '04', title: 'Pruebas en Dispositivos Reales & Publicación en Tiendas', duration: 'Semana 9-10', description: 'Testeo exhaustivo en múltiples marcas de celulares y publicación oficial en las tiendas.' },
    ],
    pricingHint: {
      startingAt: 'S/ 8,500',
      currency: 'S/',
      planReference: 'Plan Conquistador Móvil',
    },
    faq: [
      {
        question: '¿La app se publica a nombre de mi empresa en las tiendas?',
        answer: 'Sí. Te guiamos para crear tus cuentas oficiales de desarrollador en Apple y Google para que la aplicación aparezca con el nombre y logotipo oficial de tu empresa.',
      },
      {
        question: '¿Cuánto tiempo toma la aprobación de una app en Apple y Google?',
        answer: 'Google Play suele aprobar las aplicaciones en 2 a 5 días y Apple App Store en 24 a 48 horas. Nos encargamos de todo el proceso técnico para evitar rechazos.',
      },
    ],
  },

  'sistemas-integrales-omnichannel': {
    slug: 'sistemas-integrales-omnichannel',
    id: 'sistemas-integrales',
    category: 'mobile',
    categoryLabel: 'Ecosistemas Todo-en-Uno',
    badge: 'Web + App Móvil + Desktop • Sincronización en Tiempo Real',
    title: 'Sistemas Integrales (Web + Móvil + Desktop)',
    shortTitle: 'Sistemas Integrales Todo-en-Uno',
    subtitle: 'Ecosistemas de software unificados donde la plataforma web administrativa, la app móvil de campo y el sistema desktop operan sobre una sola base de datos.',
    heroDescription:
      'La solución definitiva para operaciones complejas. Desarrollamos plataformas integrales 360° donde tus administradores gestionan desde la web, tus operarios y clientes interactúan desde la app móvil y tus cajas o puntos de venta operan desde aplicaciones desktop ultra rápidas con soporte de impresoras térmicas y lectores de código.',
    metaTitle: 'Sistemas Integrales Web, Móvil y Desktop | TunkiTek Perú',
    metaDescription:
      'Desarrollo de sistemas integrales a medida. Plataforma Web, App Móvil iOS/Android y Software Desktop sincronizados en tiempo real en Perú.',
    subServices: [
      'Plataforma Web Administrativa Centralizada',
      'Aplicaciones Móviles para Clientes y Personal de Campo',
      'Sistemas Desktop de Punto de Venta (POS) y Facturación Rápida',
      'Arquitectura de Datos Unificada con Sincronización en Vivo',
    ],
    keyFeatures: [
      'Una sola base de datos centralizada: los cambios en la app móvil se reflejan al instante en la web y el desktop',
      'Integración con hardware local: impresoras térmicas de tickets, lectores de código de barras y balanzas electrónicas',
      'Módulos de inventario multialmacén, control de caja chica, cobranzas y despachos',
      'Emisión formal de comprobantes electrónicos SUNAT (Boletas, Facturas y Guías de Remisión)',
      'Arquitectura elástica en la nube con respaldo continuo y cero pérdida de datos',
      'Capacitación integral a todos los niveles de la empresa y soporte técnico prioritario SLA 24/7',
    ],
    techStack: [
      { name: 'Next.js 15 & React', category: 'frontend', description: 'Plataforma web administrativa accesible desde cualquier navegador', isPopular: true },
      { name: 'Flutter', category: 'mobile', description: 'App móvil para iOS y Android de alta velocidad' },
      { name: 'Electron / Tauri', category: 'frontend', description: 'Aplicaciones desktop nativas para Windows y macOS ligeras y rápidas' },
      { name: 'Node.js & Go', category: 'backend', description: 'Motor de sincronización de alta concurrencia' },
      { name: 'PostgreSQL', category: 'database', description: 'Base de datos relacional robusta con soporte transaccional ACID' },
      { name: 'AWS Cloud', category: 'cloud', description: 'Infraestructura en la nube con réplicas de lectura y alta disponibilidad' },
    ],
    integrations: [
      { name: 'SUNAT Facturación Electrónica', tag: 'Tributario', description: 'Emisión automática y sincronizada con OSE/SUNAT', category: 'peru', badgeColor: '#003399' },
      { name: 'Impresoras Térmicas Epson / Bixolon', tag: 'Hardware', description: 'Impresión instantánea de tickets y comandas por USB y red', category: 'global' },
      { name: 'WhatsApp Business API', tag: 'Alertas', description: 'Envío de estados de cuenta y confirmación de pedidos a clientes', category: 'global' },
    ],
    capabilities: [
      {
        id: 'cap-omni-sync',
        iconName: 'Zap',
        title: 'Sincronización Total en Tiempo Real',
        description: 'Si un vendedor registra un pedido en la app móvil desde la calle, el almacén ve la orden al segundo en su pantalla y se descuenta el stock en la web.',
        metric: { value: '< 200ms', label: 'Latencia de sincronización en red' },
        details: ['Arquitectura basada en eventos WebSockets', 'Consistencia de datos garantizada', 'Cero ventas duplicadas de productos agotados'],
      },
      {
        id: 'cap-pos-hardware',
        iconName: 'Cpu',
        title: 'Integración Nativa con Hardware de Tienda',
        description: 'La aplicación desktop se comunica directamente con lectoras de código de barras, gavetas de dinero e impresoras de tickets.',
        metric: { value: 'Hardware POS', label: 'Conexión directa con periféricos' },
        details: ['Impresión directa sin cuadros de diálogo molestos', 'Lectura de códigos QR y EAN-13', 'Soporte para pantallas táctiles de caja'],
      },
      {
        id: 'cap-omni-security',
        iconName: 'ShieldAlert',
        title: 'Seguridad Empresarial y Auditoría Centralizada',
        description: 'Supervisa las operaciones de todas tus sucursales y personal desde un único panel maestro con métricas en vivo.',
        metric: { value: '360°', label: 'Visibilidad total de la operación' },
        details: ['Cierre de caja ciego con arqueo automático', 'Permisos diferenciados por sucursal y empleado', 'Historial de auditoría inmutable'],
      },
      {
        id: 'cap-multi-branch',
        iconName: 'Layers',
        title: 'Gestión Multisede y Traslados de Almacén',
        description: 'Maneja múltiples sucursales físicas y almacenes con transferencias de mercadería entre sedes mediante guías de remisión.',
        metric: { value: 'Multi-Sede', label: 'Escalable a decenas de locales' },
        details: ['Stock diferenciado por tienda', 'Precios especiales por sucursal', 'Reportes de rentabilidad comparativos'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Auditoría de Operaciones & Levantamiento de Procesos', duration: 'Semana 1-2', description: 'Inmersión en las sedes del cliente, mapeo de flujos de caja, almacén y despacho.' },
      { step: '02', title: 'Diseño de Arquitectura Unificada & Prototipos', duration: 'Semana 3-4', description: 'Estructuración de base de datos relacional y diseño UI de las 3 interfaces (Web, App, Desktop).' },
      { step: '03', title: 'Desarrollo en Paralelo de Ecosistema Digital', duration: 'Semana 5-9', description: 'Programación de backend central, app móvil en Flutter, portal web y software POS desktop.' },
      { step: '04', title: 'Pruebas Piloto en Tienda Real, Capacitación & Salida', duration: 'Semana 10-12', description: 'Instalación en hardware de tienda, capacitación presencial al personal y despliegue final.' },
    ],
    pricingHint: {
      startingAt: 'S/ 14,000',
      currency: 'S/',
      planReference: 'Plan Magnate Integral',
    },
    faq: [
      {
        question: '¿Qué pasa si en una de las tiendas físicas se cae el internet?',
        answer: 'El software desktop cuenta con modo de contingencia offline que permite seguir cobrando y emitiendo tickets localmente. Cuando el internet regresa, todos los datos se sincronizan automáticamente con la nube.',
      },
      {
        question: '¿Incluye la integración con facturación electrónica de la SUNAT?',
        answer: 'Sí. El sistema genera archivos XML firmados digitalmente, códigos QR y envía las facturas/boletas a la SUNAT u OSE homologado con respuesta en menos de 2 segundos.',
      },
    ],
  },

  'paneles-administrativos-erp-crm': {
    slug: 'paneles-administrativos-erp-crm',
    id: 'erp-crm-medida',
    category: 'mobile',
    categoryLabel: 'Gestión Empresarial & ERP',
    badge: 'ERP & CRM a Medida • Facturación SUNAT • Inventario Multisede',
    title: 'Paneles Administrativos ERP & CRM a Medida',
    shortTitle: 'ERP & CRM a Medida',
    subtitle: 'Sistemas de gestión empresarial construidos a la medida exacta de tus flujos comerciales, inventario, finanzas y clientes.',
    heroDescription:
      'Deja de forzar a tu empresa a encajar en sistemas rígidos y costosos como SAP o Zoho que te cobran licencias mensuales abusivas por cada usuario. Diseñamos un ERP/CRM a medida que refleja el 100% de tus procesos reales, con módulos de compras, ventas, cobranzas y facturación electrónica.',
    metaTitle: 'Desarrollo de Software ERP y CRM a Medida en Perú | TunkiTek',
    metaDescription:
      'Sistemas ERP y CRM a medida para empresas peruanas. Control de inventario, finanzas, facturación electrónica SUNAT y comisiones sin pagar licencias mensuales.',
    subServices: [
      'Módulos de Gestión de Inventario y Kardex Valorizado',
      'CRM Comercial con Embudos de Venta y Seguimiento de Leads',
      'Facturación Electrónica SUNAT con Cuentas por Cobrar',
      'Módulo de Compras, Proveedores y Liquidación de Caja',
    ],
    keyFeatures: [
      'Sin costos de licencias mensuales por usuario: paga una sola vez y úsalo con empleados ilimitados',
      'Kardex valorizado en tiempo real con método promedio ponderado exigido por SUNAT',
      'Seguimiento visual de oportunidades de venta (Kanban CRM) con alertas de seguimiento',
      'Módulo de cuentas por cobrar con alertas de morosidad y recordatorios automáticos por WhatsApp',
      'Liquidación de comisiones de vendedores según metas alcanzadas y márgenes de ganancia',
      'Roles de seguridad estrictos para proteger información financiera confidencial',
    ],
    techStack: [
      { name: 'Next.js 15 & React', category: 'frontend', description: 'Panel administrativo rápido con gráficos interactivos', isPopular: true },
      { name: 'PostgreSQL', category: 'database', description: 'Base de datos transaccional con máxima integridad' },
      { name: 'Node.js / Express', category: 'backend', description: 'Lógica contable y procesamiento de facturas' },
      { name: 'Tailwind CSS & Shadcn', category: 'frontend', description: 'Componentes limpios y fáciles de usar' },
      { name: 'Redis', category: 'database', description: 'Generación rápida de reportes financieros pesados' },
    ],
    integrations: [
      { name: 'SUNAT Facturación Electrónica', tag: 'Tributario', description: 'Emisión directa de comprobantes válidos ante SUNAT', category: 'peru', badgeColor: '#003399' },
      { name: 'RENIEC / SUNAT Consulta RUC', tag: 'Validación', description: 'Autocompletado de datos de clientes por DNI y RUC', category: 'peru' },
      { name: 'WhatsApp Business API', tag: 'Cobranzas', description: 'Envío de estados de cuenta y facturas PDF por chat', category: 'global' },
    ],
    capabilities: [
      {
        id: 'cap-kardex-sunat',
        iconName: 'CheckCircle2',
        title: 'Kardex Valorizado Automático según SUNAT',
        description: 'Maneja entradas, salidas, mermas y traslados con cálculo de costo promedio ponderado listo para auditorías contables.',
        metric: { value: 'Exacto', label: 'Kardex permanente valorizado' },
        details: ['Reporte formato SUNAT 13.1 y 12.1', 'Historial de costos de compra por proveedor', 'Alertas de stock mínimo'],
      },
      {
        id: 'cap-crm-kanban',
        iconName: 'Zap',
        title: 'CRM Comercial y Embudo de Ventas Kanban',
        description: 'Visualiza en qué etapa está cada cotización: lead nuevo, propuesta enviada, negociación o contrato cerrado.',
        metric: { value: '+30%', label: 'Aumento en tasa de cierre de ventas' },
        details: ['Asignación automática de prospectos', 'Historial de llamadas y notas por cliente', 'Cálculo de comisiones por vendedor'],
      },
      {
        id: 'cap-accounts-receivable',
        iconName: 'Cpu',
        title: 'Cuentas por Cobrar y Cobranza Preventiva',
        description: 'Controla facturas pendientes, fechas de vencimiento y envía estados de cuenta automáticos por WhatsApp y correo.',
        metric: { value: '-45%', label: 'En facturas vencidas' },
        details: ['Semáforo de vencimiento de facturas', 'Registro de abonos parciales y notas de crédito', 'Reporte de antigüedad de deuda'],
      },
      {
        id: 'cap-financial-reports',
        iconName: 'ShieldAlert',
        title: 'Estado de Ganancias y Pérdidas en Tiempo Real',
        description: 'Conoce la rentabilidad real de tu empresa día a día, deduciendo costos de mercadería, sueldos y gastos operativos.',
        metric: { value: 'En Vivo', label: 'Estado financiero de resultados' },
        details: ['Margen bruto y neto por línea de producto', 'Exportación de balances a Excel', 'Reporte de flujo de caja proyectado'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Levantamiento de Procesos & Flujogramas', duration: 'Semana 1-2', description: 'Reuniones con gerencia, contabilidad y ventas para plasmar las reglas de negocio exactas.' },
      { step: '02', title: 'Diseño UI/UX de Módulos & Tablas', duration: 'Semana 3', description: 'Diseño visual intuitivo de pantallas de cotización, facturación e inventario.' },
      { step: '03', title: 'Desarrollo de Módulos Core & Facturación SUNAT', duration: 'Semana 4-7', description: 'Programación de módulos, validaciones contables, endpoints de API y pruebas de cálculo.' },
      { step: '04', title: 'Migración de Datos Históricos & Capacitación', duration: 'Semana 8', description: 'Importación de clientes y productos desde Excel antiguo y entrenamiento al personal.' },
    ],
    pricingHint: {
      startingAt: 'S/ 9,000',
      currency: 'S/',
      planReference: 'Plan Conquistador ERP',
    },
    faq: [
      {
        question: '¿Tendré que pagar mensualidades por cada usuario que use el sistema?',
        answer: 'No. El software es 100% de tu empresa. Puedes crear 5, 50 o 200 usuarios sin pagar ningún costo de licencia mensual adicional.',
      },
      {
        question: '¿Se pueden importar los datos de clientes y productos de nuestro Excel actual?',
        answer: 'Sí. Diseñamos scripts de migración que limpian e importan tu base de datos actual de clientes, productos y saldos iniciales sin perder información.',
      },
    ],
  },

  // ================= 5. IA & AUTOMATIZACIÓN =================
  'automatizacion-industrial-bots': {
    slug: 'automatizacion-industrial-bots',
    id: 'automatizacion-bots',
    category: 'automation',
    categoryLabel: 'Inteligencia Artificial & Chatbots',
    badge: 'API Oficial Meta • Gemini 2.5 • Atención 24/7',
    title: 'Agentes de IA en WhatsApp Business API Oficial',
    shortTitle: 'Agentes de IA WhatsApp',
    subtitle: 'Asistentes virtuales inteligentes conectados a la API oficial de Meta capaces de cotizar, agendar citas y cerrar ventas las 24 horas.',
    heroDescription:
      'Transforma tu canal de WhatsApp en un equipo de ventas que nunca duerme. Integramos modelos de lenguaje de última generación (Gemini 2.5) entrenados con los manuales, catálogos y políticas de tu empresa, capaces de responder consultas técnicas complejas, cotizar en vivo y registrar prospectos en tu CRM.',
    metaTitle: 'Chatbots con Inteligencia Artificial para WhatsApp en Perú | TunkiTek',
    metaDescription:
      'Agentes de IA para WhatsApp Business API oficial. Cotizaciones automáticas 24/7, integración con CRM y modelos de IA avanzados en Perú.',
    subServices: [
      'Agentes de Venta y Cotización 24/7 en WhatsApp Oficial',
      'Entrenamiento de Modelos de IA con la Data de tu Empresa (RAG)',
      'Sincronización Automática de Prospectos con tu CRM',
      'Derivación Inteligente a Asesores Humanos Especializados',
    ],
    keyFeatures: [
      'Conexión mediante la API oficial de WhatsApp Cloud de Meta: cero riesgo de bloqueo de número',
      'Comprensión de lenguaje natural peruano, notas de voz, fotos de productos y archivos PDF',
      'Capacidad de consultar stock en tiempo real y cotizar productos combinados al instante',
      'Integración con Google Calendar para agendar reuniones comerciales automáticamente',
      'Panel de control en vivo para supervisar conversaciones y tomar el control cuando desees',
      'Respuestas instantáneas en menos de 2 segundos sin tiempos de espera para el cliente',
    ],
    techStack: [
      { name: 'Gemini 2.5 Pro / Flash', category: 'ai', description: 'Modelos de lenguaje multimodal de última generación', isPopular: true },
      { name: 'WhatsApp Cloud API Oficial', category: 'integration', description: 'Conexión verificada y segura respaldada por Meta' },
      { name: 'Python / LangChain', category: 'backend', description: 'Framework de agentes autónomos y recuperación RAG' },
      { name: 'Qdrant / Pinecone', category: 'database', description: 'Base de datos vectorial para búsqueda semántica precisa' },
      { name: 'Node.js & Next.js', category: 'frontend', description: 'Panel de monitoreo y reasignación de conversaciones' },
    ],
    integrations: [
      { name: 'Meta WhatsApp Cloud API', tag: 'Oficial', description: 'Número verificado con check verde y plantillas masivas', category: 'global', badgeColor: '#25D366' },
      { name: 'HubSpot / Salesforce / Zoho', tag: 'CRM', description: 'Creación automática de leads con datos de contacto', category: 'global' },
      { name: 'Google Calendar / Calendly', tag: 'Agendamiento', description: 'Reserva automática de citas comerciales', category: 'global' },
    ],
    capabilities: [
      {
        id: 'cap-ai-sales',
        iconName: 'Bot',
        title: 'Ventas Activas las 24 Horas del Día',
        description: 'El agente atiende a clientes a las 2:00 AM, responde preguntas técnicas sobre tus productos y envía el link de pago para cerrar la venta.',
        metric: { value: '24/7', label: 'Disponibilidad sin descanso' },
        details: ['Respuestas inmediatas en < 2 segundos', 'Comprensión de notas de voz y fotos', 'Transferencia fluida a asesores humanos'],
      },
      {
        id: 'cap-rag-knowledge',
        iconName: 'Zap',
        title: 'Cero Respuestas Inventadas (RAG)',
        description: 'La IA se ciñe estrictamente a los documentos, listas de precios y manuales que le proporcionas, garantizando información precisa.',
        metric: { value: '100%', label: 'Fidelidad a tus políticas de venta' },
        details: ['Base de conocimiento vectorial', 'Guardrails de seguridad de marca', 'Actualización de datos en vivo'],
      },
      {
        id: 'cap-sync-crm',
        iconName: 'Cpu',
        title: 'Sincronización Automática con tu CRM',
        description: 'Cada nuevo prospecto es registrado con su nombre, teléfono, requerimiento y presupuesto en HubSpot, Zoho o Google Sheets.',
        metric: { value: '3.5x', label: 'Más leads calificados por mes' },
        details: ['Integración con Google Calendar', 'Asignación automática a ejecutivos', 'Score de prospectos automatizado'],
      },
      {
        id: 'cap-alerts-billing',
        iconName: 'ShieldAlert',
        title: 'Cobranza Preventiva & Notificaciones',
        description: 'Dispara recordatorios automáticos de pago de cuotas o vencimientos de facturas con links de pago directo.',
        metric: { value: '-60%', label: 'En morosidad de clientes' },
        details: ['Recordatorios programados', 'Envío de estados de cuenta PDF', 'Confirmación automática de abono'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Auditoría de Flujos & Base de Conocimiento', duration: 'Semana 1', description: 'Mapeo de preguntas frecuentes, productos, objeciones de clientes y políticas comerciales.' },
      { step: '02', title: 'Entrenamiento del Agente de IA & RAG', duration: 'Semana 2', description: 'Configuración de modelos de lenguaje, bases de datos vectoriales y tono de voz de marca.' },
      { step: '03', title: 'Conexión con WhatsApp API Oficial & CRMs', duration: 'Semana 3', description: 'Integración técnica de webhooks, verificación de número ante Meta y conexión con bases de datos.' },
      { step: '04', title: 'Simulación en Vivo & Puesta en Producción', duration: 'Semana 4', description: 'Pruebas con clientes reales, calibración fina de respuestas y monitoreo activo.' },
    ],
    pricingHint: {
      startingAt: 'S/ 4,500',
      currency: 'S/',
      planReference: 'Plan Pro / Pionero',
    },
    faq: [
      {
        question: '¿Existe riesgo de que Meta bloquee mi número de WhatsApp?',
        answer: 'No. Trabajamos exclusivamente con la API Oficial de WhatsApp Cloud de Meta a través de servidores certificados, cumpliendo al 100% las políticas de uso.',
      },
      {
        question: '¿Qué pasa cuando un cliente solicita hablar con una persona?',
        answer: 'El agente de IA transfiere la conversación en tiempo real a uno de tus asesores comerciales, enviándole un resumen del requerimiento del cliente.',
      },
      {
        question: '¿El bot puede emitir cotizaciones en PDF personalizadas?',
        answer: 'Sí. El bot genera un archivo PDF con el membrete de tu empresa, productos seleccionados y precio final, y se lo envía al cliente dentro del chat.',
      },
    ],
  },

  'automatizacion-procesos-rpa': {
    slug: 'automatizacion-procesos-rpa',
    id: 'automatizacion-rpa',
    category: 'automation',
    categoryLabel: 'Productividad & RPA',
    badge: 'Automatización de Flujos • Webhooks • Eliminación de Tareas Manuales',
    title: 'Automatización de Procesos RPA & Flujos de Trabajo',
    shortTitle: 'Automatización de Procesos RPA',
    subtitle: 'Robots de software y pipelines de datos que eliminan tareas operativas repetitivas, errores humanos y horas extras.',
    heroDescription:
      'Libera a tu equipo del trabajo mecánico. Diseñamos automatizaciones de procesos con robots de software (RPA), scripts en la nube y webhooks que extraen datos de correos, sincronizan inventarios, generan facturas, envían reportes diarios y conectan sistemas que antes no se hablaban.',
    metaTitle: 'Automatización de Procesos RPA y Flujos en Perú | TunkiTek',
    metaDescription:
      'Automatización de procesos empresariales con RPA, Python y Webhooks. Elimina tareas repetitivas, ahorra costos y agiliza tu operación.',
    subServices: [
      'Extracción y Procesamiento Automático de Facturas y PDFs',
      'Sincronización Automática entre Plataformas Desconectadas',
      'Generación y Envío Programado de Reportes Ejecutivos',
      'Pipelines de Webhooks y Disparadores en Tiempo Real',
    ],
    keyFeatures: [
      'Ahorro de hasta 120 horas hombre al mes en tareas administrativas repetitivas',
      'Lectura automática de archivos adjuntos en correos electrónicos e ingreso a bases de datos',
      'Alertas inteligentes ante discrepancias o anomalías en la información procesada',
      'Integración con plataformas como n8n, Zapier, Make o microservicios Python propios',
      'Monitoreo de ejecución 24/7 con reintentos automáticos y registros de auditoría',
      'Cero errores humanos en la transcripción de datos entre sistemas contables y comerciales',
    ],
    techStack: [
      { name: 'Python / Celery', category: 'backend', description: 'Procesamiento paralelo de tareas asíncronas pesadas', isPopular: true },
      { name: 'n8n Enterprise', category: 'integration', description: 'Motor de flujos de trabajo visual autohospedado y seguro' },
      { name: 'Node.js', category: 'backend', description: 'Microservicios rápidos para manipulación de webhooks' },
      { name: 'PostgreSQL / Redis', category: 'database', description: 'Colas de tareas y almacenamiento de resultados' },
      { name: 'Docker / AWS Lambda', category: 'cloud', description: 'Ejecución serverless de bajo costo' },
    ],
    integrations: [
      { name: 'Google Sheets / Excel 365', tag: 'Ofimática', description: 'Lectura y escritura automática de hojas de cálculo', category: 'global' },
      { name: 'Slack / Microsoft Teams / WhatsApp', tag: 'Notificaciones', description: 'Alertas inmediatas ante eventos críticos del negocio', category: 'global' },
      { name: 'APIs Bancarias & SUNAT', tag: 'Finanzas', description: 'Descarga automática de estados de cuenta y comprobantes', category: 'peru' },
    ],
    capabilities: [
      {
        id: 'cap-rpa-speed',
        iconName: 'Zap',
        title: 'Procesamiento de Tareas en Segundos',
        description: 'Lo que a un asistente le tomaba 4 horas digitando datos en Excel, el robot lo ejecuta en 12 segundos sin fallas.',
        metric: { value: '98% Menos', label: 'Tiempo en tareas operativas' },
        details: ['Ejecución desatendida 24/7', 'Lectura de formatos heterogéneos', 'Validación previa de reglas contables'],
      },
      {
        id: 'cap-rpa-errorless',
        iconName: 'CheckCircle2',
        title: 'Cero Errores de Transcripción Manual',
        description: 'Elimina las fallas de digitación de números de RUC, montos o códigos de producto que generan multas y reclamos.',
        metric: { value: '0 Errores', label: 'En transcripción de datos' },
        details: ['Validación de dígitos verificadores', 'Cotejo automático de sumas y totales', 'Aislamiento de inconsistencias con alertas'],
      },
      {
        id: 'cap-rpa-n8n',
        iconName: 'Layers',
        title: 'Plataforma n8n Propia Sin Pagos por Ejecución',
        description: 'Instalamos tu propio servidor de flujos n8n en la nube para ejecutar millones de tareas sin pagar las altas tarifas de Zapier.',
        metric: { value: 'Sin Límites', label: 'De ejecuciones mensuales' },
        details: ['Servidor privado dedicado', 'Conexión a cientos de aplicaciones', 'Control total de la privacidad de tus datos'],
      },
      {
        id: 'cap-rpa-monitoring',
        iconName: 'Cpu',
        title: 'Monitoreo y Alertas en Vivo por WhatsApp y Slack',
        description: 'Recibe un reporte matutino con las métricas de las tareas completadas en la noche y alertas si algún archivo no pudo procesarse.',
        metric: { value: 'En Vivo', label: 'Notificación de estado en tiempo real' },
        details: ['Alertas a canales de soporte', 'Reintentos automáticos configurables', 'Dashboard de tareas ejecutadas'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Mapeo de Procesos Repetitivos & ROI', duration: 'Semana 1', description: 'Identificación de tareas manuales con mayor consumo de tiempo y cálculo del ahorro proyectado.' },
      { step: '02', title: 'Diseño de la Arquitectura de Automatización', duration: 'Semana 2', description: 'Definición de disparadores, transformaciones de datos y endpoints de destino.' },
      { step: '03', title: 'Programación de Scripts & Flujos de Trabajo', duration: 'Semana 3', description: 'Desarrollo en Python/n8n, conexión de credenciales y manejo de excepciones.' },
      { step: '04', title: 'Pruebas Piloto en Paralelo & Puesta en Marcha', duration: 'Semana 4', description: 'Verificación de datos en vivo contra el proceso manual y entrega de documentación.' },
    ],
    pricingHint: {
      startingAt: 'S/ 3,600',
      currency: 'S/',
      planReference: 'Plan Pro Automatización',
    },
    faq: [
      {
        question: '¿Qué tipo de tareas manuales se pueden automatizar?',
        answer: 'Cualquier tarea repetitiva basada en reglas: descargar comprobantes de la SUNAT, registrar leads en el CRM, enviar recordatorios de pago por WhatsApp, consolidar reportes de ventas de varias sedes o actualizar stock en marketplaces.',
      },
      {
        question: '¿Qué pasa si un sistema externo cambia su estructura o se cae?',
        answer: 'Nuestros pipelines incluyen manejo de excepciones que registran el error, envían una alerta inmediata a tu equipo técnico y reintentan el procesamiento automáticamente cuando el servicio se restablece.',
      },
    ],
  },

  'integracion-apis-pasarelas-pago': {
    slug: 'integracion-apis-pasarelas-pago',
    id: 'integracion-apis',
    category: 'automation',
    categoryLabel: 'Integraciones & Fintech',
    badge: 'Pasarelas de Pago • APIs Bancarias • Webhooks Seguros',
    title: 'Integración de APIs & Pasarelas de Pago',
    shortTitle: 'Integración de APIs & Pagos',
    subtitle: 'Conexión técnica de pasarelas de pago peruanas, APIs bancarias, servicios de facturación y sistemas de terceros.',
    heroDescription:
      'Conectamos tus plataformas con el ecosistema digital peruano y global. Integramos pasarelas de pago (Niubiz, Culqi, Izipay, Mercado Pago), servicios de consulta DNI/RUC en tiempo real, APIs de facturación electrónica SUNAT y webhooks de sincronización logística.',
    metaTitle: 'Integración de Pasarelas de Pago y APIs en Perú | TunkiTek',
    metaDescription:
      'Integración técnica de Niubiz, Culqi, Izipay, Mercado Pago, Yape, Plin y APIs de SUNAT / RENIEC para sistemas web y e-commerce en Perú.',
    subServices: [
      'Integración de Pasarelas de Pago Peruanas (Niubiz, Izipay, Culqi)',
      'Conexión con APIs de Facturación Electrónica SUNAT / OSE',
      'Servicios de Consulta en Vivo de DNI y RUC (RENIEC / SUNAT)',
      'Desarrollo de Webhooks y APIs REST / GraphQL Personalizadas',
    ],
    keyFeatures: [
      'Soporte completo para tokenización segura de tarjetas bajo estándares PCI-DSS',
      'Cobros en moneda nacional (PEN) y dólares (USD) con liquidación directa en tu cuenta bancaria',
      'Validación de datos de clientes en tiempo real consultando padrones oficiales de SUNAT y RENIEC',
      'Manejo seguro de credenciales con encriptación de variables de entorno y certificados SSL',
      'Registro detallado de logs de peticiones y respuestas para auditoría y resolución de disputas',
      'Garantía de funcionamiento continuo sin caídas durante picos de transacciones comerciales',
    ],
    techStack: [
      { name: 'Node.js / TypeScript', category: 'backend', description: 'Desarrollo de microservicios e integraciones API seguras', isPopular: true },
      { name: 'Python / FastAPI', category: 'backend', description: 'Procesamiento de transacciones de alta velocidad' },
      { name: 'PostgreSQL', category: 'database', description: 'Registro inmutable de transacciones y estados de pago' },
      { name: 'Redis', category: 'database', description: 'Caché de consultas de DNI/RUC para velocidad instantánea' },
      { name: 'Docker / AWS', category: 'cloud', description: 'Aislamiento en contenedores seguros con cortafuegos' },
    ],
    integrations: [
      { name: 'Niubiz / Izipay / Culqi', tag: 'Pasarelas', description: 'Integración oficial de SDKs y formularios de pago', category: 'peru', badgeColor: '#0052FF' },
      { name: 'Yape / Plin / PagoEfectivo', tag: 'Billeteras', description: 'Generación de códigos de pago CIP y QR móviles', category: 'peru', badgeColor: '#6B117B' },
      { name: 'APIs SUNAT / OSE', tag: 'Facturación', description: 'Envío de comprobantes de pago homologados', category: 'peru', badgeColor: '#003399' },
    ],
    capabilities: [
      {
        id: 'cap-api-payment-security',
        iconName: 'ShieldAlert',
        title: 'Procesamiento de Pagos Seguro y Conforme a PCI-DSS',
        description: 'Tus clientes pagan con tarjeta mediante formularios seguros tokenizados que nunca exponen datos bancarios sensibles en tu servidor.',
        metric: { value: 'PCI-DSS', label: 'Estándar de seguridad bancaria' },
        details: ['Tokenización de tarjetas en el cliente', 'Prevención de fraude 3D Secure 2.0', 'Cifrado de extremo a extremo'],
      },
      {
        id: 'cap-api-peru-native',
        iconName: 'Zap',
        title: 'Soporte 100% Nativo para Métodos de Pago Peruanos',
        description: 'Acepta Niubiz, Izipay, Culqi, Mercado Pago, PagoEfectivo, Yape y transferencias con confirmación automática.',
        metric: { value: '100% Perú', label: 'Cobertura de pasarelas locales' },
        details: ['Soporte multi-moneda Soles y Dólares', 'Recepción de webhooks de confirmación en < 1s', 'Manejo de estados pendiente, pagado y rechazado'],
      },
      {
        id: 'cap-api-dni-ruc',
        iconName: 'CheckCircle2',
        title: 'Consulta Instantánea de DNI y RUC en Menos de 200ms',
        description: 'El cliente ingresa su RUC o DNI y el sistema autocompleta automáticamente su Razón Social o Nombres y Dirección fiscal.',
        metric: { value: '< 200ms', label: 'Respuesta de consulta de datos' },
        details: ['Validación de RUC activo y habido ante SUNAT', 'Caché de consultas para reducción de costos', 'Eliminación de errores de facturación'],
      },
      {
        id: 'cap-api-custom-webhooks',
        iconName: 'Cpu',
        title: 'Arquitectura de Webhooks Resiliente a Caídas',
        description: 'Si tu tienda o sistema se reinicia, los pagos no se pierden: el sistema encola y reintenta las notificaciones de cobro con seguridad.',
        metric: { value: '0 Pagos', label: 'Perdidos por fallas de red' },
        details: ['Colas de reintento exponencial', 'Verificación de firmas criptográficas HMAC', 'Historial completo de peticiones para soporte'],
      },
    ],
    processSteps: [
      { step: '01', title: 'Auditoría Técnica & Selección de Pasarelas', duration: 'Semana 1', description: 'Evaluación de comisiones, tiempos de liquidación y compatibilidad técnica con tu plataforma.' },
      { step: '02', title: 'Desarrollo de Conectores API & Sandbox', duration: 'Semana 2', description: 'Programación de endpoints, integración de SDKs y pruebas en entorno de pruebas (Sandbox).' },
      { step: '03', title: 'Pruebas de Certificación & Homologación', duration: 'Semana 3', description: 'Ejecución de compras de prueba con tarjetas de testeo y verificación de webhooks.' },
      { step: '04', title: 'Puesta en Producción con Llaves Reales', duration: 'Semana 3-4', description: 'Pase a producción con credenciales oficiales de la empresa y monitoreo de las primeras ventas.' },
    ],
    pricingHint: {
      startingAt: 'S/ 2,600',
      currency: 'S/',
      planReference: 'Plan Start Integraciones',
    },
    faq: [
      {
        question: '¿Qué pasarela de pagos conviene más para mi negocio en Perú?',
        answer: 'Depende de tu modelo de negocio: Niubiz e Izipay son ideales para empresas formales con alto volumen que buscan menores comisiones; Culqi y Mercado Pago son perfectas para integración rápida sin trámites engorrosos.',
      },
      {
        question: '¿Puedo integrar la consulta de DNI/RUC en formularios existentes?',
        answer: 'Sí. Desarrollamos endpoints ligeros que se pueden incrustar en cualquier página web, formulario o sistema interno mediante una simple llamada JavaScript.',
      },
    ],
  },
};

// All available 18 slugs
export const ALL_SERVICE_SLUGS = Object.keys(SERVICES_DETAILED_DATA);

// Helper for resolving slug and handling backward compatibility aliases
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  const normalized = slug.toLowerCase().trim();
  
  if (SERVICES_DETAILED_DATA[normalized]) {
    return SERVICES_DETAILED_DATA[normalized];
  }
  
  // Backward compatibility alias mappings
  if (normalized === 'desarrollo-web-ecommerce' || normalized === 'web' || normalized === 'ecommerce' || normalized === 'desarrollo-web') {
    return SERVICES_DETAILED_DATA['desarrollo-web-corporativo'];
  }
  if (normalized === 'sistemas-saas' || normalized === 'sistemas-saas-apps' || normalized === 'saas') {
    return SERVICES_DETAILED_DATA['sistemas-saas-cloud'];
  }
  if (normalized === 'automatizacion-bots' || normalized === 'automatizacion-bots-ia' || normalized === 'bots' || normalized === 'automatizacion') {
    return SERVICES_DETAILED_DATA['automatizacion-industrial-bots'];
  }
  if (normalized === 'landing-pages' || normalized === 'landing-page' || normalized === 'landing') {
    return SERVICES_DETAILED_DATA['landing-pages-alta-conversion'];
  }
  if (normalized === 'wordpress' || normalized === 'woocommerce') {
    return SERVICES_DETAILED_DATA['sitios-web-wordpress-profesional'];
  }
  if (normalized === 'headless' || normalized === 'headless-commerce') {
    return SERVICES_DETAILED_DATA['ecommerce-headless-alto-rendimiento'];
  }
  if (normalized === 'apps' || normalized === 'mobile' || normalized === 'app-movil') {
    return SERVICES_DETAILED_DATA['aplicaciones-moviles-ios-android'];
  }
  if (normalized === 'erp' || normalized === 'crm') {
    return SERVICES_DETAILED_DATA['paneles-administrativos-erp-crm'];
  }
  if (normalized === 'sistemas-integrales' || normalized === 'omnichannel') {
    return SERVICES_DETAILED_DATA['sistemas-integrales-omnichannel'];
  }
  
  return undefined;
}
