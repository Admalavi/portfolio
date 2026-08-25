import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { socials } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-10 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted text-center sm:text-left">
          © 2026 Akshata Malavi. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
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
              className="w-9 h-9 grid place-items-center rounded-full border border-border text-muted hover:text-accent-light hover:border-accent-light transition-colors focus-ring"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
