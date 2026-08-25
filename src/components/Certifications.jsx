import { HiOutlineBadgeCheck, HiOutlineExternalLink } from "react-icons/hi";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { certifications } from "../data/certifications.js";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="06. certifications" title="Certifications" />

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <div className="theme-surface glass rounded-2xl p-6 flex items-start gap-4 h-full">
                <span className="w-11 h-11 shrink-0 grid place-items-center rounded-xl bg-surface-light border border-border">
                  <HiOutlineBadgeCheck size={22} className="text-accent-light" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-muted text-sm mt-1">{cert.issuer}</p>
                  {/* CHANGE HERE: Add certificate URL if available. */}
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent-light text-sm mt-3 hover:underline focus-ring"
                    >
                      View Certificate <HiOutlineExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="inline-block text-xs text-muted/60 mt-3">
                      Certificate link coming soon
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
