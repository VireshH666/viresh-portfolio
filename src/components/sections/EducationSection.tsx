"use client";

import React from "react";
import {
  Container,
  Section,
  SectionHeading,
  Badge,
} from "@/components/ui";
import { portfolioConfig } from "@/config";

export function EducationSection() {
  const { education, certifications, achievements, hobbies } = portfolioConfig;

  return (
    <Section id="education" spacing="default" className="border-t-2 border-[var(--border)]">
      <Container size="default">
        {/* Section Header */}
        <SectionHeading
          eyebrow="04 // EDUCATION & CREDENTIALS"
          title="Academic Timeline & Certifications"
          description="Formal computer science education, verified NPTEL certifications, and collaborative prototype participation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vertical Timeline of Academic History (7 Cols) */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-extrabold mb-6">
              Academic Milestones
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--border)] space-y-7">
              {education.map((edu, idx) => {
                const badgeColor = idx === 0 ? "lavender" : idx === 1 ? "sky" : "coral";

                return (
                  <div key={edu.id} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--primary-lavender)] border-2 border-[var(--border)] group-hover:scale-125 transition-transform" />

                    <div className="p-5 rounded-3xl bg-[var(--surface-primary)] border-2 border-[var(--border)] neo-card">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-extrabold text-base text-[var(--text-primary)]">
                            {edu.degree}
                          </h4>
                          <p className="text-xs text-[var(--text-secondary)] mt-0.5 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        {edu.score && (
                          <Badge variant={badgeColor} size="sm">
                            {edu.score}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] pt-3 border-t border-[var(--border-subtle)] mt-3">
                        <span>{edu.location}</span>
                        {edu.endDate && (
                          <span className="font-bold text-[var(--text-primary)]">
                            {edu.startDate ? `${edu.startDate} – ${edu.endDate}` : edu.endDate}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Verified Certifications & Activity (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Certifications */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-extrabold mb-4">
                Verified Certifications
              </h3>

              <div className="space-y-3.5">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-2xl bg-[var(--surface-primary)] border-2 border-[var(--border)] neo-card"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-bold text-xs sm:text-sm text-[var(--text-primary)]">
                        {cert.title}
                      </h4>
                      <span className="text-[10px] font-mono font-bold text-[var(--text-muted)]">
                        {cert.date}
                      </span>
                    </div>
                    {cert.description && (
                      <div className="text-xs font-mono font-bold text-[var(--text-blue)]">
                        {cert.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Activities / Ideathon */}
            {achievements && achievements.length > 0 && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-extrabold mb-4">
                  Activities
                </h3>
                {achievements.map((ach) => (
                  <div
                    key={ach.id}
                    className="p-4 rounded-2xl bg-[var(--surface-primary)] border-2 border-[var(--border)] neo-card"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-bold text-xs sm:text-sm text-[var(--text-primary)]">
                        {ach.title}
                      </h4>
                      <span className="text-[10px] font-mono font-bold text-[var(--text-muted)]">
                        {ach.date}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] font-medium">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Subtle Hobbies */}
            {hobbies && hobbies.length > 0 && (
              <div className="pt-2">
                <div className="p-3.5 rounded-2xl bg-[var(--surface-primary)] border-2 border-[var(--border)] text-xs font-mono text-[var(--text-muted)] flex items-center gap-2 neo-tag">
                  <span className="font-bold text-[var(--text-primary)]">Interests:</span>
                  <span className="text-[var(--text-secondary)] font-medium">
                    {hobbies.join(" · ")}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
