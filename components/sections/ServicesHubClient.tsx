'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Bot,
  Layers,
  ArrowUpRight,
  Code2,
  Cpu,
  ShoppingBag,
  ShieldCheck,
  CreditCard,
  Smartphone,
  Flame,
  Search,
  Workflow,
  Layout,
  RefreshCw,
  Server,
  Database,
  Globe,
} from 'lucide-react';
import { ServiceDetail } from '@/lib/servicesData';
import { COMPANY_DATA } from '@/lib/data';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import {
  servicesHubContainer,
  servicesHeaderReveal,
  bentoCardVariant,
  cardHoverTransition,
} from '@/animations/servicesHubMotion';

interface ServicesHubClientProps {
  services: ServiceDetail[];
}

type CategoryFilter = 'all' | 'web' | 'ecommerce' | 'saas' | 'mobile' | 'automation';

export function ServicesHubClient({ services }: ServicesHubClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(
    () => [
      { id: 'all', label: 'Todas las Soluciones', count: services.length },
      { id: 'web', label: 'Web & Landing Pages', count: services.filter((s) => s.category === 'web').length },
      { id: 'ecommerce', label: 'E-Commerce & Ventas', count: services.filter((s) => s.category === 'ecommerce').length },
      { id: 'saas', label: 'SaaS & Software Cloud', count: services.filter((s) => s.category === 'saas').length },
      { id: 'mobile', label: 'Apps Móviles & Sistemas', count: services.filter((s) => s.category === 'mobile').length },
      { id: 'automation', label: 'Automatización & IA', count: services.filter((s) => s.category === 'automation').length },
    ],
    [services]
  );

  const filteredServices = useMemo(() => {
    let result = services;

    if (selectedCategory !== 'all') {
      result = result.filter((s) => s.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.subtitle.toLowerCase().includes(q) ||
          s.shortTitle.toLowerCase().includes(q) ||
          s.categoryLabel.toLowerCase().includes(q) ||
          s.subServices.some((sub) => sub.toLowerCase().includes(q)) ||
          s.techStack.some((tech) => tech.name.toLowerCase().includes(q))
      );
    }

    return result;
  }, [services, selectedCategory, searchQuery]);

  const getCardTheme = (slug: string) => {
    switch (slug) {
      // 1. Web & Landing
      case 'landing-pages-alta-conversion':
        return {
          icon: <Flame className="w-6 h-6 text-[#FF4500]" />,
          borderColor: 'border-neutral-200 dark:border-[#FF4500]/30 hover:border-[#FF4500]/70',
          accentText: 'text-[#FF4500]',
          glow: 'bg-[#FF4500]/15',
          ctaText: 'Ver Landing CRO',
          metricHighlight: 'Carga < 0.6s',
          bgPill: 'bg-[#FF4500]/10 text-[#FF4500] border-[#FF4500]/25',
        };
      case 'desarrollo-web-corporativo':
        return {
          icon: <Code2 className="w-6 h-6 text-[#FF4500]" />,
          borderColor: 'border-neutral-200 dark:border-[#FF4500]/30 hover:border-[#FF4500]/70',
          accentText: 'text-[#FF4500]',
          glow: 'bg-[#FF4500]/15',
          ctaText: 'Ver Web Corporativa',
          metricHighlight: 'Carga < 0.8s',
          bgPill: 'bg-[#FF4500]/10 text-[#FF4500] border-[#FF4500]/25',
        };
      case 'sitios-web-wordpress-profesional':
        return {
          icon: <Globe className="w-6 h-6 text-[#0073AA]" />,
          borderColor: 'border-neutral-200 dark:border-[#0073AA]/30 hover:border-[#0073AA]/70',
          accentText: 'text-[#0073AA]',
          glow: 'bg-[#0073AA]/15',
          ctaText: 'Ver WordPress Pro',
          metricHighlight: 'Cero Plugins Lentos',
          bgPill: 'bg-[#0073AA]/10 text-[#0073AA] border-[#0073AA]/25',
        };
      case 'rediseno-migracion-web-moderna':
        return {
          icon: <RefreshCw className="w-6 h-6 text-[#EC4899]" />,
          borderColor: 'border-neutral-200 dark:border-[#EC4899]/30 hover:border-[#EC4899]/70',
          accentText: 'text-[#EC4899]',
          glow: 'bg-[#EC4899]/15',
          ctaText: 'Ver Migración a Next.js',
          metricHighlight: '100% SEO Protegido',
          bgPill: 'bg-[#EC4899]/10 text-[#EC4899] border-[#EC4899]/25',
        };

      // 2. E-Commerce
      case 'ecommerce-b2b-catalogos-masivos':
        return {
          icon: <ShoppingBag className="w-6 h-6 text-[#FF5514]" />,
          borderColor: 'border-neutral-200 dark:border-[#FF5514]/30 hover:border-[#FF5514]/70',
          accentText: 'text-[#FF5514]',
          glow: 'bg-[#FF5514]/15',
          ctaText: 'Ver E-Commerce B2B',
          metricHighlight: '50,000+ SKUs',
          bgPill: 'bg-[#FF5514]/10 text-[#FF5514] border-[#FF5514]/25',
        };
      case 'ecommerce-pedidos-whatsapp':
        return {
          icon: <Zap className="w-6 h-6 text-[#25D366]" />,
          borderColor: 'border-neutral-200 dark:border-[#25D366]/30 hover:border-[#25D366]/70',
          accentText: 'text-[#25D366]',
          glow: 'bg-[#25D366]/15',
          ctaText: 'Ver Catálogo WhatsApp',
          metricHighlight: 'Checkout 1 Clic',
          bgPill: 'bg-[#25D366]/10 text-[#25D366] border-[#25D366]/25',
        };
      case 'ecommerce-headless-alto-rendimiento':
        return {
          icon: <Server className="w-6 h-6 text-[#9333EA]" />,
          borderColor: 'border-neutral-200 dark:border-[#9333EA]/30 hover:border-[#9333EA]/70',
          accentText: 'text-[#9333EA]',
          glow: 'bg-[#9333EA]/15',
          ctaText: 'Ver Headless Commerce',
          metricHighlight: 'Storefront API',
          bgPill: 'bg-[#9333EA]/10 text-[#9333EA] border-[#9333EA]/25',
        };
      case 'ecommerce-tiendas-minoristas':
        return {
          icon: <ShoppingBag className="w-6 h-6 text-[#F59E0B]" />,
          borderColor: 'border-neutral-200 dark:border-[#F59E0B]/30 hover:border-[#F59E0B]/70',
          accentText: 'text-[#F59E0B]',
          glow: 'bg-[#F59E0B]/15',
          ctaText: 'Ver Tienda Online B2C',
          metricHighlight: 'Pasarelas Perú',
          bgPill: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/25',
        };

      // 3. SaaS & Cloud
      case 'aplicaciones-web-a-medida':
        return {
          icon: <Layout className="w-6 h-6 text-[#3B82F6]" />,
          borderColor: 'border-neutral-200 dark:border-[#3B82F6]/30 hover:border-[#3B82F6]/70',
          accentText: 'text-[#3B82F6]',
          glow: 'bg-[#3B82F6]/15',
          ctaText: 'Ver App Web / PWA',
          metricHighlight: 'PWA Instalable',
          bgPill: 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/25',
        };
      case 'sistemas-saas-cloud':
        return {
          icon: <Cpu className="w-6 h-6 text-[#6366F1]" />,
          borderColor: 'border-neutral-200 dark:border-[#6366F1]/30 hover:border-[#6366F1]/70',
          accentText: 'text-[#6366F1]',
          glow: 'bg-[#6366F1]/15',
          ctaText: 'Ver Plataforma SaaS',
          metricHighlight: 'Multi-Tenant',
          bgPill: 'bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/25',
        };
      case 'sistemas-validacion-pagos':
        return {
          icon: <CreditCard className="w-6 h-6 text-[#0284C7]" />,
          borderColor: 'border-neutral-200 dark:border-[#0284C7]/30 hover:border-[#0284C7]/70',
          accentText: 'text-[#0284C7]',
          glow: 'bg-[#0284C7]/15',
          ctaText: 'Ver Validación Pagos',
          metricHighlight: 'Anti-Fraude Yape',
          bgPill: 'bg-[#0284C7]/10 text-[#0284C7] border-[#0284C7]/25',
        };
      case 'gestion-documental-segura':
        return {
          icon: <ShieldCheck className="w-6 h-6 text-[#8B5CF6]" />,
          borderColor: 'border-neutral-200 dark:border-[#8B5CF6]/30 hover:border-[#8B5CF6]/70',
          accentText: 'text-[#8B5CF6]',
          glow: 'bg-[#8B5CF6]/15',
          ctaText: 'Ver Gestión Documental',
          metricHighlight: 'Cifrado AES-256',
          bgPill: 'bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/25',
        };

      // 4. Móvil & Sistemas Integrales
      case 'aplicaciones-moviles-ios-android':
        return {
          icon: <Smartphone className="w-6 h-6 text-[#10B981]" />,
          borderColor: 'border-neutral-200 dark:border-[#10B981]/30 hover:border-[#10B981]/70',
          accentText: 'text-[#10B981]',
          glow: 'bg-[#10B981]/15',
          ctaText: 'Ver App Móvil Flutter',
          metricHighlight: 'iOS & Android 60fps',
          bgPill: 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/25',
        };
      case 'sistemas-integrales-omnichannel':
        return {
          icon: <Layers className="w-6 h-6 text-[#F97316]" />,
          borderColor: 'border-neutral-200 dark:border-[#F97316]/30 hover:border-[#F97316]/70',
          accentText: 'text-[#F97316]',
          glow: 'bg-[#F97316]/15',
          ctaText: 'Ver Sistema Integral',
          metricHighlight: 'Web + App + Desktop',
          bgPill: 'bg-[#F97316]/10 text-[#F97316] border-[#F97316]/25',
        };
      case 'paneles-administrativos-erp-crm':
        return {
          icon: <Database className="w-6 h-6 text-[#E11D48]" />,
          borderColor: 'border-neutral-200 dark:border-[#E11D48]/30 hover:border-[#E11D48]/70',
          accentText: 'text-[#E11D48]',
          glow: 'bg-[#E11D48]/15',
          ctaText: 'Ver ERP & CRM a Medida',
          metricHighlight: 'Cero Licencias / Mes',
          bgPill: 'bg-[#E11D48]/10 text-[#E11D48] border-[#E11D48]/25',
        };

      // 5. Automatización & IA
      case 'automatizacion-industrial-bots':
        return {
          icon: <Bot className="w-6 h-6 text-[#10A37F]" />,
          borderColor: 'border-neutral-200 dark:border-[#10A37F]/30 hover:border-[#10A37F]/70',
          accentText: 'text-[#10A37F]',
          glow: 'bg-[#10A37F]/15',
          ctaText: 'Ver Agente IA WhatsApp',
          metricHighlight: 'Atención 24/7 IA',
          bgPill: 'bg-[#10A37F]/10 text-[#10A37F] border-[#10A37F]/25',
        };
      case 'automatizacion-procesos-rpa':
        return {
          icon: <Workflow className="w-6 h-6 text-[#14B8A6]" />,
          borderColor: 'border-neutral-200 dark:border-[#14B8A6]/30 hover:border-[#14B8A6]/70',
          accentText: 'text-[#14B8A6]',
          glow: 'bg-[#14B8A6]/15',
          ctaText: 'Ver Automatización RPA',
          metricHighlight: '-98% Tiempo Manual',
          bgPill: 'bg-[#14B8A6]/10 text-[#14B8A6] border-[#14B8A6]/25',
        };
      case 'integracion-apis-pasarelas-pago':
        return {
          icon: <CreditCard className="w-6 h-6 text-[#06B6D4]" />,
          borderColor: 'border-neutral-200 dark:border-[#06B6D4]/30 hover:border-[#06B6D4]/70',
          accentText: 'text-[#06B6D4]',
          glow: 'bg-[#06B6D4]/15',
          ctaText: 'Ver Integración de APIs',
          metricHighlight: 'PCI-DSS & SUNAT',
          bgPill: 'bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/25',
        };

      default:
        return {
          icon: <Code2 className="w-6 h-6 text-[#FF4500]" />,
          borderColor: 'border-neutral-200 dark:border-white/10 hover:border-[#FF4500]/50',
          accentText: 'text-[#FF4500]',
          glow: 'bg-[#FF4500]/10',
          ctaText: 'Desplegar Solución',
          metricHighlight: 'SLA 99.99%',
          bgPill: 'bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-white/70 border-neutral-200 dark:border-white/10',
        };
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Background ambient glowing gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-r from-[#FF4500]/15 via-[#FF1493]/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[35%] -left-32 w-[600px] h-[600px] bg-[#FF4500]/10 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-[600px] h-[600px] bg-[#FF1493]/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= 1. HERO DE SERVICIOS ================= */}
        <motion.div
          variants={servicesHubContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-14"
        >
          {/* Top Badge */}
          <motion.div variants={servicesHeaderReveal} className="inline-block mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717]/90 border border-neutral-200 dark:border-[#FF4500]/40 text-xs font-bold text-[#FF4500] shadow-md shadow-neutral-200/50 dark:shadow-[#FF4500]/10 backdrop-blur-md">
              <Flame className="w-3.5 h-3.5" />
              <span>18 Soluciones de Ingeniería de Software de Alto Impacto</span>
            </div>
          </motion.div>

          {/* H1 Title */}
          <motion.h1
            variants={servicesHeaderReveal}
            id="services-hub-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 dark:text-white tracking-tight leading-[1.12] mb-6"
          >
            Catálogo Completo de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FF6A33] to-[#FF1493]">
              Servicios Digitales
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={servicesHeaderReveal}
            className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Cada solución está construida con arquitectura a medida, sin plantillas genéricas.
            Selecciona la tecnología y modelo que resolverá los cuellos de botella de tu empresa.
          </motion.p>
        </motion.div>

        {/* ================= 2. LIVE SEARCH & CATEGORY FILTERS ================= */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 space-y-5">
          {/* Search Input Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-neutral-400 dark:text-white/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar servicio (ej. WhatsApp, Flutter, Next.js, ERP, Yape)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/35 text-xs sm:text-sm focus:outline-none focus:border-[#FF4500] shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700 dark:hover:text-white px-2 py-0.5"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-3xl sm:rounded-full bg-neutral-200/60 dark:bg-[#141414] border border-neutral-300/60 dark:border-white/10 backdrop-blur-xl shadow-md dark:shadow-xl max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as CategoryFilter)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-[#FF4500] to-[#FF1493] text-white shadow-lg shadow-[#FF4500]/25'
                      : 'text-neutral-700 dark:text-white/60 hover:text-neutral-950 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      selectedCategory === cat.id
                        ? 'bg-white/20 text-white'
                        : 'bg-neutral-300/60 dark:bg-white/10 text-neutral-700 dark:text-white/50'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= 3. BENTO GRID CON LAS 18 SOLUCIONES ================= */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-[#141414] rounded-3xl border border-neutral-200 dark:border-white/10 max-w-lg mx-auto">
            <Search className="w-8 h-8 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
              No se encontraron servicios
            </h3>
            <p className="text-xs text-neutral-600 dark:text-white/60 mb-4">
              Prueba con otro término de búsqueda o limpia los filtros.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-full bg-[#FF4500] text-white text-xs font-bold"
            >
              Ver todos los 18 servicios
            </button>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              variants={servicesHubContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 15 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
            >
              {filteredServices.map((service) => {
                const theme = getCardTheme(service.slug);

                const whatsappUrl = `https://wa.me/51${COMPANY_DATA.phone}?text=${encodeURIComponent(
                  `Hola TunkiTek, deseo cotizar el servicio de ${service.title} para mi empresa.`
                )}`;

                return (
                  <motion.div
                    key={service.slug}
                    id={`service-card-${service.slug}`}
                    variants={bentoCardVariant}
                    whileHover={cardHoverTransition}
                    className={`group relative flex flex-col justify-between rounded-[2.5rem] bg-white dark:bg-[#171717] hover:bg-neutral-50 dark:hover:bg-[#1A1A1A] border ${theme.borderColor} p-7 sm:p-8 transition-all duration-300 shadow-xl shadow-neutral-200/50 dark:shadow-2xl backdrop-blur-xl overflow-hidden`}
                  >
                    {/* Dynamic Ambient Background Glow */}
                    <div
                      className={`absolute -top-24 -right-24 w-60 h-60 ${theme.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    />

                    {/* Card Top Section */}
                    <div className="relative z-10">
                      {/* Header Row: Category Badge + Metric Highlight */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-[#222222] border border-neutral-200 dark:border-white/10 group-hover:border-[#FF4500]/40 flex items-center justify-center shadow-inner transition-colors duration-300">
                          {theme.icon}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${theme.bgPill}`}>
                            {theme.metricHighlight}
                          </span>
                        </div>
                      </div>

                      {/* Category Label */}
                      <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-white/50 mb-1.5">
                        {service.categoryLabel}
                      </div>

                      {/* Service Title */}
                      <h2 className="text-lg sm:text-xl font-black text-neutral-900 dark:text-white tracking-tight leading-snug mb-2.5 group-hover:text-[#FF4500] transition-colors">
                        {service.title}
                      </h2>

                      {/* Subtitle / Value Proposition */}
                      <p className="text-xs text-neutral-600 dark:text-white/65 leading-relaxed mb-5 font-normal line-clamp-3">
                        {service.subtitle}
                      </p>

                      {/* Divider */}
                      <div className="h-px w-full bg-neutral-200 dark:bg-white/10 mb-4" />

                      {/* Key Capabilities Checklist */}
                      <div className="space-y-2 mb-5">
                        <div className="text-[10px] font-bold text-neutral-500 dark:text-white/45 uppercase tracking-wider">
                          Capacidades Destacadas:
                        </div>
                        <ul className="space-y-1.5">
                          {service.subServices.slice(0, 3).map((subItem, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs text-neutral-800 dark:text-white/85 font-medium leading-tight"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4500] flex-shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{subItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.techStack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-white/60"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Bottom CTA & Direct WhatsApp Quote */}
                    <div className="relative z-10 pt-4 border-t border-neutral-200 dark:border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-white/50">
                        <span>Inversión estimada:</span>
                        <span className="text-neutral-900 dark:text-white font-bold text-xs sm:text-sm">
                          Desde {service.pricingHint.startingAt}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        {/* Primary CRO Action: Explore Architecture & Strategy */}
                        <Link
                          href={`/servicios/${service.slug}`}
                          id={`view-solution-${service.slug}`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full bg-neutral-900 dark:bg-[#242424] hover:bg-neutral-800 dark:hover:bg-gradient-to-r dark:hover:from-[#FF4500] dark:hover:to-[#FF1493] text-white font-bold text-xs transition-all duration-300 shadow-md text-center"
                        >
                          <span>{theme.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        {/* Direct WhatsApp Quote Button */}
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center p-2.5 rounded-full bg-neutral-100 dark:bg-[#202020] hover:bg-[#25D366] hover:text-white border border-neutral-300 dark:border-white/10 hover:border-[#25D366] text-neutral-700 dark:text-white/70 transition-all duration-300"
                          title="Cotizar directamente por WhatsApp"
                        >
                          <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}

        {/* ================= 4. BOTTOM ARCHITECTURE & ROI AUDIT CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-24 rounded-[2.5rem] bg-white dark:bg-gradient-to-br dark:from-[#171717] dark:via-[#141414] dark:to-[#171717] border border-neutral-200 dark:border-white/10 p-8 sm:p-12 lg:p-14 text-center max-w-4xl mx-auto shadow-xl dark:shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-gradient-to-br from-[#FF4500]/15 to-[#FF1493]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/30 text-xs font-bold text-[#FF4500]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Diagnóstico de Arquitectura & ROI</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-neutral-900 dark:text-white tracking-tight leading-tight">
              ¿No estás seguro de qué solución desplegar primero?
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
              Agenda una sesión técnica de 20 minutos con un Ingeniero de Software Senior. Evaluamos los cuellos de
              botella de tu negocio y te entregamos un plan de arquitectura sin compromiso.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF4500] via-[#FF5514] to-[#FF1493] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#FF4500]/25 hover:shadow-2xl transition-all"
              >
                <span>Agendar Consultoría Técnica</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/51${COMPANY_DATA.phone}?text=${encodeURIComponent(
                  'Hola TunkiTek, deseo hablar con un ingeniero para una consultoría técnica rápida sobre mi proyecto.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-neutral-100 dark:bg-[#202020] hover:bg-neutral-200 dark:hover:bg-[#282828] border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white font-bold text-sm sm:text-base transition-colors shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
