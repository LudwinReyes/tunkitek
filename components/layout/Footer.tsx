'use client';

import React from 'react';
import Link from 'next/link';
import { TunkiLogo } from '@/components/ui/TunkiLogo';
import { COMPANY_DATA, NAV_LINKS } from '@/lib/data';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export function Footer() {
  return (
    <footer id="main-footer" className="bg-neutral-100 dark:bg-[#0D0D0D] border-t border-neutral-200 dark:border-white/10 pt-16 pb-12 text-neutral-600 dark:text-white/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-neutral-200 dark:border-white/10">
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <TunkiLogo size="lg" />
            <p className="text-sm text-neutral-600 dark:text-white/60 max-w-sm leading-relaxed">
              {COMPANY_DATA.slogan} Soluciones tecnológicas de alto impacto diseñadas para empresas y startups con visión global.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#171717] border border-neutral-300 dark:border-white/15 text-xs font-semibold text-neutral-900 dark:text-white hover:border-[#25D366]/60 hover:text-[#25D366] transition-all shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>WhatsApp: {COMPANY_DATA.formattedPhone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <p className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">Navegación</p>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 dark:text-white/60 hover:text-[#FF4500] dark:hover:text-[#FF4500] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF4500]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Soluciones Principales (Internal Linking Silo) */}
          <div>
            <p className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">Servicios Core</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/servicios/landing-pages-alta-conversion" className="text-neutral-600 dark:text-white/60 hover:text-[#FF4500] dark:hover:text-[#FF4500] transition-colors block">
                  Landing Pages CRO
                </Link>
              </li>
              <li>
                <Link href="/servicios/desarrollo-web-corporativo" className="text-neutral-600 dark:text-white/60 hover:text-[#FF4500] dark:hover:text-[#FF4500] transition-colors block">
                  Desarrollo Web Next.js
                </Link>
              </li>
              <li>
                <Link href="/servicios/sistemas-saas-cloud" className="text-neutral-600 dark:text-white/60 hover:text-[#FF4500] dark:hover:text-[#FF4500] transition-colors block">
                  SaaS Multi-Tenant Cloud
                </Link>
              </li>
              <li>
                <Link href="/servicios/aplicaciones-moviles-ios-android" className="text-neutral-600 dark:text-white/60 hover:text-[#FF4500] dark:hover:text-[#FF4500] transition-colors block">
                  Apps Móviles iOS & Android
                </Link>
              </li>
              <li>
                <Link href="/servicios/sistemas-validacion-pagos" className="text-neutral-600 dark:text-white/60 hover:text-[#FF4500] dark:hover:text-[#FF4500] transition-colors block">
                  Validación Yape & Plin
                </Link>
              </li>
              <li>
                <Link href="/servicios/automatizacion-industrial-bots" className="text-neutral-600 dark:text-white/60 hover:text-[#FF4500] dark:hover:text-[#FF4500] transition-colors block">
                  Bots WhatsApp con IA
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <p className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">Contacto Directo</p>
            <ul className="space-y-3 text-sm text-neutral-600 dark:text-white/60">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#FF4500] mt-0.5 flex-shrink-0" />
                <a href={`mailto:${COMPANY_DATA.email}`} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  {COMPANY_DATA.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FF4500] mt-0.5 flex-shrink-0" />
                <a href={`tel:+51${COMPANY_DATA.phone}`} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  {COMPANY_DATA.formattedPhone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF4500] mt-0.5 flex-shrink-0" />
                <span>{COMPANY_DATA.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-white/50">
          <p>© {new Date().getFullYear()} {COMPANY_DATA.legalName}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/legal/terminos" className="hover:text-[#FF4500] transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/legal/privacidad" className="hover:text-[#FF4500] transition-colors">
              Política de Privacidad
            </Link>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Hecho con pasión e innovación en Perú</span>
            <span className="text-red-500">🇵🇪</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
