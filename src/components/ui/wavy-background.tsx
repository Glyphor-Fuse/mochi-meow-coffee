import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  speed = "fast",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  speed?: "slow" | "fast";
}) => {
  return (
    <div
      className={cn(
        "relative h-screen flex flex-col items-center justify-center overflow-hidden",
        containerClassName
      )}
    >
      <div className="absolute inset-0 z-0">
        <svg
          className="h-full w-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
            </filter>
          </defs>
          <g filter="url(#goo)">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.circle
                key={i}
                initial={{ x: Math.random() * 100 + "%", y: "110%" }}
                animate={{
                  y: "-10%",
                  x: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                  ],
                }}
                transition={{
                  duration: speed === "fast" ? 10 + i * 2 : 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                r={150 + i * 50}
                fill={colors?.[i % (colors?.length || 1)] || "var(--primary)"}
                className="opacity-40"
              />
            ))}
          </g>
        </svg>
      </div>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
