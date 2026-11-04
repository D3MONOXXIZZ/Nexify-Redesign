import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { disciplines, projects, processPhases, faqs } from '@/data/site';
import { TaglineReveal } from '@/components/ui/TaglineReveal';

export default function HomePage() {
  return (
    <>
      {/* 01 // HERO: THE CONVERGENCE STAGE */}
      <section className="hero-stage" aria-label="Nexify Concepts Hero">
        <div className="hero-coords-strip" aria-hidden="true">
          <span>{'//'} NEXIFY CONCEPTS · CORE 01</span>
          <span>LAT 24.8607° N · LON 67.0011° E</span>
          <span data-telemetry-scroll>SCROLL {'//'} 00%</span>
        </div>

        <div className="hero-main-layout">
          <div className="hero-title-block">
            <p className="nexus-tag" data-intro data-reveal="fade">
              <span className="status-dot" />
              INDEPENDENT SOFTWARE & DESIGN STUDIO
            </p>
            <h1 className="hero-mega-title" data-split="lines" data-intro>
              BUILT FOR
              <br />
              WHAT’S <span className="text-[var(--c-accent)]">NEXT.</span>
            </h1>
            <p
              className="mt-6 text-[var(--t-m)] text-[var(--c-muted)] max-w-2xl leading-relaxed"
              data-intro
              data-reveal="fade"
              data-delay="0.15"
            >
              We engineer high stakes software systems, web platforms, and design interfaces for
              ambitious founders and forward thinking enterprises.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-4"
              data-intro
              data-reveal="fade"
              data-delay="0.25"
            >
              <Link href="/contact" className="btn-nexus" data-magnetic="0.25">
                <span>Initiate project brief</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <a
                href="#specimens"
                className="btn-nexus btn-nexus-outline"
                data-magnetic="0.2"
              >
                <span>Explore specimens</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-orbital-node" data-intro data-reveal="scale" data-delay="0.3">
            <div className="brand-orb-frame" aria-hidden="true">
              <div className="brand-orb-ring" />
              <div className="brand-orb-ring ring-dashed" />
              <div className="relative w-44 h-44 z-10 filter drop-shadow-[0_0_30px_rgba(43,127,255,0.4)]">
                <Image
                  src="/nexify-brand.png"
                  alt="Nexify Concepts Brand Mark"
                  fill
                  priority
                  sizes="176px"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="font-mono text-[var(--t-xs)] text-[var(--c-muted)] flex flex-col items-end">
              <span className="text-[var(--c-fg)]">CONVERGENCE NEXUS {'//'} 01</span>
              <span>CONNECT · INNOVATE · ADVANCE</span>
            </div>
          </div>
        </div>

        <div className="hero-baseline">
          <span>01 {'//'} STRATEGY · 02 {'//'} ARCHITECTURE · 03 {'//'} CRAFT · 04 {'//'} DEPLOY</span>
          <a href="#disciplines" className="flex items-center gap-2 hover:text-[var(--c-fg)] transition-all duration-300 hover:translate-y-1 py-2 px-3 min-h-[44px]">
            <span>Explore matrix</span>
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* 01.5 // CORE BENEFIT STATEMENT: WORD-BY-WORD TAGLINE REVEAL */}
      <TaglineReveal
        phrase="We engineer high stakes digital products with mathematical clarity and zero compromise."
        subtext="Every system is constructed for long term durability, sub 30ms latency, and immediate commercial authority."
      />

      {/* 02 // DISCIPLINES: CAPABILITIES MATRIX */}
      <section id="disciplines" className="nexus-section" aria-labelledby="disciplines-heading">
        <div className="nexus-header">
          <div className="nexus-header-lead">
            <p className="nexus-tag">{'//'} 01 · CORE CAPABILITIES</p>
            <h2 id="disciplines-heading" className="section-h2" data-split="lines">
              Surgical craft.
              <br />
              <span className="text-[var(--c-muted)]">Full stack rigor.</span>
            </h2>
          </div>
          <div className="nexus-header-meta">
            <p>
              We operate as a unified creative engineering unit. From architectural design systems to
              high throughput distributed cloud backends.
            </p>
          </div>
        </div>

        <div className="matrix-list">
          {disciplines.map((d) => (
            <div key={d.id} className="matrix-row" data-reveal="up">
              <span className="matrix-index">{d.index} {'//'}</span>
              <div>
                <h3 className="matrix-name">{d.name}</h3>
                <p className="text-[var(--t-s)] font-mono text-[var(--c-accent)] mt-1">{d.headline}</p>
              </div>
              <p className="matrix-summary">{d.summary}</p>
              <div className="matrix-tags">
                {d.tech.map((t) => (
                  <span key={t} className="matrix-tag-badge">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={`/services#${d.id}`}
                className="p-3 text-[var(--c-muted)] hover:text-[var(--c-fg)] hover:scale-110 transition-all flex justify-end"
                aria-label={`Learn more about ${d.name}`}
              >
                <ArrowUpRight size={20} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 03 // SPECIMENS: LAB ARCHIVE */}
      <section id="specimens" className="nexus-section" aria-labelledby="specimens-heading">
        <div className="nexus-header">
          <div className="nexus-header-lead">
            <p className="nexus-tag">{'//'} 02 · LAB SPECIMENS</p>
            <h2 id="specimens-heading" className="section-h2" data-split="lines">
              Possibilities,
              <br />
              <span className="text-[var(--c-muted)]">made tangible.</span>
            </h2>
          </div>
          <div className="nexus-header-meta">
            <p>
              Explore our laboratory design and engineering prototypes demonstrating high stakes
              system capability, WebGL choreography, and sub second performance.
            </p>
          </div>
        </div>

        <div className="specimen-grid">
          {projects.map((p) => (
            <article key={p.slug} className="specimen-card" data-reveal="up" data-cursor="View Spec">
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
                  <h3 className="specimen-title">{p.title}</h3>
                  <p className="specimen-summary">{p.summary}</p>
                  <div className="specimen-footer">
                    <span>Inspect technical specification</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 04 // PROTOCOL: THE 4-PHASE PROCESS */}
      <section className="nexus-section" aria-labelledby="protocol-heading">
        <div className="nexus-header">
          <div className="nexus-header-lead">
            <p className="nexus-tag">{'//'} 03 · THE PROTOCOL</p>
            <h2 id="protocol-heading" className="section-h2" data-split="lines">
              Mathematical order.
              <br />
              <span className="text-[var(--c-muted)]">Shared conviction.</span>
            </h2>
          </div>
          <div className="nexus-header-meta">
            <p>
              High caliber digital products leave nothing to chance. We move through four structured
              engineering phases to eliminate ambiguity and guarantee execution.
            </p>
          </div>
        </div>

        <div className="protocol-grid">
          {processPhases.map((phase) => (
            <div key={phase.phase} className="protocol-card" data-reveal="up">
              <span className="protocol-phase">{phase.phase}</span>
              <span className="protocol-code">{'//'} {phase.code}</span>
              <h3 className="protocol-name">{phase.name}</h3>
              <p className="protocol-summary">{phase.summary}</p>
              <div className="protocol-deliverable">
                <span className="text-[var(--c-muted)] block mb-1">OUTPUT:</span>
                <span>{phase.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05 // MANIFESTO & TELEMETRY */}
      <section className="nexus-section" aria-labelledby="manifesto-heading">
        <div className="manifesto-box" data-reveal="up">
          <p className="nexus-tag">{'//'} 04 · ENGINEERING MANIFESTO</p>
          <h2 id="manifesto-heading" className="manifesto-text" data-split="lines">
            We do not assemble templates or rely on synthetic shortcuts. We engineer unfair competitive
            advantage through surgical typography, resilient architecture, and mathematical clarity.
          </h2>

          <div className="telemetry-row">
            <div>
              <div className="telemetry-val">0.00s</div>
              <div className="telemetry-lbl">Layout Shift (CLS)</div>
            </div>
            <div>
              <div className="telemetry-val">100%</div>
              <div className="telemetry-lbl">Lighthouse Target</div>
            </div>
            <div>
              <div className="telemetry-val">60 FPS</div>
              <div className="telemetry-lbl">Smooth Choreography</div>
            </div>
            <div>
              <div className="telemetry-val">WCAG AA</div>
              <div className="telemetry-lbl">Accessibility Standard</div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 // FAQ ACCORDION */}
      <section className="nexus-section" aria-labelledby="faq-heading">
        <div className="faq-grid">
          <div className="faq-lead">
            <p className="nexus-tag">{'//'} 05 · DIRECT INQUIRIES</p>
            <h2 id="faq-heading" className="section-h2" data-split="lines">
              Good questions.
              <br />
              <span className="text-[var(--c-muted)]">Clear answers.</span>
            </h2>
            <p className="mt-4 text-[var(--t-body)] text-[var(--c-muted)]">
              Everything you need to know about partnering with Nexify Concepts on your next project.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-nexus" data-magnetic="0.25">
                <span>Start direct discussion</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((f, i) => (
              <details key={i} className="faq-item" data-reveal="fade">
                <summary className="faq-summary">
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="faq-body">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
