import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-[var(--gutter)] text-center relative z-10 pt-20">
      <div className="max-w-xl p-8 lg:p-12 bg-[var(--c-surface)] border border-[var(--c-border)] flex flex-col items-center">
        <span className="font-mono text-[var(--t-xs)] text-[var(--c-accent)] tracking-widest uppercase mb-4 flex items-center gap-2">
          <Compass size={14} className="animate-spin" />
          <span>COORDINATE VOID {'//'} 404 SIGNAL LOSS</span>
        </span>

        <h1 className="text-[var(--t-mega)] font-medium leading-none text-[var(--c-fg)] mb-2">
          404
        </h1>

        <h2 className="text-[var(--t-m)] font-mono text-[var(--c-muted)] mb-6">
          Vector Not Found on Calibration Matrix
        </h2>

        <p className="text-[var(--t-body)] text-[var(--c-muted)] leading-relaxed mb-8">
          The requested coordinate does not resolve to an active project or system node.
          Calibrate your compass and return to the primary nexus.
        </p>

        <Link href="/" className="btn-nexus" data-magnetic="0.25">
          <ArrowLeft size={16} />
          <span>Return to primary nexus</span>
        </Link>
      </div>

      <div className="mt-8 font-mono text-[var(--t-xs)] text-[var(--c-muted)]">
        ERROR CODE: 0x404_COORDINATE_UNBOUNDED
      </div>
    </div>
  );
}
