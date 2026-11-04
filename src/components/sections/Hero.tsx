"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { ROUTES } from "@/lib/pages";

export function Hero() {
  return (
    <section className="tesla-hero-section">
      <Container className="tesla-content-wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 text-sm uppercase tracking-widest text-white/70"
          >
            {SITE.tagline}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Nexify Concepts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-lg text-white/70"
          >
            Premium Web Development
          </motion.p>
        </motion.div>
      </Container>

      <div className="relative z-10 pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <LinkButton href={ROUTES.contact} variant="secondary" size="lg">
              Get Started
            </LinkButton>
            <LinkButton href={ROUTES.work} variant="primary" size="lg">
              View Our Work
            </LinkButton>
          </motion.div>
        </Container>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <ChevronDown className="tesla-scroll-arrow text-white/70" />
        </motion.div>
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")'
        }}
      />
    </section>
  );
}
