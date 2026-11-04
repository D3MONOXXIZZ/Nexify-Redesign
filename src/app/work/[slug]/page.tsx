import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/site';

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Specimen Not Found' };

  return {
    title: `${project.title} — Technical Specimen`,
    description: project.summary,
    alternates: {
      canonical: `./`,
    },
    openGraph: {
      title: `${project.title} — ${project.subtitle} | Nexify Concepts`,
      description: project.summary,
      images: ['/nexify-brand.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Technical Specimen`,
      description: project.summary,
      images: ['/nexify-brand.png'],
    },
  };
}

export default async function ProjectCasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project for seamless continuous transition
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pt-28 pb-20">
      {/* 01 // CASE STUDY HEADER & META */}
      <section className="nexus-section border-b border-[var(--c-line)]">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-[var(--t-xs)] text-[var(--c-muted)] hover:text-[var(--c-fg)] transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          <span>RETURN TO SPECIMEN ARCHIVE</span>
        </Link>

        <div className="grid grid-cols-12 gap-[var(--gutter)] items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="nexus-tag">{'//'} SPECIMEN {project.slug.toUpperCase()}</p>
            <h1 className="hero-mega-title text-balance" data-split="lines">
              {project.title}
            </h1>
            <p className="mt-4 font-mono text-[var(--t-m)] text-[var(--c-accent)]">
              {project.subtitle}
            </p>
            <p className="mt-6 text-[var(--t-body)] text-[var(--c-muted)] max-w-2xl leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 font-mono text-[var(--t-xs)] text-[var(--c-muted)] border-t lg:border-t-0 lg:border-l border-[var(--c-line)] lg:pl-[var(--gutter)] pt-6 lg:pt-0">
            <div>
              <span className="block text-[var(--c-fg)]">CATEGORY</span>
              <span>{project.category}</span>
            </div>
            <div>
              <span className="block text-[var(--c-fg)]">TIMELINE & STATUS</span>
              <span>{project.year} · Concept Specimen</span>
            </div>
            <div>
              <span className="block text-[var(--c-fg)]">ROLES & SCOPE</span>
              <span>{project.role.join(', ')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02 // HERO COVER (WEBGL PROCEDURAL PLANE) */}
      <section className="nexus-section">
        <figure
          className="relative w-full aspect-[21/9] bg-[#0d121c] border border-[var(--c-line)] overflow-hidden"
          data-gl="procedural"
          data-seed={project.cover.seed}
          data-colors={project.cover.colors}
          data-gl-instant
          aria-label={project.cover.alt}
        >
          <div className="gl-fallback" role="img" aria-label={project.cover.alt} />
        </figure>

        {/* Telemetry Metrics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--gutter)] mt-8 p-6 bg-[var(--c-surface)] border border-[var(--c-line)]">
          {project.metrics.map((m) => (
            <div key={m.label} className="flex flex-col">
              <span className="font-mono text-[var(--t-xs)] text-[var(--c-muted)] tracking-wider uppercase">
                {m.label}
              </span>
              <span className="font-mono text-2xl font-medium text-[var(--c-accent)] mt-1">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 03 // CASE BODY SECTIONS */}
      <section className="nexus-section">
        <div className="grid grid-cols-12 gap-[var(--gutter)]">
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-28 flex flex-col gap-6">
              <span className="font-mono text-[var(--t-xs)] text-[var(--c-accent)] tracking-widest uppercase">
                {'//'} TECHNICAL ARCHITECTURE
              </span>
              <div className="p-6 bg-[var(--c-surface)] border border-[var(--c-line)] flex flex-col gap-4 font-mono text-[var(--t-xs)]">
                <div>
                  <span className="text-[var(--c-muted)] block mb-1">CORE STACK:</span>
                  <div className="flex flex-wrap gap-1">
                    {project.architecture.stack.map((s) => (
                      <span key={s} className="matrix-tag-badge">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-[var(--c-line)]">
                  <span className="text-[var(--c-muted)] block mb-1">PERFORMANCE TARGET:</span>
                  <span className="text-[var(--c-fg)]">{project.architecture.performance}</span>
                </div>
                <div className="pt-2 border-t border-[var(--c-line)]">
                  <span className="text-[var(--c-muted)] block mb-2">KEY CAPABILITIES:</span>
                  <ul className="flex flex-col gap-2 text-[var(--c-muted)]">
                    {project.architecture.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-[var(--c-accent)]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link href="/contact" className="btn-nexus w-full text-center">
                <span>Discuss Similar Build</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 flex flex-col gap-12">
            {project.body.map((b, i) => (
              <div key={b.heading} className="p-8 bg-[var(--c-surface)] border border-[var(--c-line)]" data-reveal="up">
                <span className="font-mono text-[var(--t-xs)] text-[var(--c-accent)] block mb-2">
                  0{i + 1} {'//'}
                </span>
                <h2 className="text-[var(--t-l)] font-medium text-[var(--c-fg)] mb-4">
                  {b.heading}
                </h2>
                <p className="text-[var(--t-body)] text-[var(--c-muted)] leading-relaxed text-pretty">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 // NEXT PROJECT CONTINUOUS HANDOFF */}
      <section className="nexus-section border-t border-[var(--c-line)] bg-[#05070a]">
        <Link href={`/work/${nextProject.slug}`} className="group block">
          <div className="flex justify-between items-center font-mono text-[var(--t-xs)] text-[var(--c-muted)] mb-4">
            <span>{'//'} CONTINUOUS PROGRESSION</span>
            <span className="group-hover:text-[var(--c-accent)] transition-colors flex items-center gap-1">
              <span>PROCEED TO NEXT SPECIMEN</span>
              <ArrowRight size={14} />
            </span>
          </div>

          <h2 className="text-[var(--t-xl)] font-medium group-hover:text-[var(--c-accent)] transition-colors">
            {nextProject.title} →
          </h2>
          <p className="mt-2 text-[var(--t-m)] text-[var(--c-muted)]">
            {nextProject.subtitle}
          </p>
        </Link>
      </section>
    </article>
  );
}
