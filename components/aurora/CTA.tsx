"use client";

import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";
import { EASE } from "@/lib/motion";

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob bg-aurora-cyan" style={{ top: "10%", left: "20%", width: 500, height: 500, opacity: 0.35 }} />
        <div className="blob bg-aurora-pink" style={{ bottom: "5%", right: "10%", width: 600, height: 600, opacity: 0.3 }} />
        <div className="blob bg-aurora-violet" style={{ top: "30%", right: "30%", width: 400, height: 400, opacity: 0.25 }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative max-w-[1100px] mx-auto px-6 lg:px-10 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-aurora-cyan/40 bg-aurora-cyan/5 backdrop-blur text-[11px] font-mono uppercase tracking-[0.18em] text-aurora-cyan">
          <span className="w-1 h-1 rounded-full bg-aurora-cyan animate-pulse" />
          start building
        </div>

        <h2 className="mt-7 text-[clamp(44px,7vw,96px)] leading-[0.98] tracking-[-0.03em] font-semibold max-w-[14ch] mx-auto">
          Запустите свой<br/>
          <span className="aurora-text italic font-medium">первый edge-deploy</span><br/>
          за 60 секунд.
        </h2>

        <p className="mt-7 text-[clamp(15px,1.3vw,17px)] text-muted leading-[1.7] max-w-[520px] mx-auto">
          Бесплатный план до 100&nbsp;000 вызовов в&nbsp;месяц.
          Без карты, без trial limit, без обмана.
        </p>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-3">
          <MagneticButton href="#signup" variant="primary">
            <span>Создать аккаунт</span>
            <span aria-hidden>→</span>
          </MagneticButton>
          <MagneticButton href="#docs" variant="ghost">
            <span className="font-mono text-[12.5px]">Документация</span>
          </MagneticButton>
        </div>

        <div className="mt-14 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[12px] font-mono text-muted-2 uppercase tracking-[0.16em]">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-aurora-mint" />
            no credit card
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-aurora-mint" />
            soc2 type II
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-aurora-mint" />
            gdpr · hipaa
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-aurora-mint" />
            self-host available
          </span>
        </div>
      </motion.div>
    </section>
  );
}
