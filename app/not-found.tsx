"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0d0f]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />
      <div className="relative text-center px-4">
        <p className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-violet-400 mb-4">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-white/50 mb-8 max-w-sm mx-auto">
          This page doesn&apos;t exist. Head back to the portfolio to explore my
          work and get in touch.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
          >
            <Home size={16} />
            Back to Portfolio
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white font-semibold transition-colors"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
