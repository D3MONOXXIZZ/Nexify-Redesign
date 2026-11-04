import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileCheck } from 'lucide-react';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Engineering engagement terms, intellectual property ownership, and service agreements with Nexify Concepts.',
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="nexus-section border-b border-[var(--c-border)]">
        <p className="nexus-tag">{'//'} ENGAGEMENT PROTOCOL</p>
        <h1 className="hero-mega-title max-w-4xl" data-split="lines">
          TERMS OF SERVICE.
        </h1>
        <p className="mt-6 text-[var(--t-m)] text-[var(--c-muted)] max-w-2xl leading-relaxed text-pretty">
          Our terms establish straightforward, transparent guidelines for technical collaboration,
          intellectual property ownership, and milestone execution.
        </p>
      </section>

      <section className="nexus-section">
        <article className="max-w-3xl flex flex-col gap-12 text-[var(--t-body)] text-[var(--c-muted)] leading-relaxed">
          <div className="p-6 bg-[var(--c-surface)] border border-[var(--c-border)] flex items-start gap-4">
            <FileCheck size={24} className="text-[var(--c-accent)] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-[var(--t-m)] font-medium text-[var(--c-fg)]">
                Transparent Engagement Model
              </h2>
              <p className="text-[var(--t-body)] text-[var(--c-muted)] mt-1">
                Every project is governed by a distinct technical scope statement and fixed milestone
                schedule. We never levy hidden fees, maintenance surprises, or licensing lock ins.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[var(--t-l)] font-medium text-[var(--c-fg)] mb-4">
              01 {'//'} Scope and Milestones
            </h2>
            <p className="mb-4">
              All commissioned software, digital platforms, and design systems follow structured phases
              defined in our project statements of work:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--c-fg)]">
              <li>Phase 01: Deconstruct (discovery, specifications, and architecture planning).</li>
              <li>Phase 02: Synthesize (interactive prototypes and technical feasibility proofs).</li>
              <li>Phase 03: Construct (production code implementation and rigorous quality testing).</li>
              <li>Phase 04: Orchestrate (deployment, telemetry calibration, and warranty handover).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[var(--t-l)] font-medium text-[var(--c-fg)] mb-4">
              02 {'//'} Intellectual Property Ownership
            </h2>
            <p>
              Upon receipt of final milestone payment, full ownership of all bespoke source code, design
              tokens, vector assets, and system documentation transfers unconditionally to the client.
              Nexify Concepts retains the right to display non confidential screenshots and case studies
              within our design archive.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--t-l)] font-medium text-[var(--c-fg)] mb-4">
              03 {'//'} Warranties and Code Quality
            </h2>
            <p>
              We warrant that all delivered code satisfies modern production standards, WCAG AA contrast
              and accessibility requirements, and sub 30ms interface response targets. Every delivery
              includes a thirty day post launch warranty period to rectify any reproducible defects without
              additional charge.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--t-l)] font-medium text-[var(--c-fg)] mb-4">
              04 {'//'} Jurisdiction and Contact
            </h2>
            <p className="mb-6">
              Agreements are executed under commercial contract standards for international remote
              collaboration. Inquiries concerning contractual agreements should be directed to:
            </p>
            <div className="p-6 bg-[var(--c-surface)] border border-[var(--c-border)] font-mono text-sm">
              <p className="text-[var(--c-fg)]">NEXIFY CONCEPTS</p>
              <p className="text-[var(--c-muted)] mt-1">Karachi, Pakistan (UTC+5)</p>
              <p className="text-[var(--c-accent)] mt-2">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--c-border)]">
            <Link href="/" className="btn-nexus" data-magnetic="0.2">
              <ArrowLeft size={16} />
              <span>Return to home</span>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
