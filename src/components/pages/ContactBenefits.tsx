"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CONTACT_BENEFITS } from "@/lib/pages";

export function ContactBenefits() {
  return (
    <section className="border-b border-white/5 bg-white/[0.01] py-16">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />
              <p className="text-sm text-zinc-300">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
