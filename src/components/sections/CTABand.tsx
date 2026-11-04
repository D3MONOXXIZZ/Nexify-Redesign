"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { ROUTES } from "@/lib/pages";

interface CTABandProps {
  title?: string;
  description?: string;
  variant?: "default" | "compact";
}

export function CTABand({
  title = "Ready to build something extraordinary?",
  description = "Schedule a free consultation and discover how Nexify Concepts can elevate your digital presence.",
  variant = "default",
}: CTABandProps) {
  return (
    <section className="relative py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 sm:p-12 lg:p-16"
        >
          <div className="relative z-10 max-w-2xl">
            <h3
              className={
                variant === "compact"
                  ? "text-2xl font-semibold text-white sm:text-3xl"
                  : "text-3xl font-semibold text-white sm:text-4xl"
              }
            >
              {title}
            </h3>
            <p className="mt-4 text-lg text-white/70">{description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href={ROUTES.contact} variant="secondary" size="lg">
                Get Started
              </LinkButton>
              <LinkButton href={ROUTES.work} variant="primary" size="lg">
                View Our Work
              </LinkButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
