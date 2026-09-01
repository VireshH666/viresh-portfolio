"use client";

import React, { useState, useMemo } from "react";
import type { SkillCategory, Skill } from "@/types/portfolio.types";
import { Container, Section, SectionHeading } from "@/components/ui";
import { portfolioConfig } from "@/config";
import { cn } from "@/lib/utils";

interface SkillCategoryMeta {
  category: SkillCategory;
  title: string;
  tagline: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
}

const skillCategoriesMeta: SkillCategoryMeta[] = [
  {
    category: "Machine Learning & Deep Learning",
    title: "Machine Learning & Deep Learning",
    tagline: "Neural network architectures, classification algorithms, and LLMs.",
    iconBg: "bg-indigo-500/15 border-indigo-500/30",
    iconColor: "text-indigo-400",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    category: "Programming",
    title: "Programming",
    tagline: "Core scripting, systems programming, and type-safe development.",
    iconBg: "bg-cyan-500/15 border-cyan-500/30",
    iconColor: "text-cyan-400",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    category: "Data & Visualization",
    title: "Data & Visualization",
    tagline: "Data manipulation, numerical processing, and BI dashboard analysis.",
    iconBg: "bg-emerald-500/15 border-emerald-500/30",
    iconColor: "text-emerald-400",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    category: "Computer Vision & Audio",
    title: "Computer Vision & Audio",
    tagline: "Image segmentation, feature descriptors, and acoustic MFCC processing.",
    iconBg: "bg-purple-500/15 border-purple-500/30",
    iconColor: "text-purple-400",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    category: "Web & Backend",
    title: "Web & Backend",
    tagline: "Type-safe user interfaces, server components, and API integration.",
    iconBg: "bg-blue-500/15 border-blue-500/30",
    iconColor: "text-blue-400",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    category: "Tools & Databases",
    title: "Tools & Databases",
    tagline: "NoSQL document persistence, version control, and search APIs.",
    iconBg: "bg-rose-500/15 border-rose-500/30",
    iconColor: "text-rose-400",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    category: "Computer Science Fundamentals",
    title: "Computer Science Fundamentals",
    tagline: "Data structures, algorithms, DBMS, operating systems, and networking.",
    iconBg: "bg-amber-500/15 border-amber-500/30",
    iconColor: "text-amber-400",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export function SkillsSection() {
  const { skills } = portfolioConfig;
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const groupedSkills = useMemo(() => {
    const map = new Map<SkillCategory, Skill[]>();
    skills.forEach((skill) => {
      const existing = map.get(skill.category) || [];
      existing.push(skill);
      map.set(skill.category, existing);
    });
    return map;
  }, [skills]);

  return (
    <Section id="skills" spacing="default" className="border-t border-[var(--border)] relative overflow-hidden">
      <Container size="default">
        {/* Section Header */}
        <SectionHeading
          eyebrow="03 / TECHNICAL SKILLS"
          title="Technical Skills & Stack"
          description="A centralized, comprehensive overview of the technologies, tools, libraries, and core computer science concepts I work with."
        />

        {/* Central Technical Stack Nexus Diagram */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[var(--surface-primary)] border border-[var(--border)] card-engineering relative overflow-hidden text-center select-none" aria-hidden="true">
          <div className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider mb-6">
            Technical Stack Architecture
          </div>

          <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-4 relative">
            {/* Top Node: Machine Learning */}
            <div className="px-4 py-2 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold shadow-sm">
              MACHINE LEARNING
            </div>

            {/* Vertical Line */}
            <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 to-cyan-500" />

            {/* Middle Row: Programming <---> Data */}
            <div className="flex items-center justify-center gap-6 w-full">
              <div className="px-4 py-2 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold shadow-sm">
                PROGRAMMING
              </div>

              {/* Central Core Cross Point */}
              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-md shadow-indigo-500/50" />

              <div className="px-4 py-2 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold shadow-sm">
                DATA & ANALYSIS
              </div>
            </div>

            {/* Vertical Line */}
            <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-500 to-blue-500" />

            {/* Bottom Node: Web / Applications */}
            <div className="px-4 py-2 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold shadow-sm">
              WEB / APPLICATIONS
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillCategoriesMeta.map((meta, idx) => {
            const categorySkills = groupedSkills.get(meta.category) || [];
            const isHovered = activeCategory === meta.category;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveCategory(meta.category)}
                onMouseLeave={() => setActiveCategory(null)}
                className={cn(
                  "p-6 sm:p-7 rounded-3xl bg-[var(--surface-primary)] border border-[var(--border)] card-engineering flex flex-col justify-between transition-all",
                  isHovered && "border-[var(--primary-accent)] shadow-xl shadow-indigo-500/10 -translate-y-1"
                )}
              >
                <div>
                  {/* Category Header with Large Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm shrink-0 icon-box-interactive ${meta.iconBg} ${meta.iconColor}`}
                    >
                      {meta.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[var(--text-primary)] leading-snug">
                        {meta.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[var(--text-muted)]">
                        {categorySkills.length} competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-5 font-medium">
                    {meta.tagline}
                  </p>
                </div>

                {/* Skill Chips */}
                <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className={cn(
                        "px-3 py-1 rounded-xl text-xs font-mono font-bold bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border)] transition-colors select-none",
                        isHovered && "border-[var(--primary-accent)]/50 bg-[var(--surface-tertiary)]"
                      )}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
