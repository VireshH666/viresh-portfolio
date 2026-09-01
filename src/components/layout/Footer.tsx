import React from "react";
import { Container } from "@/components/ui";
import { portfolioConfig } from "@/config";

export function Footer() {
  const { personalProfile, socialLinks } = portfolioConfig;

  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--surface-primary)] py-8 text-xs text-[var(--text-muted)] font-mono">
      <Container size="default">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Copyright */}
          <div className="font-bold text-[var(--text-primary)]">
            © 2026 {personalProfile.name}. All rights reserved.
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] font-bold hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] transition-colors"
              >
                GitHub
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] font-bold hover:border-blue-500 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
            )}
            {personalProfile.email && (
              <a
                href={`mailto:${personalProfile.email}`}
                className="px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] font-bold hover:border-indigo-500 hover:text-indigo-400 transition-colors"
              >
                Email
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
