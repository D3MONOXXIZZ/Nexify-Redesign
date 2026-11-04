'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
  { href: '/work', label: 'Specimens' },
  { href: '/services', label: 'Disciplines' },
  { href: '/process', label: 'Protocol' },
  { href: '/about', label: 'Studio' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Live Karachi (PKT / UTC+5) Telemetry Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        };
        setTimeStr(new Intl.DateTimeFormat('en-GB', options).format(now));
      } catch {
        setTimeStr('12:00:00');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation & mobile drawer close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="site-header" role="banner">
        <Link href="/" className="site-brand" data-magnetic="0.2" aria-label="Nexify Concepts Home">
          <div className="site-mark">
            <Image
              src="/nexify-brand.png"
              alt=""
              width={56}
              height={56}
              priority
              className="object-contain"
            />
          </div>
          <span className="site-title">
            NEXIFY <span className="text-[var(--c-accent)]">CONCEPTS</span>
          </span>
        </Link>

        {/* Studio Telemetry Pill */}
        <div className="site-telemetry-pill hidden md:inline-flex" aria-hidden="true">
          <span className="status-dot" />
          <span>PKT {timeStr || '12:00:00'}</span>
          <span className="text-[rgba(255,255,255,0.2)]">/</span>
          <span>ONLINE</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link roll"
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              <span className="draw">{item.label}</span>
              <span aria-hidden="true" className="draw">
                {item.label}
              </span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-nexus"
            data-magnetic="0.25"
          >
            <span>Initiate brief</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="md:hidden p-2 text-[var(--c-fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-accent)]"
          aria-expanded={open}
          aria-label={open ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-[var(--c-bg)] flex flex-col justify-between p-[var(--gutter)] pt-28 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Overlay"
        >
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[var(--t-xs)] text-[var(--c-muted)] tracking-widest uppercase">
              {'//'} INDEX NAVIGATION
            </span>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-3xl font-medium tracking-tight hover:text-[var(--c-accent)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-[var(--c-border)] pt-6 flex flex-col gap-4 font-mono text-[var(--t-xs)] text-[var(--c-muted)]">
            <div className="flex justify-between items-center">
              <span>LOCATION: KARACHI, PK</span>
              <span className="text-[var(--c-accent)]">PKT {timeStr}</span>
            </div>
            <Link
              href="/contact"
              className="btn-nexus w-full text-center"
              onClick={() => setOpen(false)}
            >
              Initiate project brief
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
