"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ProjectId = (typeof PROJECTS)[number]["id"];

interface PortfolioProps {
  showHeading?: boolean;
  id?: string;
}

export function Portfolio({ showHeading = true, id = "portfolio" }: PortfolioProps) {
  const [activeId, setActiveId] = useState<ProjectId>(PROJECTS[0].id);
  const active = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0];

  return (
    <section id={id} className="relative py-24 lg:py-32">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects That Define Excellence"
            description="A curated showcase of digital products we've engineered for ambitious brands worldwide."
          />
        )}

        <div className={cn("grid gap-8 lg:grid-cols-2", showHeading ? "mt-16" : "mt-0")}>
          <div className="flex flex-col gap-3">
            {PROJECTS.map((project) => (
              <motion.button
                key={project.id}
                type="button"
                onClick={() => setActiveId(project.id)}
                whileHover={{ x: 4 }}
                className={cn(
                  "group rounded-xl border p-5 text-left transition-all duration-300",
                  activeId === project.id
                    ? "border-blue-500/30 bg-blue-500/5"
                    : "border-black/5 bg-transparent hover:border-black/10 hover:bg-black/[0.02]"
                )}
              >
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {project.category}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-slate-900 group-hover:text-blue-600">
                  {project.title}
                </h3>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-black/5"
            >
              <div
                className={cn(
                  "aspect-[4/3] bg-gradient-to-br p-8 sm:p-12",
                  active.gradient
                )}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-white/80">
                      {active.category}
                    </span>
                    <h3 className="mt-2 font-display text-3xl font-bold text-white">
                      {active.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90">
                      {active.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {active.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-white/80"
                      aria-label={`View ${active.title} case study`}
                    >
                      Case Study
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
