"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_NEXIFY } from "@/lib/pages";

export function WhyChooseUs() {
  return (
    <section className="relative py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Nexify"
          title="A Partner Built for Serious Digital Growth"
          description="We combine agency-grade craft with engineering rigor—so your investment translates into measurable business outcomes."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {WHY_NEXIFY.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
