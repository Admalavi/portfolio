import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { education } from "../data/profile.js";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="05. education" title="Education" />

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
          <div className="space-y-6">
            {education.map((item, i) => (
              <Reveal key={item.degree} delay={i * 0.1} className="relative pl-10">
                <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-accent shadow-[0_0_0_4px_rgba(139,92,246,0.18)]" />
                <div className="theme-surface glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-display text-lg sm:text-xl font-semibold">
                      {item.degree}
                    </h3>
                    <span className="font-mono text-xs text-accent-light">{item.duration}</span>
                  </div>
                  <p className="text-muted text-sm mb-3">{item.institution}</p>
                  <p className="inline-flex items-center gap-2 font-mono text-sm text-accent-light">
                    <span className="text-muted font-sans">Score:</span> {item.score}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
