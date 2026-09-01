'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
}

export function TypewriterText({
  text,
  speed = 35,
  delay = 200,
  className = '',
  highlightWords = [],
  highlightClassName = 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FF6A33] to-[#FF1493]',
}: TypewriterTextProps) {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const startTimeout = setTimeout(() => {
      setDisplayedLength(0);
      setIsComplete(false);

      let currentLength = 0;
      interval = setInterval(() => {
        currentLength++;
        setDisplayedLength(currentLength);
        if (currentLength >= text.length) {
          if (interval) clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay]);

  const currentSubstring = text.slice(0, displayedLength);

  return (
    <span className={`inline-block ${className}`}>
      {/* Texto completo accesible e indexable para motores de búsqueda (Googlebot) en SSR */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{currentSubstring}</span>
      {!isComplete && (
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1.5 sm:w-2 h-7 sm:h-11 bg-[#FF4500] ml-1.5 align-middle rounded-sm"
        />
      )}
    </span>
  );
}
