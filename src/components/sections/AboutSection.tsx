"use client";

import React from "react";
import { Container, Section, SectionHeading } from "@/components/ui";
import { portfolioConfig } from "@/config";

export function AboutSection() {
  const { personalProfile } = portfolioConfig;

  return (
    <Section id="about" spacing="default" className="border-t border-[var(--border)] relative overflow-hidden">
      <Container size="default">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="01 / ABOUT"
          title="About Me"
          description="A short introduction to my background in data science, engineering focus, and practical project exploration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[var(--surface-primary)] border border-[var(--border)] card-engineering space-y-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
              <p className="text-[var(--text-primary)] font-semibold">
                {personalProfile.aboutText}
              </p>
              <p className="text-sm sm:text-base text-[var(--text-muted)]">
                I focus on turning data science theory into working applications by designing intuitive interfaces and end-to-end analytical pipelines.
              </p>

              {/* Project Focus Summary Chips */}
              <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)]">
                  <span className="text-emerald-400 font-bold block mb-1">01. Crop Vision</span>
                  <span className="text-[var(--text-muted)]">Nutrient deficiency classification</span>
                </div>
                <div className="p-3 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)]">
                  <span className="text-cyan-400 font-bold block mb-1">02. Discovery AI</span>
                  <span className="text-[var(--text-muted)]">Business contact intelligence</span>
                </div>
                <div className="p-3 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)]">
                  <span className="text-purple-400 font-bold block mb-1">03. Audio ML</span>
                  <span className="text-[var(--text-muted)]">Spatial acoustic signal processing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "BUILD → EXPLORE → LEARN" Architecture Card */}
          <div className="lg:col-span-5 flex justify-center relative select-none" aria-hidden="true">
            <div className="w-full max-w-sm rounded-3xl bg-[var(--surface-primary)] border border-[var(--border)] p-7 card-engineering relative overflow-hidden">
              {/* Corner Glow Accent */}
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[var(--primary-accent)]/15 blur-2xl pointer-events-none" />

              {/* Card Title */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-xs font-mono font-extrabold text-[var(--text-primary)] uppercase tracking-wider">
                    Build → Explore → Learn
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-indigo-400 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
                  Methodology
                </span>
              </div>

              {/* Connected Flow Steps: DATA → MODEL → APPLICATION */}
              <div className="space-y-3 font-mono text-xs">
                {/* Node 1: DATA */}
                <div className="p-4 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] flex items-center justify-between hover:border-emerald-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">
                      01
                    </span>
                    <div>
                      <span className="font-black text-[var(--text-primary)] block text-sm">DATA</span>
                      <span className="text-[11px] text-[var(--text-muted)]">Curation & Feature Engineering</span>
                    </div>
                  </div>
                </div>

                <div className="text-center text-[var(--primary-accent)] font-black text-sm">↓</div>

                {/* Node 2: MODEL */}
                <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-between hover:border-indigo-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-indigo-500 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                      02
                    </span>
                    <div>
                      <span className="font-black text-[var(--text-primary)] block text-sm">MODEL</span>
                      <span className="text-[11px] text-indigo-300 font-medium">Training & Optimization</span>
                    </div>
                  </div>
                </div>

                <div className="text-center text-[var(--secondary-accent)] font-black text-sm">↓</div>

                {/* Node 3: APPLICATION */}
                <div className="p-4 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] flex items-center justify-between hover:border-cyan-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-xs">
                      03
                    </span>
                    <div>
                      <span className="font-black text-[var(--text-primary)] block text-sm">APPLICATION</span>
                      <span className="text-[11px] text-[var(--text-muted)]">Interactive Web Deployment</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                <span>Core Philosophy</span>
                <span className="text-[var(--text-primary)] font-bold">Practical Execution</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
