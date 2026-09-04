import { useState } from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePaperAirplane } from "react-icons/hi";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { profile, socials, web3FormsAccessKey } from "../data/profile.js";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Once you add a Web3Forms access key in src/data/profile.js, submissions
    // are emailed directly to you — no mail app or backend required.
    if (web3FormsAccessKey) {
      setStatus("sending");
      try {
        const res = await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: web3FormsAccessKey,
            subject: `Portfolio message from ${form.name}`,
            from_name: form.name,
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        });
        const data = await res.json();
        if (data.success) {
          setStatus("sent");
          setForm({ name: "", email: "", message: "" });
        } else {
          throw new Error(data.message || "Submission failed");
        }
      } catch {
        setStatus("error");
      }
      return;
    }

    // CHANGE HERE: Add a Web3Forms access key above for direct email delivery.
    // Until then, this falls back to opening the visitor's own email app.
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
                  {web3FormsAccessKey
                    ? "Thanks! Your message has been sent."
                    : "Thanks! Your email app should now be open — just hit send there."}
                </p>
              )}
              {status === "error" && (
                <p role="status" className="text-sm text-red-400">
                  Something went wrong sending your message. Please try again, or email me directly at{" "}
                  <a href={socials.email} className="underline">{profile.email}</a>.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}