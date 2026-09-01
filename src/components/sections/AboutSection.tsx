"use client";

import React from "react";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";

const focusAreas = [
  {
    number: "01",
    title: "Machine Learning & Deep Learning",
    tag: "Neural Networks · Ensembles",
    badgeBg: "bg-[var(--primary-lavender)] text-[#111111] dark:text-[#ffffff]",
    glowBg: "bg-[var(--primary-lavender)]/15",
    description: "Designing classification models, deep neural networks (CNN, LSTM), and ensemble architectures with Scikit-learn and TensorFlow.",
    iconText: "ML",
  },
  {
    number: "02",
    title: "Computer Vision & Image Processing",
    tag: "Segmentation · OpenCV",
    badgeBg: "bg-[var(--secondary-sky)] text-[#09090b] dark:text-[#090a10]",
    glowBg: "bg-[var(--secondary-sky)]/15",
    description: "Building automated image preprocessing, region segmentation, color moment extraction, and GLCM texture classification pipelines.",
    iconText: "CV",
  },
  {
    number: "03",
    title: "AI-Assisted Web Applications",
    tag: "Next.js · SerpAPI · LLMs",
    badgeBg: "bg-[#e11d48] dark:bg-[var(--accent-pink)] text-white dark:text-[#090a10]",
    glowBg: "bg-[var(--accent-pink)]/15",
    description: "Constructing full-stack discovery workflows combining public search endpoints, LLM structured extraction, MongoDB persistence, and type-safe frontends.",
    iconText: "AI",
  },
  {
    number: "04",
    title: "Signal Processing & Audio ML",
    tag: "Librosa · MFCC · Spatial",
    badgeBg: "bg-[var(--accent-mint)] text-[#09090b] dark:text-[#090a10]",
    glowBg: "bg-[var(--accent-mint)]/15",
    description: "Extracting Mel-Frequency Cepstral Coefficients (MFCC) and exploring spatial audio representations for acoustic sound event detection.",
    iconText: "SP",
  },
];

export function AboutSection() {
  return (
    <Section id="about" spacing="default" className="border-t-2 border-[var(--border)] relative">
      <Container size="default">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="01 // OVERVIEW"
          title="About Me"
          description="Data Science Engineering student combining machine learning modeling, computer vision diagnostic pipelines, and modern full-stack web engineering to solve real-world problems."
        />

        {/* 4 Creative Focus Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area) => (
            <div
              key={area.number}
              className="p-6 sm:p-7 rounded-3xl bg-[var(--surface-primary)] border-2 border-[var(--border)] neo-card flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Subtle Corner Glow Accent */}
              <div
                className={`absolute -top-12 -right-12 w-28 h-28 rounded-full ${area.glowBg} blur-2xl pointer-events-none group-hover:scale-150 transition-transform`}
                aria-hidden="true"
              />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold font-mono text-xs border-2 border-[var(--border)] neo-tag ${area.badgeBg}`}>
                      {area.iconText}
                    </div>
                    <span className="text-xs font-mono font-bold text-[var(--text-muted)]">
                      FOCUS {area.number}
                    </span>
                  </div>
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border-2 border-[var(--border)] neo-tag ${area.badgeBg}`}>
                    {area.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[var(--text-primary)] mb-2.5">
                  {area.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                  {area.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>Applied Field</span>
                <span className="text-[var(--text-primary)] font-bold">● Active Practice</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
