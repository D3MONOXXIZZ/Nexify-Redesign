import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Layers3,
  PenTool,
  ShoppingBag,
  Globe2,
  Check,
  Command,
} from "lucide-react";
import { SITE } from "@/lib/constants";

export const offerings = [
  {
    id: "applications",
    icon: Code2,
    title: "Software that moves your business forward.",
    name: "Web & software development",
    text: "From your first MVP to the platform your team uses every day. Thoughtfully engineered, easy to use, and ready to evolve.",
    tags: ["Web applications", "SaaS platforms", "API integrations"],
  },
  {
    id: "design",
    icon: PenTool,
    title: "Good design makes the complex feel simple.",
    name: "UI/UX & product design",
    text: "Clear user journeys, considered interfaces, and a visual identity that makes your product feel unmistakably yours.",
    tags: ["Product strategy", "Interface design", "Design systems"],
  },
  {
    id: "websites",
    icon: Globe2,
    title: "A website that works as hard as you do.",
    name: "Websites & digital experiences",
    text: "Fast, distinctive websites that tell your story, build confidence, and turn interest into your next conversation.",
    tags: ["Business websites", "WordPress", "Landing pages"],
  },
  {
    id: "commerce",
    icon: ShoppingBag,
    title: "Better shopping. From first click to checkout.",
    name: "Shopify & e-commerce",
    text: "Custom storefronts and thoughtful shopping experiences that put your products first and make buying effortless.",
    tags: ["Shopify development", "Custom themes", "Store integrations"],
  },
];

export function Action({
  href = "/contact",
  children = "Let’s talk about your project",
  secondary = false,
}: {
  href?: string;
  children?: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      className={`studio-button ${secondary ? "secondary" : ""}`}
      href={href}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}

export function Intro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="studio-intro">
      <div className="studio-wrap">
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h1>{title}</h1>
        <p className="intro-description">{children}</p>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="studio-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="studio-wrap hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            Independent software & design agency
          </p>
          <h1>
            Built for
            <br />
            what’s <em>next.</em>
          </h1>
          <p className="hero-description">
            Your ambition. Our craft. We design and build websites and software
            that help your business take its next big step.
          </p>
          <div className="hero-actions">
            <Action />
            <Link href="#capabilities" className="text-link">
              Explore our expertise <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="small-orbit">
              <Globe2 size={17} />
            </span>
            Based in Pakistan. Building beyond borders.
          </div>
        </div>
        <div
          className="brand-universe"
          aria-label="Nexify — Connect, Innovate, Elevate"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <span className="universe-cross cross-one">+</span>
          <span className="universe-cross cross-two">+</span>
          <div className="brand-art">
            <Image
              src="/nexify-brand.png"
              alt="Nexify Concepts silver and blue logo. Connect. Innovate. Elevate."
              width={2047}
              height={2047}
              sizes="(max-width: 800px) 80vw, 440px"
              priority
            />
          </div>
          <div className="orbit-label label-top">
            <span className="status-dot" />
            Ideas into impact
          </div>
          <div className="orbit-label label-bottom">
            <Command size={14} /> Design meets engineering
          </div>
          <div className="universe-caption">
            CONNECT <span>·</span> INNOVATE <span>·</span> ELEVATE
          </div>
        </div>
      </div>
      <div className="studio-wrap hero-baseline">
        <span>STRATEGY → DESIGN → DEVELOPMENT → LAUNCH</span>
        <a href="#capabilities">
          Discover Nexify <span>↓</span>
        </a>
      </div>
    </section>
  );
}

