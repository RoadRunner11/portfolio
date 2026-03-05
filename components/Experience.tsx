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
          {/* Timeline line */}
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-white/[0.06]" />

          <div className="space-y-12">
            {experience.map((role, index) => (
              <motion.div
                key={`${role.company}-${role.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] sm:w-[23px] sm:h-[23px] flex items-center justify-center">
                  <div className="w-[7px] h-[7px] rounded-full bg-accent/40 group-hover:bg-accent transition-colors ring-[3px] ring-surface" />
                </div>

                <p className="font-mono text-xs text-gray-500 mb-1">
                  {role.period}
                </p>
                <h3 className="font-display text-xl font-bold text-white">
                  {role.company}
                </h3>
                <p className="font-mono text-sm text-accent/70 mb-3">
                  {role.title}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
