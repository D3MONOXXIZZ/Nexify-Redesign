"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface WhatsAppButtonProps {
  variant?: "icon" | "pill" | "fab";
  className?: string;
  label?: string;
}

export function WhatsAppButton({
  variant = "icon",
  className,
  label = "Chat on WhatsApp",
}: WhatsAppButtonProps) {
  const base = (
    <motion.a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — ${SITE.phoneDisplay}`}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        variant === "icon" &&
          "h-10 w-10 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white",
        variant === "pill" &&
          "rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white",
        variant === "fab" &&
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/30 hover:bg-[#20bd5a]",
        className
      )}
    >
      <WhatsAppIcon className={variant === "fab" ? "h-7 w-7" : "h-5 w-5"} />
      {variant === "pill" && <span>{label}</span>}
    </motion.a>
  );

  if (variant === "fab") {
    return (
      <>
        <motion.span
          aria-hidden
          className="pointer-events-none fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366]/40"
          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        {base}
      </>
    );
  }

  return base;
}
