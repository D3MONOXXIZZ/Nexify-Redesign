"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShoppingBag,
  Layers,
  Sparkles,
  Layout,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { ROUTES } from "@/lib/pages";
import { cn } from "@/lib/utils";

const iconMap = {
  "shopping-bag": ShoppingBag,
  layers: Layers,
  sparkles: Sparkles,
  layout: Layout,
  code: Code2,
} as const;

interface ServicesProps {
  limit?: number;
  showHeading?: boolean;
  id?: string;
}

export function Services({ limit, showHeading = true, id = "services" }: ServicesProps) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section id={id} className="relative py-24 lg:py-32">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="What We Do"
            title="Expert Web Development Services"
            description="End-to-end digital solutions engineered for performance, conversion, and long-term scalability."
          />
        )}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 300,
                  damping: 22,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={cn(
                  "group glass-card relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
                  !limit && index === 0 && "sm:col-span-2 lg:col-span-1",
                  !limit && index === 4 && "sm:col-span-2 lg:col-span-1"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-blue-600/0 transition-all duration-500 group-hover:from-sky-500/5 group-hover:to-blue-600/5" />

                <div className="relative">
                  <motion.div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sky-400 transition-colors group-hover:border-sky-500/40 group-hover:bg-sky-500/15"
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <h3 className="font-display text-xl font-semibold text-[#2f7cb3]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-full border border-black/5 bg-black/5 px-3 py-1 text-xs text-slate-600"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`${ROUTES.services}#${service.id}`}
                    className="mt-6 flex items-center gap-1 text-sm font-medium text-sky-400 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
