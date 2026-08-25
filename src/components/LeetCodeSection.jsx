import { FaCode } from "react-icons/fa";
import Reveal from "./Reveal.jsx";
import { leetcode } from "../data/profile.js";

export default function LeetCodeSection() {
  return (
    <section className="relative py-16 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="theme-surface glass rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-surface-light grid place-items-center border border-border shrink-0">
                <FaCode size={26} className="text-accent-light" />
              </div>
              <div>
                <p className="font-mono text-xs text-accent-light mb-1">{"// problem solving"}</p>
                <h3 className="font-display text-2xl font-semibold">
                  @{leetcode.username} on LeetCode
                </h3>
                <p className="text-muted text-sm mt-1">
                  Sharpening my data structures and algorithms skills.
                </p>
              </div>
            </div>
            <a
              href={leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-text hover:border-accent-light transition-colors focus-ring shrink-0"
            >
              <FaCode size={15} /> View Profile
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
