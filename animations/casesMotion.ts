import type { Variants, TargetAndTransition } from "motion/react";

/**
 * Dedicated Framer Motion Variants for Case Studies Page (/casos-estudio)
 * Focused on GPU-accelerated transforms (x, y, scale, opacity) for smooth 60fps transitions.
 */

// Word-by-word reveal container for Hero H1
export const wordRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Individual word animation variant
export const wordRevealChild: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    rotateX: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1], // Smooth spring-like ease
    },
  },
};

// Stagger container for category filter pills
export const filterPillsContainer: Variants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.08,
      ease: "easeOut",
    },
  },
};

// Filter Presence grid container
export const filterGridContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// Filter Presence variants for cards exiting/entering in AnimatePresence
export const filterPresence: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.88,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 20,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

// Multidirectional grid entrance for asymmetric visual impact based on index
export const getMultidirectionalVariant = (index: number): Variants => {
  const isLeft = index % 3 === 0;
  const isRight = index % 3 === 2;

  return {
    hidden: {
      opacity: 0,
      x: isLeft ? -60 : isRight ? 60 : 0,
      y: !isLeft && !isRight ? 60 : 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      y: 15,
      transition: {
        duration: 0.3,
      },
    },
  };
};

// Magnetic hover interaction for filter buttons and CTA pills
export const magneticHover: TargetAndTransition = {
  scale: 1.05,
  y: -2,
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

// Floating badge ambient animation
export const floatingBadge: TargetAndTransition = {
  y: [0, -6, 0],
  transition: {
    duration: 3.5,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
};
