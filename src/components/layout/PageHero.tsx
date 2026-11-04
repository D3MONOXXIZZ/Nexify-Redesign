"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { LinkButton } from "@/components/ui/Button";
import { ROUTES } from "@/lib/pages";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
}

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = { label: "Start a Project", href: ROUTES.contact },
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="absolute inset-0 grid-pattern" aria-hidden />
      <div className="page-hero-glow absolute inset-0" aria-hidden />
      <GradientOrb className="left-1/3 top-16" size="lg" />
      <GradientOrb className="right-1/4 top-32" size="md" color="violet" />

      <Container className="relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-sky-400"
          >
            {eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <LinkButton href={primaryCta.href} variant="primary" size="lg" external={primaryCta.external}>
              {primaryCta.label}
            </LinkButton>
            {secondaryCta && (
              <LinkButton href={secondaryCta.href} variant="secondary" size="lg" external={secondaryCta.external}>
                {secondaryCta.label}
              </LinkButton>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
