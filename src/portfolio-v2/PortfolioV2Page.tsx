import { useEffect, useState } from "react";
import { ArrowUpRight, Dot, Moon, Sparkles, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  featuredProjects,
  heroTape,
  services,
  stats,
} from "./data";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const STORAGE_KEY = "portfolio-v2-theme";

const themeStyles = {
  dark: {
    page: "bg-[#0d0d0d] text-white",
    heroSection: "border-b border-white/10 noise-overlay",
    heroGlow: "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]",
    header: "border-b border-white/10 text-white/60",
    navLink: "hover:text-white",
    subtleButton: "border-white/15 hover:border-white/40 hover:text-white",
    badge: "border-[#f0c674]/20 bg-white/5 text-[#f5deb3]",
    eyebrow: "text-white/45",
    body: "text-white/72",
    card: "border-white/10 bg-white/5",
    cardMeta: "text-white/55",
    secondaryAction:
      "border-white/15 text-white/75 hover:border-white/40 hover:text-white",
    tickerWrap: "border-y border-white/10 bg-[#111111]",
    tickerText: "text-white/55",
    aboutAccent: "text-[#f0c674]",
    statCard: "border-white/10 bg-white/[0.03]",
    statText: "text-white/60",
    workSection: "border-t border-white/10 bg-[#111111]",
    workCopy: "text-white/62",
    article: "border-white/10 bg-[#161616]",
    articleImage: "border-white/10 bg-black/30",
    articleMeta: "text-white/45",
    articleBody: "text-white/65",
    divider: "border-white/10",
    tag: "border-white/10 text-white/55",
    actionButton:
      "border-white/15 text-white/70 hover:border-white/40 hover:text-white",
    serviceCard: "border-white/10 bg-white/[0.03]",
    serviceIndex: "text-white/35",
    footer: "border-t border-white/10 bg-[#0a0a0a]",
    footerText: "text-white/65",
    footerMeta: "text-white/58",
    toggleWrap: "border-white/10 bg-white/5",
    toggleActive: "bg-white text-[#101010] shadow-[0_8px_30px_rgba(255,255,255,0.12)]",
    toggleIdle: "text-white/58 hover:text-white",
  },
  light: {
    page: "bg-[#f5f1e8] text-[#151515]",
    heroSection: "border-b border-black/10 bg-[linear-gradient(180deg,#fcfaf5_0%,#efe8d8_100%)]",
    heroGlow: "bg-[radial-gradient(circle_at_top,rgba(240,198,116,0.18),transparent_36%)]",
    header: "border-b border-black/10 text-black/55",
    navLink: "hover:text-black",
    subtleButton: "border-black/15 hover:border-black/35 hover:text-black",
    badge: "border-[#9a6b2f]/20 bg-[#fff8ea] text-[#8f6228]",
    eyebrow: "text-black/45",
    body: "text-black/68",
    card: "border-black/10 bg-white/65",
    cardMeta: "text-black/50",
    secondaryAction:
      "border-black/15 text-black/70 hover:border-black/35 hover:text-black",
    tickerWrap: "border-y border-black/10 bg-[#ece3d2]",
    tickerText: "text-black/50",
    aboutAccent: "text-[#9a6b2f]",
    statCard: "border-black/10 bg-white/60",
    statText: "text-black/55",
    workSection: "border-t border-black/10 bg-[#efe7d8]",
    workCopy: "text-black/60",
    article: "border-black/10 bg-[#fbf8f1]",
    articleImage: "border-black/10 bg-[#e6dccb]",
    articleMeta: "text-black/45",
    articleBody: "text-black/62",
    divider: "border-black/10",
    tag: "border-black/10 text-black/55",
    actionButton:
      "border-black/15 text-black/72 hover:border-black/35 hover:text-black",
    serviceCard: "border-black/10 bg-white/60",
    serviceIndex: "text-black/35",
    footer: "border-t border-black/10 bg-[#e8dece]",
    footerText: "text-black/62",
    footerMeta: "text-black/55",
    toggleWrap: "border-black/10 bg-white/70",
    toggleActive: "bg-[#151515] text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
    toggleIdle: "text-black/55 hover:text-black",
  },
} as const;

