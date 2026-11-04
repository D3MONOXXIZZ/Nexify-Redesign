import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-top">
        <div className="footer-cta">
          <p className="font-mono text-[var(--t-xs)] text-[var(--c-accent)] tracking-widest uppercase mb-4">
            {'//'} TERMINAL ACTION
          </p>
          <h2 className="text-[var(--t-xl)] font-medium leading-[0.92] tracking-tight mb-8">
            Have an ambitious idea?
            <br />
            Let’s engineer what’s <span className="text-[var(--c-accent)]">next.</span>
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-nexus" data-magnetic="0.25">
              <span>Initiate project brief</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nexus btn-nexus-outline"
            >
              <span>Direct WhatsApp uplink</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-links-col">
          <span className="font-mono text-[var(--t-xs)] text-[var(--c-muted)] tracking-widest uppercase">
            {'//'} TELEMETRY & DIRECT LINKS
          </span>
          <div className="flex flex-col gap-3 font-mono text-[var(--t-s)]">
            <a
              href={`mailto:${site.email}`}
              className="hover:text-[var(--c-accent)] transition-all duration-300 hover:translate-x-1.5 flex items-center justify-between border-b border-[var(--c-border)] pb-2 group"
            >
              <span>Email: {site.email}</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={`tel:${site.phone.replace(/\s+/g, '')}`}
              className="hover:text-[var(--c-accent)] transition-all duration-300 hover:translate-x-1.5 flex items-center justify-between border-b border-[var(--c-border)] pb-2 group"
            >
              <span>Direct: {site.phone}</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="flex items-center justify-between border-b border-[var(--c-border)] pb-2 text-[var(--c-muted)]">
              <span>Timezone: {site.timezone}</span>
              <span>Karachi, PK</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--c-muted)] hover:text-[var(--c-fg)] transition-all duration-300 hover:-translate-y-1 min-h-[44px] min-w-[44px] inline-flex items-center px-2 font-medium"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Massive Architectural Display Watermark */}
      <div className="footer-watermark" aria-hidden="true">
        NEXIFY CONCEPTS
      </div>

      <div className="footer-bottom">
        <div>
          © {currentYear} {site.name}. All systems calibrated.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-[var(--c-fg)] transition-colors py-2">
            Privacy policy
          </Link>
          <span aria-hidden="true" className="text-[var(--c-muted)]">·</span>
          <Link href="/terms" className="hover:text-[var(--c-fg)] transition-colors py-2">
            Terms of service
          </Link>
          <span aria-hidden="true" className="text-[var(--c-muted)]">·</span>
          <span>LAT 24.86° N · LON 67.00° E</span>
        </div>
      </div>
    </footer>
  );
}
