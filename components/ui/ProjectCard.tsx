"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Globe } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const statusConfig = {
  completed: { label: "Completed", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
  "in-progress": { label: "In Progress", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" },
  academic: { label: "Academic Project", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
  placeholder: { label: "Coming Soon", color: "text-white/40 bg-white/5 border-white/10" },
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const status = statusConfig[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative rounded-2xl border bg-white/[0.03] overflow-hidden flex flex-col",
        project.placeholder
          ? "border-white/5 border-dashed"
          : "border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/[0.05]"
      )}
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1f] overflow-hidden">
        {project.screenshots[0] ? (
          <Image
            src={project.screenshots[0].src}
            alt={project.screenshots[0].alt}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white/20">
              <div className="text-4xl mb-2">🖼️</div>
              <p className="text-sm">Screenshot coming soon</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f]/80 to-transparent" />
        <div className="absolute top-3 right-3">
          <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full border", status.color)}>
            {status.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-3">
        <div>
          <h3 className={cn("text-lg font-bold mb-1", project.placeholder ? "text-white/30" : "text-white")}>
            {project.name}
          </h3>
          <p className={cn("text-sm leading-relaxed line-clamp-3", project.placeholder ? "text-white/20" : "text-white/60")}>
            {project.description}
          </p>
        </div>

        {/* Tech badges */}
        {!project.placeholder && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/40">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-3 border-t border-white/5">
          {project.githubUrl && !project.placeholder ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
              aria-label={`View ${project.name} on GitHub`}
            >
              <Github size={15} />
              <span>Code</span>
            </a>
          ) : null}
          {project.liveUrl && !project.placeholder ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
              aria-label={`View live demo of ${project.name}`}
            >
              <Globe size={15} />
              <span>Live Demo</span>
            </a>
          ) : null}
          {project.placeholder && (
            <span className="text-xs text-white/20 italic">
              Project details coming soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
