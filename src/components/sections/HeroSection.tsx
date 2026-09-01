"use client";

import React from "react";
import { Container, Section, buttonVariants } from "@/components/ui";
import { portfolioConfig } from "@/config";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { personalProfile, socialLinks } = portfolioConfig;

  return (
    <Section spacing="loose" className="relative pt-10 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Soft Abstract Glowing Orbs (No Grid) */}
      <div
        className="absolute top-10 left-1/4 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[var(--primary-lavender)]/20 dark:bg-[var(--primary-lavender)]/12 blur-3xl pointer-events-none animate-orb-soft"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-72 sm:w-88 h-72 sm:h-88 rounded-full bg-[var(--secondary-sky)]/20 dark:bg-[var(--secondary-sky)]/12 blur-3xl pointer-events-none animate-orb-soft"
        style={{ animationDelay: "-4s" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-5 left-1/3 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[var(--accent-pink)]/15 dark:bg-[var(--accent-pink)]/10 blur-3xl pointer-events-none animate-orb-soft"
        style={{ animationDelay: "-8s" }}
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtitle Tag, Role, Bio, Location & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="underline decoration-[#e11d48] dark:decoration-[var(--accent-pink)] decoration-wavy decoration-2 sm:decoration-4">
                {personalProfile.name}
              </span>
            </h1>

            {/* Creative Minimal Subtitle Directly Under Name - High Contrast */}
            <div className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-primary)] border-2 border-[var(--border)] neo-tag text-xs font-mono font-extrabold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#7c3aed] dark:bg-[var(--primary-lavender)] animate-pulse" />
              <span className="text-[var(--text-primary)]">
                DATA SCIENCE <span className="text-[#e11d48] dark:text-[var(--accent-pink-light)]">•</span> MACHINE LEARNING <span className="text-[#0284c7] dark:text-[var(--secondary-sky)]">•</span> AI
              </span>
            </div>

            {/* Role Title */}
            <div className="mt-4">
              <span className="text-base sm:text-lg font-mono font-bold text-[#111111] dark:text-[#ffffff] bg-[var(--primary-lavender)] px-3.5 py-1 rounded-lg border-2 border-[var(--border)] neo-tag inline-block">
                {personalProfile.title}
              </span>
            </div>

            {/* Tagline / Bio Paragraph */}
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl font-medium">
              Data Science Engineering student with hands-on experience in developing machine learning models and AI-powered applications.
            </p>

            {/* Location Tag */}
            {personalProfile.location && (
              <div className="mt-3 flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#0284c7] dark:bg-[var(--secondary-sky)]" />
                <span>
                  Location: <strong className="text-[var(--text-primary)] font-bold">{personalProfile.location}</strong>
                </span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className={cn(
                  buttonVariants({ variant: "coral", size: "lg" }),
                  "w-full sm:w-auto text-center font-bold"
                )}
              >
                View Projects ↓
              </a>

              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "w-full sm:w-auto text-center font-bold"
                )}
              >
                Contact Me
              </a>

              {/* GitHub Link */}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "w-full sm:w-auto text-center font-bold hover:bg-[#0284c7] hover:text-white dark:hover:bg-[var(--secondary-sky)] dark:hover:text-[#090a10]"
                  )}
                  aria-label="View GitHub Profile"
                >
                  <svg className="w-4 h-4 mr-2 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
              )}

              {/* Resume Button */}
              {personalProfile.resumeUrl && (
                <a
                  href={personalProfile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "sky", size: "lg" }),
                    "w-full sm:w-auto text-center font-bold"
                  )}
                  aria-label="View Resume"
                >
                  Resume ↗
                </a>
              )}

              {/* LinkedIn Button */}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "w-full sm:w-auto text-center font-bold hover:bg-[#e11d48] hover:text-white dark:hover:bg-[var(--accent-pink)] dark:hover:text-[#090a10]"
                  )}
                  aria-label="View LinkedIn Profile"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Creative Technical Pipeline Card with Floating Tags & Code Symbols */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative select-none" aria-hidden="true">
            {/* Floating Technical Words */}
            <div className="absolute -top-5 left-4 z-20 px-3 py-1 rounded-full bg-[var(--primary-lavender)] text-[#111111] dark:text-[#ffffff] border-2 border-[var(--border)] text-xs font-mono font-bold neo-tag animate-float-1">
              Python
            </div>
            <div className="absolute top-1/4 -right-4 z-20 px-3 py-1 rounded-full bg-[var(--secondary-sky)] text-[#09090b] dark:text-[#090a10] border-2 border-[var(--border)] text-xs font-mono font-bold neo-tag animate-float-2">
              ML
            </div>
            <div className="absolute bottom-12 -left-4 z-20 px-3 py-1 rounded-full bg-[#e11d48] dark:bg-[var(--accent-pink)] text-white dark:text-[#090a10] border-2 border-[var(--border)] text-xs font-mono font-bold neo-tag animate-float-3">
              AI
            </div>
            <div className="absolute -bottom-4 right-8 z-20 px-3 py-1 rounded-full bg-[var(--surface-primary)] text-[var(--text-primary)] border-2 border-[var(--border)] text-xs font-mono font-bold neo-tag animate-float-1">
              Data Science
            </div>

            {/* Small Floating Code Symbols - High Contrast */}
            <div className="absolute top-2 right-12 z-10 w-7 h-7 rounded-lg bg-[var(--surface-secondary)] border-2 border-[var(--border)] neo-tag flex items-center justify-center text-xs font-mono font-extrabold text-[var(--text-lavender)] animate-float-2">
              {"{ }"}
            </div>
            <div className="absolute bottom-4 left-10 z-10 w-7 h-7 rounded-lg bg-[var(--surface-secondary)] border-2 border-[var(--border)] neo-tag flex items-center justify-center text-xs font-mono font-extrabold text-[var(--text-pink)] animate-float-3">
              {"</>"}
            </div>
            <div className="absolute top-2/3 -right-2 z-10 w-6 h-6 rounded-full bg-[var(--surface-secondary)] border-2 border-[var(--border)] neo-tag flex items-center justify-center text-[11px] font-mono font-extrabold text-[var(--text-blue)] animate-float-1">
              λ
            </div>

            {/* Central Terminal / Pipeline Visual Card */}
            <div className="w-full max-w-sm rounded-3xl border-2 border-[var(--border)] bg-[var(--surface-primary)] p-6 neo-card relative overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b-2 border-[var(--border)]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#e11d48] dark:bg-[var(--accent-pink)] border border-[var(--border)]" />
                  <span className="w-3 h-3 rounded-full bg-[#0284c7] dark:bg-[var(--secondary-sky)] border border-[var(--border)]" />
                  <span className="w-3 h-3 rounded-full bg-[#7c3aed] dark:bg-[var(--primary-lavender)] border border-[var(--border)]" />
                </div>
                <span className="text-xs font-mono font-extrabold text-[var(--text-primary)]">
                  ML_PIPELINE.py
                </span>
              </div>

              {/* Code Pipeline Flow */}
              <div className="space-y-2 font-mono text-xs text-[var(--text-primary)]">
                <div className="p-2.5 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] flex items-center justify-between font-semibold">
                  <span className="text-[var(--text-muted)] font-bold">01.</span>
                  <span>image → preprocessing</span>
                </div>

                <div className="text-center text-[#e11d48] dark:text-[var(--accent-pink)] font-black text-xs">↓</div>

                <div className="p-2.5 rounded-xl bg-[var(--primary-lavender-muted)] border border-[var(--primary-lavender)] flex items-center justify-between font-bold text-[var(--text-lavender)]">
                  <span>02.</span>
                  <span className="text-[var(--text-primary)]">feature extraction</span>
                </div>

                <div className="text-center text-[#0284c7] dark:text-[var(--secondary-sky)] font-black text-xs">↓</div>

                <div className="p-2.5 rounded-xl bg-[var(--secondary-sky-muted)] border border-[var(--secondary-sky)] flex items-center justify-between font-bold text-[var(--text-blue)]">
                  <span>03.</span>
                  <span className="text-[var(--text-primary)]">CNN / Random Forest</span>
                </div>

                <div className="text-center text-emerald-600 dark:text-emerald-400 font-black text-xs">↓</div>

                <div className="p-2.5 rounded-xl bg-[var(--success-muted)] border border-emerald-500/40 text-[var(--text-mint)] flex items-center justify-between font-bold">
                  <span>04.</span>
                  <span className="text-[var(--text-primary)]">prediction</span>
                </div>
              </div>

              {/* Card Footer status */}
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                <span>Pipeline Status</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">● verified</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
