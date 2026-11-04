'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { site } from '@/data/site';

const disciplineOptions = [
  { id: 'web-software', label: 'Web & Distributed Software' },
  { id: 'product-design', label: 'UI/UX & Design Systems' },
  { id: 'bespoke-platforms', label: 'High Impact Brand Platforms' },
  { id: 'commerce', label: 'Scalable Commerce Architecture' },
  { id: 'general', label: 'General / Architectural Advisory' },
];

export default function ContactPage() {
  const [channel, setChannel] = useState<'email' | 'whatsapp'>('email');
  const [selectedDiscipline, setSelectedDiscipline] = useState('web-software');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const q = new URLSearchParams(window.location.search).get('discipline');
      if (q && disciplineOptions.some((d) => d.id === q)) {
        setSelectedDiscipline(q);
      }
    }
  }, []);

  function handleBriefSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const company = String(form.get('company') || '').trim();
    const scope = String(form.get('scope') || '').trim();
    const budget = String(form.get('budget') || 'Flexible');

    const chosen =
      disciplineOptions.find((d) => d.id === selectedDiscipline)?.label || 'Bespoke Project';

    const messageBody = [
      `Hi Nexify Concepts,`,
      ``,
      `I would like to initiate a project brief:`,
      `Client name: ${name}`,
      `Email: ${email}`,
      company ? `Organization: ${company}` : null,
      `Discipline: ${chosen}`,
      `Anticipated budget: ${budget}`,
      ``,
      `Project brief:`,
      scope,
    ]
      .filter(Boolean)
      .join('\n');

    if (channel === 'whatsapp') {
      const waUrl = `${site.whatsappUrl}?text=${encodeURIComponent(messageBody)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setStatusMessage(
        'Your technical brief has been encoded for WhatsApp. Review and press Send in the app.'
      );
    } else {
      const mailtoUrl = `mailto:${site.email}?subject=${encodeURIComponent(
        `Project Brief [${chosen}] — ${name}`
      )}&body=${encodeURIComponent(messageBody)}`;
      window.location.href = mailtoUrl;
      setStatusMessage(
        'Your native email client has been opened with your brief. Press Send in your email client to dispatch.'
      );
    }
  }

  return (
    <div className="pt-28 pb-20">
      <section className="nexus-section border-b border-[var(--c-border)]">
        <p className="nexus-tag">{'//'} DIRECT INITIATION</p>
        <h1 className="hero-mega-title max-w-4xl" data-split="lines">
          INITIATE BRIEF.
        </h1>
        <p className="mt-6 text-[var(--t-m)] text-[var(--c-muted)] max-w-2xl leading-relaxed">
          Tell us about your technical goals, timelines, and ambition. We evaluate every inquiry directly
          and reply within 24 to 48 hours.
        </p>
      </section>

      <section className="nexus-section">
        <div className="grid grid-cols-12 gap-[var(--gutter)] items-start">
          {/* Left: Contact Channels & Location Telemetry */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
            <div className="p-8 bg-[var(--c-surface)] border border-[var(--c-border)] flex flex-col gap-6">
              <span className="font-mono text-[var(--t-xs)] text-[var(--c-accent)] tracking-widest uppercase">
                {'//'} DIRECT COMMUNICATIONS
              </span>

              <div className="flex flex-col gap-4 font-mono text-[var(--t-s)]">
                <div>
                  <span className="text-[var(--c-muted)] block text-xs">EMAIL UPLINK</span>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-[var(--c-fg)] hover:text-[var(--c-accent)] transition-all duration-300 hover:translate-x-1 flex items-center justify-between mt-1 group"
                  >
                    <span>{site.email}</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <div className="pt-3 border-t border-[var(--c-border)]">
                  <span className="text-[var(--c-muted)] block text-xs">PHONE / WHATSAPP</span>
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--c-fg)] hover:text-[var(--c-accent)] transition-all duration-300 hover:translate-x-1 flex items-center justify-between mt-1 group"
                  >
                    <span>{site.phone}</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <div className="pt-3 border-t border-[var(--c-border)]">
                  <span className="text-[var(--c-muted)] block text-xs">HEADQUARTERS</span>
                  <span className="text-[var(--c-fg)] block mt-1">Karachi, Pakistan (UTC+5)</span>
                  <span className="text-[var(--c-muted)] text-xs block mt-0.5">
                    Coordinated remote development worldwide.
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[var(--c-surface)] border border-[var(--c-border)] flex flex-col gap-3 font-mono text-[var(--t-xs)] text-[var(--c-muted)]">
              <div className="flex items-center gap-2 text-[var(--c-fg)]">
                <CheckCircle2 size={14} className="text-[var(--c-accent)]" />
                <span>Zero spam databases or third-party tracking</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--c-fg)]">
                <CheckCircle2 size={14} className="text-[var(--c-accent)]" />
                <span>Direct partner review with senior engineers</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Brief Generator */}
          <div className="col-span-12 lg:col-span-7">
            <form
              onSubmit={handleBriefSubmit}
              className="p-8 lg:p-12 bg-[var(--c-surface)] border border-[var(--c-border)] flex flex-col gap-6"
            >
              <div className="flex justify-between items-center pb-4 border-b border-[var(--c-border)]">
                <span className="font-mono text-[var(--t-xs)] text-[var(--c-accent)] tracking-widest uppercase">
                  {'//'} PROJECT PARAMETERS
                </span>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setChannel('email')}
                    className={`px-3 py-1.5 border transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] ${
                      channel === 'email'
                        ? 'bg-[var(--c-fg)] text-[var(--c-bg)] border-[var(--c-fg)]'
                        : 'border-[var(--c-border)] text-[var(--c-muted)] hover:border-[var(--c-fg)] hover:text-[var(--c-fg)]'
                    }`}
                  >
                    Email App
                  </button>
                  <button
                    type="button"
                    onClick={() => setChannel('whatsapp')}
                    className={`px-3 py-1.5 border transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] ${
                      channel === 'whatsapp'
                        ? 'bg-[#25d366] text-white border-[#25d366]'
                        : 'border-[var(--c-border)] text-[var(--c-muted)] hover:border-[#25d366] hover:text-[#25d366]'
                    }`}
                  >
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2 font-mono text-[var(--t-xs)] text-[var(--c-muted)]">
                  <span>YOUR NAME *</span>
                  <input
                    name="name"
                    required
                    placeholder="Alex Chen"
                    className="p-3 bg-[var(--c-bg)] border border-[var(--c-border)] text-[var(--c-fg)] focus:border-[var(--c-accent)] focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 font-mono text-[var(--t-xs)] text-[var(--c-muted)]">
                  <span>EMAIL ADDRESS *</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="p-3 bg-[var(--c-bg)] border border-[var(--c-border)] text-[var(--c-fg)] focus:border-[var(--c-accent)] focus:outline-none"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2 font-mono text-[var(--t-xs)] text-[var(--c-muted)]">
                  <span>COMPANY / ORGANIZATION</span>
                  <input
                    name="company"
                    placeholder="Acme Systems"
                    className="p-3 bg-[var(--c-bg)] border border-[var(--c-border)] text-[var(--c-fg)] focus:border-[var(--c-accent)] focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 font-mono text-[var(--t-xs)] text-[var(--c-muted)]">
                  <span>TARGET BUDGET</span>
                  <select
                    name="budget"
                    defaultValue="Under $5k"
                    className="p-3 bg-[var(--c-bg)] border border-[var(--c-border)] text-[var(--c-fg)] focus:border-[var(--c-accent)] focus:outline-none"
                  >
                    <option value="Under $5k">Under $5k</option>
                    <option value="$5k to $15k">$5k to $15k</option>
                    <option value="$15k to $30k">$15k to $30k</option>
                    <option value="$30k+">$30k+</option>
                    <option value="Undetermined">To Be Scoped</option>
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-2 font-mono text-[var(--t-xs)] text-[var(--c-muted)]">
                <span>DISCIPLINE SELECTION</span>
                <select
                  value={selectedDiscipline}
                  onChange={(e) => setSelectedDiscipline(e.target.value)}
                  className="p-3 bg-[var(--c-bg)] border border-[var(--c-border)] text-[var(--c-fg)] focus:border-[var(--c-accent)] focus:outline-none"
                >
                  {disciplineOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 font-mono text-[var(--t-xs)] text-[var(--c-muted)]">
                <span>PROJECT BRIEF & TIMELINE *</span>
                <textarea
                  name="scope"
                  required
                  rows={5}
                  placeholder="Describe your current system, objective, and ideal launch timeline..."
                  className="p-3 bg-[var(--c-bg)] border border-[var(--c-border)] text-[var(--c-fg)] focus:border-[var(--c-accent)] focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="btn-nexus w-full text-center mt-2"
                data-magnetic="0.2"
              >
                <span>
                  Dispatch brief via {channel === 'whatsapp' ? 'WhatsApp' : 'native email'}
                </span>
                <ArrowUpRight size={16} />
              </button>

              {statusMessage && (
                <div className="p-4 bg-[var(--c-bg)] border border-[var(--c-accent)] font-mono text-xs text-[var(--c-fg)] leading-relaxed">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
