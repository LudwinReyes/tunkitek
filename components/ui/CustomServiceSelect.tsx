'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  ShoppingCart,
  Cpu,
  Smartphone,
  Bot,
  Briefcase,
  ChevronDown,
  Check,
} from 'lucide-react';
import { SERVICE_SELECT_OPTIONS, ServiceSelectGroup } from '@/lib/data';

interface CustomServiceSelectProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const ICON_MAP: Record<string, typeof Code2> = {
  Code2,
  ShoppingCart,
  Cpu,
  Smartphone,
  Bot,
  Briefcase,
};

export function CustomServiceSelect({
  id,
  value,
  onChange,
  className = '',
}: CustomServiceSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Find active group icon
  let activeIcon = Code2;
  for (const group of SERVICE_SELECT_OPTIONS) {
    if (group.options.some((opt) => opt.value === value)) {
      activeIcon = (ICON_MAP[group.iconName] || Code2);
      break;
    }
  }
  const ActiveIconComponent = activeIcon;

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 dark:bg-[#1A1A1A] border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-all duration-200 flex items-center justify-between gap-3 text-left cursor-pointer shadow-sm hover:border-[#FF4500]/50"
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <ActiveIconComponent className="w-4 h-4 text-[#FF4500] shrink-0" />
          <span className="truncate font-medium text-xs sm:text-sm">
            {value || 'Seleccionar un servicio o plan...'}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-neutral-500 dark:text-white/50 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#FF4500]' : ''
          }`}
        />
      </button>

      {/* Hidden input for form submission */}
      <input type="hidden" name="serviceInterest" value={value} />

      {/* Dropdown Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            role="listbox"
            className="absolute z-50 left-0 right-0 mt-2 max-h-72 sm:max-h-80 overflow-y-auto overscroll-contain rounded-2xl bg-white dark:bg-[#161616] border border-neutral-200 dark:border-white/15 shadow-2xl p-2.5 pb-5 backdrop-blur-2xl text-neutral-900 dark:text-white"
          >
            {SERVICE_SELECT_OPTIONS.map((groupItem: ServiceSelectGroup) => {
              const GroupIcon = ICON_MAP[groupItem.iconName] || Code2;
              return (
                <div key={groupItem.group} className="mb-2.5 last:mb-0">
                  {/* Group Header with Lucide Icon */}
                  <div className="px-3 py-1.5 flex items-center gap-2 rounded-lg bg-neutral-100/70 dark:bg-white/5 text-[11px] font-bold uppercase tracking-wider text-[#FF4500] select-none">
                    <GroupIcon className="w-3.5 h-3.5 text-[#FF4500] shrink-0" />
                    <span>{groupItem.group}</span>
                  </div>

                  {/* Group Options */}
                  <div className="mt-1 space-y-0.5">
                    {groupItem.options.map((option) => {
                      const isSelected = option.value === value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            onChange(option.value);
                            setIsOpen(false);
                          }}
                          className={`w-full px-3 py-2 rounded-xl text-left text-xs sm:text-sm transition-all duration-150 flex items-center justify-between gap-2 cursor-pointer ${
                            isSelected
                              ? 'bg-[#FF4500]/15 text-[#FF4500] font-bold dark:bg-[#FF4500]/20'
                              : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/10 hover:text-neutral-950 dark:hover:text-white'
                          }`}
                        >
                          <span className="truncate">{option.label}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#FF4500] shrink-0 stroke-[2.5]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
