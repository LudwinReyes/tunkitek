import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { COMPANY_DATA } from '@/lib/data';
import { ShieldCheck, ArrowLeft, Lock, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Política de Privacidad y Protección de Datos | TunkiTek',
  description:
    'Conoce cómo TunkiTek protege, almacena y procesa la información de sus clientes en estricto cumplimiento con la Ley de Protección de Datos Personales (Ley N° 29733 de Perú).',
  alternates: {
    canonical: `https://${COMPANY_DATA.domain}/legal/privacidad`,
  },
};

export default function PrivacidadPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Política de Privacidad', url: '/legal/privacidad' },
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
            <Lock className="w-3.5 h-3.5" />
            <span>Seguridad & Privacidad de Datos</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
            Política de Privacidad
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-white/60 mt-3">
            Última actualización: Septiembre de 2026 • Cumplimiento con la Ley N° 29733 de Protección de Datos Personales del Perú.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-neutral-700 dark:text-white/80 text-sm sm:text-base leading-relaxed">
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FF4500]" />
              1. Responsable del Tratamiento de los Datos
            </h2>
            <p>
              El titular y responsable del tratamiento de los datos recopilados a través del sitio web <strong>https://{COMPANY_DATA.domain}</strong> es <strong>{COMPANY_DATA.legalName}</strong> (en adelante, &quot;{COMPANY_DATA.name}&quot;), con domicilio fiscal en {COMPANY_DATA.location}.
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
              2. Finalidad de la Información Recopilada
            </h2>
            <p>
              Los datos personales provistos voluntariamente en los formularios de cotización y contacto (nombre, correo corporativo, teléfono y requerimientos técnicos) se emplean única y exclusivamente para:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Elaborar y remitir propuestas técnicas y presupuestos personalizados.</li>
              <li>Coordinar reuniones de consultoría y levantamiento de requerimientos vía WhatsApp o videollamada.</li>
              <li>Prestar soporte y seguimiento a los proyectos tecnológicos contratados.</li>
            </ul>
            <p className="font-semibold text-neutral-900 dark:text-white pt-2">
              TunkiTek no comercializa, no arrienda ni transfiere bajo ninguna circunstancia datos personales a terceros con fines publicitarios ajenos.
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#FF4500]" />
              3. Medidas de Seguridad de la Información
            </h2>
            <p>
              Implementamos protocolos criptográficos modernos (TLS 1.3, HTTPS forzado, encabezados HSTS, CSP y almacenamiento seguro en bases de datos con cifrado AES-256 en reposo) para salvaguardar la integridad y confidencialidad de la información.
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
              4. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
            </h2>
            <p>
              El usuario puede ejercer en cualquier momento sus derechos de acceso, rectificación, cancelación u oposición de sus datos personales enviando una solicitud formal a <strong>{COMPANY_DATA.email}</strong>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
