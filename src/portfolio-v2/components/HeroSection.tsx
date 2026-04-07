import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { featuredProjects } from "../data";
import type { ThemePalette } from "../types";
import ProfileBlock from "./ProfileBlock";
import ProjectDetails from "./ProjectDetails";
import ProjectOrbit from "./ProjectOrbit";

type HeroSectionProps = {
  styles: ThemePalette;
};

const HeroSection = ({ styles }: HeroSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(media.matches);

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const activeProject = featuredProjects[Math.min(activeIndex, featuredProjects.length - 1)];

  return (
    <section id="work" className={cn("transition-colors duration-500", styles.workSection)}>
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
          <div className="grid grid-cols-[0.3fr_0.4fr_0.3fr] gap-8 items-start">
            <div className="sticky top-24">
              <ProfileBlock styles={styles} />
            </div>
            <ProjectOrbit
              projects={featuredProjects}
              activeIndex={activeIndex}
              onActiveChange={setActiveIndex}
              styles={styles}
            />
            <div className="sticky top-24">
              <ProjectDetails project={activeProject} styles={styles} />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <ProfileBlock styles={styles} />
            <div className="overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex snap-x snap-mandatory gap-4">
                {featuredProjects.map((project, index) => (
                  <button
                    key={project.title}
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
