"use client";

import { motion } from "framer-motion";
import { Lightbulb, BookOpen, Users, Target, Wrench, Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const traits = [
  {
    icon: Lightbulb,
    title: "Problem Solversss",
    description:
      "I approach technical challenges methodically — breaking complex problems into manageable components and exploring solutions iteratively.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description:
      "Software engineering evolves quickly. I stay current by building projects, reading documentation, and applying what I learn in practice.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "I believe great software is built by teams. I value clear communication, code reviews, shared ownership, and building on each other's strengths.",
  },
  {
    icon: Target,
    title: "Detail-Oriented",
    description:
      "I care about software quality — clean code, well-structured APIs, thorough testing, and consistent user experiences matter to me.",
  },
  {
    icon: Wrench,
    title: "Full-Stack Mindset",
    description:
      "I enjoy working across the entire stack — from designing intuitive interfaces to building the APIs and databases that power them.",
  },
  {
    icon: Sparkles,
    title: "Impact-Driven",
    description:
      "I build software that solves real problems. My main project, Co_Nest, was designed to address property search challenges in Cameroon.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative" aria-label="About me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="About Me"
              title="Turning ideas into functional software"
              subtitle=""
            />

            <div className="space-y-5 text-white/65 leading-relaxed text-[15px] md:text-base">
              <p>
                I am <span className="text-white font-medium">TEMBE FONGHO WILLIAM</span>, a Software Engineering graduate from{" "}
                <span className="text-white font-medium">
                  Siantou University Institute
                </span>{" "}
                in Yaoundé, Cameroon, where I completed both my Higher National
                Diploma and my Bachelor&apos;s Degree in Software Engineering. My
                academic journey gave me a strong foundation in programming,
                system design, database management, and software architecture.
              </p>
              <p>
                I enjoy full-stack development because it lets me work on both
                sides of an application — designing user interfaces that feel
                intuitive and building the backend systems that make them work
                reliably. I&apos;ve built web and mobile applications using{" "}
                <span className="text-blue-400">React</span>,{" "}
                <span className="text-blue-400">React Native</span>,{" "}
                <span className="text-blue-400">Node.js</span>,{" "}
                <span className="text-blue-400">Express.js</span>, and{" "}
                <span className="text-blue-400">MySQL</span>, and I document
                APIs clearly using Swagger UI.
              </p>
              <p>
                My most significant project is{" "}
                <span className="text-white font-medium">Co_Nest</span> — a
                mobile real estate application I designed for the Cameroonian
                property market. The project taught me to turn a complex
                real-world problem into a structured technical solution, from
                requirements gathering through to API implementation and mobile
                development.
              </p>
              <p>
                I am actively looking for junior software engineering
                opportunities, remote developer roles, and contract work with
                teams where I can contribute meaningfully, continue growing, and
                build software that matters.
              </p>
            </div>
          </motion.div>

          {/* Right: Traits grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {traits.map((trait, i) => {
                const Icon = trait.icon;
                return (
                  <motion.div
                    key={trait.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group p-5 rounded-xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-blue-500/25 transition-all duration-300"
                  >
                    <div className="inline-flex p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 mb-3 group-hover:bg-blue-500/20 transition-colors">
                      <Icon size={18} className="text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1.5">
                      {trait.title}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed">
                      {trait.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
