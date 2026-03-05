"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="section-subheading">// Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Let&apos;s build
            <br />
            <span className="text-accent">something</span>.
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            I&apos;m always open to discussing new projects, interesting
            problems, or opportunities to contribute to something meaningful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-mono text-sm font-medium rounded-lg hover:bg-accent-500 transition-colors"
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

            <div className="flex items-center gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 glass-card font-mono text-sm text-gray-400 hover:text-accent hover:border-accent/20 transition-all"
              >
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 glass-card font-mono text-sm text-gray-400 hover:text-accent hover:border-accent/20 transition-all"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="section-container mt-24 pt-8 border-t border-white/[0.06]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p className="font-mono">
            &copy; {new Date().getFullYear()} Fodilu Akorede
          </p>
          <p className="font-mono text-xs">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
