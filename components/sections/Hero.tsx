'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Zap,
  Code2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  TrendingUp,
  Server,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  wordRevealContainer,
  wordRevealItem,
  floatingEffect,
  ambientGlowPulse,
  buttonHoverSpring,
  buttonTapSpring,
} from '@/animations/heroMotion';

export function Hero() {
  const headlineWords = [
    "Más",
    "que",
    "proveedores,",
    "somos",
    "tu",
    "equipo",
    "aliado",
    "en",
    "tecnología",
    "e",
    "innovación.",
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-6 pb-20 lg:py-24"
    >
      {/* Background Ambient Glows & Grid Mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Primary Tunki Orange Glow */}
        <motion.div
          variants={ambientGlowPulse}
          animate="animate"
          className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FF4500]/20 via-[#FF6A33]/10 to-transparent blur-[120px]"
        />

        {/* Secondary Magenta Accent Glow */}
        <motion.div
          variants={ambientGlowPulse}
          animate="animate"
          className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#FF1493]/15 via-[#FF4500]/10 to-transparent blur-[140px]"
        />

        {/* Subtle Bottom Deep Glow */}
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[400px] rounded-full bg-[#FF4500]/10 blur-[130px]" />

        {/* Cyber Dots Grid */}
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* ================= LEFT COLUMN: COPYWRITING & CONVERSION ================= */}
          <div className="flex flex-col items-start z-10">
            {/* Top Pill Badge */}
            <motion.div
              variants={fadeInLeft}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 dark:bg-[#171717]/90 border border-neutral-200 dark:border-[#FF4500]/30 shadow-md shadow-neutral-200/50 dark:shadow-[#FF4500]/10 mb-6 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4500] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4500]" />
              </span>
              <span className="text-xs font-semibold text-neutral-800 dark:text-white/90 tracking-wide">
                Ingeniería de Software & Transformación Digital
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FF4500]/15 text-[#FF4500] border border-[#FF4500]/30">
                Perú 🇵🇪
              </span>
            </motion.div>

            {/* H1 Headline with Word-by-Word Revelation */}
            <motion.h1
              variants={wordRevealContainer}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.12] mb-6"
            >
              {headlineWords.map((word, index) => {
                const isSpecial =
                  word.toLowerCase().includes("equipo") ||
                  word.toLowerCase().includes("aliado") ||
                  word.toLowerCase().includes("innovación");
                return (
                  <React.Fragment key={`${word}-${index}`}>
                    <motion.span
                      variants={wordRevealItem}
                      className={`inline-block ${
                        isSpecial
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FF6A33] to-[#FF1493]"
                          : "text-neutral-950 dark:text-white"
                      }`}
                    >
                      {word}
                    </motion.span>
                    {index < headlineWords.length - 1 ? ' ' : ''}
                  </React.Fragment>
                );
              })}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInLeft}
              className="text-lg sm:text-xl text-neutral-600 dark:text-white/75 font-normal leading-relaxed max-w-xl mb-8"
            >
              Soluciones tecnológicas diseñadas específicamente para el mercado peruano y la escalabilidad internacional.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInLeft}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              {/* Primary CTA Button: Solid Orange with Glow */}
              <motion.a
                href="#servicios"
                id="hero-cta-solutions-btn"
                whileHover={buttonHoverSpring}
                whileTap={buttonTapSpring}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF4500] via-[#FF5514] to-[#FF1493] text-white font-bold text-base shadow-xl shadow-[#FF4500]/30 hover:shadow-[#FF4500]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Ver Soluciones</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>

              {/* Secondary CTA Button: Outline with Animated Icon */}
              <motion.a
                href="#casos-estudio"
                id="hero-cta-cases-btn"
                whileHover={buttonHoverSpring}
                whileTap={buttonTapSpring}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white dark:bg-[#171717]/80 hover:bg-neutral-100 dark:hover:bg-[#202020] border border-neutral-300 dark:border-white/20 hover:border-[#FF4500]/60 text-neutral-900 dark:text-white/90 hover:text-neutral-950 dark:hover:text-white font-semibold text-base transition-all duration-300 backdrop-blur-sm shadow-sm"
              >
                <Sparkles className="w-5 h-5 text-[#FF4500] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <span>Casos de Éxito</span>
                <ChevronRight className="w-4 h-4 text-neutral-400 dark:text-white/50 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
              </motion.a>
            </motion.div>

            {/* Quick Proof Metrics / Trust Strip */}
            <motion.div
              variants={fadeInLeft}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200 dark:border-white/10 w-full max-w-lg"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white flex items-center gap-1">
                  <span>99.8</span>
                  <span className="text-[#FF4500] text-xl">%</span>
                </div>
                <div className="text-xs text-neutral-500 dark:text-white/60 mt-0.5 font-medium">Uptime & Calidad</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white flex items-center gap-1">
                  <span>+50</span>
                </div>
                <div className="text-xs text-neutral-500 dark:text-white/60 mt-0.5 font-medium">Proyectos Entregados</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white flex items-center gap-1">
                  <span>10x</span>
                </div>
                <div className="text-xs text-neutral-500 dark:text-white/60 mt-0.5 font-medium">Escalabilidad Cloud</div>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: ORGANIC VISUAL COMPOSITION ================= */}
          <motion.div
            variants={fadeInRight}
            className="relative flex items-center justify-center lg:justify-end w-full"
          >
            {/* Ambient Aura behind the organic container */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF4500]/20 via-[#FF1493]/15 to-[#FF4500]/10 rounded-[4.5rem] blur-2xl -z-10 transform rotate-1" />

            {/* Massive Organic Container with Asymmetric Border Radius */}
            <div
              id="hero-organic-visual-container"
              className="relative w-full max-w-[540px] aspect-[4/4.5] sm:aspect-[4/4.2] rounded-[3.8rem] rounded-tr-[1.8rem] rounded-bl-[1.8rem] bg-gradient-to-b from-white to-neutral-100 dark:from-[#1A1A1A] dark:to-[#0D0D0D] border-2 border-neutral-200 dark:border-white/15 p-4 sm:p-6 overflow-hidden shadow-2xl shadow-neutral-300/60 dark:shadow-black/80 flex flex-col justify-between"
            >
              {/* Inner Decorative Background Tech Elements */}
              <div className="absolute inset-0 bg-radial from-[#FF4500]/10 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Top Bar of the Mock Tech Dashboard */}
              <div className="relative z-10 flex items-center justify-between border-b border-neutral-200 dark:border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF4500]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFC700]" />
                  <div className="w-3 h-3 rounded-full bg-[#25D366]" />
                  <span className="text-[11px] font-mono text-neutral-500 dark:text-white/50 ml-2">tunkitek-core-engine.ts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    LIVE
                  </span>
                </div>
              </div>

              {/* Main Visual Core: Interactive Architecture Showcase */}
              <div className="relative z-10 my-auto py-4 space-y-4">
                {/* Tech Dashboard Card: High Performance Node */}
                <div className="rounded-3xl bg-white/90 dark:bg-[#171717]/90 border border-neutral-200 dark:border-white/10 p-4 sm:p-5 backdrop-blur-md shadow-sm dark:shadow-none">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#FF4500] to-[#FF1493] text-white shadow-md shadow-[#FF4500]/30">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-neutral-900 dark:text-white">Full-Stack Cloud Squad</p>
                        <p className="text-xs text-neutral-500 dark:text-white/50">Next.js 15 App Router • API Gateway</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#FF4500] bg-[#FF4500]/10 px-2.5 py-1 rounded-full border border-[#FF4500]/20">
                      0.3s TTFB
                    </span>
                  </div>

                  {/* Real-time Performance Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] text-neutral-700 dark:text-white/70 font-medium">
                      <span>Optimización Lighthouse</span>
                      <span className="text-[#25D366] font-bold">100 / 100</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#FF4500] via-[#FFC700] to-[#25D366] w-full" />
                    </div>
                  </div>
                </div>

                {/* Secondary Mini Grid inside Organic Container */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/90 dark:bg-[#141414]/90 border border-neutral-200 dark:border-white/10 p-3.5 flex flex-col justify-between shadow-sm dark:shadow-none">
                    <div className="flex items-center justify-between text-neutral-600 dark:text-white/60 mb-2">
                      <Server className="w-4 h-4 text-[#FF6A33]" />
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">99.99%</span>
                    </div>
                    <div className="text-xs font-bold text-neutral-900 dark:text-white">Microservicios</div>
                    <div className="text-[10px] text-neutral-500 dark:text-white/50 mt-0.5">Docker & Kubernetes</div>
                  </div>

                  <div className="rounded-2xl bg-white/90 dark:bg-[#141414]/90 border border-neutral-200 dark:border-white/10 p-3.5 flex flex-col justify-between shadow-sm dark:shadow-none">
                    <div className="flex items-center justify-between text-neutral-600 dark:text-white/60 mb-2">
                      <TrendingUp className="w-4 h-4 text-[#FF1493]" />
                      <span className="text-[10px] font-mono text-amber-600 dark:text-amber-300 font-bold">Conversion +45%</span>
                    </div>
                    <div className="text-xs font-bold text-neutral-900 dark:text-white">UI/UX Orgánico</div>
                    <div className="text-[10px] text-neutral-500 dark:text-white/50 mt-0.5">Framer Motion Pro</div>
                  </div>
                </div>
              </div>

              {/* Bottom Status Feed */}
              <div className="relative z-10 rounded-2xl bg-neutral-100/90 dark:bg-[#121212]/90 border border-neutral-200 dark:border-white/10 px-4 py-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-neutral-800 dark:text-white/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4500]" />
                  <span>Arquitectura peruana escalable a LATAM y el mundo</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 dark:text-white/40 hidden sm:inline">v2.4.0</span>
              </div>
            </div>

            {/* ================= 3 FLOATING MOTION PILLS AROUND IMAGE ================= */}

            {/* FLOATING PILL 1: Top Right - Zap / Fast Performance */}
            <motion.div
              id="hero-floating-pill-zap"
              animate={floatingEffect(4.2, 0, [0, -14, 0])}
              className="absolute -top-6 -right-2 sm:-right-6 z-20"
            >
              <div className="glass-card-glow rounded-3xl p-3.5 sm:px-5 sm:py-3.5 flex items-center gap-3 shadow-2xl border border-[#FF4500]/40 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF4500] to-[#FF6A33] flex items-center justify-center text-white shadow-md shadow-[#FF4500]/30 flex-shrink-0">
                  <Zap className="w-5 h-5 fill-white text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white flex items-center gap-1.5">
                    <span>Ultra Rápido</span>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30">
                      0.2s
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-neutral-600 dark:text-white/60">Core Web Vitals 99+</div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING PILL 2: Bottom Left - Code / Clean Architecture */}
            <motion.div
              id="hero-floating-pill-code"
              animate={floatingEffect(4.8, 1.2, [0, -18, 0])}
              className="absolute -bottom-8 -left-2 sm:-left-8 z-20"
            >
              <div className="glass-card rounded-3xl p-3.5 sm:px-5 sm:py-3.5 flex items-center gap-3 shadow-2xl border border-neutral-200 dark:border-white/20 backdrop-blur-xl hover:border-[#FF4500]/50 transition-colors">
                <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-[#1E1E1E] border border-neutral-200 dark:border-white/15 flex items-center justify-center text-[#FF4500] shadow-inner flex-shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white flex items-center gap-1.5">
                    <span>Arquitectura Limpia</span>
                    <span className="text-[10px] font-bold text-[#FF4500] bg-[#FF4500]/10 px-1.5 py-0.5 rounded-full">
                      Next.js 15
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-neutral-600 dark:text-white/60">Escalabilidad Garantizada 10x</div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING PILL 3: Center-Right or Bottom-Right - ShieldCheck / SLA */}
            <motion.div
              id="hero-floating-pill-shield"
              animate={floatingEffect(5.2, 0.6, [0, -12, 0])}
              className="absolute top-1/2 -right-4 sm:-right-10 transform -translate-y-1/2 z-20 hidden sm:block"
            >
              <div className="glass-card rounded-2xl p-3 sm:px-4 sm:py-3 flex items-center gap-2.5 shadow-2xl border border-neutral-200 dark:border-white/15 backdrop-blur-xl">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#FF1493] to-[#FF4500] flex items-center justify-center text-white flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-950 dark:text-white">Soporte Continuo</div>
                  <div className="text-[10px] text-neutral-600 dark:text-white/60">SLA Empresarial 24/7</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
