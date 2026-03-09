"use client";

import { useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import { personalInfo } from "@/lib/data";

// ─── Animated counter ───────────────────────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const controls = animate(0, to, {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 1.5,
      onUpdate(v) {
        if (el) el.textContent = Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

// ─── Stats data ─────────────────────────────────────────────────────
const stats = [
  { value: 8, suffix: "+", label: "Years Engineering", detail: "Backend & AI Systems" },
  { value: 85, suffix: "%", label: "Latency Reduced", detail: "Satellite Imagery Pipeline" },
  { value: 50, suffix: "×", label: "Perf. Boost", detail: "Task Queue Optimization" },
];

// ─── Icons ──────────────────────────────────────────────────────────
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

// ─── Component ──────────────────────────────────────────────────────
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      container.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
      container.style.setProperty("--mouse-y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid animate-grid-pulse" />

      {/* Mouse glow */}
      <div className="absolute inset-0 glow pointer-events-none" />

      {/* Animated ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-32 w-[32rem] h-[32rem] orb-accent blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 -left-32 w-96 h-96 orb-accent blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-2/3 right-1/3 w-64 h-64 orb-accent blur-3xl pointer-events-none"
      />

      <div className="section-container relative z-10 w-full py-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 xl:gap-20">

          {/* ── Left: Identity ── */}
          <div className="flex-1 min-w-0">

            {/* Availability pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 animate-status-pulse" />
              <span className="font-mono text-xs text-gray-400">
                {personalInfo.location} &mdash; Open to opportunities
              </span>
            </motion.div>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-mono text-accent text-sm mb-4 tracking-wider"
            >
              Senior AI Software Engineer
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.5rem] font-bold text-white leading-[0.9] mb-6"
            >
              {personalInfo.name}
              <span className="text-accent">.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-display text-xl sm:text-2xl text-gray-400 mb-5 max-w-xl leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Terminal prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex items-center gap-2 font-mono text-sm text-gray-600 mb-10"
            >
              <span className="text-accent/60">$</span>
              <span>expertise</span>
              <span className="text-accent/40 mx-0.5">→</span>
              <span>backend</span>
              <span className="text-white/20 mx-0.5">·</span>
              <span>AI</span>
              <span className="text-white/20 mx-0.5">·</span>
              <span>distributed systems</span>
              <span className="inline-block w-[7px] h-[14px] bg-accent/50 ml-0.5 animate-cursor-blink" />
            </motion.div>

            {/* Social + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="flex items-center gap-5 flex-wrap"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-gray-500 hover:text-accent transition-colors duration-200"
              >
                <GitHubIcon />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-gray-500 hover:text-accent transition-colors duration-200"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="text-gray-500 hover:text-accent transition-colors duration-200"
              >
                <MailIcon />
              </a>

              <div className="w-px h-5 bg-white/10 mx-1" />

              <a
                href="#projects"
                className="group font-mono text-sm text-gray-400 hover:text-accent transition-colors flex items-center gap-2"
              >
                View my work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-y-0.5 transition-transform">
                  <path d="M8 3v10M3 8l5 5 5-5" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* ── Right: Stats panel ── */}
          <div className="flex flex-row lg:flex-col gap-3 lg:gap-4 w-full lg:w-auto lg:shrink-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.75 + i * 0.15,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`stat-card flex-1 lg:flex-none lg:w-60 ${
                  i === 1 ? "lg:ml-8" : ""
                } ${
                  i === 0 ? "animate-float" : i === 1 ? "animate-float-mid" : "animate-float-slow"
                }`}
                style={{ animationDelay: `${i * 2}s` }}
              >
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-accent tabular-nums">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-display text-sm sm:text-base font-semibold text-white mt-1">
                  {stat.label}
                </div>
                <div className="font-mono text-xs text-gray-500 mt-0.5 hidden sm:block">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
