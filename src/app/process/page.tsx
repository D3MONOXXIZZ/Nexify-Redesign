import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { processPhases } from '@/data/site';

export const metadata: Metadata = {
  title: 'Engineering Protocol & Methodology',
  description:
    'Our four phase development lifecycle: Deconstruct, Synthesize, Construct, and Orchestrate. Engineered for clarity, speed, and precision.',
};

export default function ProcessPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="nexus-section border-b border-[var(--c-border)]">
        <p className="nexus-tag">{'//'} ENGINEERING PROTOCOL</p>
        <h1 className="hero-mega-title max-w-4xl" data-split="lines">
          THE PROTOCOL.
        </h1>
        <p className="mt-6 text-[var(--t-m)] text-[var(--c-muted)] max-w-2xl leading-relaxed">
          How we take high complexity digital problems and engineer clear, inevitable, and robust solutions.
          Every phase produces tangible, inspectable deliverables.
        </p>
      </section>

      <section className="nexus-section">
        <div className="flex flex-col gap-12">
          {processPhases.map((phase) => (
            <div
              key={phase.phase}
              className="p-8 lg:p-12 bg-[var(--c-surface)] border border-[var(--c-border)] grid grid-cols-12 gap-[var(--gutter)] items-start"
              data-reveal="up"
            >
              <div className="col-span-12 lg:col-span-3">
                <span className="font-mono text-5xl font-light text-[var(--c-muted)] block mb-2">
                  {phase.phase}
                </span>
                <span className="font-mono text-[var(--t-xs)] text-[var(--c-accent)] tracking-widest uppercase">
                  {'//'} {phase.code}
                </span>
              </div>

              <div className="col-span-12 lg:col-span-6">
                <h2 className="text-[var(--t-l)] font-medium text-[var(--c-fg)] mb-4">
                  {phase.name}
                </h2>
                <p className="text-[var(--t-body)] text-[var(--c-muted)] leading-relaxed text-pretty">
                  {phase.summary}
                </p>
              </div>

              <div className="col-span-12 lg:col-span-3 p-4 bg-[var(--c-bg)] border border-[var(--c-border)]">
                <span className="font-mono text-[var(--t-xs)] text-[var(--c-muted)] block mb-1">
                  PHASE OUTPUT:
                </span>
                <span className="font-mono text-[var(--t-s)] text-[var(--c-fg)]">
                  {phase.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-[var(--c-surface)] border border-[var(--c-border)] flex flex-wrap justify-between items-center gap-6">
          <div>
            <h3 className="text-[var(--t-m)] font-medium text-[var(--c-fg)]">
              Ready to begin Phase 01?
            </h3>
            <p className="text-[var(--t-s)] text-[var(--c-muted)] font-mono mt-1">
              We scope your challenge within 48 hours.
            </p>
          </div>
          <Link href="/contact" className="btn-nexus" data-magnetic="0.25">
            <span>Schedule discovery session</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
