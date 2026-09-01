'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageCircle,
  Mail,
  Send,
  User,
  Building2,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  PhoneCall,
  Clock,
  ChevronDown,
  ArrowRight,
  Code2,
} from 'lucide-react';
import { COMPANY_DATA, SERVICE_SELECT_OPTIONS } from '@/lib/data';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import {
  contactSplitStagger,
  leftColumnReveal,
  rightColumnReveal,
  headlineWordReveal,
  inputFocusMotion,
  contactCardHover,
  contactCardTap,
  submitButtonHover,
  submitButtonTap,
} from '@/animations/contactMotion';

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: 'Landing Pages de Ultra Conversión (CRO)',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const headlineWords = ['Iniciemos', 'la', 'evolución', 'de', 'tu', 'negocio.'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      serviceInterest: 'Landing Pages de Ultra Conversión (CRO)',
      message: '',
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background ambient gradient glow orbs */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-[#FF4500]/12 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#FF1493]/12 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 sm:pt-16 sm:pb-28">
        <motion.div
          variants={contactSplitStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
        >
          {/* ================= COLUMNA IZQUIERDA (INFORMACIÓN Y AUTORIDAD) ================= */}
          <motion.div
            variants={leftColumnReveal}
            className="lg:col-span-6 flex flex-col justify-between space-y-8"
          >
            <div>
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717]/90 border border-neutral-200 dark:border-[#FF4500]/40 text-xs font-bold text-[#FF4500] mb-6 shadow-md shadow-neutral-200/50 dark:shadow-[#FF4500]/10 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Contacto Directo & Cotizaciones</span>
              </div>

              {/* H1 with Word-by-Word Reveal */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-950 dark:text-white tracking-tight leading-[1.1] mb-6 flex flex-wrap gap-x-3 gap-y-1">
                {headlineWords.map((word, index) => {
                  const isHighlight = index >= 2 && index <= 5;
                  return (
                    <motion.span
                      key={`${word}-${index}`}
                      variants={headlineWordReveal}
                      className={
                        isHighlight
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FF5514] to-[#FF1493]'
                          : 'text-neutral-950 dark:text-white'
                      }
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-neutral-600 dark:text-white/70 leading-relaxed max-w-xl mb-8">
                Llena el formulario o háblanos directamente. Sin intermediarios, directo a los ingenieros que construirán tu solución.
              </p>

              {/* Tarjetas de Contacto Rápido */}
              <div className="space-y-4 mb-8">
                {/* 1. WhatsApp Directo */}
                <motion.a
                  href={`https://wa.me/51${COMPANY_DATA.phone}?text=${encodeURIComponent(
                    'Hola equipo de TunkiTek, quiero cotizar un proyecto de tecnología para mi empresa.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={contactCardHover}
                  whileTap={contactCardTap}
                  className="group block p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#171717] border border-neutral-200 dark:border-white/10 hover:border-[#25D366]/60 transition-all duration-300 shadow-lg shadow-neutral-200/50 dark:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform duration-300">
                        <WhatsAppIcon className="w-7 h-7 fill-[#25D366]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-white/50 mb-0.5">
                          WhatsApp Directo (Respuesta &lt; 15 min)
                        </div>
                        <div className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-white group-hover:text-[#25D366] transition-colors">
                          +51 928 659 361
                        </div>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-white/5 group-hover:bg-[#25D366]/20 flex items-center justify-center text-neutral-600 dark:text-white/60 group-hover:text-[#25D366] transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.a>

                {/* 2. Email Corporativo */}
                <motion.a
                  href={`mailto:${COMPANY_DATA.email}?subject=${encodeURIComponent(
                    'Consulta Comercial - Proyecto TunkiTek'
                  )}`}
                  whileHover={contactCardHover}
                  whileTap={contactCardTap}
                  className="group block p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#171717] border border-neutral-200 dark:border-white/10 hover:border-[#FF4500]/60 transition-all duration-300 shadow-lg shadow-neutral-200/50 dark:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#FF4500]/15 border border-[#FF4500]/30 flex items-center justify-center text-[#FF4500] group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-white/50 mb-0.5">
                          Email Corporativo Oficial
                        </div>
                        <div className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-white group-hover:text-[#FF4500] transition-colors">
                          {COMPANY_DATA.email}
                        </div>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-white/5 group-hover:bg-[#FF4500]/20 flex items-center justify-center text-neutral-600 dark:text-white/60 group-hover:text-[#FF4500] transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.a>
              </div>

              {/* Trust Badges Section */}
              <div className="p-6 rounded-3xl bg-neutral-100 dark:bg-[#121212] border border-neutral-200 dark:border-white/5">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-white/40 mb-4">
                  Garantías de Trabajo TunkiTek
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2.5 text-xs text-neutral-700 dark:text-white/80 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#FF4500] shrink-0" />
                    <span>Soporte A1 Post-Lanzamiento</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-neutral-700 dark:text-white/80 font-medium">
                    <Code2 className="w-4 h-4 text-[#FF1493] shrink-0" />
                    <span>Ingeniería 100% Peruana</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-neutral-700 dark:text-white/80 font-medium">
                    <Clock className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>Propuestas en 24h</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= COLUMNA DERECHA (FORMULARIO HIGH-END) ================= */}
          <motion.div
            variants={rightColumnReveal}
            className="lg:col-span-6 w-full"
          >
            <div className="relative rounded-[2.5rem] bg-white dark:bg-[#141414]/85 backdrop-blur-2xl border border-neutral-200 dark:border-white/10 p-6 sm:p-10 shadow-xl shadow-neutral-200/50 dark:shadow-2xl overflow-hidden">
              {/* Subtle top ambient bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF4500] via-[#FF5514] to-[#FF1493]" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="mb-2">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                        Cuéntanos sobre tu proyecto
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-white/60 mt-1">
                        Recibe una propuesta técnica y económica personalizada.
                      </p>
                    </div>

                    {/* 1. Nombre Completo */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="text-xs font-bold tracking-wide text-neutral-700 dark:text-white/70 block ml-1"
                      >
                        Nombre y Apellido *
                      </label>
                      <div className="relative">
                        <motion.div
                          variants={inputFocusMotion}
                          animate={focusedField === 'name' ? 'focused' : 'unfocused'}
                          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 dark:text-white/50"
                        >
                          <User className="w-5 h-5" />
                        </motion.div>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Ej. Carlos Mendoza"
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-neutral-50 dark:bg-transparent border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 text-sm focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* 2. Email Corporativo */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="text-xs font-bold tracking-wide text-neutral-700 dark:text-white/70 block ml-1"
                      >
                        Email de Contacto *
                      </label>
                      <div className="relative">
                        <motion.div
                          variants={inputFocusMotion}
                          animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 dark:text-white/50"
                        >
                          <Mail className="w-5 h-5" />
                        </motion.div>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="carlos@empresa.com"
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-neutral-50 dark:bg-transparent border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 text-sm focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* 3. Empresa / Proyecto */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-company"
                        className="text-xs font-bold tracking-wide text-neutral-700 dark:text-white/70 block ml-1"
                      >
                        Empresa o Marca
                      </label>
                      <div className="relative">
                        <motion.div
                          variants={inputFocusMotion}
                          animate={focusedField === 'company' ? 'focused' : 'unfocused'}
                          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 dark:text-white/50"
                        >
                          <Building2 className="w-5 h-5" />
                        </motion.div>
                        <input
                          id="contact-company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Ej. Inversiones Perú SAC / Startup"
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-neutral-50 dark:bg-transparent border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 text-sm focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* 4. Selector de Interés */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-service"
                        className="text-xs font-bold tracking-wide text-neutral-700 dark:text-white/70 block ml-1"
                      >
                        Servicio de Interés Principal *
                      </label>
                      <div className="relative">
                        <select
                          id="contact-service"
                          value={formData.serviceInterest}
                          onChange={(e) =>
                            setFormData({ ...formData, serviceInterest: e.target.value })
                          }
                          className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 dark:bg-[#1A1A1A] border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-all duration-200 appearance-none cursor-pointer"
                        >
                          {SERVICE_SELECT_OPTIONS.map((groupItem) => (
                            <optgroup key={groupItem.group} label={groupItem.group} className="font-bold text-neutral-900 dark:text-white bg-neutral-100 dark:bg-[#1F1F1F]">
                              {groupItem.options.map((option) => (
                                <option
                                  key={option.value}
                                  value={option.value}
                                  className="font-normal text-neutral-800 dark:text-neutral-200 bg-white dark:bg-[#141414] py-1"
                                >
                                  {option.label}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-neutral-500 dark:text-white/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* 5. Mensaje Detallado */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-message"
                        className="text-xs font-bold tracking-wide text-neutral-700 dark:text-white/70 block ml-1"
                      >
                        Detalles o requerimiento breve (Opcional)
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Cuéntanos brevemente qué deseas construir, tiempos estimados o requerimientos técnicos..."
                        className="w-full p-4 rounded-2xl bg-neutral-50 dark:bg-transparent border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 text-sm focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={submitButtonHover}
                        whileTap={submitButtonTap}
                        className="group w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#FF4500] via-[#FF5514] to-[#FF1493] text-white font-black text-base shadow-xl shadow-[#FF4500]/30 hover:shadow-[#FF4500]/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Procesando solicitud...</span>
                          </div>
                        ) : (
                          <>
                            <span className="group-hover:translate-x-1 transition-transform duration-200">
                              Enviar Solicitud de Ingeniería
                            </span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </>
                        )}
                      </motion.button>
                    </div>

                    <p className="text-[11px] text-neutral-500 dark:text-white/40 text-center mt-3">
                      🔒 Tus datos están protegidos por acuerdo de confidencialidad comercial.
                    </p>
                  </motion.form>
                ) : (
                  /* Feedback de Envío Exitoso */
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center mx-auto text-[#25D366]">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">
                        ¡Mensaje recibido con éxito!
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-white/70 max-w-md mx-auto mt-2 leading-relaxed">
                        Gracias <strong className="text-neutral-900 dark:text-white">{formData.name}</strong>. Uno de nuestros ingenieros principales se comunicará contigo en menos de 24 horas a <strong className="text-neutral-900 dark:text-white">{formData.email}</strong>.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#1C1C1C] border border-neutral-200 dark:border-[#FF4500]/30 max-w-md mx-auto text-left text-xs text-neutral-800 dark:text-white/80 space-y-1.5">
                      <div className="font-bold text-[#FF4500]">Resumen de Solicitud:</div>
                      <div>• <strong>Servicio:</strong> {formData.serviceInterest}</div>
                      {formData.company && <div>• <strong>Empresa:</strong> {formData.company}</div>}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                      <a
                        href={`https://wa.me/51${COMPANY_DATA.phone}?text=${encodeURIComponent(
                          `Hola TunkiTek, acabo de enviar una solicitud por la web a nombre de ${formData.name} sobre ${formData.serviceInterest}. Deseo coordinar la llamada.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-extrabold text-sm transition-colors shadow-md"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                        <span>Abrir Chat en WhatsApp Ahora</span>
                      </a>

                      <button
                        onClick={handleReset}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-100 dark:bg-[#202020] hover:bg-neutral-200 dark:hover:bg-[#2A2A2A] border border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white font-bold text-sm transition-colors shadow-sm cursor-pointer"
                      >
                        <span>Enviar Otro Mensaje</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
