"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

const VALUES = [
  "Performance-first engineering",
  "Accessibility & inclusive design",
  "Transparent communication",
  "Long-term partnership mindset",
] as const;

interface AboutProps {
  showHeading?: boolean;
  id?: string;
}

export function About({ showHeading = true, id = "about" }: AboutProps) {
  return (
    <section id={id} className="relative py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            {showHeading ? (
              <SectionHeading
                eyebrow="About Us"
                title="Where Creative Vision Meets Technical Precision"
                description="Nexify Concepts bridges the gap between ambitious brand storytelling and production-grade engineering. We partner with startups and enterprises to ship digital products that perform."
                align="left"
              />
            ) : (
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Where Creative Vision Meets Technical Precision
              </h2>
            )}

            <ul className="mt-8 space-y-4">
              {VALUES.map((value, i) => (
                <motion.li
                  key={value}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-slate-700 sm:text-base"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
                  {value}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 sm:p-10"
          >
            <p className="text-sm leading-relaxed text-slate-600">
              Off-the-shelf templates limit growth. Our team uses modern frameworks—
              Next.js, React, Shopify, and cloud-native infrastructure—to build unique,
              SEO-friendly architectures tailored to your audience and business goals.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Whether you need a high-conversion e-commerce store, a scalable SaaS
              platform, or a brand-defining marketing site, we deliver with the polish
              and performance your users expect.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8">
              {STATS.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
