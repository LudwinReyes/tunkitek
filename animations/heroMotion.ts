import type { Variants, TargetAndTransition } from "motion/react";

/**
 * High-performance Framer Motion variants for TunkiTek Hero & Header components.
 * Optimized strictly for GPU-accelerated properties (transform and opacity) to prevent layout reflow.
 */

// Stagger container for synchronizing child animations sequentially
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Left-to-right fade in for copywriting and CTA elements
export const fadeInLeft: Variants = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for natural ease-out
    },
  },
};

// Right-to-left fade in for the main visual composition
export const fadeInRight: Variants = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Fade in up for badges, captions, and secondary cards
export const fadeInUp: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Word-by-word reveal container for H1
export const wordRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.15,
    },
  },
};

// Individual word animation variant
export const wordRevealItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Infinite smooth floating animation for pills/cards around the hero image
export const floatingEffect = (duration = 4, delay = 0, yRange: [number, number, number] = [0, -15, 0]): TargetAndTransition => ({
  y: yRange,
  transition: {
    duration,
    delay,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut",
  },
});

// Floating variant with presets for different pills
export const floatingBadge1: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
    },
  },
};

export const floatingBadge2: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.6,
    },
  },
};

export const floatingBadge3: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.8,
    },
  },
};

// Organic morphing / subtle pulse for glowing ambient backdrops
export const ambientGlowPulse: Variants = {
  animate: {
    scale: [1, 1.08, 1],
    opacity: [0.4, 0.65, 0.4],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Micro-interaction variants for buttons
export const buttonHoverSpring: TargetAndTransition = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
  },
};

export const buttonTapSpring: TargetAndTransition = {
  scale: 0.96,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
  },
};

// Navigation link underline hover animation
export const navUnderlineVariants: Variants = {
  initial: { width: "0%", left: "50%", opacity: 0 },
  hover: {
    width: "100%",
    left: "0%",
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};
