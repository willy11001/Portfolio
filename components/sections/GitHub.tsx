"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";

// Manually maintained repos — add your actual public repos here
const repos = [
  {
    name: "Co_Nest",
    description:
      "A mobile real estate application built for the Cameroonian property market. React Native frontend, Express.js API, MySQL database, and JWT authentication.",
    language: "JavaScript",
    topics: ["react-native", "express", "mysql", "jwt"],
    url: profile.github,
    note: null,
  },
  {
    name: "Portfolio Website",
    description:
      "A responsive portfolio built with Next.js and Tailwind CSS to present project experience, skills, education, and contact information in a polished format.",
    language: "TypeScript",
    topics: ["nextjs", "portfolio", "tailwind", "design"],
    url: profile.github,
    note: null,
  },
];

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-400",
  PHP: "bg-purple-400",
  Java: "bg-red-400",
  Python: "bg-green-400",
  default: "bg-white/40",
};

export default function GitHubSection() {
  return (
    <section
      id="github"
      className="py-24 md:py-32 relative bg-[#080810]"
      aria-label="GitHub repositories"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1d2a6e12_0%,_transparent_50%)]"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Open Source"
          title="GitHub & Engineering Work"
          subtitle="My public repositories and engineering practice on GitHub."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-white/50" />
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-blue-400 transition-colors"
                    aria-label={`View ${repo.name} repository on GitHub`}
                  >
                    {repo.name}
                  </a>
                </div>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${repo.name} on GitHub`}
                  className="text-white/30 hover:text-white transition-colors"
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              <p className="text-white/55 text-sm leading-relaxed mb-4">
                {repo.description}
              </p>

              {repo.note && (
                <p className="text-xs text-yellow-400/60 italic mb-3">
                  ⚠ {repo.note}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3">
                {repo.language && (
                  <span className="flex items-center gap-1.5 text-xs text-white/50">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${languageColors[repo.language] ?? languageColors["default"]}`}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub profile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
            <Github size={36} className="text-white/60" />
            <div>
              <p className="text-white font-semibold text-lg">@{profile.githubUsername}</p>
              <p className="text-white/50 text-sm mt-1">
                Explore all my repositories and contributions on GitHub
              </p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 hover:border-white/30 hover:bg-white/10 text-white font-medium transition-all duration-200"
              aria-label="View GitHub profile"
            >
              <Github size={16} />
              View Full GitHub Profile
              <ExternalLink size={13} className="text-white/50" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
