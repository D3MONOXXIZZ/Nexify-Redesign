"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CAPABILITIES } from "@/lib/pages";

export function CapabilitiesGrid() {
  return (
    <section className="relative border-y border-white/5 bg-white/[0.01] py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Industries & Use Cases"
          title="Capabilities Across Your Digital Stack"
          description="From launch-ready storefronts to enterprise platforms—we adapt our process to your market, users, and technical constraints."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CAPABILITIES.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/5 bg-gradient-to-br from-sky-500/5 to-transparent p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-semibold text-white">{cap.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
