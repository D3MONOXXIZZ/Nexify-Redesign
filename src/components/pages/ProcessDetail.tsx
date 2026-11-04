"use client";

import { motion } from "framer-motion";
import { FileCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PROCESS_STEPS } from "@/lib/constants";
import { PROCESS_DETAILS } from "@/lib/pages";

export function ProcessDetail() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/[0.02] to-transparent" />
      <Container className="relative">
        <div className="space-y-12">
          {PROCESS_STEPS.map((step, index) => {
            const detail = PROCESS_DETAILS[index];
            return (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="glass-card overflow-hidden rounded-2xl"
              >
                <div className="grid lg:grid-cols-[auto_1fr]">
                  <div className="flex items-center gap-4 border-b border-white/5 bg-sky-500/5 px-6 py-5 lg:border-b-0 lg:border-r lg:px-8">
                    <span className="font-mono text-2xl font-bold text-sky-400">{step.step}</span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                      {detail && (
                        <p className="mt-1 text-xs text-zinc-500">Typical duration: {detail.duration}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
                    <div>
                      <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
                      {detail && (
                        <>
                          <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                            Key activities
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {detail.activities.map((activity) => (
                              <li
                                key={activity}
                                className="text-sm text-zinc-300 before:mr-2 before:text-sky-500 before:content-['•']"
                              >
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>

                    {detail && (
                      <div className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                        <FileCheck className="h-8 w-8 shrink-0 text-sky-500" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                            Phase deliverable
                          </p>
                          <p className="mt-2 text-sm font-medium text-white">{detail.deliverable}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