export function Capabilities({ full = false }: { full?: boolean }) {
  return (
    <section id="capabilities" className="studio-section light-section">
      <div className="studio-wrap">
        <div className="section-top">
          <div>
            <p className="eyebrow">01 / Our expertise</p>
            <h2>
              Big ideas.
              <br />
              <span className="ink-muted">Beautifully built.</span>
            </h2>
          </div>
          <p className="section-description">
            One creative and technical partner.
            <br />
            From the first sketch to the final line of code.
          </p>
        </div>
        <div className="service-grid">
          {offerings.map((service, i) => (
            <article key={service.id} id={service.id} className="service-card">
              <div className="card-top">
                <service.icon size={25} strokeWidth={1.5} aria-hidden="true" />
                <span>0{i + 1}</span>
              </div>
              <h3>{service.name}</h3>
              <p>{service.text}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link
                href={full ? "/contact" : `/services#${service.id}`}
                className="service-link"
              >
                {full ? "Discuss your project" : "Explore service"}
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <div className="technology-strip">
          <span>OUR TOOLKIT</span>
          <strong>React</strong>
          <strong>Next.js</strong>
          <strong>Node.js</strong>
          <strong>Shopify</strong>
          <strong>WordPress</strong>
          <strong>Figma</strong>
        </div>
      </div>
    </section>
  );
}

export function ProductPreview({
  kind = "platform",
}: {
  kind?: "platform" | "commerce";
}) {
  return (
    <div className={`product-preview ${kind}`} aria-hidden="true">
      <div className="preview-browser">
        <i />
        <i />
        <i />
        <span>
          {kind === "platform"
            ? "Your next big idea, brought to life"
            : "A considered commerce experience"}
        </span>
      </div>
      {kind === "platform" ? (
        <div className="dashboard-demo">
          <aside>
            <span className="demo-brand">
              <Layers3 size={17} /> orbit
            </span>
            <span className="demo-active">◈ Overview</span>
            <span>▤ Projects</span>
            <span>◷ Activity</span>
            <span>⊕ Team</span>
            <small>WORKSPACE</small>
            <span>Product studio</span>
          </aside>
          <div className="demo-main">
            <div className="demo-heading">
              <div>
                <small>YOUR WORKSPACE, CONNECTED</small>
                <h4>A clearer view.</h4>
              </div>
              <span className="demo-avatar">N</span>
            </div>
            <div className="demo-stats">
              <div>
                <small>In progress</small>
                <b>12</b>
                <em>Across your workspace</em>
              </div>
              <div>
                <small>Milestones complete</small>
                <b>
                  86<span>%</span>
                </b>
                <em>This project cycle</em>
              </div>
            </div>
            <div className="demo-chart">
              <div>
                <b>Project momentum</b>
                <span>This month ↗</span>
              </div>
              <div className="chart-bars">
                {[29, 40, 35, 50, 43, 67, 56, 75, 69, 85, 78, 95].map(
                  (height, i) => (
                    <i key={i} style={{ height: `${height}%` }} />
                  ),
                )}
              </div>
              <div className="chart-axis">
                <span>WEEK 01</span>
                <span>WEEK 02</span>
                <span>WEEK 03</span>
                <span>WEEK 04</span>
              </div>
            </div>
            <div className="demo-task">
              <span className="task-check">✓</span>
              <span>Website experience</span>
              <small>Ready for review</small>
            </div>
          </div>
        </div>
      ) : (
        <div className="commerce-demo">
          <div className="commerce-nav">
            <strong>FORME</strong>
            <span>Objects for everyday living</span>
            <ShoppingBag size={15} />
          </div>
          <div className="commerce-body">
            <div>
              <small>LESS, BUT BETTER.</small>
              <h4>
                Everyday.
                <br />
                Extraordinary.
              </h4>
              <p>
                Considered objects.
                <br />A little more intention.
              </p>
              <span className="commerce-link">Explore the collection ↗</span>
            </div>
            <div className="sculpture">
              <div className="sculpture-shadow" />
              <div className="sculpture-body" />
              <span>THE EVERYDAY COLLECTION / 01</span>
            </div>
          </div>
          <div className="commerce-bottom">
            <span>Made to be lived with.</span>
            <span>Designed to last.</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="studio-section work-section">
      <div className="studio-wrap">
        <div className="section-top">
          <div>
            <p className="eyebrow">02 / Possibilities, made tangible</p>
            <h2>
              A little vision.
              <br />
              <span className="ink-muted">A lot of possibility.</span>
            </h2>
          </div>
          <div className="section-description">
            <p>
              Explore illustrative product concepts that show the kind of
              experiences we can create together.
            </p>
            <span className="concept-note">
              Design concepts · not client case studies
            </span>
          </div>
        </div>
        <div className="work-grid">
          <article>
            <ProductPreview />
            <div className="work-caption">
              <div>
                <p>WEB APPLICATION / PRODUCT DESIGN</p>
                <h3>Make complexity feel effortless.</h3>
              </div>
              <Link
                href="/contact?service=applications"
                aria-label="Discuss a web application"
                className="round-link"
              >
                <ArrowUpRight size={21} />
              </Link>
            </div>
          </article>
          <article>
            <ProductPreview kind="commerce" />
            <div className="work-caption">
              <div>
                <p>E-COMMERCE / BRAND EXPERIENCE</p>
                <h3>Give your brand room to grow.</h3>
              </div>
              <Link
                href="/contact?service=commerce"
                aria-label="Discuss an e-commerce project"
                className="round-link"
              >
                <ArrowUpRight size={21} />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Find the right direction.",
    text: "We get to know your business, your users, and the problem worth solving. Together, we define a clear scope and roadmap.",
    output: "Discovery & strategy",
  },
  {
    title: "Make the idea tangible.",
    text: "We turn the brief into user journeys and thoughtful visual design. You see and shape the experience before development begins.",
    output: "Design & prototype",
  },
  {
    title: "Build with purpose.",
    text: "We develop in clear milestones, share progress, and test across devices. Every detail serves the people using your product.",
    output: "Develop & refine",
  },
  {
    title: "Launch. Learn. Evolve.",
    text: "We bring your product online, hand over the essentials, and plan the next chapter with support that fits your needs.",
    output: "Launch & support",
  },
];

export function Process() {
  return (
    <section className="studio-section process-section">
      <div className="studio-wrap">
        <div className="section-top">
          <div>
            <p className="eyebrow">03 / The way we work</p>
            <h2>
              Clear steps.
              <br />
              <span className="ink-muted">Shared ambition.</span>
            </h2>
          </div>
          <p className="section-description">
            Good work comes from a good partnership.
            <br />
            You’re part of the process, from day one.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((step, i) => (
            <article key={step.title}>
              <div className="step-number">
                0{i + 1}
                <span />
              </div>
              <p className="step-label">{step.output}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Partnership() {
  return (
    <section className="studio-section partnership-section">
      <div className="studio-wrap partnership-grid">
        <div>
          <p className="eyebrow">More than a delivery team</p>
          <h2>
            We care about
            <br />
            what you’re
            <br />
            <em>building.</em>
          </h2>
          <p className="partnership-description">
            Nexify brings design and development together to help ambitious
            businesses move forward. We ask questions, sweat the details, and
            make the work feel collaborative.
          </p>
          <Link href="/about" className="text-link">
            Get to know Nexify <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="principles">
          {[
            [
              "Clarity from the start",
              "A defined scope, clear milestones, and an approach that fits your goals.",
            ],
            [
              "A direct conversation",
              "Work with the people designing and building your product. Your feedback has a place in every stage.",
            ],
            [
              "Care beyond the surface",
              "Accessible interfaces, responsive layouts, and maintainable code are part of the craft.",
            ],
            [
              "Ready for the next chapter",
              "A considered handover and a conversation about support, improvements, and what comes next.",
            ],
          ].map(([title, text], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <Check size={17} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="studio-section faq-section">
      <div className="studio-wrap faq-layout">
        <div>
          <p className="eyebrow">A few things you might ask</p>
          <h2>
            Good questions.
            <br />
            <span className="ink-muted">Straight answers.</span>
          </h2>
          <a href={`mailto:${SITE.email}`} className="text-link">
            Ask us something else <ArrowUpRight size={17} />
          </a>
        </div>
        <div>
          {[
            [
              "What can you help us build?",
              "We design and develop business websites, web applications, SaaS products, WordPress sites, and Shopify stores. We also work on existing products that need a clearer user experience or new functionality.",
            ],
            [
              "How much does a project cost?",
              "The scope determines the investment. Share your goals, priorities, and budget, and we’ll discuss an approach and provide a proposal before work begins.",
            ],
            [
              "Can you improve our existing website?",
              "Yes. We can review your current website or application and recommend improvements to design, usability, performance, and functionality.",
            ],
            [
              "How long will it take?",
              "Timelines depend on scope, integrations, and content readiness. We agree on milestones during discovery so you know what to expect and when feedback is needed.",
            ],
            [
              "Do you work with clients internationally?",
              "Yes. We’re based in Pakistan and collaborate remotely. We agree on communication tools and meeting times that work for your team.",
            ],
          ].map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="studio-cta">
      <div className="studio-wrap">
        <p className="eyebrow">
          <span />
          Your next chapter starts here
        </p>
        <h2>
          Have a good idea?
          <br />
          Let’s make it <em>real.</em>
        </h2>
        <div className="cta-bottom">
          <p>
            Tell us what you have in mind.
            <br />
            We’ll figure out the next step together.
          </p>
          <Action>Start a conversation</Action>
        </div>
      </div>
    </section>
  );
}
