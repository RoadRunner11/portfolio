"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subheading">// Experience</p>
          <h2 className="section-heading mb-16">
            Where I&apos;ve <span className="text-accent">worked</span>.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline gradient line */}
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px timeline-line" />

          <div className="space-y-10">
            {experience.map((role, index) => (
              <motion.div
                key={`${role.company}-${role.period}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Timeline dot — amber for current role, blue for past */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] sm:w-[23px] sm:h-[23px] flex items-center justify-center">
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
                    className={`w-[7px] h-[7px] rounded-full transition-colors duration-300 ring-[3px] ring-surface ${
                      role.period.includes("Present")
                        ? "bg-amber-400 group-hover:bg-amber-300 group-hover:shadow-[0_0_10px_rgba(251,191,36,0.6)] animate-status-pulse"
                        : "bg-accent/40 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="pb-2">
                  <p className={`font-mono text-xs mb-1 tracking-wide ${role.period.includes("Present") ? "text-amber-400/70" : "text-gray-600"}`}>
                    {role.period}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-accent/90 transition-colors duration-300">
                    {role.company}
                  </h3>
                  <p className="font-mono text-sm text-accent/60 mb-3">
                    {role.title}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                    {role.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
