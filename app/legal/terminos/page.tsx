import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { COMPANY_DATA } from '@/lib/data';
import { ShieldCheck, ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Servicio | TunkiTek',
  description:
    'Conoce los términos comerciales, acuerdos de nivel de servicio (SLA), propiedad intelectual y garantías de ingeniería de software de TunkiTek en Perú.',
  alternates: {
    canonical: `https://${COMPANY_DATA.domain}/legal/terminos`,
  },
};

export default function TerminosPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Términos y Condiciones', url: '/legal/terminos' },
  ]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white flex flex-col justify-between selection:bg-[#FF4500] selection:text-white transition-colors duration-300">
      <JsonLd data={breadcrumbSchema} />
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Breadcrumb back button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-[#FF4500] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/30 text-xs font-bold text-[#FF4500] mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Marco Legal & Comercial</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
            Términos y Condiciones de Servicio
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-white/60 mt-3">
            Última actualización: Septiembre de 2026 • Rige todos los contratos y desarrollos tecnológicos ejecutados por {COMPANY_DATA.legalName}.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-neutral-700 dark:text-white/80 text-sm sm:text-base leading-relaxed">
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FF4500]" />
              1. Alcance de los Servicios y Propuestas Técnicas
            </h2>
            <p>
              {COMPANY_DATA.legalName} provee servicios profesionales de ingeniería de software, desarrollo web corporativo, plataformas SaaS, comercio electrónico headless, aplicaciones móviles nativas y automatización con Inteligencia Artificial.
            </p>
            <p>
              Cada proyecto se formaliza mediante una Propuesta Técnica y Económica detallada, en la que se estipulan los hitos de entrega, tecnologías empleadas, entregables y cronograma de despliegue.
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
              2. Propiedad Intelectual y Código Fuente
            </h2>
            <p>
              Al completarse la liquidación total del proyecto según los hitos pactados, el cliente adquiere la titularidad y plena propiedad sobre el código fuente a medida, bases de datos y activos digitales desarrollados para su negocio.
            </p>
            <p>
              {COMPANY_DATA.name} garantiza la entrega ordenada del repositorio Git, credenciales de despliegue en producción y documentación de arquitectura requerida para la soberanía tecnológica del cliente.
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FF4500]" />
              3. Garantía y Soporte Post-Lanzamiento
            </h2>
            <p>
              Todos nuestros desarrollos cuentan con un periodo de garantía de estabilidad técnica de 30 a 90 días calendario (según el plan contratado) para la resolución prioritaria de cualquier incidencia o anomalía funcional sin costo adicional.
            </p>
            <p>
              Adicionalmente, ofrecemos planes de Mantenimiento Continuo, Monitoreo de Servidores 24/7 y SRE (Site Reliability Engineering) para infraestructuras de alta concurrencia.
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#FF4500]" />
              4. Confidencialidad Comercial (NDA)
            </h2>
            <p>
              Toda la información operativa, bases de datos de clientes, algoritmos de negocio y modelos financieros compartidos con nuestro equipo de ingeniería se tratan bajo estricta confidencialidad comercial y están protegidos por Acuerdos de No Divulgación (NDA).
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
              5. Contacto Legal y Jurisdicción
            </h2>
            <p>
              Para cualquier consulta relativa a estos términos o contratos en curso, comunícate con nuestro departamento legal y comercial al correo <strong>{COMPANY_DATA.email}</strong> o vía WhatsApp al <strong>+{COMPANY_DATA.phone}</strong>.
            </p>
            <p className="text-xs text-neutral-500 dark:text-white/50 pt-2">
              Estos términos se rigen e interpretan conforme a las leyes de la República del Perú.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
