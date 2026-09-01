'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  ShoppingCart,
  Cpu,
  Smartphone,
  Bot,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Activity,
  Clock,
  TrendingUp,
  AlertCircle,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { COMPANY_DATA } from '@/lib/data';
import {
  magneticHover,
  magneticTap,
} from '@/animations/servicesMotion';

export interface GroupSolution {
  slug: string;
  title: string;
  shortDesc: string;
  badge: string;
}

export interface ServiceGroup {
  id: string;
  category: 'web' | 'ecommerce' | 'saas' | 'mobile' | 'automation';
  tabLabel: string;
  icon: typeof Code2;
  badge: string;
  title: string;
  tagline: string;
  painPoint: string;
  solutionPromise: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  metrics: {
    value: string;
    label: string;
    subLabel: string;
  };
  techStack: string[];
  peruIntegrations: string[];
  startingPrice: string;
  whatsappPrefill: string;
  solutions: GroupSolution[];
}

export function Services() {
  const [activeGroupId, setActiveGroupId] = useState<string>('web-group');

  const serviceGroups: ServiceGroup[] = [
    {
      id: 'web-group',
      category: 'web',
      tabLabel: 'Web & Landing Pages',
      icon: Code2,
      badge: 'Next.js 15 • CRO • Velocidad < 0.6s',
      title: 'Desarrollo Web & Landing Pages de Alta Conversión',
      tagline: 'Páginas web corporativas y landing pages de ultra-conversión optimizadas para Core Web Vitals 99+.',
      painPoint: '¿Tu sitio web actual demora más de 3 segundos en cargar, no posiciona en Google y pierde el 60% del tráfico publicitario de tus campañas?',
      solutionPromise: 'Desarrollamos arquitecturas modernas en Next.js 15 con carga sub-segundo, SEO semántico y experiencia móvil que maximiza conversiones publicitarias.',
      description: 'Construimos infraestructuras web diseñadas para captar clientes corporativos y optimizar el retorno de inversión en Google Ads y Meta Ads. Sin plantillas pesadas, 100% código limpio y código fuente de tu propiedad.',
      imageSrc: '/assets/services/web-ecommerce.jpg',
      imageAlt: 'Ingenieros de software desarrollando páginas web corporativas y landing pages en TunkiTek Perú',
      metrics: {
        value: '< 0.6s',
        label: 'Tiempo de Carga en 4G',
        subLabel: '+45% en captación de leads calificados',
      },
      techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel / Cloudflare'],
      peruIntegrations: ['Hosting CDN Perú', 'Google Analytics 4', 'Meta Pixel', 'SEO Semántico'],
      startingPrice: 'S/ 2,500',
      whatsappPrefill: 'Hola TunkiTek, me interesa cotizar una solución del grupo de Desarrollo Web & Landing Pages.',
      solutions: [
        {
          slug: 'landing-pages-alta-conversion',
          title: 'Landing Pages de Ultra Conversión (CRO)',
          shortDesc: 'Diseño persuasivo con A/B testing para Google Ads y Meta Ads con checkout directo.',
          badge: 'Carga < 0.6s',
        },
        {
          slug: 'desarrollo-web-corporativo',
          title: 'Desarrollo Web Corporativo de Alto Impacto',
          shortDesc: 'Sitios institucionales de autoridad para empresas con arquitectura de información B2B.',
          badge: 'SEO Top 1',
        },
        {
          slug: 'sitios-web-wordpress-profesional',
          title: 'Sitios Web en WordPress & WooCommerce Pro',
          shortDesc: 'Gestión ágil de contenidos autoadministrable, optimizada y sin plugins basura.',
          badge: 'Autoadministrable',
        },
        {
          slug: 'rediseno-migracion-web-moderna',
          title: 'Rediseño & Migración a Arquitectura Moderna',
          shortDesc: 'Refactorización y migración sin pérdida de posicionamiento SEO hacia Next.js 15.',
          badge: 'Modernización',
        },
      ],
    },
    {
      id: 'ecommerce-group',
      category: 'ecommerce',
      tabLabel: 'E-Commerce & Catálogos',
      icon: ShoppingCart,
      badge: 'Headless Commerce • Yape/Plin • Checkout 1-Click',
      title: 'Comercio Electrónico & Catálogos Digitales',
      tagline: 'Tiendas online escalables, catálogos masivos B2B y checkout directo a WhatsApp para el mercado peruano.',
      painPoint: '¿Tu tienda virtual se satura en Cyber Days, sufre carritos abandonados por pasarelas engorrosas o tus clientes prefieren cotizar directamente por WhatsApp?',
      solutionPromise: 'Implementamos tiendas headless y catálogos con sincronización a WhatsApp y pagos nativos con Yape, Plin y Niubiz que reducen la fricción al mínimo.',
      description: 'Diseñamos canales de venta digital tanto para catálogos industriales de miles de productos como para tiendas minoristas de alta velocidad, integrando pasarelas peruanas y facturación SUNAT.',
      imageSrc: '/assets/services/ecommerce-catalogos.jpg',
      imageAlt: 'Especialista en e-commerce gestionando catálogo de productos y métricas de venta en TunkiTek',
      metrics: {
        value: '+65%',
        label: 'Tasa de Checkout Completado',
        subLabel: 'Soporte fluido para 10,000+ SKUs',
      },
      techStack: ['Next.js', 'Shopify Headless', 'WooCommerce API', 'PostgreSQL', 'Algolia Search'],
      peruIntegrations: ['Yape QR Dinámico', 'Plin', 'Niubiz', 'Izipay', 'SUNAT Facturación'],
      startingPrice: 'S/ 3,500',
      whatsappPrefill: 'Hola TunkiTek, me interesa cotizar una tienda virtual o catálogo digital para mi empresa.',
      solutions: [
        {
          slug: 'ecommerce-b2b-catalogos-masivos',
          title: 'E-Commerce B2B para Catálogos Masivos',
          shortDesc: 'Gestión de miles de SKUs con precios por volumen, fichas técnicas y cotizador PDF.',
          badge: '5,000+ SKUs',
        },
        {
          slug: 'ecommerce-pedidos-whatsapp',
          title: 'Catálogos Digitales con Checkout a WhatsApp',
          shortDesc: 'Tus clientes arman el carrito y envían el pedido estructurado al WhatsApp en 1 clic.',
          badge: 'Cero Comisiones',
        },
        {
          slug: 'ecommerce-headless-alto-rendimiento',
          title: 'Tiendas Virtuales Headless de Alta Escala',
          shortDesc: 'Arquitectura desacoplada para marcas que demandan velocidad extrema y alta concurrencia.',
          badge: 'Lighthouse 99',
        },
        {
          slug: 'ecommerce-tiendas-minoristas',
          title: 'E-Commerce para Tiendas Minoristas & Pymes',
          shortDesc: 'Tienda lista para vender con inventario sincronizado, pasarelas locales y cupones.',
          badge: 'Venta B2C',
        },
      ],
    },
    {
      id: 'saas-group',
      category: 'saas',
      tabLabel: 'Plataformas SaaS & Cloud',
      icon: Cpu,
      badge: 'Arquitectura Multi-Tenant • 99.99% SLA • AWS/GCP',
      title: 'Plataformas SaaS & Software Empresarial en la Nube',
      tagline: 'Software escalable para centralizar operaciones empresariales, conciliar cobranzas y procesar datos.',
      painPoint: '¿Tu empresa depende de hojas de cálculo desincronizadas, procesos manuales lentos y softwares rígidos que cobran licencias mensuales exorbitantes?',
      solutionPromise: 'Construimos tu plataforma digital a medida: dashboards en tiempo real, conciliación bancaria instantánea y arquitectura en la nube escalable.',
      description: 'Desarrollamos soluciones SaaS multi-inquilino, sistemas de validación automática de pagos para evitar fraudes con comprobantes falsos y bóvedas con cifrado documental de alta seguridad.',
      imageSrc: '/assets/services/saas-apps.jpg',
      imageAlt: 'Arquitecto de software senior monitoreando infraestructura cloud y microservicios SaaS en TunkiTek',
      metrics: {
        value: '99.99%',
        label: 'Disponibilidad Cloud (SLA)',
        subLabel: '-70% en horas operativas manuales',
      },
      techStack: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'AWS / Google Cloud'],
      peruIntegrations: ['Validación BCP/BBVA', 'Facturación SUNAT', 'Reniec DNI/RUC', 'WebSockets'],
      startingPrice: 'S/ 4,500',
      whatsappPrefill: 'Hola TunkiTek, me interesa cotizar una plataforma SaaS o sistema de software a medida.',
      solutions: [
        {
          slug: 'aplicaciones-web-a-medida',
          title: 'Aplicaciones Web & Portales de Clientes (PWA)',
          shortDesc: 'Software accesible desde cualquier navegador sin instalación, con soporte offline.',
          badge: 'Cloud Native',
        },
        {
          slug: 'sistemas-saas-cloud',
          title: 'Desarrollo de Plataformas SaaS Multi-Tenant',
          shortDesc: 'Modelos de suscripción recurrente, control de accesos granular y multi-empresa.',
          badge: 'Escalabilidad',
        },
        {
          slug: 'sistemas-validacion-pagos',
          title: 'SaaS de Conciliación Bancaria & Validación',
          shortDesc: 'Validación en menos de 2.5s de comprobantes Yape, Plin y bancos con OCR y WebSockets.',
          badge: 'Anti-Fraude',
        },
        {
          slug: 'gestion-documental-segura',
          title: 'Bóvedas de Gestión Documental Cifrada',
          shortDesc: 'Cifrado en el cliente AES-256-GCM para contratos confidenciales y auditorías legales.',
          badge: 'Zero-Knowledge',
        },
      ],
    },
    {
      id: 'mobile-group',
      category: 'mobile',
      tabLabel: 'Apps Móviles & Ecosistemas',
      icon: Smartphone,
      badge: 'iOS • Android • Flutter • Sistemas Integrales',
      title: 'Aplicaciones Móviles & Sistemas Integrales Omnicanal',
      tagline: 'Apps nativas fluidas conectadas con paneles administrativos web y sistemas centrales de tu empresa.',
      painPoint: '¿Tu equipo de campo o tus clientes necesitan operar desde el móvil pero tus sistemas actuales están fragmentados y desconectados entre sí?',
      solutionPromise: 'Creamos ecosistemas integrales: apps móviles en iOS y Android con sincronización en tiempo real conectadas a tu ERP y base de datos central.',
      description: 'Desarrollamos aplicaciones móviles nativas a 60 FPS con Flutter y paneles web de administración, garantizando una única fuente de datos unificada para toda tu organización.',
      imageSrc: '/assets/services/mobile-apps.jpg',
      imageAlt: 'Desarrolladora testeando aplicación móvil nativa y paneles empresariales en TunkiTek',
      metrics: {
        value: '1 Código',
        label: 'Despliegue Multiplataforma',
        subLabel: 'iOS + Android + Web sincronizados',
      },
      techStack: ['Flutter', 'Dart', 'React Native', 'Firebase', 'PostgreSQL', 'GraphQL'],
      peruIntegrations: ['Notificaciones Push', 'Geolocalización GPS', 'Cámara / Scanner QR', 'Biometría'],
      startingPrice: 'S/ 4,500',
      whatsappPrefill: 'Hola TunkiTek, me interesa cotizar una aplicación móvil o sistema integral web y app.',
      solutions: [
        {
          slug: 'aplicaciones-moviles-ios-android',
          title: 'Desarrollo de Aplicaciones Móviles (iOS & Android)',
          shortDesc: 'Experiencia nativa de alto rendimiento con publicación en App Store y Google Play.',
          badge: 'iOS & Android',
        },
        {
          slug: 'sistemas-integrales-omnichannel',
          title: 'Sistemas Integrales (Web + Móvil + Desktop)',
          shortDesc: 'Arquitectura unificada que conecta clientes, trabajadores en campo y directores.',
          badge: 'Omnicanal',
        },
        {
          slug: 'paneles-administrativos-erp-crm',
          title: 'Paneles ERP & CRM Administrativos a Medida',
          shortDesc: 'Tableros operativos en vivo para monitoreo de ventas, cobranzas e inventario.',
          badge: 'Gestión en Vivo',
        },
      ],
    },
    {
      id: 'automation-group',
      category: 'automation',
      tabLabel: 'Automatización & WhatsApp IA',
      icon: Bot,
      badge: 'Meta Cloud API Oficial • Gemini 2.5 • n8n',
      title: 'Automatización Industrial, RPA & Agentes con IA',
      tagline: 'Agentes conversacionales inteligentes que atienden, cotizan y registran ventas por WhatsApp 24/7.',
      painPoint: '¿Tus asesores de ventas no dan abasto para responder mensajes en WhatsApp, dejando clientes esperando por horas hasta que se van con la competencia?',
      solutionPromise: 'Implementamos agentes con IA entrenados con tu catálogo exacto que responden en segundos, envían cotizaciones y sincronizan leads en tu CRM.',
      description: 'Conectamos la API oficial de WhatsApp con Inteligencia Artificial generativa y automatización de procesos RPA para eliminar tareas repetitivas de cobranza, cotización y facturación.',
      imageSrc: '/assets/services/automatizacion-ia.jpg',
      imageAlt: 'Demostración de automatización con IA y agentes de WhatsApp en smartphone y laptop en TunkiTek',
      metrics: {
        value: '< 5s',
        label: 'Tiempo de Respuesta Automatizada',
        subLabel: 'Atención ininterrumpida 24/7',
      },
      techStack: ['Gemini 2.5', 'WhatsApp Cloud API', 'Python', 'n8n', 'LangChain', 'Vector DB'],
      peruIntegrations: ['WhatsApp Cloud API Oficial', 'Alertas SUNAT', 'HubSpot / Notion CRM', 'Pasarelas Link'],
      startingPrice: 'S/ 3,500',
      whatsappPrefill: 'Hola TunkiTek, me interesa cotizar un Bot de WhatsApp con IA o automatización de procesos.',
      solutions: [
        {
          slug: 'automatizacion-industrial-bots',
          title: 'Agentes de IA en WhatsApp Business API Oficial',
          shortDesc: 'Atención al cliente y ventas automáticas 24/7 con IA contextual y cero riesgo de bloqueo.',
          badge: 'Meta Cloud API',
        },
        {
          slug: 'automatizacion-procesos-rpa',
          title: 'Automatización de Procesos RPA & Flujos',
          shortDesc: 'Eliminación de tareas mecánicas entre hojas de cálculo, correos y sistemas contables.',
          badge: 'Cero Errores',
        },
        {
          slug: 'integracion-apis-pasarelas-pago',
          title: 'Integración de APIs & Pasarelas de Pago',
          shortDesc: 'Conexión de pasarelas peruanas, webhooks bancarios y sincronización de datos con CRMs.',
          badge: 'Integraciones API',
        },
      ],
    },
  ];

  const currentGroup = serviceGroups.find((g) => g.id === activeGroupId) || serviceGroups[0];
  const IconComponent = currentGroup.icon;

  return (
    <section id="servicios" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#FF4500]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-[#FF1493]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* ================= 1. ENCABEZADO DEL EMBUDO ================= */}
      <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717] border border-[#FF4500]/30 text-xs font-semibold text-[#FF4500] mb-4 shadow-lg shadow-[#FF4500]/10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Embudo de Soluciones de Ingeniería de Alto Nivel</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
          Ingeniería de Software Diseñada para{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FF6A33] to-[#FF1493]">
            Multiplicar tus Ingresos
          </span>
        </h2>
        <p className="text-neutral-600 dark:text-white/70 text-base sm:text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
          Explora nuestras capacidades organizadas por <strong>grupos de especialidad</strong>. Cada vertical resuelve cuellos de botella específicos para acelerar la rentabilidad y escala de tu empresa.
        </p>

        {/* ================= SELECTOR DE GRUPOS DE SERVICIOS (TABS COMPACTOS) ================= */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl sm:rounded-full bg-neutral-200/60 dark:bg-[#141414] border border-neutral-300/60 dark:border-white/10 max-w-4xl mx-auto shadow-sm">
          {serviceGroups.map((group) => {
            const GroupIcon = group.icon;
            const isActive = group.id === activeGroupId;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveGroupId(group.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF4500] to-[#FF1493] text-white shadow-md shadow-[#FF4500]/25'
                    : 'text-neutral-700 dark:text-white/70 hover:text-neutral-950 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5'
                }`}
              >
                <GroupIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#FF4500]'}`} />
                <span>{group.tabLabel}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/25 text-white' : 'bg-neutral-300/60 dark:bg-white/10 text-neutral-600 dark:text-white/60'}`}>
                  {group.solutions.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= 2. CARD MODULAR DEL GRUPO SELECCIONADO ================= */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGroup.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative rounded-[2.8rem] sm:rounded-[3.5rem] bg-white dark:bg-[#141414]/90 border border-neutral-200 dark:border-white/10 hover:border-[#FF4500]/50 p-6 sm:p-10 lg:p-12 shadow-xl shadow-neutral-200/50 dark:shadow-2xl backdrop-blur-xl transition-colors duration-300 overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF4500]/10 via-[#FF1493]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Group Informative Overview & Solutions included */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Badge + Icon */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF4500] to-[#FF1493] flex items-center justify-center text-white shadow-lg shadow-[#FF4500]/25">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#FF4500]/10 dark:bg-[#FF4500]/15 text-[#FF4500] border border-[#FF4500]/30">
                        {currentGroup.badge}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs text-neutral-600 dark:text-white/50 bg-neutral-100 dark:bg-[#1F1F1F] px-3.5 py-1 rounded-full border border-neutral-200 dark:border-white/10">
                      <span>Proyectos desde</span>
                      <span className="text-neutral-900 dark:text-white font-bold">{currentGroup.startingPrice}</span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2">
                    {currentGroup.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#FF6A33] mb-5 leading-snug">
                    {currentGroup.tagline}
                  </p>

                  {/* Problem vs Solution Comparison Box */}
                  <div className="rounded-2xl bg-neutral-50 dark:bg-[#0D0D0D] border border-neutral-200 dark:border-white/10 p-4 sm:p-5 mb-6 space-y-3 shadow-sm dark:shadow-none">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-red-500/15 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-xs sm:text-sm text-neutral-700 dark:text-white/70">
                        <span className="font-bold text-red-600 dark:text-red-400">El Problema: </span>
                        {currentGroup.painPoint}
                      </div>
                    </div>

                    <div className="h-px w-full bg-neutral-200 dark:bg-white/5" />

                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div className="text-xs sm:text-sm text-neutral-900 dark:text-white/90 font-medium">
                        <span className="font-bold text-[#25D366]">Solución TunkiTek: </span>
                        {currentGroup.solutionPromise}
                      </div>
                    </div>
                  </div>

                  {/* Soluciones Especializadas Incluidas en este Grupo */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-neutral-900 dark:text-white tracking-wide uppercase flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#FF4500]" />
                        Soluciones incluidas en esta vertical ({currentGroup.solutions.length}):
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentGroup.solutions.map((sol) => (
                        <Link
                          key={sol.slug}
                          href={`/servicios/${sol.slug}`}
                          className="group/sol flex flex-col justify-between p-3.5 rounded-2xl bg-neutral-100/80 dark:bg-[#1A1A1A] hover:bg-neutral-200/70 dark:hover:bg-[#222222] border border-neutral-200/80 dark:border-white/10 hover:border-[#FF4500]/50 transition-all duration-200 shadow-sm"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF4500] px-2 py-0.5 rounded-md bg-[#FF4500]/10 border border-[#FF4500]/20">
                                {sol.badge}
                              </span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/sol:text-[#FF4500] group-hover/sol:translate-x-0.5 group-hover/sol:-translate-y-0.5 transition-all" />
                            </div>
                            <h4 className="text-xs font-bold text-neutral-900 dark:text-white group-hover/sol:text-[#FF4500] transition-colors leading-snug">
                              {sol.title}
                            </h4>
                            <p className="text-[11px] text-neutral-600 dark:text-white/60 mt-1 line-clamp-2 leading-relaxed">
                              {sol.shortDesc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Integraciones Perú */}
                  <div className="flex flex-wrap items-center gap-2 mb-6 pt-1">
                    <span className="text-xs text-neutral-500 dark:text-white/40 font-semibold mr-1">Integraciones clave:</span>
                    {currentGroup.peruIntegrations.map((integration) => (
                      <span
                        key={integration}
                        className="px-2.5 py-0.5 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/30 text-[11px] font-semibold text-[#FF4500]"
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs del Grupo */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-neutral-200 dark:border-white/10">
                  <motion.a
                    href={`https://wa.me/${COMPANY_DATA.phone}?text=${encodeURIComponent(currentGroup.whatsappPrefill)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={magneticHover}
                    whileTap={magneticTap}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FF4500] via-[#FF5514] to-[#FF1493] text-white font-bold text-sm shadow-lg shadow-[#FF4500]/30 hover:shadow-[#FF4500]/50 transition-all duration-300"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
                    <span>Cotizar Grupo por WhatsApp</span>
                  </motion.a>

                  <motion.div whileHover={magneticHover} whileTap={magneticTap}>
                    <Link
                      href="/servicios"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-[#1E1E1E] dark:hover:bg-[#262626] border border-neutral-300 dark:border-white/20 hover:border-[#FF4500]/60 text-neutral-900 dark:text-white/90 font-semibold text-sm transition-all duration-300 w-full shadow-sm"
                    >
                      <span>Ver Catálogo Completo</span>
                      <ArrowRight className="w-4 h-4 text-[#FF4500]" />
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Right Column: Photorealistic Visual & Telemetry */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-[2.8rem] rounded-tr-[1.2rem] rounded-bl-[1.2rem] overflow-hidden border-2 border-neutral-200 dark:border-white/15 bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-[#1E1E1E] dark:to-[#0E0E0E] shadow-xl dark:shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={currentGroup.imageSrc}
                      alt={currentGroup.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover opacity-90 dark:opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 dark:from-[#0A0A0A] via-transparent to-transparent opacity-85" />
                  </div>

                  {/* Floating Metric Pill Inside Image */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="glass-card-glow rounded-2xl p-4 flex items-center gap-3.5 backdrop-blur-xl border border-[#FF4500]/40">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#FF4500] to-[#FF1493] flex items-center justify-center text-white shadow-md shadow-[#FF4500]/40 flex-shrink-0">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xl font-black text-white">{currentGroup.metrics.value}</div>
                        <div className="text-xs text-white/95 font-bold">{currentGroup.metrics.label}</div>
                        <div className="text-[11px] text-[#FF4500] font-bold mt-0.5">{currentGroup.metrics.subLabel}</div>
                      </div>
                    </div>
                  </div>

                  {/* Top Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-black/85 backdrop-blur-md text-white border border-white/15 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                      Ingeniería Senior
                    </span>
                  </div>
                </div>

                {/* Tech Stack Chips below image */}
                <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                  {currentGroup.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-[#141414] border border-neutral-200 dark:border-white/10 text-[11px] font-semibold text-neutral-700 dark:text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= 3. BANNER DE REDIRECCIÓN A PÁGINA DE SERVICIOS ================= */}
      <div className="mt-16 sm:mt-24 rounded-[3rem] bg-white dark:bg-gradient-to-br dark:from-[#171717] dark:via-[#141414] dark:to-[#171717] border border-neutral-200 dark:border-white/10 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl shadow-neutral-200/50 dark:shadow-2xl relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br from-[#FF4500]/15 to-[#FF1493]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4500]/10 dark:bg-[#FF4500]/15 border border-[#FF4500]/30 text-xs font-bold text-[#FF4500]">
            <Layers className="w-3.5 h-3.5" />
            <span>Catálogo Completo de 18 Soluciones Especializadas</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            ¿Buscas una solución técnica específica o arquitectura combinada?
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
            Revisa nuestra página de servicios donde encontrarás cada una de las 18 soluciones con sus especificaciones técnicas detalladas, cronograma de desarrollo y planes de inversión.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF4500] to-[#FF1493] text-white font-bold text-sm shadow-xl shadow-[#FF4500]/25 hover:shadow-2xl transition-all"
            >
              <span>Explorar Todos los Servicios en Detalle</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_DATA.phone}?text=${encodeURIComponent('Hola TunkiTek, deseo una sesión técnica para evaluar la solución ideal para mi empresa.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-neutral-100 dark:bg-[#202020] hover:bg-neutral-200 dark:hover:bg-[#282828] border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white font-medium text-sm transition-colors shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>Consultar con un Ingeniero</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
