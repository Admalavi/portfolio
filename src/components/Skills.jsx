import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { skillCategories } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="02. skills"
          title="Technical Skills"
          description="Technologies and concepts I've worked with across coursework, internships, and personal projects."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, ci) => (
            <Reveal key={category.title} delay={ci * 0.06}>
              <div className="theme-surface glass rounded-2xl p-6 h-full">
                <h3 className="font-display text-lg font-semibold mb-5">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, si) => {
                    const Icon = skill.icon;
                    return (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -3, borderColor: "var(--color-accent-light)" }}
                        transition={{ duration: 0.3, delay: si * 0.03 }}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-3 py-2 text-sm text-muted"
                      >
                        <Icon className="text-accent-light" size={15} />
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
