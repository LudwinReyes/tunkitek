import type { Variants, TargetAndTransition } from "motion/react";

/**
 * Multidirectional Choreography Variants for Pages (/servicios/[slug], /nosotros, /faq)
 * Rules:
 * - Images/visuals enter from sides (x: 100 or x: -100)
 * - Copy enters from opposite side (x: -60 or y: 20)
 * - CTAs enter from bottom (y: 40)
 * - Strict GPU acceleration (transform + opacity) for 60fps
 */

// Stagger container for sequential section reveals
export const pageStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Multidirectional: Image/Visual entering from right
export const visualEnterRight: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1], // Smooth cubic bezier
    },
  },
};

// Multidirectional: Visual entering from left
export const visualEnterLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Multidirectional: Copy entering from left (opposite to visual entering from right)
export const textEnterLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Multidirectional: Copy entering from right
export const textEnterRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Multidirectional: CTA / Action elements entering strictly from bottom
export const ctaEnterBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Word-by-word reveal for H1 Headings
export const wordRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

export const wordRevealItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    rotateX: -25,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Bento Card Reveal on scroll
export const bentoItemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Accordion Content Collapse/Expand for FAQ
export const accordionContentVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.2 },
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.38, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.3, delay: 0.1 },
    },
  },
};

// Icon rotation for FAQ
export const accordionIconVariants: Variants = {
  collapsed: { rotate: 0 },
  expanded: { rotate: 180 },
};

// Infinite Marquee Scroll (Continuous smooth banner)
export const marqueeVariants: Variants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 24,
        ease: "linear",
      },
    },
  },
};

// Magnetic Spring Hover
export const magneticHoverSpring: TargetAndTransition = {
  scale: 1.035,
  y: -3,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 18,
  },
};

export const magneticTapSpring: TargetAndTransition = {
  scale: 0.97,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 18,
  },
};
