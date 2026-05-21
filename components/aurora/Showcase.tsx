"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Опишите функцию",
    desc: "Файл .ts, экспорт async. Без yaml, без docker, без kubernetes.",
    code: `// hello.ts
export default async ({ req }) => {
  return Response.json({
    msg: "hello world",
  });
};`,
  },
  {
    n: "02",
    title: "Один деплой",
    desc: "npx aurora deploy. Через 18 секунд функция доступна на 47 регионах.",
    code: `$ npx aurora deploy hello.ts

  ✓  bundling           42ms
  ✓  uploading        1.4kB
  ✓  routing           47 regions
  ✓  warming pools      180ms

  → https://hello.aurora.app`,
  },
  {
    n: "03",
    title: "Наблюдаемость",
    desc: "Логи, трейсы, метрики — встроены. SQL по логам без отдельной системы.",
    code: `SELECT region, p99_ms, count(*)
FROM logs
WHERE fn = 'hello'
  AND ts > now() - '1h'
GROUP BY region
ORDER BY count(*) DESC;`,
  },
];

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

function range(i: number, total: number) {
  // chunk: [start..end] for step i, padding to avoid <0 / >1
  const start = clamp01(i / total);
  const end = clamp01((i + 1) / total);
  const pad = 0.04;
  return {
    fadeIn:  [Math.max(0, start - pad), start + pad] as [number, number],
    fadeOut: [Math.max(start, end - pad), end] as [number, number],
    visible: [start, start + pad, end - pad, end] as [number, number, number, number],
  };
}

interface StepRowProps {
  step: typeof steps[number];
  i: number;
  total: number;
  progress: MotionValue<number>;
}

function StepRow({ step, i, total, progress }: StepRowProps) {
  const r = range(i, total);
  const opacity = useTransform(progress, r.visible, [0.3, 1, 1, 0.3]);
  const x = useTransform(progress, r.fadeIn, [-12, 0]);
  return (
    <motion.li style={{ opacity, x }} className="flex gap-5">
      <div className="font-mono text-[12px] text-aurora-cyan tracking-[0.15em] pt-1">{step.n}</div>
      <div>
        <h3 className="text-[22px] font-semibold tracking-[-0.01em]">{step.title}</h3>
        <p className="mt-2 text-[14.5px] text-muted leading-[1.65] max-w-[420px]">{step.desc}</p>
      </div>
    </motion.li>
  );
}

interface CodePaneProps {
  step: typeof steps[number];
  i: number;
  total: number;
  progress: MotionValue<number>;
}

function CodePane({ step, i, total, progress }: CodePaneProps) {
  const r = range(i, total);
  const opacity = useTransform(progress, r.visible, [0, 1, 1, 0]);
  const y = useTransform(progress, r.fadeIn, [12, 0]);
  return (
    <motion.pre
      style={{ opacity, y }}
      className="absolute inset-0 m-0 p-6 font-mono text-[13px] leading-[1.7] text-foreground/90 whitespace-pre"
    >
      {step.code}
    </motion.pre>
  );
}

export default function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="showcase" ref={ref} className="relative" style={{ height: `${steps.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="grid-bg opacity-50" />
        <div className="absolute left-[10%] top-[15%] blob bg-aurora-violet" style={{ width: 500, height: 500, opacity: 0.3 }} />
        <div className="absolute right-[5%] bottom-[10%] blob bg-aurora-cyan" style={{ width: 600, height: 600, opacity: 0.25 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 w-full">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/40 backdrop-blur text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
              <span className="w-1 h-1 rounded-full bg-aurora-violet" />
              from ~/dev to prod
            </div>
            <h2 className="mt-6 text-[clamp(36px,5.4vw,60px)] leading-[1.02] tracking-[-0.025em] font-semibold max-w-[700px]">
              Три шага<br/>от файла до глобального edge.
            </h2>
          </div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-start">
            <ol className="space-y-4">
              {steps.map((s, i) => (
                <StepRow key={s.n} step={s} i={i} total={steps.length} progress={scrollYProgress} />
              ))}
            </ol>

            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-aurora-cyan/20 via-transparent to-aurora-violet/20 blur-3xl opacity-60 pointer-events-none" />
              <div className="relative rounded-2xl border border-border/80 bg-background/85 backdrop-blur-xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background-2/50">
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="w-2.5 h-2.5 rounded-full bg-aurora-cyan shadow-[0_0_8px_rgb(95_198_255/0.8)]" />
                  <span className="ml-3 font-mono text-[11.5px] text-muted tracking-[0.04em]">aurora.dev / hello.ts</span>
                </div>
                <div className="relative h-[360px] overflow-hidden">
                  {steps.map((s, i) => (
                    <CodePane key={i} step={s} i={i} total={steps.length} progress={scrollYProgress} />
                  ))}
                </div>
                <div className="px-4 py-3 border-t border-border bg-background-2/50 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-2">
                  <span className="inline-flex w-1.5 h-1.5 rounded-full bg-aurora-mint animate-pulse" />
                  <span className="text-aurora-mint">live</span>
                  <span>·</span>
                  <span>auto-deploy on save</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
