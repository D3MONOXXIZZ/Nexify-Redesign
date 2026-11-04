import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Shield, Zap, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Studio — Origin & Philosophy',
  description:
    'Independent digital product and software engineering studio based in Karachi, Pakistan, collaborating with ambitious founders and teams worldwide.',
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="nexus-section border-b border-[var(--c-border)]">
        <p className="nexus-tag">{'//'} STUDIO IDENTITY</p>
        <h1 className="hero-mega-title max-w-4xl" data-split="lines">
          THE STUDIO.
        </h1>
        <p className="mt-6 text-[var(--t-m)] text-[var(--c-muted)] max-w-2xl leading-relaxed">
          Nexify Concepts is an independent creative engineering practice. We unite mathematical interface
          architecture with robust software development for teams taking their next big leap.
        </p>
      </section>

      <section className="nexus-section">
        <div className="grid grid-cols-12 gap-[var(--gutter)] items-start">
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-6 text-[var(--t-body)] text-[var(--c-muted)] leading-relaxed">
            <h2 className="text-[var(--t-l)] font-medium text-[var(--c-fg)] mb-2">
              Based in Pakistan.
              <br />
              <span className="text-[var(--c-accent)]">Engineering beyond borders.</span>
            </h2>
            <p>
              We founded Nexify Concepts around a fundamental premise: that software does not have to be
              sterile, and high impact design does not have to sacrifice speed or accessibility.
            </p>
            <p>
              Operating from Karachi (UTC+5), we collaborate directly with venture backed startups, digital
              agencies, and established enterprises globally. We work as tight, senior level pairs without
              bureaucratic layers or account manager handoffs.
            </p>
            <p>
              When you partner with Nexify, you speak directly with the architects and engineers writing the code
              and shaping the keyframes.
            </p>

            <div className="pt-6 border-t border-[var(--c-border)] flex items-center gap-6 font-mono text-[var(--t-xs)]">
              <div>
                <span className="text-[var(--c-fg)] block">BASE:</span>
                <span>Karachi, Pakistan</span>
              </div>
              <div>
                <span className="text-[var(--c-fg)] block">ACTIVE TIMEZONE:</span>
                <span>UTC+5 (PKT)</span>
              </div>
              <div>
                <span className="text-[var(--c-fg)] block">CODE STANDARD:</span>
                <span>Next.js 15 & TS</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 p-8 bg-[var(--c-surface)] border border-[var(--c-border)] flex flex-col gap-8">
            <span className="font-mono text-[var(--t-xs)] text-[var(--c-accent)] tracking-widest uppercase">
              {'//'} CORE PRINCIPLES
            </span>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <Zap className="text-[var(--c-accent)] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-[var(--t-m)] font-medium text-[var(--c-fg)]">
                    Mathematical Precision
                  </h3>
                  <p className="text-[var(--t-body)] text-[var(--c-muted)] mt-1">
                    Every layout adheres to structured fluid grids, optical typographic scaling, and strict
                    spacing tokens. Nothing is arbitrary.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="text-[var(--c-accent)] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-[var(--t-m)] font-medium text-[var(--c-fg)]">
                    Zero compromise accessibility
                  </h3>
                  <p className="text-[var(--t-body)] text-[var(--c-muted)] mt-1">
                    WCAG AA contrast, logical keyboard tab orders, semantic landmarks, and full reduced motion
                    support are built in from day zero.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Sparkles className="text-[var(--c-accent)] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-[var(--t-m)] font-medium text-[var(--c-fg)]">
                    Living Motion Choreography
                  </h3>
                  <p className="text-[var(--t-body)] text-[var(--c-muted)] mt-1">
                    A single unified clock drives smooth scroll, WebGL shaders, and micro interactions so every
                    element breathes in unison.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--c-border)]">
              <Link href="/contact" className="btn-nexus w-full text-center">
                <span>Start direct discussion</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
