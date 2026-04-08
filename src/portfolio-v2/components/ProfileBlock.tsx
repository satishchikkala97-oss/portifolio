import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ThemePalette } from "../types";

type ProfileBlockProps = {
  styles: ThemePalette;
  embedded?: boolean;
  hideOrbitPath?: boolean;
  className?: string;
  children?: ReactNode;
};

const ProfileBlock = ({
  styles,
  embedded = false,
  hideOrbitPath = false,
  className,
  children,
}: ProfileBlockProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full min-h-[32rem] items-center justify-center lg:justify-start",
        className,
      )}
    >
      
      {children}
    </div>
  );
};

export default ProfileBlock;
