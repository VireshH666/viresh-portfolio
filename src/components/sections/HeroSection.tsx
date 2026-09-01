"use client";

import React from "react";
import { Container, Section, buttonVariants } from "@/components/ui";
import { portfolioConfig } from "@/config";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { personalProfile, socialLinks } = portfolioConfig;

  return (
    <Section spacing="loose" className="relative pt-12 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Radial Glow Blobs (No Grid) */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--primary-accent)]/12 blur-3xl pointer-events-none animate-pulse-glow-ring"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-[var(--secondary-accent)]/12 blur-3xl pointer-events-none animate-pulse-glow-ring"
        style={{ animationDelay: "-3s" }}
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Role, Description, and CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] leading-[1.1]">
              Hi, I&apos;m {personalProfile.name}
            </h1>

            <div className="mt-4">
              <span className="text-xl sm:text-2xl font-bold font-mono gradient-text-hero inline-block">
                {personalProfile.title}
              </span>
            </div>

            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg font-medium">
              {personalProfile.tagline}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full sm:w-auto text-center font-bold bg-[var(--primary-accent)] hover:bg-[var(--accent-hover)] text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
                )}
              >
                View Projects ↓
              </a>

              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "w-full sm:w-auto text-center font-bold bg-[var(--surface-secondary)] hover:bg-[var(--surface-tertiary)] border border-[var(--border)] transition-all hover:scale-105"
                )}
              >
                Contact Me
              </a>

              {/* GitHub Button */}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "w-full sm:w-auto text-center font-bold border-[var(--border)] hover:bg-[var(--surface-secondary)] transition-all hover:scale-105"
                  )}
                  aria-label="View GitHub Profile"
                >
                  <svg className="w-4 h-4 mr-2 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
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
                    "w-full sm:w-auto text-center font-bold border-[var(--border)] hover:bg-[var(--surface-secondary)] transition-all hover:scale-105"
                  )}
                  aria-label="View LinkedIn Profile"
                >
                  <svg className="w-4 h-4 mr-2 text-[#0a66c2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Custom Animated Technical SVG/CSS Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative select-none" aria-hidden="true">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Outer Glowing Concentric Orbit Rings */}
              <div className="absolute inset-2 rounded-full border border-indigo-500/20 animate-slow-spin pointer-events-none" />
              <div className="absolute inset-10 rounded-full border border-dashed border-cyan-500/20 pointer-events-none" />
              <div className="absolute inset-20 rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-cyan-500/15 blur-2xl pointer-events-none animate-pulse-glow-ring" />

              {/* Dynamic Connection Lines (SVG) with animated dashes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" fill="none">
                <line x1="200" y1="200" x2="80" y2="90" stroke="var(--primary-accent)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash-line" />
                <line x1="200" y1="200" x2="320" y2="80" stroke="var(--secondary-accent)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash-line" />
                <line x1="200" y1="200" x2="330" y2="300" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash-line" />
                <line x1="200" y1="200" x2="70" y2="300" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash-line" />
                <line x1="200" y1="200" x2="200" y2="50" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash-line" />
              </svg>

              {/* Central Glowing AI Node */}
              <div className="relative z-20 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[var(--surface-primary)] border-2 border-indigo-500/50 shadow-2xl shadow-indigo-500/30 flex flex-col items-center justify-center p-3 text-center transition-transform hover:scale-110">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-black text-lg mb-1.5 shadow-md shadow-indigo-500/40">
                  AI
                </div>
                <span className="text-xs font-mono font-black text-[var(--text-primary)] tracking-wide">
                  AI
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)] font-bold">
                  Core Node
                </span>
              </div>

              {/* Floating Node 1: PYTHON (Top Left) */}
              <div className="absolute top-8 left-4 z-20 px-3.5 py-2 rounded-2xl bg-[var(--surface-primary)] border border-[var(--border)] shadow-xl flex items-center gap-2 animate-float-node-1 hover:border-indigo-400 cursor-default icon-box-interactive">
                <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono font-bold">
                  Py
                </div>
                <span className="text-xs font-mono font-bold text-[var(--text-primary)]">PYTHON</span>
              </div>

              {/* Floating Node 2: ML (Top Right) */}
              <div className="absolute top-6 right-6 z-20 px-3.5 py-2 rounded-2xl bg-[var(--surface-primary)] border border-[var(--border)] shadow-xl flex items-center gap-2 animate-float-node-2 hover:border-cyan-400 cursor-default icon-box-interactive">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-mono font-bold">
                  ML
                </div>
                <span className="text-xs font-mono font-bold text-[var(--text-primary)]">ML</span>
              </div>

              {/* Floating Node 3: CNN (Bottom Right) */}
              <div className="absolute bottom-10 right-4 z-20 px-3.5 py-2 rounded-2xl bg-[var(--surface-primary)] border border-[var(--border)] shadow-xl flex items-center gap-2 animate-float-node-1 hover:border-purple-400 cursor-default icon-box-interactive">
                <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-mono font-bold">
                  CV
                </div>
                <span className="text-xs font-mono font-bold text-[var(--text-primary)]">CNN</span>
              </div>

              {/* Floating Node 4: DATA (Bottom Left) */}
              <div className="absolute bottom-12 left-2 z-20 px-3.5 py-2 rounded-2xl bg-[var(--surface-primary)] border border-[var(--border)] shadow-xl flex items-center gap-2 animate-float-node-2 hover:border-emerald-400 cursor-default icon-box-interactive">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-mono font-bold">
                  DS
                </div>
                <span className="text-xs font-mono font-bold text-[var(--text-primary)]">DATA</span>
              </div>

              {/* Floating Node 5: AI (Top Center) */}
              <div className="absolute top-0 z-20 px-3 py-1.5 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-[11px] font-mono font-bold text-[var(--text-muted)] animate-float-node-1 icon-box-interactive">
                AI • Network
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
