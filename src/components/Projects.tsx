import { Github, ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Portfolio
          </p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that demonstrate my technical capabilities.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden card-hover flex flex-col"
            >
              {/* Project image / placeholder */}
              <div className="relative h-44 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-white/20" />
                </div>
                {/* Decorative dots */}
                <div className="absolute top-3 right-3 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Key features */}
                <ul className="space-y-1.5 mb-5">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      aria-label={`View ${project.name} source code`}
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      aria-label={`View ${project.name} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Want to see more?
          </p>
          <a
            href="https://github.com/Jacob-Ball22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
