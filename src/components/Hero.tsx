"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

const titles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "Data Analyst",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentTitle.slice(0, charIndex - 1));
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 -z-10" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {personalInfo.availability}
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 animate-fade-in-up stagger-1">
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        {/* Animated title */}
        <div className="h-14 md:h-16 flex items-center justify-center mb-6 animate-fade-in-up stagger-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-200">
            <span className="font-mono">{displayText}</span>
            <span className="animate-[blink_1s_infinite] border-r-2 border-blue-600 ml-0.5">&nbsp;</span>
          </h2>
        </div>

        {/* Summary */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up stagger-3">
          {personalInfo.summary}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up stagger-4">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900"
          >
            Get in Touch
          </button>
          <a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-16 animate-fade-in-up stagger-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 hover:scale-110 hover:shadow-md"
            aria-label="GitHub profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:scale-110 hover:shadow-md"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-200 hover:scale-110 hover:shadow-md"
            aria-label="Send email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 mx-auto" />
        </button>
      </div>
    </section>
  );
}
