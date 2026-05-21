import type { Transition, Variants, Easing } from "motion/react";

export const EASE: Easing = [0.22, 1, 0.36, 1];

export const SPRING: Record<string, Transition> = {
  default: { type: "spring", stiffness: 260, damping: 22 },
  gentle: { type: "spring", stiffness: 180, damping: 26 },
  snappy: { type: "spring", stiffness: 400, damping: 30 },
  bouncy: { type: "spring", stiffness: 320, damping: 16 },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
