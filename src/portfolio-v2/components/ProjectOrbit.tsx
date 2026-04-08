import { useEffect, useRef } from "react";
import { HeartPulse, LayoutTemplate, PenTool, Smartphone } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import type { FeaturedProject, ThemePalette } from "../types";

const orbitIconMap = {
  smartphone: Smartphone,
  heart: HeartPulse,
  pen: PenTool,
  layout: LayoutTemplate,
} as const;

const orbitPositions = [
  { x: -56, y: -170 },
  { x: 52, y: -62 },
  { x: 52, y: 62 },
  { x: -56, y: 170 },
];

type ProjectOrbitProps = {
  projects: FeaturedProject[];
  activeIndex: number;
  onActiveChange: (index: number) => void;
  styles: ThemePalette;
  mobile?: boolean;
  embedded?: boolean;
  className?: string;
  showProgress?: boolean;
};

const ProjectOrbit = ({
  projects,
  activeIndex,
  onActiveChange,
  styles,
  mobile = false,
  embedded = false,
  className,
  showProgress = true,
}: ProjectOrbitProps) => {
  const iconRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    iconRefs.current.forEach((icon, index) => {
      if (!icon) return;

      const base = orbitPositions[index] ?? { x: 0, y: 0 };
      const isActive = index === activeIndex;

      gsap.to(icon, {
        x: isActive ? 0 : base.x,
        y: isActive ? 0 : base.y,
        scale: isActive ? 1.22 : 0.86,
        opacity: isActive ? 1 : 0.38,
        filter: isActive ? "blur(0px)" : "blur(1.6px)",
        duration: 0.85,
        ease: "power2.inOut",
      });
    });
  }, [activeIndex]);

  return (
    <div
      className={cn(
        "relative flex h-[34rem] items-center justify-center transition-colors duration-500 md:h-[42rem]",
        embedded
          ? "rounded-none border-0 bg-transparent"
          : cn("rounded-[2.2rem] border", styles.mutedCard),
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] bg-[radial-gradient(circle_at_center,rgba(201,145,52,0.12),transparent_45%)]" />
      <div className="relative h-[22rem] w-[18rem] md:h-[28rem] md:w-[20rem]">
        <svg
          viewBox="0 0 260 520"
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="project-orbit-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(201,145,52,0.42)" />
              <stop offset="100%" stopColor="rgba(201,145,52,0.06)" />
            </linearGradient>
          </defs>
          <path
            d="M52 20C192 80 220 198 220 260C220 322 192 440 52 500"
            stroke="url(#project-orbit-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M72 56C168 108 190 208 190 260C190 312 168 412 72 464"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="8 10"
          />
        </svg>

        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c99134]/30 bg-[#c99134]/10 shadow-[0_0_40px_rgba(201,145,52,0.18)]" />

        {projects.map((project, index) => {
          const Icon = orbitIconMap[project.orbitIcon];

          return (
            <button
              key={`${project.title}-${index}`}
              ref={(node) => {
                iconRefs.current[index] = node;
              }}
              type="button"
              onClick={() => onActiveChange(index)}
              className={cn(
                "absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border text-[#c99134] shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-colors duration-500 md:h-20 md:w-20",
                styles.article,
              )}
              aria-label={project.title}
            >
              <Icon className="h-7 w-7 md:h-8 md:w-8" />
            </button>
          );
        })}
      </div>

      {showProgress && (
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {projects.map((project, index) => (
            <button
              key={`${project.title}-${index}`}
              type="button"
              onClick={() => onActiveChange(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                index === activeIndex ? "w-8 bg-[#c99134]" : "w-2.5 bg-black/15",
              )}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectOrbit;
