"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface Props {
  href?: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  className?: string;
}

export default function MagneticButton({ href, children, variant = "primary", className }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width / 2;
    const cy = e.clientY - rect.top - rect.height / 2;
    x.set(cx * 0.25);
    y.set(cy * 0.25);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative inline-flex items-center gap-2 rounded-xl px-6 h-12 text-[14px] font-medium",
        "transition-shadow duration-300 will-change-transform",
        variant === "primary"
          ? "bg-foreground text-background shadow-[0_0_40px_-10px_rgb(95_198_255/0.6)] hover:shadow-[0_0_60px_-10px_rgb(95_198_255/0.9)]"
          : "border border-border text-foreground hover:border-aurora-cyan hover:text-aurora-cyan bg-background/40 backdrop-blur",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}
