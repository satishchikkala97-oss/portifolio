import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { featuredProjects } from "../data";
import type { ThemePalette } from "../types";
import ProfileBlock from "./ProfileBlock";
import ProjectDetails from "./ProjectDetails";
import ProjectOrbit from "./ProjectOrbit";

gsap.registerPlugin(ScrollTrigger);

type HeroSectionProps = {
  styles: ThemePalette;
};

const HeroSection = ({ styles }: HeroSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const desktopTrackRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(media.matches);

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const activeProject = featuredProjects[Math.min(activeIndex, featuredProjects.length - 1)];

  useLayoutEffect(() => {
    if (!isDesktop || !sectionRef.current || !desktopTrackRef.current) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    const projectCount = featuredProjects.length;
    const snapPoints = featuredProjects.map((_, index) =>
      projectCount === 1 ? 0 : index / (projectCount - 1),
    );

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: desktopTrackRef.current,
        start: "top top",
        end: `+=${window.innerHeight * (projectCount - 1)}`,
        pin: true,
        scrub: 0.85,
        snap: snapPoints,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const nextIndex = Math.min(
            projectCount - 1,
            Math.round(self.progress * (projectCount - 1)),
          );

          if (nextIndex !== activeIndexRef.current) {
            setActiveIndex(nextIndex);
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className={cn("transition-colors duration-500", styles.workSection)}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={cn("mb-4 text-sm uppercase tracking-[0.32em]", styles.accent)}>
              Featured projects
            </p>
            <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.05em] md:text-6xl">
              Scroll-led
              <br />
              case studies
            </h2>
          </div>
          <p className={cn("max-w-md font-editorial leading-7", styles.workCopy)}>
            A pinned project showcase with profile-led orbit motion on desktop and a
            swipe-friendly project switcher on mobile.
          </p>
        </div>

        {isDesktop ? (
          <div className="min-h-[360vh]">
            <div
              ref={desktopTrackRef}
              className={cn(
                "grid min-h-[calc(100vh-2.5rem)] grid-cols-[1.08fr_0.92fr] items-stretch overflow-hidden rounded-[2.35rem] border shadow-[0_30px_90px_rgba(201,145,52,0.08)]",
                styles.mutedCard,
              )}
            >
              <div className={cn("relative h-full overflow-hidden border-r p-6", styles.divider)}>
                <ProfileBlock
                  styles={styles}
                  embedded
                  hideOrbitPath
                  className="min-h-[calc(100vh-10rem)] justify-start"
                >
                  <ProjectOrbit
                    projects={featuredProjects}
                    activeIndex={activeIndex}
                    onActiveChange={setActiveIndex}
                    styles={styles}
                    embedded
                    showProgress={false}
                    className="pointer-events-auto absolute inset-y-0 right-0 w-[56%]"
                  />
                </ProfileBlock>
                <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
                  {featuredProjects.map((project, index) => (
                    <span
                      key={`${project.title}-progress-${index}`}
                      className={cn(
                        "h-2.5 rounded-full transition-all duration-300",
                        index === activeIndex ? "w-8 bg-[#c99134]" : "w-2.5 bg-black/15",
                      )}
                    />
                  ))}
                </div>
              </div>
              <div className="h-full">
                <ProjectDetails project={activeProject} styles={styles} embedded />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <ProfileBlock styles={styles} />
            <div className="overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex snap-x snap-mandatory gap-4">
                {featuredProjects.map((project, index) => (
                  <button
                    key={`${project.title}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "min-w-[84%] snap-center rounded-[1.8rem] border p-5 text-left transition-colors duration-500",
                      index === activeIndex ? styles.article : styles.mutedCard,
                    )}
                  >
                    <p className={cn("text-sm uppercase tracking-[0.26em]", styles.articleMeta)}>
                      {project.year}
                    </p>
                    <h3 className="mt-3 font-display text-3xl uppercase leading-none tracking-[-0.04em]">
                      {project.title}
                    </h3>
                    <p className={cn("mt-4 font-editorial leading-7", styles.articleBody)}>
                      {project.summary}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            <ProjectOrbit
              projects={featuredProjects}
              activeIndex={activeIndex}
              onActiveChange={setActiveIndex}
              styles={styles}
              mobile
            />
            <ProjectDetails project={activeProject} styles={styles} />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
