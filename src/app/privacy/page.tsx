import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Our commitment to privacy, data minimization, and telemetry integrity at Nexify Concepts.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="nexus-section border-b border-[var(--c-border)]">
        <p className="nexus-tag">{'//'} LEGAL & TELEMETRY PROTOCOL</p>
        <h1 className="hero-mega-title max-w-4xl" data-split="lines">
          PRIVACY POLICY.
        </h1>
        <p className="mt-6 text-[var(--t-m)] text-[var(--c-muted)] max-w-2xl leading-relaxed text-pretty">
          Nexify Concepts operates on principles of extreme data minimization. We do not sell your
          information, track you across the web, or embed intrusive third party marketing cookies.
        </p>
      </section>

      <section className="nexus-section">
        <article className="max-w-3xl flex flex-col gap-12 text-[var(--t-body)] text-[var(--c-muted)] leading-relaxed">
          <div className="p-6 bg-[var(--c-surface)] border border-[var(--c-border)] flex items-start gap-4">
            <ShieldCheck size={24} className="text-[var(--c-accent)] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-[var(--t-m)] font-medium text-[var(--c-fg)]">
                Direct Communication Guarantee
              </h2>
              <p className="text-[var(--t-body)] text-[var(--c-muted)] mt-1">
                When you initiate a project brief through our portal, your parameters are dispatched
                directly to our partner inbox or official WhatsApp uplink. No intermediate tracking
                broker stores your commercial details.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[var(--t-l)] font-medium text-[var(--c-fg)] mb-4">
              01 {'//'} Information Collection
            </h2>
            <p className="mb-4">
              We collect information solely to respond to your technical project inquiries and execute
              commissioned digital products:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--c-fg)]">
              <li>Contact coordinates including your name, email address, and organization.</li>
              <li>Project scope specifications, desired delivery schedules, and technical requirements.</li>
              <li>Voluntary technical parameters supplied during architecture discovery calls.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[var(--t-l)] font-medium text-[var(--c-fg)] mb-4">
              02 {'//'} Zero Third Party Ad Tracking
            </h2>
            <p>
              We do not integrate surveillance pixels, behavioral re targeting trackers, or ad network
              scripts. Our performance telemetry evaluates anonymous aggregate rendering performance,
              Core Web Vitals, and WebGL compatibility to ensure optimal user experience across all devices.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--t-l)] font-medium text-[var(--c-fg)] mb-4">
              03 {'//'} Data Storage and Retention
            </h2>
            <p>
              Client records and communication logs are stored in secure, encrypted cloud repositories with
              restricted role based access. We retain project documentation only for the duration required
              to fulfill our contract obligations and ongoing architectural support warranties.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--t-l)] font-medium text-[var(--c-fg)] mb-4">
              04 {'//'} Contact and Inquiries
            </h2>
            <p className="mb-6">
              For any questions regarding our telemetry practices or to request complete deletion of your
              inquiry records, reach out directly to our engineering desk:
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
