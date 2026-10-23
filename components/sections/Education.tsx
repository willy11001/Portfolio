"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { educationTimeline } from "@/data/education";
import { cn } from "@/lib/utils";

const typeConfig = {
  degree: {
    icon: GraduationCap,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/25",
    label: "Bachelor's Degree",
    labelColor: "text-blue-300 bg-blue-500/10 border-blue-500/20",
  },
  diploma: {
    icon: Award,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/25",
    label: "HND Diploma",
    labelColor: "text-violet-300 bg-violet-500/10 border-violet-500/20",
  },
  internship: {
    icon: GraduationCap,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/25",
    label: "Internship",
    labelColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
  },
  experience: {
    icon: GraduationCap,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/25",
    label: "Experience",
    labelColor: "text-orange-300 bg-orange-500/10 border-orange-500/20",
  },
};

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 md:py-32 relative"
      aria-label="Education"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Education"
          title="Academic Background"
          subtitle="My formal training in software engineering at Siantou University Institute."
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent"
          />

          <div className="space-y-8">
            {educationTimeline.map((entry, i) => {
              const config = typeConfig[entry.type];
              const Icon = config.icon;

              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-16"
                >
                  {/* Icon */}
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

                  <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 hover:border-blue-500/20 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start gap-2 mb-3">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-white font-bold text-lg">
                            {entry.degree}
                          </h3>
                          <span
                            className={cn(
                              "text-xs px-2.5 py-0.5 rounded-full border font-medium",
                              config.labelColor
                            )}
                          >
                            {config.label}
                          </span>
                        </div>
                        <p className="text-white/60 font-medium">
                          {entry.field}
                        </p>
                        <p className="text-blue-300/70 text-sm mt-0.5">
                          {entry.institution}
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
                            : entry.endYear
                              ? `Completed ${entry.endYear}`
                              : entry.startYear}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5">
                        <MapPin size={11} />
                        {entry.location}
                      </span>
                    </div>

                    <p className="text-white/55 text-sm leading-relaxed mb-4">
                      {entry.description}
                    </p>

                    {entry.highlights.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                          Key Areas
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {entry.highlights.map((h, hi) => (
                            <li
                              key={hi}
                              className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/8 text-white/50"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
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
