"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsGrid() {
  return (
    <section className="relative py-20 lg:py-28">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((item, index) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card flex h-full flex-col rounded-2xl p-6 sm:p-8"
            >
              <Quote className="h-8 w-8 text-sky-500/30" aria-hidden />
              <p className="mt-4 flex-1 text-base leading-relaxed text-zinc-300 sm:text-lg">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 font-display text-xs font-bold text-white">
                  {item.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-white">{item.author}</cite>
                  <p className="text-sm text-zinc-500">
                    {item.role}, {item.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
