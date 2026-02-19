import { GraduationCap, Award, ExternalLink, BookOpen } from "lucide-react";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Academic
          </p>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic background and professional certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Degrees */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              Degrees
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 card-hover"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                        {edu.school}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {edu.year} · {edu.location}
                      </p>
                    </div>
                    {edu.gpa && (
                      <div className="flex-shrink-0 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-center">
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                          {edu.gpa}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">GPA</div>
                      </div>
                    )}
                  </div>

                  {edu.honors && edu.honors.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {edu.honors.map((honor) => (
                        <span
                          key={honor}
                          className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full"
                        >
                          <Award className="w-3 h-3" />
                          {honor}
                        </span>
                      ))}
                    </div>
                  )}

                  {edu.coursework.length > 0 && (
                    <div>
                      <p className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                        <BookOpen className="w-4 h-4" />
                        Relevant Coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2.5 py-1 text-xs font-medium bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6">
              <Award className="w-5 h-5 text-blue-600" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 card-hover"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                          {cert.issuer} · {cert.year}
                        </p>
                      </div>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 p-1.5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label={`View ${cert.name} certification`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
