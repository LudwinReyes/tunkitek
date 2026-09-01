'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Layers,
  ShieldCheck,
  ExternalLink,
  MessageSquare,
  Zap,
  ArrowUpRight,
  Filter,
  X,
  Code2,
} from 'lucide-react';
import {
  CASES_DATA,
  CATEGORIES_LIST,
  CaseCategory,
  CaseStudyItem,
} from '@/lib/casesData';
import { COMPANY_DATA } from '@/lib/data';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import {
  wordRevealContainer,
  wordRevealChild,
  filterPillsContainer,
  filterGridContainer,
  filterPresence,
  magneticHover,
  magneticTap,
  floatingBadge,
} from '@/animations/casesMotion';

export function CasesClient() {
  const [selectedCategory, setSelectedCategory] = useState<CaseCategory>('Todos');
  const [selectedCaseModal, setSelectedCaseModal] = useState<CaseStudyItem | null>(null);

  // Filter cases based on selected category
  const filteredCases =
    selectedCategory === 'Todos'
      ? CASES_DATA
      : CASES_DATA.filter((item) => item.category === selectedCategory);

  // Headline words for word-by-word reveal
  const headlineWords = ['Resultados', 'Reales.', 'Desafíos', 'Superados.'];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background ambient gradient orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-r from-[#FF4500]/15 via-[#FF1493]/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[45%] -right-40 w-[600px] h-[600px] bg-[#FF4500]/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] -left-40 w-[600px] h-[600px] bg-[#FF1493]/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* ================= 1. HERO INTERACTIVO ================= */}
      <section className="relative pt-10 pb-12 sm:pt-16 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717]/90 border border-neutral-200 dark:border-[#FF4500]/40 text-xs font-bold text-[#FF4500] mb-6 shadow-md shadow-neutral-200/50 dark:shadow-[#FF4500]/10 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Prueba Social & Casos de Éxito</span>
        </motion.div>

        {/* H1 with Word-by-Word Reveal */}
        <motion.h1
          variants={wordRevealContainer}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-neutral-950 dark:text-white tracking-tight leading-[1.1] mb-6 flex flex-wrap justify-center gap-x-3.5 sm:gap-x-5"
        >
          {headlineWords.map((word, index) => {
            const isHighlight = index >= 2;
            return (
              <motion.span
                key={word}
                variants={wordRevealChild}
                className={
                  isHighlight
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FF6A33] to-[#FF1493]'
                    : 'text-neutral-950 dark:text-white'
                }
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base sm:text-xl text-neutral-600 dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          Descubre cómo transformamos desafíos operacionales complejos en plataformas de alta velocidad, automatizaciones inteligentes y sistemas de conversión para empresas líderes.
        </motion.p>

        {/* ================= 2. FILTROS (PÍLDORAS MAGNÉTICAS CON LAYOUTID) ================= */}
        <motion.div
          variants={filterPillsContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-2xl mx-auto p-2 rounded-full bg-neutral-200/60 dark:bg-[#141414]/90 border border-neutral-300/60 dark:border-white/10 backdrop-blur-xl shadow-md dark:shadow-2xl"
        >
          {CATEGORIES_LIST.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                id={`filter-btn-${category.toLowerCase()}`}
                onClick={() => setSelectedCategory(category)}
                className="relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-200 z-10 select-none focus:outline-none cursor-pointer"
              >
                {/* Active animated sliding pill background */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryFilterTab"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF4500] via-[#FF5514] to-[#FF1493] shadow-lg shadow-[#FF4500]/30 -z-10"
                  />
                )}
                <span className={isActive ? 'text-white' : 'text-neutral-700 dark:text-white/70 hover:text-neutral-950 dark:hover:text-white'}>
                  {category}
                </span>
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* ================= 3. BENTO GRID ORGÁNICO CON ANIMATEPRESENCE ================= */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          layout
          variants={filterGridContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((caseItem) => {
              const isTwoCols = caseItem.isFeatured || caseItem.bentoSpan?.includes('md:col-span-2');

              return (
                <motion.div
                  key={caseItem.id}
                  id={`case-card-${caseItem.id}`}
                  layout
                  variants={filterPresence}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`group relative rounded-[2.5rem] overflow-hidden border border-neutral-200 dark:border-white/15 hover:border-[#FF4500]/60 bg-[#121212] transition-all duration-500 shadow-xl shadow-neutral-200/50 dark:shadow-2xl flex flex-col justify-end min-h-[460px] sm:min-h-[500px] ${
                    isTwoCols ? 'col-span-1 md:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* 100% Full Background Image with Zoom on Hover */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <Image
                      src={caseItem.imageUrl}
                      alt={caseItem.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />

                    {/* Dark gradient overlay for crystal clear contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/30 transition-opacity duration-300" />

                    {/* Accent glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/0 via-[#FF4500]/0 to-[#FF1493]/0 group-hover:from-[#FF4500]/15 group-hover:to-[#FF1493]/15 transition-all duration-500 pointer-events-none" />
                  </div>

                  {/* Top Badges Row */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 pointer-events-none">
                    <div className="flex items-center gap-2">
                      {/* Category Pill */}
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide uppercase bg-black/80 backdrop-blur-md text-[#FF4500] border border-[#FF4500]/40 shadow-lg">
                        {caseItem.category}
                      </span>
                      {caseItem.isFeatured && (
                        <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-[#FF4500]/20 backdrop-blur-md text-white border border-[#FF4500]/50">
                          <Sparkles className="w-3 h-3 text-[#FF4500]" />
                          Destacado
                        </span>
                      )}
                    </div>

                    {/* Metric Highlight Pill */}
                    <div className="px-3.5 py-1.5 rounded-full text-xs font-black bg-black/85 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5 shadow-lg">
                      <TrendingUp className="w-3.5 h-3.5 text-[#25D366]" />
                      <span className="text-[#25D366]">{caseItem.impactMetric}</span>
                    </div>
                  </div>

                  {/* Card Bottom Content Area (Consistent High-Contrast White Text on Dark Image Overlay) */}
                  <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Client Name & Location */}
                      <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-white/70">
                        <span className="text-white font-bold">{caseItem.client}</span>
                        {caseItem.clientLocation && (
                          <>
                            <span>•</span>
                            <span>{caseItem.clientLocation}</span>
                          </>
                        )}
                      </div>

                      {/* Case Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3 group-hover:text-[#FF6A33] transition-colors duration-200">
                        {caseItem.title}
                      </h3>

                      {/* Solution Summary */}
                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3">
                        {caseItem.solution}
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                        {caseItem.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white/85"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedCaseModal(caseItem)}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-white hover:text-[#FF4500] transition-colors cursor-pointer"
                      >
                        <span>Ver Desafío & Arquitectura</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#FF4500]" />
                      </button>

                      <span className="text-[11px] text-white/60 font-medium">
                        {caseItem.impactLabel}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ================= 4. DETAILED MODAL / DIALOG ================= */}
      <AnimatePresence>
        {selectedCaseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaseModal(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="relative w-full max-w-3xl rounded-[2.5rem] bg-white dark:bg-[#141414] border border-neutral-200 dark:border-[#FF4500]/40 p-6 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseModal(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 dark:bg-[#1F1F1F] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-700 dark:text-white/70 hover:text-neutral-950 dark:hover:text-white hover:border-[#FF4500] transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-[#FF4500]/10 dark:bg-[#FF4500]/15 text-[#FF4500] border border-[#FF4500]/30">
                    {selectedCaseModal.category}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-white/60 font-semibold">
                    Cliente: {selectedCaseModal.client}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white leading-tight">
                  {selectedCaseModal.title}
                </h3>
              </div>

              {/* Metric Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 dark:bg-[#1C1C1C] border border-neutral-200 dark:border-[#FF4500]/30 flex items-center justify-between gap-4 mb-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF1493]">
                    {selectedCaseModal.impactMetric}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-white/70 mt-0.5 font-medium">
                    {selectedCaseModal.impactLabel}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-neutral-500 dark:text-white/50">Plazo de Ejecución</div>
                  <div className="text-sm font-bold text-neutral-900 dark:text-white mt-0.5">
                    {selectedCaseModal.duration || '4-6 semanas'}
                  </div>
                </div>
              </div>

              {/* Problem vs Solution Split */}
              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#0F0F0F] border border-neutral-200 dark:border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF1493] mb-2">
                    El Desafío Operacional
                  </h4>
                  <p className="text-sm text-neutral-700 dark:text-white/80 leading-relaxed">
                    {selectedCaseModal.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#0F0F0F] border border-neutral-200 dark:border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF4500] mb-2">
                    La Solución TunkiTek
                  </h4>
                  <p className="text-sm text-neutral-700 dark:text-white/80 leading-relaxed">
                    {selectedCaseModal.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-white/50 mb-3">
                  Tecnologías & Arquitectura Implementada
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseModal.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-[#1C1C1C] border border-neutral-200 dark:border-white/15 text-xs font-semibold text-neutral-800 dark:text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial if available */}
              {selectedCaseModal.testimonial && (
                <div className="p-5 rounded-2xl bg-orange-50/50 dark:bg-gradient-to-r dark:from-[#FF4500]/10 dark:to-[#FF1493]/10 border border-orange-200 dark:border-[#FF4500]/30 mb-8">
                  <p className="text-xs sm:text-sm italic text-neutral-800 dark:text-white/90 mb-3 leading-relaxed">
                    &ldquo;{selectedCaseModal.testimonial.quote}&rdquo;
                  </p>
                  <div className="text-xs font-bold text-[#FF4500]">
                    {selectedCaseModal.testimonial.author}
                    <span className="text-neutral-500 dark:text-white/60 font-normal ml-1">
                      — {selectedCaseModal.testimonial.role}
                    </span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-200 dark:border-white/10">
                <a
                  href={`https://wa.me/51${COMPANY_DATA.phone}?text=${encodeURIComponent(
                    `Hola TunkiTek, vi el caso de éxito de ${selectedCaseModal.client} (${selectedCaseModal.title}) y quiero un proyecto similar para mi empresa.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-extrabold text-sm transition-colors shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                  <span>Quiero un Proyecto Similar</span>
                </a>

                <Link
                  href="/#contacto"
                  onClick={() => setSelectedCaseModal(null)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-100 dark:bg-[#222222] hover:bg-neutral-200 dark:hover:bg-[#2A2A2A] border border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white font-bold text-sm transition-colors shadow-sm"
                >
                  <span>Solicitar Auditoría Gratuita</span>
                  <ArrowRight className="w-4 h-4 text-[#FF4500]" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= 5. SECCIÓN FINAL DE CONVERSIÓN ================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200 dark:border-white/5">
        <div className="rounded-[2.8rem] bg-white dark:bg-gradient-to-r dark:from-[#171717] dark:via-[#141414] dark:to-[#171717] border border-neutral-200 dark:border-[#FF4500]/40 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-xl dark:shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF4500]/10 dark:bg-[#FF4500]/15 border border-[#FF4500]/30 text-xs font-bold text-[#FF4500] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Siguiente Caso de Éxito</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white tracking-tight mb-4">
            ¿Listo para construir el próximo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF1493]">
              gran hito de tu negocio?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-white/70 max-w-xl mx-auto leading-relaxed mb-8">
            Hablemos sobre tus cuellos de botella técnicos o ideas de producto. Te entregamos un plan de desarrollo en menos de 24 horas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/51${COMPANY_DATA.phone}?text=${encodeURIComponent(
                'Hola TunkiTek, quiero agendar una llamada para revisar un proyecto de software a medida.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF4500] via-[#FF5514] to-[#FF1493] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#FF4500]/30 hover:shadow-[#FF4500]/50 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              <span>Agendar Sesión por WhatsApp</span>
            </a>

            <Link
              href="/#planes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-100 dark:bg-[#1C1C1C] hover:bg-neutral-200 dark:hover:bg-[#252525] border border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white font-bold text-sm sm:text-base transition-all shadow-sm"
            >
              <span>Ver Tarifas y Paquetes</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
