"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { SITE, SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ContactProps {
  showHeading?: boolean;
  id?: string;
}

export function Contact({ showHeading = true, id = "contact" }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error ?? "Something went wrong");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message"
      );
    }
  };

  return (
    <section id={id} className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/[0.03] to-transparent" />

      <Container className="relative">
        {showHeading && (
          <SectionHeading
            eyebrow="Get in Touch"
            title="Schedule a Free Consultation"
            description="Tell us about your project. We'll respond within one business day with next steps."
          />
        )}

        <div className={cn("grid gap-12 lg:grid-cols-5", showHeading ? "mt-16" : "mt-0")}>
          <div className="space-y-8 lg:col-span-2">
            <div className="space-y-6">
              <ContactInfo
                icon={Mail}
                label="Email"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
                accent="blue"
              />
              <ContactInfo
                icon={Phone}
                label="Phone / WhatsApp"
                value={SITE.phoneDisplay}
                href={`tel:${SITE.phone}`}
                accent="blue"
              />
              <ContactInfo
                icon={WhatsAppIcon}
                label="WhatsApp"
                value="Message us instantly"
                href={SITE.whatsappUrl}
                external
                accent="emerald"
              />
              <ContactInfo
                icon={MapPin}
                label="Location"
                value="Remote-first · Global delivery"
                accent="blue"
              />
            </div>

            <WhatsAppButton variant="pill" className="w-full sm:w-auto" />
            <p className="text-sm text-slate-500">
              Prefer WhatsApp? Tap above for an instant reply — we typically respond
              within a few hours.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass-card space-y-5 rounded-2xl p-6 sm:p-8 lg:col-span-3 shadow-sm"
            noValidate
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="h-12 w-12 text-emerald-500" />
                <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">
                  Message sent successfully
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Thank you! We&apos;ll be in touch shortly.
                </p>
                <Button
                  type="button"
                  variant="secondary"
                  className="mt-6"
                  onClick={() => setStatus("idle")}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Full name" error={errors.name?.message} required>
                    <input
                      {...register("name")}
                      type="text"
                      autoComplete="name"
                      className={inputClass(errors.name)}
                      placeholder="Jane Smith"
                    />
                  </FormField>
                  <FormField
                    label="Email address"
                    error={errors.email?.message}
                    required
                  >
                    <input
                      {...register("email")}
                      type="email"
                      autoComplete="email"
                      className={inputClass(errors.email)}
                      placeholder="jane@company.com"
                    />
                  </FormField>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Phone number" error={errors.phone?.message}>
                    <input
                      {...register("phone")}
                      type="tel"
                      autoComplete="tel"
                      className={inputClass(errors.phone)}
                      placeholder="+1 (555) 000-0000"
                    />
                  </FormField>
                  <FormField label="Company" error={errors.company?.message}>
                    <input
                      {...register("company")}
                      type="text"
                      autoComplete="organization"
                      className={inputClass(errors.company)}
                      placeholder="Your company"
                    />
                  </FormField>
                </div>

                <FormField label="Service interest" error={errors.service?.message}>
                  <select
                    {...register("service")}
                    className={cn(inputClass(errors.service), "cursor-pointer")}
                    defaultValue=""
                  >
                    <option value="" disabled className="text-slate-900">
                      Select a service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title} className="text-slate-900">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Message" error={errors.message?.message} required>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className={cn(inputClass(errors.message), "resize-none")}
                    placeholder="Tell us about your project, timeline, and goals..."
                  />
                </FormField>

                {status === "error" && (
                  <p className="text-sm text-red-500" role="alert">
                    {errorMessage}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get Started
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

function inputClass(error?: { message?: string }) {
  return cn(
    "w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors",
    "focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/10",
    error ? "border-red-500/50" : "border-black/5 hover:border-black/10"
  );
}

function FormField({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-blue-600"> *</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
  external,
  accent = "blue",
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  accent?: "blue" | "emerald";
}) {
  const content = (
    <>
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm text-slate-900 font-medium">{value}</p>
    </>
  );

  const iconStyles =
    accent === "emerald"
      ? "border-emerald-500/25 bg-emerald-500/5 text-emerald-600"
      : "border-blue-500/20 bg-blue-500/5 text-blue-600";

  const hoverStyles =
    accent === "emerald" ? "hover:text-emerald-600" : "hover:text-blue-600";

  return (
    <motion.div
      className="flex gap-4"
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
          iconStyles
        )}
        whileHover={{ rotate: accent === "emerald" ? 8 : -8, scale: 1.05 }}
      >
        <Icon className="h-4 w-4" />
      </motion.div>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={cn("transition-colors", hoverStyles)}
        >
          {content}
        </a>
      ) : (
        <div>{content}</div>
      )}
    </motion.div>
  );
}
