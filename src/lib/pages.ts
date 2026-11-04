import { SITE } from "./constants";

export const ROUTES = {
  home: "/",
  services: "/services",
  process: "/process",
  work: "/work",
  testimonials: "/testimonials",
  about: "/about",
  contact: "/contact",
} as const;

export type RouteKey = keyof typeof ROUTES;

export const PAGE_META = {
  home: {
    title: "Premium Web Development Agency",
    description: SITE.description,
  },
  services: {
    title: "Web Development Services",
    description:
      "Shopify development, full-stack applications, custom web experiences, UI/UX optimization, and scalable frontend systems—engineered for conversion and growth.",
  },
  process: {
    title: "Our Development Process",
    description:
      "A transparent, collaborative workflow from discovery through launch—designed to de-risk projects and deliver exceptional digital products on schedule.",
  },
  work: {
    title: "Portfolio & Case Studies",
    description:
      "Explore how Nexify Concepts engineers high-performance e-commerce, SaaS platforms, brand experiences, and enterprise design systems for ambitious teams.",
  },
  testimonials: {
    title: "Client Testimonials",
    description:
      "Read what founders, CTOs, and marketing leaders say about partnering with Nexify Concepts on transformative digital projects.",
  },
  about: {
    title: "About Nexify Concepts",
    description:
      "Meet the team behind premium digital engineering—where creative vision meets technical precision for startups and enterprises worldwide.",
  },
  contact: {
    title: "Contact & Consultation",
    description:
      "Schedule a free consultation with Nexify Concepts. Tell us about your project—we respond within one business day.",
  },
} as const;

export const SERVICE_DETAILS = [
  {
    id: "shopify",
    outcomes: [
      "Higher conversion rates through optimized checkout and merchandising",
      "Faster storefront performance with Core Web Vitals in the green",
      "Flexible architecture ready for headless and international expansion",
    ],
    deliverables: [
      "Custom Shopify theme or headless storefront",
      "Payment, shipping, and inventory integrations",
      "Analytics, SEO, and conversion tracking setup",
    ],
  },
  {
    id: "fullstack",
    outcomes: [
      "Secure, scalable backends that grow with your user base",
      "Real-time features and third-party API integrations",
      "Production deployment with monitoring and CI/CD",
    ],
    deliverables: [
      "Application architecture and database design",
      "REST or GraphQL APIs with authentication",
      "Admin dashboards and role-based access",
    ],
  },
  {
    id: "custom",
    outcomes: [
      "Memorable brand experiences that differentiate in crowded markets",
      "Scroll-driven storytelling and motion that feels intentional",
      "CMS workflows your marketing team can own",
    ],
    deliverables: [
      "High-fidelity interactive prototypes",
      "Custom frontend with performance budgets",
      "Content management and editorial tooling",
    ],
  },
  {
    id: "uiux",
    outcomes: [
      "Reduced friction across critical user journeys",
      "Consistent interfaces via scalable design systems",
      "Measurable uplift from usability-driven iterations",
    ],
    deliverables: [
      "User research summaries and journey maps",
      "Wireframes, prototypes, and design specifications",
      "Component libraries aligned to your brand",
    ],
  },
  {
    id: "frontend",
    outcomes: [
      "Faster feature delivery for distributed product teams",
      "Predictable performance across devices and networks",
      "Maintainable codebases with strong typing and testing",
    ],
    deliverables: [
      "Shared component library and documentation",
      "Performance audits and remediation plans",
      "Developer experience tooling and pipelines",
    ],
  },
] as const;

export const PROCESS_DETAILS = [
  {
    step: "01",
    duration: "1–2 weeks",
    activities: [
      "Stakeholder workshops and success metrics alignment",
      "Technical discovery and stack recommendations",
      "Competitive and UX landscape review",
    ],
    deliverable: "Project brief, roadmap, and scoped proposal",
  },
  {
    step: "02",
    duration: "2–4 weeks",
    activities: [
      "Information architecture and user flows",
      "Visual design and motion direction",
      "Interactive prototypes for key journeys",
    ],
    deliverable: "Approved designs and design system foundations",
  },
  {
    step: "03",
    duration: "4–12+ weeks",
    activities: [
      "Agile sprints with weekly demos",
      "Automated testing and accessibility checks",
      "Performance, security, and QA gates",
    ],
    deliverable: "Production-ready codebase and documentation",
  },
  {
    step: "04",
    duration: "Ongoing",
    activities: [
      "Staged deployment and launch support",
      "Analytics, monitoring, and error tracking",
      "Post-launch optimization and feature iterations",
    ],
    deliverable: "Live product with growth and support plan",
  },
] as const;

export const CAPABILITIES = [
  {
    title: "E-commerce & Retail",
    description:
      "Shopify Plus, custom checkout, subscriptions, and international storefronts built to maximize average order value.",
  },
  {
    title: "SaaS & B2B Platforms",
    description:
      "Multi-tenant architectures, billing integrations, and dashboards that scale from MVP to enterprise.",
  },
  {
    title: "Marketing & Brand Sites",
    description:
      "SEO-optimized, CMS-driven experiences with cinematic motion and storytelling that converts visitors.",
  },
  {
    title: "Design Systems & Platforms",
    description:
      "Cross-product component libraries, Storybook documentation, and governance for large engineering orgs.",
  },
] as const;

export const WHY_NEXIFY = [
  {
    title: "Senior-led delivery",
    description:
      "Every engagement is led by experienced engineers and designers—no hand-offs to junior-only teams.",
  },
  {
    title: "Outcome-focused",
    description:
      "We measure success by business metrics—conversion, retention, and performance—not vanity deliverables.",
  },
  {
    title: "Transparent partnership",
    description:
      "Weekly demos, shared roadmaps, and direct access to the people building your product.",
  },
  {
    title: "Long-term support",
    description:
      "Launch is the beginning. We offer ongoing optimization, feature development, and 24/7 support options.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Marketing sites often launch in 4–8 weeks. E-commerce and SaaS platforms range from 8–16+ weeks depending on scope. We provide a detailed timeline after discovery.",
  },
  {
    question: "Do you work with existing design or code?",
    answer:
      "Yes. We regularly audit, refactor, or extend existing Shopify themes, React codebases, and design systems to improve performance and maintainability.",
  },
  {
    question: "How do you price engagements?",
    answer:
      "We offer fixed-scope project quotes and monthly retainers for ongoing work. After a free consultation, you receive a transparent proposal with milestones.",
  },
  {
    question: "Can you collaborate with our in-house team?",
    answer:
      "Absolutely. We integrate with internal designers, developers, and stakeholders via your preferred tools—Slack, Figma, GitHub, and project management platforms.",
  },
] as const;

export const CONTACT_BENEFITS = [
  "Free 30-minute strategy consultation",
  "Response within one business day",
  "No obligation—clear scope and pricing upfront",
  "NDA available for confidential projects",
] as const;
