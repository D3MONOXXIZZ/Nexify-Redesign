"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SiteNavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function SiteNavLink({ href, label, onClick, className }: SiteNavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-sm font-medium transition-colors",
        isActive ? "text-white" : "text-white/70 hover:text-white",
        className
      )}
    >
      {label}
    </Link>
  );
}
