"use client";

import React from "react";
import {
  Container,
  Section,
  Badge,
  buttonVariants,
} from "@/components/ui";
import { portfolioConfig } from "@/config";
import { cn } from "@/lib/utils";

const targetRoles = [
  "Data Science Intern",
  "Machine Learning Intern",
  "AI / Computer Vision",
  "Software Development",
];

export function ContactSection() {
  const { personalProfile, socialLinks } = portfolioConfig;

  return (
    <Section id="contact" spacing="default" className="border-t-2 border-[var(--border)] relative">
      <Container size="default">
        {/* Large Final CTA Container with Playful Neo-Card Aesthetic */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[var(--surface-primary)] border-2 border-[var(--border)] neo-card relative overflow-hidden text-center max-w-4xl mx-auto">
          {/* Eyebrow Status */}
          <div className="mb-4 inline-flex items-center justify-center">
            <Badge variant="coral" dot size="md">
              Open to Internship Opportunities
            </Badge>
          </div>

          {/* Large Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--text-primary)] mb-4">
            Let&apos;s Connect & Build Together
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            Available for student internship roles in machine learning model development, computer vision diagnostic pipelines, or full-stack software applications.
          </p>

          {/* Target Role Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {targetRoles.map((role) => (
              <span
                key={role}
                className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[var(--surface-secondary)] text-[var(--text-primary)] border-2 border-[var(--border)] neo-tag"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Large Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            {/* Email Button */}
            {personalProfile.email && (
              <a
                href={`mailto:${personalProfile.email}`}
                className={cn(
                  buttonVariants({ variant: "coral", size: "lg" }),
                  "font-bold"
                )}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
            )}

            {/* Phone Button */}
            {personalProfile.phone && (
              <a
                href={`tel:${personalProfile.phone.replace(/[^0-9+]/g, "")}`}
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "font-bold"
                )}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Phone
              </a>
            )}

            {/* GitHub Button */}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "lavender", size: "lg" }),
                  "font-bold"
                )}
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
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
                  buttonVariants({ variant: "sky", size: "lg" }),
                  "font-bold"
                )}
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
                LinkedIn
              </a>
            )}

            {/* Resume Button */}
            {personalProfile.resumeUrl && (
              <a
                href={personalProfile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "font-bold"
                )}
                aria-label="Download Resume"
              >
                Resume ↗
              </a>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
