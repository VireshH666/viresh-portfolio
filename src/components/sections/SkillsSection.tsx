"use client";

import React, { useMemo } from "react";
import type { SkillCategory, Skill } from "@/types/portfolio.types";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";
import { portfolioConfig } from "@/config";

interface SkillBlock {
  category: SkillCategory;
  title: string;
  badgeColor: string;
  tagline: string;
}

const skillBlocks: SkillBlock[] = [
  {
    category: "Machine Learning",
    title: "Machine Learning & Deep Learning",
    badgeColor: "bg-[var(--primary-lavender)] text-[#111111] dark:text-[#ffffff]",
    tagline: "Neural networks, classification algorithms, and ensemble modeling.",
  },
  {
    category: "Computer Vision & Audio",
    title: "Computer Vision & Signal Processing",
    badgeColor: "bg-[var(--secondary-sky)] text-[#111111]",
    tagline: "Image segmentation, texture descriptors, and acoustic MFCC extraction.",
  },
  {
    category: "Development",
    title: "Development & Frameworks",
    badgeColor: "bg-[var(--accent-pink)] text-white",
    tagline: "Type-safe full stack systems, backend APIs, and containerization.",
  },
  {
    category: "Data & Tools",
    title: "Data Analysis & Tools",
    badgeColor: "bg-[var(--accent-mint)] text-[#111111]",
    tagline: "Numerical processing, visual dashboards, APIs, and version control.",
  },
  {
    category: "Databases",
    title: "Databases & Storage",
    badgeColor: "bg-amber-400 text-[#111111]",
    tagline: "Document persistence, database schemas, and geolocation endpoints.",
  },
  {
    category: "Fundamentals",
    title: "Core CS Fundamentals",
    badgeColor: "bg-[var(--surface-secondary)] text-[var(--text-primary)]",
    tagline: "Data structures, algorithms, DBMS, operating systems, and networking.",
  },
];

export function SkillsSection() {
  const { skills } = portfolioConfig;

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
    <Section id="skills" spacing="default" className="border-t-2 border-[var(--border)]">
      <Container size="default">
        {/* Section Header */}
        <SectionHeading
          eyebrow="03 // SKILLS & DOMAINS"
          title="Technical Skills & Competencies"
          description="A comprehensive toolkit across data science, computer vision, signal processing, and full-stack software development."
        />

        {/* 6 Category Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillBlocks.map((block, idx) => {
            const blockSkills = groupedSkills.get(block.category) || [];

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[var(--surface-primary)] border-2 border-[var(--border)] neo-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[var(--border-subtle)]">
                    <span className={`text-xs font-mono font-extrabold px-3 py-1 rounded-md border border-[var(--border)] neo-tag ${block.badgeColor}`}>
                      {block.title}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[var(--text-muted)]">
                      {blockSkills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-5 font-medium">
                    {block.tagline}
                  </p>
                </div>

                {/* Skill Pills / Badges */}
                <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-2">
                  {blockSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border)] neo-tag hover:scale-105 transition-transform cursor-default select-none"
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
