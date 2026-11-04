'use client';

import { useEffect, useRef } from 'react';

interface TaglineRevealProps {
  phrase: string;
  subtext?: string;
  className?: string;
}

export function TaglineReveal({ phrase, subtext, className = '' }: TaglineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.querySelectorAll<HTMLSpanElement>('.reveal-word').forEach((w) => {
        w.style.opacity = '1';
        w.style.color = '#FFFFFF';
      });
      return;
    }

    const words = el.querySelectorAll<HTMLSpanElement>('.reveal-word');
    const totalWords = words.length;
    let ticking = false;

    const updateWords = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start reveal when entering lower portion of viewport, finish near mid viewport
      const start = windowHeight * 0.9;
      const end = windowHeight * 0.25;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));

      const activeIndex = Math.floor(progress * totalWords);

      words.forEach((w, index) => {
        if (index <= activeIndex) {
          w.style.opacity = '1';
          w.style.color = '#FFFFFF';
        } else {
          w.style.opacity = '0.3';
          w.style.color = '#9B9B9B';
        }
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateWords);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateWords();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const words = phrase.split(' ');

  return (
    <section
      ref={containerRef}
      className={`nexus-section py-24 border-b border-[var(--c-border)] ${className}`}
      aria-label="Core Benefit Statement"
    >
      <div className="max-w-[680px]">
        <p className="font-mono text-xs text-[var(--c-accent)] tracking-widest uppercase mb-6">
          {'//'} ARCHITECTURAL THESIS
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-balance">
          {words.map((word, i) => (
            <span
              key={i}
              className="reveal-word inline-block mr-[0.28em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ opacity: 0.3, color: '#9B9B9B' }}
            >
              {word}
            </span>
          ))}
        </h2>
        {subtext && (
          <p className="mt-6 text-base text-[var(--c-muted)] leading-relaxed text-pretty">
            {subtext}
          </p>
        )}
      </div>
    </section>
  );
}
