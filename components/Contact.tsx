"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-32 sm:py-40 relative overflow-hidden">

      {/* Ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] orb-accent blur-3xl pointer-events-none"
      />

      <div className="section-container relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="section-subheading"
        >
          // Say hello
        </motion.p>

        {/* Main asymmetric layout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-16">

          {/* Large heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.9]"
          >
            Let&apos;s build
            <br />
            <span className="text-accent">something</span>
            <br />
            great.
          </motion.h2>

          {/* Right: CTA block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 flex flex-col gap-4 lg:mb-2"
          >
            <p className="text-gray-400 text-base max-w-sm leading-relaxed">
              I&apos;m always open to discussing new projects, interesting problems,
              or opportunities to contribute to something meaningful.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-accent text-white font-mono text-sm font-medium rounded-xl hover:bg-accent-500 transition-all duration-200 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] w-fit"
            >
              Get in touch
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 glass-card font-mono text-sm text-gray-400 hover:text-accent hover:border-accent/20 transition-all glow-hover"
              >
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 glass-card font-mono text-sm text-gray-400 hover:text-accent hover:border-accent/20 transition-all glow-hover"
              >
                GitHub
              </a>
            </div>

            <p className="font-mono text-xs text-gray-700 mt-1">
              {personalInfo.email}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="section-container mt-24 pt-8 section-divider relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-700">
          <p className="font-mono">
            &copy; {new Date().getFullYear()} Fodilu Akorede
          </p>
          <p className="font-mono text-xs">
            Built with Next.js &middot; TypeScript &middot; Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
