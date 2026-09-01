"use client";

import React from "react";
import { Container, Section, SectionHeading } from "@/components/ui";
import { portfolioConfig } from "@/config";

export function ContactSection() {
  const { personalProfile, socialLinks } = portfolioConfig;

  return (
    <Section id="contact" spacing="default" className="border-t border-[var(--border)] relative overflow-hidden">
      <Container size="default">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="04 / CONTACT"
          title="Get In Touch"
          description="Have an idea, project, or opportunity? Let's connect and build something meaningful."
        />

        {/* Large Statement Showcase Card */}
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-[var(--surface-primary)] border border-[var(--border)] card-engineering relative overflow-hidden text-center max-w-4xl mx-auto">
          {/* Ambient Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[var(--primary-accent)]/10 blur-3xl pointer-events-none" />

          {/* Large Bold Statement */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--text-primary)] mb-4">
            Let&apos;s build something meaningful.
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto mb-10 font-medium">
            Have an idea, project, or opportunity? Let&apos;s connect.
          </p>

          {/* 3 Prominent Large Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {/* Email Me Button */}
            {personalProfile.email && (
              <a
                href={`mailto:${personalProfile.email}`}
                className="p-6 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all group flex flex-col items-center justify-center text-center gap-3"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center icon-box-interactive shadow-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-sm text-[var(--text-primary)]">Email Me</div>
                  <div className="text-xs font-mono text-[var(--text-muted)] group-hover:text-indigo-400 transition-colors truncate max-w-[180px]">
                    {personalProfile.email}
                  </div>
                </div>
              </a>
            )}

            {/* LinkedIn Button */}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group flex flex-col items-center justify-center text-center gap-3"
                aria-label="LinkedIn Profile"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-[#0a66c2] flex items-center justify-center icon-box-interactive shadow-sm">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-sm text-[var(--text-primary)]">LinkedIn</div>
                  <div className="text-xs font-mono text-[var(--text-muted)] group-hover:text-blue-400 transition-colors">
                    viresh-hunasagi
                  </div>
                </div>
              </a>
            )}

            {/* GitHub Button */}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group flex flex-col items-center justify-center text-center gap-3"
                aria-label="GitHub Profile"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center icon-box-interactive shadow-sm">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-sm text-[var(--text-primary)]">GitHub</div>
                  <div className="text-xs font-mono text-[var(--text-muted)] group-hover:text-cyan-400 transition-colors">
                    @VireshH666
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
