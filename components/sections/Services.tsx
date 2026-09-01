'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Cpu,
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
import { SERVICES_DETAILED_DATA, ServiceDetail } from '@/lib/servicesData';
import {
  multidirectionalTextReveal,
  multidirectionalImageReveal,
  multidirectionalTextRevealInverted,
  multidirectionalImageRevealInverted,
  magneticHover,
  magneticTap,
} from '@/animations/servicesMotion';

interface FunnelService {
  id: string;
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  painPoint: string;
  solutionPromise: string;
  description: string;
  icon: typeof Code2;
  subServices: string[];
  features: string[];
  guarantees: string[];
  metrics: { value: string; label: string; subLabel: string };
  imageSrc: string;
  imageAlt: string;
  techStack: string[];
  peruIntegrations: string[];
  whatsappPrefill: string;
  startingPrice: string;
}

export function Services() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'web' | 'saas' | 'ai'>('all');

  const funnelServices: FunnelService[] = [
    {
      id: 'web-ecommerce',
      slug: 'desarrollo-web-corporativo',
      badge: 'Velocidad & Conversión CRO',
      title: 'Desarrollo Web & E-commerce de Alta Conversión',
      tagline: 'Plataformas ultrarrápidas que transforman visitantes en clientes y multiplican tu facturación.',
      painPoint: '¿Tu tienda en WooCommerce o WordPress demora más de 3 segundos en cargar y tus clientes abandonan el carrito al ver métodos de pago complicados?',
      solutionPromise: 'Desarrollamos tiendas headless en Next.js con carga sub-segundo, checkout en 1 clic y cobros directos por Yape, Plin y pasarelas peruanas.',
      description:
        'Creamos sitios web de alta gama y tiendas online personalizadas optimizadas para Core Web Vitals (99+). Eliminamos la fricción de compra mediante arquitectura móvil pensada en CRO y cobros inmediatos sin caídas durante Cyber Days.',
      icon: Code2,
      subServices: [
        'Landing Pages de Alta Conversión (CRO)',
        'E-commerce B2B/B2C (Catálogos masivos 5,000+ SKUs)',
        'Integración Nativa Yape, Plin, Niubiz e Izipay',
        'Optimización Extrema de Velocidad (WPO)',
      ],
      features: [
        'Carga ultrarrápida en menos de 0.8 segundos (Core Web Vitals 99+)',
        'Integración nativa con Yape QR dinámico, Plin y tarjetas de crédito/débito',
        'SEO Técnico estructurado para posicionar en primeros lugares de Google',
        'Diseño UI/UX adaptativo 100% responsivo y checkout optimizado para móvil',
      ],
      guarantees: [
        'Puntaje de velocidad Google Lighthouse > 95 garantizado',
        'Soporte post-lanzamiento directo con ingenieros',
        '100% de propiedad del código fuente y sin comisiones ocultas',
      ],
      metrics: {
        value: '< 0.8s',
        label: 'Tiempo de Carga Promedio',
        subLabel: '+42% en tasa de checkout completado',
      },
      imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'TunkiTek Desarrollo Web y E-commerce de Alto Rendimiento',
      techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Shopify Headless', 'Stripe / Culqi'],
      peruIntegrations: ['Yape QR', 'Plin', 'Niubiz', 'Izipay', 'SUNAT Facturación'],
      whatsappPrefill: 'Hola TunkiTek, me interesa cotizar el servicio de Desarrollo Web & E-commerce de Alta Conversión.',
      startingPrice: 'S/ 3,500',
    },
    {
      id: 'saas-apps',
      slug: 'sistemas-validacion-pagos',
      badge: 'Arquitectura Cloud Robusta',
      title: 'Sistemas SaaS & Aplicaciones a Medida',
      tagline: 'Software escalable para centralizar tus operaciones empresariales y automatizar cobranzas.',
      painPoint: '¿Tu empresa depende de hojas de Excel desincronizadas, procesos manuales lentos y softwares rígidos que cobran licencias mensuales exorbitantes?',
      solutionPromise: 'Construimos tu propia plataforma digital a medida: dashboards en tiempo real, validación bancaria automatizada y arquitectura en la nube escalable.',
      description:
        'Diseñamos y desarrollamos plataformas de software a medida, aplicaciones web progresivas (PWA) y sistemas de gestión interna (ERP/CRM/Portales B2B). Arquitecturas modulares basadas en microservicios diseñadas para procesar miles de transacciones concurrentes.',
      icon: Cpu,
      subServices: [
        'Dashboards y Paneles Administrativos en Tiempo Real',
        'Sistemas de Validación de Pagos Automatizados',
        'Portales B2B/B2C y Plataformas Multi-Inquilino',
        'Arquitectura Cloud Escalable en AWS / Google Cloud',
      ],
      features: [
        'Validación automatizada de transferencias y conciliación bancaria BCP/BBVA/Interbank',
        'Autenticación segura multi-rol con control de permisos granular (RBAC)',
        'Métricas financieras y operativas en vivo con exportación a Excel y PDF',
        'Bases de datos PostgreSQL de alta disponibilidad y respaldos automáticos',
      ],
      guarantees: [
        '99.99% SLA de disponibilidad en la nube',
        'Cifrado de datos perimetral y seguridad bancaria',
        'Capacitación completa de tu equipo y código documentado',
      ],
      metrics: {
        value: '99.99%',
        label: 'Disponibilidad de Servidores (SLA)',
        subLabel: '-65% en horas operativas manuales',
      },
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'TunkiTek Sistemas SaaS y Aplicaciones Empresariales',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Google Cloud / AWS'],
      peruIntegrations: ['Validación BCP/BBVA', 'Facturación SUNAT', 'RUC/DNI Reniec API', 'APIs Bancarias'],
      whatsappPrefill: 'Hola TunkiTek, me interesa cotizar el desarrollo de un Sistema SaaS o Software a Medida.',
      startingPrice: 'S/ 4,500',
    },
    {
      id: 'automatizacion-bots',
      slug: 'automatizacion-industrial-bots',
      badge: 'Inteligencia Artificial & WhatsApp API',
      title: 'Automatización Industrial & Bots con IA',
      tagline: 'Agentes conversacionales inteligentes que atienden, cotizan y cierran ventas por WhatsApp 24/7.',
      painPoint: '¿Tus asesores de ventas no dan abasto para responder mensajes en WhatsApp, dejando clientes esperando por horas hasta que se van con la competencia?',
      solutionPromise: 'Implementamos agentes con IA entrenados con tu catálogo exacto que responden en segundos, envían cotizaciones y registran leads en tu CRM.',
      description:
        'Implementamos agentes con Inteligencia Artificial generativa integrados a la API oficial de WhatsApp, CRMs y sistemas internos. Automatizamos flujos repetitivos de atención, cotización de productos, agendamiento de citas y sincronización de inventario.',
      icon: Bot,
      subServices: [
        'Bots de WhatsApp con IA para Ventas y Soporte 24/7',
        'Sincronización de Inventarios Multicanal en Tiempo Real',
        'Automatización de Flujos (Facturación / Alertas SUNAT)',
        'Extracción de Datos, Web Scraping e Integración CRM',
      ],
      features: [
        'Agentes de IA entrenados con tus políticas, listas de precios y stock',
        'Conexión nativa y certificada con WhatsApp Business Cloud API Oficial',
        'Sincronización automática de prospectos con HubSpot, Notion y Google Sheets',
        'Respuestas contextuales humanizadas con envío de fotos, PDFs y links de pago',
      ],
      guarantees: [
        'Respuesta instantánea a clientes en menos de 5 segundos',
        'Reducción de hasta un 70% en costos de soporte comercial',
        'Cero riesgo de bloqueo de números gracias a la API oficial de Meta',
      ],
      metrics: {
        value: '24/7',
        label: 'Atención Automatizada Continua',
        subLabel: '3x más prospectos calificados',
      },
      imageSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'TunkiTek Automatización e Inteligencia Artificial',
      techStack: ['Gemini 2.5', 'WhatsApp Cloud API', 'Python', 'n8n', 'Vector Embeddings'],
      peruIntegrations: ['WhatsApp API Oficial', 'Pasarelas de Pago Link', 'Google Sheets / CRMs', 'Alertas SUNAT'],
      whatsappPrefill: 'Hola TunkiTek, me interesa cotizar un Bot de WhatsApp con IA o Automatización de Procesos.',
      startingPrice: 'S/ 3,500',
    },
  ];

  const filteredServices = funnelServices.filter((service) => {
    if (activeCategoryFilter === 'all') return true;
    if (activeCategoryFilter === 'web') return service.id === 'web-ecommerce';
    if (activeCategoryFilter === 'saas') return service.id === 'saas-apps';
    if (activeCategoryFilter === 'ai') return service.id === 'automatizacion-bots';
    return true;
  });

  return (
    <section
      id="servicios"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200 dark:border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#FF4500]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-[#FF1493]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* ================= 1. ETAPA DE ATRACCIÓN / ENCABEZADO DEL EMBUDO ================= */}
      <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
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
          No creamos sitios estáticos ni soluciones genéricas. Desarrollamos infraestructuras digitales a medida con foco obsesivo en velocidad, automatización y retornos tangibles.
        </p>

        {/* Filtro Rápido del Embudo por Objetivo Empresarial */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-full bg-neutral-200/60 dark:bg-[#141414] border border-neutral-300/60 dark:border-white/10 max-w-3xl mx-auto">
          <button
            type="button"
            onClick={() => setActiveCategoryFilter('all')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategoryFilter === 'all'
                ? 'bg-gradient-to-r from-[#FF4500] to-[#FF1493] text-white shadow-md'
                : 'text-neutral-700 dark:text-white/70 hover:text-neutral-950 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5'
            }`}
          >
            Todas las Soluciones (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategoryFilter('web')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategoryFilter === 'web'
                ? 'bg-gradient-to-r from-[#FF4500] to-[#FF1493] text-white shadow-md'
                : 'text-neutral-700 dark:text-white/70 hover:text-neutral-950 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5'
            }`}
          >
            🛒 E-commerce & Web CRO
          </button>
          <button
            type="button"
            onClick={() => setActiveCategoryFilter('saas')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategoryFilter === 'saas'
                ? 'bg-gradient-to-r from-[#FF4500] to-[#FF1493] text-white shadow-md'
                : 'text-neutral-700 dark:text-white/70 hover:text-neutral-950 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5'
            }`}
          >
            ⚙️ Sistemas SaaS & Cloud
          </button>
          <button
            type="button"
            onClick={() => setActiveCategoryFilter('ai')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategoryFilter === 'ai'
                ? 'bg-gradient-to-r from-[#FF4500] to-[#FF1493] text-white shadow-md'
                : 'text-neutral-700 dark:text-white/70 hover:text-neutral-950 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5'
            }`}
          >
            🤖 WhatsApp con IA & Bots
          </button>
        </div>
      </div>

      {/* ================= 2. PRESENTACIÓN CONVINCENTE & DETALLADA (MIDDLE OF FUNNEL) ================= */}
      <div className="space-y-16 lg:space-y-24">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, index) => {
            const isEven = index % 2 === 1;
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                id={`mega-service-${service.id}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-[2.8rem] sm:rounded-[3.5rem] bg-white dark:bg-[#141414]/90 border border-neutral-200 dark:border-white/10 hover:border-[#FF4500]/50 p-6 sm:p-10 lg:p-12 shadow-xl shadow-neutral-200/50 dark:shadow-2xl backdrop-blur-xl transition-colors duration-300 overflow-hidden"
              >
                {/* Subtle card glow overlay */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF4500]/10 via-[#FF1493]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* 58% Text & Deep Informative Column */}
                  <motion.div
                    variants={isEven ? multidirectionalTextRevealInverted : multidirectionalTextReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className={`lg:col-span-7 flex flex-col justify-between ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Badge + Icon */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF4500] to-[#FF1493] flex items-center justify-center text-white shadow-lg shadow-[#FF4500]/25">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#FF4500]/10 dark:bg-[#FF4500]/15 text-[#FF4500] border border-[#FF4500]/30">
                            {service.badge}
                          </span>
                        </div>

                        {/* Starting price indicator */}
                        <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-600 dark:text-white/50 bg-neutral-100 dark:bg-[#1F1F1F] px-3.5 py-1 rounded-full border border-neutral-200 dark:border-white/10">
                          <span>Desde</span>
                          <span className="text-neutral-900 dark:text-white font-bold">{service.startingPrice}</span>
                        </div>
                      </div>

                      {/* Title & Value Proposition */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-[#FF6A33] mb-5 leading-snug">
                        {service.tagline}
                      </p>

                      {/* Problem vs Solution Comparison Box */}
                      <div className="rounded-2xl bg-neutral-50 dark:bg-[#0D0D0D] border border-neutral-200 dark:border-white/10 p-4 sm:p-5 mb-6 space-y-3 shadow-sm dark:shadow-none">
                        <div className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-red-500/15 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                          </div>
                          <div className="text-xs sm:text-sm text-neutral-700 dark:text-white/70">
                            <span className="font-bold text-red-600 dark:text-red-400">El Problema Común: </span>
                            {service.painPoint}
                          </div>
                        </div>

                        <div className="h-px w-full bg-neutral-200 dark:bg-white/5" />

                        <div className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <div className="text-xs sm:text-sm text-neutral-900 dark:text-white/90 font-medium">
                            <span className="font-bold text-[#25D366]">Solución TunkiTek: </span>
                            {service.solutionPromise}
                          </div>
                        </div>
                      </div>

                      {/* SubServices Grid (Especialidades Incluidas) */}
                      <div className="mb-6">
                        <div className="text-xs font-bold text-neutral-500 dark:text-white/50 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-[#FF4500]" />
                          <span>Especialidades y Módulos Desarrollados:</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.subServices.map((sub, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 p-2 rounded-xl bg-neutral-100 dark:bg-[#1A1A1A] border border-neutral-200/80 dark:border-white/5 text-xs text-neutral-800 dark:text-white/90 font-medium"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4500] flex-shrink-0" />
                              <span className="truncate">{sub}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Engineered Guarantees */}
                      <div className="space-y-2 mb-6">
                        {service.guarantees.map((guarantee, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-700 dark:text-white/80 font-medium">
                            <ShieldCheck className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                            <span>{guarantee}</span>
                          </div>
                        ))}
                      </div>

                      {/* Peruvian & Global Integrations Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-6 pt-2">
                        <span className="text-xs text-neutral-500 dark:text-white/40 font-semibold mr-1">Integraciones Perú:</span>
                        {service.peruIntegrations.map((integration) => (
                          <span
                            key={integration}
                            className="px-2.5 py-0.5 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/30 text-[11px] font-semibold text-[#FF4500]"
                          >
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dual Action CTAs for Direct Conversion */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-neutral-200 dark:border-white/10">
                      {/* Primary WhatsApp / Direct Quote */}
                      <motion.a
                        href={`https://wa.me/${COMPANY_DATA.phone}?text=${encodeURIComponent(service.whatsappPrefill)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={magneticHover}
                        whileTap={magneticTap}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FF4500] via-[#FF5514] to-[#FF1493] text-white font-bold text-sm shadow-lg shadow-[#FF4500]/30 hover:shadow-[#FF4500]/50 transition-all duration-300"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
                        <span>Cotizar por WhatsApp</span>
                      </motion.a>

                      {/* Secondary Link to Deep Technical Page */}
                      <motion.div whileHover={magneticHover} whileTap={magneticTap}>
                        <Link
                          href={`/servicios/${service.slug}`}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-[#1E1E1E] dark:hover:bg-[#262626] border border-neutral-300 dark:border-white/20 hover:border-[#FF4500]/60 text-neutral-900 dark:text-white/90 font-semibold text-sm transition-all duration-300 w-full shadow-sm"
                        >
                          <span>Ver Solución & Arquitectura</span>
                          <ArrowUpRight className="w-4 h-4 text-[#FF4500]" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* 42% Image & Proof Column with Interactive Telemetry */}
                  <motion.div
                    variants={isEven ? multidirectionalImageRevealInverted : multidirectionalImageReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className={`lg:col-span-5 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    {/* Organic Visual Container */}
                    <div className="relative rounded-[2.8rem] rounded-tr-[1.2rem] rounded-bl-[1.2rem] overflow-hidden border-2 border-neutral-200 dark:border-white/15 bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-[#1E1E1E] dark:to-[#0E0E0E] shadow-xl dark:shadow-2xl group">
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={service.imageSrc}
                          alt={service.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                          className="object-cover opacity-90 dark:opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                          referrerPolicy="no-referrer"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-[#0A0A0A] via-transparent to-transparent opacity-85" />
                      </div>

                      {/* Floating Metric Pill Inside Image Area */}
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <div className="glass-card-glow rounded-2xl p-4 flex items-center gap-3.5 backdrop-blur-xl border border-[#FF4500]/40">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#FF4500] to-[#FF1493] flex items-center justify-center text-white shadow-md shadow-[#FF4500]/40 flex-shrink-0">
                            <Activity className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xl font-black text-neutral-950 dark:text-white">{service.metrics.value}</div>
                            <div className="text-xs text-neutral-800 dark:text-white/90 font-bold">{service.metrics.label}</div>
                            <div className="text-[11px] text-[#FF4500] font-bold mt-0.5">{service.metrics.subLabel}</div>
                          </div>
                        </div>
                      </div>

                      {/* Top Status Pill */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-black/85 backdrop-blur-md text-white border border-white/15 shadow-md">
                          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                          Producción Verificada
                        </span>
                      </div>
                    </div>

                    {/* Tech Stack Chips below image */}
                    <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-[#141414] border border-neutral-200 dark:border-white/10 text-[11px] font-semibold text-neutral-700 dark:text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ================= 3. EMBUDO DE CIERRE / AUDITORÍA TÉCNICA GRATUITA ================= */}
      <div className="mt-20 sm:mt-28 rounded-[3rem] bg-white dark:bg-gradient-to-br dark:from-[#171717] dark:via-[#141414] dark:to-[#171717] border border-neutral-200 dark:border-white/10 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl shadow-neutral-200/50 dark:shadow-2xl relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br from-[#FF4500]/15 to-[#FF1493]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4500]/10 dark:bg-[#FF4500]/15 border border-[#FF4500]/30 text-xs font-bold text-[#FF4500]">
            <Clock className="w-3.5 h-3.5" />
            <span>Diagnóstico Técnico sin Costo</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            ¿No sabes cuál es la solución exacta para tu etapa de negocio?
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
            Nuestros ingenieros analizan tu tráfico actual, infraestructura y cuellos de botella para diseñar la propuesta técnica más rentable.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF4500] to-[#FF1493] text-white font-bold text-sm shadow-xl shadow-[#FF4500]/25 hover:shadow-2xl transition-all"
            >
              <span>Solicitar Evaluación Técnica Gratuita</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_DATA.phone}?text=${encodeURIComponent('Hola TunkiTek, deseo agendar una sesión técnica de evaluación para mi empresa.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-neutral-100 dark:bg-[#202020] hover:bg-neutral-200 dark:hover:bg-[#282828] border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white font-medium text-sm transition-colors shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
