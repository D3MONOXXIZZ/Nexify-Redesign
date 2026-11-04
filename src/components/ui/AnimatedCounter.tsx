"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

function parseValue(value: string): { num: number; suffix: string; prefix: string } {
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
  if (!match) return { num: 0, suffix: value, prefix: "" };
  return {
    prefix: match[1],
    num: parseInt(match[2], 10),
    suffix: match[3],
  };
}

export function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const { num, suffix, prefix } = parseValue(value);

  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) =>
    `${prefix}${Math.round(v)}${suffix}`
  );

  useEffect(() => {
    if (isInView) spring.set(num);
  }, [isInView, num, spring]);

  return (
    <div ref={ref} className="text-center">
      <motion.span className="text-3xl font-semibold text-white sm:text-4xl">
        {display}
      </motion.span>
      <p className="mt-2 text-sm text-white/60">{label}</p>
    </div>
  );
}
