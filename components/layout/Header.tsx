'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { TunkiLogo } from '@/components/ui/TunkiLogo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { NAV_LINKS, COMPANY_DATA } from '@/lib/data';
import { buttonHoverSpring, buttonTapSpring } from '@/animations/heroMotion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#0A0A0A]/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-white/10 shadow-sm dark:shadow-2xl dark:shadow-black/30 py-3.5'
          : 'bg-white/70 dark:bg-[#0A0A0A]/60 backdrop-blur-sm border-b border-neutral-200/60 dark:border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <TunkiLogo size="md" />
        </div>

        {/* Desktop Navigation Links with animated hover effect */}
        <nav
          id="desktop-nav"
          className="hidden md:flex items-center gap-1 lg:gap-2.5 bg-neutral-100/90 dark:bg-[#171717]/80 border border-neutral-200/90 dark:border-white/10 rounded-full px-4 py-1.5 shadow-sm dark:shadow-inner"
        >
          {NAV_LINKS.map((link) => {
            if (link.href === '/servicios') {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => {
                    setActiveHover(link.href);
                    setServicesMenuOpen(true);
                  }}
                  onMouseLeave={() => {
                    setActiveHover(null);
                    setServicesMenuOpen(false);
                  }}
                >
                  <Link
                    href={link.href}
                    id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="relative px-3.5 py-1.5 text-sm font-medium text-neutral-700 dark:text-white/80 hover:text-neutral-950 dark:hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesMenuOpen ? 'rotate-180 text-[#FF4500]' : ''}`} />

                    {activeHover === link.href && (
                      <motion.span
                        layoutId="header-nav-highlight"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF4500]/15 to-[#FF1493]/15 dark:from-[#FF4500]/20 dark:to-[#FF1493]/20 border border-[#FF4500]/40 -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu for Quick Service Crawling & Navigation */}
                  <AnimatePresence>
                    {servicesMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-2 w-72 p-3 rounded-2xl bg-white/95 dark:bg-[#141414]/95 backdrop-blur-xl border border-neutral-200/90 dark:border-white/10 shadow-2xl shadow-neutral-900/10 dark:shadow-black/60 z-50 space-y-1"
                      >
                        <Link
                          href="/servicios/landing-pages-alta-conversion"
                          className="block px-3 py-2 rounded-xl text-xs font-semibold text-neutral-800 dark:text-white/90 hover:bg-[#FF4500]/10 hover:text-[#FF4500] transition-colors"
                        >
                          Landing Pages CRO (Ads)
                        </Link>
                        <Link
                          href="/servicios/desarrollo-web-corporativo"
                          className="block px-3 py-2 rounded-xl text-xs font-semibold text-neutral-800 dark:text-white/90 hover:bg-[#FF4500]/10 hover:text-[#FF4500] transition-colors"
                        >
                          Desarrollo Web Next.js
                        </Link>
                        <Link
                          href="/servicios/sistemas-saas-cloud"
                          className="block px-3 py-2 rounded-xl text-xs font-semibold text-neutral-800 dark:text-white/90 hover:bg-[#FF4500]/10 hover:text-[#FF4500] transition-colors"
                        >
                          Plataformas SaaS Multi-Tenant
                        </Link>
                        <Link
                          href="/servicios/aplicaciones-moviles-ios-android"
                          className="block px-3 py-2 rounded-xl text-xs font-semibold text-neutral-800 dark:text-white/90 hover:bg-[#FF4500]/10 hover:text-[#FF4500] transition-colors"
                        >
                          Apps Móviles iOS & Android
                        </Link>
                        <Link
                          href="/servicios/sistemas-validacion-pagos"
                          className="block px-3 py-2 rounded-xl text-xs font-semibold text-neutral-800 dark:text-white/90 hover:bg-[#FF4500]/10 hover:text-[#FF4500] transition-colors"
                        >
                          Validación Pagos Yape / Plin
                        </Link>
                        <Link
                          href="/servicios/automatizacion-industrial-bots"
                          className="block px-3 py-2 rounded-xl text-xs font-semibold text-neutral-800 dark:text-white/90 hover:bg-[#FF4500]/10 hover:text-[#FF4500] transition-colors"
                        >
                          Bots WhatsApp Oficial con IA
                        </Link>
                        <div className="pt-2 border-t border-neutral-100 dark:border-white/5">
                          <Link
                            href="/servicios"
                            className="block px-3 py-1.5 text-center rounded-lg text-[11px] font-bold text-[#FF4500] hover:underline"
                          >
                            Ver las 18 soluciones &rarr;
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onMouseEnter={() => setActiveHover(link.href)}
                onMouseLeave={() => setActiveHover(null)}
                className="relative px-3.5 py-1.5 text-sm font-medium text-neutral-700 dark:text-white/80 hover:text-neutral-950 dark:hover:text-white transition-colors duration-200"
              >
                {link.label}

                {/* Animated underline pill on hover */}
                {activeHover === link.href && (
                  <motion.span
                    layoutId="header-nav-highlight"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF4500]/15 to-[#FF1493]/15 dark:from-[#FF4500]/20 dark:to-[#FF1493]/20 border border-[#FF4500]/40 -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action CTA, Theme Toggle and Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Quick WhatsApp / Call badge (Hidden on smaller screens) */}
          <a
            href={COMPANY_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-wa-btn"
            className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-white/70 hover:text-[#FF4500] px-3 py-2 rounded-full bg-neutral-100/80 dark:bg-transparent border border-neutral-200/90 dark:border-white/10 hover:border-[#FF4500]/40 transition-all duration-200"
            title="Chat directo con un asesor técnico"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
            <span>928 659 361</span>
          </a>

          {/* Prominent CTA Button with Framer Motion spring */}
          <motion.div whileHover={buttonHoverSpring} whileTap={buttonTapSpring}>
            <Link
              href="/contacto"
              id="header-cta-quote-btn"
              className="relative group overflow-hidden rounded-full bg-gradient-to-r from-[#FF4500] via-[#FF5514] to-[#FF1493] text-white font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 shadow-lg shadow-[#FF4500]/25 flex items-center gap-2 transition-all duration-300"
            >
              {/* Shimmer effect highlight */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-in-out" />
              <span className="relative z-10 hidden sm:inline">Cotizar Proyecto</span>
              <span className="relative z-10 sm:hidden">Cotizar</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-2xl bg-neutral-100 dark:bg-[#171717] border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white/80 hover:text-neutral-950 dark:hover:text-white hover:border-[#FF4500]/50 transition-colors"
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="md:hidden border-b border-neutral-200 dark:border-white/10 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-2xl text-base font-medium text-neutral-800 dark:text-white/90 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5 border border-transparent hover:border-[#FF4500]/30 transition-all"
                  >
                    {link.label}
                  </Link>
                  {link.href === '/servicios' && (
                    <div className="pl-6 pr-2 py-1 space-y-1">
                      <Link
                        href="/servicios/landing-pages-alta-conversion"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-neutral-600 dark:text-white/70 hover:text-[#FF4500]"
                      >
                        • Landing Pages CRO
                      </Link>
                      <Link
                        href="/servicios/desarrollo-web-corporativo"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-neutral-600 dark:text-white/70 hover:text-[#FF4500]"
                      >
                        • Desarrollo Web Next.js
                      </Link>
                      <Link
                        href="/servicios/sistemas-saas-cloud"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-neutral-600 dark:text-white/70 hover:text-[#FF4500]"
                      >
                        • Sistemas SaaS Cloud
                      </Link>
                      <Link
                        href="/servicios/aplicaciones-moviles-ios-android"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-neutral-600 dark:text-white/70 hover:text-[#FF4500]"
                      >
                        • Apps Móviles iOS & Android
                      </Link>
                      <Link
                        href="/servicios/sistemas-validacion-pagos"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-neutral-600 dark:text-white/70 hover:text-[#FF4500]"
                      >
                        • Validación Pagos Yape / Plin
                      </Link>
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-neutral-200 dark:border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between px-2 py-1">
                  <span className="text-xs font-semibold text-neutral-600 dark:text-white/60">Tema Visual:</span>
                  <ThemeToggle showLabel />
                </div>

                <a
                  href={COMPANY_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-neutral-100 dark:bg-[#171717] border border-neutral-200 dark:border-white/10 text-sm font-medium text-neutral-800 dark:text-white hover:border-[#25D366]/50 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>WhatsApp: {COMPANY_DATA.formattedPhone}</span>
                </a>
                <Link
                  href="/contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-[#FF4500] to-[#FF1493] text-white text-sm font-bold shadow-lg shadow-[#FF4500]/30"
                >
                  <span>Hablemos de tu Proyecto</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
