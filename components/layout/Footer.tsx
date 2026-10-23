"use client";

import { Code2, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2 text-white font-bold">
            <Code2 size={20} className="text-blue-400" />
            <span>TEMBE FONGHO WILLIAM</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
            Back to top
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center text-sm text-white/30">
          <p>
            © {year} TEMBE FONGHO WILLIAM. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
