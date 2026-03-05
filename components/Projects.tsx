"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

function ArrowUpRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.25 12.75L12.75 5.25M12.75 5.25H6.75M12.75 5.25V11.25" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subheading">// Featured Work</p>
          <h2 className="section-heading mb-12">
            Things I&apos;ve <span className="text-accent">built</span>.
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card block p-8 sm:p-10 hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">
                        <ArrowUpRight />
                      </span>
                    </div>
                    <p className="font-mono text-accent/70 text-sm mb-1">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">
                      {project.role}
                    </p>
                    <p className="text-gray-400 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-80 shrink-0">
                    <ul className="space-y-3">
                      {project.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-400"
                        >
                          <span className="text-accent mt-1.5 shrink-0">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="currentColor"
                            >
                              <rect width="8" height="8" rx="1" />
                            </svg>
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
