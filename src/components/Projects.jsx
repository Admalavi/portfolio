import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { projects, secondLiveProject } from "../data/projects.js";

function ProjectCard({ project, delay }) {
  const hasGithub = Boolean(project.github);
  const hasLive = Boolean(project.live);

  return (
    <Reveal delay={delay}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="theme-surface glass rounded-2xl p-6 sm:p-8 h-full flex flex-col"
      >
        <div className="flex items-start justify-between mb-5">
          <span className="font-mono text-sm text-accent-light">{project.number}</span>
          <div className="flex gap-2">
            {hasGithub ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="w-9 h-9 grid place-items-center rounded-full border border-border text-muted hover:text-text hover:border-accent-light transition-colors focus-ring"
              >
                <FaGithub size={15} />
              </a>
            ) : (
              <span
                aria-hidden="true"
                title="GitHub link not yet added"
                className="w-9 h-9 grid place-items-center rounded-full border border-border text-muted/40"
              >
                <FaGithub size={15} />
              </span>
            )}
            {hasLive && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="w-9 h-9 grid place-items-center rounded-full border border-border text-muted hover:text-text hover:border-accent-light transition-colors focus-ring"
              >
                <FaExternalLinkAlt size={13} />
              </a>
            )}
          </div>
        </div>

        <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
        <p className="text-accent-light text-sm font-medium mt-1 mb-4">{project.subtitle}</p>
        <p className="text-muted text-sm leading-relaxed mb-5">{project.description}</p>

        {project.features.length > 0 && (
          <ul className="space-y-1.5 mb-6">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-muted">
                <span className="text-accent-light">▹</span>
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded-md border border-border text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-text hover:text-accent-light transition-colors focus-ring"
            >
              <FaGithub size={14} /> Code
            </a>
          )}
          {hasLive && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-text hover:text-accent-light transition-colors focus-ring"
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          )}
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="04. projects"
          title="Featured Projects"
          description="A selection of projects I've built to apply and grow my skills."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.1} />
          ))}
        </div>

        <div className="mt-10">
          <Reveal delay={0.1}>
            {/* CHANGE HERE: Replace "Live Project" with the actual project name. */}
            {/* CHANGE HERE: Add the real GitHub repository URL for this project. */}
            <div className="theme-surface glass rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="font-mono text-xs text-accent-light">deployed</span>
                <h3 className="font-display text-2xl font-semibold mt-1">
                  {secondLiveProject.title}
                </h3>
                <p className="text-muted text-sm mt-2 max-w-lg">
                  {secondLiveProject.description}
                </p>
              </div>
              <a
                href={secondLiveProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white hover:bg-accent-light transition-colors focus-ring shrink-0 self-start md:self-center"
              >
                <FaExternalLinkAlt size={13} /> View Live
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
