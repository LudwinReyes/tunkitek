import type { Variants, TargetAndTransition } from "motion/react";

/**
 * Framer Motion animation configurations for Services Hub (/servicios)
 * All animations use GPU-accelerated transforms to eliminate layout shifts/reflows.
 */

export const servicesHubContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const servicesHeaderReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const bentoCardVariant: Variants = {
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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const cardHoverTransition: TargetAndTransition = {
  y: -6,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

export const detailsButtonHover: TargetAndTransition = {
  x: 5,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 25,
  },
};
