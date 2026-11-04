// First-load sequence. Progress follows REAL work (fonts + critical images), eased by GSAP,
// with a floor so it reads as intentional and a ceiling so it never becomes a usability problem.
import { gsap } from 'gsap';
import { ease, prefersReducedMotion } from './env';

let format = (p: number) => String(Math.round(p)).padStart(3, '0');
/** Customize the counter text, e.g. a clock, a year, a frame count. p goes 0 -> 100. */
export const setLoaderFormat = (fn: (p: number) => string) => {
  format = fn;
};
let exit: ((root: HTMLElement) => gsap.core.Timeline) | null = null;
/** Replace the exit choreography (the loader -> hero handoff). Return a timeline. */
export const setLoaderExit = (fn: (root: HTMLElement) => gsap.core.Timeline) => {
  exit = fn;
};

const MIN = 1.0; // seconds: long enough to read as a designed moment
const MAX = 2.2; // seconds: a longer loader is a usability problem

function criticalAssets(): Promise<unknown>[] {
  if (typeof document === 'undefined') return [];
  const imgs = [
    ...document.querySelectorAll<HTMLImageElement>(
      'img[data-critical], [data-intro] img, [data-gl-instant] img'
    ),
  ];
  return [
    document.fonts ? document.fonts.ready : Promise.resolve(),
    ...imgs.map((i) => (i.complete ? Promise.resolve() : i.decode().catch(() => {}))),
  ];
}

export async function runLoader(): Promise<void> {
  if (typeof document === 'undefined') return;
  const root = document.getElementById('loader');
  if (!root) return;

  if (prefersReducedMotion()) {
    await Promise.race([Promise.all(criticalAssets()), wait(MAX)]);
    await gsap.to(root, { autoAlpha: 0, duration: 0.25 });
    return finish(root);
  }

  const count = root.querySelector<HTMLElement>('[data-loader-count]');
  const bar = root.querySelector<HTMLElement>('[data-loader-bar]');
  const tasks = criticalAssets();
  let done = 0;
  const shown = { v: 0 };
  const target = { v: 0 };
  tasks.forEach((t) =>
    t.then(() => {
      done++;
      target.v = (done / tasks.length) * 100;
    })
  );
  const start = performance.now();

  await new Promise<void>((resolve) => {
    let resolved = false;
    const tick = () => {
      if (resolved) return;
      const elapsed = (performance.now() - start) / 1000;
      const timeCap = Math.min(100, (elapsed / MIN) * 100);
      const isTimeUp = elapsed >= MAX;
      const areAssetsReady = target.v >= 100 && elapsed >= MIN;

      if (isTimeUp || areAssetsReady) {
        shown.v = 100;
      } else {
        const goal = Math.min(Math.max(target.v, 20), timeCap);
        shown.v += (goal - shown.v) * 0.25;
      }

      if (count) count.textContent = format(shown.v);
      if (bar) bar.style.transform = `scaleX(${shown.v / 100})`;

      if (shown.v >= 99.8) {
        resolved = true;
        shown.v = 100;
        if (count) count.textContent = format(100);
        if (bar) bar.style.transform = 'scaleX(1)';
        gsap.ticker.remove(tick);
        resolve();
      }
    };
    gsap.ticker.add(tick);
  });

  // Exit. Author per project with setLoaderExit(): it is the first handoff every visitor sees.
  if (exit) {
    await exit(root);
    return finish(root);
  }
  await gsap
    .timeline()
    .to(root.querySelectorAll('[data-loader-out]'), {
      yPercent: -110,
      duration: 0.6,
      ease: ease.inOut,
      stagger: 0.04,
    })
    .to(
      root,
      { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.75, ease: ease.inOut },
      '-=0.3'
    );
  finish(root);
}

function finish(root: HTMLElement) {
  root.hidden = true;
  document.documentElement.classList.add('is-loaded');
}

const wait = (s: number) => new Promise((r) => setTimeout(r, s * 1000));
