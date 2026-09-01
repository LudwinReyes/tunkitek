'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Zap,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Server,
  Lock,
  GitBranch,
  Flame,
  Award,
  Users,
  Building2,
  Check,
} from 'lucide-react';
import { COMPANY_DATA } from '@/lib/data';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import {
  wordRevealContainer,
  wordRevealItem,
  visualEnterRight,
  textEnterLeft,
  ctaEnterBottom,
  bentoItemVariant,
  magneticHoverSpring,
} from '@/animations/pageMotion';

export function AboutClient() {
  const h1Words = ['Ingeniería', 'pura.', 'Cero', 'excusas.'];

  const techStackList = [
    { name: 'Next.js 15', category: 'Frontend / SSR' },
    { name: 'React 19', category: 'Core UI' },
    { name: 'TypeScript', category: 'Type Safety' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'AWS Cloud', category: 'Infrastructure' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Framer Motion', category: 'Micro-interactions' },
    { name: 'IA Generativa (Gemini 2.5)', category: 'Inteligencia Artificial' },
    { name: 'PostgreSQL', category: 'Relational DB' },
    { name: 'Docker', category: 'Containers' },
    { name: 'Redis', category: 'High Speed Cache' },
    { name: 'Python', category: 'Data & AI' },
  ];

  const adnCards = [
    {
      id: 'arquitecturas-escalables',
      title: 'Arquitecturas Escalables',
      subtitle: 'Diseñadas para soportar millones de transacciones sin colapsar jamás.',
      description:
        'Construimos sobre arquitecturas serverless, microservicios y edge networks. Tu plataforma resiste picos masivos de tráfico en Cyber Days sin caídas y con costos de servidor optimizados.',
      icon: <Server className="w-6 h-6 text-[#FF4500]" />,
      badge: 'Cero Caídas',
      points: [
        'Despliegues en Edge Computing Global',
        'Auto-escalado dinámico según demanda',
        'Bases de datos distribuidas de baja latencia',
      ],
      colSpan: 'lg:col-span-7',
      bgGlow: 'bg-[#FF4500]/10',
      borderAccent: 'border-neutral-200 dark:border-[#FF4500]/30 hover:border-[#FF4500]/70',
    },
    {
      id: 'codigo-limpio',
      title: 'Código Limpio & Propiedad 100%',
      subtitle: 'Software sin dependencias cautivas ni deuda técnica oculta.',
      description:
        'Escribimos TypeScript estructurado, tipado estricto y componentes modulares. Entregamos el 100% del código fuente a tu empresa, sin licencias mensuales forzosas ni ataduras.',
      icon: <Code2 className="w-6 h-6 text-[#FF1493]" />,
      badge: 'Código 100% Tuyo',
      points: [
        'TypeScript estricto y arquitectura modular',
        'Pipelines de CI/CD automatizados',
        'Documentación técnica y diagramas de arquitectura',
      ],
      colSpan: 'lg:col-span-5',
      bgGlow: 'bg-[#FF1493]/10',
      borderAccent: 'border-neutral-200 dark:border-[#FF1493]/30 hover:border-[#FF1493]/70',
    },
    {
      id: 'enfoque-rentabilidad',
      title: 'Enfoque Obsesivo en Rentabilidad (CRO)',
      subtitle: 'La tecnología sólo tiene valor si multiplica tus ventas y optimiza tus costos.',
      description:
        'No creamos software para ganar premios de diseño; programamos sistemas con tiempos de carga sub-segundo (< 0.8s), flujos de checkout en 1 clic y automatizaciones que reducen tus costos operativos.',
      icon: <TrendingUp className="w-6 h-6 text-[#25D366]" />,
      badge: 'Retorno de Inversión',
      points: [
        'Carga sub-segundo (< 0.8s) para maximizar conversión',
        'Integración nativa con pasarelas de pago peruanas',
        'Validación automatizada de comprobantes anti-fraude',
      ],
      colSpan: 'lg:col-span-12',
      bgGlow: 'bg-[#25D366]/10',
      borderAccent: 'border-neutral-200 dark:border-[#25D366]/30 hover:border-[#25D366]/60',
    },
  ];

  const metrics = [
    { value: '+150', label: 'Soluciones Desplegadas', detail: 'Empresas en Perú y LatAm' },
    { value: '99.99%', label: 'Uptime de Infraestructura', detail: 'SLA garantizado por contrato' },
    { value: '< 0.8s', label: 'Velocidad de Carga', detail: 'Optimización Core Web Vitals' },
    { value: '100%', label: 'Código Propio Transferido', detail: 'Cero licencias cautivas' },
  ];

  const principles = [
    {
      number: '01',
      title: 'Hablamos el idioma de tu negocio',
      description:
        'No nos escondemos detrás de tecnicismos incomprensibles. Traducimos objetivos comerciales en arquitecturas de software robustas que generan ingresos.',
    },
    {
      number: '02',
      title: 'Trato directo con Ingenieros Senior',
      description:
        'Eliminamos intermediarios y ejecutivos de cuenta burocráticos. Tu proyecto es liderado directamente por desarrolladores senior que programan cada línea de código.',
    },
    {
      number: '03',
      title: 'Transparencia y Entregables Continuos',
      description:
        'Trabajamos con sprints ágiles de 2 semanas. Cada 14 días recibes versiones funcionales en entornos de prueba para validar el progreso con tus propios ojos.',
    },
    {
      number: '04',
      title: 'Formalidad & Respaldo Legal en Perú',
      description:
        'Emitimos facturas electrónicas con RUC formal, contratos de confidencialidad (NDA) y acuerdos de nivel de servicio (SLA) con garantías firmadas.',
    },
  ];

  const whatsappUrl = `https://wa.me/51${COMPANY_DATA.phone}?text=${encodeURIComponent(
    'Hola TunkiTek, leí sobre su equipo y su enfoque de ingeniería. Me gustaría conversar con un ingeniero sobre un proyecto.'
  )}`;

  return (
    <div className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[950px] h-[480px] bg-gradient-to-r from-[#FF4500]/15 via-[#FF1493]/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] -left-40 w-[600px] h-[600px] bg-[#FF4500]/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 -right-40 w-[600px] h-[600px] bg-[#FF1493]/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= 1. HERO DE AUTORIDAD (REVELACIÓN PALABRA POR PALABRA) ================= */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717]/90 border border-neutral-200 dark:border-[#FF4500]/40 text-xs font-bold text-[#FF4500] shadow-md shadow-neutral-200/50 dark:shadow-[#FF4500]/10 backdrop-blur-md">
              <Flame className="w-3.5 h-3.5 text-[#FF4500]" />
              <span>Manifiesto de Ingeniería TunkiTek</span>
            </div>
          </motion.div>

          {/* H1 Word-by-word reveal */}
          <motion.h1
            variants={wordRevealContainer}
            initial="hidden"
            animate="visible"
            id="nosotros-main-heading"
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-neutral-950 dark:text-white tracking-tight leading-[1.08] mb-8 flex flex-wrap justify-center gap-x-3 sm:gap-x-4"
          >
            {h1Words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordRevealItem}
                className={
                  index === 0
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FF6A33] to-[#FF1493]'
                    : index === 3
                    ? 'text-neutral-950 dark:text-white underline decoration-[#FF4500]/50 decoration-wavy decoration-2 underline-offset-8'
                    : 'text-neutral-950 dark:text-white'
                }
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle with high authority */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base sm:text-xl text-neutral-600 dark:text-white/75 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Somos una agencia de tecnología e innovación fundada por ingenieros de software. No vendemos
            plantillas genéricas ni soluciones infladas: construimos software de alto rendimiento que
            transforma operaciones y escala la facturación de tu empresa.
          </motion.p>
        </div>

        {/* ================= 2. MARQUESINA DE STACK TÉCNICO (INFINITE SCROLL) ================= */}
        <div className="mb-20 sm:mb-28 overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 p-6 sm:p-8 backdrop-blur-md shadow-lg shadow-neutral-200/50 dark:shadow-2xl relative">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-neutral-500 dark:text-white/50 uppercase tracking-widest">
              Stack Tecnológico Certificado de Producción
            </span>
          </div>

          {/* Continuous CSS/Framer Marquee */}
          <div className="relative flex overflow-x-hidden group">
            {/* Left and Right Blur Fade Gradient Masks */}
            <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white dark:from-[#121212] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white dark:from-[#121212] to-transparent z-10 pointer-events-none" />

            <div className="flex shrink-0 animate-marquee items-center gap-4 py-2">
              {techStackList.concat(techStackList).map((tech, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-neutral-100 dark:bg-[#1A1A1A] border border-neutral-200 dark:border-white/10 hover:border-[#FF4500]/50 transition-colors shadow-sm dark:shadow-md flex-shrink-0"
                >
                  <div className="w-2 h-2 rounded-full bg-[#FF4500]" />
                  <span className="text-sm font-bold text-neutral-900 dark:text-white whitespace-nowrap">{tech.name}</span>
                  <span className="text-[10px] font-semibold text-neutral-500 dark:text-white/40 uppercase tracking-wider">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= 3. ADN TUNKITEK: GRID ASIMÉTRICO (ROUNDED-3XL) ================= */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717] border border-[#FF4500]/30 text-xs font-semibold text-[#FF4500] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nuestros 3 Pilares Fundamentales</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-white tracking-tight leading-tight">
              El ADN de Nuestra{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF1493]">
                Ingeniería
              </span>
            </h2>
            <p className="text-neutral-600 dark:text-white/65 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
              Diseñamos cada línea de código con tres obsesiones innegociables: velocidad, estabilidad y rentabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {adnCards.map((card) => (
              <motion.div
                key={card.id}
                variants={bentoItemVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.015, y: -4 }}
                className={`relative rounded-[2.5rem] bg-white dark:bg-[#171717] hover:bg-neutral-50 dark:hover:bg-[#1A1A1A] border ${card.borderAccent} p-8 sm:p-10 shadow-xl shadow-neutral-200/50 dark:shadow-2xl flex flex-col justify-between transition-all duration-300 overflow-hidden ${card.colSpan}`}
              >
                {/* Dynamic Ambient Glow */}
                <div
                  className={`absolute -top-20 -right-20 w-64 h-64 ${card.bgGlow} rounded-full blur-3xl pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-neutral-100 dark:bg-[#222222] border border-neutral-200 dark:border-white/10 flex items-center justify-center shadow-inner">
                      {card.icon}
                    </div>
                    <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-white/80">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight leading-snug mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm font-semibold text-neutral-800 dark:text-white/80 mb-3">{card.subtitle}</p>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-white/60 leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2.5 mb-6">
                    {card.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800 dark:text-white/85 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#FF4500] flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 pt-4 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between text-xs text-neutral-500 dark:text-white/50">
                  <span>Estándar TunkiTek</span>
                  <span className="text-[#FF4500] font-bold">100% Verificado</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= 4. MÉTRICAS DE AUTORIDAD ================= */}
        <div className="mb-20 sm:mb-28 rounded-[2.8rem] bg-white dark:bg-gradient-to-r dark:from-[#171717] dark:via-[#141414] dark:to-[#171717] border border-neutral-200 dark:border-white/10 p-8 sm:p-12 shadow-xl shadow-neutral-200/50 dark:shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 dark:divide-white/10">
            {metrics.map((metric, idx) => (
              <div key={idx} className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6' : ''}`}>
                <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF1493] mb-2 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white mb-1">{metric.label}</div>
                <div className="text-xs text-neutral-500 dark:text-white/50">{metric.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 5. PRINCIPIOS DE INGENIERÍA ================= */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717] border border-[#FF4500]/30 text-xs font-semibold text-[#FF4500] mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Cómo Trabajamos</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-white tracking-tight leading-tight">
              Principios que Guían Cada Proyecto
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {principles.map((p) => (
              <div
                key={p.number}
                className="rounded-3xl bg-white dark:bg-[#171717] border border-neutral-200 dark:border-white/10 hover:border-[#FF4500]/40 p-8 transition-colors duration-300 flex flex-col justify-between shadow-md dark:shadow-none"
              >
                <div>
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF1493] block mb-4">
                    {p.number}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-white/65 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 6. FINAL CALL TO ACTION ================= */}
        <div className="rounded-[2.8rem] bg-white dark:bg-gradient-to-br dark:from-[#1C1C1C] dark:via-[#151515] dark:to-[#121212] border border-neutral-200 dark:border-[#FF4500]/40 p-8 sm:p-14 lg:p-16 text-center max-w-4xl mx-auto shadow-xl dark:shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-[#FF4500]/25 to-[#FF1493]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4500]/10 dark:bg-[#FF4500]/15 border border-[#FF4500]/30 text-xs font-bold text-[#FF4500]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sin intermediarios ni falsas promesas</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-white tracking-tight leading-tight">
              ¿Listo para construir software de nivel mundial para tu empresa?
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
              Agenda una sesión técnica con uno de nuestros ingenieros senior. Evaluamos la viabilidad,
              arquitectura y costos de tu proyecto en menos de 24 horas.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={magneticHoverSpring}
                className="inline-flex items-center gap-3 px-8 py-4.5 rounded-full bg-gradient-to-r from-[#FF4500] via-[#FF5514] to-[#FF1493] text-white font-black text-sm sm:text-base shadow-xl shadow-[#FF4500]/30 hover:shadow-[#FF4500]/50 transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Hablar con un Ingeniero ({COMPANY_DATA.phone})</span>
              </motion.a>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4.5 rounded-full bg-neutral-100 dark:bg-[#202020] hover:bg-neutral-200 dark:hover:bg-[#282828] border border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white font-bold text-sm sm:text-base transition-colors shadow-sm"
              >
                <span>Formulario de Contacto</span>
                <ArrowRight className="w-4 h-4 text-[#FF4500]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
