import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { HiOutlineMail, HiOutlineDownload, HiOutlineArrowRight } from "react-icons/hi";
import { profile, socials } from "../data/profile.js";

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient font-semibold"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function ProfilePhoto() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border border-border bg-surface shadow-[0_0_40px_rgba(139,92,246,0.25)]">
      {!errored ? (
        // CHANGE HERE: Replace public/profile-photo.jpg with your actual profile photo.
        <img
          src={profile.photo}
          alt={`${profile.name}, Computer Science Engineering student`}
          onError={() => setErrored(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full grid place-items-center bg-gradient-to-br from-accent/30 to-surface-light">
          <span className="font-display text-4xl font-semibold text-accent-light">
            {profile.initials}
          </span>
        </div>
      )}
    </div>
  );
}

const TERMINAL_LINES = [
  { text: "const developer = {", indent: 0 },
  { text: `name: "Akshata Malavi",`, indent: 1 },
  { text: `role: "Full-Stack Developer",`, indent: 1 },
  { text: `stack: ["React", "Node", "Java"],`, indent: 1 },
  { text: `focus: "AI/ML + Web Dev",`, indent: 1 },
  { text: `available: true,`, indent: 1 },
  { text: "};", indent: 0 },
];

const BADGES = ["React", "Node.js", "MongoDB", "Java", "Python", "AI/ML"];

function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0 }}
      className="glass rounded-2xl overflow-hidden shadow-2xl w-full max-w-md"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface/60">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-muted">portfolio.js</span>
      </div>
      <div className="p-5 font-mono text-[13px] sm:text-sm leading-relaxed">
        {TERMINAL_LINES.map((line, i) => (
          <motion.div
            key={line.text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.12 }}
            style={{ paddingLeft: `${line.indent * 1.25}rem` }}
          >
            <span className="text-accent-light">{line.text}</span>
          </motion.div>
        ))}
        <motion.span
          aria-hidden="true"
          className="inline-block w-2 h-4 bg-accent-light align-middle ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-32 grid-bg overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/20 blur-[140px]"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center w-full">
        {/* Left column: intro */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-accent-light mb-4"
          >
            {"// welcome to my portfolio"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-text"
          >
            Hi, I&apos;m {profile.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-xl sm:text-2xl font-display text-muted"
          >
            <RotatingRole />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-base sm:text-lg text-muted max-w-xl leading-relaxed"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white hover:bg-accent-light transition-colors focus-ring"
            >
              View My Projects <HiOutlineArrowRight />
            </a>
            {/* CHANGE HERE: Add your latest resume as public/resume.pdf. */}
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-text hover:border-accent-light transition-colors focus-ring"
            >
              Download Resume <HiOutlineDownload />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex items-center gap-4"
          >
            {[
              { href: socials.github, label: "GitHub", icon: FaGithub },
              { href: socials.linkedin, label: "LinkedIn", icon: FaLinkedin },
              { href: socials.leetcode, label: "LeetCode", icon: FaCode },
              { href: socials.email, label: "Email", icon: HiOutlineMail },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="w-11 h-11 grid place-items-center rounded-full border border-border text-muted hover:text-accent-light hover:border-accent-light transition-colors focus-ring"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right column: developer visual */}
        <div className="flex flex-col items-center lg:items-end gap-8">
          <div className="flex items-center gap-5 self-center lg:self-end">
            <ProfilePhoto />
          </div>
          <TerminalCard />
          <div className="flex flex-wrap gap-2 justify-center lg:justify-end max-w-md">
            {BADGES.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.08, duration: 0.4 }}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-muted bg-surface/60"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
