"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface TestimonialsProps {
  showHeading?: boolean;
  id?: string;
}

export function Testimonials({ showHeading = true, id = "testimonials" }: TestimonialsProps) {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id={id} className="relative py-24 lg:py-32">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Client Stories"
            title="Trusted by Industry Leaders"
            description="Hear from the teams who've partnered with us to build transformative digital experiences."
          />
        )}

        <div className={cn("relative mx-auto max-w-4xl", showHeading ? "mt-16" : "mt-0")}>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-8 sm:p-12 shadow-sm"
            >
              <Quote className="h-10 w-10 text-blue-500/20" aria-hidden />
              <p className="mt-6 font-display text-xl font-medium leading-relaxed text-slate-800 sm:text-2xl lg:text-3xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 font-display text-sm font-bold text-white">
                  {current.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-slate-900">
                    {current.author}
                  </cite>
                  <p className="text-sm text-slate-500">
                    {current.role}, {current.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 text-slate-400 transition-all hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-black/10 hover:bg-black/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 text-slate-400 transition-all hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-600"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
