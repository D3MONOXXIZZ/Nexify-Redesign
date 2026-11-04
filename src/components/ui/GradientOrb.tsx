"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientOrbProps {
  className?: string;
  color?: "cyan" | "violet" | "mixed";
  size?: "sm" | "md" | "lg";
  animate?: boolean;
}

const colors = {
  cyan: "bg-blue-400/15",
  violet: "bg-indigo-400/15",
  mixed: "bg-gradient-to-br from-blue-400/10 to-indigo-400/10",
};

const sizes = {
  sm: "h-48 w-48",
  md: "h-72 w-72",
  lg: "h-96 w-96",
};

export function GradientOrb({
  className,
  color = "mixed",
  size = "lg",
  animate = true,
}: GradientOrbProps) {
  return (
    <motion.div
      aria-hidden
      animate={
        animate
          ? {
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }
          : undefined
      }
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "glow-orb absolute rounded-full",
        colors[color],
        sizes[size],
        className
      )}
    />
  );
}
