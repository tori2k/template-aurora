"use client";

import { motion } from "motion/react";
import { EASE } from "@/lib/motion";

const cards = [
  {
    span: "md:col-span-2 md:row-span-2",
    eyebrow: "01 · runtime",
    title: "Edge-native execution",
    desc: "Каждая функция деплоится на 47 регионов. Один URL, ноль конфигурации. Sub-200ms cold start.",
    accent: "aurora-cyan",
    visual: "graph",
  },
  {
    span: "md:col-span-2",
    eyebrow: "02 · observability",
    title: "Logs, traces, metrics — встроены",
    desc: "Open-telemetry под капотом. SQL по логам без отдельного Datadog.",
    accent: "aurora-violet",
    visual: "wave",
  },
  {
    span: "md:col-span-1 md:row-span-2",
    eyebrow: "03 · agents",
    title: "LLM-агенты first-class",
    desc: "Memory, tools, streaming. SDK для OpenAI, Anthropic, Mistral.",
    accent: "aurora-pink",
    visual: "orbit",
  },
  {
    span: "md:col-span-1",
    eyebrow: "04 · pricing",
    title: "Pay-per-call",
    desc: "$0.000004 / invocation.",
    accent: "aurora-mint",
    visual: "stat",
  },
  {
    span: "md:col-span-2",
    eyebrow: "05 · DX",
    title: "TypeScript-first, batteries included",
    desc: "Тип-безопасный SDK, hot-reload, превью на каждый PR. Local-first dev experience.",
    accent: "aurora-cyan",
    visual: "code",
  },
];

const item = {
  hidden: { opacity: 0, y: 26 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function Bento() {
  return (
    <section id="features" className="relative py-32">
      <div className="grid-bg" />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="max-w-[820px] mb-16"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/40 backdrop-blur text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
            <span className="w-1 h-1 rounded-full bg-aurora-cyan" />
            platform
          </motion.div>
          <motion.h2 variants={item} className="mt-6 text-[clamp(36px,5.6vw,64px)] leading-[1.02] tracking-[-0.025em] font-semibold">
            Один runtime,<br/>
            <span className="aurora-text italic font-medium">всё остальное</span>{" "}
            из коробки.
          </motion.h2>
          <motion.p variants={item} className="mt-5 text-[16px] text-muted leading-[1.7] max-w-[560px]">
            Aurora собирает в одну платформу шесть инструментов, которые
            обычно приходится склеивать вручную.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[220px] gap-4"
        >
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`relative ${c.span} group rounded-2xl border border-border bg-background/60 backdrop-blur-sm overflow-hidden p-6 hover:border-${c.accent}/50 transition-colors`}
            >
              {/* corner glow */}
              <div className={`absolute -top-12 -right-12 w-44 h-44 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-${c.accent}/30 blur-3xl`} />
              {/* visual */}
              <BentoVisual variant={c.visual} accent={c.accent} />
              <div className="relative">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-2">{c.eyebrow}</div>
                <h3 className="mt-4 text-[19px] font-semibold tracking-[-0.01em] leading-snug">{c.title}</h3>
                <p className="mt-2 text-[13.5px] text-muted leading-[1.6] max-w-[40ch]">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BentoVisual({ variant, accent }: { variant: string; accent: string }) {
  if (variant === "graph") {
    return (
      <svg className="absolute right-6 top-6 w-44 h-44 opacity-50" viewBox="0 0 160 160" fill="none">
        {[...Array(7)].map((_, i) => (
          <circle key={i} cx={20 + i * 20} cy={80 + Math.sin(i) * 22} r="3" className={`fill-${accent}`} />
        ))}
        <path d="M20,80 Q40,55 60,80 T100,80 T140,80" className={`stroke-${accent}`} strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M20,80 Q40,105 60,80 T100,80 T140,80" className={`stroke-${accent}`} strokeWidth="1.5" fill="none" opacity="0.35" />
      </svg>
    );
  }
  if (variant === "wave") {
    return (
      <svg className="absolute right-4 top-4 w-40 h-24 opacity-45" viewBox="0 0 200 80" fill="none">
        <path d="M0,40 Q25,10 50,40 T100,40 T150,40 T200,40" className={`stroke-${accent}`} strokeWidth="2" fill="none">
          <animate attributeName="d"
            values="M0,40 Q25,10 50,40 T100,40 T150,40 T200,40;
                    M0,40 Q25,60 50,40 T100,40 T150,40 T200,40;
                    M0,40 Q25,10 50,40 T100,40 T150,40 T200,40"
            dur="6s" repeatCount="indefinite" />
        </path>
      </svg>
    );
  }
  if (variant === "orbit") {
    return (
      <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-32 h-32 opacity-50" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="48" className={`stroke-${accent}`} strokeWidth="0.8" opacity="0.3" />
        <circle cx="60" cy="60" r="32" className={`stroke-${accent}`} strokeWidth="0.8" opacity="0.4" />
        <circle cx="60" cy="60" r="18" className={`stroke-${accent}`} strokeWidth="0.8" opacity="0.55" />
        <circle cx="60" cy="60" r="3" className={`fill-${accent}`} />
        <circle cx="108" cy="60" r="3.5" className={`fill-${accent}`}>
          <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="14s" repeatCount="indefinite"/>
        </circle>
        <circle cx="92" cy="60" r="2.5" className={`fill-${accent}`}>
          <animateTransform attributeName="transform" type="rotate" from="360 60 60" to="0 60 60" dur="10s" repeatCount="indefinite"/>
        </circle>
      </svg>
    );
  }
  if (variant === "stat") {
    return (
      <div className="absolute inset-x-6 bottom-6 font-mono text-[10px] text-muted-2 uppercase tracking-[0.12em] opacity-60">
        // ~$0.40 / 100k requests
      </div>
    );
  }
  if (variant === "code") {
    return (
      <pre className="absolute right-6 top-6 font-mono text-[10.5px] leading-[1.55] text-muted-2 opacity-60 select-none">
{`import { aurora } from "@aurora/sdk";
export default aurora.fn(
  async ({ req }) => {
    return Response.json({
      ok: true, ts: Date.now()
    });
  });`}
      </pre>
    );
  }
  return null;
}
