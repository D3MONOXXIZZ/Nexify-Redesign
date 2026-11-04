import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { disciplines } from '@/data/site';

export const metadata: Metadata = {
  title: 'Engineering Disciplines & Services',
  description:
    'Full stack software engineering, UI/UX design systems, bespoke brand platforms, and high conversion Shopify architecture.',
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="nexus-section border-b border-[var(--c-border)]">
        <p className="nexus-tag">{'//'} DISCIPLINE ARCHITECTURE</p>
        <h1 className="hero-mega-title max-w-4xl" data-split="lines">
          DISCIPLINES.
        </h1>
        <p className="mt-6 text-[var(--t-m)] text-[var(--c-muted)] max-w-2xl leading-relaxed">
          We operate across four specialized pillars. We pair surgical interface craft with robust,
          scalable software architecture.
        </p>
      </section>

      <section className="nexus-section">
        <div className="flex flex-col gap-16">
          {disciplines.map((d) => (
            <div
              key={d.id}
              id={d.id}
              className="p-8 lg:p-12 bg-[var(--c-surface)] border border-[var(--c-border)] grid grid-cols-12 gap-[var(--gutter)]"
              data-reveal="up"
            >
              <div className="col-span-12 lg:col-span-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[var(--t-xs)] text-[var(--c-accent)] block mb-2">
                    {d.index} {'//'} DISCIPLINE
                  </span>
                  <h2 className="text-[var(--t-l)] font-medium text-[var(--c-fg)] mb-2">
                    {d.name}
                  </h2>
                  <p className="font-mono text-[var(--t-s)] text-[var(--c-accent)] mb-6">
                    {d.headline}
                  </p>
                  <p className="text-[var(--t-body)] text-[var(--c-muted)] leading-relaxed mb-6">
                    {d.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {d.tech.map((t) => (
                    <span key={t} className="matrix-tag-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-span-12 lg:col-span-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[var(--c-border)] pt-6 lg:pt-0 lg:pl-[var(--gutter)]">
                <div>
                  <span className="font-mono text-[var(--t-xs)] text-[var(--c-muted)] tracking-wider uppercase block mb-4">
                    {'//'} KEY DELIVERABLES
                  </span>
                  <ul className="flex flex-col gap-3">
                    {d.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[var(--t-body)] text-[var(--c-fg)]">
                        <Check size={16} className="text-[var(--c-accent)] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--c-border)]">
                  <Link
                    href={`/contact?discipline=${d.id}`}
                    className="btn-nexus w-full text-center"
                    data-magnetic="0.2"
                  >
                    <span>Commission this discipline</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
