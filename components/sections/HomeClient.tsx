'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { Services } from '@/components/sections/Services';
import { Footer } from '@/components/layout/Footer';
import {
  PLANS_EMPRENDEDORES,
  PLANS_EMPRESARIOS,
  CASE_STUDIES,
  COMPANY_DATA,
} from '@/lib/data';
import { CustomServiceSelect } from '@/components/ui/CustomServiceSelect';
import {
  Check,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Clock,
  Zap,
  Sparkles,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { motion } from 'motion/react';
import { buttonHoverSpring, buttonTapSpring } from '@/animations/heroMotion';

export function HomeClient() {
  const [selectedPlanTab, setSelectedPlanTab] = useState<'emprendedores' | 'empresarios'>('emprendedores');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'Landing Pages de Ultra Conversión (CRO)',
    message: '',
  });

  const activePlans = selectedPlanTab === 'emprendedores' ? PLANS_EMPRENDEDORES : PLANS_EMPRESARIOS;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-900 dark:text-[#F8F9FA] relative selection:bg-[#FF4500]/30 selection:text-white transition-colors duration-300">
      {/* Sticky Glassmorphism Header */}
      <Header />

      {/* High-Impact Hero Section */}
      <Hero />

      {/* 1. Sección: Propuesta de Valor (3 Columnas con micro-interacciones) */}
      <ValueProposition />

      {/* 2. Sección: Nuestros Servicios Core (Mega-Tarjetas con layout 50/50 y animación multidireccional) */}
      <Services />

      {/* ================= SECCIÓN: PLANES Y PRECIOS ================= */}
      <section id="planes" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200 dark:border-white/5 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717] border border-[#FF4500]/30 text-xs font-semibold text-[#FF4500] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Inversión Transparente & Resultados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Planes adaptados a tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF1493]">etapa de crecimiento</span>
          </h2>
          <p className="text-neutral-600 dark:text-white/60 text-base sm:text-lg mt-4">
            Selecciona el nivel que mejor represente tus metas comerciales. Desde validación rápida hasta squads empresariales continuos.
          </p>

          {/* Toggle Tab between Emprendedores and Empresarios */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-neutral-200/70 dark:bg-[#171717] border border-neutral-300/60 dark:border-white/15 shadow-inner">
            <button
              type="button"
              id="tab-plan-emprendedores"
              onClick={() => setSelectedPlanTab('emprendedores')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                selectedPlanTab === 'emprendedores'
                  ? 'bg-gradient-to-r from-[#FF4500] to-[#FF1493] text-white shadow-lg shadow-[#FF4500]/30'
                  : 'text-neutral-700 dark:text-white/70 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              Emprendedores & Startups
            </button>
            <button
              type="button"
              id="tab-plan-empresarios"
              onClick={() => setSelectedPlanTab('empresarios')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                selectedPlanTab === 'empresarios'
                  ? 'bg-gradient-to-r from-[#FF4500] to-[#FF1493] text-white shadow-lg shadow-[#FF4500]/30'
                  : 'text-neutral-700 dark:text-white/70 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              Empresarios & Corporativo
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {activePlans.map((plan) => {
            const isPop = plan.isPopular;
            return (
              <div
                key={plan.id}
                id={`plan-card-${plan.id}`}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 p-8 ${
                  isPop
                    ? 'bg-white dark:bg-gradient-to-b dark:from-[#221614] dark:via-[#1A1A1A] dark:to-[#121212] border-2 border-[#FF4500] shadow-2xl shadow-[#FF4500]/20 md:-translate-y-2'
                    : 'bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/25 shadow-lg shadow-neutral-200/50 dark:shadow-none'
                }`}
              >
                {/* Popular Pill */}
                {isPop && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FF4500] to-[#FF1493] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                    {plan.highlight || 'Más Popular'}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{plan.name}</h3>
                      <p className="text-xs text-neutral-500 dark:text-white/50 mt-1">{plan.description}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-neutral-200 dark:border-white/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-bold text-[#FF4500]">{plan.currency}</span>
                      <span className="text-4xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white">{plan.price}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-white/60 mt-2">
                      <Clock className="w-3.5 h-3.5 text-[#FF4500]" />
                      <span>Tiempo estimado: {plan.deliveryTime}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-white/80 font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#FF4500]/10 dark:bg-[#FF4500]/15 border border-[#FF4500]/30 flex items-center justify-center text-[#FF4500] flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Action CTA */}
                <div className="pt-4 border-t border-neutral-200 dark:border-white/10 flex flex-col gap-3">
                  <a
                    href="#contacto"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        plan: `${plan.name} (${plan.currency} ${plan.price})`,
                        message: `Hola TunkiTek, deseo cotizar el plan ${plan.name} de ${plan.currency} ${plan.price}.`,
                      }));
                    }}
                    className={`w-full py-3.5 rounded-full text-center text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                      isPop
                        ? 'bg-[#FF4500] hover:bg-[#E03E00] text-white shadow-lg shadow-[#FF4500]/30'
                        : 'bg-neutral-900 dark:bg-[#1F1F1F] hover:bg-neutral-800 dark:hover:bg-[#2A2A2A] text-white border border-neutral-800 dark:border-white/15 shadow-sm'
                    }`}
                  >
                    <span>Elegir Plan {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={`https://wa.me/51928659361?text=Hola%20TunkiTek,%20deseo%20m%C3%A1s%20detalles%20sobre%20el%20Plan%20${plan.name}%20(${plan.currency}%20${plan.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-center text-neutral-600 dark:text-white/60 hover:text-[#25D366] flex items-center justify-center gap-1.5 py-1 font-medium"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= SECCIÓN: CASOS DE ÉXITO ================= */}
      <section id="casos-estudio" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200 dark:border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717] border border-[#FF4500]/30 text-xs font-semibold text-[#FF4500] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Resultados Tangibles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Casos de éxito que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF1493]">hablan por nosotros</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-neutral-600 dark:text-white/60 max-w-md text-sm sm:text-base">
              Descubre cómo empresas en Perú y la región aceleran su crecimiento con nuestra ingeniería y arquitectura digital.
            </p>
            <a
              href="/casos-estudio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#171717] hover:bg-neutral-100 dark:hover:bg-[#202020] border border-neutral-300 dark:border-[#FF4500]/40 text-neutral-900 dark:text-white font-bold text-xs transition-colors shrink-0 shadow-sm"
            >
              <span>Ver Galería Completa</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF4500]" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              id={`case-card-${study.id}`}
              className="group rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 hover:border-[#FF4500]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-md shadow-neutral-200/50 dark:shadow-none"
            >
              <div className="relative h-52 w-full overflow-hidden bg-neutral-900">
                <Image
                  src={study.image}
                  alt={`Caso de éxito TunkiTek: ${study.title} - ${study.client}`}
                  fill
                  unoptimized
                  priority
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-[11px] font-bold text-white border border-white/10">
                  {study.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#FF4500] mb-1">{study.client}</div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{study.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-white/70 leading-relaxed mb-4">{study.description}</p>
                </div>

                <div>
                  <div className="p-3 rounded-2xl bg-neutral-50 dark:bg-[#1A1A1A] border border-neutral-200 dark:border-white/10 mb-4">
                    <div className="text-[10px] uppercase font-bold text-neutral-500 dark:text-white/50">Impacto Medible</div>
                    <div className="text-sm font-extrabold text-[#25D366]">{study.metrics}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-white/60 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECCIÓN: CONTACTO & COTIZACIÓN ================= */}
      <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200 dark:border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717] border border-[#FF4500]/30 text-xs font-semibold text-[#FF4500] mb-4">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Hablemos de tu Proyecto</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight mb-6">
              ¿Listo para convertir tu visión en un <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF1493]">producto de impacto?</span>
            </h2>
            <p className="text-neutral-600 dark:text-white/75 text-base sm:text-lg leading-relaxed mb-8">
              Cuéntanos tus requerimientos. Un líder de ingeniería técnica analizará tu caso y te responderá en menos de 2 horas con una propuesta clara.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FF4500]/10 dark:bg-[#FF4500]/15 flex items-center justify-center text-[#FF4500]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-white/50">Teléfono Directo</div>
                  <a href={`tel:+51${COMPANY_DATA.phone}`} className="text-sm font-bold text-neutral-900 dark:text-white hover:text-[#FF4500]">
                    {COMPANY_DATA.formattedPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FF4500]/10 dark:bg-[#FF4500]/15 flex items-center justify-center text-[#FF4500]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-white/50">Correo Electrónico</div>
                  <a href={`mailto:${COMPANY_DATA.email}`} className="text-sm font-bold text-neutral-900 dark:text-white hover:text-[#FF4500]">
                    {COMPANY_DATA.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/15 p-8 shadow-xl shadow-neutral-200/60 dark:shadow-2xl relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF4500]/10 rounded-full blur-3xl pointer-events-none" />

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">¡Mensaje Recibido!</p>
                <p className="text-sm text-neutral-600 dark:text-white/70 max-w-sm mx-auto">
                  Gracias {formData.name || 'por contactarnos'}. Nuestro equipo técnico se pondrá en contacto contigo a la brevedad vía WhatsApp/Email.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 text-neutral-900 dark:text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <p className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Solicitar Cotización Inmediata</p>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-white/70 mb-1.5">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-[#0A0A0A] border border-neutral-200 dark:border-white/15 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 text-sm focus:outline-none focus:border-[#FF4500] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-white/70 mb-1.5">Email Corporativo</label>
                    <input
                      type="email"
                      required
                      placeholder="juan@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-[#0A0A0A] border border-neutral-200 dark:border-white/15 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 text-sm focus:outline-none focus:border-[#FF4500] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-white/70 mb-1.5">Teléfono / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="999 999 999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-[#0A0A0A] border border-neutral-200 dark:border-white/15 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 text-sm focus:outline-none focus:border-[#FF4500] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-white/70 mb-1.5">Plan o Servicio de Interés</label>
                  <CustomServiceSelect
                    id="home-quote-plan"
                    value={formData.plan}
                    onChange={(val) => setFormData({ ...formData, plan: val })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-white/70 mb-1.5">Detalles del Proyecto</label>
                  <textarea
                    rows={3}
                    placeholder="Describe brevemente tus objetivos, fecha estimada o funciones requeridas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-[#0A0A0A] border border-neutral-200 dark:border-white/15 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 text-sm focus:outline-none focus:border-[#FF4500] transition-colors"
                  />
                </div>

                <motion.button
                  type="submit"
                  id="submit-quote-form-btn"
                  whileHover={buttonHoverSpring}
                  whileTap={buttonTapSpring}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF4500] via-[#FF5514] to-[#FF1493] text-white font-bold text-base shadow-xl shadow-[#FF4500]/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitud de Cotización</span>
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
