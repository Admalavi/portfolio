import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { profile, stats } from "../data/profile.js";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="01. about" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <Reveal delay={0.1} className="lg:col-span-3">
            <p className="text-lg md:text-xl leading-relaxed text-muted">
              {profile.about}
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3 font-mono text-sm text-muted">
              <p>
                <span className="text-accent-light">location</span> — {profile.location}
              </p>
              <p>
                <span className="text-accent-light">degree</span> — {profile.degree}
              </p>
              <p>
                <span className="text-accent-light">college</span> — {profile.college}
              </p>
              <p>
                <span className="text-accent-light">graduating</span> — {profile.graduationYear}
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.15 + i * 0.08}>
                <div className="theme-surface glass rounded-2xl px-5 py-6 h-full flex flex-col justify-center">
                  <p className="font-display text-3xl sm:text-4xl font-semibold text-gradient">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
