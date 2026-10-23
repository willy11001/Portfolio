"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Server,
  Database,
  Code,
  Wrench,
  Cpu,
  ChevronRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  frontend: Globe,
  mobile: Smartphone,
  backend: Server,
  databases: Database,
  languages: Code,
  tools: Wrench,
  se: Cpu,
};

// Map skill names to Devicons or emoji fallbacks
const skillColors: Record<string, string> = {
  "HTML5": "text-orange-400",
  "CSS3": "text-blue-400",
  "JavaScript": "text-yellow-400",
  "TypeScript": "text-blue-500",
  "React": "text-cyan-400",
  "Next.js": "text-white",
  "Vue.js": "text-emerald-400",
  "React Native": "text-cyan-300",
  "Node.js": "text-green-400",
  "Express.js": "text-white/70",
  "PHP": "text-purple-400",
  "Java": "text-red-400",
  "MySQL": "text-blue-300",
  "MongoDB": "text-green-500",
  "Git": "text-orange-500",
  "GitHub": "text-white",
  "default": "text-blue-300",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative bg-[#080810]"
      aria-label="Technical skills"
    >
      {/* Subtle background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1d2a6e15_0%,_transparent_60%)]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical Skills"
          title="My Technology Stack"
          subtitle="Technologies and practices I work with. Organised by area, without invented proficiency scores."
          centered
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Skill categories">
          <button
            role="tab"
            aria-selected={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeCategory === "all"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            )}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill groups */}
        <div className="space-y-8">
          {filtered.map((category, ci) => {
            const Icon = categoryIcons[category.id] ?? Code;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.06 }}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <Icon size={16} className="text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold">{category.label}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: si * 0.03 }}
                      className="group flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/8 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-200 cursor-default"
                    >
                      <ChevronRight
                        size={11}
                        className={cn(
                          "flex-shrink-0 opacity-0 group-hover:opacity-100 -ml-1 transition-all",
                          skillColors[skill.name] ?? skillColors["default"]
                        )}
                      />
                      <span className="text-sm text-white/75 group-hover:text-white transition-colors font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
