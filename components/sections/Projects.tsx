"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Info,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { featuredProject, otherProjects } from "@/data/projects";

export default function Projects() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const project = featuredProject;

  const visibleFeatures = showAllFeatures
    ? project.features
    : project.features.slice(0, 5);

  return (
    <section id="projects" className="py-24 md:py-32 relative" aria-label="Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="My Work"
          title="Featured Project"
          subtitle="A deep dive into my most significant engineering project."
        />

        {/* ─── CO_NEST CASE STUDY ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden mb-20"
        >
          {/* Header banner */}
          <div className="relative bg-gradient-to-br from-[#1a1a3e] to-[#0d0d2e] border-b border-white/8 p-8 md:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:2rem_2rem]"
            />
            <div className="relative">
              <div className="flex flex-wrap items-start gap-4 justify-between mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 border border-blue-500/25 text-blue-300 mb-3">
                    Academic Project · Mobile Application
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-blue-300/80 text-lg font-medium">
                    {project.tagline}
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/15 hover:border-white/30 text-white text-sm font-medium transition-colors"
                      aria-label="View Co_Nest on GitHub"
                    >
                      <Github size={15} />
                      View Code
                    </a>
                  )}
                  {!project.liveUrl && (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/8 text-white/30 text-sm">
                      No live demo
                    </span>
                  )}
                </div>
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/25 text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Screenshots */}
          <div className="p-8 md:p-12 border-b border-white/8">
            <h4 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-6">
              Visual Showcase
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {project.screenshots.map((shot, i) => (
                <div key={i} className="group">
                  <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[4/3] bg-[#1a1a2e]">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {shot.caption && (
                    <p className="mt-2 text-center text-xs text-white/40">
                      {shot.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/30 italic flex items-start gap-1.5">
              <Info size={12} className="mt-0.5 flex-shrink-0" />
              These visuals are portfolio mockups illustrating the Co_Nest concept. They are not screenshots of a live production deployment.
            </p>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/8">
            {/* Problem & Motivation */}
            <div className="p-8 md:p-10">
              <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs flex items-center justify-center font-bold">1</span>
                Problem & Motivation
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">{project.problem}</p>
            </div>

            {/* My Role */}
            <div className="p-8 md:p-10">
              <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-400 text-xs flex items-center justify-center font-bold">2</span>
                My Role
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">{project.myRole}</p>
            </div>

            {/* Features */}
            <div className="p-8 md:p-10">
              <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs flex items-center justify-center font-bold">3</span>
                Features
              </h4>
              <ul className="space-y-2.5">
                {visibleFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    {feature.implemented ? (
                      <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle size={15} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <span className={feature.implemented ? "text-white/75" : "text-white/40"}>
                        {feature.label}
                      </span>
                      {!feature.implemented && feature.note && (
                        <p className="text-xs text-yellow-400/60 mt-0.5 italic">{feature.note}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              {project.features.length > 5 && (
                <button
                  onClick={() => setShowAllFeatures((v) => !v)}
                  className="mt-3 flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {showAllFeatures ? (
                    <>Show less <ChevronUp size={12} /></>
                  ) : (
                    <>Show all features <ChevronDown size={12} /></>
                  )}
                </button>
              )}
            </div>

            {/* Challenges */}
            <div className="p-8 md:p-10">
              <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs flex items-center justify-center font-bold">4</span>
                Engineering Challenges
              </h4>
              <ul className="space-y-3">
                {project.challenges.map((c, i) => (
                  <li key={i} className="text-sm text-white/60 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learnings */}
          <div className="p-8 md:p-12 border-t border-white/8 bg-white/[0.01]">
            <h4 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs flex items-center justify-center font-bold">5</span>
              What I Learned
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.learnings.map((l, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-white/60 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  {l}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── OTHER PROJECTS ───────────────────────────────────────── */}
        <div>
          <SectionHeader
            eyebrow="More Projects"
            title="Other Work"
            subtitle="Additional projects that reflect my curiosity, systems thinking, and product-focused engineering work."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
