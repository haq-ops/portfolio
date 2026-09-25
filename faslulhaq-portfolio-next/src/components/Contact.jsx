"use client";

import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { formspreeEndpoint, profile } from "@/data/portfolio";

const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: FaEnvelope },
  { label: "LinkedIn", value: profile.linkedin.replace("https://", ""), href: profile.linkedin, Icon: FaLinkedin, external: true },
  { label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github, Icon: FaGithub, external: true },
  { label: "Location", value: profile.location, Icon: FaMapMarkerAlt },
];

const inputClass =
  "w-full rounded-[10px] border border-line bg-bg px-3.5 py-3 text-ink outline-none transition focus:border-accent";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No Formspree endpoint yet: open the visitor's email app with the message filled in
    if (!formspreeEndpoint) {
      const body = `${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`;
      window.location.href =
        `mailto:${profile.email}?subject=${encodeURIComponent(data.get("subject"))}` +
        `&body=${encodeURIComponent(body)}`;
      setStatus("Your email app should open with the message ready to send.");
      return;
    }

    setStatus("Sending…");
    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("Message sent. I'll reply soon.");
    } catch {
      setStatus(`Message not sent. Please email ${profile.email} directly.`);
    }
  }

  return (
    <section id="contact" className="py-[72px] sm:py-[100px]">
      <div className="container-x">
        <SectionTitle word="Contact" title="Contact Me" />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <h3 className="mb-3 text-[26px] font-semibold">Let&apos;s work together</h3>
            <p className="mb-7 text-muted">
              I&apos;m open to software engineering internships and freelance projects. Send me a message and
              I&apos;ll get back to you.
            </p>

            {contactItems.map(({ label, value, href, Icon, external }) => {
              const content = (
                <>
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-accent/10 text-accent">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 break-words">
                    <small className="block text-[12.5px] text-muted">{label}</small>
                    {value}
                  </span>
                </>
              );
              const cls = "card mb-3.5 flex items-center gap-4 px-[18px] py-3.5 text-ink transition";
              return href ? (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`${cls} hover:translate-x-1.5 hover:border-accent`}
                >
                  {content}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {content}
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="card grid gap-[18px] p-[22px] sm:p-8">
              <div className="grid gap-[18px] sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-medium text-muted">
                  Your name
                  <input name="name" type="text" required autoComplete="name" className={inputClass} />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-muted">
                  Your email
                  <input name="email" type="email" required autoComplete="email" className={inputClass} />
                </label>
              </div>
              <label className="grid gap-1.5 text-sm font-medium text-muted">
                Subject
                <input name="subject" type="text" required className={inputClass} />
              </label>
              <label className="grid gap-1.5 text-sm font-medium text-muted">
                Message
                <textarea name="message" rows={5} required className={`${inputClass} resize-y`} />
              </label>
              <button type="submit" className="btn btn-primary justify-self-start cursor-pointer">
                Send message
              </button>
              <p className="min-h-[1.2em] text-sm text-muted" role="status" aria-live="polite">
                {status}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
