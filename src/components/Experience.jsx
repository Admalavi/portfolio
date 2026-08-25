import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { experience } from "../data/profile.js";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="03. experience" title="Experience" />

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 0.1} className="relative pl-10 pb-2">
              <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-accent shadow-[0_0_0_4px_rgba(139,92,246,0.18)]" />
              <div className="theme-surface glass rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                  <span className="font-mono text-xs text-accent-light">{job.duration}</span>
                </div>
                <p className="text-muted font-medium mb-4">{job.company}</p>
                <ul className="space-y-2">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                      <span className="text-accent-light mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
