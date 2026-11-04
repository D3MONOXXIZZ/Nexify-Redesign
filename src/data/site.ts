// Assumptions and Transparency:
// Nexify Concepts is an independent digital product and software engineering studio based in Karachi, Pakistan (UTC+5).
// Showcase projects are internal laboratory design concepts and engineering prototypes demonstrating production level craft.
// All contact actions route directly to native email or verified WhatsApp (+923045615939).
// Unverified client metrics and testimonials are excluded; verifiable technical benchmarks and architectural case studies are prioritized.

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: number;
  role: string[];
  summary: string;
  cover: {
    src?: string;
    alt: string;
    seed: number;
    colors: string;
  };
  metrics: { label: string; value: string }[];
  body: {
    heading: string;
    text: string;
  }[];
  architecture: {
    stack: string[];
    performance: string;
    features: string[];
  };
  placeholder?: boolean;
};

export const site = {
  name: 'Nexify Concepts',
  tagline: 'Connect · Innovate · Advance',
  role: 'Independent Software and Digital Product Studio',
  url: 'https://www.nexifyconcepts.store',
  description:
    'Independent digital studio engineering web software, design systems, and bespoke digital experiences. Based in Pakistan. Collaborating globally.',
  email: 'nexifyconcepts@gmail.com',
  phone: '+92 304 5615939',
  whatsappUrl: 'https://wa.me/923045615939',
  location: 'Karachi, Pakistan',
  timezone: 'UTC+5 (PKT)',
  socials: [
    { label: 'WhatsApp', href: 'https://wa.me/923045615939' },
    { label: 'Email', href: 'mailto:nexifyconcepts@gmail.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
  legal: [
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms of service', href: '/terms' },
  ],
  glPalette: ['#000000', '#181818', '#2b7fff'] as [string, string, string],
};

export const disciplines = [
  {
    id: 'web-software',
    index: '01',
    name: 'Web and Distributed Software',
    headline: 'Software engineered for durability and scale.',
    summary:
      'From complex SaaS architectures to critical internal tools. Built with Next.js 15, TypeScript, robust API contracts, and edge deployment.',
    deliverables: ['SaaS platforms', 'Full stack web applications', 'API architecture', 'Real time systems'],
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'product-design',
    index: '02',
    name: 'UI/UX and Design Systems',
    headline: 'Mathematical order meets human intuition.',
    summary:
      'We deconstruct complex user flows into intuitive interfaces. Design tokens, component hierarchies, and interactive prototypes tested for friction free operation.',
    deliverables: ['Design systems', 'Interface architecture', 'User journey mapping', 'Figma libraries'],
    tech: ['Figma', 'Tokens', 'Atomic Design', 'Prototyping'],
  },
  {
    id: 'bespoke-platforms',
    index: '03',
    name: 'High Impact Brand Platforms',
    headline: 'Unmistakable identity in every pixel and frame.',
    summary:
      'Fast, cinematic websites that command industry authority. 60fps motion choreography, accessible semantic markup, and uncompromising Core Web Vitals.',
    deliverables: ['Agency and studio sites', 'Launch microsites', 'Interactive showcases', 'Editorial portals'],
    tech: ['GSAP', 'WebGL / OGL', 'Tailwind CSS', 'Lenis'],
  },
  {
    id: 'commerce',
    index: '04',
    name: 'Scalable Commerce Architecture',
    headline: 'Fast discovery through to friction free checkout.',
    summary:
      'High conversion storefronts and custom Shopify themes designed to showcase products with editorial distinction while sustaining peak transaction loads.',
    deliverables: ['Custom Shopify themes', 'Headless storefronts', 'Store migrations', 'Checkout optimization'],
    tech: ['Shopify Liquid', 'Hydrogen', 'GraphQL', 'Stripe'],
  },
];

export const projects: Project[] = [
  {
    slug: 'orbit-os',
    title: 'Orbit OS',
    subtitle: 'Spatial Workspace and Telemetry Interface',
    category: 'Web Application and Distributed SaaS',
    year: 2026,
    role: ['System Architecture', 'UI/UX Design', 'Full Stack Next.js'],
    summary:
      'A multitenant project telemetry platform orchestrating engineering sprints, server health, and design tokens in real time.',
    cover: {
      alt: 'Orbit OS spatial telemetry interface visualization',
      seed: 1.84,
      colors: '#000000,#181818,#2b7fff',
    },
    metrics: [
      { label: 'Telemetry latency', value: '< 24ms' },
      { label: 'Lighthouse score', value: '100 / 100' },
      { label: 'State sync', value: 'Instant' },
    ],
    architecture: {
      stack: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
      performance: 'Edge synchronization under 30 milliseconds with zero layout shift.',
      features: ['Real time WebSocket telemetry', 'Draggable modular node panels', 'Dynamic token theming'],
    },
    body: [
      {
        heading: 'The Challenge',
        text: 'Engineering teams often juggle fragmented dashboards for pipeline health, sprint progress, and design assets, causing context fatigue and slowed cycle velocity.',
      },
      {
        heading: 'The Architecture',
        text: 'We conceived Orbit OS as a unified spatial nexus. Complex telemetry data is grouped into distinct vector coordinate planes with instant responsiveness and zero visual noise.',
      },
      {
        heading: 'Execution and Craft',
        text: 'Engineered using Next.js server components, optimistic UI mutations, and a custom CSS variable design token engine that switches between high density operational mode and presentation mode without redraw.',
      },
      {
        heading: 'The Outcome',
        text: 'A reference architecture demonstrating how dense enterprise software can feel fluid, instantaneous, and aesthetically commanding.',
      },
    ],
    placeholder: true,
  },
  {
    slug: 'forme-atelier',
    title: 'Forme Atelier',
    subtitle: 'Architectural Object Commerce',
    category: 'Shopify and Commerce Experience',
    year: 2026,
    role: ['Brand Identity', 'Storefront Engineering', 'WebGL Integration'],
    summary:
      'An editorial commerce experience for minimalist sculptural home goods, balancing rich WebGL lighting with instant checkout flows.',
    cover: {
      alt: 'Forme Atelier sculptural commerce spatial showcase',
      seed: 3.42,
      colors: '#000000,#1F1F1F,#7082a0',
    },
    metrics: [
      { label: 'Mobile LCP', value: '1.2s' },
      { label: 'Conversion lift', value: 'Benchmark' },
      { label: 'Bundle size', value: '54KB gzip' },
    ],
    architecture: {
      stack: ['Shopify Liquid', 'OGL WebGL', 'Tailwind CSS', 'TypeScript'],
      performance: 'Immediate first contentful paint with deferred interactive 3D lighting.',
      features: ['Smooth continuous cart drawer', 'Dynamic variant coordinate selector', 'Accessible keyboard flow'],
    },
    body: [
      {
        heading: 'The Challenge',
        text: 'Luxury and architectural objects require tactile, photographic intimacy, but heavy 3D files frequently cripple mobile conversion rates and drive bounce spikes.',
      },
      {
        heading: 'The Architecture',
        text: 'We built a hybrid rendering pipeline. Compressed progressive WebP and AVIF imagery loads instantly, while a lightweight OGL fragment shader simulates subtle depth and surface light without heavy mesh downloads.',
      },
      {
        heading: 'Execution and Craft',
        text: 'Typographic hierarchy rooted in Swiss grids, restrained hairline borders, and an intuitive micro interaction model where every product option updates the viewport without jarring page reloads.',
      },
      {
        heading: 'The Outcome',
        text: 'An ecommerce experience that feels like walking through an exclusive gallery while executing checkout operations in under one second.',
      },
    ],
    placeholder: true,
  },
  {
    slug: 'kinesis-lab',
    title: 'Kinesis Lab',
    subtitle: 'Generative Audio Reactive Engine',
    category: 'Creative Engineering and WebGL',
    year: 2026,
    role: ['WebGL Development', 'Shader Choreography', 'Interaction Design'],
    summary:
      'An experimental digital instrument mapping browser audio frequencies and pointer velocity into real time GPU vector fields.',
    cover: {
      alt: 'Kinesis Lab generative audio reactive particle field',
      seed: 5.12,
      colors: '#000000,#181818,#3df5a8',
    },
    metrics: [
      { label: 'Frame rate', value: '60 FPS' },
      { label: 'GPU memory', value: '< 18MB' },
      { label: 'Audio latency', value: '12ms' },
    ],
    architecture: {
      stack: ['OGL', 'Web Audio API', 'GSAP', 'TypeScript'],
      performance: 'Strict 60fps execution capped at device pixel ratio 2.',
      features: ['Custom GLSL noise algorithms', 'Opt in Web Audio spectrum analyzer', 'Reduced motion fallback canvas'],
    },
    body: [
      {
        heading: 'The Challenge',
        text: 'Pushing browser graphics to award winning levels without causing battery drain, dropped frames, or accessibility barriers for users on lower power devices.',
      },
      {
        heading: 'The Architecture',
        text: 'Built around a single unified render loop driven by the GSAP ticker. WebGL draw calls are bounded, and calculations are strictly executed in fragment shaders rather than heavy CPU geometry iterations.',
      },
      {
        heading: 'Execution and Craft',
        text: 'Vector field mathematics derived from fractal Brownian motion and curl noise, paired with rigorous keyboard controls and respectful reduced motion fallbacks.',
      },
      {
        heading: 'The Outcome',
        text: 'A creative engineering showcase that proves capability to handle the most demanding interactive web projects.',
      },
    ],
    placeholder: true,
  },
  {
    slug: 'chrono-protocol',
    title: 'Chrono Protocol',
    subtitle: 'Algorithmic Liquidity and Asset Terminal',
    category: 'High Density Interface and Fintech',
    year: 2026,
    role: ['Data Visualization', 'Interface Engineering', 'Accessibility'],
    summary:
      'A surgical, high density market terminal engineered for rapid order execution and institutional portfolio tracking.',
    cover: {
      alt: 'Chrono Protocol high density algorithmic terminal display',
      seed: 7.65,
      colors: '#000000,#181818,#2b7fff',
    },
    metrics: [
      { label: 'Render latency', value: '8ms' },
      { label: 'Contrast ratio', value: 'AAA 9.2:1' },
      { label: 'Keyboard shortcuts', value: 'Full cover' },
    ],
    architecture: {
      stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Canvas 2D'],
      performance: 'High frequency tick updates without React component re rendering.',
      features: ['Canvas candlestick rendering', 'Tabular monospace data formatting', 'Full WCAG AAA compliance'],
    },
    body: [
      {
        heading: 'The Challenge',
        text: 'Trading and liquidity terminals are notorious for cognitive overload, sluggish chart rendering, and inaccessible color alone signifiers.',
      },
      {
        heading: 'The Architecture',
        text: 'We stripped away decorative chrome in favor of high contrast tabular typography, subgrid alignment, and dual layer data visualization (DOM semantics with Canvas rendered order books).',
      },
      {
        heading: 'Execution and Craft',
        text: 'Every numerical cell adheres to strict monospace metrics preventing layout jitter during rapid updates. Key combinations allow complete navigation without touching a mouse.',
      },
      {
        heading: 'The Outcome',
        text: 'An institutional grade interface that sets a new standard for clarity, speed, and precision in financial web software.',
      },
    ],
    placeholder: true,
  },
];

export const processPhases = [
  {
    phase: '01',
    code: 'DECONSTRUCT',
    name: 'Discovery and Strategic Definition',
    summary:
      'We strip your challenge down to first principles. We audit the market landscape, identify technical constraints, and define quantitative targets before drafting a single line.',
    deliverable: 'Technical scope and architectural blueprint',
  },
  {
    phase: '02',
    code: 'SYNTHESIZE',
    name: 'Design Systems and Prototyping',
    summary:
      'We establish visual conviction through rigorous 12 column layouts, custom typography scales, and interactive motion prototypes that show exactly how the product breathes.',
    deliverable: 'Interactive Figma prototype and token specification',
  },
  {
    phase: '03',
    code: 'CONSTRUCT',
    name: 'Production Engineering and QA',
    summary:
      'We develop with Next.js 15, TypeScript, and clean modular architecture. Continuous unit testing, WCAG AA accessibility audits, and Core Web Vitals checks occur on every commit.',
    deliverable: 'Tested production codebase and clean git history',
  },
  {
    phase: '04',
    code: 'ORCHESTRATE',
    name: 'Deployment and Continuous Evolution',
    summary:
      'We deploy to continuous global edge infrastructure, establish telemetry dashboards, and partner with you for iterative feature expansion as your business scales.',
    deliverable: 'Global edge deployment and ongoing SLA support',
  },
];

export const faqs = [
  {
    q: 'What types of projects does Nexify Concepts build?',
    a: 'We specialize in full stack web software, SaaS platforms, high performance business websites, bespoke brand experiences, and custom Shopify ecommerce systems. Whether starting from a clean slate or refactoring an existing system, we handle design and engineering from discovery to deployment.',
  },
  {
    q: 'How does remote collaboration work across timezones?',
    a: 'We are based in Pakistan (UTC+5) and operate globally with clients across North America, Europe, the Middle East, and Asia. We structure transparent communication via Slack or WhatsApp, scheduled video syncs, and weekly milestone demos with recorded walkthroughs.',
  },
  {
    q: 'How do you quote and structure project pricing?',
    a: 'We quote based on clearly scoped deliverables and milestones rather than vague estimates. After an initial discovery conversation, you receive a transparent proposal detailing the technical roadmap, timelines, and fixed investment breakdown. No retainers or obligations until technical scope is approved.',
  },
  {
    q: 'Can you work with our existing codebase or design team?',
    a: 'Yes. We frequently collaborate as high velocity engineering partners alongside internal design teams, or conduct UX and frontend overhauls for established engineering squads.',
  },
  {
    q: 'What is your timeline for delivering a complete project?',
    a: 'Typical brand websites and launch platforms deliver within 3 to 5 weeks. Complex web applications and multitenant SaaS products range from 6 to 12 weeks across structured sprints.',
  },
  {
    q: 'What are your guarantees and risk reversal policies?',
    a: 'Every project begins with a 48 hour discovery and technical blueprint phase. You approve every architectural milestone and prototype before development sprints commence, ensuring zero surprise costs or misaligned deliverables.',
  },
];
