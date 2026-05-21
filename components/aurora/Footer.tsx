export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-background/80 backdrop-blur">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex w-8 h-8 items-center justify-center">
                <span className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-aurora-cyan via-aurora-violet to-aurora-pink opacity-90" />
                <span className="absolute inset-[2px] rounded-[8px] bg-background" />
                <span className="relative font-mono text-[13px] font-semibold">A</span>
              </span>
              <span className="font-semibold tracking-tight">Aurora</span>
            </div>
            <p className="mt-4 text-[13.5px] text-muted leading-[1.65] max-w-[320px]">
              Edge-нативная платформа для AI и&nbsp;современных приложений.
              Made with ❤︎ in Москва и&nbsp;Сан-Франциско.
            </p>
          </div>

          {[
            {
              title: "Платформа",
              links: [
                { label: "Runtime", href: "#features" },
                { label: "Observability", href: "#features" },
                { label: "Agents SDK", href: "#features" },
                { label: "Self-hosted", href: "#contact" },
              ],
            },
            {
              title: "Ресурсы",
              links: [
                { label: "Документация", href: "#showcase" },
                { label: "Changelog", href: "#features" },
                { label: "Blog", href: "#features" },
                { label: "GitHub", href: "#contact" },
              ],
            },
            {
              title: "Компания",
              links: [
                { label: "О нас", href: "#features" },
                { label: "Карьера", href: "#contact" },
                { label: "Контакты", href: "#contact" },
                { label: "Press kit", href: "#contact" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-aurora-cyan mb-4">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[13.5px] text-muted hover:text-foreground transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row gap-3 justify-between font-mono text-[11.5px] text-muted-2">
          <span>© {year} Aurora Systems · SOC2 Type II · GDPR · HIPAA</span>
          <span>template 06 · aurora · next 16 · framer motion · gsap</span>
        </div>
      </div>
    </footer>
  );
}
