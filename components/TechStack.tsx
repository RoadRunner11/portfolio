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
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="glass-card p-5 hover:border-accent/15 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-accent/50 bg-accent/[0.06] px-2 py-1 rounded">
                  {categoryIcons[category] || "..."}
                </span>
                <h3 className="font-display text-sm font-semibold text-white">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-mono text-gray-400 bg-white/[0.03] rounded-md border border-white/[0.04] hover:text-accent hover:border-accent/20 transition-colors cursor-default"
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
