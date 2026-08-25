import { useState } from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePaperAirplane } from "react-icons/hi";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { profile, socials, contactFormEndpoint } from "../data/profile.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // CHANGE HERE: Add Formspree/Web3Forms endpoint if a hosted contact form is required.
    if (contactFormEndpoint) {
      setStatus("sending");
      try {
        await fetch(contactFormEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } catch {
        setStatus("idle");
        fallbackToMailto();
      }
      return;
    }

    fallbackToMailto();
  };

  const fallbackToMailto = () => {
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="07. contact"
          title="Let's Build Something Together"
          description="I'm always interested in learning, building, and exploring new opportunities. Feel free to connect with me."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <Reveal delay={0.1} className="lg:col-span-2 space-y-5">
            <a
              href={socials.email}
              className="flex items-center gap-4 theme-surface glass rounded-2xl p-5 hover:border-accent-light transition-colors focus-ring"
            >
              <span className="w-11 h-11 grid place-items-center rounded-xl bg-surface-light border border-border">
                <HiOutlineMail size={20} className="text-accent-light" />
              </span>
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="font-medium text-sm">{profile.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 theme-surface glass rounded-2xl p-5">
              <span className="w-11 h-11 grid place-items-center rounded-xl bg-surface-light border border-border">
                <HiOutlineLocationMarker size={20} className="text-accent-light" />
              </span>
              <div>
                <p className="text-xs text-muted">Location</p>
                <p className="font-medium text-sm">{profile.location}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {[
                { href: socials.github, label: "GitHub", icon: FaGithub },
                { href: socials.linkedin, label: "LinkedIn", icon: FaLinkedin },
                { href: socials.leetcode, label: "LeetCode", icon: FaCode },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 grid place-items-center rounded-full border border-border text-muted hover:text-accent-light hover:border-accent-light transition-colors focus-ring"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="theme-surface glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm text-text placeholder:text-muted focus-ring focus:border-accent-light"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm text-text placeholder:text-muted focus-ring focus:border-accent-light"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm text-text placeholder:text-muted focus-ring focus:border-accent-light resize-none"
                  placeholder="Tell me about the opportunity or say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white hover:bg-accent-light transition-colors focus-ring disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <HiOutlinePaperAirplane className="rotate-90" size={16} />
              </button>

              {status === "sent" && (
                <p role="status" className="text-sm text-accent-light">
                  Thanks! Your message client should now be open, or your message was sent.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
