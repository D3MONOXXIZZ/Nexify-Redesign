"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";

const services = {
  applications: "Web & software development",
  design: "UI/UX & product design",
  websites: "Website / WordPress",
  commerce: "Shopify & e-commerce",
};
export function ContactBrief() {
  const [channel, setChannel] = useState<"email" | "whatsapp">("email");
  const [status, setStatus] = useState("");
  const [service, setService] = useState("");
  useEffect(() => {
    const choice = new URLSearchParams(window.location.search).get("service");
    if (choice && choice in services) setService(choice);
  }, []);
  function prepareBrief(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const selected =
      services[service as keyof typeof services] || "Let’s discuss";
    const message = `Hi Nexify,\n\nI’d like to discuss a project.\n\nName: ${String(form.get("name")).trim()}\nEmail: ${String(form.get("email")).trim()}\nCompany: ${form.get("company") || "Not specified"}\nService: ${selected}\n\n${String(form.get("message")).trim()}`;
    const url =
      channel === "whatsapp"
        ? `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`
        : `mailto:${SITE.email}?subject=${encodeURIComponent(`Project enquiry: ${selected}`)}&body=${encodeURIComponent(message)}`;
    setStatus(
      channel === "whatsapp"
        ? "Your brief is ready in WhatsApp. Review it and press Send there to contact us."
        : "Your email app will open with your brief. Review it and press Send there. If it doesn’t open, use the email address on this page or continue via WhatsApp.",
    );
    if (channel === "whatsapp")
      window.open(url, "_blank", "noopener,noreferrer");
    else window.location.href = url;
  }
  return (
    <section className="studio-section contact-section">
      <div className="studio-wrap contact-layout">
        <aside className="contact-aside">
          <h2>
            Good things start
            <br />
            with a conversation.
          </h2>
          <p>
            Tell us about your goals, what you need, and where you’d like to go.
            We’ll help you think through the possibilities.
          </p>
          <div className="contact-channels">
            <div>
              <small>WRITE TO US</small>
              <a href={`mailto:${SITE.email}`}>{SITE.email} ↗</a>
            </div>
            <div>
              <small>CALL OR WHATSAPP</small>
              <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
            </div>
            <div>
              <small>LET’S CHAT</small>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open WhatsApp ↗
              </a>
            </div>
          </div>
          <div className="contact-note">
            Based in Pakistan · Working worldwide
            <br />
            Website, product, or platform — we’re ready to listen.
          </div>
        </aside>
        <form className="brief-form" onSubmit={prepareBrief}>
          <h2>A little about your project.</h2>
          <p>
            Prepare a short brief, then send it through your preferred channel.
          </p>
          <div className="form-grid">
            <label>
              <span>Your name *</span>
              <input
                name="name"
                autoComplete="name"
                placeholder="Alex Morgan"
                required
                maxLength={100}
              />
            </label>
            <label>
              <span>Email address *</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="alex@company.com"
                required
                maxLength={200}
              />
            </label>
          </div>
          <label>
            <span>Company</span>
            <input
              name="company"
              autoComplete="organization"
              placeholder="Your company or project"
              maxLength={150}
            />
          </label>
          <label>
            <span>What can we help you with?</span>
            <select
              name="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">I’d like to discuss an idea</option>
              {Object.entries(services).map(([id, title]) => (
                <option value={id} key={id}>
                  {title}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Tell us about your project *</span>
            <textarea
              name="message"
              rows={5}
              required
              minLength={10}
              maxLength={2000}
              placeholder="Your idea, goals, timeline, and anything else we should know…"
            />
          </label>
          <div className="brief-actions">
            <button
              type="submit"
              className="studio-button"
              onClick={() => setChannel("email")}
            >
              Continue by email <Mail size={16} aria-hidden="true" />
            </button>
            <button
              type="submit"
              className="studio-button secondary"
              onClick={() => setChannel("whatsapp")}
            >
              Use WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
          <p className="handoff-note">
            Opens your email app or WhatsApp. Nothing is sent until you press
            Send there. This form does not store your details.
          </p>
          {status && (
            <div className="contact-status" role="status">
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
