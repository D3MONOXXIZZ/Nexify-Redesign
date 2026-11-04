export const SITE = {
  name: "Nexify Concepts",
  tagline: "Connect. Innovate. Elevate.",
  description:
    "Nexify Concepts is a software and web development agency building web applications, business websites, Shopify stores, and thoughtful digital experiences. Based in Pakistan. Working worldwide.",
  url: "https://www.nexifyconcepts.store",
  email: "nexifyconcepts@gmail.com",
  phone: "+923045615939",
  phoneDisplay: "+92 304 5615939",
  whatsapp: "923045615939",
  whatsappUrl: "https://wa.me/923045615939",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "WhatsApp", href: SITE.whatsappUrl, icon: "whatsapp" },
  { label: "Email", href: `mailto:${SITE.email}`, icon: "email" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com", icon: "github" },
] as const;

export const SERVICES = [
  {
    id: "shopify",
    title: "Shopify Development",
    description:
      "High-converting storefronts, custom themes, and headless commerce architectures built for scale and performance.",
    icon: "shopping-bag",
    highlights: ["Custom themes", "Headless commerce", "Conversion optimization"],
  },
  {
    id: "fullstack",
    title: "Full-Stack Applications",
    description:
      "Robust web applications with modern APIs, databases, and cloud-native infrastructure designed for growth.",
    icon: "layers",
    highlights: ["Next.js & React", "API design", "Cloud deployment"],
  },
  {
    id: "custom",
    title: "Custom Web Experiences",
    description:
      "Bespoke digital products with immersive interactions, storytelling, and brand-defining interfaces.",
    icon: "sparkles",
    highlights: ["Brand storytelling", "Motion design", "3D & WebGL"],
  },
  {
    id: "uiux",
    title: "UI/UX Optimization",
    description:
      "Research-driven design systems, usability audits, and conversion-focused interfaces that users love.",
    icon: "layout",
    highlights: ["Design systems", "Usability audits", "A/B testing"],
  },
  {
    id: "frontend",
    title: "Scalable Frontend Systems",
    description:
      "Component libraries, performance engineering, and maintainable architectures for enterprise teams.",
    icon: "code",
    highlights: ["Component libraries", "Core Web Vitals", "CI/CD pipelines"],
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We align on goals, audience, and technical requirements through workshops and competitive analysis.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Wireframes evolve into high-fidelity prototypes with motion specs and design system foundations.",
  },
  {
    step: "03",
    title: "Engineering & Build",
    description:
      "Agile sprints deliver production-grade code with rigorous QA, accessibility, and performance benchmarks.",
  },
  {
    step: "04",
    title: "Launch & Growth",
    description:
      "Deployment, monitoring, and ongoing optimization ensure your product continues to perform.",
  },
] as const;

export const PROJECTS = [
  {
    id: "aurora-commerce",
    title: "Aurora Commerce",
    category: "Shopify · E-commerce",
    description: "Headless Shopify storefront with 40% faster load times and custom checkout flow.",
    gradient: "from-cyan-500/20 to-blue-600/20",
    tags: ["Shopify", "Next.js", "Stripe"],
  },
  {
    id: "pulse-saas",
    title: "Pulse Analytics",
    category: "Full-Stack · SaaS",
    description: "Real-time analytics dashboard serving 50K+ daily active users with sub-100ms queries.",
    gradient: "from-violet-500/20 to-purple-600/20",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "vertex-brand",
    title: "Vertex Brand Studio",
    category: "Custom Experience",
    description: "Award-worthy brand site with scroll-driven storytelling and cinematic micro-interactions.",
    gradient: "from-emerald-500/20 to-teal-600/20",
    tags: ["Framer Motion", "WebGL", "CMS"],
  },
  {
    id: "nexus-platform",
    title: "Nexus Platform",
    category: "Enterprise · Frontend",
    description: "Design system and component library adopted across 12 product teams globally.",
    gradient: "from-amber-500/20 to-orange-600/20",
    tags: ["Design System", "Storybook", "TypeScript"],
  },
] as const;

export const TESTIMONIALS = [
  {
    id: "1",
    quote:
      "Nexify Concepts transformed our e-commerce presence. Revenue increased 62% within three months of launch, and the site feels genuinely premium.",
    author: "Sarah Chen",
    role: "CEO",
    company: "Lumina Retail",
  },
  {
    id: "2",
    quote:
      "Their engineering team delivered a complex SaaS platform on time and under budget. The attention to performance and accessibility was exceptional.",
    author: "Marcus Webb",
    role: "CTO",
    company: "Dataflow Systems",
  },
  {
    id: "3",
    quote:
      "From discovery to launch, the process was transparent and collaborative. Our new brand experience has become our strongest sales asset.",
    author: "Elena Rodriguez",
    role: "Marketing Director",
    company: "Arc Studios",
  },
  {
    id: "4",
    quote:
      "The frontend architecture they built scales effortlessly. Our developers ship features 3x faster with the design system they delivered.",
    author: "James Okonkwo",
    role: "VP Engineering",
    company: "Scalepoint",
  },
] as const;

export const STATS = [
  { value: "120+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
] as const;
