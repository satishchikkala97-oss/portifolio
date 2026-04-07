import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Moon, Sparkles, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import {
  aboutCopy,
  contactInfo,
  heroTape,
  processSteps,
  services,
  skills,
  socialLinks,
  stats,
  toolStack,
} from "./data";
import type { ThemePalette } from "./types";
import HeroSection from "./components/HeroSection";

gsap.registerPlugin(ScrollTrigger);

const STORAGE_KEY = "portfolio-v2-theme";

const themeStyles = {
  dark: {
    page: "bg-[#0d0d0d] text-white",
    heroSection: "border-b border-white/10 bg-[linear-gradient(180deg,#0e0e0f_0%,#121212_46%,#0c0c0c_100%)]",
    heroGlow:
      "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_36%)]",
    meshGlow:
      "bg-[radial-gradient(circle_at_20%_20%,rgba(240,198,116,0.12),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(72,168,255,0.1),transparent_24%)]",
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
    accent: "text-[#f0c674]",
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
    mutedCard: "border-white/10 bg-white/[0.03]",
    toggleWrap: "border-white/10 bg-white/5",
    toggleActive:
      "bg-white text-[#101010] shadow-[0_8px_30px_rgba(255,255,255,0.12)]",
    toggleIdle: "text-white/58 hover:text-white",
    heroPanel: "border-white/10 bg-white/[0.04]",
    heroBackdrop: "from-white/10 via-white/5 to-white/0",
    profileFrame:
      "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_30px_80px_rgba(0,0,0,0.45)]",
    profileRing: "border-white/10",
    floatingCard:
      "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] text-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.32)]",
    visualLabel: "border-white/10 bg-black/25 text-white/55",
  },
  light: {
    page: "bg-[#f5f1e8] text-[#151515]",
    heroSection:
      "border-b border-black/10 bg-[linear-gradient(180deg,#fcfaf5_0%,#efe8d8_50%,#f5efe4_100%)]",
    heroGlow:
      "bg-[radial-gradient(circle_at_top,rgba(240,198,116,0.18),transparent_36%)]",
    meshGlow:
      "bg-[radial-gradient(circle_at_18%_18%,rgba(201,145,52,0.14),transparent_22%),radial-gradient(circle_at_82%_14%,rgba(114,153,215,0.14),transparent_24%)]",
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
    accent: "text-[#9a6b2f]",
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
    mutedCard: "border-black/10 bg-white/60",
    toggleWrap: "border-black/10 bg-white/70",
    toggleActive:
      "bg-[#151515] text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
    toggleIdle: "text-black/55 hover:text-black",
    heroPanel: "border-black/10 bg-white/55",
    heroBackdrop: "from-[#f2e7d3] via-white/40 to-transparent",
    profileFrame:
      "border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.52))] shadow-[0_28px_70px_rgba(135,106,52,0.18)]",
    profileRing: "border-black/10",
    floatingCard:
      "border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.7))] text-black/75 shadow-[0_18px_40px_rgba(93,72,37,0.14)]",
    visualLabel: "border-black/10 bg-white/65 text-black/50",
  },
} as const satisfies Record<"dark" | "light", ThemePalette>;

