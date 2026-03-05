"use client";

import { motion } from "framer-motion";
import { aboutText, personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-container">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-3xl"
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
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Open to opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
