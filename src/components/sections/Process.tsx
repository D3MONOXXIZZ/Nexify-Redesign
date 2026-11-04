"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProcessProps {
  showHeading?: boolean;
  id?: string;
}

export function Process({ showHeading = true, id = "process" }: ProcessProps) {
  return (
    <section id={id} className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <Container className="relative">
        {showHeading && (
          <SectionHeading
            eyebrow="How We Work"
            title="A Proven Development Workflow"
            description="Transparent, collaborative, and optimized for delivering exceptional results on every engagement."
          />
        )}

        <div className={cn("relative", showHeading ? "mt-16" : "mt-0")}>
          <div
            className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/30 via-indigo-500/20 to-transparent lg:left-1/2 lg:block lg:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-8 lg:space-y-0">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}
                  >
                    <span className="font-mono text-sm text-blue-600">{step.step}</span>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-[#2f7cb3]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative flex shrink-0 items-center justify-center lg:w-16">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-blue-200 bg-white font-mono text-sm font-bold text-blue-600 shadow-lg shadow-blue-500/5"
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  <div className="hidden flex-1 lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
