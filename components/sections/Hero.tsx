"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Wifi,
} from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            {/* Availability badge */}
            {profile.availableForRemote && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
                aria-label="Availability status"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <Wifi size={13} />
                {profile.availabilityLabel}
              </motion.div>
            )}

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                TEMBE FONGHO
              </span>
              <span className="block">WILLIAM</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg md:text-xl text-blue-300/80 font-medium"
            >
              {profile.title} · {profile.subtitle}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 text-base md:text-lg text-white/55 leading-relaxed max-w-lg"
            >
              &ldquo;{profile.tagline}&rdquo;
            </motion.p>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-3 flex items-center gap-1.5 text-sm text-white/40"
            >
              <MapPin size={13} />
              {profile.location}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 hover:-translate-y-0.5"
                aria-label="View my projects"
              >
                View My Projects
                <ArrowRight size={16} />
              </button>

              {profile.cvAvailable ? (
                <a
                  href={`/${profile.cvFilename}`}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-blue-500/50 hover:bg-blue-500/10 text-white font-semibold transition-all duration-200"
                  aria-label="Download my CV"
                >
                  <Download size={16} />
                  Download CV
                </a>
              ) : (
                <span
                  title="CV not yet available — see setup instructions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/30 font-semibold cursor-not-allowed select-none"
                  aria-label="CV download not yet configured"
                >
                  <Download size={16} />
                  Download CV
                </span>
              )}

              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-violet-500/50 hover:bg-violet-500/10 text-white font-semibold transition-all duration-200"
                aria-label="Contact me"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-6 flex items-center gap-4"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
              >
                <Github size={18} className="group-hover:text-blue-400 transition-colors" />
                <span>GitHub</span>
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
              >
                <Linkedin size={18} className="group-hover:text-blue-400 transition-colors" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 blur-xl" />
            {/* Image frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="/images/hero-illustration.jpg"
                alt="Abstract software engineering workspace illustration"
                width={640}
                height={400}
                className="w-full object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-violet-600/10" />
            </div>

            {/* Floating tech badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 bg-[#1a1a2e] border border-blue-500/30 rounded-xl px-4 py-2.5 shadow-xl"
            >
              <p className="text-xs text-white/50 mb-1">Tech Stack</p>
              <p className="text-sm font-semibold text-white">React Native · Node.js · MySQL</p>
            </motion.div>

            {/* Floating status card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-[#1a1a2e] border border-violet-500/30 rounded-xl px-4 py-2.5 shadow-xl"
            >
              <p className="text-xs text-white/50 mb-1">Latest Project</p>
              <p className="text-sm font-semibold text-white">Co_Nest App 🏠</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 rounded-full bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
