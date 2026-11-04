import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/site';

export const metadata: Metadata = {
  title: 'Lab Specimens & Case Studies',
  description:
    'Explore internal laboratory design concepts, full stack architectures, and WebGL experiments engineered by Nexify Concepts.',
};

export default function WorkPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="nexus-section border-b border-[var(--c-border)]">
        <p className="nexus-tag">{'//'} ARCHIVE INDEX</p>
        <h1 className="hero-mega-title max-w-4xl" data-split="lines">
          LAB SPECIMENS.
        </h1>
        <p className="mt-6 text-[var(--t-m)] text-[var(--c-muted)] max-w-2xl leading-relaxed">
          Illustrative design concepts, real time telemetry systems, and creative engineering prototypes
          demonstrating the depth and precision of our craft.
        </p>
      </section>

      <section className="nexus-section">
        <div className="specimen-grid">
          {projects.map((p) => (
            <article key={p.slug} className="specimen-card" data-reveal="up" data-cursor="Inspect">
              <Link href={`/work/${p.slug}`} className="block">
                <figure
                  className="specimen-cover"
                  data-gl="procedural"
                  data-seed={p.cover.seed}
                  data-colors={p.cover.colors}
                  aria-label={p.cover.alt}
                >
                  <div className="gl-fallback" role="img" aria-label={p.cover.alt} />
                </figure>
                <div className="specimen-meta-strip">
                  <div className="specimen-category-row">
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <h2 className="specimen-title">{p.title}</h2>
                  <p className="text-[var(--t-s)] font-mono text-[var(--c-accent)] mb-2">{p.subtitle}</p>
                  <p className="specimen-summary">{p.summary}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.architecture.stack.map((s) => (
                      <span key={s} className="matrix-tag-badge">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="specimen-footer">
                    <span>Inspect technical architecture</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