const PortfolioV2Page = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const rootRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const profileSceneRef = useRef<HTMLDivElement | null>(null);
  const profileCardRef = useRef<HTMLDivElement | null>(null);
  const toolRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      return;
    }

    setTheme("light");
  }, []);

  const handleThemeChange = (nextTheme: "light" | "dark") => {
    setTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  const styles = themeStyles[theme];
  const repeatedTape = useMemo(() => [...heroTape, ...heroTape, ...heroTape], []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        return;
      }

      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTimeline
        .fromTo(
          "[data-gsap='header']",
          { y: -24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
        )
        .fromTo(
          "[data-gsap='eyebrow']",
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.45",
        )
        .fromTo(
          "[data-gsap='title-line']",
          { yPercent: 110, opacity: 0, rotateX: -18 },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.1,
            stagger: 0.08,
          },
          "-=0.38",
        )
        .fromTo(
          "[data-gsap='intro-copy']",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
          "-=0.72",
        )
        .fromTo(
          profileCardRef.current,
          { y: 40, opacity: 0, rotateY: -10, rotateX: 8, scale: 0.96 },
          { y: 0, opacity: 1, rotateY: 0, rotateX: 0, scale: 1, duration: 1.1 },
          "-=0.78",
        )
        .fromTo(
          toolRefs.current.filter(Boolean),
          { opacity: 0, scale: 0.7, y: 30, rotate: -8 },
          { opacity: 1, scale: 1, y: 0, rotate: 0, duration: 0.8, stagger: 0.07 },
          "-=0.78",
        );

      if (profileSceneRef.current && profileCardRef.current) {
        gsap.to(profileCardRef.current, {
          yPercent: -10,
          rotateY: 8,
          rotateX: 6,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(profileSceneRef.current, {
          yPercent: -8,
          scale: 1.03,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      toolRefs.current.forEach((tool, index) => {
        if (!tool) return;

        gsap.to(tool, {
          y: index % 2 === 0 ? -18 : 18,
          x: index % 2 === 0 ? 10 : -10,
          rotate: index % 2 === 0 ? 5 : -5,
          repeat: -1,
          yoyo: true,
          duration: 2.8 + index * 0.25,
          ease: "sine.inOut",
        });

        gsap.to(tool, {
          yPercent: -24 - index * 3,
          scale: 0.96 + index * 0.012,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: index % 3 === 0 ? 0 : 0.05,
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
            },
          },
        );
      });

      gsap.to("[data-gsap='ticker']", {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }, rootRef);

    return () => ctx.revert();
  }, [theme]);

  return (
    <main
      ref={rootRef}
      className={cn("min-h-screen transition-colors duration-500", styles.page)}
    >
      <section
        ref={heroRef}
        className={cn(
          "relative overflow-hidden transition-colors duration-500",
          styles.heroSection,
        )}
      >
        <div className={cn("absolute inset-0 transition-colors duration-500", styles.heroGlow)} />
        <div className={cn("absolute inset-0 transition-colors duration-500", styles.meshGlow)} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/10 to-transparent dark:from-black/10" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-10 pt-6 md:px-10 lg:px-16">
          <header
            data-gsap="header"
            className={cn(
              "mb-14 flex items-center justify-between pb-5 text-sm uppercase tracking-[0.28em] transition-colors duration-500",
              styles.header,
            )}
          >
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

          <div className="grid flex-1 items-center gap-16 pb-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div ref={introRef} className="max-w-4xl">
              <div
                data-gsap="eyebrow"
                className={cn(
                  "mb-6 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition-colors duration-500",
                  styles.badge,
                )}
              >
                <span className="h-2 w-2 rounded-full bg-[#f0c674]" />
                Available for select freelance projects
              </div>
              <p
                data-gsap="intro-copy"
                className={cn(
                  "mb-5 font-editorial text-sm uppercase tracking-[0.35em] transition-colors duration-500",
                  styles.eyebrow,
                )}
              >
                Hello I&apos;m / Satish Chikkala / UI UX Designer
              </p>
              <h1
                ref={headingRef}
                className="font-display text-[4rem] uppercase leading-[0.88] tracking-[-0.06em] text-balance sm:text-[5.5rem] md:text-[7.1rem] lg:text-[8.8rem]"
              >
                <span className="block overflow-hidden">
                  <span className="block [transform-origin:50%_100%]" data-gsap="title-line">
                    Designing
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="block [transform-origin:50%_100%]" data-gsap="title-line">
                    motion-rich
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="block [transform-origin:50%_100%]" data-gsap="title-line">
                    digital stories
                  </span>
                </span>
              </h1>
              <p
                data-gsap="intro-copy"
                className={cn(
                  "mt-8 max-w-xl font-editorial text-lg leading-8 transition-colors duration-500 md:text-xl",
                  styles.body,
                )}
              >
                A passionate UI/UX designer focused on growth, innovation, and
                human-centered design. I create seamless digital journeys that move
                ideas into action.
              </p>
              <div data-gsap="intro-copy" className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className={cn(
                    "group inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm uppercase tracking-[0.24em] transition",
                    styles.secondaryAction,
                  )}
                >
                  Explore selected work
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <div
                  className={cn(
                    "rounded-full border px-5 py-3 text-sm uppercase tracking-[0.24em] transition-colors duration-500",
                    styles.visualLabel,
                  )}
                >
                  GSAP-powered motion system
                </div>
              </div>
            </div>

            <div
              ref={profileSceneRef}
              className="relative mx-auto flex w-full max-w-[44rem] items-center justify-center [perspective:1800px] lg:-mr-10"
            >
              <div
                className={cn(
                  "absolute inset-[6%] rounded-full bg-gradient-to-br blur-3xl transition-colors duration-500",
                  styles.heroBackdrop,
                )}
              />
              <div
                className={cn(
                  "absolute inset-[4%] rounded-[3.2rem] border backdrop-blur-sm transition-colors duration-500",
                  styles.heroPanel,
                )}
              />
              <div
                ref={profileCardRef}
                className={cn(
                  "relative z-10 w-[82%] rounded-[2.3rem] border p-5 [transform-style:preserve-3d] transition-colors duration-500 sm:w-[80%] lg:w-[84%]",
                  styles.profileFrame,
                )}
              >
                <div
                  className={cn(
                    "overflow-hidden rounded-[1.6rem] border transition-colors duration-500",
                    styles.profileRing,
                  )}
                >
                  <img
                    src="/profile.jpg"
                    alt="Satish portrait"
                    className="h-full min-h-[28rem] w-full object-cover sm:min-h-[34rem] lg:min-h-[40rem]"
                  />
                </div>
                <div
                  className={cn(
                    "absolute bottom-5 left-5 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.24em] transition-colors duration-500",
                    styles.visualLabel,
                  )}
                >
                  Interface craft / motion-first
                </div>
              </div>

              {toolStack.map((tool, index) => (
                <div
                  key={tool.label}
                  ref={(node) => {
                    toolRefs.current[index] = node;
                  }}
                  className="absolute z-20 [transform-style:preserve-3d]"
                  style={{
                    left: tool.position.left,
                    top: tool.position.top,
                  }}
                >
                  <div
                    className={cn(
                      "flex items-center gap-3 rounded-2xl border px-3 py-2.5 backdrop-blur-md transition-colors duration-500 sm:px-4 sm:py-3",
                      styles.floatingCard,
                    )}
                  >
                    <img
                      src={tool.src}
                      alt={tool.label}
                      className="h-8 w-8 rounded-xl object-contain sm:h-10 sm:w-10"
                    />
                    <div className="min-w-[6rem]">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] sm:text-sm">
                        {tool.label}
                      </p>
                      <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] opacity-70 sm:text-[10px]">
                        {tool.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={cn("overflow-hidden py-4 transition-colors duration-500", styles.tickerWrap)}>
          <div data-gsap="ticker" className="flex w-max items-center">
            {repeatedTape.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className={cn(
                  "flex items-center whitespace-nowrap px-6 text-sm uppercase tracking-[0.28em] transition-colors duration-500",
                  styles.tickerText,
                )}
              >
                <Sparkles className="mr-3 h-4 w-4 text-[#f0c674]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-16 lg:py-28"
      >
        <div data-reveal>
          <p
            className={cn(
              "mb-4 text-sm uppercase tracking-[0.32em] transition-colors duration-500",
              styles.accent,
            )}
          >
            About the direction
          </p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.05em] md:text-6xl">
            About
            <br />
            me.
          </h2>
        </div>

        <div data-reveal className="grid gap-8">
          <div className="grid gap-5">
            {aboutCopy.map((paragraph) => (
              <p
                key={paragraph}
                className={cn(
                  "max-w-2xl font-editorial text-lg leading-8 transition-colors duration-500",
                  styles.body,
                )}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-reveal
                className={cn(
                  "rounded-[1.75rem] border p-5 transition-colors duration-500",
                  styles.statCard,
                )}
              >
                <p className="font-display text-4xl tracking-[-0.06em] text-[#c99134]">
                  {stat.value}
                </p>
                <p
                  className={cn(
                    "mt-3 font-editorial text-sm leading-6 transition-colors duration-500",
                    styles.statText,
                  )}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div data-reveal className="mb-12 max-w-3xl">
          <p
            className={cn(
              "mb-4 text-sm uppercase tracking-[0.32em] transition-colors duration-500",
              styles.accent,
            )}
          >
            Skills
          </p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.05em] md:text-6xl">
            My
            <br />
            skills
          </h2>
          <p
            className={cn(
              "mt-6 max-w-2xl font-editorial text-lg leading-8 transition-colors duration-500",
              styles.body,
            )}
          >
            A comprehensive toolkit for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.label}
              data-reveal
              className={cn(
                "flex flex-col items-center rounded-[1.7rem] border px-5 py-7 text-center transition-colors duration-500",
                styles.mutedCard,
              )}
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f0c674]/10">
                <img
                  src={skill.icon}
                  alt={skill.label}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">
                {skill.label}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section
        className={cn("transition-colors duration-500", styles.workSection)}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-16 lg:py-28">
          <div data-reveal className="relative overflow-hidden rounded-[2rem] border border-current/10">
            <img
              src="/work.jpg"
              alt="Work process"
              className="h-full min-h-[24rem] w-full object-cover"
            />
          </div>
          <div>
            <div data-reveal className="mb-10">
              <p
                className={cn(
                  "mb-4 text-sm uppercase tracking-[0.32em] transition-colors duration-500",
                  styles.accent,
                )}
              >
                Work process
              </p>
              <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.05em] md:text-6xl">
                From research
                <br />
                to reality
              </h2>
            </div>
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div
                  key={step.num}
                  data-reveal
                  className={cn(
                    "rounded-[1.6rem] border p-6 transition-colors duration-500",
                    styles.mutedCard,
                  )}
                >
                  <p className="mb-3 font-display text-3xl tracking-[-0.05em] text-[#c99134]">
                    {step.num}
                  </p>
                  <h3 className="text-xl font-semibold uppercase tracking-[0.12em]">
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 font-editorial leading-7 transition-colors duration-500",
                      styles.articleBody,
                    )}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HeroSection styles={styles} />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div data-reveal className="mb-12 max-w-3xl">
          <p
            className={cn(
              "mb-4 text-sm uppercase tracking-[0.32em] transition-colors duration-500",
              styles.accent,
            )}
          >
            What this version highlights
          </p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.05em] md:text-6xl">
            A more
            <br />
            elevated offer
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              data-reveal
              className={cn(
                "rounded-[1.8rem] border p-6 transition-colors duration-500",
                styles.serviceCard,
              )}
            >
              <p
                className={cn(
                  "mb-14 text-sm uppercase tracking-[0.32em] transition-colors duration-500",
                  styles.serviceIndex,
                )}
              >
                {service.index}
              </p>
              <h3 className="font-display text-3xl uppercase leading-none tracking-[-0.04em]">
                {service.title}
              </h3>
              <p
                className={cn(
                  "mt-5 font-editorial leading-7 transition-colors duration-500",
                  styles.articleBody,
                )}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer
        id="contact"
        className={cn("transition-colors duration-500", styles.footer)}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-20">
          <div data-reveal className="max-w-3xl">
            <p
              className={cn(
                "mb-4 text-sm uppercase tracking-[0.32em] transition-colors duration-500",
                styles.accent,
              )}
            >
              Contact
            </p>
            <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.05em] md:text-6xl">
              Let&apos;s connect
              <br />
              and create.
            </h2>
            <p
              className={cn(
                "mt-6 max-w-xl font-editorial text-lg leading-8 transition-colors duration-500",
                styles.footerText,
              )}
            >
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
          </div>

          <div className="grid gap-8 lg:min-w-[26rem]">
            <div
              data-reveal
              className={cn(
                "rounded-[1.8rem] border p-6 transition-colors duration-500",
                styles.mutedCard,
              )}
            >
              <p className="mb-5 text-sm uppercase tracking-[0.28em]">Contact information</p>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label}>
                    <p className="mb-1 text-xs uppercase tracking-[0.24em] opacity-60">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined} className={cn("transition", styles.navLink)}>
                        {item.value}
                      </a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              data-reveal
              className={cn(
                "rounded-[1.8rem] border p-6 transition-colors duration-500",
                styles.mutedCard,
              )}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.28em]">Follow me on</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition",
                      styles.actionButton,
                    )}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default PortfolioV2Page;
