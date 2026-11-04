"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SERVICES } from "@/lib/constants";
import { SERVICE_DETAILS } from "@/lib/pages";
import { LinkButton } from "@/components/ui/Button";
import { ROUTES } from "@/lib/pages";

export function ServicesDetail() {
  return (
    <section className="relative py-20 lg:py-28">
      <Container>
        <div className="space-y-20">
          {SERVICES.map((service, index) => {
            const detail = SERVICE_DETAILS.find((d) => d.id === service.id);
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${
                  isReversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-sky-500">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-zinc-400"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <LinkButton
                    href={ROUTES.contact}
                    variant="outline"
                    size="md"
                    className="mt-8"
                  >
                    Discuss {service.title}
                  </LinkButton>
                </div>

                {detail && (
                  <div className="glass-card space-y-8 rounded-2xl p-6 sm:p-8">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400">
                        Business outcomes
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {detail.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400">
                        Typical deliverables
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {detail.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
