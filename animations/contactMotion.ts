import type { Variants, TargetAndTransition } from "motion/react";

/**
 * Dedicated Framer Motion variants for Contact Page (/contacto)
 * Strictly GPU-accelerated (transform, opacity) to ensure 60fps performance and zero reflow.
 */

// Left column entrance variant (from -x with smooth spring)
export const leftColumnReveal: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.9,
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Right column entrance variant (from +x with smooth spring)
export const rightColumnReveal: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.9,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Split Stagger container coordinating left and right entry
export const contactSplitStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

// Word-by-word reveal for Hero H1
export const headlineWordReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    rotateX: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Micro-interaction: Icon bounce on input focus
export const inputFocusMotion: Variants = {
  unfocused: {
    scale: 1,
    rotate: 0,
    color: "rgba(255, 255, 255, 0.4)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
  focused: {
    scale: 1.15,
    rotate: -6,
    color: "#FF4500",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
};

// Magnetic hover interaction for quick contact cards
export const contactCardHover: TargetAndTransition = {
  scale: 1.025,
  y: -4,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 20,
  },
};

export const contactCardTap: TargetAndTransition = {
  scale: 0.98,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 20,
  },
};

// Submit button hover with glow expansion
export const submitButtonHover: TargetAndTransition = {
  scale: 1.02,
  boxShadow: "0 0 35px rgba(255, 69, 0, 0.55)",
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 18,
  },
};

export const submitButtonTap: TargetAndTransition = {
  scale: 0.97,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 18,
  },
};

// Floating icon ambient pulse
export const iconAmbientPulse: TargetAndTransition = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
