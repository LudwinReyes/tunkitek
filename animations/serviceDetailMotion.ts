import type { Variants, TargetAndTransition } from "motion/react";

/**
 * Dedicated Framer Motion variants for Service Detail Landing Pages (/servicios/[slug])
 * Strictly GPU-accelerated (transform, opacity) to ensure 60fps performance and zero layout shift.
 */

// Hero detail reveal variant: moves from y: -30 to y: 0 with opacity fade-in
export const heroDetailReveal: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier
    },
  },
};

// Container for staggering hero elements (badge, title, subtitle, CTAs)
export const heroStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

// Cascading feature grid stagger container on scroll
export const featureGridStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

// Individual item reveal for technical capabilities cards
export const featureCardItem: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Infinite organic floating animation for technology and integration badges (y: [0, -8, 0])
export const techBadgeFloat: TargetAndTransition = {
  y: [0, -8, 0],
  transition: {
    duration: 3.8,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
};

// Dynamic floating badge with custom offset and duration for natural organic asymmetry
export const customBadgeFloat = (duration = 3.5, yDistance = -8, delay = 0): TargetAndTransition => ({
  y: [0, yDistance, 0],
  transition: {
    duration,
    delay,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
});

// Magnetic hover interaction for interactive buttons and pills
export const buttonHoverSpring: TargetAndTransition = {
  scale: 1.04,
  y: -2,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 18,
  },
};

export const buttonTapSpring: TargetAndTransition = {
  scale: 0.96,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 18,
  },
};

// Icon pulse and subtle tilt on card hover
export const iconPulseHover: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// Pulsing glow for highlighted conversion CTA card
export const ctaGlowPulse: TargetAndTransition = {
  boxShadow: [
    "0 0 20px rgba(255, 69, 0, 0.2)",
    "0 0 45px rgba(255, 69, 0, 0.45)",
    "0 0 20px rgba(255, 69, 0, 0.2)",
  ],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
