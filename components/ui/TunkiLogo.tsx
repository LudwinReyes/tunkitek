'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface TunkiLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'oscuro' | 'claro';
}

export function TunkiLogo({
  className = '',
  size = 'md',
  variant,
}: TunkiLogoProps) {
  const sizeMap = {
    sm: { width: 120, height: 32, icon: 28, text: 'text-lg', sub: 'text-[9px]' },
    md: { width: 155, height: 42, icon: 38, text: 'text-xl', sub: 'text-[10px]' },
    lg: { width: 190, height: 52, icon: 48, text: 'text-2xl', sub: 'text-[11px]' },
  };

  const currentSize = sizeMap[size];

  return (
    <Link
      href="/"
      id="tunkitek-brand-logo"
      className={`group inline-flex items-center gap-3 select-none transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="TunkiTek Inicio"
    >
      <div className="relative flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#FF4500] to-[#FF1493] opacity-35 blur-sm group-hover:opacity-75 transition-opacity duration-300 pointer-events-none" />

        {/* Responsive Logo switching with CSS for zero layout shift */}
        <div className="relative overflow-hidden rounded-xl flex items-center">
          {variant === 'oscuro' ? (
            <Image
              src="/logos/tunkitek-oscuro.png"
              alt="TunkiTek - Agencia de Tecnología e Innovación"
              width={currentSize.width}
              height={currentSize.height}
              priority
              className="object-contain h-auto w-auto max-h-[44px] transition-transform duration-300 group-hover:scale-105"
            />
          ) : variant === 'claro' ? (
            <Image
              src="/logos/tunkitek-claro.png"
              alt="TunkiTek - Agencia de Tecnología e Innovación"
              width={currentSize.width}
              height={currentSize.height}
              priority
              className="object-contain h-auto w-auto max-h-[44px] transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <>
              {/* Default: auto toggle based on theme class */}
              <Image
                src="/logos/tunkitek-oscuro.png"
                alt="TunkiTek - Agencia de Tecnología e Innovación"
                width={currentSize.width}
                height={currentSize.height}
                priority
                className="object-contain h-auto w-auto max-h-[44px] transition-transform duration-300 group-hover:scale-105 hidden dark:block"
              />
              <Image
                src="/logos/tunkitek-claro.png"
                alt="TunkiTek - Agencia de Tecnología e Innovación"
                width={currentSize.width}
                height={currentSize.height}
                priority
                className="object-contain h-auto w-auto max-h-[44px] transition-transform duration-300 group-hover:scale-105 block dark:hidden"
              />
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
