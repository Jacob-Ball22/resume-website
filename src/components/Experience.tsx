"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set(experiences.map((e) => e.id))
  );

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Career
          </p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and the impact I&apos;ve made along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot (desktop) */}
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800 shadow-sm hidden md:block z-10" />

                {/* Card */}
                <div
                  className={`md:ml-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 card-hover ${
                    idx === 0 ? "ring-2 ring-blue-500/20" : ""
                  }`}
                >
                  {/* Card header - always visible */}
                  <button
                    onClick={() => toggleExpanded(exp.id)}
                    className="w-full text-left p-6"
                    aria-expanded={expandedIds.has(exp.id)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {exp.endDate === "Present" && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span>
                            {exp.startDate} – {exp.endDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expand indicator */}
                    <div className="flex items-center gap-1 mt-4 text-sm text-gray-400 dark:text-gray-500">
                      <span>{expandedIds.has(exp.id) ? "Hide" : "Show"} details</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          expandedIds.has(exp.id) ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expandable achievements */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedIds.has(exp.id) ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-800 pt-4">
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
