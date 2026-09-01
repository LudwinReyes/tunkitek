'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  Clock,
  CreditCard,
  Code2,
  ShieldCheck,
  FileCheck2,
  PhoneCall,
  ArrowRight,
  Flame,
  Search,
} from 'lucide-react';
import { COMPANY_DATA } from '@/lib/data';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import {
  accordionContentVariants,
  accordionIconVariants,
  bentoItemVariant,
  magneticHoverSpring,
} from '@/animations/pageMotion';

interface FaqItem {
  id: string;
  category: 'all' | 'delivery' | 'payments' | 'ownership' | 'legal';
  categoryLabel: string;
  question: string;
  answer: string;
  highlight?: string;
}

export function FaqClient() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('delivery-time');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Todas las Preguntas' },
    { id: 'delivery', label: 'Tiempos & Sprints' },
    { id: 'payments', label: 'Pasarelas & Yape/Plin' },
    { id: 'ownership', label: 'Propiedad de Código & Seguridad' },
    { id: 'legal', label: 'Facturación & Soporte SLA' },
  ];

  const faqItems: FaqItem[] = [
    {
      id: 'delivery-time',
      category: 'delivery',
      categoryLabel: 'Tiempos & Metodología',
      question: '¿Cuáles son los tiempos de entrega promedio de un proyecto?',
      answer:
        'Trabajamos con sprints ágiles de 2 semanas con entregables funcionales continuos. Un sitio web corporativo de alta conversión o catálogo interactivo de WhatsApp se entrega en 2 a 3 semanas. Una plataforma E-commerce B2B con miles de SKUs o un SaaS a medida con validación bancaria toma entre 4 a 6 semanas. Todos los cronogramas quedan estipulados y firmados por contrato con penalidades por demora a nuestro cargo.',
      highlight: 'Sprints de 2 semanas con garantía de entrega por contrato',
    },
    {
      id: 'payments-peru',
      category: 'payments',
      categoryLabel: 'Pasarelas & Billeteras',
      question: '¿Qué pasarelas de pago y métodos peruanos pueden integrar?',
      answer:
        'Integramos el 100% de los métodos de pago vigentes en el mercado peruano: Yape y Plin (con QR dinámico y validación automatizada anti-fraude), Niubiz (Visa/Mastercard), Izipay, Culqi, Mercado Pago, PagoEfectivo y transferencias directas con BCP, BBVA, Interbank y Scotiabank. Además, configuramos webhooks para notificaciones en tiempo real y despacho instantáneo.',
      highlight: 'Soporte 100% nativo para Yape, Plin, Niubiz y bancos peruanos',
    },
    {
      id: 'code-ownership',
      category: 'ownership',
      categoryLabel: 'Propiedad Intelectual',
      question: '¿Quién es el dueño del código fuente una vez finalizado el proyecto?',
      answer:
        'Tu empresa es dueña del 100% del código fuente, base de datos y arquitectura sin ninguna excepción. Al finalizar y liquidar el proyecto, transferimos el repositorio privado completo (GitHub / GitLab), documentación técnica, diagramas de base de datos y credenciales de despliegue. No cobramos licencias mensuales cautivas ni te obligamos a permanecer con nosotros si decides contratar a tu propio equipo interno.',
      highlight: 'Código 100% tuyo sin licencias mensuales forzosas ni ataduras',
    },
    {
      id: 'post-launch-sla',
      category: 'legal',
      categoryLabel: 'Soporte & Garantía',
      question: '¿Qué tipo de soporte técnico y garantía post-lanzamiento ofrecen?',
      answer:
        'Todos nuestros proyectos incluyen un periodo de garantía técnica de 30 a 90 días contra cualquier bug o inconsistencia sin costo adicional. Adicionalmente, ofrecemos planes de mantenimiento y soporte continuo con SLA de respuesta en menos de 15 minutos, monitoreo de disponibilidad 24/7/365, copias de seguridad automáticas y optimizaciones periódicas de seguridad.',
      highlight: 'Garantía técnica incluida + SLA de respuesta < 15 minutos',
    },
    {
      id: 'sunat-invoicing',
      category: 'legal',
      categoryLabel: 'Facturación Formal',
      question: '¿Emiten Factura Electrónica formal con RUC en Perú?',
      answer:
        'Sí. TunkiTek es una empresa legalmente constituida en Perú. Emitimos Facturas Electrónicas formales válidas ante la SUNAT con RUC 20 para que puedas deducir gastos empresariales e IGV. Cumplimos rigurosamente con los porcentajes de detracción correspondientes a servicios de software y tecnología según la normativa peruana vigente.',
      highlight: 'Facturación formal SUNAT con RUC 20 y bancarización formal',
    },
    {
      id: 'nextjs-vs-wordpress',
      category: 'ownership',
      categoryLabel: 'Diferencial Tecnológico',
      question: '¿Por qué desarrollan con Next.js y no con WordPress o Shopify?',
      answer:
        'WordPress y Shopify son plataformas rígidas que sufren de lentitud (>4 segundos de carga), vulnerabilidades de seguridad constantes en plugins de terceros y caídas durante campañas de Cyber Days. Con Next.js 15 y Tailwind CSS logramos tiempos de carga sub-segundo (< 0.8s), puntuaciones de 99+ en Google PageSpeed, SEO técnico superior y total libertad para programar cualquier lógica comercial personalizada sin pagar suscripciones mensuales elevadas.',
      highlight: 'Carga < 0.8s, 99+ PageSpeed y cero vulnerabilidades de plugins',
    },
    {
      id: 'yape-trucho-protection',
      category: 'payments',
      categoryLabel: 'Anti-Fraude',
      question: '¿Cómo protegen mi negocio contra las estafas de "Yape Falso"?',
      answer:
        'Implementamos un sistema de conciliación bancaria inteligente que no confía en capturas de pantalla enviadas por el cliente. Nuestro motor valida el número de operación bancario y monto abonado directamente en la cuenta de tu empresa en menos de 3 segundos mediante OCR con IA y conexión API segura. Si el comprobante es falso o fue alterado, el sistema rechaza el pedido de forma automática.',
      highlight: 'Validación en tiempo real en < 3s y detección de fraude al 100%',
    },
    {
      id: 'how-to-start',
      category: 'delivery',
      categoryLabel: 'Inicio de Proyecto',
      question: '¿Cómo es el proceso para iniciar mi proyecto con TunkiTek hoy?',
      answer:
        'El proceso es directo y sin burocracia: 1) Nos escribes por WhatsApp al 928 659 361 o completas el formulario de contacto. 2) Agendamos una sesión técnica de 20 minutos con un Ingeniero Senior para definir requerimientos. 3) Te enviamos una propuesta formal con alcance, arquitectura, cronograma e inversión fija en menos de 24 horas. 4) Firmamos contrato formal e iniciamos el Sprint 1 de inmediato.',
      highlight: 'Cotización formal y propuesta de arquitectura en menos de 24 horas',
    },
  ];

  const filteredFaqs = faqItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const whatsappUrl = `https://wa.me/51${COMPANY_DATA.phone}?text=${encodeURIComponent(
    'Hola TunkiTek, tengo una consulta técnica sobre sus servicios y me gustaría hablar con un ingeniero.'
  )}`;

  return (
    <div className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Background ambient glowing gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[950px] h-[480px] bg-gradient-to-r from-[#FF4500]/15 via-[#FF1493]/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[35%] -left-32 w-[600px] h-[600px] bg-[#FF4500]/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 -right-32 w-[600px] h-[600px] bg-[#FF1493]/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= 1. HERO DE CONVERSIÓN FAQ ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717]/90 border border-neutral-200 dark:border-[#FF4500]/40 text-xs font-bold text-[#FF4500] shadow-md shadow-neutral-200/50 dark:shadow-[#FF4500]/10 backdrop-blur-md">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Transparencia Técnica & Legal Total</span>
            </div>
          </div>

          <h1
            id="faq-main-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 dark:text-white tracking-tight leading-[1.12] mb-6"
          >
            Respuestas claras para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FF6A33] to-[#FF1493]">
              decisiones rápidas.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
            Resolvemos tus dudas sobre tiempos de entrega, pasarelas de pago peruanas, propiedad del código y acuerdos de nivel de servicio.
          </p>
        </div>

        {/* ================= 2. BUSCADOR & FILTRO POR CATEGORÍAS ================= */}
        <div className="mb-10 sm:mb-12 space-y-6">
          {/* Quick Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 dark:text-white/40 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por palabra clave (ej. Yape, factura, tiempos, código)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-5 py-4 rounded-full bg-white dark:bg-[#141414] border border-neutral-300 dark:border-white/10 focus:border-[#FF4500] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/40 focus:outline-none shadow-md dark:shadow-xl transition-colors backdrop-blur-xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold px-2 py-1 rounded-full bg-neutral-200 dark:bg-white/10 text-neutral-700 dark:text-white/60 hover:text-neutral-950 dark:hover:text-white cursor-pointer"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Categories Filter Tabs */}
          <div className="flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-neutral-200/60 dark:bg-[#141414] border border-neutral-300/60 dark:border-white/10 backdrop-blur-xl shadow-md dark:shadow-xl max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-[#FF4500] to-[#FF1493] text-white shadow-lg shadow-[#FF4500]/25'
                      : 'text-neutral-700 dark:text-white/60 hover:text-neutral-950 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= 3. ACORDEÓN ANIMADO SEDOSO (<AnimatePresence>) ================= */}
        <div className="space-y-4 mb-16 sm:mb-24">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  variants={bentoItemVariant}
                  initial="hidden"
                  animate="visible"
                  className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden shadow-md dark:shadow-lg ${
                    isOpen
                      ? 'bg-white dark:bg-[#171717] border-[#FF4500]/50 shadow-[#FF4500]/10'
                      : 'bg-white dark:bg-[#141414] hover:bg-neutral-50 dark:hover:bg-[#181818] border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20'
                  }`}
                >
                  {/* Accordion Header Button */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-neutral-900 dark:text-white group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 pr-2">
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full border transition-colors ${
                          isOpen
                            ? 'bg-[#FF4500]/10 dark:bg-[#FF4500]/15 text-[#FF4500] border-[#FF4500]/30'
                            : 'bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-white/50 border-neutral-200 dark:border-white/10'
                        }`}
                      >
                        {faq.categoryLabel}
                      </span>
                      <span className="group-hover:text-[#FF4500] transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    {/* Smooth Rotating 180° Indicator */}
                    <motion.div
                      variants={accordionIconVariants}
                      animate={isOpen ? 'expanded' : 'collapsed'}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/5 flex items-center justify-center flex-shrink-0"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-colors ${
                          isOpen ? 'text-[#FF4500]' : 'text-neutral-500 dark:text-white/50'
                        }`}
                      />
                    </motion.div>
                  </button>

                  {/* Silky Height Expand/Collapse Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="faq-content"
                        variants={accordionContentVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-neutral-200 dark:border-white/5 space-y-4">
                          <p className="text-sm sm:text-base text-neutral-700 dark:text-white/75 leading-relaxed font-normal">
                            {faq.answer}
                          </p>

                          {faq.highlight && (
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FF4500]/10 border border-[#FF4500]/25 text-xs font-bold text-[#FF4500]">
                              <Flame className="w-3.5 h-3.5 flex-shrink-0" />
                              <span>{faq.highlight}</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 shadow-md">
              <HelpCircle className="w-12 h-12 text-neutral-400 dark:text-white/30 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">No se encontraron resultados</h3>
              <p className="text-sm text-neutral-600 dark:text-white/60 mb-4">
                No encontramos preguntas que coincidan con tu búsqueda &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-5 py-2.5 rounded-full bg-[#FF4500] text-white font-bold text-xs shadow-md cursor-pointer"
              >
                Ver todas las preguntas
              </button>
            </div>
          )}
        </div>

        {/* ================= 4. BOTTOM DIRECT TECHNICAL CONSULTATION CTA ================= */}
        <div className="rounded-[2.8rem] bg-white dark:bg-gradient-to-br dark:from-[#1C1C1C] dark:via-[#151515] dark:to-[#121212] border border-neutral-200 dark:border-[#FF4500]/40 p-8 sm:p-12 lg:p-14 text-center shadow-xl dark:shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-gradient-to-br from-[#FF4500]/15 to-[#FF1493]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4500]/10 dark:bg-[#FF4500]/15 border border-[#FF4500]/30 text-xs font-bold text-[#FF4500]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Soporte Directo con Ingenieros</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-neutral-900 dark:text-white tracking-tight leading-tight">
              ¿Tienes una duda técnica específica sobre tu proyecto?
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
              No esperes días por un correo. Escríbenos directamente por WhatsApp y recibe una respuesta técnica
              detallada en menos de 15 minutos.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={magneticHoverSpring}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-black text-sm sm:text-base shadow-xl shadow-[#25D366]/25 transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white text-white" />
                <span>Consultar por WhatsApp ({COMPANY_DATA.phone})</span>
              </motion.a>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-neutral-100 dark:bg-[#202020] hover:bg-neutral-200 dark:hover:bg-[#282828] border border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white font-bold text-sm sm:text-base transition-colors shadow-sm"
              >
                <span>Agendar Videollamada</span>
                <ArrowRight className="w-4 h-4 text-[#FF4500]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
