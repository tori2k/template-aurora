"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const TITLE = ["AI", "infra,", "without", "the", "infra."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section id="top" ref={ref} className="relative pt-12 pb-32 overflow-hidden">
      {/* aurora blobs */}
      <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 pointer-events-none">
        <div className="blob bg-aurora-violet" style={{ top: "-10%", left: "8%", width: 580, height: 580 }} />
        <div className="blob bg-aurora-cyan" style={{ top: "20%", right: "-5%", width: 700, height: 700, opacity: 0.4 }} />
        <div className="blob bg-aurora-pink" style={{ bottom: "-15%", left: "30%", width: 520, height: 520, opacity: 0.35 }} />
      </motion.div>
      <div className="grid-bg" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24">
        {/* announcement pill */}
        <motion.a
          href="#features"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-1 pr-4 py-1 rounded-full border border-border bg-background/50 backdrop-blur-md
                     text-[12.5px] text-muted hover:text-foreground hover:border-aurora-cyan/60 transition-colors group"
        >
          <span className="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full bg-aurora-violet/15 text-aurora-cyan font-mono text-[10.5px] tracking-[0.12em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-aurora-cyan animate-pulse" />
            New
          </span>
          <span>Aurora 2.0 — sub-200ms cold starts, anywhere</span>
          <span aria-hidden className="text-muted group-hover:text-aurora-cyan transition-transform group-hover:translate-x-0.5">→</span>
        </motion.a>

        {/* headline */}
        <h1
          aria-label={TITLE.join(" ")}
          className="mt-7 text-[clamp(46px,8vw,108px)] leading-[0.96] tracking-[-0.04em] font-semibold max-w-[15ch]"
        >
          {TITLE.map((word, i) => (
            <span key={i} aria-hidden="true" className="inline-block overflow-hidden align-bottom mr-[0.18em]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.85, ease: "easeOut" }}
                className={
                  word === "without"
                    ? "inline-block aurora-text italic font-medium"
                    : "inline-block"
                }
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
            className="text-[clamp(15px,1.4vw,18px)] text-muted leading-[1.65] max-w-[480px]"
          >
            Edge-нативный рантайм для LLM-агентов, веб-приложений
            и&nbsp;воркфлоу. Деплой одной командой, observability
            из&nbsp;коробки, инфраструктура&nbsp;— спрятана.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#contact" variant="primary">
              <span>Запустить демо</span>
              <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton href="#showcase" variant="ghost">
              <span className="font-mono text-[12.5px]">{`$ npx aurora init`}</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: "easeOut" }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border/60"
        >
          {[
            { num: "180ms", lbl: "cold start" },
            { num: "99.99%", lbl: "uptime SLA" },
            { num: "47", lbl: "edge regions" },
            { num: "1.4M", lbl: "monthly requests" },
          ].map((m) => (
            <div key={m.lbl} className="bg-background/80 backdrop-blur p-5 lg:p-6">
              <div className="text-[clamp(26px,3.2vw,38px)] font-semibold tracking-[-0.02em] leading-none">
                {m.num}
              </div>
              <div className="mt-2 text-[10.5px] font-mono uppercase tracking-[0.18em] text-muted-2">
                {m.lbl}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
