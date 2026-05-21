"use client";

import { motion, useScroll, useSpring } from "motion/react";

const links = [
  { href: "#features", label: "Платформа" },
  { href: "#showcase", label: "Возможности" },
  { href: "#pricing",  label: "Цены" },
  { href: "#contact",  label: "Документация" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-aurora-cyan via-aurora-violet to-aurora-pink"
      />
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative inline-flex w-8 h-8 items-center justify-center">
              <span className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-aurora-cyan via-aurora-violet to-aurora-pink opacity-90 group-hover:opacity-100 transition" />
              <span className="absolute inset-[2px] rounded-[8px] bg-background" />
              <span className="relative font-mono text-[13px] font-semibold tracking-[0.05em]">A</span>
            </span>
            <span className="font-semibold tracking-tight text-[15px]">Aurora</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted px-1.5 py-0.5 border border-border rounded-md">v2.0</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-[13.5px] text-muted">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors relative group">
                {l.label}
                <span className="absolute left-0 right-full -bottom-1 h-[1px] bg-aurora-cyan transition-all group-hover:right-0" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:inline-flex text-[13.5px] text-muted hover:text-foreground transition">
              Войти
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 h-9 rounded-lg
                         bg-foreground text-background text-[13px] font-medium
                         hover:bg-aurora-cyan transition-colors"
            >
              Начать
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
