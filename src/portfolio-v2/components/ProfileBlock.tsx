import { cn } from "@/lib/utils";
import type { ThemePalette } from "../types";

type ProfileBlockProps = {
  styles: ThemePalette;
};

const ProfileBlock = ({ styles }: ProfileBlockProps) => {
  return (
    <div className="relative flex h-full min-h-[32rem] items-center justify-center lg:justify-start">
      <div className="relative w-full max-w-[24rem]">
        <div
          className={cn(
            "relative overflow-hidden rounded-[2rem] border p-4 backdrop-blur-md transition-colors duration-500",
            styles.profileFrame,
          )}
        >
          <img
            src="/profile-trans.png"
            alt="Satish portrait"
            className="mx-auto h-[24rem] w-full object-contain sm:h-[28rem] lg:h-[32rem]"
          />
        </div>

        <svg
          viewBox="0 0 180 360"
          className="pointer-events-none absolute right-[-2.5rem] top-1/2 hidden h-[92%] -translate-y-1/2 lg:block"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="orbit-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(201,145,52,0.45)" />
              <stop offset="100%" stopColor="rgba(201,145,52,0.04)" />
            </linearGradient>
          </defs>
          <path
            d="M10 18C136 46 162 137 162 180C162 223 136 314 10 342"
            stroke="url(#orbit-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="drop-shadow-[0_0_22px_rgba(201,145,52,0.22)]"
          />
          <path
            d="M26 48C118 70 138 143 138 180C138 217 118 290 26 312"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
            strokeDasharray="5 10"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProfileBlock;
