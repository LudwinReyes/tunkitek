import type { Variants, TargetAndTransition } from "motion/react";

/**
 * High-performance Framer Motion animation variants for:
 * - ValueProposition Section
 * - Mega Services Cards
 *
 * Optimized purely for GPU-accelerated properties (transform, opacity) to avoid browser reflow.
 */

// Stagger container for the Value Proposition Grid
export const staggerRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

// Item reveal for Value Proposition cards entering from bottom (y: 80)
export const staggerRevealItem: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier spring-like ease
    },
  },
};

// Multidirectional text reveal for Mega-Tarjetas (entering from left: x: -100)
export const multidirectionalTextReveal: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Multidirectional image reveal for Mega-Tarjetas (entering from right: x: 100)
export const multidirectionalImageReveal: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Inverted text reveal when layout alternates (text from right)
export const multidirectionalTextRevealInverted: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Inverted image reveal when layout alternates (image from left)
export const multidirectionalImageRevealInverted: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Magnetic hover interaction for buttons and interactive controls
export const magneticHover: TargetAndTransition = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
  },
};

export const magneticTap: TargetAndTransition = {
  scale: 0.95,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
  },
};

// Icon heartbeat / magnetic floating pulse when card is hovered
export const iconHeartbeatHover: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: [1, 1.18, 1.08, 1.15],
    rotate: [0, -6, 6, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// Ambient feature badge floating effect
export const badgeFloatVariant = (duration = 3.5, yRange: [number, number, number] = [0, -8, 0]): TargetAndTransition => ({
  y: yRange,
  transition: {
    duration,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut",
  },
});
