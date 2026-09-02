'use client';

import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, MapPin, MessageSquare, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import {
  staggerRevealContainer,
  staggerRevealItem,
  iconHeartbeatHover,
} from '@/animations/servicesMotion';

interface ValuePillar {
  id: string;
  icon: typeof TrendingUp;
  title: string;
  badge: string;
  highlightNumber: string;
  highlightLabel: string;
  description: string;
  details: string[];
}

export function ValueProposition() {
  const pillars: ValuePillar[] = [
    {
      id: 'escalabilidad',
      icon: TrendingUp,
      title: 'Escalabilidad Real',
      badge: 'High Performance',
      highlightNumber: '10x',
      highlightLabel: 'Crecimiento de tráfico sin caídas',
      description:
        'Código modular, optimización de velocidad Core Web Vitals (99+) y arquitecturas en la nube diseñadas para soportar picos masivos de demanda sin degradar la experiencia de usuario.',
      details: [
        'Next.js 15 Serverless & Edge',
        'Bases de datos distribuidas',
        'Tiempos de carga < 0.8s',
      ],
    },
    {
      id: 'especialistas-peru',
      icon: MapPin,
      title: 'Especialistas en Perú',
      badge: 'Ecosistema Local 🇵🇪',
      highlightNumber: '100%',
      highlightLabel: 'Compatibilidad fintech y tributaria',
      description:
        'Conocemos profundamente las necesidades del mercado local: integración nativa y fluida con Yape, Plin, pasarelas de pago peruanas (Culqi, Niubiz, Izipay) y facturación electrónica SUNAT.',
      details: [
        'Cobros QR y billeteras móviles',
        'Facturación y boletas SUNAT',
        'Diseño adaptado al usuario peruano',
      ],
    },
    {
      id: 'soporte-directo',
      icon: MessageSquare,
      title: 'Soporte Directo A1',
      badge: 'Zero Burocracia',
      highlightNumber: '< 15min',
      highlightLabel: 'Tiempo de respuesta técnica',
      description:
        'Sin burocracia ni intermediarios lentos. Comunicación directa vía WhatsApp con los ingenieros que construyen tu solución y squads dedicados que evolucionan tu producto con agilidad.',
      details: [
        'Canal privado de WhatsApp & Slack',
        'SLA empresarial garantizado',
        'Monitoreo proactivo 24/7',
      ],
    },
  ];

  return (
    <section
      id="propuesta-de-valor"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF4500]/10 via-[#FF1493]/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header / Copy H2 */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717] border border-[#FF4500]/30 text-xs font-semibold text-[#FF4500] mb-5 shadow-lg shadow-[#FF4500]/10"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Nuestra Propuesta de Valor</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.18]"
        >
          ¿Por qué elegir TunkiTek como tu{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FF6A33] to-[#FF1493]">
            socio estratégico de ingeniería?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-white/65 max-w-2xl mx-auto leading-relaxed"
        >
          Fusionamos ingeniería de software de élite, visión de negocio y agilidad operativa para construir plataformas que lideran el mercado.
        </motion.p>
      </div>

      {/* 3-Column Staggered Grid */}
      <motion.div
        variants={staggerRevealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
      >
        {pillars.map((pillar) => {
          const IconComponent = pillar.icon;
          return (
            <motion.div
              key={pillar.id}
              id={`value-card-${pillar.id}`}
              variants={staggerRevealItem}
              whileHover="hover"
              initial="initial"
              className="group relative rounded-[2.2rem] bg-white dark:bg-[#171717]/90 hover:bg-neutral-50 dark:hover:bg-[#1C1C1C] border border-neutral-200 dark:border-white/10 hover:border-[#FF4500]/60 p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-neutral-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-[#FF4500]/15 backdrop-blur-md overflow-hidden"
            >
              {/* Dynamic Glow aura on hover */}
              <div className="absolute -inset-px rounded-[2.2rem] bg-gradient-to-br from-[#FF4500]/0 via-[#FF4500]/0 to-[#FF1493]/0 group-hover:from-[#FF4500]/20 group-hover:via-[#FF4500]/5 group-hover:to-[#FF1493]/20 transition-all duration-500 pointer-events-none -z-10" />

              <div>
                {/* Top Bar: Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    variants={iconHeartbeatHover}
                    className="w-14 h-14 rounded-2xl bg-neutral-100 dark:bg-gradient-to-tr dark:from-[#222222] dark:to-[#171717] border border-neutral-200 dark:border-white/15 flex items-center justify-center text-[#FF4500] shadow-inner group-hover:border-[#FF4500]/60 group-hover:bg-[#FF4500]/10 transition-colors duration-300"
                  >
                    <IconComponent className="w-7 h-7" />
                  </motion.div>

                  <span className="text-[11px] font-bold tracking-wider px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-white/75 group-hover:border-[#FF4500]/40 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                    {pillar.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-white mb-3 group-hover:text-[#FF4500] transition-colors duration-200">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-white/70 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Key Metric Highlight */}
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#0F0F0F] border border-neutral-200 dark:border-white/10 group-hover:border-[#FF4500]/30 transition-colors mb-6">
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF1493]">
                    {pillar.highlightNumber}
                  </div>
                  <div className="text-xs font-medium text-neutral-500 dark:text-white/60 mt-0.5">
                    {pillar.highlightLabel}
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6">
                  {pillar.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-neutral-700 dark:text-white/80 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#FF4500] flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-4 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-neutral-500 dark:text-white/50">Garantía TunkiTek</span>
                <a
                  href="#servicios"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#FF4500] group-hover:text-[#FF6A33] transition-colors"
                >
                  <span>Explorar cómo</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
