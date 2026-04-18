import { ArrowUpRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { toolIcons } from "../data";
import type { FeaturedProject, ThemePalette } from "../types";

type ProjectDetailsProps = {
  project: FeaturedProject;
  styles: ThemePalette;
  embedded?: boolean;
};

const ProjectDetails = ({ project, styles, embedded = false }: ProjectDetailsProps) => {
  return (
    <div
      className={cn(
        "p-6 backdrop-blur-md transition-colors duration-500 md:p-8",
        embedded
          ? "flex h-full flex-col justify-center rounded-none border-0 bg-transparent shadow-none"
          : cn(
              "rounded-[2rem] border shadow-[0_20px_50px_rgba(0,0,0,0.06)]",
              styles.article,
            ),
      )}
    >
      <p className={cn("mb-3 text-sm uppercase tracking-[0.28em]", styles.articleMeta)}>
        {project.year} {project.category}
      </p>
      <h3 className="font-display text-3xl uppercase leading-none tracking-[-0.04em] md:text-5xl">
        {project.title}
      </h3>
      <p className={cn("mt-5 font-editorial leading-7 md:text-lg", styles.articleBody)}>
        {project.summary}
      </p>

      <div className={cn("mt-8 border-t pt-6", styles.divider)}>
        <p className="mb-3 text-xs uppercase tracking-[0.28em] opacity-60">Tags</p>
        <div className="flex flex-wrap gap-2">
          {project.deliverables.map((item) => (
            <span
              key={item}
              className={cn("rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.2em]", styles.tag)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={cn("mt-8 border-t pt-6", styles.divider)}>
        <p className="mb-4 text-xs uppercase tracking-[0.28em] opacity-60">Tools used</p>
        <div className="flex flex-wrap gap-3">
          {project.tools.map((tool) => (
            <Tooltip key={tool}>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "group flex h-14 w-14 items-center justify-center rounded-2xl border transition duration-300 hover:scale-110",
                    styles.mutedCard,
                  )}
                >
                  <img
                    src={toolIcons[tool]}
                    alt={tool}
                    className={cn(
                      "h-8 w-8 object-contain transition duration-300 group-hover:drop-shadow-[0_0_16px_rgba(201,145,52,0.42)]",
                      styles.toolIcon,
                    )}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>{tool}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className={cn("mt-8 border-t pt-6", styles.divider)}>
        <button
          type="button"
          onClick={() => {
            if (project.href) {
              window.open(project.href, "_blank", "noopener,noreferrer");
            }
          }}
          className={cn(
            "inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm uppercase tracking-[0.22em] transition",
            styles.actionButton,
          )}
        >
          View case study
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
