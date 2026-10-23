"use client";

import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Calendar, MapPin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { experienceTimeline } from "@/data/education";
import { cn } from "@/lib/utils";

const typeConfig = {
  internship: {
    icon: Briefcase,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/25",
    badge: "Internship",
    badgeColor: "text-blue-300 bg-blue-500/10 border-blue-500/20",
  },
  experience: {
    icon: FolderGit2,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/25",
    badge: "Personal & Academic Projects",
    badgeColor: "text-violet-300 bg-violet-500/10 border-violet-500/20",
  },
  degree: {
    icon: Briefcase,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/25",
    badge: "Degree",
    badgeColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
  },
  diploma: {
    icon: Briefcase,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/25",
    badge: "Diploma",
    badgeColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 relative bg-[#080810]"
      aria-label="Work experience"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#2d1b6915_0%,_transparent_60%)]"
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="My Professional Background"
          subtitle="Internship experience and independent development work — presented honestly."
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-white/10 to-transparent"
          />

          <div className="space-y-8">
            {experienceTimeline.map((entry, i) => {
              const config = typeConfig[entry.type];
              const Icon = config.icon;

              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Icon dot */}
                  <div
                    className={cn(
                      "absolute left-0 w-10 h-10 rounded-xl border flex items-center justify-center",
                      config.bg,
                      config.border
                    )}
                    aria-hidden="true"
                  >
                    <Icon size={16} className={config.color} />
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="flex flex-wrap items-start gap-3 mb-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-white font-bold text-lg">
                            {entry.degree}
                          </h3>
                          <span
                            className={cn(
                              "text-xs px-2.5 py-0.5 rounded-full border font-medium",
                              config.badgeColor
                            )}
                          >
                            {config.badge}
                          </span>
                        </div>
                        <p className="text-white/60 font-medium">
                          {entry.institution || (
                            <span className="italic text-white/30">
                              Employer withheld
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 text-xs text-white/40">
                      {(entry.startYear || entry.endYear) && (
                        <span className="flex items-center gap-1.5">
                          <Calendar size={11} />
                          {entry.startYear && entry.endYear
                            ? `${entry.startYear} – ${entry.endYear}`
                            : entry.endYear || entry.startYear}
                        </span>
                      )}
                      {entry.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin size={11} />
                          {entry.location}
                        </span>
                      )}
                    </div>

                    <p className="text-white/55 text-sm leading-relaxed mb-4">
                      {entry.description}
                    </p>

                    {entry.highlights.length > 0 && (
                      <ul className="space-y-1.5">
                        {entry.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className="flex items-start gap-2 text-sm text-white/50"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