const PortfolioV2Page = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  const handleThemeChange = (nextTheme: "light" | "dark") => {
    setTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  const styles = themeStyles[theme];

  return (
    <main className={cn("min-h-screen transition-colors duration-500", styles.page)}>
      <section className={cn("relative overflow-hidden transition-colors duration-500", styles.heroSection, theme === "dark" && "noise-overlay")}>
        <div className={cn("absolute inset-0 transition-colors duration-500", styles.heroGlow)} />
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-10 pt-6 md:px-10 lg:px-16">
          <header className={cn("mb-14 flex items-center justify-between pb-5 text-sm uppercase tracking-[0.28em] transition-colors duration-500", styles.header)}>
            <span>Portfolio V2</span>
            <nav className="hidden gap-8 md:flex">
              <a href="#work" className={cn("transition", styles.navLink)}>
                Work
              </a>
              <a href="#about" className={cn("transition", styles.navLink)}>
                About
              </a>
              <a href="#contact" className={cn("transition", styles.navLink)}>
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex items-center gap-1 rounded-full border p-1 transition-colors duration-500",
                  styles.toggleWrap,
                )}
              >
                <button
                  type="button"
                  onClick={() => handleThemeChange("light")}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3 py-2 text-[11px] transition",
                    theme === "light" ? styles.toggleActive : styles.toggleIdle,
                  )}
                  aria-pressed={theme === "light"}
                >
                  <Sun className="h-3.5 w-3.5" />
                  Light
                </button>
                <button
                  type="button"
                  onClick={() => handleThemeChange("dark")}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3 py-2 text-[11px] transition",
                    theme === "dark" ? styles.toggleActive : styles.toggleIdle,
                  )}
                  aria-pressed={theme === "dark"}
                >
                  <Moon className="h-3.5 w-3.5" />
                  Dark
                </button>
              </div>
              <Link
                to="/"
                className={cn(
                  "hidden rounded-full border px-4 py-2 text-[11px] transition md:inline-flex",
                  styles.subtleButton,
                )}
              >
                Current Site
              </Link>
            </div>
          </header>

          <div className="grid flex-1 items-end gap-14 pb-12 lg:grid-cols-[1.25fr_0.75fr]">
            <motion.div {...fadeUp} className="max-w-4xl">
              <div className={cn("mb-6 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition-colors duration-500", styles.badge)}>
                <span className="h-2 w-2 rounded-full bg-[#f0c674]" />
                Available for select freelance projects
              </div>
              <p className={cn("mb-5 font-editorial text-sm uppercase tracking-[0.35em] transition-colors duration-500", styles.eyebrow)}>
                Satish Chikkala / UI UX Designer
              </p>
              <h1 className="font-display text-[4rem] uppercase leading-[0.9] tracking-[-0.05em] text-balance sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9rem]">
                Building
                <br />
                digital
                <br />
                presence
              </h1>
              <p className={cn("mt-8 max-w-xl font-editorial text-lg leading-8 transition-colors duration-500 md:text-xl", styles.body)}>
                A sharper portfolio direction inspired by high-end studio sites:
                immersive, confident, and built to make design thinking feel tangible.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.12 }}
              className="flex flex-col gap-8 lg:items-end"
            >
              <div className={cn("max-w-sm rounded-[2rem] border p-6 backdrop-blur-sm transition-colors duration-500", styles.card)}>
                <div className={cn("mb-16 flex items-center justify-between text-sm transition-colors duration-500", styles.cardMeta)}>
                  <span>Creative profile</span>
                  <Sparkles className="h-4 w-4 text-[#f0c674]" />
                </div>
                <p className="font-display text-3xl uppercase leading-tight">
                  Premium interactions.
                  <br />
                  Human-centered systems.
                </p>
                <p className={cn("mt-5 font-editorial leading-7 transition-colors duration-500", styles.articleBody)}>
                  Focused on product storytelling, visual depth, and interfaces that
                  feel as considered as the brand behind them.
                </p>
              </div>

              <a
                href="#work"
                className={cn("group inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm uppercase tracking-[0.24em] transition", styles.secondaryAction)}
              >
                Explore selected work
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>
        </div>

        <div className={cn("py-4 transition-colors duration-500", styles.tickerWrap)}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
            className="flex w-max items-center"
          >
            {[...heroTape, ...heroTape, ...heroTape].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className={cn("flex items-center whitespace-nowrap px-6 text-sm uppercase tracking-[0.28em] transition-colors duration-500", styles.tickerText)}
              >
                <Dot className="mr-3 h-5 w-5 text-[#f0c674]" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-16 lg:py-28"
      >
        <motion.div {...fadeUp}>
          <p className={cn("mb-4 text-sm uppercase tracking-[0.32em] transition-colors duration-500", styles.aboutAccent)}>
            About the direction
          </p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.05em] md:text-6xl">
            More cinematic.
            <br />
            Less template.
          </h2>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="grid gap-8"
        >
          <p className={cn("max-w-2xl font-editorial text-lg leading-8 transition-colors duration-500", styles.body)}>
            This version pushes the portfolio toward a more editorial and
            immersive style. The layout uses strong pacing, oversized type,
            restrained color, and clear content blocks to create the same
            premium energy as the reference while still feeling personal to your
            work.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={cn("rounded-[1.75rem] border p-5 transition-colors duration-500", styles.statCard)}
              >
                <p className="font-display text-4xl tracking-[-0.06em] text-[#f5deb3]">
                  {stat.value}
                </p>
                <p className={cn("mt-3 font-editorial text-sm leading-6 transition-colors duration-500", styles.statText)}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="work" className={cn("transition-colors duration-500", styles.workSection)}>
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-28">
          <motion.div {...fadeUp} className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className={cn("mb-4 text-sm uppercase tracking-[0.32em] transition-colors duration-500", styles.aboutAccent)}>
                Selected work
              </p>
              <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.05em] md:text-6xl">
                Featured
                <br />
                projects
              </h2>
            </div>
            <p className={cn("max-w-md font-editorial leading-7 transition-colors duration-500", styles.workCopy)}>
              Structured to feel like case-study snapshots: strong visuals, clear
              context, and enough detail to signal process and polish.
            </p>
          </motion.div>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className={cn("grid gap-6 rounded-[2rem] border p-4 transition-colors duration-500 md:grid-cols-[1.1fr_0.9fr] md:p-6", styles.article)}
              >
                <div className={cn("overflow-hidden rounded-[1.5rem] border transition-colors duration-500", styles.articleImage)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full min-h-[280px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between gap-8 p-2 md:p-4">
                  <div>
                    <p className={cn("mb-3 text-sm uppercase tracking-[0.28em] transition-colors duration-500", styles.articleMeta)}>
                      {project.year} / {project.category}
                    </p>
                    <h3 className="font-display text-3xl uppercase leading-none tracking-[-0.04em] md:text-5xl">
                      {project.title}
                    </h3>
                    <p className={cn("mt-5 max-w-lg font-editorial leading-7 transition-colors duration-500", styles.articleBody)}>
                      {project.summary}
                    </p>
                  </div>
                  <div className={cn("flex flex-col gap-5 border-t pt-5 transition-colors duration-500", styles.divider)}>
                    <div className="flex flex-wrap gap-2">
                      {project.deliverables.map((item) => (
                        <span
                          key={item}
                          className={cn("rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.2em] transition-colors duration-500", styles.tag)}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <button className={cn("inline-flex w-fit items-center gap-3 rounded-full border px-5 py-3 text-sm uppercase tracking-[0.22em] transition", styles.actionButton)}>
                      View project details
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <motion.div {...fadeUp} className="mb-12 max-w-3xl">
          <p className={cn("mb-4 text-sm uppercase tracking-[0.32em] transition-colors duration-500", styles.aboutAccent)}>
            What this version highlights
          </p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.05em] md:text-6xl">
            A more
            <br />
            elevated offer
          </h2>
        </motion.div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.08 }}
              className={cn("rounded-[1.8rem] border p-6 transition-colors duration-500", styles.serviceCard)}
            >
              <p className={cn("mb-14 text-sm uppercase tracking-[0.32em] transition-colors duration-500", styles.serviceIndex)}>
                {service.index}
              </p>
              <h3 className="font-display text-3xl uppercase leading-none tracking-[-0.04em]">
                {service.title}
              </h3>
              <p className={cn("mt-5 font-editorial leading-7 transition-colors duration-500", styles.articleBody)}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer id="contact" className={cn("transition-colors duration-500", styles.footer)}>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-20">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className={cn("mb-4 text-sm uppercase tracking-[0.32em] transition-colors duration-500", styles.aboutAccent)}>
              Contact
            </p>
            <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.05em] md:text-6xl">
              Let&apos;s build
              <br />
              the next version.
            </h2>
            <p className={cn("mt-6 max-w-xl font-editorial text-lg leading-8 transition-colors duration-500", styles.footerText)}>
              If you want, I can also make this `portfolio-v2` the new homepage
              and connect each project card to real case-study pages next.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className={cn("flex flex-col items-start gap-3 text-sm uppercase tracking-[0.24em] transition-colors duration-500", styles.footerMeta)}
          >
            <a href="mailto:satish@example.com" className={cn("transition", styles.navLink)}>
              satish@example.com
            </a>
            <a href="tel:+910000000000" className={cn("transition", styles.navLink)}>
              +91 00000 00000
            </a>
            <span>Based in India</span>
          </motion.div>
        </div>
      </footer>
    </main>
  );
};

export default PortfolioV2Page;
