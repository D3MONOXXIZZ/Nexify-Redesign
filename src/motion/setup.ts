// Global motion setup: background shader, loader exit, custom transitions, and concept driver
import { gsap } from 'gsap';
import {
  setBackground,
  setLoaderFormat,
  setLoaderExit,
  setTransition,
  onScroll,
  onPage,
  ease,
} from '@/engine';

// The Convergence Nexus shader: deep obsidian void, coordinate vector field, and electric azure nodal glow
const CONVERGENCE_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform vec2 uResolution;
uniform float uScroll;
uniform float uVelocity;
uniform vec2 uMouse;

// Hash and noise utilities
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

void main() {
  vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
  vec2 uv = (vUv - 0.5) * aspect;
  
  // Dynamic coordinates
  float t = uTime * 0.18;
  vec2 m = (uMouse - 0.5) * aspect;
  
  // Gravitational pull toward mouse & center nexus
  float distToCenter = length(uv);
  float distToMouse = length(uv - m * 0.4);
  vec2 warpedUv = uv + (m - uv) * (0.04 / (distToMouse + 0.35));
  
  // Multi-layered coordinate grid & subtle contour lines
  vec2 gridUv = abs(fract(warpedUv * 8.0 - vec2(0.0, uScroll * 1.5 + t * 0.2)) - 0.5);
  float gridLine = smoothstep(0.48, 0.5, max(gridUv.x, gridUv.y)) * 0.035;
  
  // Radial energy pulse from nexus
  float pulse = sin(distToCenter * 14.0 - t * 2.0) * 0.5 + 0.5;
  float nexusGlow = smoothstep(0.75, 0.0, distToCenter) * 0.14 * (0.8 + 0.2 * pulse);
  
  // Electric azure beam & nodal field
  float beam = smoothstep(0.03, 0.0, abs(warpedUv.x * 0.8 + sin(warpedUv.y * 3.0 + t) * 0.15)) * smoothstep(1.0, 0.0, abs(warpedUv.y));
  
  // Palette definition
  vec3 ground = vec3(0.027, 0.035, 0.055); // #07090e
  vec3 azure = vec3(0.168, 0.498, 1.0);     // #2b7fff (Nexify blue)
  vec3 platinum = vec3(0.95, 0.96, 0.98);   // #f2f5f9
  
  // Color assembly
  vec3 col = ground;
  col += azure * (nexusGlow + beam * 0.08 + gridLine * 0.6);
  col += platinum * (gridLine * 0.15);
  
  // Fine micro-grain
  col += (hash(vUv * uResolution + fract(uTime)) - 0.5) * 0.025;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

export function setupMotion() {
  if (typeof window === 'undefined') return;

  // 1. Initialize the Convergence Background Shader
  setBackground(CONVERGENCE_FRAG);

  // 2. Custom Loader Format: Telemetry percentage with calibrated coordinate prefix
  setLoaderFormat((p) => {
    return `NX-${String(Math.round(p)).padStart(3, '0')}`;
  });

  // 3. Custom Loader Exit: Seamless iris clip and typography handoff
  setLoaderExit((root) => {
    return gsap
      .timeline()
      .to(root.querySelectorAll('[data-loader-out]'), {
        yPercent: -120,
        opacity: 0,
        duration: 0.7,
        ease: ease.inOut,
        stagger: 0.06,
      })
      .to(
        root,
        {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.85,
          ease: ease.inOut,
        },
        '-=0.3'
      );
  });

  // 4. Custom Page Transition: Architectural Curtain Wipe
  setTransition({
    leave: (curtain) =>
      gsap
        .timeline()
        .set(curtain, { autoAlpha: 1 })
        .fromTo(
          curtain.querySelector('.curtain__panel'),
          { yPercent: 100 },
          { yPercent: 0, duration: 0.75, ease: ease.inOut }
        ),
    enter: (curtain) =>
      gsap
        .timeline()
        .to(curtain.querySelector('.curtain__panel'), {
          yPercent: -100,
          duration: 0.8,
          ease: ease.inOut,
        })
        .set(curtain, { autoAlpha: 0 }),
  });

  // 5. Global Scroll & Frame Coordination
  let lastY = 0;
  onScroll(({ y, progress }) => {
    // Top-bar navigation translation on scroll direction
    if (Math.abs(y - lastY) > 6) {
      document.documentElement.classList.toggle('frame-away', y > 200 && y > lastY);
      lastY = y;
    }

    // Update coordinate indicators if present
    const coordEl = document.querySelector('[data-telemetry-scroll]');
    if (coordEl) {
      coordEl.textContent = `${Math.round(progress * 100)}%`;
    }
  });

  // 6. Page Lifecycle registration
  onPage(() => {
    // Reset frame-away state
    document.documentElement.classList.remove('frame-away');
  });
}
