"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  "Languages": "{ }",
  "Backend & APIs": ">>>",
  "Frontend": "</>",
  "Cloud (AWS)": "~~~",
  "DevOps & Containers": " $ ",
  "AI / ML / Gen AI": " * ",
  "Monitoring": "[~]",
  "Architecture": "/#/",
};

// Assign span size for bento-style layout (larger categories get wider cards)
const categorySpan: Record<string, string> = {
  "Languages": "sm:col-span-1",
  "Backend & APIs": "sm:col-span-1",
  "Frontend": "sm:col-span-1",
  "Cloud (AWS)": "sm:col-span-2 lg:col-span-2",
  "DevOps & Containers": "sm:col-span-2 lg:col-span-2",
  "AI / ML / Gen AI": "sm:col-span-2 lg:col-span-2",
  "Monitoring": "sm:col-span-1",
  "Architecture": "sm:col-span-1",
};

export default function TechStack() {
  const categories = Object.entries(techStack);

  return (
    <section id="stack" className="py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subheading">// Tech Stack</p>
          <h2 className="section-heading mb-12">
            Tools of the <span className="text-accent">trade</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`glass-card glow-hover p-5 group cursor-default ${
                categorySpan[category] ?? ""
              }`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-accent/60 bg-accent/[0.08] border border-accent/10 px-2 py-1 rounded">
                  {categoryIcons[category] || "..."}
                </span>
                <h3 className="font-display text-sm font-semibold text-white">
                  {category}
                </h3>
                <span className="ml-auto font-mono text-[10px] text-gray-700">
                  {items.length}
                </span>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-mono text-gray-500 bg-white/[0.025] rounded-md border border-white/[0.04] hover:text-accent hover:border-accent/25 hover:bg-accent/[0.06] transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
