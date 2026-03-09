"use client";

import { motion } from "framer-motion";
import { aboutText, personalInfo } from "@/lib/data";

const impactStats = [
  { value: "8+", label: "Years engineering", sub: "backend & AI" },
  { value: "85%", label: "Latency slashed", sub: "satellite imagery" },
  { value: "50×", label: "Perf. multiplier", sub: "task queue" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subheading">// About</p>
          <h2 className="section-heading">
            Building at the intersection of
            <br />
            <span className="text-accent">backend infrastructure</span> and{" "}
            <span className="text-accent">AI</span>.
          </h2>
        </motion.div>

        {/* Impact stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 grid grid-cols-3 gap-6 max-w-2xl"
        >
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="border-t border-accent/30 pt-4"
            >
              <div className="font-display text-3xl sm:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="font-display text-sm font-semibold text-gray-300 mt-1 capitalize">
                {stat.label}
              </div>
              <div className="font-mono text-xs text-gray-600 mt-0.5">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio + meta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 max-w-3xl"
        >
          <p className="text-gray-400 text-lg leading-relaxed">{aboutText}</p>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>8+ years experience</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-status-pulse" />
              <span>Open to opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
