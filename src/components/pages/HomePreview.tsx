"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { STATS } from "@/lib/constants";
import { ROUTES } from "@/lib/pages";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface HomePreviewProps {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  children?: React.ReactNode;
}

export function HomePreview({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  children,
}: HomePreviewProps) {
  return (
    <section className="relative py-20 lg:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm uppercase tracking-widest text-white/60"
            >
              {eyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-3xl font-semibold text-white sm:text-4xl"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-white/70"
            >
              {description}
            </motion.p>
          </div>
          <Link
            href={href}
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            {linkLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        {children && <div className="mt-12">{children}</div>}
      </Container>
    </section>
  );
}

export function StatsStrip() {
  return (
    <section className="border-y border-white/10 py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-10 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export function QuickLinks() {
  const links = [
    {
      href: ROUTES.services,
      title: "Services",
      description: "Shopify, full-stack, UI/UX, and scalable frontends.",
    },
    {
      href: ROUTES.process,
      title: "Process",
      description: "Discovery through launch with full transparency.",
    },
    {
      href: ROUTES.work,
      title: "Work",
      description: "Case studies across e-commerce, SaaS, and brand.",
    },
    {
      href: ROUTES.contact,
      title: "Contact",
      description: "Free consultation—response within one business day.",
    },
  ];

  return (
    <section className="relative py-20 lg:py-24">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                href={link.href}
                className="group block h-full rounded-lg border border-white/10 p-6 transition-all hover:border-white/30 hover:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-white">
                  {link.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">{link.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
                  Explore
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
