'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme, isLoaded } = useTheme();

  if (!isLoaded) {
    return (
      <button
        type="button"
        className={`relative p-2.5 rounded-2xl bg-neutral-100 dark:bg-[#171717] border border-neutral-200 dark:border-white/10 text-neutral-400 dark:text-white/50 transition-colors ${className}`}
        aria-label="Cambiar tema"
        disabled
      >
        <Moon className="w-4 h-4 opacity-50" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative flex items-center gap-2 p-2.5 rounded-2xl bg-neutral-100 dark:bg-[#171717] hover:bg-neutral-200 dark:hover:bg-[#222222] border border-neutral-200/90 dark:border-white/10 hover:border-[#FF4500]/50 text-neutral-800 dark:text-white/80 hover:text-neutral-950 dark:hover:text-white transition-all duration-200 active:scale-95 cursor-pointer shadow-sm ${className}`}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
            >
              <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20 group-hover:rotate-45 transition-transform duration-300" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
            >
              <Moon className="w-4 h-4 text-[#FF4500] fill-[#FF4500]/20 group-hover:-rotate-12 transition-transform duration-300" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="text-xs font-semibold">
          {isDark ? 'Modo Claro' : 'Modo Oscuro'}
        </span>
      )}
    </button>
  );
}
